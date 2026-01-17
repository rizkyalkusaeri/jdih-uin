<?php

namespace App\Filament\Widgets;

use App\Models\LegalProduct;
use Filament\Actions\Action;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestLegalProductsWidget extends BaseWidget
{
  protected static ?int $sort = 4;
  protected int | string | array $columnSpan = 'full';

  protected static ?string $heading = 'Produk Hukum Terbaru';

  public function table(Table $table): Table
  {
    return $table
      ->query(
        LegalProduct::query()->latest()->limit(5)
      )
      ->columns([
        Tables\Columns\TextColumn::make('title')
          ->label('Judul')
          ->limit(50)
          ->tooltip(fn(LegalProduct $record): string => $record->title),
        Tables\Columns\TextColumn::make('number')
          ->label('Nomor')
          ->sortable(),
        Tables\Columns\TextColumn::make('year')
          ->label('Tahun')
          ->sortable(),
        Tables\Columns\TextColumn::make('type.name')
          ->label('Jenis')
          ->badge(),
        Tables\Columns\TextColumn::make('created_at')
          ->label('Diunggah')
          ->dateTime()
          ->sortable(),
      ])
      ->recordActions([
        Action::make('view')
          ->url(fn(LegalProduct $record): string => route('filament.admin.resources.legal-products.edit', $record))
          ->icon('heroicon-m-eye'),
      ]);
  }
}
