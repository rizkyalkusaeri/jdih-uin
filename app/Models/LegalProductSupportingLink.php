<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LegalProductSupportingLink extends Model
{
    protected $fillable = ['legal_product_id', 'name', 'url'];

    public function legalProduct()
    {
        return $this->belongsTo(LegalProduct::class);
    }
}
