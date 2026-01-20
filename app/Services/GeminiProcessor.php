<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class GeminiProcessor
{
  protected string $apiKey;
  protected string $baseUrl = 'https://generativelanguage.googleapis.com';

  public function __construct()
  {
    $this->apiKey = config('services.gemini.key') ?? env('GEMINI_API_KEY');

    if (empty($this->apiKey)) {
      throw new \Exception('Gemini API Key is not configured.');
    }
  }

  /**
   * Extract metadata from a PDF file using Gemini.
   *
   * @param string $filePath Absolute path to the local PDF file.
   * @param array $fieldConfig Field configuration from the Category.
   * @return array Extracted data.
   */
  public function extractMetadata(string $filePath, array $fieldConfig): array
  {
    // 1. Upload File
    $fileUri = $this->uploadFile($filePath);

    // 2. Wait for processing
    $this->waitForFileActive($fileUri);

    // 3. Generate Content
    $prompt = $this->constructPrompt($fieldConfig);

    $response = Http::withHeaders([
      'Content-Type' => 'application/json',
    ])->post("{$this->baseUrl}/v1beta/models/gemini-2.0-flash-001:generateContent?key={$this->apiKey}", [
      'contents' => [
        [
          'role' => 'user',
          'parts' => [
            ['file_data' => ['mime_type' => 'application/pdf', 'file_uri' => $fileUri]],
            ['text' => $prompt]
          ]
        ]
      ],
      'generationConfig' => [
        'response_mime_type' => 'application/json'
      ]
    ]);

    if ($response->failed()) {
      Log::error('Gemini API Error: ' . $response->body());
      throw new \Exception('Failed to generate content from Gemini.');
    }

    $json = $response->json();

    // Parse result
    try {
      $text = $json['candidates'][0]['content']['parts'][0]['text'];
      return json_decode($text, true) ?? [];
    } catch (\Exception $e) {
      Log::error('Gemini Response Parsing Error: ' . $e->getMessage(), ['response' => $json]);
      return [];
    }
  }

  protected function uploadFile(string $filePath): string
  {
    $fileSize = filesize($filePath);
    $mimeType = 'application/pdf';

    // Initial upload request to get upload URL
    $response = Http::withHeaders([
      'X-Goog-Upload-Protocol' => 'resumable',
      'X-Goog-Upload-Command' => 'start',
      'X-Goog-Upload-Header-Content-Length' => $fileSize,
      'X-Goog-Upload-Header-Content-Type' => $mimeType,
      'Content-Type' => 'application/json',
    ])->post("{$this->baseUrl}/upload/v1beta/files?key={$this->apiKey}", [
      'file' => [
        'display_name' => basename($filePath)
      ]
    ]);

    $uploadUrl = $response->header('X-Goog-Upload-URL');

    if (!$uploadUrl) {
      throw new \Exception('Failed to initiate file upload to Gemini.');
    }

    // Upload actual bytes
    $fileContent = file_get_contents($filePath);

    $uploadResponse = Http::withHeaders([
      'Content-Length' => $fileSize,
      'X-Goog-Upload-Offset' => 0,
      'X-Goog-Upload-Command' => 'upload, finalize',
    ])->withBody($fileContent, $mimeType)->post($uploadUrl);

    if ($uploadResponse->failed()) {
      throw new \Exception('Failed to upload file bytes to Gemini.');
    }

    return $uploadResponse->json()['file']['uri'];
  }

  protected function waitForFileActive(string $fileUri): void
  {
    $attempts = 0;
    $maxAttempts = 30; // 30 * 2s = 60s timeout

    // Extract file name from URI
    // URI format: https://generativelanguage.googleapis.com/v1beta/files/NAME
    // But the GET endpoint expects just "files/NAME" ideally, or full URL?
    // Actually the API docs say GET https://generativelanguage.googleapis.com/v1beta/files/aaa-bbb-ccc
    // The URI returned is usually the full resource name e.g. https://generativelanguage.googleapis.com/v1beta/files/xyz...
    // Let's assume URI is the full resource URL or name.
    // Actually the "uri" field in response is exactly what we need for the 'file_data'. 
    // To check status, we need the "name" field from upload response, typically "files/..."

    // Wait, the upload response returns: { "file": { "name": "files/...", "uri": "...", "state": "PROCESSING" } }
    // I didn't save the 'name' in uploadFile, only 'uri'.
    // But 'uri' usually maps to the name. Let's fix uploadFile to return whole file object or name.
    // Re-reading code: I returned `['file']['uri']`. 
    // The `uri` is used for generation. The `name` is used for status check.

    // Optimization: Let's extract name from URI or fix uploadFile.
    // URI: https://generativelanguage.googleapis.com/v1beta/files/c44...
    // Name: files/c44...
    // I'll parse it.

    $name = 'files/' .  basename($fileUri);

    while ($attempts < $maxAttempts) {
      $response = Http::get("{$this->baseUrl}/v1beta/{$name}?key={$this->apiKey}");

      if ($response->failed()) {
        sleep(2);
        $attempts++;
        continue;
      }

      $state = $response->json()['state'] ?? 'UNKNOWN';

      if ($state === 'ACTIVE') {
        return;
      }

      if ($state === 'FAILED') {
        throw new \Exception('Gemini File Processing Failed.');
      }

      sleep(2);
      $attempts++;
    }

    throw new \Exception('Timeout waiting for Gemini file processing.');
  }

  protected function constructPrompt(array $fieldConfig): string
  {
    $fields = [];
    foreach ($fieldConfig as $key => $config) {
      if (($config['visible'] ?? false) === true) {
        $fields[] = $key;
      }
    }

    // Add standard fields that might not be in config but are useful/standard
    // abstract is often in config.

    $fieldsList = implode(', ', $fields);

    return <<<EOT
You are an expert legal document analyzer. 
Please extract the following metadata from the provided legal document PDF.
Return ONLY a valid JSON object. Do not include markdown formatting (like ```json).

Target Fields: {$fieldsList}

Instructions for specific fields:
- title: The full title of the regulation/decree.
- number: The official number/nomor of the regulation.
- year: The year of the regulation.
- determination_date: Date formatted as YYYY-MM-DD.
- published_date: Date formatted as YYYY-MM-DD.
- validity_start: Date formatted as YYYY-MM-DD.
- abstract: A concise summary of the content (1 paragraph).
- signer_id: Name of the signer (person/position). Note: This maps to an ID in DB, but just return the Name string found.
- publisher_id: Publisher name.
- place_id: Place of signing (City).
- author: If applicable.
- topic: The main topic or subject.

If a field is not found or not applicable, strictly use null.
EOT;
  }
}
