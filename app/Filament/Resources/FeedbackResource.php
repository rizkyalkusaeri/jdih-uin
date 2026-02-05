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
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\DeleteAction;
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
                    ->limit(30)
                    ->searchable()
                    ->sortable()
                    ->tooltip(fn($record) => $record->legalProduct?->title),
                TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('name')
                    ->label('Nama')
                    ->placeholder('-')
                    ->searchable(),
                TextColumn::make('rating')
                    ->label('Rating')
                    ->formatStateUsing(fn(int $state): HtmlString => new HtmlString(
                        '<span class="text-yellow-500">' . str_repeat('★', $state) . '</span>' .
                            '<span class="text-gray-300">' . str_repeat('★', 5 - $state) . '</span>'
                    ))
                    ->sortable(),
                TextColumn::make('survey_score')
                    ->label('Survey Score')
                    ->getStateUsing(function ($record) {
                        // Calculate score: (q1+q2+q3+q4+q5) / 5 * 100
                        $score = 0;
                        if ($record->q1) $score++;
                        if ($record->q2) $score++;
                        if ($record->q3) $score++;
                        if ($record->q4) $score++;
                        if ($record->q5) $score++;
                        $percentage = ($score / 5) * 100;
                        return $score . '/5 (' . $percentage . '%)';
                    })
                    ->badge()
                    ->color(fn($state) => str_contains($state, '100%') ? 'success' : (str_contains($state, '80%') || str_contains($state, '60%') ? 'warning' : 'danger'))
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('feedback')
                    ->label('Saran')
                    ->limit(30)
                    ->searchable()
                    ->placeholder('-'),
                TextColumn::make('created_at')
                    ->label('Waktu')
                    ->dateTime('d M Y, H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('legal_product_id')
                    ->label('Produk Hukum')
                    ->relationship('legalProduct', 'title')
                    ->searchable()
                    ->preload(),
                Filter::make('created_at')
                    ->schema([
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
                Section::make('Informasi Responden')
                    ->schema([
                        TextEntry::make('email')
                            ->label('Email'),
                        TextEntry::make('name')
                            ->label('Nama Lengkap')
                            ->placeholder('-'),
                        TextEntry::make('ip_address')
                            ->label('IP Address'),
                        TextEntry::make('created_at')
                            ->label('Waktu Submit')
                            ->dateTime('d M Y, H:i'),
                    ])->columns(2),

                Section::make('Hasil Survey')
                    ->schema([
                        TextEntry::make('legalProduct.title')
                            ->label('Produk Hukum Terkait')
                            ->columnSpanFull(),

                        TextEntry::make('rating')
                            ->label('Rating Bintang')
                            ->formatStateUsing(fn(int $state): HtmlString => new HtmlString(
                                '<span class="text-yellow-500 text-lg">' . str_repeat('★', $state) . '</span>' .
                                    '<span class="text-gray-300 text-lg">' . str_repeat('★', 5 - $state) . '</span>' .
                                    '<span class="ml-2 text-gray-600">(' . $state . '/5)</span>'
                            ))
                            ->columnSpanFull(),

                        TextEntry::make('q1')
                            ->label('1. Mudah digunakan?')
                            ->formatStateUsing(fn($state) => $state ? 'Setuju' : 'Tidak Setuju')
                            ->badge()
                            ->color(fn($state) => $state ? 'success' : 'danger'),
                        TextEntry::make('q2')
                            ->label('2. Dokumen lengkap?')
                            ->formatStateUsing(fn($state) => $state ? 'Setuju' : 'Tidak Setuju')
                            ->badge()
                            ->color(fn($state) => $state ? 'success' : 'danger'),
                        TextEntry::make('q3')
                            ->label('3. Mudah dipahami?')
                            ->formatStateUsing(fn($state) => $state ? 'Setuju' : 'Tidak Setuju')
                            ->badge()
                            ->color(fn($state) => $state ? 'success' : 'danger'),
                        TextEntry::make('q4')
                            ->label('4. Tampilan menarik?')
                            ->formatStateUsing(fn($state) => $state ? 'Setuju' : 'Tidak Setuju')
                            ->badge()
                            ->color(fn($state) => $state ? 'success' : 'danger'),
                        TextEntry::make('q5')
                            ->label('5. Merekomendasikan?')
                            ->formatStateUsing(fn($state) => $state ? 'Merekomendasikan' : 'Belum')
                            ->badge()
                            ->color(fn($state) => $state ? 'success' : 'danger'),
                    ])->columns(2),

                Section::make('Saran & Masukan')
                    ->schema([
                        TextEntry::make('feedback')
                            ->label('Isi Saran')
                            ->columnSpanFull()
                            ->placeholder('Tidak ada saran'),
                    ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageFeedback::route('/'),
        ];
    }
}
