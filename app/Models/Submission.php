<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Submission extends Model
{
    use HasFactory, SoftDeletes;

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
}
