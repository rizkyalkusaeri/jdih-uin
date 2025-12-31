<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LegalProductResource\Pages;
use App\Models\LegalProduct;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Forms;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class LegalProductResource extends Resource
{
    protected static ?string $model = LegalProduct::class;

    protected static ?string $modelLabel = 'Produk Hukum';
    protected static ?string $pluralModelLabel = 'Produk Hukum';
    protected static ?string $navigationLabel = 'Produk Hukum';

    public static function getNavigationIcon(): ?string
    {
        return 'heroicon-o-document-text';
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Data Master';
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Informasi Utama')
                            ->schema([
                                Forms\Components\TextInput::make('title')
                                    ->label('Judul')
                                    ->required()
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                                Forms\Components\TextInput::make('number')
                                    ->label('Nomor')
                                    ->maxLength(255),
                                Forms\Components\TextInput::make('year')
                                    ->label('Tahun')
                                    ->numeric()
                                    ->required(),
                                Forms\Components\Select::make('type_id')
                                    ->label('Jenis')
                                    ->relationship('type', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        Forms\Components\TextInput::make('name')
                                            ->required()
                                            ->maxLength(255),
                                    ])
                                    ->required(),
                                Forms\Components\Select::make('category_id')
                                    ->label('Kategori')
                                    ->relationship('category', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->required(),
                            ])->columns(2),

                        Forms\Components\Section::make('Detail')
                            ->schema([
                                Forms\Components\Select::make('status')
                                    ->options([
                                        'active' => 'Active',
                                        'inactive' => 'Inactive',
                                        'draft' => 'Draft',
                                    ])
                                    ->required()
                                    ->default('active'),
                                Forms\Components\DatePicker::make('determination_date')
                                    ->label('Tanggal Penetapan'),
                                Forms\Components\DatePicker::make('published_date')
                                    ->label('Tanggal Terbit'),
                                Forms\Components\TextInput::make('language')
                                    ->label('Bahasa')
                                    ->default('Bahasa Indonesia'),
                                Forms\Components\TextInput::make('source')
                                    ->label('Sumber'),
                                Forms\Components\Select::make('location_id')
                                    ->label('Lokasi')
                                    ->relationship('location', 'name')
                                    ->searchable()
                                    ->preload(),
                                Forms\Components\Select::make('legal_field_id')
                                    ->label('Bidang Hukum')
                                    ->relationship('legalField', 'name')
                                    ->searchable()
                                    ->preload(),
                            ])->columns(2),
                    ])->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Subjek')
                            ->schema([
                                Forms\Components\Select::make('subjects')
                                    ->label('Subjek')
                                    ->relationship('subjects', 'name')
                                    ->multiple()
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        Forms\Components\TextInput::make('name')
                                            ->required()
                                            ->maxLength(255),
                                    ]),
                            ]),
                        Forms\Components\Section::make('Dokumen')
                            ->schema([
                                Forms\Components\FileUpload::make('file_path')
                                    ->label('File Produk Hukum')
                                    ->directory('legal-products')
                                    ->acceptedFileTypes(['application/pdf'])
                                    ->preserveFilenames()
                                    ->required(),
                                Forms\Components\TextInput::make('related_document')
                                    ->label('Dokumen Terkait'),
                                Forms\Components\TextInput::make('rule_document')
                                    ->label('Dokumen Peraturan'),
                            ]),
                    ])->columnSpan(['lg' => 1]),
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('number')
                    ->label('Nomor')
                    ->searchable(),
                Tables\Columns\TextColumn::make('type.name')
                    ->label('Jenis')
                    ->sortable(),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('Kategori')
                    ->sortable(),
                Tables\Columns\TextColumn::make('year')
                    ->label('Tahun')
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'active' => 'success',
                        'inactive' => 'gray',
                        'draft' => 'warning',
                    }),
                Tables\Columns\TextColumn::make('published_date')
                    ->label('Tanggal Terbit')
                    ->date('d M Y')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->label('Kategori')
                    ->relationship('category', 'name'),
                Tables\Filters\SelectFilter::make('type')
                    ->label('Jenis')
                    ->relationship('type', 'name'),
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                        'draft' => 'Draft',
                    ]),
                Tables\Filters\SelectFilter::make('year')
                    ->label('Tahun')
                    ->options(fn() => LegalProduct::query()->distinct()->pluck('year', 'year')->toArray()),
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
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
            'index' => Pages\ListLegalProducts::route('/'),
            'create' => Pages\CreateLegalProduct::route('/create'),
            'edit' => Pages\EditLegalProduct::route('/{record}/edit'),
        ];
    }
}
