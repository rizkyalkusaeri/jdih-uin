<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ApiLogResource\Pages;
use App\Models\ApiLog;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;

class ApiLogResource extends Resource
{
  protected static ?string $model = ApiLog::class;

  public static function getNavigationIcon(): ?string
  {
    return 'heroicon-o-rectangle-stack';
  }

  public static function getNavigationGroup(): ?string
  {
    return 'Monitoring';
  }

  public static function form(Schema $schema): Schema
  {
    return $schema
      ->schema([
        TextInput::make('ip_address')
          ->maxLength(255),
        TextInput::make('endpoint')
          ->required()
          ->maxLength(255),
        TextInput::make('method')
          ->required()
          ->maxLength(255),
        Textarea::make('user_agent')
          ->columnSpanFull(),
        TextInput::make('status_code')
          ->required()
          ->numeric(),
        Textarea::make('payload')
          ->columnSpanFull(),
        TextInput::make('duration_ms')
          ->numeric(),
      ]);
  }

  public static function table(Table $table): Table
  {
    return $table
      ->columns([
        TextColumn::make('created_at')
          ->dateTime()
          ->sortable()
          ->label('Time'),
        TextColumn::make('method')
          ->badge()
          ->color(fn(string $state): string => match ($state) {
            'GET' => 'success',
            'POST' => 'warning',
            'PUT' => 'info',
            'DELETE' => 'danger',
            default => 'gray',
          }),
        TextColumn::make('endpoint')
          ->searchable(),
        TextColumn::make('status_code')
          ->badge()
          ->color(fn(string $state): string => match (true) {
            $state >= 200 && $state < 300 => 'success',
            $state >= 400 && $state < 500 => 'warning',
            $state >= 500 => 'danger',
            default => 'gray',
          }),
        TextColumn::make('ip_address')
          ->searchable(),
        TextColumn::make('duration_ms')
          ->numeric()
          ->suffix(' ms')
          ->sortable(),
      ])
      ->defaultSort('created_at', 'desc')
      ->filters([
        //
      ])
      ->recordActions([
        ViewAction::make(),
      ])
      ->toolBarActions([
        BulkActionGroup::make([
          DeleteBulkAction::make(),
        ]),
      ]);
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
      'index' => Pages\ListApiLogs::route('/'),
    ];
  }

  public static function canCreate(): bool
  {
    return false;
  }

  public static function canEdit(Model $record): bool
  {
    return false;
  }
}
