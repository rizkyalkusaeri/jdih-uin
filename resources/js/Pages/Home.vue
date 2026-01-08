<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref } from 'vue';

const activeTab = ref('terbaru');

const documents = [
    {
        id: 1,
        type: 'SK REKTOR',
        year: '2023',
        title: 'SK Rektor Nomor 123 Tahun 2023 Tentang Penetapan Kalender Akademik',
        desc: 'Penetapan Jadwal kegiatan akademik semester ganjil dan genap tahun ajaran 2023/2024 di lingkungan UIN...',
        downloads: '2.4MB',
        color: 'bg-blue-100 text-blue-600',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
        id: 2,
        type: 'SURAT EDARAN',
        year: '2024',
        title: 'Surat Edaran Nomor B-552 Tahun 2024',
        desc: 'Tentang Pelaksanaan Wisuda ke-90 UIN Sunan Gunung Djati Bandung Tahun 2024.',
        downloads: '1.2MB',
        color: 'bg-orange-100 text-orange-600',
        icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
    },
    {
        id: 3,
        type: 'PERATURAN',
        year: '2023',
        title: 'Peraturan Rektor tentang Kode Etik Mahasiswa',
        desc: 'Pedoman perilaku dan etika mahasiswa dalam lingkungan kampus serta sanksi pelanggaran...',
        downloads: '3.5MB',
        color: 'bg-green-100 text-green-600',
        icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
    },
    {
        id: 4,
        type: 'SK REKTOR',
        year: '2023',
        title: 'SK Rektor tentang UKT Mahasiswa Baru',
        desc: 'Penetapan Uang Kuliah Tunggal bagi mahasiswa baru jalur SNBP dan SNBT Tahun 2023...',
        downloads: '1.8MB',
        color: 'bg-blue-100 text-blue-600',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    }
];

const stats = [
    { label: 'Total Produk Hukum', value: '1,250+', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
    { label: 'Pengunjung Hari Ini', value: '450', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { label: 'Total Pengunjung', value: '125k+', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z' },
    { label: 'Indeks Kepuasan', value: '4.8/5', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

const news = [
    {
        date: '10 Oktober 2023',
        title: 'Sosialisasi Penggunaan JDIH bagi Civitas Akademika',
        desc: 'Bagian Hukum UIN SGD mengadakan sosialisasi untuk meningkatkan pemahaman mengenai akses...',
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop'
    },
    {
        date: '05 Oktober 2023',
        title: 'Workshop Legal Drafting Peraturan Kampus',
        desc: 'Pelatihan penyusunan naskah hukum bagi staf administrasi untuk memastikan standar legalitas yang...',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop'
    },
    {
        date: '28 September 2023',
        title: 'Laporan Kinerja JDIH Triwulan III 2023',
        desc: 'Capaian indeks kepuasan pengguna layanan JDIH mengalami peningkatan signifikan pada triwulan ini.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
    }
];

const collections = [
    { label: 'SK REKTOR', count: '845', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3', borderColor: 'border-l-4 border-blue-500' },
    { label: 'SURAT EDARAN', count: '320', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', borderColor: 'border-l-4 border-yellow-500' },
    { label: 'PERATURAN', count: '156', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', borderColor: 'border-l-4 border-orange-500' },
    { label: 'KEPUTUSAN', count: '215', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', borderColor: 'border-l-4 border-green-500' },
];
</script>

<template>

    <Head title="Beranda" />

    <GuestLayout>
        <!-- Hero Section -->
        <div class="relative bg-[#0F213A] overflow-hidden">
            <!-- Background Decoration -->
            <!-- Background Image & Gradient -->
            <div class="absolute inset-0">
                <img src="/images/944597_720.jpg" alt="Background" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-b from-[#0F213A]/90 via-[#0F213A]/80 to-[#0F213A]/60"></div>
            </div>

            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col items-center text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Cari Produk Hukum UIN SGD
                </h1>
                <p class="text-gray-300 text-lg md:text-xl max-w-2xl mb-10">
                    Pusat pencarian & informasi produk hukum resmi Universitas Islam Negeri Sunan Gunung Djati Bandung.
                    Transparan, Akuntabel, dan Terpercaya.
                </p>

                <!-- Search Bar -->
                <div class="w-full max-w-3xl bg-white rounded-lg p-2 flex gap-2 shadow-lg">
                    <div class="hidden md:flex items-center pl-3 pr-2 border-r border-gray-200 min-w-[160px] relative">
                        <select
                            class="w-full bg-transparent border-none focus:ring-0 focus:outline-0 text-gray-700 text-sm font-medium appearance-none cursor-pointer pr-8">
                            <option>Semua Jenis</option>
                            <option>SK Rektor</option>
                            <option>Surat Edaran</option>
                            <option>Peraturan</option>
                        </select>
                        <div class="absolute right-2 pointer-events-none">
                            <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex-1 flex items-center">
                        <svg class="h-5 w-5 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" placeholder="Masukkan kata kunci atau nomor dokumen..."
                            class="w-full border-none ml-2 focus:ring-0 focus:outline-0 text-gray-600 placeholder-gray-400" />
                    </div>
                    <button
                        class="bg-[#FFC700] hover:bg-yellow-400 text-[#0F213A] font-bold px-8 py-3 rounded-md transition shadow-sm">
                        CARI
                    </button>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
            <div class="bg-white rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                <div v-for="(stat, index) in stats" :key="index" class="p-6 flex flex-col items-center text-center">
                    <div class="text-[#0F213A] mb-3">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="stat.icon" />
                        </svg>
                    </div>
                    <div class="text-3xl font-extrabold text-[#0F213A]">{{ stat.value }}</div>
                    <div class="text-gray-500 text-sm mt-1">{{ stat.label }}</div>
                </div>
            </div>
        </div>

        <!-- Documents Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="flex justify-between items-center mb-8">
                <div class="flex space-x-6 border-b border-gray-200">
                    <button @click="activeTab = 'terbaru'"
                        :class="['pb-4 font-bold text-lg border-b-2 transition', activeTab === 'terbaru' ? 'border-[#0F213A] text-[#0F213A]' : 'border-transparent text-gray-400 hover:text-gray-600']">
                        Terbaru
                    </button>
                    <button @click="activeTab = 'terpopuler'"
                        :class="['pb-4 font-bold text-lg border-b-2 transition', activeTab === 'terpopuler' ? 'border-[#0F213A] text-[#0F213A]' : 'border-transparent text-gray-400 hover:text-gray-600']">
                        Terpopuler
                    </button>
                </div>
                <a href="#" class="text-[#0F213A] font-medium text-sm hover:underline flex items-center">
                    Lihat Semua Dokumen <span class="ml-1">&rarr;</span>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="doc in documents" :key="doc.id"
                    class="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition group">
                    <div class="flex items-start gap-4">
                        <div :class="[doc.color, 'p-3 rounded-lg shrink-0']">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="doc.icon" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span
                                    :class="[doc.color.replace('text-', 'bg-').replace('bg-', 'bg-opacity-20 '), 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide']">{{
                                        doc.type }}</span>
                                <span class="text-gray-400 text-xs">{{ doc.year }}</span>
                            </div>
                            <h3
                                class="text-lg font-bold text-[#0F213A] group-hover:text-blue-700 transition leading-snug mb-2">
                                <a href="#">{{ doc.title }}</a>
                            </h3>
                            <p class="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                {{ doc.desc }}
                            </p>
                            <div class="flex items-center gap-4 text-xs font-medium text-gray-500">
                                <span class="flex items-center gap-1 hover:text-blue-600 cursor-pointer"><svg
                                        class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg> Lihat Detail</span>
                                <span class="flex items-center gap-1 hover:text-blue-600 cursor-pointer"><svg
                                        class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg> Unduh ({{ doc.downloads }})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Data Visualization Section -->
        <div class="bg-gray-50 py-20 border-t border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-5 flex justify-between items-end">
                    <div>
                        <span class="text-yellow-500 font-bold tracking-wider text-xs uppercase mb-1 block">Transparansi
                            Data</span>
                        <h2 class="text-3xl font-extrabold text-[#0F213A]">Statistik & Matriks Data</h2>
                    </div>
                    <div class="text-gray-400 text-sm flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Update Terakhir: 19 Oktober 2023
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Matrix -->
                    <div class="lg:col-span-2">
                        <div class="bg-white rounded-xl shadow-sm p-6">
                            <h3 class="flex items-center gap-2 font-bold text-[#0F213A] mb-6">
                                <svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                Matriks Koleksi Dokumen
                            </h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div v-for="(col, idx) in collections" :key="idx"
                                    :class="[col.borderColor, 'bg-gray-50 p-6 rounded-lg flex items-center justify-between']">
                                    <div>
                                        <div class="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider">
                                            {{ col.label }}</div>
                                        <div class="text-4xl font-extrabold text-[#0F213A]">{{ col.count }}</div>
                                    </div>
                                    <div class="text-gray-300">
                                        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                                :d="col.icon" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 flex justify-between items-center px-2">
                                <div class="text-sm text-gray-500">Total Digitalisasi Dokumen</div>
                                <div class="text-lg font-bold text-[#0F213A]">65%</div>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                <div class="bg-[#0F213A] h-1.5 rounded-full" style="width: 65%"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Chart Card -->
                    <div class="lg:col-span-1 space-y-6">
                        <div class="bg-[#0F213A] text-white rounded-xl shadow-lg p-6 relative overflow-hidden">
                            <div class="relative z-10">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Statistik
                                    Pengunjung</h4>
                                <div class="flex items-end gap-2 mb-1">
                                    <span class="text-4xl font-bold">125.4k</span>
                                    <span
                                        class="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">+12%</span>
                                </div>
                                <p class="text-gray-400 text-xs">Total pengunjung jenis perfix tahun ini</p>
                            </div>
                            <!-- Fake Chart Bars -->
                            <div class="flex items-end justify-between gap-1 mt-8 h-16 opacity-80">
                                <div class="w-1/6 bg-yellow-600/30 rounded-t h-[40%]"></div>
                                <div class="w-1/6 bg-yellow-600/30 rounded-t h-[60%]"></div>
                                <div class="w-1/6 bg-yellow-600/30 rounded-t h-[30%]"></div>
                                <div class="w-1/6 bg-yellow-500/50 rounded-t h-[50%]"></div>
                                <div class="w-1/6 bg-yellow-500/80 rounded-t h-[75%]"></div>
                                <div class="w-1/6 bg-[#FFC700] rounded-t h-[90%]"></div>
                            </div>
                        </div>

                        <div
                            class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center justify-between">
                            <div>
                                <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Indeks
                                    Kepuasan</h4>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-4xl font-bold text-[#0F213A]">4.8</span>
                                    <span class="text-gray-400 text-sm">/ 5.0</span>
                                </div>
                                <div class="flex text-yellow-400 text-sm mt-1">
                                    ★★★★★
                                </div>
                            </div>
                            <div class="text-yellow-500 bg-yellow-50 rounded-full p-3">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded-lg border border-gray-100 text-[10px] text-gray-500 italic">
                            "Website JDIH UIN SGD sangat membantu dalam pencarian referensi hukum kampus."
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- News Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="flex justify-between items-center mb-10">
                <h2 class="text-2xl md:text-3xl font-extrabold text-[#0F213A]">Berita & Agenda Terbaru</h2>
                <a href="#" class="text-sm font-bold text-gray-500 hover:text-[#0F213A]">Lihat Semua Berita</a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
                <div v-for="(item, idx) in news" :key="idx"
                    class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-gray-100 h-full flex flex-col">
                    <div class="h-48 overflow-hidden relative">
                        <img :src="item.image" :alt="item.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        <div
                            class="absolute top-0 right-0 bg-yellow-400 text-[#0F213A] text-xs font-bold px-3 py-1 m-4 rounded">
                            Berita</div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="text-gray-400 text-xs mb-3 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {{ item.date }}
                        </div>
                        <h3
                            class="text-lg font-bold text-[#0F213A] mb-3 leading-snug group-hover:text-yellow-600 transition">
                            {{ item.title }}</h3>
                        <p class="text-gray-500 text-sm line-clamp-3 mb-6">{{ item.desc }}</p>
                        <div class="mt-auto">
                            <span
                                class="text-[#0F213A] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Baca
                                Selengkapnya <span class="bg-gray-100 rounded-full p-1">&rarr;</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>
