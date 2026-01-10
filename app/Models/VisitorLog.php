<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisitorLog extends Model
{
    // Disable updated_at as we only track creation
    public $timestamps = false;

    protected $fillable = [
        'ip_address',
        'url',
        'referer',
        'user_agent',
        'created_at',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
