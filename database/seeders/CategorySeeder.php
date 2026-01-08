<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Peraturan Perundang-Undangan',
                'slug' => 'peraturan-perundang-undangan',
                'type' => 'legal',
                'field_config' => [
                    'title' => ['visible' => true, 'required' => true],
                    'number' => ['visible' => true, 'required' => true],
                    'publisher_id' => ['visible' => true, 'required' => true],
                    'place_id' => ['visible' => true, 'required' => true],
                    'published_date' => ['visible' => true, 'required' => true],
                    'status' => ['visible' => true, 'required' => true],
                    'location_id' => ['visible' => true, 'required' => true],
                    'determination_date' => ['visible' => true, 'required' => false],
                    'language' => ['visible' => true, 'required' => false],
                    'source' => ['visible' => true, 'required' => false],
                    'legal_field_id' => ['visible' => true, 'required' => false],
                    'signer_id' => ['visible' => true, 'required' => false],
                    'initiator_id' => ['visible' => true, 'required' => false],
                    'government_affair' => ['visible' => true, 'required' => false],
                    'abstract' => ['visible' => true, 'required' => false],
                    'replacedDocuments' => ['visible' => true, 'required' => false],
                    // Standard fields always present but configurable if needed
                ]
            ],
            [
                'name' => 'Monografi Hukum',
                'slug' => 'monografi-hukum',
                'type' => 'legal',
                'field_config' => [
                    'title' => ['visible' => true, 'required' => true],
                    'number' => ['visible' => true, 'required' => false],
                    'author' => ['visible' => true, 'required' => true],
                    'publisher_id' => ['visible' => true, 'required' => true],
                    'place_id' => ['visible' => true, 'required' => true],
                    'year' => ['visible' => true, 'required' => false],
                    'edition' => ['visible' => true, 'required' => false],
                    'page_description' => ['visible' => true, 'required' => false],
                    'language' => ['visible' => true, 'required' => false],
                ]
            ],
            [
                'name' => 'Dokumen Hukum Khusus',
                'slug' => 'dokumen-hukum-khusus',
                'type' => 'legal',
                'field_config' => [
                    'title' => ['visible' => true, 'required' => true],
                    'number' => ['visible' => true, 'required' => false],
                    'publisher_id' => ['visible' => true, 'required' => true],
                    'place_id' => ['visible' => true, 'required' => true],
                    'determination_date' => ['visible' => true, 'required' => false],
                    'status' => ['visible' => true, 'required' => false],
                    'validity_start' => ['visible' => true, 'required' => false],
                    'validity_end' => ['visible' => true, 'required' => false],
                    'doc_nature' => ['visible' => true, 'required' => false],
                    'replacedDocuments' => ['visible' => true, 'required' => false],
                ]
            ],
            ['name' => 'Event', 'slug' => 'event', 'type' => 'post'],
            ['name' => 'Berita', 'slug' => 'berita', 'type' => 'post'],
            ['name' => 'Laporan', 'slug' => 'laporan', 'type' => 'post'],
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(
                ['slug' => $category['slug']],
                $category
            );
        }
    }
}
