<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $table = 'types';

    protected $fillable = [
        'name',
        'description',
        'slug',
        'status',
    ];

    public function legalProducts()
    {
        return $this->hasMany(LegalProduct::class);
    }
}
