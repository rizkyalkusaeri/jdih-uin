<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\Public\HomeController::class, 'index'])->name('home');

Route::get('/tentang', function () {
    return Inertia::render('About/Index', [
        'links' => \App\Models\Link::all()
    ]);
})->name('about.index');

Route::get('/tentang/struktur-organisasi', function () {
    return Inertia::render('About/Structure', [
        'links' => \App\Models\Link::all()
    ]);
})->name('about.structure');

Route::get('/tentang/faq', function () {
    return Inertia::render('About/FAQ', [
        'links' => \App\Models\Link::all()
    ]);
})->name('about.faq');

Route::get('/tentang/prasyarat', function () {
    return Inertia::render('About/Prasyarat', [
        'links' => \App\Models\Link::all()
    ]);
})->name('about.prasyarat');


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

// Post Image
Route::get('/posts/{post}/image', [\App\Http\Controllers\Public\HomeController::class, 'postImage'])
    ->name('posts.pathimage');

// Informasi Hukum
Route::get('/informasi-hukum', [\App\Http\Controllers\Public\InformationController::class, 'index'])
    ->name('information.index');

Route::get('/informasi-hukum/{slug}', [\App\Http\Controllers\Public\InformationController::class, 'show'])
    ->name('information.show');
