<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSubmissionRequest;
use App\Models\Submission;
use App\Models\Type;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class SubmissionController extends Controller
{
  public function create()
  {
    return Inertia::render('Submission/Create', [
      'types' => Type::all(),
      'unit_kerjas' => [
        'Fakultas Dakwah dan Komunikasi',
        'Fakultas Syariah dan Hukum',
        'Fakultas Tarbiyah dan Keguruan',
        'Fakultas Adab dan Humaniora',
        'Fakultas Ushuluddin',
        'Fakultas Psikologi',
        'Fakultas Sains dan Teknologi',
        'Fakultas Ilmu Sosial dan Ilmu Politik',
        'Fakultas Ekonomi dan Bisnis Islam',
        'Pascasarjana',
        'LPM',
        'LP2M',
        'Rektorat',
        'Unit Lainnya',
      ]
    ]);
  }

  public function store(StoreSubmissionRequest $request)
  {
    $data = $request->validated();

    // Handle File Uploads
    if ($request->hasFile('cover_letter')) {
      $data['cover_letter_path'] = $request->file('cover_letter')->store('submissions/cover_letters', 'public');
    }

    if ($request->hasFile('draft_document')) {
      $data['draft_document_path'] = $request->file('draft_document')->store('submissions/drafts', 'public');
    }

    // Generate Tracking Code
    do {
      $code = 'REG-' . date('Ymd') . '-' . strtoupper(Str::random(4));
    } while (Submission::where('tracking_code', $code)->exists());

    $data['tracking_code'] = $code;
    $data['status'] = 'pending';

    Submission::create($data);

    return redirect()->back()->with('success', 'Pengajuan berhasil disimpan. Kode Tracking Anda: ' . $code);
  }
}
