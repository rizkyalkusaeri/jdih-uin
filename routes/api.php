<?php

use Illuminate\Support\Facades\Route;

// API routes for lazy loading
Route::prefix('api')->group(function () {
  // Legal Dictionary API
  Route::get('/legal-dictionary', [\App\Http\Controllers\Public\LegalDictionaryController::class, 'api'])
    ->name('api.legal-dictionary');

  // Glossary API
  Route::get('/glossary', [\App\Http\Controllers\Public\GlossaryController::class, 'api'])
    ->name('api.glossary');
});
