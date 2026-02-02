<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubmissionResource\Pages;
use App\Models\Submission;
use App\Models\SubmissionStatusHistory;
use App\Models\Type;
use Filament\Actions\Action;
use Filament\Actions\ViewAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\DatePicker;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class SubmissionResource extends Resource
{
    protected static ?string $model = Submission::class;

    protected static ?string $modelLabel = 'Pengajuan Produk Hukum';
    protected static ?string $pluralModelLabel = 'Pengajuan Produk Hukum';
    protected static ?string $navigationLabel = 'Pengajuan Produk Hukum';

    public static function getNavigationIcon(): ?string
    {
        return 'heroicon-o-clipboard-document-list';
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Monitoring';
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::where('status', Submission::STATUS_PENDING)->count() ?: null;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('tracking_code')
                    ->label('Kode Tracking')
                    ->searchable()
                    ->sortable()
                    ->copyable()
                    ->weight('bold')
                    ->color('primary'),
                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->limit(40)
                    ->tooltip(fn($state) => $state),
                TextColumn::make('name')
                    ->label('Nama Pemohon')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('type.name')
                    ->label('Jenis')
                    ->badge()
                    ->color('info'),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->formatStateUsing(fn(string $state): string => Submission::getStatusOptions()[$state] ?? ucfirst($state))
                    ->color(fn(string $state): string => match ($state) {
                        Submission::STATUS_PENDING => 'warning',
                        Submission::STATUS_ADMIN_VERIFICATION => 'info',
                        Submission::STATUS_LEGAL_HARMONIZATION => 'primary',
                        Submission::STATUS_SIGNING => 'secondary',
                        Submission::STATUS_COMPLETED => 'success',
                        Submission::STATUS_REJECTED => 'danger',
                        default => 'gray',
                    }),
                TextColumn::make('created_at')
                    ->label('Tanggal Pengajuan')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('status')
                    ->label('Status')
                    ->options(Submission::getStatusOptions()),
                SelectFilter::make('type_id')
                    ->label('Jenis Produk')
                    ->relationship('type', 'name'),
                Filter::make('created_at')
                    ->schema([
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
                Section::make('Informasi Pengajuan')
                    ->schema([
                        TextEntry::make('tracking_code')
                            ->label('Kode Tracking')
                            ->weight('bold')
                            ->copyable()
                            ->size('lg'),
                        TextEntry::make('status')
                            ->label('Status Saat Ini')
                            ->badge()
                            ->formatStateUsing(fn(string $state): string => Submission::getStatusOptions()[$state] ?? ucfirst($state))
                            ->color(fn(string $state): string => match ($state) {
                                Submission::STATUS_PENDING => 'warning',
                                Submission::STATUS_ADMIN_VERIFICATION => 'info',
                                Submission::STATUS_LEGAL_HARMONIZATION => 'primary',
                                Submission::STATUS_SIGNING => 'secondary',
                                Submission::STATUS_COMPLETED => 'success',
                                Submission::STATUS_REJECTED => 'danger',
                                default => 'gray',
                            }),
                        TextEntry::make('title')
                            ->label('Judul Pengajuan')
                            ->columnSpanFull(),
                        TextEntry::make('product_summary')
                            ->label('Ringkasan')
                            ->columnSpanFull(),
                    ])->columns(2),

                Section::make('Data Pemohon')
                    ->schema([
                        TextEntry::make('name')
                            ->label('Nama Lengkap'),
                        TextEntry::make('nip_nim')
                            ->label('NIP/NIM'),
                        TextEntry::make('unit_kerja')
                            ->label('Unit Kerja'),
                        TextEntry::make('whatsapp')
                            ->label('WhatsApp')
                            ->icon('heroicon-m-phone'),
                    ])->columns(2),

                Section::make('Detail Dokumen')
                    ->schema([
                        TextEntry::make('type.name')
                            ->label('Jenis Produk Hukum'),
                        TextEntry::make('nota_dinas_number')
                            ->label('No. Nota Dinas'),
                        TextEntry::make('cover_letter_path')
                            ->label('Surat Pengantar')
                            ->formatStateUsing(fn($state) => $state ? 'Download' : '-')
                            ->url(fn($record) => $record->cover_letter_path ? asset('storage/' . $record->cover_letter_path) : null)
                            ->openUrlInNewTab()
                            ->icon('heroicon-m-arrow-down-tray')
                            ->color('primary'),
                        TextEntry::make('draft_document_path')
                            ->label('Draft Naskah')
                            ->formatStateUsing(fn($state) => $state ? 'Download' : '-')
                            ->url(fn($record) => $record->draft_document_path ? asset('storage/' . $record->draft_document_path) : null)
                            ->openUrlInNewTab()
                            ->icon('heroicon-m-arrow-down-tray')
                            ->color('primary'),
                    ])->columns(2),

                Section::make('Riwayat Status')
                    ->schema([
                        RepeatableEntry::make('statusHistories')
                            ->label('')
                            ->schema([
                                TextEntry::make('to_status')
                                    ->label('Status')
                                    ->badge()
                                    ->formatStateUsing(fn(string $state): string => Submission::getStatusOptions()[$state] ?? ucfirst($state))
                                    ->color(fn(string $state): string => match ($state) {
                                        Submission::STATUS_PENDING => 'warning',
                                        Submission::STATUS_ADMIN_VERIFICATION => 'info',
                                        Submission::STATUS_LEGAL_HARMONIZATION => 'primary',
                                        Submission::STATUS_SIGNING => 'secondary',
                                        Submission::STATUS_COMPLETED => 'success',
                                        Submission::STATUS_REJECTED => 'danger',
                                        default => 'gray',
                                    }),
                                TextEntry::make('notes')
                                    ->label('Catatan')
                                    ->default('-'),
                                TextEntry::make('user.name')
                                    ->label('Diubah Oleh')
                                    ->default('System'),
                                TextEntry::make('created_at')
                                    ->label('Waktu')
                                    ->dateTime('d M Y, H:i'),
                            ])->columns(4),
                    ])->collapsible(),

                Section::make('Metadata')
                    ->schema([
                        TextEntry::make('created_at')
                            ->label('Tanggal Dibuat')
                            ->dateTime('d M Y, H:i:s'),
                        TextEntry::make('updated_at')
                            ->label('Terakhir Diperbarui')
                            ->dateTime('d M Y, H:i:s'),
                    ])->columns(2)->collapsed(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSubmissions::route('/'),
            'view' => Pages\ViewSubmission::route('/{record}'),
        ];
    }
}
