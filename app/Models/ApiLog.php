<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiLog extends Model
{
    protected $fillable = [
        'ip_address',
        'endpoint',
        'method',
        'user_agent',
        'status_code',
        'payload',
        'duration_ms',
    ];

    protected $casts = [
        'payload' => 'array',
    ];
}
