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
                                $slug = Str::slug($name);

                                // Check by slug first to prevent duplicate slug error
                                $record = $modelClass::where('slug', $slug)->first();

                                if (!$record) {
                                    $record = $modelClass::firstOrCreate(
                                        ['name' => $name],
                                        ['slug' => $slug]
                                    );
                                }
                                $fillData[$idKey] = $record->id;
                            }
                        }

                        if (isset($fillData['publisher_id'])) {
                            $publisher = \App\Models\Publisher::find($fillData['publisher_id']);

                            $slug = Str::slug($publisher->name);
                            $initiator = \App\Models\Initiator::where('slug', $slug)->first();

                            if (!$initiator) {
                                $initiator = \App\Models\Initiator::firstOrCreate(
                                    ['name' => $publisher->name],
                                    ['slug' => $slug]
                                );
                            }
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
            \Filament\Actions\Action::make('import_json')
                ->label('Import JSON')
                ->icon('heroicon-o-clipboard-document-list')
                ->color('warning')
                ->modalHeading('Import Data dari JSON')
                ->modalDescription('Paste hasil ekstraksi AI dalam format JSON.')
                ->schema([
                    \Filament\Forms\Components\Textarea::make('json_data')
                        ->label('Data JSON')
                        ->placeholder('{"type": "...", "metadata": {...}}')
                        ->rows(12)
                        ->required(),
                ])
                ->action(function (array $data, CreateLegalProduct $livewire) {
                    try {
                        $jsonString = $data['json_data'];
                        $parsed = json_decode($jsonString, true);

                        if (json_last_error() !== JSON_ERROR_NONE) {
                            \Filament\Notifications\Notification::make()
                                ->title('Format JSON tidak valid')
                                ->body(json_last_error_msg())
                                ->danger()
                                ->send();
                            return;
                        }

                        $typeName = $parsed['type'] ?? null;
                        $metadata = $parsed['metadata'] ?? [];

                        // 1. Lookup Type
                        if (empty($typeName)) {
                            \Filament\Notifications\Notification::make()
                                ->title('Field "type" tidak ditemukan dalam JSON')
                                ->danger()
                                ->send();
                            return;
                        }

                        $type = \App\Models\Type::where('name', $typeName)->first();
                        if (!$type) {
                            \Filament\Notifications\Notification::make()
                                ->title('Jenis Produk Hukum tidak ditemukan')
                                ->body("Jenis '{$typeName}' tidak ada di database. Silakan buat terlebih dahulu di menu Master Data > Jenis.")
                                ->danger()
                                ->persistent()
                                ->send();
                            return;
                        }

                        $fieldConfig = $type->category->field_config ?? [];

                        // 2. Prepare fill data with scalar fields
                        $fillData = [
                            'type_id' => $type->id,
                            'category_id' => $type->category_id,
                            'field_config' => $fieldConfig,
                            'title' => $metadata['title'] ?? null,
                            'slug' => isset($metadata['title']) ? Str::slug($metadata['title']) : null,
                            'number' => $metadata['number'] ?? null,
                            'source' => $metadata['source'] ?? null,
                            'abstract' => $metadata['abstract'] ?? null,
                            'government_affair' => $metadata['government_affair'] ?? null,
                            'published_date' => $metadata['published_date'] ?? null,
                            'determination_date' => $metadata['determination_date'] ?? null,
                        ];

                        // 3. Map status
                        $statusRaw = strtolower($metadata['status'] ?? 'berlaku');
                        $fillData['status'] = ($statusRaw === 'berlaku' || $statusRaw === 'active') ? 'active' : 'inactive';

                        // 4. Map language
                        $langMap = [
                            'id' => 'Bahasa Indonesia',
                            'en' => 'English',
                            'ar' => 'Arabic',
                            'zh' => 'Mandarin',
                        ];
                        $langRaw = strtolower($metadata['language'] ?? 'id');
                        $fillData['language'] = $langMap[$langRaw] ?? 'Bahasa Indonesia';

                        // 5. Auto-create relationships
                        $relations = [
                            'publisher_id' => [\App\Models\Publisher::class, 'publisher_id'],
                            'place_id' => [\App\Models\Place::class, 'place_id'],
                            'signer_id' => [\App\Models\Signer::class, 'signer_id'],
                            'location_id' => [\App\Models\Location::class, 'location_id'],
                            'legal_field_id' => [\App\Models\LegalField::class, 'legal_field_id'],
                            'initiator_id' => [\App\Models\Initiator::class, 'initiator_id'],
                        ];

                        foreach ($relations as $jsonKey => $config) {
                            [$modelClass, $formKey] = $config;
                            $name = $metadata[$jsonKey] ?? null;

                            if (!empty($name)) {
                                $slug = Str::slug($name);

                                // Check by slug first to prevent duplicate slug error
                                $record = $modelClass::where('slug', $slug)->first();

                                if (!$record) {
                                    $record = $modelClass::firstOrCreate(
                                        ['name' => $name],
                                        ['slug' => $slug]
                                    );
                                }
                                $fillData[$formKey] = $record->id;
                            }
                        }

                        // 6. Handle replacedDocuments
                        $replacedDocsRaw = $metadata['replacedDocuments'] ?? null;
                        if (!empty($replacedDocsRaw)) {
                            $replacedDoc = \App\Models\LegalProduct::where('number', $replacedDocsRaw)
                                ->orWhere('title', 'LIKE', "%{$replacedDocsRaw}%")
                                ->first();

                            if ($replacedDoc) {
                                $fillData['replacedDocuments'] = [$replacedDoc->id];
                            }
                        }

                        // 7. Fill form
                        $livewire->form->fill($fillData);

                        \Filament\Notifications\Notification::make()
                            ->title('Form berhasil diisi dari JSON!')
                            ->success()
                            ->send();
                    } catch (\Exception $e) {
                        \Filament\Notifications\Notification::make()
                            ->title('Terjadi Kesalahan')
                            ->body($e->getMessage())
                            ->danger()
                            ->send();
                    }
                })
                ->modalSubmitActionLabel('Import')
                ->extraModalFooterActions([])
                ->closeModalByClickingAway(false)
                ->closeModalByEscaping(false),
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
            $name = $data['signer_name'];
            $slug = Str::slug($name);

            $signer = \App\Models\Signer::where('slug', $slug)->first();

            if (!$signer) {
                $signer = \App\Models\Signer::firstOrCreate(
                    ['name' => $name],
                    ['slug' => $slug]
                );
            }
            $fillData['signer_id'] = $signer->id;
        }


        $publisherName = 'UIN Sunan Gunung Djati Bandung';
        $publisherSlug = Str::slug($publisherName);

        $publisher = \App\Models\Publisher::where('slug', $publisherSlug)->first();
        if (!$publisher) {
            $publisher = \App\Models\Publisher::firstOrCreate(
                ['name' => $publisherName],
                ['slug' => $publisherSlug]
            );
        }

        $fillData['publisher_id'] = $publisher->id;

        $placeName = 'Bandung';
        $placeSlug = Str::slug($placeName);

        $place = \App\Models\Place::where('slug', $placeSlug)->first();
        if (!$place) {
            $place = \App\Models\Place::firstOrCreate(
                ['name' => $placeName],
                ['slug' => $placeSlug]
            );
        }

        $fillData['place_id'] = $place->id;

        $initiatorSlug = Str::slug($publisher->name);
        $initiator = \App\Models\Initiator::where('slug', $initiatorSlug)->first();

        if (!$initiator) {
            $initiator = \App\Models\Initiator::firstOrCreate(
                ['name' => $publisher->name],
                ['slug' => $initiatorSlug]
            );
        }

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
