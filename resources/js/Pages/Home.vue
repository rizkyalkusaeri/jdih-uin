<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, computed, onMounted } from 'vue';
import SeoHead from '@/Components/SeoHead.vue';


import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ArcElement
} from 'chart.js'
import { Bar, Pie } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    stats: Object,
    recentProducts: Array,
    popularProducts: Array,
    collections: Array,
    news: Array,
    events: Array,
    documentations: Array,
    feedbacks: Array,
    types: Array,
    topTypes: Array,
    topTypes: Array,
    visitorStats: Object,
    visitorStats: Object,
    awards: Array,
    journals: Array
});

import AwardsCarousel from '@/Components/AwardsCarousel.vue';

// Search
const searchQuery = ref('');
const searchType = ref('Semua Jenis');

const handleSearch = () => {
    router.get(route('produk-hukum.index'), {
        search: searchQuery.value,
        type: searchType.value !== 'Semua Jenis' ? [searchType.value] : []
    });
};

// Tabs
const activeTab = ref('terbaru');
const displayedProducts = computed(() => {
    return activeTab.value === 'terbaru' ? props.recentProducts : props.popularProducts;
});

// Stats Map
const statsDisplay = computed(() => [
    { label: 'Total Produk Hukum', value: props.stats.totalProducts + '+', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
    { label: 'Pengunjung Hari Ini', value: props.visitorStats?.today || 0, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { label: 'Total Pengunjung', value: (props.visitorStats?.total || 0).toLocaleString(), icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z' },
    { label: 'Indeks Kepuasan', value: props.stats.avgRating + '/5', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
]);

// Helper for Collection Colors (Cyclic)
const getCollectionColor = (index) => {
    const colors = [
        { border: 'border-l-4 border-blue-500', icon: 'text-blue-500' },
        { border: 'border-l-4 border-yellow-500', icon: 'text-yellow-500' },
        { border: 'border-l-4 border-orange-500', icon: 'text-orange-500' },
        { border: 'border-l-4 border-green-500', icon: 'text-green-500' },
    ];
    return colors[index % colors.length];
};

// Helper for Type Badges
const getTypeColor = (typeName) => {
    const colors = {
        'SK Rektor': 'bg-blue-100 text-blue-600',
        'Surat Edaran': 'bg-yellow-100 text-yellow-700',
        'Peraturan': 'bg-green-100 text-green-600',
        'Keputusan': 'bg-purple-100 text-purple-600',
        'Instruksi': 'bg-red-100 text-red-600'
    };
    return colors[typeName] || 'bg-gray-100 text-gray-600';
};

// Theme Detection
const isDarkMode = ref(false);

const checkTheme = () => {
    isDarkMode.value = document.body.classList.contains('a11y-dark');
};

const chartTextColor = computed(() => isDarkMode.value ? '#CBD5E1' : '#374151'); // Slate-300 vs Gray-700
const chartGridColor = computed(() => isDarkMode.value ? '#334155' : '#E5E7EB'); // Slate-700 vs Gray-200

// Charts Data
const barChartData = computed(() => ({
    labels: props.topTypes.map(t => t.name),
    datasets: [
        {
            label: 'Jumlah Lihat',
            backgroundColor: '#3b82f6', // blue-500
            data: props.topTypes.map(t => t.count)
        }
    ]
}))

const barChartOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                precision: 0,
                color: chartTextColor.value
            },
            grid: {
                color: chartGridColor.value
            }
        },
        x: {
            ticks: {
                font: { size: 10 },
                color: chartTextColor.value
            },
            grid: {
                display: false
            }
        }
    }
}))

const pieChartData = computed(() => ({
    labels: ['Tahun Ini', 'Bulan Ini', 'Hari Ini'],
    datasets: [
        {
            backgroundColor: ['#f59e0b', '#10b981', '#3b82f6'], // yellow, green, blue
            borderColor: isDarkMode.value ? '#1E293B' : '#FFFFFF',
            data: [props.visitorStats.year, props.visitorStats.month, props.visitorStats.today]
        }
    ]
}))

const pieChartOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: chartTextColor.value
            }
        }
    }
}))

onMounted(() => {
    checkTheme();
    window.addEventListener('theme-change', checkTheme);
});
</script>

<template>

    <Head title="Beranda" />

    <GuestLayout>
        <!-- Hero Section -->
        <div class="relative overflow-hidden" style="background-color: var(--color-primary);">
            <!-- Background Decoration -->
            <!-- Background Image & Gradient -->
            <div class="absolute inset-0">
                <img src="/images/uinsgdbdg_cover.jpg" alt="Background" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-linear-to-b from-[#0F213A]/90 via-[#0F213A]/80 to-[#0F213A]/60"></div>
            </div>

            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 flex flex-col items-center text-center">
                <h1
                    class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight fade-in-up drop-shadow-md">
                    Pusat Data Hukum & Regulasi <br class="hidden md:block" />
                    <span class="mt-2 inline-block" style="color: var(--color-accent);">UIN Sunan Gunung Djati</span>
                </h1>
                <p
                    class="text-gray-100 text-lg md:text-xl max-w-4xl mb-12 fade-in-up delay-100 leading-relaxed drop-shadow-sm font-medium">
                    Selamat datang di Jaringan Dokumentasi dan Informasi Hukum (JDIH) UIN Sunan Gunung Djati
                    <br class="hidden md:block" />
                    Akses seluruh dokumen hukum dan regulasi kampus dengan mudah.
                </p>

                <!-- Search Bar -->
                <div class="w-full max-w-3xl rounded-lg p-2 flex gap-2 shadow-2xl fade-in-up delay-200"
                    style="background-color: var(--color-bg-card);">
                    <div class="hidden md:flex items-center pl-3 pr-2 border-r min-w-[160px] relative"
                        style="border-color: var(--color-border);">
                        <select v-model="searchType"
                            class="w-full bg-transparent py-2 px-2 border-none rounded-lg transition-all duration-200 ease-in-out focus:ring-0 focus:outline-0 text-gray-700 text-sm font-medium appearance-none cursor-pointer pr-8">
                            <option>Semua Jenis</option>
                            <option class="text-gray-700" v-for="type in types" :key="type.id" :value="type.name">{{
                                type.name }}</option>
                        </select>
                        <div class="absolute right-2 pointer-events-none px-4">
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
                        <input type="text" v-model="searchQuery" @keyup.enter="handleSearch"
                            placeholder="Masukkan kata kunci atau nomor dokumen..."
                            class="w-full border-none py-2 px-2 rounded-lg ml-2 focus:ring-0 focus:outline-0 placeholder-gray-400"
                            style="background-color: transparent; color: var(--color-text-primary);" />
                    </div>
                    <button @click="handleSearch"
                        class="hover:bg-yellow-400 font-bold px-8 py-2 rounded-md transition shadow-sm flex items-center justify-center"
                        style="background-color: var(--color-accent); color: var(--color-text-inverse);">
                        CARI
                    </button>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
            <div class="rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border-light)]"
                style="background-color: var(--color-bg-card);">
                <div v-for="(stat, index) in statsDisplay" :key="index"
                    class="p-6 flex flex-col items-center text-center">
                    <div class="mb-3" style="color: var(--color-primary);">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="stat.icon" />
                        </svg>
                    </div>
                    <div class="text-3xl font-extrabold" style="color: var(--color-primary);">{{ stat.value }}</div>
                    <div class="text-sm mt-1" style="color: var(--color-text-muted);">{{ stat.label }}</div>
                </div>
            </div>
        </div>

        <!-- Documents Section (Alternating: Gray) -->
        <div class="py-20 border-t"
            style="background-color: var(--color-bg-secondary); border-color: var(--color-border-light);">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center mb-8">
                    <div class="flex space-x-6 border-b" style="border-color: var(--color-border);">
                        <button @click="activeTab = 'terbaru'"
                            :class="['pb-4 font-bold text-lg border-b-2 transition', activeTab === 'terbaru' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-400 hover:text-gray-600']">
                            Terbaru
                        </button>
                        <button @click="activeTab = 'terpopuler'"
                            :class="['pb-4 font-bold text-lg border-b-2 transition', activeTab === 'terpopuler' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-400 hover:text-gray-600']">
                            Terpopuler
                        </button>
                    </div>
                    <Link href="/produk-hukum" class="text-sm font-bold hover:text-[var(--color-primary)]"
                        style="color: var(--color-text-muted);">
                        Lihat Semua <span class="ml-1">&rarr;</span>
                    </Link>
                </div>

                <!-- Product Grid with fixed gap -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <!-- Fallback empty state -->
                    <div v-if="displayedProducts.length === 0"
                        class="col-span-2 text-center py-10 text-gray-500 italic">
                        Belum ada dokumen yang tersedia.
                    </div>

                    <Link v-for="doc in displayedProducts" :key="doc.id" :href="route('produk-hukum.show', doc.slug)"
                        class="flex flex-col rounded-xl border hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                        style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">

                        <!-- Decorative Top Border -->
                        <div
                            class="h-1 w-full bg-linear-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500">
                        </div>

                        <div class="p-6 flex flex-col h-full">
                            <!-- Header: Type & Year -->
                            <div class="flex justify-between items-start mb-3">
                                <div class="flex flex-col gap-1">
                                    <span
                                        :class="[doc.badge_style, 'px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider inline-block w-fit']">
                                        {{ doc.type }}
                                    </span>
                                    <span v-if="doc.year" class="text-xs font-bold text-gray-400">
                                        Tahun {{ doc.year }}
                                    </span>
                                </div>
                                <!-- Status Badge (Only for Peraturan) -->
                                <div v-if="doc.status && doc.category_name && doc.category_name.toLowerCase().includes('peraturan')"
                                    :class="['px-2 py-0.5 rounded-full text-[10px] font-bold border',
                                        doc.status === 'Berlaku' || doc.status === 'active' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-red-50 text-red-600 border-red-200']">
                                    {{ doc.status === 'active' ? 'Berlaku' : doc.status }}
                                </div>
                            </div>

                            <!-- Title -->
                            <h3 class="text-lg font-bold leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2"
                                style="color: var(--color-primary);" :title="doc.title">
                                {{ doc.title }}
                            </h3>

                            <!-- Meta Info Grid -->
                            <div class="mt-auto space-y-2 pt-4">
                                <!-- Number -->
                                <div class="flex items-center gap-2 text-sm text-gray-600">
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                    </svg>
                                    <span class="font-medium truncate">{{ doc.number }}</span>
                                </div>

                                <!-- Signer (For SK/Keputusan) -->
                                <div v-if="doc.signer" class="flex items-center gap-2 text-sm text-gray-600">
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span class="truncate">Oleh: {{ doc.signer }}</span>
                                </div>

                                <!-- Views (For Popular Tab) -->
                                <div v-if="activeTab === 'terpopuler'"
                                    class="flex items-center gap-2 text-sm text-gray-500">
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <span>{{ doc.views }}x Dilihat</span>
                                </div>
                            </div>

                            <!-- Footer Action -->
                            <div class="mt-4 pt-4 border-t flex justify-end"
                                style="border-color: var(--color-border-light);">
                                <span
                                    class="text-xs font-bold text-gray-400 group-hover:text-yellow-600 flex items-center gap-1 transition-colors">
                                    Selengkapnya
                                    <svg class="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <!-- Data Visualization Section (Alternating: White) -->
        <div class="py-20 border-t"
            style="background-color: var(--color-bg-primary); border-color: var(--color-border-light);">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-8 flex justify-between items-end">
                    <div>
                        <span class="text-yellow-500 font-bold tracking-wider text-xs uppercase mb-1 block">Transparansi
                            Data</span>
                        <h2 class="text-3xl font-extrabold" style="color: var(--color-primary);">Statistik & Matriks
                            Data</h2>
                        <div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1"></div>
                    </div>
                    <Link :href="route('statistics.index')"
                        class="text-sm font-bold text-gray-500 hover:text-[#0F213A] flex items-center gap-1 transition-colors">
                        Lihat Detail <span class="ml-1">&rarr;</span>
                    </Link>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Left: Top 5 Types Chart -->
                    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col">
                        <h3 class="flex items-center gap-2 font-bold text-[#0F213A] mb-6">
                            <svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                            </svg>
                            <div style="color: var(--color-text-secondary);"> 5 Jenis Produk Hukum Terpopuler</div>
                        </h3>
                        <div class="flex-1 min-h-[300px] relative">
                            <Bar :data="barChartData" :options="barChartOptions" />
                        </div>
                    </div>

                    <!-- Right: Visitor Stats (Pie + Counters) -->
                    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col">
                        <h3 class="flex items-center gap-2 font-bold text-[#0F213A] mb-6">
                            <svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <div style="color: var(--color-text-secondary);">Statistik Pengunjung</div>
                        </h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                            <!-- Pie Chart -->
                            <div class="min-h-[200px] flex items-center justify-center relative">
                                <Pie :data="pieChartData" :options="pieChartOptions" />
                            </div>

                            <!-- Counters -->
                            <div class="flex flex-col justify-center space-y-4">
                                <div class="p-3 shadow-sm rounded-lg border-l-4"
                                    style="border-color: var(--color-secondary); background-color: var(--color-secondary);">
                                    <div class="text-xs font-bold uppercase" style="color: var(--color-text-primary);">
                                        Total Pengunjung</div>
                                    <div class="text-xl font-extrabold" style="color: var(--color-text-primary);">{{
                                        (visitorStats?.total ||
                                            0).toLocaleString() }}</div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="p-2 bg-gray-50 rounded border border-gray-100">
                                        <div class="text-[10px]" style="color: var(--color-text-primary);">Tahun Ini
                                        </div>
                                        <div class="font-bold" style="color: var(--color-text-primary);">{{
                                            (visitorStats?.year ||
                                                0).toLocaleString() }}</div>
                                    </div>
                                    <div class="p-2 bg-gray-50 rounded border border-gray-100">
                                        <div class="text-[10px]" style="color: var(--color-text-primary);">Bulan Ini
                                        </div>
                                        <div class="font-bold" style="color: var(--color-text-primary);">{{
                                            (visitorStats?.month ||
                                                0).toLocaleString() }}</div>
                                    </div>
                                    <div class="p-2 bg-gray-50 rounded border border-gray-100">
                                        <div class="text-[10px]" style="color: var(--color-text-primary);">Hari Ini
                                        </div>
                                        <div class="font-bold" style="color: var(--color-text-primary);">{{
                                            (visitorStats?.today ||
                                                0).toLocaleString() }}</div>
                                    </div>
                                    <div class="p-2 bg-green-50 rounded border border-green-100">
                                        <div class="text-[10px] text-green-600 font-bold flex items-center gap-1">
                                            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            Online
                                        </div>
                                        <div class="font-bold text-green-800">{{ (visitorStats?.online ||
                                            0).toLocaleString() }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Jurnal Hukum Section (Alternating: Gray) -->
        <div v-if="journals && journals.length > 0" class="py-20 border-t"
            style="background-color: var(--color-bg-secondary); border-color: var(--color-border-light);">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-end mb-10">
                    <div>
                        <h2 class="text-3xl font-extrabold" style="color: var(--color-primary);">Jurnal Hukum</h2>
                        <div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1"></div>
                    </div>
                    <Link :href="route('produk-hukum.index', { type: ['Jurnal Hukum'] })"
                        class="text-sm font-bold flex items-center gap-1 transition-colors hover:text-[var(--color-primary)]"
                        style="color: var(--color-text-muted);">
                        Lihat Semua <span class="ml-1">&rarr;</span>
                    </Link>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <a v-for="journal in journals" :key="journal.id" :href="journal.link" target="_blank"
                        class="group rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border flex flex-col overflow-hidden relative"
                        style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">

                        <!-- Accreditation Badge -->
                        <div v-if="journal.accreditation"
                            class="absolute top-3 right-3 z-10 bg-yellow-400 text-[10px] font-extrabold px-2 py-1 rounded shadow-md uppercase tracking-wide"
                            style="color: var(--color-text-inverse);">
                            {{ journal.accreditation }}
                        </div>

                        <!-- Cover Image -->
                        <div class="h-64 overflow-hidden relative bg-gray-200">
                            <img v-if="journal.cover_image" :src="journal.cover_image" :alt="journal.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div v-else
                                class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                                <svg class="w-12 h-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <!-- Overlay -->
                            <div
                                class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
                            </div>
                        </div>

                        <div class="p-5 flex-1 flex flex-col">
                            <h3 class="text-lg font-bold leading-snug mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2"
                                style="color: var(--color-primary);" :title="journal.title">
                                {{ journal.title }}
                            </h3>
                            <!-- Description (Rich text stripped) -->
                            <p class="text-xs line-clamp-3 mb-4 leading-relaxed"
                                style="color: var(--color-text-secondary);">
                                {{ journal.description }}
                            </p>

                            <div class="mt-auto pt-4 border-t" style="border-color: var(--color-border-light);">
                                <span class="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                                    style="color: var(--color-primary);">
                                    Baca Selengkapnya <span class="rounded-full p-1"
                                        style="background-color: var(--color-bg-secondary);">&rarr;</span>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- News Section (Alternating: White) -->
        <div v-if="news.length > 0" class="py-20 border-t"
            style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center mb-10">
                    <div>
                        <h2 class="text-2xl md:text-3xl font-extrabold" style="color: var(--color-primary);">Informasi
                            Hukum</h2>
                        <div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1"></div>
                    </div>
                    <!-- Link to News Index if exists, otherwise # -->
                    <Link :href="route('information.index')" class="text-sm font-bold hover:text-[var(--color-primary)]"
                        style="color: var(--color-text-muted);">
                        Lihat
                        Semua
                        <span class="ml-1">&rarr;</span>
                    </Link>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
                    <Link v-for="(item, idx) in news" :key="idx" :href="route('information.show', item.slug)"
                        class="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group border h-full flex flex-col"
                        style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                        <div class="h-48 overflow-hidden relative">
                            <!-- Use placeholder if no image -->
                            <img :src="route('posts.pathimage', item.id) || 'https://via.placeholder.com/600x400?text=No+Image'"
                                :alt="item.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            <div class="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 m-4 rounded"
                                style="color: var(--color-text-inverse);">
                                {{ item.category }}</div>
                        </div>
                        <div class="p-6 flex-1 flex flex-col">
                            <div class="text-xs mb-3 flex items-center gap-2" style="color: var(--color-text-muted);">
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {{ item.date }}
                            </div>
                            <h3 class="text-lg font-bold mb-3 leading-snug group-hover:text-yellow-600 transition"
                                style="color: var(--color-primary);">
                                {{ item.title }}</h3>
                            <p class="text-sm line-clamp-3 mb-6" style="color: var(--color-text-secondary);">{{
                                item.desc }}</p>
                            <div class="mt-auto">
                                <!-- Link to Post Detail -->
                                <span class="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                                    style="color: var(--color-primary);">Baca
                                    Selengkapnya <span class="rounded-full p-1"
                                        style="background-color: var(--color-bg-secondary);">&rarr;</span></span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        <!-- Awards Section -->
        <AwardsCarousel :awards="awards" />
    </GuestLayout>
</template>

<style scoped>
.fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-100 {
    animation-delay: 0.15s;
}

.delay-200 {
    animation-delay: 0.3s;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
