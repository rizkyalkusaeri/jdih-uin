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
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Filament\Actions\Action;
use Filament\Forms\Components\CheckboxList;
use Filament\Schemas\Components\Actions;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\HtmlString;
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
                Section::make('Status Pencabutan')
                    ->icon('heroicon-o-exclamation-triangle')
                    ->iconColor('warning')
                    ->schema([
                        TextEntry::make('revocation_info')
                            ->label('Dokumen ini telah dicabut oleh:')
                            ->html()
                            ->state(fn(LegalProduct $record) => new HtmlString(
                                $record->replacedBy->map(
                                    fn($p) =>
                                    "<a href='" . LegalProductResource::getUrl('edit', ['record' => $p]) . "' class='text-primary-600 hover:underline' target='_blank'>{$p->title} (No. {$p->number})</a>"
                                )->join(', ')
                            )),
                        Actions::make([
                            Action::make('restore_status')
                                ->label('Batalkan Pencabutan (Kembalikan ke Status Berlaku)')
                                ->color('warning')
                                ->requiresConfirmation()
                                ->modalHeading('Batalkan Pencabutan?')
                                ->modalDescription('Tindakan ini akan memutus hubungan pencabutan dari dokumen yang mencabut dan mengembalikan status dokumen ini menjadi Berlaku.')
                                ->action(function (LegalProduct $record) {
                                    $record->replacedBy()->detach();
                                    $record->update(['status' => 'active']);
                                    \Filament\Notifications\Notification::make()
                                        ->title('Pencabutan dibatalkan')
                                        ->success()
                                        ->send();
                                    return redirect(request()->header('Referer'));
                                }),
                        ]),
                    ])
                    ->visible(fn(?LegalProduct $record) => $record && $record->replacedBy()->exists())
                    ->columnSpanFull(),

                Section::make('Daftar Dokumen yang Dicabut')
                    ->description('Dokumen di bawah ini statusnya menjadi "Tidak Berlaku" karena dicabut oleh dokumen ini.')
                    ->icon('heroicon-o-document-minus')
                    ->schema([
                        TextEntry::make('replaced_docs_list')
                            ->label('Dokumen yang dicabut:')
                            ->html()
                            ->state(fn(LegalProduct $record) => new HtmlString(
                                $record->replacedDocuments->isEmpty()
                                    ? '-'
                                    : '<ul class="list-disc pl-4 space-y-1">' .
                                    $record->replacedDocuments->map(fn($p) => "<li><a href='" . LegalProductResource::getUrl('edit', ['record' => $p]) . "' class='text-primary-600 hover:underline' target='_blank'>{$p->title} (No. {$p->number})</a></li>")->join('') .
                                    '</ul>'
                            )),
                        Actions::make([
                            Action::make('cancel_revocation_batch')
                                ->label('Batalkan Pencabutan...')
                                ->color('warning')
                                ->icon('heroicon-m-arrow-uturn-left')
                                ->modalHeading('Pilih Dokumen untuk Dipulihkan')
                                ->modalDescription('Dokumen yang dipilih akan dilepas dari pencabutan dan statusnya kembali menjadi "Berlaku".')
                                ->schema(fn(LegalProduct $record) => [
                                    CheckboxList::make('docs_to_restore')
                                        ->label('Pilih Dokumen')
                                        ->options($record->replacedDocuments->pluck('title', 'id'))
                                        ->required(),
                                ])
                                ->action(function (array $data, LegalProduct $record) {
                                    $ids = $data['docs_to_restore'];
                                    $record->replacedDocuments()->detach($ids);
                                    LegalProduct::whereIn('id', $ids)->update(['status' => 'active']);
                                    \Filament\Notifications\Notification::make()
                                        ->title('Pencabutan berhasil dibatalkan')
                                        //->body('Status dokumen yang dipilih telah dikembalikan menjadi Berlaku.')
                                        ->success()
                                        ->send();
                                    return redirect(request()->header('Referer'));
                                })
                        ])
                    ])
                    ->visible(fn(?LegalProduct $record) => $record && $record->replacedDocuments()->exists())
                    ->columnSpanFull(),

                TextInput::make('field_config')
                    ->hidden()
                    ->dehydrated(false)
                    ->afterStateHydrated(function (?LegalProduct $record, Set $set) {
                        if ($record && $record->category) {
                            $set('field_config', $record->category->field_config);
                        }
                    }),
                Group::make()
                    ->schema([
                        Section::make('Informasi Utama')
                            ->schema([
                                Select::make('type_id')
                                    ->label('Jenis')
                                    ->relationship('type', 'name', modifyQueryUsing: fn(Builder $query) => $query->where('status', 'active'))
                                    ->searchable()
                                    ->preload()
                                    ->live()
                                    ->afterStateUpdated(function ($state, Set $set) {
                                        $type = Type::find($state);
                                        if ($type) {
                                            $set('category_id', $type->category_id);
                                            // Load field config
                                            $set('field_config', $type->category->field_config);
                                        } else {
                                            $set('field_config', []);
                                        }
                                    })
                                    ->required(),
                                Select::make('category_id')
                                    ->label('Kategori')
                                    ->relationship('category', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->required()
                                    ->disabled()
                                    ->dehydrated(), // Ensure value is saved even if disabled
                                TextInput::make('title')
                                    ->label('Judul')
                                    ->required(fn(Get $get) => $get('field_config.title.required') ?? true)
                                    ->visible(fn(Get $get) => $get('field_config.title.visible') ?? true)
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                                    ->columnSpanFull(),
                                TextInput::make('slug')
                                    ->required() // Always required if visible
                                    ->maxLength(255)
                                    ->unique(ignoreRecord: true)
                                    ->columnSpanFull(),
                                TextInput::make('number')
                                    ->label('Nomor')
                                    ->required(fn(Get $get) => $get('field_config.number.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.number.visible') ?? true)
                                    ->maxLength(255),
                            ])->columns(2),

                        Section::make('Detail')
                            ->schema([
                                // Standard Fields
                                TextInput::make('author')
                                    ->label('Penulis')
                                    ->required(fn(Get $get) => $get('field_config.author.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.author.visible') ?? false),
                                TextInput::make('edition')
                                    ->label('Edisi')
                                    ->required(fn(Get $get) => $get('field_config.edition.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.edition.visible') ?? false),

                                Select::make('publisher_id')
                                    ->label('Penerbit')
                                    ->relationship('publisher', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')->required()->maxLength(255)->live(onBlur: true)->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')->required()->unique(ignoreRecord: true),
                                    ])
                                    ->required(fn(Get $get) => $get('field_config.publisher_id.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.publisher_id.visible') ?? false),


                                TextInput::make('accreditation')
                                    ->label('Akreditasi')
                                    ->placeholder('Misal: SINTA 2, Scopus')
                                    ->visible(fn(Get $get) => $get('field_config.accreditation.visible') ?? false),

                                RichEditor::make('description')
                                    ->label('Deskripsi')
                                    ->columnSpanFull()
                                    ->visible(fn(Get $get) => $get('field_config.description.visible') ?? false),

                                Select::make('place_id')
                                    ->label('Tempat/Kota')
                                    ->relationship('place', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')->required()->maxLength(255)->live(onBlur: true)->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')->required()->unique(ignoreRecord: true),
                                    ])
                                    ->required(fn(Get $get) => $get('field_config.place_id.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.place_id.visible') ?? false),

                                DatePicker::make('determination_date')
                                    ->label('Tanggal Penetapan')
                                    ->required(fn(Get $get) => $get('field_config.determination_date.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.determination_date.visible') ?? false),
                                DatePicker::make('published_date')
                                    ->label('Tanggal Terbit')
                                    ->required(fn(Get $get) => $get('field_config.published_date.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.published_date.visible') ?? false),
                                TextInput::make('year')
                                    ->label('Tahun')
                                    ->numeric()
                                    ->required(fn(Get $get) => $get('field_config.year.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.year.visible') ?? false),

                                Select::make('status')
                                    ->options([
                                        'active' => 'Berlaku',
                                        'inactive' => 'Tidak Berlaku',
                                    ])
                                    ->default('active')
                                    ->required(fn(Get $get) => $get('field_config.status.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.status.visible') ?? false)
                                    ->disabled(fn(?LegalProduct $record) => $record && $record->replacedBy()->exists())
                                    ->live(),

                                DatePicker::make('validity_start')
                                    ->label('Mulai Berlaku')
                                    ->required(fn(Get $get) => $get('field_config.validity_start.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.validity_start.visible') ?? false),
                                DatePicker::make('validity_end')
                                    ->label('Berakhir Berlaku')
                                    ->required(fn(Get $get) => $get('field_config.validity_end.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.validity_end.visible') ?? false),
                                Select::make('doc_nature')
                                    ->label('Sifat Dokumen')
                                    ->options(['Terbuka' => 'Terbuka', 'Terbatas' => 'Terbatas', 'Rahasia' => 'Rahasia'])
                                    ->required(fn(Get $get) => $get('field_config.doc_nature.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.doc_nature.visible') ?? false),
                                TextInput::make('page_description')
                                    ->label('Deskripsi Fisik')
                                    ->required(fn(Get $get) => $get('field_config.page_description.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.page_description.visible') ?? false),

                                Select::make('language')
                                    ->label('Bahasa')
                                    ->options([
                                        'Bahasa Indonesia' => 'Bahasa Indonesia',
                                        'English' => 'English',
                                        'Arabic' => 'Arabic',
                                        'Mandarin' => 'Mandarin',
                                    ])
                                    ->default('Bahasa Indonesia')
                                    ->required(fn(Get $get) => $get('field_config.language.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.language.visible') ?? false),
                                TextInput::make('source')
                                    ->label('Sumber')
                                    ->placeholder('BHK 2025 : 4 hlm; jdih.uinsgd.ac.id')
                                    ->required(fn(Get $get) => $get('field_config.source.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.source.visible') ?? false),

                                Select::make('location_id')
                                    ->label('Lokasi Penyimpanan')
                                    ->relationship('location', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')->required()->maxLength(255)->live(onBlur: true)->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')->required()->unique(ignoreRecord: true),
                                    ])
                                    ->required(fn(Get $get) => $get('field_config.location_id.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.location_id.visible') ?? false),
                                Select::make('legal_field_id')
                                    ->label('Bidang Hukum')
                                    ->relationship('legalField', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')->required()->maxLength(255)->live(onBlur: true)->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')->required()->unique(ignoreRecord: true),
                                    ])
                                    ->required(fn(Get $get) => $get('field_config.legal_field_id.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.legal_field_id.visible') ?? false),
                                Select::make('signer_id')
                                    ->label('Penandatangan')
                                    ->relationship('signer', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')->required()->maxLength(255)->live(onBlur: true)->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')->required()->unique(ignoreRecord: true),
                                    ])
                                    ->required(fn(Get $get) => $get('field_config.signer_id.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.signer_id.visible') ?? false),
                                Select::make('initiator_id')
                                    ->label('Pemrakarsa')
                                    ->relationship('initiator', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->createOptionForm([
                                        TextInput::make('name')->required()->maxLength(255)->live(onBlur: true)->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')->required()->unique(ignoreRecord: true),
                                    ])
                                    ->required(fn(Get $get) => $get('field_config.initiator_id.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.initiator_id.visible') ?? false),
                                TextInput::make('government_affair')
                                    ->label('Urusan Pemerintahan')
                                    ->required(fn(Get $get) => $get('field_config.government_affair.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.government_affair.visible') ?? false),

                                RichEditor::make('abstract')
                                    ->label('Abstrak')
                                    ->columnSpanFull()
                                    ->required(fn(Get $get) => $get('field_config.abstract.required') ?? false)
                                    ->visible(fn(Get $get) => $get('field_config.abstract.visible') ?? false),

                                Select::make('replacedDocuments')
                                    ->label('Mencabut')
                                    ->visible(function (Get $get, ?LegalProduct $record) {
                                        $isVisibleInConfig = $get('field_config.replacedDocuments.visible') ?? false;
                                        $isActive = $get('status') === 'active';

                                        // Extra check: If I am revoked, I certainly cannot revoke others, avoiding ambiguity.
                                        $isRevoked = $record && $record->replacedBy()->exists();

                                        return $isVisibleInConfig && $isActive && !$isRevoked;
                                    })
                                    ->relationship('replacedDocuments', 'title', modifyQueryUsing: function (Builder $query, Get $get, ?LegalProduct $record) {
                                        $query->where('legal_products.status', 'active');

                                        // "Type yang sama" constraint
                                        $typeId = $get('type_id');
                                        if ($typeId) {
                                            $query->where('legal_products.type_id', $typeId);
                                        }

                                        if ($record) {
                                            $query->where('legal_products.id', '!=', $record->id);
                                        }
                                        return $query;
                                    })
                                    ->multiple()
                                    ->searchable()
                                    ->preload()
                                    ->helperText('Dokumen yang dicabut akan otomatis menjadi tidak berlaku. Hanya muncul jika status Berlaku.'),
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
                                        TextInput::make('name')->required()->maxLength(255)->live(onBlur: true)->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                                        TextInput::make('slug')->required()->unique(ignoreRecord: true),
                                    ]),
                            ]),
                        Section::make('Lampiran')
                            ->schema([
                                FileUpload::make('file_path')
                                    ->label('File Lampiran')
                                    ->disk('public')
                                    ->directory('legal-products')
                                    ->acceptedFileTypes(['application/pdf'])
                                    ->openable()
                                    ->helperText('File lampiran harus berformat PDF')
                                    ->required(fn(Get $get) => ($get('type_id') && \App\Models\Type::find($get('type_id'))?->name !== 'Jurnal Hukum') && ($get('field_config.file_path.required') ?? true)), // Not required for Jurnal Hukum if link is provided, can be adjusted

                                // Jurnal / Buku Hukum Specifics
                                FileUpload::make('cover_image')
                                    ->label('Cover')
                                    ->disk('public')
                                    ->directory('legal-product-covers')
                                    ->image()
                                    ->visible(fn(Get $get) => $get('field_config.cover_image.visible') ?? false),

                                TextInput::make('link')
                                    ->label('Link Dokumen/Jurnal')
                                    ->url()
                                    ->visible(fn(Get $get) => $get('field_config.link.visible') ?? false),
                            ]),
                        Section::make('Data Dukung')
                            ->schema([
                                \Filament\Forms\Components\Repeater::make('supportingLinks')
                                    ->relationship('supportingLinks')
                                    ->schema([
                                        TextInput::make('name')
                                            ->required()
                                            ->label('Nama/Judul'),
                                        TextInput::make('url')
                                            ->required()
                                            ->label('Link URL')
                                            ->url()
                                    ])
                                    ->addActionLabel('Tambah Data Dukung')
                                    ->reorderableWithButtons()
                                    ->collapsible()
                                    ->cloneable(),
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
                TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'active' => 'Berlaku',
                        'inactive' => 'Tidak Berlaku',
                        default => $state,
                    })
                    ->color(fn(string $state): string => match ($state) {
                        'active' => 'success',
                        'inactive' => 'danger',
                    }),
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
                    ]),
                TrashedFilter::make(),
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
            ])->defaultSort('created_at', 'desc');
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
