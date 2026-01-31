<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LegalDictionarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 20; $i++) {
            \App\Models\LegalDictionary::create([
                'title' => 'Kamus Hukum ' . $i,
                'description' => 'Deskripsi Kamus Hukum ' . $i,
                'is_published' => true,
            ]);
        }
    }
}
