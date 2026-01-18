<?php

namespace App\Filament\Resources\LegalDictionaries\Pages;

use App\Filament\Resources\LegalDictionaries\LegalDictionaryResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListLegalDictionaries extends ListRecords
{
    protected static string $resource = LegalDictionaryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
