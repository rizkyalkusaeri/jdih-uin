<?php

namespace App\Filament\Resources\SubmissionResource\Pages;

use App\Filament\Resources\SubmissionResource;
use App\Models\Submission;
use App\Models\SubmissionStatusHistory;
use Filament\Actions\Action;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ViewRecord;
use Illuminate\Support\Facades\Auth;

class ViewSubmission extends ViewRecord
{
    protected static string $resource = SubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('updateStatus')
                ->label('Update Status')
                ->icon('heroicon-o-arrow-path')
                ->color('primary')
                ->form([
                    Select::make('status')
                        ->label('Status Baru')
                        ->options(Submission::getStatusOptions())
                        ->required()
                        ->default(fn() => $this->record->status),
                    Textarea::make('notes')
                        ->label('Catatan')
                        ->placeholder('Tambahkan catatan untuk perubahan status ini...')
                        ->rows(3),
                ])
                ->action(function (array $data): void {
                    $oldStatus = $this->record->status;
                    $newStatus = $data['status'];

                    if ($oldStatus === $newStatus) {
                        Notification::make()
                            ->warning()
                            ->title('Status Tidak Berubah')
                            ->body('Status yang dipilih sama dengan status saat ini.')
                            ->send();
                        return;
                    }

                    // Create history record
                    SubmissionStatusHistory::create([
                        'submission_id' => $this->record->id,
                        'from_status' => $oldStatus,
                        'to_status' => $newStatus,
                        'notes' => $data['notes'],
                        'changed_by' => Auth::id(),
                    ]);

                    // Update submission status
                    $this->record->update(['status' => $newStatus]);

                    Notification::make()
                        ->success()
                        ->title('Status Diperbarui')
                        ->body('Status pengajuan berhasil diperbarui menjadi ' . Submission::getStatusOptions()[$newStatus])
                        ->send();

                    $this->refreshFormData(['status']);
                })
                ->modalHeading('Update Status Pengajuan')
                ->modalSubmitActionLabel('Simpan Perubahan')
                ->modalWidth('md'),
        ];
    }
}
