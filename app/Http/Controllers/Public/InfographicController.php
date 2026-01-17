<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Infographic;
use Inertia\Inertia;

class InfographicController extends Controller
{
  public function index()
  {
    $infographics = Infographic::query()
      ->latest()
      ->paginate(10);

    return Inertia::render('Infographics/Index', [
      'infographics' => $infographics,
    ]);
  }

  public function cover(Infographic $infographic)
  {
    if (!$infographic->cover_image || !\Illuminate\Support\Facades\Storage::disk('local')->exists($infographic->cover_image)) {
      abort(404);
    }

    return response()->file(\Illuminate\Support\Facades\Storage::disk('local')->path($infographic->cover_image));
  }

  public function gallery(Infographic $infographic, int $index)
  {
    $images = $infographic->images ?? [];

    if (!isset($images[$index]) || !\Illuminate\Support\Facades\Storage::disk('local')->exists($images[$index])) {
      abort(404);
    }

    return response()->file(\Illuminate\Support\Facades\Storage::disk('local')->path($images[$index]));
  }
}
