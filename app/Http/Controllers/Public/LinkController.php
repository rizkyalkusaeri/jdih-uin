<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Link;
use Illuminate\Support\Facades\Storage;

class LinkController extends Controller
{
  public function logo(Link $link)
  {
    if (!$link->logo_path || !Storage::disk('local')->exists($link->logo_path)) {
      abort(404);
    }

    return Storage::disk('local')->response($link->logo_path);
  }
}
