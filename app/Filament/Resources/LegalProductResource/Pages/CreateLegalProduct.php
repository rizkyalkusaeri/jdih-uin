<?php

namespace App\Filament\Resources\LegalProductResource\Pages;

use App\Filament\Resources\LegalProductResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CreateLegalProduct extends CreateRecord
{
    protected static string $resource = LegalProductResource::class;

    public function mount(): void
    {
        parent::mount();
    }

    protected function getHeaderActions(): array
    {
        return [
            \Filament\Actions\Action::make('generate_ai')
                ->label('Generate Metadata (AI)')
                ->icon('heroicon-o-sparkles')
                ->color('primary')
                ->schema([
                    \Filament\Forms\Components\Select::make('type_id')
                        ->label('Jenis Produk Hukum')
                        ->options(\App\Models\Type::where('status', 'active')->pluck('name', 'id'))
                        ->searchable()
                        ->required(),
                    \Filament\Forms\Components\FileUpload::make('document')
                        ->label('File Lampiran (PDF)')
                        ->disk('public')
                        ->helperText('Upload dokumen, AI akan mengisi form utama secara otomatis.')
                        ->acceptedFileTypes(['application/pdf'])
                        ->maxSize(10240)
                        ->directory('temp-generation')
                        ->required(),
                ])
                ->action(function (array $data, CreateLegalProduct $livewire) {
                    $typeId = $data['type_id'];
                    $tempFilePathRel = $data['document'];
                    $tempFilePathAbs = \Illuminate\Support\Facades\Storage::disk('public')->path($tempFilePathRel);

                    try {
                        // 1. Get Config
                        $type = \App\Models\Type::with('category')->findOrFail($typeId);
                        $fieldConfig = $type->category->field_config ?? [];

                        // 2. Call AI Processor
                        $processor = new \App\Services\AIProcessor();
                        $extractedData = $processor->extractMetadata($tempFilePathAbs, $fieldConfig);

                        if (empty($extractedData)) {
                            \Filament\Notifications\Notification::make()->title('Gagal mengekstrak data dari dokumen.')->danger()->send();
                            return;
                        }

                        // 3. Move file to permanent location
                        $newFileName = basename($tempFilePathRel);
                        $newPath = 'legal-products/' . $newFileName;
                        if (\Illuminate\Support\Facades\Storage::disk('public')->exists($tempFilePathRel)) {
                            \Illuminate\Support\Facades\Storage::disk('public')->copy($tempFilePathRel, $newPath);
                        }

                        // 4. Prepare Data
                        $fillData = array_merge($extractedData, [
                            'type_id' => $typeId,
                            'category_id' => $type->category_id,
                            'field_config' => $fieldConfig, // Important trigger form visibility
                            'file_path' => [$newPath], // Wrap in array for FileUpload
                        ]);

                        // 5. Auto-Slug
                        if (isset($fillData['title'])) {
                            $fillData['slug'] = Str::slug($fillData['title']);
                        }

                        // 6. Auto-Create Relations
                        $relations = [
                            'publisher_name' => [\App\Models\Publisher::class, 'publisher_id'],
                            'place_name' => [\App\Models\Place::class, 'place_id'],
                            'signer_name' => [\App\Models\Signer::class, 'signer_id'],
                            'location_name' => [\App\Models\Location::class, 'location_id'],
                            'legal_field_name' => [\App\Models\LegalField::class, 'legal_field_id'],
                        ];

                        foreach ($relations as $nameKey => $config) {
                            [$modelClass, $idKey] = $config;
                            if (!empty($fillData[$nameKey])) {
                                $name = $fillData[$nameKey];
                                $record = $modelClass::firstOrCreate(
                                    ['name' => $name],
                                    ['slug' => Str::slug($name)]
                                );
                                $fillData[$idKey] = $record->id;
                            }
                        }

                        if (isset($fillData['publisher_id'])) {
                            $initiator = \App\Models\Initiator::firstOrCreate(
                                ['name' => $fillData['publisher_name']],
                                ['slug' => Str::slug($fillData['publisher_name'])]
                            );
                            $fillData['initiator_id'] = $initiator->id;
                        }

                        // 7. Fill Main Form
                        $livewire->form->fill($fillData);

                        \Filament\Notifications\Notification::make()->title('Form berhasil diisi oleh AI!')->success()->send();
                    } catch (\Exception $e) {
                        \Filament\Notifications\Notification::make()
                            ->title('Terjadi Kesalahan')
                            ->body($e->getMessage())
                            ->danger()
                            ->send();
                    }
                })
                ->modalHeading('Generate Metadata Produk Hukum')
                ->modalDescription('Mohon tunggu sebentar setelah menekan tombol. Proses analisis dokumen memakan waktu sekitar 5-10 detik. Jangan tutup modal ini.')
                ->modalSubmitActionLabel('Mulai Proses AI')
                ->color('primary')
        ];
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = Auth::user()->id;

        return $data;
    }

    protected function afterCreate(): void
    {
        $this->record->replacedDocuments()->each(function ($replacedDoc) {
            $replacedDoc->update(['status' => 'inactive']);
        });
    }
}
