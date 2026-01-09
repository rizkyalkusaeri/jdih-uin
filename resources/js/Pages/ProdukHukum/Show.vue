<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref } from 'vue';

const props = defineProps({
    legalProduct: Object,
    relatedDocuments: Array
});

// Mock rating
const rating = ref(4);

// Format Date Helper
const formatDate = (dateString) => {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
};
</script>

<template>

    <Head :title="legalProduct.title" />

    <GuestLayout>
        <!-- Breadcrumb -->
        <div class="bg-gray-50 border-b border-gray-100 py-4">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-xs text-gray-500">
                    <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
                    <span class="mx-2">/</span>
                    <Link href="/produk-hukum" class="hover:text-yellow-600 transition">Produk Hukum</Link>
                    <span class="mx-2">/</span>
                    <span class="text-gray-400 truncate max-w-[200px]">{{ legalProduct.type?.name || 'Dokumen' }}</span>
                    <span class="mx-2">/</span>
                    <span class="text-[#0F213A] font-medium">Detail</span>
                </nav>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <!-- Main Content (Left Column) -->
                <div class="lg:col-span-2 space-y-8">

                    <!-- Header Card -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
                        <!-- Top Corner Decoration -->
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 z-0">
                        </div>

                        <div class="relative z-10">
                            <!-- Badges -->
                            <div class="flex flex-wrap items-center gap-2 mb-6">
                                <span
                                    class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    {{ legalProduct.status || 'BERLAKU' }}
                                </span>
                                <span
                                    class="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                    {{ legalProduct.type?.name }}
                                </span>
                                <span
                                    class="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    {{ legalProduct.view_count || '1,204' }} VIEWS
                                </span>
                            </div>

                            <!-- Title -->
                            <h1 class="text-2xl md:text-3xl font-extrabold text-[#0F213A] leading-tight mb-4 uppercase">
                                {{ legalProduct.title }}
                            </h1>

                            <!-- Description / Abstract -->
                            <div class="border-l-4 border-yellow-400 pl-4 mb-8">
                                <p class="text-gray-600 text-lg leading-relaxed">
                                    {{ legalProduct.abstract || legalProduct.title }}
                                </p>
                            </div>

                            <!-- Metadata Grid -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">NOMOR</p>
                                    <p class="text-lg font-bold text-[#0F213A]">{{ legalProduct.number }}</p>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">TAHUN</p>
                                    <p class="text-lg font-bold text-[#0F213A]">{{ legalProduct.year }}</p>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">TANGGAL
                                        PENETAPAN</p>
                                    <div class="flex items-center gap-2 text-[#0F213A] font-bold">
                                        <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {{ formatDate(legalProduct.determination_date) }}
                                    </div>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">PEMRAKARSA
                                    </p>
                                    <div class="flex items-center gap-2 text-[#0F213A] font-bold">
                                        <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        {{ legalProduct.initiator?.name || 'Rektor UIN SGD' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PDF Viewer Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <!-- Action Bar -->
                        <div
                            class="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center bg-gray-50/50 gap-4">
                            <div class="flex items-center gap-3">
                                <div class="bg-red-100 p-2 rounded text-red-600">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-[#0F213A] truncate max-w-[200px] sm:max-w-xs">
                                        Dokumen Asli.pdf</p>
                                    <p class="text-xs text-gray-500">2.4 MB • Bahasa Indonesia</p>
                                </div>
                            </div>
                            <div class="flex gap-3 w-full sm:w-auto">
                                <button
                                    class="flex-1 sm:flex-none border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                    </svg>
                                    Print
                                </button>
                                <button
                                    class="flex-1 sm:flex-none bg-[#FFC700] hover:bg-yellow-400 text-[#0F213A] px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </button>
                            </div>
                        </div>

                        <!-- PDF Placeholder / Iframe -->
                        <div class="bg-gray-100 w-full h-[600px] flex items-center justify-center relative">
                            <!-- In a real app, use <iframe :src="fileUrl" ...></iframe> -->
                            <div class="text-center p-10">
                                <div
                                    class="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-gray-400">
                                    <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 class="text-gray-500 font-bold mb-2">Pratinjau Dokumen</h3>
                                <p class="text-gray-400 text-sm">Halaman 1 dari 12</p>
                            </div>

                            <div class="absolute bottom-4 right-4">
                                <span
                                    class="bg-[#0F213A] text-white text-[10px] px-3 py-1 rounded-full opacity-80 backdrop-blur-sm">JDIH
                                    UIN SGD Bandung © 2024</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Right Sidebar -->
                <div class="space-y-6">

                    <!-- Related Documents Widget -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Dokumen Terkait
                        </h3>

                        <div class="space-y-4">
                            <div v-for="doc in relatedDocuments" :key="doc.id" class="flex gap-3 group cursor-pointer">
                                <div class="mt-1 text-gray-400 group-hover:text-blue-600 transition">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4
                                        class="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition leading-snug mb-1">
                                        {{ doc.title }}
                                    </h4>
                                    <p class="text-[10px] text-gray-500">{{ doc.type?.name }}</p>
                                </div>
                            </div>

                            <!-- Static Mock Data if empty -->
                            <div v-if="!relatedDocuments.length" class="text-sm text-gray-400 italic">
                                Tidak ada dokumen terkait.
                            </div>

                            <!-- Static Examples for Visual Match -->
                            <template v-if="!relatedDocuments.length">
                                <div class="flex gap-3 group cursor-pointer border-t border-gray-50 pt-3">
                                    <div class="mt-1 text-gray-400"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg></div>
                                    <div>
                                        <h4
                                            class="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition leading-snug mb-1">
                                            UU Nomor 12 Tahun 2012</h4>
                                        <p class="text-[10px] text-gray-500">Tentang Pendidikan Tinggi</p>
                                    </div>
                                </div>
                                <div class="flex gap-3 group cursor-pointer border-t border-gray-50 pt-3">
                                    <div class="mt-1 text-gray-400"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg></div>
                                    <div>
                                        <h4
                                            class="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition leading-snug mb-1">
                                            PMA Nomor 6 Tahun 2015</h4>
                                        <p class="text-[10px] text-gray-500">Statuta UIN Sunan Gunung Djati Bandung</p>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <div class="mt-6 pt-4 border-t border-gray-100 text-center">
                            <a href="#" class="text-xs font-bold text-blue-600 hover:text-blue-800 transition">Lihat
                                Semua</a>
                        </div>
                    </div>

                    <!-- Feedback Widget -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h4 class="text-sm font-extrabold text-[#0F213A] mb-2 flex justify-between items-center">
                            Apakah dokumen ini membantu?
                        </h4>
                        <p class="text-xs text-gray-400 mb-4">Bantu kami meningkatkan kualitas layanan JDIH.</p>

                        <div class="flex gap-3 mb-6">
                            <button
                                class="flex-1 border border-gray-200 hover:border-green-400 hover:bg-green-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group">
                                <span class="text-xl group-hover:scale-110 transition">👍</span>
                                <span class="text-[10px] font-bold text-gray-600 group-hover:text-green-600">Ya,
                                    Puas</span>
                            </button>
                            <button
                                class="flex-1 border border-gray-200 hover:border-red-400 hover:bg-red-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group">
                                <span class="text-xl group-hover:scale-110 transition">👎</span>
                                <span class="text-[10px] font-bold text-gray-600 group-hover:text-red-600">Tidak</span>
                            </button>
                        </div>

                        <div class="flex items-center justify-between border-t border-gray-100 pt-4">
                            <span class="text-[10px] font-bold text-gray-400 uppercase">RATING PENGGUNA</span>
                            <span class="text-sm font-extrabold text-[#0F213A]">4.8/5.0</span>
                        </div>
                        <div class="flex gap-1 text-yellow-400 mt-1">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span class="text-gray-200">★</span>
                        </div>
                        <p class="text-[10px] text-gray-400 mt-1">(Berdasarkan 42 ulasan)</p>
                    </div>

                    <!-- Disclaimer -->
                    <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <div class="flex gap-3">
                            <div class="mt-1 text-blue-600 shrink-0">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-[#0F213A] mb-1">Disclaimer</h4>
                                <p class="text-xs text-gray-600 leading-relaxed">
                                    Dokumen digital ini adalah salinan untuk tujuan informasi. Jika terdapat perbedaan
                                    dengan dokumen fisik
                                    yang ditandatangani, maka dokumen fisik yang berlaku.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </GuestLayout>
</template>
