<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function show($slug)
    {
        $page = \App\Models\Page::where('slug', $slug)->where('is_active', true)->firstOrFail();

        return \Inertia\Inertia::render('About/Show', [
            'page' => $page,
            'links' => \App\Models\Link::all(),
        ]);
    }
}
