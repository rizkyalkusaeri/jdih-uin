<?php

namespace App\Filament\Resources\Awards\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class AwardForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Judul')
                    ->required()
                    ->maxLength(255),
                FileUpload::make('image')
                    ->label('Gambar Piala')
                    ->image()
                    ->disk('public')
                    ->directory('awards')
                    ->required(),
            ]);
    }
}
