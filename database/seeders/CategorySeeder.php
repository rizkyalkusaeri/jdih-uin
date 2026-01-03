<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Peraturan', 'slug' => 'peraturan', 'type' => 'legal'],
            ['name' => 'Artikel Hukum', 'slug' => 'artikel-hukum', 'type' => 'legal'],
            ['name' => 'Putusan', 'slug' => 'putusan', 'type' => 'legal'],
            ['name' => 'Pengumuman', 'slug' => 'pengumuman', 'type' => 'post'],
            ['name' => 'Berita', 'slug' => 'berita', 'type' => 'post'],
            ['name' => 'Laporan', 'slug' => 'laporan', 'type' => 'post'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
