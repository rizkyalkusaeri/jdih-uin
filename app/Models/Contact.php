<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'category',
        'name',
        'address',
        'identity_number',
        'phone',
        'email',
        'identity_file_path',
        'ip_address',
        'user_agent',
    ];
}
