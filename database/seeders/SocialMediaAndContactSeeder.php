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
        General::create(['title' => 'Email', 'slug' => 'email', 'description' => '<p>jdih@uinsgd.ac.id</p>']);
        General::create(['title' => 'Telepon', 'slug' => 'telepon', 'description' => '<p>022-7500000</p>']);
        General::create(['title' => 'Alamat', 'slug' => 'alamat', 'description' => '<p>Fakultas Syariah dan Hukum, Lt.2<br>Jln A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614</p>']);
        General::create(['title' => 'facebook', 'slug' => 'facebook', 'description' => '<p>https://www.facebook.com/jdihuin</p>']);
        General::create(['title' => 'instagram', 'slug' => 'instagram', 'description' => '<p>https://www.instagram.com/jdihuin</p>']);
        General::create(['title' => 'youtube', 'slug' => 'youtube', 'description' => '<p>https://www.youtube.com/jdihuin</p>']);
    }
}
