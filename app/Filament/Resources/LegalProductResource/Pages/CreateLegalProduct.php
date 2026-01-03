<?php

namespace App\Filament\Resources\LegalProductResource\Pages;

use App\Filament\Resources\LegalProductResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Facades\Auth;

class CreateLegalProduct extends CreateRecord
{
    protected static string $resource = LegalProductResource::class;

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
