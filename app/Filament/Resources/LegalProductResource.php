<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LegalProductResource\Pages;
use App\Models\LegalProduct;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
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
                Group::make()
                    ->schema([
                        Section::make('Informasi Utama')
                            ->schema([
                                TextInput::make('title')
                                    ->label('Judul')
                                    ->required()
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                                TextInput::make('number')
                                    ->label('Nomor')
                                    ->maxLength(255),
                                TextInput::make('year')
                                    ->label('Tahun')
                                    ->numeric()
                                    ->required(),
                                Select::make('type_id')
                                    ->label('Jenis')
                                    ->relationship('type', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama Jenis')
                                            ->required()
                                            ->maxLength(255),
                                    ])
                                    ->required(),
                                Select::make('category_id')
                                    ->label('Kategori')
                                    ->relationship('category', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->required(),
                            ])->columns(2),

                        Section::make('Detail')
                            ->schema([
                                Select::make('status')
                                    ->options([
                                        'active' => 'Active',
                                        'inactive' => 'Inactive',
                                        'draft' => 'Draft',
                                    ])
                                    ->required()
                                    ->default('active'),
                                DatePicker::make('determination_date')
                                    ->label('Tanggal Penetapan'),
                                DatePicker::make('published_date')
                                    ->label('Tanggal Terbit'),
                                TextInput::make('language')
                                    ->label('Bahasa')
                                    ->default('Bahasa Indonesia'),
                                TextInput::make('source')
                                    ->label('Sumber'),
                                Select::make('location_id')
                                    ->label('Lokasi')
                                    ->relationship('location', 'name')
                                    ->searchable()
                                    ->preload(),
                                Select::make('legal_field_id')
                                    ->label('Bidang Hukum')
                                    ->relationship('legalField', 'name')
                                    ->searchable()
                                    ->preload(),
                            ])->columns(2),
                    ])->columnSpan(['lg' => 2]),

                Group::make()
                    ->schema([
                        Section::make('Subjek')
                            ->schema([
                                Select::make('subjects')
                                    ->label('Subjek')
                                    ->relationship('subjects', 'name')
                                    ->multiple()
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama Subjek')
                                            ->required()
                                            ->maxLength(255),
                                    ]),
                            ]),
                        Section::make('Dokumen')
                            ->schema([
                                FileUpload::make('file_path')
                                    ->label('File Produk Hukum')
                                    ->directory('legal-products')
                                    ->acceptedFileTypes(['application/pdf'])
                                    ->preserveFilenames()
                                    ->required(),
                                TextInput::make('related_document')
                                    ->label('Dokumen Terkait'),
                                TextInput::make('rule_document')
                                    ->label('Dokumen Peraturan'),
                            ]),
                    ])->columnSpan(['lg' => 1]),
            ])->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->limit(50),
                TextColumn::make('number')
                    ->label('Nomor')
                    ->searchable(),
                TextColumn::make('type.name')
                    ->label('Jenis')
                    ->sortable(),
                TextColumn::make('category.name')
                    ->label('Kategori')
                    ->sortable(),
                TextColumn::make('year')
                    ->label('Tahun')
                    ->sortable(),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'active' => 'success',
                        'inactive' => 'gray',
                        'draft' => 'warning',
                    }),
                TextColumn::make('published_date')
                    ->label('Tanggal Terbit')
                    ->date('d M Y')
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('category')
                    ->label('Kategori')
                    ->relationship('category', 'name'),
                SelectFilter::make('type')
                    ->label('Jenis')
                    ->relationship('type', 'name'),
                SelectFilter::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                        'draft' => 'Draft',
                    ]),
                SelectFilter::make('year')
                    ->label('Tahun')
                    ->options(fn() => LegalProduct::query()->distinct()->pluck('year', 'year')->toArray()),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
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
