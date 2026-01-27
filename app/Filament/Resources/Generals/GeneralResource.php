<?php

namespace App\Filament\Resources\Generals;

use App\Filament\Resources\Generals\Pages\CreateGeneral;
use App\Filament\Resources\Generals\Pages\EditGeneral;
use App\Filament\Resources\Generals\Pages\ListGenerals;
use App\Filament\Resources\Generals\Pages\ViewGeneral;
use App\Filament\Resources\Generals\Schemas\GeneralForm;
use App\Filament\Resources\Generals\Schemas\GeneralInfolist;
use App\Filament\Resources\Generals\Tables\GeneralsTable;
use App\Models\General;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class GeneralResource extends Resource
{
    protected static ?string $model = General::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'title';

    protected static ?string $modelLabel = 'General';
    protected static ?string $pluralModelLabel = 'General';
    protected static ?string $navigationLabel = 'General';

    public static function getNavigationGroup(): ?string
    {
        return 'Manajemen Konten';
    }

    public static function form(Schema $schema): Schema
    {
        return GeneralForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return GeneralInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return GeneralsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListGenerals::route('/'),
            'create' => CreateGeneral::route('/create'),
            'view' => ViewGeneral::route('/{record}'),
            'edit' => EditGeneral::route('/{record}/edit'),
        ];
    }
}
