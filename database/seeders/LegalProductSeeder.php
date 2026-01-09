<?php

namespace Database\Seeders;

use App\Models\LegalProduct;
use App\Models\Type;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class LegalProductSeeder extends Seeder
{
    public function run(): void
    {
        $types = Type::all();

        foreach ($types as $type) {
            for ($i = 1; $i <= 5; $i++) {
                $year = rand(2018, 2024);
                $number = rand(1, 99999999);
                $title = "{$type->name} Nomor {$number} Tahun {$year} tentang Contoh Dokumen {$i}";

                LegalProduct::create([
                    'title' => $title,
                    'slug' => Str::slug($title . '-' . Str::random(5)),
                    'number' => (string) $number,
                    'year' => $year,
                    'type_id' => $type->id,
                    'category_id' => $type->category_id, // Inherit category from Type
                    'status' => rand(0, 1) ? 'Berlaku' : 'Tidak Berlaku',
                    'determination_date' => now()->subDays(rand(1, 1000)),
                    'published_date' => now()->subDays(rand(1, 1000)),
                    'file_path' => 'example.pdf',
                    'abstract' => "Ini adalah abstrak contoh untuk {$title}. Dokumen ini dibuat otomatis oleh seeder.",
                ]);
            }
        }
    }
}
