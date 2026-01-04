<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Peraturan Perundang-Undangan', 'slug' => 'peraturan-perundang-undangan', 'type' => 'legal'],
            ['name' => 'Monografi Hukum', 'slug' => 'monografi-hukum', 'type' => 'legal'],
            ['name' => 'Dokumen Hukum Khusus', 'slug' => 'dokumen-hukum-khusus', 'type' => 'legal'],
            ['name' => 'Pengumuman', 'slug' => 'pengumuman', 'type' => 'post'],
            ['name' => 'Berita', 'slug' => 'berita', 'type' => 'post'],
            ['name' => 'Laporan', 'slug' => 'laporan', 'type' => 'post'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
