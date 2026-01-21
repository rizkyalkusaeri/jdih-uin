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

        if (request()->has('prefill_id')) {
            $key = request()->get('prefill_id');
            $data = \Illuminate\Support\Facades\Cache::get("legal-product-prefill-{$key}");

            if ($data) {
                // Ensure field_config is loaded for the form to render fields correctly
                if (isset($data['type_id'])) {
                    $type = \App\Models\Type::with('category')->find($data['type_id']);
                    if ($type) {
                        $data['field_config'] = $type->category->field_config ?? [];
                    }
                }

                // 1. Auto-Slug
                if (isset($data['title'])) {
                    $data['slug'] = Str::slug($data['title']);
                }

                // 2. Auto-Create Relations from Names
                $relations = [
                    'publisher_name' => [\App\Models\Publisher::class, 'publisher_id'],
                    'place_name' => [\App\Models\Place::class, 'place_id'],
                    'signer_name' => [\App\Models\Signer::class, 'signer_id'],
                    'location_name' => [\App\Models\Location::class, 'location_id'],
                    'legal_field_name' => [\App\Models\LegalField::class, 'legal_field_id'],
                ];

                foreach ($relations as $nameKey => $config) {
                    [$modelClass, $idKey] = $config;
                    if (!empty($data[$nameKey])) {
                        $name = $data[$nameKey];
                        // Try to find exact match or create
                        // Using slug for cleaner URL friendly lookup if needed, but name is key
                        $record = $modelClass::firstOrCreate(
                            ['name' => $name],
                            ['slug' => Str::slug($name)]
                        );
                        $data[$idKey] = $record->id;
                    }
                }

                // Special mapping: Pemrakarsa same as Publisher?
                // If 'initiator_name' is missing but publisher is set, maybe map it?
                // Or map publisher_name to initiator_id as well if implied.
                // User said "Pemrakarsa = Penerbit"
                if (isset($data['publisher_id'])) {
                    // Assuming Initiator model exists
                    $initiator = \App\Models\Initiator::firstOrCreate(
                        ['name' => $data['publisher_name']],
                        ['slug' => Str::slug($data['publisher_name'])]
                    );
                    $data['initiator_id'] = $initiator->id;
                }

                // Ensure file_path is preserved
                // Note: FileUpload component usually expects the path relative to the disk root.
                // GenerateLegalProduct saves it as 'legal-products/filename.pdf'.
                // If FileUpload has specific state issues, ensure checking validity.
                if (isset($data['file_path'])) {
                    // Force set as array for FileUpload component compatibility
                    $data['file_path'] = [$data['file_path']];
                }

                $this->form->fill($data);
            }
        }
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
