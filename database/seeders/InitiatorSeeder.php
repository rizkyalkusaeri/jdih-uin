<?php

namespace Database\Seeders;

use App\Models\Initiator;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InitiatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $iniators = [
            [
                'name' => 'UIN Sunan Gunung Djati Bandung',
                'slug' => 'uin-sunan-gunung-djati-bandung',
            ]
        ];

        foreach ($iniators as $initiator) {
            Initiator::create($initiator);
        }
    }
}
