<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LegalProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'number',
        'year',
        'category_id',
        'status',
        'file_path',
        'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'year' => 'integer',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
