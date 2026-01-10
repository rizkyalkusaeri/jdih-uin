<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, computed } from 'vue';



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
    visitorStats: Object
});

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

const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: { precision: 0 }
        },
        x: {
            ticks: { font: { size: 10 } } // Smaller font for long names
        }
    }
}

const pieChartData = computed(() => ({
    labels: ['Tahun Ini', 'Bulan Ini', 'Hari Ini'],
    datasets: [
        {
            backgroundColor: ['#f59e0b', '#10b981', '#3b82f6'], // yellow, green, blue
            data: [props.visitorStats.year, props.visitorStats.month, props.visitorStats.today]
        }
    ]
}))

const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'bottom' }
    }
}
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
                <div class="absolute inset-0 bg-linear-to-b from-[#0F213A]/90 via-[#0F213A]/80 to-[#0F213A]/60"></div>
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
                        <select v-model="searchType"
                            class="w-full bg-transparent border-none focus:ring-0 focus:outline-0 text-gray-700 text-sm font-medium appearance-none cursor-pointer pr-8">
                            <option>Semua Jenis</option>
                            <option v-for="type in types" :key="type.id" :value="type.name">{{ type.name }}</option>
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
                        <input type="text" v-model="searchQuery" @keyup.enter="handleSearch"
                            placeholder="Masukkan kata kunci atau nomor dokumen..."
                            class="w-full border-none ml-2 focus:ring-0 focus:outline-0 text-gray-600 placeholder-gray-400" />
                    </div>
                    <button @click="handleSearch"
                        class="bg-[#FFC700] hover:bg-yellow-400 text-[#0F213A] font-bold px-8 py-3 rounded-md transition shadow-sm flex items-center justify-center">
                        CARI
                    </button>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
            <div class="bg-white rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                <div v-for="(stat, index) in statsDisplay" :key="index"
                    class="p-6 flex flex-col items-center text-center">
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

        <!-- Documents Section (Alternating: Gray) -->
        <div class="bg-gray-50 py-20 border-t border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center mb-8">
                    <div class="flex space-x-6 border-b border-gray-200">
                        <button @click="activeTab = 'terbaru'"
                            :class="['pb-4 font-bold text-lg border-b-2 transition', activeTab === 'terbaru' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-400 hover:text-gray-600']">
                            Terbaru
                        </button>
                        <button @click="activeTab = 'terpopuler'"
                            :class="['pb-4 font-bold text-lg border-b-2 transition', activeTab === 'terpopuler' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-400 hover:text-gray-600']">
                            Terpopuler
                        </button>
                    </div>
                    <Link href="/produk-hukum" class="text-sm font-bold text-gray-500 hover:text-[#0F213A]">
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
                        class="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:border-blue-900/30 transition-all group cursor-pointer">
                        <!-- Icon -->
                        <div
                            class="hidden sm:flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-900 shrink-0">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>

                        <div class="flex flex-col gap-2 flex-1">
                            <!-- Badge & No Year -->
                            <div class="flex items-center gap-2">
                                <span
                                    :class="[doc.badge_style, 'px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide']">
                                    {{ doc.type }}
                                </span>
                            </div>

                            <!-- Title/Number -->
                            <h3
                                class="text-[#212529] text-base font-bold leading-snug group-hover:text-blue-900 transition-colors">
                                <Link :href="route('produk-hukum.show', doc.slug)">{{ doc.number }}</Link>
                            </h3>

                            <!-- Description -->
                            <p class="text-gray-500 text-sm line-clamp-2">
                                {{ doc.desc }}
                            </p>

                            <!-- Actions -->
                            <div class="flex items-center gap-4 mt-2">
                                <Link :href="route('produk-hukum.show', doc.slug)"
                                    class="flex items-center gap-1 text-xs font-bold text-gray-500 group-hover:text-blue-900 transition-colors">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Lihat Detail
                                </Link>
                                <a :href="route('produk-hukum.download', doc.slug)" target="_blank"
                                    class="flex items-center gap-1 text-xs font-bold text-gray-500 group-hover:text-blue-900 transition-colors">
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Unduh
                                </a>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <!-- Data Visualization Section (Alternating: White) -->
        <div class="bg-white py-20 border-t border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-8 flex justify-between items-end">
                    <div>
                        <span class="text-yellow-500 font-bold tracking-wider text-xs uppercase mb-1 block">Transparansi
                            Data</span>
                        <h2 class="text-3xl font-extrabold text-[#0F213A]">Statistik & Matriks Data</h2>
                        <div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1"></div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Left: Top 5 Types Chart -->
                    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col">
                        <h3 class="flex items-center gap-2 font-bold text-[#0F213A] mb-6">
                            <svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                            </svg>
                            5 Jenis Produk Hukum Terpopuler
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
                            Statistik Pengunjung
                        </h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                            <!-- Pie Chart -->
                            <div class="min-h-[200px] flex items-center justify-center relative">
                                <Pie :data="pieChartData" :options="pieChartOptions" />
                            </div>

                            <!-- Counters -->
                            <div class="flex flex-col justify-center space-y-4">
                                <div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                    <div class="text-xs text-gray-500 font-bold uppercase">Total Pengunjung</div>
                                    <div class="text-xl font-extrabold text-blue-900">{{ (visitorStats?.total ||
                                        0).toLocaleString() }}</div>
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="p-2 bg-gray-50 rounded border border-gray-100">
                                        <div class="text-[10px] text-gray-500">Tahun Ini</div>
                                        <div class="font-bold text-gray-800">{{ (visitorStats?.year ||
                                            0).toLocaleString() }}</div>
                                    </div>
                                    <div class="p-2 bg-gray-50 rounded border border-gray-100">
                                        <div class="text-[10px] text-gray-500">Bulan Ini</div>
                                        <div class="font-bold text-gray-800">{{ (visitorStats?.month ||
                                            0).toLocaleString() }}</div>
                                    </div>
                                    <div class="p-2 bg-gray-50 rounded border border-gray-100">
                                        <div class="text-[10px] text-gray-500">Hari Ini</div>
                                        <div class="font-bold text-gray-800">{{ (visitorStats?.today ||
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

        <!-- News Section (Alternating: White) -->
        <div v-if="news.length > 0" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="flex justify-between items-center mb-10">
                <div>
                    <h2 class="text-2xl md:text-3xl font-extrabold text-[#0F213A]">Informasi Hukum</h2>
                    <div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1"></div>
                </div>
                <!-- Link to News Index if exists, otherwise # -->
                <Link :href="route('information.index')" class="text-sm font-bold text-gray-500  hover:text-[#0F213A]">
                    Lihat
                    Semua
                    <span class="ml-1">&rarr;</span>
                </Link>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
                <Link v-for="(item, idx) in news" :key="idx" :href="route('information.show', item.slug)"
                    class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-gray-100 h-full flex flex-col">
                    <div class="h-48 overflow-hidden relative">
                        <!-- Use placeholder if no image -->
                        <img :src="route('posts.pathimage', item.id) || 'https://via.placeholder.com/600x400?text=No+Image'"
                            :alt="item.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        <div
                            class="absolute top-0 right-0 bg-yellow-400 text-[#0F213A] text-xs font-bold px-3 py-1 m-4 rounded">
                            {{ item.category }}</div>
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
                            <!-- Link to Post Detail -->
                            <span
                                class="text-[#0F213A] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Baca
                                Selengkapnya <span class="bg-gray-100 rounded-full p-1">&rarr;</span></span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </GuestLayout>
</template>
