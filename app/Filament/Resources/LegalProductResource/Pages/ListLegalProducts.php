<?php

namespace App\Filament\Resources\LegalProductResource\Pages;

use App\Filament\Resources\LegalProductResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLegalProducts extends ListRecords
{
    protected static string $resource = LegalProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
