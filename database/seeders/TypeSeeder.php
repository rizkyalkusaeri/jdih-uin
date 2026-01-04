<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            ['name' => 'Peraturan Rektor', 'slug' => 'peraturan-rektor', 'category_id' => 1],
            ['name' => 'Surat Edaran', 'slug' => 'surat-edaran', 'category_id' => 1],
            ['name' => 'Keputusan Rektor', 'slug' => 'keputusan-rektor', 'category_id' => 1],
            ['name' => 'SOP', 'slug' => 'sop', 'category_id' => 1],
            ['name' => 'Buku Hukum', 'slug' => 'buku-hukum', 'category_id' => 2],
            ['name' => 'Jurnal Hukum', 'slug' => 'jurnal-hukum', 'category_id' => 2],
            ['name' => 'Naskah Akademik', 'slug' => 'naskah-akademik', 'category_id' => 2],
            ['name' => 'Fatwa', 'slug' => 'fatwa', 'category_id' => 3],
            ['name' => 'Risalah Sidang', 'slug' => 'risalah-sidang', 'category_id' => 3],
            ['name' => 'Dokumen Kerja Sama (MoU)', 'slug' => 'dokumen-kerja-sama-mou', 'category_id' => 3],
        ];

        foreach ($types as $type) {
            Type::create($type);
        }
    }
}
