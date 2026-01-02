<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Signer extends Model
{
    protected $table = 'signers';

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
