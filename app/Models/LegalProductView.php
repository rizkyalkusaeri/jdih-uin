<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LegalProductView extends Model
{
    // Disable updated_at
    public $timestamps = false;

    protected $fillable = [
        'legal_product_id',
        'ip_address',
        'user_agent',
        'created_at',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    public function legalProduct()
    {
        return $this->belongsTo(LegalProduct::class);
    }
    //
}
