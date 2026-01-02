<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LegalField extends Model
{
    protected $table = 'legal_fields';

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
