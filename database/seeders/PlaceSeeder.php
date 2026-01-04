<?php

namespace Database\Seeders;

use App\Models\Place;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $places = [
            ['name' => 'Bandung', 'slug' => 'bandung'],
            ['name' => 'Jakarta', 'slug' => 'jakarta'],
        ];

        foreach ($places as $place) {
            Place::create($place);
        }
    }
}
