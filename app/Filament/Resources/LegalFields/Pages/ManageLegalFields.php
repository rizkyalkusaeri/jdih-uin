<?php

namespace App\Filament\Resources\LegalFields\Pages;

use App\Filament\Resources\LegalFields\LegalFieldResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageLegalFields extends ManageRecords
{
    protected static string $resource = LegalFieldResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
