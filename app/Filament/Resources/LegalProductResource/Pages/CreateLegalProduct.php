<?php

namespace App\Filament\Resources\LegalProductResource\Pages;

use App\Filament\Resources\LegalProductResource;
use App\Models\Submission;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CreateLegalProduct extends CreateRecord
{
    protected static string $resource = LegalProductResource::class;

    public ?int $submissionId = null;

    public function mount(): void
    {
        parent::mount();

        // Check for submission_id query parameter and pre-fill form
        $this->submissionId = request()->query('submission_id');

        if ($this->submissionId) {
            $submission = Submission::with('type.category')->find($this->submissionId);

            if ($submission && $submission->status === Submission::STATUS_COMPLETED) {
                $type = $submission->type;
                $fieldConfig = $type?->category?->field_config ?? [];

                $this->form->fill([
                    'type_id' => $submission->type_id,
                    'category_id' => $type?->category_id,
                    'title' => $submission->title,
                    'slug' => Str::slug($submission->title),
                    'field_config' => $fieldConfig,
                ]);
            }
        }
    }

    protected function getHeaderActions(): array
    {
        return [
            \Filament\Actions\Action::make('generate_ai')
                ->label('Generate Metadata (AI)')
                ->icon('heroicon-o-sparkles')
                ->color('primary')
                ->closeModalByClickingAway(false)
                ->closeModalByEscaping(false)
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
                            'publisher_id' => [\App\Models\Publisher::class, 'publisher_id'],
                            'place_id' => [\App\Models\Place::class, 'place_id'],
                            'signer_id' => [\App\Models\Signer::class, 'signer_id'],
                            'location_id' => [\App\Models\Location::class, 'location_id'],
                            'legal_field_id' => [\App\Models\LegalField::class, 'legal_field_id'],
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
                            $publisher = \App\Models\Publisher::class::find($fillData['publisher_id']);
                            $initiator = \App\Models\Initiator::firstOrCreate(
                                ['name' => $publisher->name],
                                ['slug' => Str::slug($publisher->name)]
                            );
                            $fillData['initiator_id'] = $initiator->id;
                        }

                        $fillData['status'] = 'active';

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
                ->extraAttributes([
                    'class' => 'cursor-pointer',
                    'wire:loading.class' => 'opacity-50 cursor-wait',
                    'wire:loading.attr' => 'disabled',
                ])
                ->color('primary'),
            \Filament\Actions\Action::make('import_serat')
                ->label('Import Serat UIN')
                ->icon('heroicon-o-cloud-arrow-down')
                ->color('success')
                ->modalHeading('Import Data API Serat')
                ->modalContent(view('filament.pages.serat-import-modal'))
                ->modalSubmitAction(false)
                ->closeModalByClickingAway(false)
                ->closeModalByEscaping(false)
                ->modalWidth('7xl')
                ->modalCancelAction(fn($action) => $action->label('Tutup')),
        ];
    }

    #[\Livewire\Attributes\On('fill-from-serat')]
    public function fillFromSerat(array $data)
    {
        $typeId = $data['type_id'];

        // Get Config
        $type = \App\Models\Type::with('category')->find($typeId);
        if (!$type) return;

        $fieldConfig = $type->category->field_config ?? [];

        // Prepare fill data
        $fillData = [
            'type_id' => $typeId,
            'category_id' => $type->category_id,
            'field_config' => $fieldConfig,
            'title' => $data['title'],
            'number' => $data['number'],
            'determination_date' => $data['determination_date'],
            'published_date' => $data['determination_date'],
            'link' => $data['link'],
            'source' => $data['source'],
            // Link is used, file_path can be skipped if valid logic exists
            'attachment_type' => 'url',
            'file_path' => [],
        ];

        // Handle Status
        $fillData['status'] = 'active';

        // Auto Slug
        $fillData['slug'] = Str::slug($data['title']);

        // Signer Logic
        if (!empty($data['signer_name'])) {
            $signer = \App\Models\Signer::firstOrCreate(
                ['name' => $data['signer_name']],
                ['slug' => Str::slug($data['signer_name'])]
            );
            $fillData['signer_id'] = $signer->id;
        }


        $publisher = \App\Models\Publisher::firstOrCreate(
            ['name' => 'UIN Sunan Gunung Djati Bandung'],
            ['slug' => Str::slug('UIN Sunan Gunung Djati Bandung')]
        );

        $fillData['publisher_id'] = $publisher->id;

        $place = \App\Models\Place::firstOrCreate(
            ['name' => 'Bandung'],
            ['slug' => Str::slug('Bandung')]
        );

        $fillData['place_id'] = $place->id;

        $initiator = \App\Models\Initiator::firstOrCreate(
            ['name' => $publisher->name],
            ['slug' => Str::slug($publisher->name)]
        );

        $fillData['initiator_id'] = $initiator->id;

        $this->form->fill($fillData);

        \Filament\Notifications\Notification::make()
            ->title('Form diisi dari Serat API')
            ->success()
            ->send();

        $this->unmountAction();
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = Auth::user()->id;

        // Attach submission if coming from submission flow
        if ($this->submissionId) {
            $data['submission_id'] = $this->submissionId;
        }

        return $data;
    }

    protected function afterCreate(): void
    {
        $this->record->replacedDocuments()->each(function ($replacedDoc) {
            $replacedDoc->update(['status' => 'inactive']);
        });
    }
}
