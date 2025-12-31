<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class LegalProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'number',
        'slug',
        'year',
        'determination_date',
        'published_date',
        'related_document',
        'rule_document',
        'status',
        'language',
        'source',
        'file_path',
        'category_id',
        'user_id',
        'type_id',
        'location_id',
        'legal_field_id',
    ];

    protected $casts = [
        'determination_date' => 'date',
        'published_date' => 'date',
        'year' => 'integer',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function items(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'legal_product_subject');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(Type::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function legalField(): BelongsTo
    {
        return $this->belongsTo(LegalField::class);
    }

    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'legal_product_subject');
    }
}
