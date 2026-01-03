<?php

namespace App\Filament\Resources\Initiators\Pages;

use App\Filament\Resources\Initiators\InitiatorResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageInitiators extends ManageRecords
{
    protected static string $resource = InitiatorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
