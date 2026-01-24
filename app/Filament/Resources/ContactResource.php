<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Pages;
use App\Models\Contact;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Infolists\Components\TextEntry;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Filament\Forms\Components\DatePicker;
use Illuminate\Database\Eloquent\Builder;

class ContactResource extends Resource
{
  protected static ?string $model = Contact::class;

  protected static ?string $modelLabel = 'Pesan Masuk';
  protected static ?string $pluralModelLabel = 'Pesan Masuk';
  protected static ?string $navigationLabel = 'Pesan Masuk';

  public static function getNavigationIcon(): ?string
  {
    return 'heroicon-o-envelope';
  }

  public static function getNavigationGroup(): ?string
  {
    return 'Monitoring';
  }

  public static function table(Table $table): Table
  {
    return $table
      ->columns([
        TextColumn::make('name')
          ->label('Nama Lengkap')
          ->searchable()
          ->sortable(),
        TextColumn::make('category')
          ->label('Kategori')
          ->badge()
          ->color(fn(string $state): string => match ($state) {
            'Individu' => 'info',
            'Kelompok' => 'success',
            'LSM/NGO' => 'warning',
            'Instansi Pemerintah' => 'primary',
            'Lembaga Pendidikan' => 'secondary',
            default => 'gray',
          })
          ->searchable(),
        TextColumn::make('email')
          ->label('Email')
          ->copyable()
          ->searchable(),
        TextColumn::make('phone')
          ->label('No. HP')
          ->searchable(),
        TextColumn::make('created_at')
          ->label('Dikirim Pada')
          ->dateTime('d M Y, H:i')
          ->sortable(),
      ])
      ->defaultSort('created_at', 'desc')
      ->filters([
        SelectFilter::make('category')
          ->label('Kategori')
          ->options([
            'Individu' => 'Individu',
            'Kelompok' => 'Kelompok',
            'LSM/NGO' => 'LSM/NGO',
            'Instansi Pemerintah' => 'Instansi Pemerintah',
            'Lembaga Pendidikan' => 'Lembaga Pendidikan',
            'Lainnya' => 'Lainnya',
          ]),
        Filter::make('created_at')
          ->form([
            DatePicker::make('from')->label('Dari Tanggal'),
            DatePicker::make('until')->label('Sampai Tanggal'),
          ])
          ->query(function (Builder $query, array $data): Builder {
            return $query
              ->when(
                $data['from'],
                fn(Builder $query, $date): Builder => $query->whereDate('created_at', '>=', $date),
              )
              ->when(
                $data['until'],
                fn(Builder $query, $date): Builder => $query->whereDate('created_at', '<=', $date),
              );
          }),
      ])
      ->recordActions([
        ViewAction::make(),
        DeleteAction::make(),
      ])
      ->toolbarActions([
        BulkActionGroup::make([
          DeleteBulkAction::make(),
        ]),
      ]);
  }

  public static function infolist(Schema $schema): Schema
  {
    return $schema
      ->schema([
        Section::make('Informasi Pengirim')
          ->schema([
            TextEntry::make('name')
              ->label('Nama Lengkap'),
            TextEntry::make('identity_number')
              ->label('NIK / Identitas'),
            TextEntry::make('address')
              ->label('Alamat Lengkap')
              ->columnSpanFull(),
          ])->columns(2),

        Section::make('Kontak & Kategori')
          ->schema([
            TextEntry::make('email')
              ->label('Email')
              ->icon('heroicon-m-envelope'),
            TextEntry::make('phone')
              ->label('No. Telepon')
              ->icon('heroicon-m-phone'),
            TextEntry::make('category')
              ->label('Kategori')
              ->badge(),
          ])->columns(3),

        Section::make('Berkas Identitas')
          ->schema([
            TextEntry::make('identity_file_path')
              ->label('File Identitas')
              ->formatStateUsing(fn($state) => $state ? 'Download File' : '-')
              ->url(fn($record) => $record->identity_file_path ? asset('storage/' . $record->identity_file_path) : null)
              ->openUrlInNewTab()
              ->icon('heroicon-m-arrow-down-tray')
              ->color('primary'),
          ]),

        Section::make('Metadata Log')
          ->schema([
            TextEntry::make('ip_address')
              ->label('IP Address'),
            TextEntry::make('user_agent')
              ->label('User Agent')
              ->limit(50)
              ->tooltip(fn($state) => $state),
            TextEntry::make('created_at')
              ->label('Waktu Masuk')
              ->dateTime('d M Y, H:i:s'),
          ])->columns(3)->collapsed(),
      ]);
  }

  public static function getPages(): array
  {
    return [
      'index' => Pages\ListContacts::route('/'),
    ];
  }
}
