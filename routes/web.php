<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\Public\HomeController::class, 'index'])->name('home');

use App\Models\General;
use App\Models\Faq;

Route::get('/tentang/faq', function () {
    return Inertia::render('About/FAQ', [
        'links' => \App\Models\Link::all(),
        'faqs' => Faq::where('is_active', true)->orderBy('sort_order', 'asc')->get()
    ]);
})->name('about.faq');

Route::get('/tentang/{slug}', [\App\Http\Controllers\Public\PageController::class, 'show'])
    ->name('about.show');


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

// Contact
Route::get('/kontak', [\App\Http\Controllers\Public\ContactController::class, 'index'])
    ->name('contact.index');

Route::post('/kontak', [\App\Http\Controllers\Public\ContactController::class, 'store'])
    ->name('contact.store');

// Informasi Hukum
Route::get('/informasi-hukum', [\App\Http\Controllers\Public\InformationController::class, 'index'])
    ->name('information.index');

Route::get('/glosarium', [\App\Http\Controllers\Public\GlossaryController::class, 'index'])
    ->name('glossary.index');

Route::get('/kamus-hukum', [\App\Http\Controllers\Public\LegalDictionaryController::class, 'index'])
    ->name('legal-dictionary.index');

Route::get('/informasi-hukum/{slug}', [\App\Http\Controllers\Public\InformationController::class, 'show'])
    ->name('information.show');

// Infografis
Route::get('/infografis', [\App\Http\Controllers\Public\InfographicController::class, 'index'])
    ->name('infographics.index');
Route::get('/infografis/{infographic}/cover', [\App\Http\Controllers\Public\InfographicController::class, 'cover'])
    ->name('infographics.cover');
Route::get('/infografis/{infographic}/gallery/{index}', [\App\Http\Controllers\Public\InfographicController::class, 'gallery'])
    ->name('infographics.gallery');

// Statistik
Route::get('/statistik', [\App\Http\Controllers\Public\StatisticsController::class, 'index'])
    ->name('statistics.index');
