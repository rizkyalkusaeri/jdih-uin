<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class Type extends Model
{
    use LogsActivity;

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logFillable()
            ->logOnlyDirty();
    }
    protected $table = 'types';

    protected $fillable = [
        'name',
        'description',
        'slug',
        'status',
        'category_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function legalProducts()
    {
        return $this->hasMany(LegalProduct::class);
    }
}
