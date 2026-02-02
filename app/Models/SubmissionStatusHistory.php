<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubmissionStatusHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'submission_id',
        'from_status',
        'to_status',
        'notes',
        'changed_by',
    ];

    public function submission()
    {
        return $this->belongsTo(Submission::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'changed_by');
    }
}
