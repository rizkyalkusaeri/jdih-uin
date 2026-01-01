<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $locations = [
            [
                'name' => 'Biro Administrasi Umum dan Informasi UIN Sunan Gunung Djati Bandung',
                'slug' => 'biro-administrasi-umum-dan-informasi-uin-sunan-gunung-djati-bandung',
            ],
        ];

        foreach ($locations as $location) {
            Location::create($location);
        }
    }
}
