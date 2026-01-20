<?php

namespace App\Filament\Pages;

use App\Filament\Resources\LegalProductResource;
use App\Models\Type;
use App\Services\AIProcessor;
use Filament\Actions\Action;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class GenerateLegalProduct extends Page implements HasForms
{
  use InteractsWithForms;

  public static function getNavigationIcon(): ?string
  {
    return 'heroicon-o-sparkles';
  }

  public static function getNavigationGroup(): ?string
  {
    return 'Manajemen Konten';
  }
  protected static ?string $navigationLabel = 'Generate Produk Hukum';
  protected static ?string $title = 'Generate Produk Hukum (AI)';

  protected string $view = 'filament.pages.generate-legal-product';

  public ?array $data = [];

  public function mount(): void
  {
    $this->form->fill();
  }

  public function form(Schema $schema): Schema
  {
    return $schema
      ->schema([
        Section::make('Upload Dokumen')
          ->description('Pilih jenis produk hukum dan upload file PDF untuk ekstraksi otomatis.')
          ->schema([
            Select::make('type_id')
              ->label('Jenis Produk Hukum')
              ->options(Type::where('status', 'active')->pluck('name', 'id'))
              ->searchable()
              ->preload()
              ->required()
              ->live(),
            FileUpload::make('document')
              ->label('File Lampiran (PDF)')
              ->disk('public') // Explicitly use public disk
              ->acceptedFileTypes(['application/pdf'])
              ->maxSize(10240) // 10MB
              ->directory('temp-generation')
              ->required(),
          ])->columns(1)->maxWidth('md'),
      ])
      ->statePath('data');
  }

  public function generate()
  {
    $data = $this->form->getState();
    $typeId = $data['type_id'];

    // Filament FileUpload stores the file path relative to the disk's root.
    // Use Storage::disk('public')->path() to get the absolute path.
    $filePath = \Illuminate\Support\Facades\Storage::disk('public')->path($data['document']);

    try {
      // 1. Get Config
      $type = Type::with('category')->findOrFail($typeId);
      $fieldConfig = $type->category->field_config ?? [];

      // 2. Call AI Processor
      $processor = new AIProcessor();
      $extractedData = $processor->extractMetadata($filePath, $fieldConfig);

      if (empty($extractedData)) {
        Notification::make()->title('Gagal mengekstrak data dari dokumen.')->danger()->send();
        return;
      }

      // 3. Prepare Data for Create Form
      $prefillData = array_merge($extractedData, [
        'type_id' => $typeId,
        'category_id' => $type->category_id,
        // We don't automatically set 'file_path' because the Create form expects it in its own directory structure.
        // Optionally we could move the file here, but for now let's let the user re-upload or we handle file move logic carefully.
        // Improvement: We can move the temp file to the 'legal-products' directory and pass the path.
      ]);

      // Move file to permanent location to save user from re-uploading
      $newPath = 'legal-products/' . basename($data['document']);
      // Actually Filament FileUpload usually stores in public disk.
      // Let's copy it.
      if (\Illuminate\Support\Facades\Storage::disk('public')->exists($data['document'])) {
        \Illuminate\Support\Facades\Storage::disk('public')->copy($data['document'], $newPath);
        $prefillData['file_path'] = $newPath;
      }

      // 4. Cache and Redirect
      $key = Str::uuid()->toString();
      Cache::put("legal-product-prefill-{$key}", $prefillData, now()->addMinutes(30));

      Notification::make()->title('Data berhasil diekstrak!')->success()->send();

      return redirect()->to(LegalProductResource::getUrl('create', ['prefill_id' => $key]));
    } catch (\Exception $e) {
      Notification::make()
        ->title('Terjadi Kesalahan')
        ->body($e->getMessage())
        ->danger()
        ->send();
    }
  }

  /**
   * @return array<Action>
   */
  protected function getFormActions(): array
  {
    return [
      Action::make('generate')
        ->label('Generate Metadata')
        ->submit('generate')
        ->color('primary')
        ->icon('heroicon-m-sparkles'),
    ];
  }
}
