<?php

namespace App\Livewire;

use App\Models\Type;
use App\Services\SeratApiService;
use Filament\Notifications\Notification;
use Livewire\Component;

use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Schemas\Components\Grid;

class SeratImporter extends Component implements HasForms
{
    use InteractsWithForms;

    public ?array $data = [];

    public $documents = [];
    public $selectedDetail = null;
    public $typeId = null;

    protected $service;

    public function boot(SeratApiService $service)
    {
        $this->service = $service;
    }

    public function mount(): void
    {
        $this->form->fill();
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Grid::make(4)
                    ->schema([
                        TextInput::make('search')
                            ->label('Pencarian')
                            ->placeholder('Cari Nomor atau Perihal...')
                            ->columnSpan(2),
                        DatePicker::make('startDate')
                            ->label('Dari Tanggal'),
                        DatePicker::make('endDate')
                            ->label('Sampai Tanggal'),
                    ]),
            ])
            ->statePath('data');
    }

    public function searchDocuments()
    {
        $params = [
            'search' => $this->data['search'] ?? '',
            'status_ttd' => 'signed',
        ];

        if ($this->data['startDate'] ?? null) $params['start_date'] = $this->data['startDate'];
        if ($this->data['endDate'] ?? null) $params['end_date'] = $this->data['endDate'];

        // Reset selected
        $this->selectedDetail = null;
        $this->documents = [];

        $response = $this->service->fetchSurat($params);

        if (isset($response['status']) && $response['status'] == 'success') {
            // Check if data is paginated or flat list
            // Assuming data is an array inside 'data' key or 'data' -> 'data'
            $data = $response['data'];
            if (isset($data['data']) && is_array($data['data'])) {
                $this->documents = $data['data'];
            } elseif (is_array($data)) {
                $this->documents = $data;
            }
        } else {
            Notification::make()
                ->title('Gagal mengambil data')
                ->body($response['message'] ?? 'Unknown Error')
                ->danger()
                ->send();
        }
    }

    public function selectDocument($id)
    {
        $response = $this->service->fetchSuratDetail($id);

        if (isset($response['status']) && $response['status'] == 'success') {
            $this->selectedDetail = $response['data'];
        } else {
            Notification::make()
                ->title('Gagal mengambil detail')
                ->body($response['message'] ?? 'Unknown Error')
                ->danger()
                ->send();
        }
    }

    public function import()
    {
        if (!$this->selectedDetail) return;

        if (!$this->typeId) {
            Notification::make()
                ->title('Harap pilih Jenis Produk Hukum')
                ->warning()
                ->send();
            return;
        }

        $data = [
            'title' => $this->selectedDetail['perihal'] ?? '',
            'number' => $this->selectedDetail['nomor_surat'] ?? '',
            'determination_date' => $this->selectedDetail['tanggal_surat'] ?? null,
            'signer_name' => $this->selectedDetail['penandatangan'] ?? null,
            'link' => $this->selectedDetail['file_url'] ?? null,
            'type_id' => $this->typeId,
            'source' => 'Serat API',
        ];

        $this->dispatch('fill-from-serat', data: $data);

        Notification::make()
            ->title('Berhasil di-import')
            ->success()
            ->send();

        // Close the modal this component is in
        // $this->dispatch('close-modal', id: 'import-serat-modal');
    }

    public function render()
    {
        return view('livewire.serat-importer', [
            'types' => Type::where('status', 'active')->pluck('name', 'id'),
        ]);
    }
}
