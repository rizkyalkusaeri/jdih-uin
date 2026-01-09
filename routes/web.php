<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => \Illuminate\Foundation\Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/produk-hukum', [\App\Http\Controllers\Public\LegalProductController::class, 'index'])
    ->name('produk-hukum.index');

Route::get('/produk-hukum/{slug}', [\App\Http\Controllers\Public\LegalProductController::class, 'show'])
    ->name('produk-hukum.show');
