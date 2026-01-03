<?php

namespace App\Filament\Resources\LegalProductResource\Pages;

use App\Filament\Resources\LegalProductResource;
use Filament\Resources\Pages\EditRecord;

class EditLegalProduct extends EditRecord
{
    protected static string $resource = LegalProductResource::class;

    protected function afterSave(): void
    {
        $this->record->replacedDocuments()->each(function ($replacedDoc) {
            $replacedDoc->update(['status' => 'inactive']);
        });
    }
}
