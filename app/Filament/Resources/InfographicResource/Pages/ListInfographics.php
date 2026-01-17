<?php

namespace App\Filament\Resources\InfographicResource\Pages;

use App\Filament\Resources\InfographicResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListInfographics extends ListRecords
{
    protected static string $resource = InfographicResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
