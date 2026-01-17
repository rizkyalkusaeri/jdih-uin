<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Infographic extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'cover_image',
        'images',
        'description',
    ];

    protected $casts = [
        'images' => 'array',
    ];
}
