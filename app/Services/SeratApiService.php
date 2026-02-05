<?php

namespace App\Services;

use App\Models\General;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class SeratApiService
{
  protected string $baseUrl = 'https://serat.uinsgd.ac.id/api/v1';

  protected function getToken(): ?string
  {
    // Fetch token from Generals table where title is 'bearer' (case-insensitive)
    $general = General::whereRaw('LOWER(title) = ?', ['bearer'])->first();

    // If not found, try to find by slug maybe? But instructions said title 'bearer' -> slug has token.
    // Fallback or logging if missing?

    return $general ? $general->slug : null;
  }

  public function fetchSurat(array $params = [])
  {
    $token = $this->getToken();

    if (!$token) {
      return [
        'status' => 'error',
        'message' => 'API Token not found. Please configure "bearer" token in General settings.',
      ];
    }

    // Default constraints
    $defaultParams = [
      'status_ttd' => 'signed',
      'limit' => 10,
    ];

    $queryParams = array_merge($defaultParams, $params);

    try {
      $response = Http::withToken($token)
        ->acceptJson()
        ->get($this->baseUrl . '/surat', $queryParams);

      if ($response->successful()) {
        return $response->json();
      }

      return [
        'status' => 'error',
        'message' => 'API Error: ' . $response->status() . ' - ' . $response->body(),
      ];
    } catch (\Exception $e) {
      Log::error('Serat API Error: ' . $e->getMessage());
      return [
        'status' => 'error',
        'message' => 'Connection Exception: ' . $e->getMessage(),
      ];
    }
  }

  public function fetchSuratDetail(string $id)
  {
    $token = $this->getToken();

    if (!$token) {
      return [
        'status' => 'error',
        'message' => 'API Token not found.',
      ];
    }

    try {
      $response = Http::withToken($token)
        ->acceptJson()
        ->get($this->baseUrl . '/surat/' . $id);

      if ($response->successful()) {
        return $response->json();
      }

      return [
        'status' => 'error',
        'message' => 'API Error: ' . $response->status(),
      ];
    } catch (\Exception $e) {
      return [
        'status' => 'error',
        'message' => 'Connection Exception: ' . $e->getMessage(),
      ];
    }
  }
}
