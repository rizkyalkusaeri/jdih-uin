<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FeedbackResource\Pages;
use App\Models\Rating;
use Filament\Forms\Components\DatePicker;
use Filament\Actions\ViewAction;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\HtmlString;

class FeedbackResource extends Resource
{
    protected static ?string $model = Rating::class;

    protected static ?string $modelLabel = 'Feedback';
    protected static ?string $pluralModelLabel = 'Feedback';
    protected static ?string $navigationLabel = 'Feedback';

    public static function getNavigationIcon(): ?string
    {
        return 'heroicon-o-chat-bubble-left-right';
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Monitoring';
    }

    /*
    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
    */

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('legalProduct.title')
                    ->label('Produk Hukum')
                    ->limit(40)
                    ->searchable()
                    ->sortable(),
                TextColumn::make('rating')
                    ->label('Rating')
                    ->formatStateUsing(fn(int $state): HtmlString => new HtmlString(
                        '<span class="text-yellow-500">' . str_repeat('★', $state) . '</span>' .
                            '<span class="text-gray-300">' . str_repeat('★', 5 - $state) . '</span>'
                    ))
                    ->sortable(),
                TextColumn::make('feedback')
                    ->label('Komentar')
                    ->limit(50)
                    ->searchable()
                    ->placeholder('-'),
                TextColumn::make('ip_address')
                    ->label('IP')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('created_at')
                    ->label('Waktu')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('rating')
                    ->label('Rating')
                    ->options([
                        '5' => '★★★★★ (5)',
                        '4' => '★★★★☆ (4)',
                        '3' => '★★★☆☆ (3)',
                        '2' => '★★☆☆☆ (2)',
                        '1' => '★☆☆☆☆ (1)',
                    ]),
                SelectFilter::make('legal_product_id')
                    ->label('Produk Hukum')
                    ->relationship('legalProduct', 'title')
                    ->searchable()
                    ->preload(),
                Filter::make('created_at')
                    ->form([
                        DatePicker::make('from')
                            ->label('Dari Tanggal'),
                        DatePicker::make('until')
                            ->label('Sampai Tanggal'),
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
            ->actions([
                ViewAction::make(),
            ])
            ->bulkActions([
                // Tables\Actions\BulkActionGroup::make([
                //    Tables\Actions\DeleteBulkAction::make(),
                // ]),
            ]);
    }

    public static function infolist(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Informasi Feedback')
                    ->schema([
                        TextEntry::make('legalProduct.title')
                            ->label('Produk Hukum')
                            ->columnSpanFull(),
                        TextEntry::make('legalProduct.number')
                            ->label('Nomor Dokumen'),
                        TextEntry::make('legalProduct.type.name')
                            ->label('Jenis'),
                        TextEntry::make('rating')
                            ->label('Rating')
                            ->formatStateUsing(fn(int $state): HtmlString => new HtmlString(
                                '<span class="text-yellow-500 text-lg">' . str_repeat('★', $state) . '</span>' .
                                    '<span class="text-gray-300 text-lg">' . str_repeat('★', 5 - $state) . '</span>' .
                                    '<span class="ml-2 text-gray-600">(' . $state . '/5)</span>'
                            )),
                        TextEntry::make('feedback')
                            ->label('Komentar/Masukan')
                            ->columnSpanFull()
                            ->placeholder('Tidak ada komentar'),
                    ])->columns(2),
                Section::make('Metadata')
                    ->schema([
                        TextEntry::make('ip_address')
                            ->label('IP Address'),
                        TextEntry::make('created_at')
                            ->label('Waktu Submit')
                            ->dateTime('d M Y, H:i'),
                    ])->columns(2),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageFeedback::route('/'),
        ];
    }
}
