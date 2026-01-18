<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\LegalDictionary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LegalDictionaryController extends Controller
{
  public function index(Request $request)
  {
    $query = LegalDictionary::where('is_published', '=', true);

    // Search by text (Title or Description)
    if ($request->filled('q')) {
      $search = $request->input('q');
      $query->where(function ($q) use ($search) {
        $q->where('title', 'like', "%{$search}%")
          ->orWhere('description', 'like', "%{$search}%");
      });
    }

    // Filter by first letter
    if ($request->filled('char')) {
      $char = $request->input('char');
      if ($char === '#') {
        $query->where('title', 'REGEXP', '^[0-9]');
      } else {
        $query->where('title', 'like', "{$char}%");
      }
    }

    $legalDictionaries = $query->orderBy('title', 'asc')
      ->paginate(15)
      ->withQueryString();

    return Inertia::render('LegalDictionary/Index', [
      'legalDictionaries' => $legalDictionaries,
      'filters' => $request->only(['q', 'char']),
    ]);
  }
}
