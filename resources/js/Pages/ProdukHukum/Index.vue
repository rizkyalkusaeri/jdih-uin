<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, watch } from 'vue';
import { computed } from 'vue';
import { debounce } from 'lodash';

const props = defineProps({
    legalProducts: Object,
    filters: Object,
    options: Object
});

const filtersState = ref({
    search: props.filters.search || '',
    year: props.filters.year || '',
    type: props.filters.type || [],
    subject: props.filters.subject || [],
    status: props.filters.status || [],
    sort: props.filters.sort || 'Terbaru'
});

const searchType = ref('');
const showAllTypes = ref(false);

const searchSubject = ref('');
const showAllSubjects = ref(false);

const filteredTypes = computed(() => {
    let items = props.options.types;
    if (searchType.value) {
        return items.filter(t => t.name.toLowerCase().includes(searchType.value.toLowerCase()));
    }
    return showAllTypes.value ? items : items.slice(0, 5);
});

const filteredSubjects = computed(() => {
    let items = props.options.subjects;
    if (searchSubject.value) {
        return items.filter(s => s.name.toLowerCase().includes(searchSubject.value.toLowerCase()));
    }
    return showAllSubjects.value ? items : items.slice(0, 5);
});

const resetFilters = () => {
    filtersState.value = {
        search: '',
        year: '',
        type: [],
        subject: [],
        status: [],
        sort: 'Terbaru'
    };
    searchType.value = '';
    searchSubject.value = '';
};

// Format Date Helper
const formatDate = (dateString) => {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
};

watch(filtersState, debounce((value) => {
    router.get('/produk-hukum', value, {
        preserveState: true,
        preserveScroll: true,
        replace: true
    });
}, 500), { deep: true });
</script>

<template>

    <Head title="Produk Hukum" />

    <GuestLayout>
        <!-- Breadcrumb & Header -->
        <div class="bg-white border-b border-gray-100 py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex text-sm text-gray-500 mb-4">
                    <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
                    <span class="mx-2 text-gray-300">/</span>
                    <span class="text-[#0F213A] font-medium">Pencarian Produk Hukum</span>
                </nav>
                <h1 class="text-3xl font-extrabold text-[#0F213A]">Pencarian Produk Hukum</h1>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="flex flex-col lg:flex-row gap-10">

                <!-- Sidebar Filter -->
                <div class="w-full lg:w-1/4 shrink-0 space-y-6">
                    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div class="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h3 class="font-bold text-[#0F213A] flex items-center gap-2">
                                <svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                Filter Pencarian
                            </h3>
                            <button @click="resetFilters"
                                class="text-xs font-medium text-gray-400 hover:text-red-500 transition">Reset
                                Filter</button>
                        </div>

                        <!-- Tahun -->
                        <div class="p-5 border-b border-gray-100">
                            <h4 class="font-bold text-sm text-[#0F213A] mb-3">Tahun</h4>
                            <input type="number" v-model="filtersState.year" placeholder="Contoh: 2024"
                                class="w-full text-sm border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 placeholder:text-gray-300 transition" />
                        </div>

                        <!-- Jenis Produk Hukum -->
                        <div class="p-5 border-b border-gray-100">
                            <h4 class="font-bold text-sm text-[#0F213A] mb-3">Jenis Produk Hukum</h4>

                            <!-- Search Type -->
                            <div class="mb-3 relative">
                                <svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" v-model="searchType" placeholder="Cari jenis..."
                                    class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50" />
                            </div>

                            <div class="space-y-2">
                                <div v-for="type in filteredTypes" :key="type.id"
                                    class="flex items-center justify-between group">
                                    <label class="flex items-center gap-3 cursor-pointer flex-1">
                                        <input type="checkbox" v-model="filtersState.type" :value="type.name"
                                            class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" />
                                        <span
                                            class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"
                                            :title="type.name">{{ type.name }}</span>
                                    </label>
                                    <span
                                        class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition">
                                        {{ type.count }}
                                    </span>
                                </div>

                                <button v-if="!searchType && options.types.length > 5"
                                    @click="showAllTypes = !showAllTypes"
                                    class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1">
                                    {{ showAllTypes ? 'Sembunyikan' : 'Lihat Selengkapnya' }}
                                    <svg class="w-3 h-3" :class="{ 'rotate-180': showAllTypes }" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Subjek (New) -->
                        <div class="p-5 border-b border-gray-100">
                            <h4 class="font-bold text-sm text-[#0F213A] mb-3">Subjek</h4>

                            <!-- Search Subject -->
                            <div class="mb-3 relative">
                                <svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" v-model="searchSubject" placeholder="Cari subjek..."
                                    class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50" />
                            </div>

                            <div class="space-y-2">
                                <div v-for="subject in filteredSubjects" :key="subject.id"
                                    class="flex items-center justify-between group">
                                    <label class="flex items-center gap-3 cursor-pointer flex-1">
                                        <input type="checkbox" v-model="filtersState.subject" :value="subject.name"
                                            class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" />
                                        <span
                                            class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"
                                            :title="subject.name">{{ subject.name }}</span>
                                    </label>
                                    <span
                                        class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition">
                                        {{ subject.count }}
                                    </span>
                                </div>

                                <button v-if="!searchSubject && options.subjects.length > 5"
                                    @click="showAllSubjects = !showAllSubjects"
                                    class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1">
                                    {{ showAllSubjects ? 'Sembunyikan' : 'Lihat Selengkapnya' }}
                                    <svg class="w-3 h-3" :class="{ 'rotate-180': showAllSubjects }" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Status Produk -->
                        <div class="p-5">
                            <h4 class="font-bold text-sm text-[#0F213A] mb-3">Status Produk</h4>
                            <div class="space-y-2">
                                <div v-for="status in options.statuses" :key="status.value"
                                    class="flex items-center justify-between group">
                                    <label class="flex items-center gap-3 cursor-pointer flex-1">
                                        <input type="checkbox" v-model="filtersState.status" :value="status.value"
                                            class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" />
                                        <span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition">{{
                                            status.name }}</span>
                                    </label>
                                    <span
                                        class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition">
                                        {{ status.count }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="flex-1">
                    <!-- Top Bar -->
                    <div
                        class="bg-white rounded-lg border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm">
                        <div class="text-gray-600 font-medium mb-3 sm:mb-0">
                            Menampilkan <span class="font-bold text-[#0F213A]">{{ props.legalProducts.total }}</span>
                            Hasil Pencarian
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-gray-400 text-sm">Urutkan:</span>
                            <select v-model="filtersState.sort"
                                class="border-gray-200 rounded-md text-sm text-[#0F213A] focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer">
                                <option>Terbaru</option>
                                <option>Terpopuler</option>
                            </select>
                        </div>
                    </div>

                    <!-- Search Bar (Added) -->
                    <div class="mb-6 relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input type="text" v-model="filtersState.search"
                            placeholder="Cari berdasarkan judul atau nomor peraturan..."
                            class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" />
                    </div>

                    <!-- List -->
                    <div class="space-y-4">
                        <div v-for="item in props.legalProducts.data" :key="item.id"
                            class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition group relative overflow-hidden">
                            <!-- Clickable Overlay -->
                            <Link :href="route('produk-hukum.show', item.slug)" class="absolute inset-0 z-10"></Link>

                            <div class="flex gap-5 relative z-20 pointer-events-none">
                                <!-- Type Icon -->
                                <div class="shrink-0 hidden sm:block">
                                    <div
                                        class="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition">
                                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <div class="flex flex-wrap items-center gap-2 mb-2">
                                        <span
                                            class="bg-yellow-400 text-[#0F213A] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">{{
                                                item.type?.name || 'Dokumen' }}</span>
                                        <span
                                            class="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded">{{
                                                item.year }}</span>
                                        <div class="ml-auto">
                                            <span v-if="item.status === 'active' || item.status === 'Berlaku'"
                                                class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Berlaku
                                            </span>
                                            <span v-else
                                                class="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                Tidak Berlaku
                                            </span>
                                        </div>
                                    </div>

                                    <h3
                                        class="text-lg font-bold text-[#0F213A] leading-snug mb-3 group-hover:text-yellow-600 transition pointer-events-auto">
                                        <Link :href="route('produk-hukum.show', item.slug)">{{ item.title }}</Link>
                                    </h3>

                                    <div class="flex flex-wrap gap-y-2 gap-x-6 text-xs text-gray-500 font-medium">
                                        <span class="flex items-center gap-1.5">
                                            <span class="text-gray-300">#</span> Nomor: {{ item.number }}
                                        </span>
                                        <span class="flex items-center gap-1.5">
                                            <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {{ formatDate(item.published_date) }}
                                        </span>
                                        <span class="flex items-center gap-1.5">
                                            <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            {{ item.views_count || 0 }} Dilihat
                                        </span>
                                    </div>

                                    <div class="mt-4 flex justify-end pointer-events-auto">
                                        <Link :href="route('produk-hukum.show', item.slug)"
                                            class="text-sm font-bold text-[#0F213A] border border-gray-200 px-4 py-2 rounded-lg hover:border-[#0F213A] hover:bg-[#0F213A] hover:text-white transition flex items-center gap-2">
                                            Lihat Detail
                                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="mt-10 flex justify-center text-sm" v-if="props.legalProducts.links.length > 3">
                        <div
                            class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                            <template v-for="(link, key) in props.legalProducts.links" :key="key">
                                <Link v-if="link.url" :href="link.url"
                                    class="h-9 min-w-[36px] px-2 flex items-center justify-center rounded-lg transition text-xs font-bold"
                                    :class="[
                                        link.active
                                            ? 'bg-[#0F213A] text-white shadow-md transform scale-105'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-[#0F213A]',
                                        !link.url && 'opacity-50 cursor-not-allowed'
                                    ]" v-html="link.label" />
                                <span v-else v-html="link.label"
                                    class="h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"></span>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>

<style scoped>
/* Custom Scrollbar for Filters */
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
}
</style>
