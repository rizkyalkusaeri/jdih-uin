<?php

namespace Database\Seeders;

use App\Models\Signer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SignerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $signers = [
            [
                'name' => 'Prof. Dr. Dea Indriani Astuti; S.Si',
                'slug' => 'prof-dr-dea-indriani-astuti-s-si',
            ],
            [
                'name' => 'Rektor',
                'slug' => 'rektor',
            ],
        ];

        foreach ($signers as $signer) {
            Signer::create($signer);
        }
    }
}
