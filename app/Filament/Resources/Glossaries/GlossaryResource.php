<?php

namespace App\Filament\Resources\Glossaries;

use App\Filament\Resources\Glossaries\Pages;
use App\Models\Glossary;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

class GlossaryResource extends Resource
{
    protected static ?string $model = Glossary::class;

    protected static ?string $modelLabel = 'Glosarium';
    protected static ?string $pluralModelLabel = 'Glosarium';
    protected static ?string $navigationLabel = 'Glosarium';

    protected static string | \UnitEnum | null $navigationGroup = 'Manajemen Konten';

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-book-open';


    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Judul')
                    ->required()
                    ->maxLength(255)
                    ->suffixAction(
                        Action::make('generate_ai')
                            ->icon('heroicon-o-sparkles')
                            ->tooltip('Generate Deskripsi via AI')
                            ->action(function (Get $get, Set $set) {
                                $title = $get('title');
                                if (!$title) {
                                    \Filament\Notifications\Notification::make()
                                        ->title('Judul harus diisi terlebih dahulu')
                                        ->warning()
                                        ->send();
                                    return;
                                }

                                \Filament\Notifications\Notification::make()
                                    ->title('Sedang memproses AI...')
                                    ->info()
                                    ->send();

                                try {
                                    $processor = new \App\Services\AIProcessor();
                                    $description = $processor->generateDescription($title);

                                    if ($description) {
                                        $set('description', $description);
                                        \Filament\Notifications\Notification::make()
                                            ->title('Deskripsi berhasil digenerate!')
                                            ->success()
                                            ->send();
                                    } else {
                                        \Filament\Notifications\Notification::make()
                                            ->title('Gagal mendapatkan respon AI')
                                            ->danger()
                                            ->send();
                                    }
                                } catch (\Exception $e) {
                                    \Filament\Notifications\Notification::make()
                                        ->title('Error: ' . $e->getMessage())
                                        ->danger()
                                        ->send();
                                }
                            })
                    ),
                Forms\Components\RichEditor::make('description')
                    ->label('Deskripsi')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\Toggle::make('is_published')
                    ->label('Publikasi')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('description')
                    ->label('Deskripsi')
                    ->limit(50)
                    ->html(),
                Tables\Columns\IconColumn::make('is_published')
                    ->label('Publikasi')
                    ->boolean(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
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
            'index' => Pages\ListGlossaries::route('/'),
        ];
    }
}
