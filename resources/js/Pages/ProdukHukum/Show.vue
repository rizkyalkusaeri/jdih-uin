<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3'; // Head removed
import { route } from 'ziggy-js';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, computed } from 'vue';
import SeoHead from '@/Components/SeoHead.vue';

const props = defineProps({
    legalProduct: Object,
    relatedDocuments: Array,
    links: Array,
    ratingStats: Object // { average: 4.5, count: 10 }
});

// clean abstract for description
const cleanDescription = computed(() => {
    if (!props.legalProduct.abstract) return '';
    return props.legalProduct.abstract.replace(/<[^>]*>/g, '').substring(0, 160);
});

// generate keywords
const keywords = computed(() => {
    const subjects = props.legalProduct.subjects?.map(s => s.name) || [];
    return [...subjects, 'JDIH', 'Hukum', props.legalProduct.type?.name].join(', ');
});

const showPreviewModal = ref(false);
const showRatingModal = ref(false);
const previewUrl = ref('');

const ratingForm = useForm({
    rating: 0,
    feedback: ''
});

const openPreview = () => {
    // Determine preview URL (use route helper if possible or build string)
    previewUrl.value = route('produk-hukum.preview', props.legalProduct.slug);
    showPreviewModal.value = true;
};

const submitRating = () => {
    ratingForm.post(route('produk-hukum.rate', props.legalProduct.id), {
        onSuccess: () => {
            showRatingModal.value = false;
            ratingForm.reset();
        }
    });
};

// Format Date Helper
const formatDate = (dateString) => {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
};
</script>

<template>

    <SeoHead :title="legalProduct.title" :description="cleanDescription" :keywords="keywords" />

    <GuestLayout>

        <div class="bg-white border-b border-gray-100 py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-sm text-gray-500 mb-4">
                    <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
                    <span class="mx-2">/</span>
                    <Link href="/produk-hukum" class="hover:text-yellow-600 transition">Produk Hukum</Link>
                    <span class="mx-2">/</span>
                    <span class="text-gray-400 truncate max-w-[200px]">{{ legalProduct.type?.name || 'Dokumen' }}</span>
                    <span class="mx-2">/</span>
                    <span class="text-[#0F213A] font-medium">Detail</span>
                </nav>
                <h1 class="text-3xl font-extrabold text-[#0F213A]">Detail</h1>
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
                                <span v-if="legalProduct.status === 'active' || legalProduct.status === 'Berlaku'"
                                    class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    Berlaku
                                </span>
                                <span v-else
                                    class="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Tidak Berlaku
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
                                    {{ legalProduct.views_count || '0' }} VIEWS
                                </span>
                            </div>

                            <!-- Title -->
                            <h1 class="text-2xl md:text-3xl font-extrabold text-[#0F213A] leading-tight mb-4 uppercase">
                                {{ legalProduct.title }}
                            </h1>

                            <!-- Description / Abstract -->
                            <div v-if="legalProduct.abstract" class="border-l-4 border-yellow-400 pl-4 mb-8">
                                <span
                                    class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">ABSTRAK</span>
                                <div class="text-gray-600 text-lg leading-relaxed prose max-w-none"
                                    v-html="legalProduct.abstract">
                                </div>
                            </div>



                            <!-- Metadata Grid -->
                            <div class="border-t border-gray-100 pt-6">
                                <h3 class="text-lg font-bold text-[#0F213A] mb-4">Detail Informasi</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                    <div v-if="legalProduct.number">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">NOMOR
                                        </p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.number }}</p>
                                    </div>
                                    <div v-if="legalProduct.year">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">TAHUN
                                        </p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.year }}</p>
                                    </div>
                                    <div v-if="legalProduct.type?.name">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">JENIS
                                            DOKUMEN</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.type?.name }}</p>
                                    </div>
                                    <div v-if="legalProduct.category?.name">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                            KATEGORI</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.category?.name }}
                                        </p>
                                    </div>
                                    <div v-if="legalProduct.determination_date">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">TANGGAL
                                            PENETAPAN</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{
                                            formatDate(legalProduct.determination_date) }}</p>
                                    </div>
                                    <div v-if="legalProduct.published_date">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">TANGGAL
                                            TERBIT</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{
                                            formatDate(legalProduct.published_date) }}</p>
                                    </div>
                                    <div v-if="legalProduct.publisher?.name">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                            PENERBIT</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.publisher?.name }}
                                        </p>
                                    </div>
                                    <div v-if="legalProduct.author">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">PENULIS
                                        </p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.author }}</p>
                                    </div>
                                    <div v-if="legalProduct.initiator?.name">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                            PEMRAKARSA</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.initiator?.name }}
                                        </p>
                                    </div>
                                    <div v-if="legalProduct.signer?.name">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                            PENANDATANGAN</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.signer?.name }}
                                        </p>
                                    </div>
                                    <div v-if="legalProduct.place?.name">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">TEMPAT
                                            TERBIT</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.place?.name }}</p>
                                    </div>
                                    <div v-if="legalProduct.legalField?.name">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">BIDANG
                                            HUKUM</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.legalField?.name
                                            }}</p>
                                    </div>
                                    <div v-if="legalProduct.location?.name">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">LOKASI
                                            PENYIMPANAN</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.location?.name }}
                                        </p>
                                    </div>
                                    <div v-if="legalProduct.doc_nature">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">SIFAT
                                            DOKUMEN</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.doc_nature }}</p>
                                    </div>
                                    <div v-if="legalProduct.government_affair">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">URUSAN
                                            PEMERINTAHAN</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.government_affair
                                            }}</p>
                                    </div>
                                    <div v-if="legalProduct.language">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">BAHASA
                                        </p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.language }}</p>
                                    </div>
                                    <div v-if="legalProduct.edition">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">EDISI
                                        </p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.edition }}</p>
                                    </div>
                                    <div v-if="legalProduct.page_description">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                            DESKRIPSI FISIK</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.page_description
                                            }}</p>
                                    </div>
                                    <div v-if="legalProduct.source">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">SUMBER
                                        </p>
                                        <p class="text-base font-bold text-[#0F213A]">{{ legalProduct.source }}</p>
                                    </div>
                                    <div v-if="legalProduct.validity_start">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">MULAI
                                            BERLAKU</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{
                                            formatDate(legalProduct.validity_start) }}</p>
                                    </div>
                                    <div v-if="legalProduct.validity_end">
                                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                                            BERAKHIR BERLAKU</p>
                                        <p class="text-base font-bold text-[#0F213A]">{{
                                            formatDate(legalProduct.validity_end) }}</p>
                                    </div>
                                </div>

                                <!-- Subjects -->
                                <div v-if="legalProduct.subjects && legalProduct.subjects.length > 0"
                                    class="mt-6 pt-6 border-t border-gray-100">
                                    <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">SUBJEK</p>
                                    <div class="flex flex-wrap gap-2">
                                        <Link v-for="subject in legalProduct.subjects" :key="subject.id"
                                            :href="route('produk-hukum.index', { subject: [subject.name] })"
                                            class="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition cursor-pointer">
                                            {{ subject.name }}
                                        </Link>
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
                                        Lampiran</p>
                                    <p class="text-xs text-gray-500">{{ legalProduct.number }}</p>
                                </div>
                            </div>
                            <div class="flex gap-3 w-full sm:w-auto">
                                <button @click="openPreview" v-if="legalProduct.file_path"
                                    class="flex-1 sm:flex-none border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Pratinjau
                                </button>
                                <a :href="route('produk-hukum.download', legalProduct.slug)" target="_blank"
                                    v-if="legalProduct.file_path"
                                    class="flex-1 sm:flex-none bg-[#FFC700] hover:bg-yellow-400 text-[#0F213A] px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </a>
                            </div>
                        </div>

                        <!-- PDF Iframe -->
                        <div class="bg-gray-100 w-full h-[600px] relative">
                            <iframe v-if="legalProduct.file_path"
                                :src="route('produk-hukum.preview', legalProduct.slug)" class="w-full h-full"
                                frameborder="0"></iframe>
                            <div v-else class="flex items-center justify-center h-full text-gray-400 font-medium">
                                Tidak ada dokumen lampiran.
                            </div>
                        </div>

                    </div>

                </div>

                <!-- Right Sidebar -->
                <div class="space-y-6">

                    <!-- Document History Widget (Moved) -->
                    <div v-if="(legalProduct.replaced_documents && legalProduct.replaced_documents.length > 0) || (legalProduct.replaced_by && legalProduct.replaced_by.length > 0)"
                        class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Riwayat Dokumen
                        </h3>

                        <!-- Mencabut -->
                        <div v-if="legalProduct.replaced_documents?.length > 0" class="mb-4">
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">MENCABUT:</p>
                            <ul class="space-y-3">
                                <li v-for="doc in legalProduct.replaced_documents" :key="doc.id"
                                    class="flex gap-2 group">
                                    <div class="mt-1 text-red-500">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <Link :href="route('produk-hukum.show', doc.slug)"
                                            class="text-sm font-bold text-gray-700 group-hover:text-red-600 transition leading-snug">
                                            {{ doc.title }}
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- Dicabut Oleh -->
                        <div v-if="legalProduct.replaced_by?.length > 0">
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">DICABUT OLEH:</p>
                            <ul class="space-y-3">
                                <li v-for="doc in legalProduct.replaced_by" :key="doc.id" class="flex gap-2 group">
                                    <div class="mt-1 text-green-500">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <Link :href="route('produk-hukum.show', doc.slug)"
                                            class="text-sm font-bold text-gray-700 group-hover:text-green-600 transition leading-snug">
                                            {{ doc.title }}
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

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
                                    <Link :href="route('produk-hukum.show', doc.slug)">
                                        <h4
                                            class="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition leading-snug mb-1">
                                            {{ doc.title }}
                                        </h4>
                                    </Link>
                                    <p class="text-[10px] text-gray-500">{{ doc.type?.name }}</p>
                                </div>
                            </div>

                            <!-- Static Mock Data if empty -->
                            <div v-if="!relatedDocuments.length" class="text-sm text-gray-400 italic">
                                Tidak ada dokumen terkait.
                            </div>
                        </div>

                        <div class="mt-6 pt-4 border-t border-gray-100 text-center">
                            <a href="#" class="text-xs font-bold text-blue-600 hover:text-blue-800 transition">Lihat
                                Semua</a>
                        </div>
                    </div>

                    <!-- Links Widget (Added) -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                        v-if="links && links.length > 0">
                        <h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Tautan Terkait
                        </h3>
                        <div class="space-y-3">
                            <a v-for="link in links" :key="link.id" :href="link.url" target="_blank"
                                class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group">
                                <div
                                    class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                                    <img v-if="link.logo_path" :src="route('links.logo', link.id)"
                                        class="w-full h-full object-cover" :alt="link.title">
                                    <svg v-else class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight">
                                    {{ link.title }}
                                </span>
                                <svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Feedback Widget -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h4 class="text-sm font-extrabold text-[#0F213A] mb-2 flex justify-between items-center">
                            Apakah dokumen ini membantu?
                        </h4>
                        <p class="text-xs text-gray-400 mb-4">Bantu kami meningkatkan kualitas layanan JDIH.</p>

                        <div class="flex gap-3 mb-6">
                            <button @click="showRatingModal = true; ratingForm.rating = 5"
                                class="flex-1 border border-gray-200 hover:border-green-400 hover:bg-green-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group">
                                <span class="text-xl group-hover:scale-110 transition">👍</span>
                                <span class="text-[10px] font-bold text-gray-600 group-hover:text-green-600">Ya,
                                    Puas</span>
                            </button>
                            <button @click="showRatingModal = true; ratingForm.rating = 1"
                                class="flex-1 border border-gray-200 hover:border-red-400 hover:bg-red-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group">
                                <span class="text-xl group-hover:scale-110 transition">👎</span>
                                <span class="text-[10px] font-bold text-gray-600 group-hover:text-red-600">Tidak</span>
                            </button>
                        </div>

                        <div class="flex items-center justify-between border-t border-gray-100 pt-4">
                            <span class="text-[10px] font-bold text-gray-400 uppercase">RATING PENGGUNA</span>
                            <span class="text-sm font-extrabold text-[#0F213A]">{{ ratingStats?.average || 0
                                }}/5.0</span>
                        </div>
                        <div class="flex gap-1 text-yellow-400 mt-1 text-sm">
                            <span v-for="i in 5" :key="i"
                                :class="i <= Math.round(ratingStats?.average || 0) ? 'text-yellow-400' : 'text-gray-200'">★</span>
                        </div>
                        <p class="text-[10px] text-gray-400 mt-1">(Berdasarkan {{ ratingStats?.count || 0 }} ulasan)</p>
                    </div>

                    <div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center">
                        <h3 class="font-bold text-xl mb-2">Butuh Bantuan?</h3>
                        <p class="text-gray-400 text-sm mb-6">Hubungi kami jika anda membutuhkan bantuan tekait layanan
                            informasi
                            hukum.</p>
                        <Link :href="route('contact.index')"
                            class="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full">
                            Kontak Kami
                        </Link>
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


    <!-- Preview Modal -->
    <div v-if="showPreviewModal"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div class="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden flex flex-col shadow-2xl">
            <div class="bg-[#0F213A] p-4 flex justify-between items-center shrink-0">
                <h3 class="text-white font-bold truncate pr-4">{{ legalProduct.title }}</h3>
                <button @click="showPreviewModal = false" class="text-gray-400 hover:text-white transition">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="flex-1 bg-gray-100 relative">
                <iframe :src="previewUrl" class="w-full h-full" frameborder="0"></iframe>
            </div>
        </div>
    </div>

    <!-- Rating Modal -->
    <div v-if="showRatingModal"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div class="bg-white w-full max-w-md rounded-xl p-6 shadow-2xl relative">
            <button @click="showRatingModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <h3 class="text-lg font-bold text-[#0F213A] mb-4 text-center">Beri Penilaian</h3>

            <!-- Star Rating Input -->
            <div class="flex justify-center gap-2 mb-6">
                <button v-for="star in 5" :key="star" type="button" @click="ratingForm.rating = star"
                    class="text-3xl transition transform hover:scale-110 focus:outline-none"
                    :class="star <= ratingForm.rating ? 'text-yellow-400' : 'text-gray-200'">
                    ★
                </button>
            </div>

            <textarea v-model="ratingForm.feedback" placeholder="Masukan atau saran Anda (opsional)..."
                class="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none mb-4 h-24 resize-none"></textarea>

            <button @click="submitRating" :disabled="ratingForm.processing || ratingForm.rating === 0"
                class="w-full bg-[#0F213A] hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed">
                {{ ratingForm.processing ? 'Mengirim...' : 'Kirim Penilaian' }}
            </button>
        </div>
    </div>
</template>
