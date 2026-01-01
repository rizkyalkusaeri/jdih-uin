<?php

namespace Database\Seeders;

use App\Models\LegalField;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LegalFieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $legalFields = [
            [
                'name' => 'Hukum Pemerintahan',
                'slug' => 'hukum-pemerintahan',
            ],
            [
                'name' => 'Hukum Pendidikan',
                'slug' => 'hukum-pendidikan',
            ],
            [
                'name' => 'Hukum Kesehatan',
                'slug' => 'hukum-kesehatan',
            ],
            [
                'name' => 'Hukum Administrasi Negara',
                'slug' => 'hukum-administrasi-negara',
            ],
        ];

        foreach ($legalFields as $legalField) {
            LegalField::create($legalField);
        }
    }
}
