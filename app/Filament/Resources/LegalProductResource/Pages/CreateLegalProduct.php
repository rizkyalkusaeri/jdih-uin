<?php

namespace App\Filament\Resources\LegalProductResource\Pages;

use App\Filament\Resources\LegalProductResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;

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

                dd($data);

                $this->form->fill($data);

                // Optional: Clear cache after use? Maybe not immediately in case of refresh, 
                // but 30min expiration is fine.
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
