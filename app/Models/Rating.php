<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
  use HasFactory;

  protected $fillable = [
    'legal_product_id',
    'ip_address',
    'rating',
    'feedback',
  ];

  public function legalProduct()
  {
    return $this->belongsTo(LegalProduct::class);
  }
}
