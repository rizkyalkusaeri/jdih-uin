<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LegalProductResource\Pages;
use App\Models\LegalProduct;
use App\Models\Type;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Filament\Actions\Action;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

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
        return 'Manajemen Konten';
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Group::make()
                    ->schema([
                        Section::make('Informasi Utama')
                            ->schema([
                                Select::make('type_id')
                                    ->label('Jenis')
                                    ->relationship('type', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->live()
                                    ->afterStateUpdated(function ($state, Set $set) {
                                        $type = Type::find($state);
                                        if ($type) {
                                            $set('category_id', $type->category_id);
                                        }
                                    })
                                    ->required()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn(string $state, Set $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
                                        Select::make('category_id')
                                            ->label('Kategori')
                                            ->relationship('category', 'name')
                                            ->searchable()
                                            ->preload()
                                            ->required(),
                                    ]),
                                Select::make('category_id')
                                    ->label('Kategori')
                                    ->relationship('category', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->required()
                                    ->disabled(), // Auto-filled by Type
                                TextInput::make('title')
                                    ->label('Judul')
                                    ->required()
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                                    ->columnSpanFull(),
                                TextInput::make('slug')
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(ignoreRecord: true)
                                    ->columnSpanFull(),
                                TextInput::make('number')
                                    ->label('Nomor')
                                    ->maxLength(255),
                                DatePicker::make('determination_date')
                                    ->label('Tanggal Penetapan'),
                                DatePicker::make('published_date')
                                    ->label('Tanggal Terbit'),
                                TextInput::make('year')
                                    ->label('Tahun')
                                    ->numeric(),
                                RichEditor::make('abstract')
                                    ->label('Abstrak')
                                    ->columnSpanFull()
                                    ->visible(function (Get $get) {
                                        // Show abstract generally, but maybe validate strictly for some
                                        // User asked to hide it for some? "abstract - (dash)" for Keputusan Rektor
                                        // Let's keep it visible for flexibility unless strictly asked to hide.
                                        // User note: "abstract only for Type Peraturan Rektor, Surat Edaran, SOP"
                                        // So we HIDE it for others?
                                        $typeId = $get('type_id');
                                        if (! $typeId) return false;
                                        $type = Type::find($typeId);
                                        return in_array($type?->name, ['Peraturan Rektor', 'Surat Edaran', 'SOP']);
                                    })
                                    ->required(function (Get $get) {
                                        $typeId = $get('type_id');
                                        if (! $typeId) return false;
                                        $type = Type::find($typeId);
                                        return in_array($type?->name, ['Peraturan Rektor', 'Surat Edaran', 'SOP']);
                                    }),
                            ])->columns(2),

                        // METADATA SECTION (Dynamic)
                        Section::make('Metadata Khusus')
                            ->schema([
                                // Monografi Fields
                                TextInput::make('metadata.author')
                                    ->label('Penulis')
                                    ->visible(fn(Get $get) => Type::find($get('type_id'))?->category?->name === 'Monografi Hukum'),
                                TextInput::make('metadata.edition')
                                    ->label('Edisi')
                                    ->visible(fn(Get $get) => Type::find($get('type_id'))?->category?->name === 'Monografi Hukum'),
                                TextInput::make('metadata.description')
                                    ->label('Deskripsi Fisik')
                                    ->visible(fn(Get $get) => Type::find($get('type_id'))?->category?->name === 'Monografi Hukum'),

                                // Dokumen Hukum Khusus Fields
                                Group::make()
                                    ->schema([
                                        DatePicker::make('metadata.validity_start')->label('Mulai Berlaku'),
                                        DatePicker::make('metadata.validity_end')->label('Berakhir Berlaku'),
                                    ])
                                    ->columns(2)
                                    ->visible(fn(Get $get) => Type::find($get('type_id'))?->category?->name === 'Dokumen Hukum Khusus'),
                                Select::make('metadata.doc_nature')
                                    ->label('Sifat Dokumen')
                                    ->options(['Terbuka' => 'Terbuka', 'Terbatas' => 'Terbatas', 'Rahasia' => 'Rahasia'])
                                    ->visible(fn(Get $get) => Type::find($get('type_id'))?->category?->name === 'Dokumen Hukum Khusus'),
                            ])
                            ->visible(fn(Get $get) => $get('type_id') !== null),

                        Section::make('Detail')
                            ->schema([
                                Select::make('status')
                                    ->options([
                                        'active' => 'Berlaku',
                                        'inactive' => 'Tidak Berlaku',
                                    ])
                                    ->required()
                                    ->default('active'),
                                Select::make('replacedDocuments')
                                    ->label('Mencabut')
                                    ->relationship('replacedDocuments', 'title', modifyQueryUsing: fn(Builder $query) => $query->where('status', 'active'))
                                    ->multiple()
                                    ->searchable()
                                    ->preload()
                                    ->getOptionLabelFromRecordUsing(fn(LegalProduct $record) => "{$record->number} - {$record->title}")
                                    ->helperText('jika satu dokumen hukum hadir untuk mengganti sepenuhnya dokumen lama sehingga dokumen lama tidak berlaku lagi'),

                                Select::make('language')
                                    ->label('Bahasa')
                                    ->options([
                                        'Bahasa Indonesia' => 'Bahasa Indonesia',
                                        'English' => 'English',
                                        'Arabic' => 'Arabic',
                                        'Mandarin' => 'Mandarin',
                                    ])
                                    ->default('Bahasa Indonesia'),
                                TextInput::make('source')
                                    ->label('Sumber')
                                    ->placeholder('BHK 2025 : 4 hlm; jdih.uinsgd.ac.id'),

                                // Dynamic Label for Publisher
                                Select::make('publisher_id')
                                    ->label(fn(Get $get) => match (Type::find($get('type_id'))?->category?->name) {
                                        'Monografi Hukum' => 'Penerbit',
                                        'Dokumen Hukum Khusus' => 'Lembaga Penerbit',
                                        default => 'T.E.U Badan'
                                    })
                                    ->relationship('publisher', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn(string $state, Set $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
                                    ]),

                                // Dynamic Label for Place
                                Select::make('place_id')
                                    ->label(fn(Get $get) => match (Type::find($get('type_id'))?->category?->name) {
                                        'Monografi Hukum' => 'Kota Terbit',
                                        default => 'Tempat Penetapan'
                                    })
                                    ->relationship('place', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn(string $state, Set $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
                                    ]),

                                Select::make('location_id')
                                    ->label('Lokasi Penyimpanan') // Renamed to distinguish
                                    ->relationship('location', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn(string $state, Set $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
                                    ]),
                                Select::make('legal_field_id')
                                    ->label('Bidang Hukum')
                                    ->relationship('legalField', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn(string $state, Set $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
                                    ]),
                                Select::make('signer_id')
                                    ->label('Penandatangan')
                                    ->relationship('signer', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn(string $state, Set $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
                                    ]),
                                Select::make('initiator_id')
                                    ->label('Pemrakarsa')
                                    ->relationship('initiator', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->label('Nama')
                                            ->required()
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn(string $state, Set $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
                                    ]),
                                TextInput::make('government_affair')
                                    ->label('Urusan Pemerintahan'),
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
                                            ->maxLength(255)
                                            ->live(onBlur: true)
                                            ->afterStateUpdated(fn(string $state, Set $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')
                                            ->required()
                                            ->maxLength(255)
                                            ->unique(ignoreRecord: true),
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
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'active' => 'Berlaku',
                        'inactive' => 'Tidak Berlaku',
                        'draft' => 'Draft',
                        default => $state,
                    })
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
                        'active' => 'Berlaku',
                        'inactive' => 'Tidak Berlaku',
                        'draft' => 'Draft',
                    ]),
                SelectFilter::make('year')
                    ->label('Tahun')
                    ->options(fn() => LegalProduct::query()->distinct()->pluck('year', 'year')->toArray()),
                Tables\Filters\TrashedFilter::make(),
            ])
            ->recordActions([
                Action::make('riwayat')
                    ->label('Riwayat')
                    ->icon('heroicon-m-clock')
                    ->modalHeading('Riwayat Dokumen')
                    ->modalSubmitAction(false)
                    ->modalCancelAction(fn($action) => $action->label('Tutup'))
                    ->modalContent(fn(LegalProduct $record) => view('filament.resources.legal-product-resource.pages.history-modal', ['record' => $record])),
                EditAction::make(),
                DeleteAction::make(),
                RestoreAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
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
