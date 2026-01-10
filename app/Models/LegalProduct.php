<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class LegalProduct extends Model
{
    use HasFactory, SoftDeletes, LogsActivity;

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $fillable = [
        'abstract',
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
        'user_id',
        'type_id',
        'category_id',
        'location_id',
        'legal_field_id',
        'publisher_id',
        'place_id',
        'legal_field_id',
        'signer_id',
        'initiator_id',
        'government_affair',
        'author',
        'edition',
        'page_description',
        'validity_start',
        'validity_end',
        'doc_nature',
        'file_path',
    ];

    protected $casts = [
        'determination_date' => 'date',
        'published_date' => 'date',
        'validity_start' => 'date',
        'validity_end' => 'date',
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

    public function signer(): BelongsTo
    {
        return $this->belongsTo(Signer::class);
    }

    public function initiator(): BelongsTo
    {
        return $this->belongsTo(Initiator::class);
    }

    public function publisher(): BelongsTo
    {
        return $this->belongsTo(Publisher::class);
    }

    public function place(): BelongsTo
    {
        return $this->belongsTo(Place::class);
    }

    public function legalField(): BelongsTo
    {
        return $this->belongsTo(LegalField::class);
    }

    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'legal_product_subject');
    }

    public function replacedDocuments(): BelongsToMany
    {
        return $this->belongsToMany(LegalProduct::class, 'legal_product_histories', 'legal_product_id', 'replaced_legal_product_id')
            ->withTimestamps();
    }

    public function replacedBy(): BelongsToMany
    {
        return $this->belongsToMany(LegalProduct::class, 'legal_product_histories', 'replaced_legal_product_id', 'legal_product_id')
            ->withTimestamps();
    }

    protected static function booted()
    {
        static::creating(function (LegalProduct $legalProduct) {
            if (empty($legalProduct->slug)) {
                $legalProduct->slug = \Illuminate\Support\Str::slug($legalProduct->title . '-' . $legalProduct->number);
            }
        });

        static::updating(function (LegalProduct $legalProduct) {
            if (empty($legalProduct->slug)) {
                $legalProduct->slug = \Illuminate\Support\Str::slug($legalProduct->title . '-' . $legalProduct->number);
            }
        });

        static::saved(function (LegalProduct $legalProduct) {
            // Check if replacements have been synced (this might need to be handled in the Resource specifically if using sync, 
            // but Filament's relationship handling usually triggers logic. 
            // However, BelongsToMany sync doesn't trigger 'saved' on the parent model for the pivot changes directly 
            // unless we hook into the pivot events or handle it in the resource.
            // Simplify: We will handle the robust logic in the Resource or a Service, 
            // BUT for 'saved', we can only detect direct attribute changes.
            // Filament's `relationship()` field does existing sync.
        });
    }

    public function views(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(LegalProductView::class);
    }

    // Cached logic removed to allow real-time counting via withCount('views') in Controller
    // public function getViewsCountAttribute() { ... }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logFillable()
            ->logOnlyDirty();
    }
}
