<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Smalot\PdfParser\Parser;

class AIProcessor
{
  protected string $apiKey;
  protected string $baseUrl;
  protected string $model;

  public function __construct()
  {
    $this->apiKey = config('services.sumopod.key');
    $this->baseUrl = config('services.sumopod.base_url', 'https://ai.sumopod.com/v1/chat/completions');
    $this->model = config('services.sumopod.model', 'gpt-4o-mini');

    if (empty($this->apiKey)) {
      throw new \Exception('Sumopod API Key is not configured.');
    }
  }

  /**
   * Extract metadata from a PDF file using Sumopod (via extracted text).
   *
   * @param string $filePath Absolute path to the local PDF file.
   * @param array $fieldConfig Field configuration from the Category.
   * @return array Extracted data.
   */
  public function extractMetadata(string $filePath, array $fieldConfig): array
  {
    Log::info("AIProcessor: Parsing PDF at path: " . $filePath);

    // 1. Parse PDF to Text
    $text = $this->parsePdfToText($filePath);

    Log::info("AIProcessor: Extracted text length: " . strlen($text));

    if (empty($text)) {
      Log::warning("AIProcessor: Extracted text is empty.");
      throw new \Exception('Gagal mengekstrak teks dari PDF. Pastikan file PDF tidak terenkripsi dan dapat dibaca.');
    }

    // 2. Construct Prompt
    $systemPrompt = $this->constructSystemPrompt($fieldConfig);

    // Truncate text if too long (simple character limit for now, approx 100k chars ~ 20-30k tokens)
    // Adjust based on model limits. gpt-4o-mini has 128k context.
    $text = substr($text, 0, 100000);

    // 3. Call Sumopod API
    $response = Http::withHeaders([
      'Authorization' => 'Bearer ' . $this->apiKey,
      'Content-Type' => 'application/json',
    ])->post($this->baseUrl, [
      'model' => $this->model,
      'messages' => [
        [
          'role' => 'system',
          'content' => $systemPrompt
        ],
        [
          'role' => 'user',
          'content' => "Here is the document text:\n\n" . $text
        ]
      ],
      'temperature' => 0.1, // Low temperature for factual extraction
      'response_format' => ['type' => 'json_object']
    ]);

    if ($response->failed()) {
      Log::error('Sumopod API Error: ' . $response->body());
      throw new \Exception('Failed to generate content from Sumopod.');
    }

    $json = $response->json();

    // 4. Parse Result
    try {
      $content = $json['choices'][0]['message']['content'];
      return json_decode($content, true) ?? [];
    } catch (\Exception $e) {
      Log::error('Sumopod Response Parsing Error: ' . $e->getMessage(), ['response' => $json]);
      return [];
    }
  }

  protected function parsePdfToText(string $filePath): string
  {
    try {
      $parser = new Parser();
      $pdf = $parser->parseFile($filePath);
      return $pdf->getText();
    } catch (\Exception $e) {
      Log::error('PDF Parsing Error: ' . $e->getMessage());
      throw $e;
    }
  }

  protected function constructSystemPrompt(array $fieldConfig): string
  {
    $fields = [];
    foreach ($fieldConfig as $key => $config) {
      if (($config['visible'] ?? false) === true) {
        $fields[] = $key;
      }
    }
    $fieldsList = implode(', ', $fields);

    return <<<EOT
You are an expert legal document analyzer. 
Please extract the following metadata from the provided legal document text.
Return ONLY a valid JSON object.

Target Fields: {$fieldsList}

Instructions for specific fields:
- title: The full title of the regulation/decree.
- number: The official number/nomor of the regulation.
- year: The year of the regulation.
- determination_date: Date formatted as YYYY-MM-DD.
- published_date: Date formatted as YYYY-MM-DD.
- validity_start: Date formatted as YYYY-MM-DD.
- abstract: A concise sum Abstrak dari dokumen, jika tidak ada maka null Name of the signer (person/position).
- publisher_id: Publisher name (Penerbit/Pemrakarsa/Universitas/Instansi/Lembaga/Kementrian/Lembaga Negara).
- place_id: Nama Kota atau Daerah ditandatangani atau disahkan atau diterbitkan seperti : Jakarta, Bandung.
- location_id: Name of the storage location (Tempat penyimpanan dokumen seperti: Biro Hukum).
- legal_field_id: Name of the legal field (Bidang Hukum).
ng.
- location_name: Name of the storage location (e.g. Biro Hukum).
- legal_field_name: Name of the legal field (, misal: JDIH UIN Sunan Gunung Djati Bandung, Website, Buku, dllBidang HukumPenulis buku, dokumen, dlle document (Bahasa Indonesia or English).
- source: Source of the document.
- author: The author name (if explicit).
- topic: The main topic or subject.

If a field is not found or not applicable, strictly use null.
EOT;
  }

  /**
   * Generate a description/definition for a given legal term/title.
   *
   * @param string $title
   * @return string
   */
  public function generateDescription(string $title): string
  {
    $systemPrompt = <<<EOT
You are an expert legal dictionary assistant.
Your task is to provide a clear, concise, and accurate definition for the legal term provided.
The definition MUST be in Bahasa Indonesia.
The definition should be suitable for a general audience but legally accurate within the context of Indonesian Law.
Format the output as a simple paragraph. Do not include quotes or "Definition: " prefixes.
EOT;

    $response = Http::withHeaders([
      'Authorization' => 'Bearer ' . $this->apiKey,
      'Content-Type' => 'application/json',
    ])->post($this->baseUrl, [
      'model' => $this->model,
      'messages' => [
        [
          'role' => 'system',
          'content' => $systemPrompt
        ],
        [
          'role' => 'user',
          'content' => "Term: " . $title
        ]
      ],
      'temperature' => 0.3,
    ]);

    if ($response->failed()) {
      Log::error('Sumopod API Error (Description): ' . $response->body());
      throw new \Exception('Failed to generate description from AI.');
    }

    $json = $response->json();

    try {
      return $json['choices'][0]['message']['content'] ?? '';
    } catch (\Exception $e) {
      return '';
    }
  }
}
