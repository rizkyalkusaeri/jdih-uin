<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\General;

class SocialMediaAndContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        General::create(['title' => 'Email', 'slug' => 'email', 'description' => 'jdih@uinsgd.ac.id']);
        General::create(['title' => 'Telepon', 'slug' => 'telepon', 'description' => '022-7500000']);
        General::create(['title' => 'Alamat', 'slug' => 'alamat', 'description' => 'Fakultas Syariah dan Hukum, Lt.2<br>Jln A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614']);
        General::create(['title' => 'facebook', 'slug' => 'facebook', 'description' => 'https://www.facebook.com/jdihuin']);
        General::create(['title' => 'instagram', 'slug' => 'instagram', 'description' => 'https://www.instagram.com/jdihuin']);
        General::create(['title' => 'youtube', 'slug' => 'youtube', 'description' => 'https://www.youtube.com/jdihuin']);
    }
}
