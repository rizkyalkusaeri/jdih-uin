<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    $totalVisitors = \Illuminate\Support\Facades\Cache::remember('total_visitors', 60, function () {
        return \App\Models\VisitorLog::count();
    });

    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => \Illuminate\Foundation\Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'totalVisitors' => $totalVisitors,
    ]);
});


Route::get('/produk-hukum', [\App\Http\Controllers\Public\LegalProductController::class, 'index'])
    ->name('produk-hukum.index');

Route::get('/produk-hukum/{slug}', [\App\Http\Controllers\Public\LegalProductController::class, 'show'])
    ->name('produk-hukum.show');

// Secure Download & Preview
Route::get('/produk-hukum/{legalProduct}/download', [\App\Http\Controllers\Public\LegalProductController::class, 'download'])
    ->name('produk-hukum.download');

Route::get('/produk-hukum/{legalProduct}/preview', [\App\Http\Controllers\Public\LegalProductController::class, 'preview'])
    ->name('produk-hukum.preview');

// Rating
Route::post('/produk-hukum/{legalProduct}/rate', [\App\Http\Controllers\Public\LegalProductController::class, 'rate'])
    ->name('produk-hukum.rate');

// Link Logo
Route::get('/links/{link}/logo', [\App\Http\Controllers\Public\LinkController::class, 'logo'])
    ->name('links.logo');
