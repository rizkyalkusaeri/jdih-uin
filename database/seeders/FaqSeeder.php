<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = [
            [
                'question' => "Apa itu JDIH UIN SGD?",
                'answer' => "JDIH UIN SGD adalah Jaringan Dokumentasi dan Informasi Hukum di lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung. Sistem ini menyediakan akses terhadap berbagai koleksi produk hukum yang berlaku di universitas serta instrumen hukum lainnya.",
                'sort_order' => 1,
            ],
            [
                'question' => "Bagaimana cara mencari produk hukum?",
                'answer' => "Anda dapat menggunakan fitur pencarian di halaman Beranda atau halaman Produk Hukum. Masukkan kata kunci seperti judul, nomor, atau tahun peraturan untuk menemukan dokumen yang Anda cari. Anda juga dapat menggunakan filter pencarian untuk hasil yang lebih spesifik.",
                'sort_order' => 2,
            ],
            [
                'question' => "Apakah saya perlu mendaftar untuk mengunduh dokumen?",
                'answer' => "Sebagian besar dokumen produk hukum yang bersifat publik dapat diunduh tanpa perlu mendaftar. Namun, untuk fitur tertentu atau dokumen khusus, mungkin diperlukan akses login.",
                'sort_order' => 3,
            ],
            [
                'question' => "Bagaimana jika saya menemukan tautan yang rusak?",
                'answer' => "Jika Anda menemukan tautan yang rusak atau masalah pada website, silakan hubungi kami melalui halaman Kontak atau widget 'Butuh Bantuan' yang tersedia.",
                'sort_order' => 4,
            ],
            [
                'question' => "Apakah informasi di website ini selalu diperbarui?",
                'answer' => "Ya, kami berkomitmen untuk selalu memperbarui basis data produk hukum kami segera setelah ada peraturan baru yang diterbitkan atau perubahan status pada peraturan yang sudah ada.",
                'sort_order' => 5,
            ]
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
