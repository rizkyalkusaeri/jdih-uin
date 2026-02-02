<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Submission extends Model
{
    use HasFactory, SoftDeletes;

    // Status Constants
    const STATUS_PENDING = 'pending';
    const STATUS_ADMIN_VERIFICATION = 'admin_verification';
    const STATUS_LEGAL_HARMONIZATION = 'legal_harmonization';
    const STATUS_SIGNING = 'signing';
    const STATUS_COMPLETED = 'completed';
    const STATUS_REJECTED = 'rejected';

    protected $fillable = [
        'name',
        'nip_nim',
        'unit_kerja',
        'whatsapp',
        'type_id',
        'nota_dinas_number',
        'title',
        'product_summary',
        'cover_letter_path',
        'draft_document_path',
        'tracking_code',
        'status',
    ];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function statusHistories()
    {
        return $this->hasMany(SubmissionStatusHistory::class)->orderBy('created_at', 'desc');
    }

    public function legalProduct()
    {
        return $this->hasOne(LegalProduct::class);
    }

    public static function getStatusOptions(): array
    {
        return [
            self::STATUS_PENDING => 'Pengajuan Diterima',
            self::STATUS_ADMIN_VERIFICATION => 'Verifikasi Admin',
            self::STATUS_LEGAL_HARMONIZATION => 'Harmonisasi Legal',
            self::STATUS_SIGNING => 'Tanda Tangan',
            self::STATUS_COMPLETED => 'Terbit & Selesai',
            self::STATUS_REJECTED => 'Ditolak',
        ];
    }

    public function getStatusLabelAttribute(): string
    {
        return self::getStatusOptions()[$this->status] ?? ucfirst($this->status);
    }

    public function getProgressPercentageAttribute(): int
    {
        $stages = [
            self::STATUS_PENDING => 20,
            self::STATUS_ADMIN_VERIFICATION => 40,
            self::STATUS_LEGAL_HARMONIZATION => 60,
            self::STATUS_SIGNING => 80,
            self::STATUS_COMPLETED => 100,
            self::STATUS_REJECTED => 0,
        ];

        return $stages[$this->status] ?? 0;
    }
}
