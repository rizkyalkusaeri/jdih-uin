<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class Publisher extends Model
{
  use HasFactory, LogsActivity;

  protected $fillable = [
    'name',
    'slug',
    'description',
  ];

  public function getActivitylogOptions(): LogOptions
  {
    return LogOptions::defaults()
      ->logFillable()
      ->logOnlyDirty();
  }

  public function legalProducts(): HasMany
  {
    return $this->hasMany(LegalProduct::class);
  }
}
