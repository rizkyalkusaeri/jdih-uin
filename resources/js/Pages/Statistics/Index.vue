<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js'
import { Bar, Doughnut, Line } from 'vue-chartjs'
import { computed } from 'vue';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement)

const props = defineProps({
  visitorStats: Object,
  productsByType: Array,
  productsByYear: Array,
  topProducts: Array,
});

// -- Charts Config --

const typeChartData = computed(() => {
  return {
    labels: props.productsByType.map(item => item.label),
    datasets: [
      {
        backgroundColor: props.productsByType.map(item => item.color || '#41B883'),
        data: props.productsByType.map(item => item.value),
        hoverOffset: 4
      }
    ]
  }
});

const typeChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        padding: 20,
      }
    }
  }
};

const yearChartData = computed(() => {
  return {
    labels: props.productsByYear.map(item => item.year),
    datasets: [
      {
        label: 'Jumlah Dokumen',
        backgroundColor: '#0F213A',
        borderColor: '#0F213A',
        data: props.productsByYear.map(item => item.count),
        borderRadius: 4,
      }
    ]
  }
});

const yearChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        drawBorder: false,
        color: '#f3f4f6',
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

// -- Formatting --
const formatNumber = (num) => {
  return new Intl.NumberFormat('id-ID').format(num);
};
</script>

<template>

  <Head title="Statistik & Data" />

  <GuestLayout>
    <!-- Header -->
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-[#0F213A] font-medium">Statistik & Data</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">Statistik & Data</h1>
        <p class="mt-2 text-gray-500">Visualisasi data produk hukum dan statistik pengunjung JDIH.</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

      <!-- 1. Stats Cards (Visitors) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Total -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
              </path>
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-500 font-medium uppercase tracking-wide">Total Pengunjung</p>
            <p class="text-2xl font-bold text-[#0F213A]">{{ formatNumber(visitorStats.total) }}</p>
          </div>
        </div>
        <!-- Today -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-500 font-medium uppercase tracking-wide">Hari Ini</p>
            <p class="text-2xl font-bold text-[#0F213A]">{{ formatNumber(visitorStats.today) }}</p>
          </div>
        </div>
        <!-- This Month -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-500 font-medium uppercase tracking-wide">Bulan Ini</p>
            <p class="text-2xl font-bold text-[#0F213A]">{{ formatNumber(visitorStats.month) }}</p>
          </div>
        </div>
        <!-- Online -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z">
              </path>
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-500 font-medium uppercase tracking-wide">Sedang Online</p>
            <p class="text-2xl font-bold text-[#0F213A]">{{ visitorStats.online }}</p>
          </div>
        </div>
      </div>

      <!-- 2. Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <!-- Left: Types (Pie) -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-1">
          <h3 class="text-lg font-bold text-[#0F213A] mb-6">Persebaran Jenis Dokumen</h3>
          <div class="h-[300px] relative">
            <Doughnut :data="typeChartData" :options="typeChartOptions" />
          </div>
        </div>

        <!-- Right: Year Trend (Bar) -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-2">
          <h3 class="text-lg font-bold text-[#0F213A] mb-6">Dokumen Hukum per Tahun</h3>
          <div class="h-[300px] relative">
            <Bar :data="yearChartData" :options="yearChartOptions" />
          </div>
        </div>
      </div>

      <!-- 3. Top Products Table -->
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 class="text-lg font-bold text-[#0F213A]">Dokumen Hukum Terpopuler</h3>
          <Link href="/produk-hukum" class="text-sm text-[#0F213A] hover:text-yellow-600 font-medium">Lihat Semua &rarr;
          </Link>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead class="bg-gray-50 text-gray-500 uppercase font-medium">
              <tr>
                <th class="px-6 py-4">Judul Dokumen</th>
                <th class="px-6 py-4 whitespace-nowrap">Nomor</th>
                <th class="px-6 py-4 whitespace-nowrap">Tahun</th>
                <th class="px-6 py-4 whitespace-nowrap">Jenis</th>
                <th class="px-6 py-4 text-center">Dilihat</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="(item, index) in topProducts" :key="index" class="hover:bg-gray-50 transition">
                <td class="px-6 py-4 font-medium text-[#0F213A]">
                  <Link :href="route('produk-hukum.show', item.slug)" class="hover:text-blue-700 hover:underline">
                    {{ item.title }}
                  </Link>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ item.number }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ item.year }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-semibold">
                    {{ item.type }}
                  </span>
                </td>
                <td class="px-6 py-4 text-center font-bold text-gray-700">
                  {{ formatNumber(item.views) }}
                </td>
              </tr>
              <tr v-if="topProducts.length === 0">
                <td colspan="5" class="px-6 py-8 text-center text-gray-500">Belum ada data dokumen.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </GuestLayout>
</template>
