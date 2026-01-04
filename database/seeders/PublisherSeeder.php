<?php

namespace Database\Seeders;

use App\Models\Publisher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PublisherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $publishers = [
            ['name' => 'UIN Sunan Gunung Djati Bandung', 'slug' => 'uin-sunan-gunung-djati-bandung'],
        ];

        foreach ($publishers as $publisher) {
            Publisher::create($publisher);
        }
    }
}
