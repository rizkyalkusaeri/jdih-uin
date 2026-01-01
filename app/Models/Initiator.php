<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Initiator extends Model
{
    protected $table = 'initiators';

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
