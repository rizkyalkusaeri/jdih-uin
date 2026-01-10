<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class Category extends Model
{
    use HasFactory, SoftDeletes, LogsActivity;

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logFillable()
            ->logOnlyDirty();
    }

    protected $fillable = [
        'name',
        'slug',
        'type',
        'status',
        'field_config',
    ];

    protected $casts = [
        'field_config' => 'array',
    ];

    public function legalProducts(): HasMany
    {
        return $this->hasMany(LegalProduct::class);
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
