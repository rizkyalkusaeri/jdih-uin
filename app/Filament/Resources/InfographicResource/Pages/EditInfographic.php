<?php

namespace App\Filament\Resources\InfographicResource\Pages;

use App\Filament\Resources\InfographicResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditInfographic extends EditRecord
{
    protected static string $resource = InfographicResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
