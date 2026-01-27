<script setup>
import { Link } from '@inertiajs/vue3';
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
import { Bar, Doughnut } from 'vue-chartjs'
import { computed } from 'vue';
import SeoHead from '@/Components/SeoHead.vue';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
)

const props = defineProps({
  visitorStats: Object,
  productsByType: Array,
  productsByYear: Array,
  topProducts: Array,
  totalLegalDocuments: Number,
  totalPUU: Number,
  statStatus: Array,
})

const formatNumber = (num) => {
  return new Intl.NumberFormat('id-ID').format(num || 0)
}

// Chart Options
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: { family: "'Inter', sans-serif", size: 12 },
        usePointStyle: true,
        padding: 20
      }
    }
  }
}

// 1. Doughnut Chart (Types)
const typeChartData = computed(() => {
  return {
    labels: props.productsByType.map(item => item.label),
    datasets: [
      {
        backgroundColor: props.productsByType.map(item => item.color),
        data: props.productsByType.map(item => item.value),
        borderWidth: 0,
        hoverOffset: 4
      }
    ]
  }
})

const typeChartOptions = {
  ...commonOptions,
  cutout: '60%',
}

// 2. Doughnut Chart (Validity Status)
const statusChartData = computed(() => {
  return {
    labels: props.statStatus.map(item => item.status),
    datasets: [
      {
        backgroundColor: props.statStatus.map(item => item.color),
        data: props.statStatus.map(item => item.count),
        borderWidth: 0,
        hoverOffset: 4
      }
    ]
  }
})

const statusChartOptions = {
  ...commonOptions,
  cutout: '60%',
}

// 3. Bar Chart (Year Trend)
const yearChartData = computed(() => {
  return {
    labels: props.productsByYear.map(item => item.year),
    datasets: [
      {
        label: 'Dokumen',
        backgroundColor: '#F59E0B', // Amber-500
        borderRadius: 4,
        data: props.productsByYear.map(item => item.count)
      }
    ]
  }
})

const yearChartOptions = {
  ...commonOptions,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        borderDash: [2, 2],
        color: '#f3f4f6'
      },
      ticks: {
        font: { family: "'Inter', sans-serif", size: 11 }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: { family: "'Inter', sans-serif", size: 11 }
      }
    }
  },
  plugins: {
    legend: {
      display: false // Hide legend for single bar chart
    }
  }
}
</script>

<template>

  <SeoHead title="Statistik & Data - JDIH UIN SGD"
    description="Visualisasi data produk hukum, statistik pengunjung, dan tren unduhan di JDIH UIN Sunan Gunung Djati Bandung." />

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

      <!-- 1. Summary Cards (Total Documents & PUU) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Total All Documents -->
        <div
          class="bg-linear-to-br from-[#0F213A] to-[#1a3b66] p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
          <div
            class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition transform group-hover:scale-110">
            <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z">
              </path>
            </svg>
          </div>
          <div class="relative z-10">
            <p class="text-blue-200 font-medium text-lg mb-1">Jumlah Seluruh Dokumen Hukum</p>
            <h2 class="text-5xl font-bold">{{ formatNumber(totalLegalDocuments) }}</h2>
            <div
              class="mt-4 inline-flex items-center text-sm font-medium text-blue-100 bg-white/10 px-3 py-1 rounded-full">
              <span>Semua Kategori</span>
            </div>
          </div>
        </div>

        <!-- Total PUU -->
        <div
          class="bg-linear-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group">
          <div
            class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition transform group-hover:scale-110">
            <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z">
              </path>
            </svg>
          </div>
          <div class="relative z-10">
            <p class="text-yellow-100 font-medium text-lg mb-1">Jumlah Koleksi PUU</p>
            <h2 class="text-5xl font-bold">{{ formatNumber(totalPUU) }}</h2>
            <div
              class="mt-4 inline-flex items-center text-sm font-medium text-yellow-100 bg-white/10 px-3 py-1 rounded-full">
              <span>Peraturan Perundang-undangan</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Visitor Stats (Existing) -->
      <div>
        <h3 class="text-lg font-bold text-[#0F213A] mb-4 flex items-center gap-2">
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Statistik Pengunjung
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Total -->
          <div
            class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-blue-200 transition">
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
          <div
            class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-green-200 transition">
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
          <div
            class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-amber-200 transition">
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
          <div
            class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-purple-200 transition">
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
      </div>

      <!-- 3. Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <!-- Left: Validity Status (Pie) -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 class="text-lg font-bold text-[#0F213A] mb-6">Status Keberlakuan PUU</h3>
          <div class="h-[250px] relative">
            <Doughnut :data="statusChartData" :options="statusChartOptions" />
          </div>
        </div>

        <!-- Middle: Types (Pie) -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 class="text-lg font-bold text-[#0F213A] mb-6">Jumlah PUU Berdasarkan Jenis</h3>
          <div class="h-[250px] relative">
            <Doughnut :data="typeChartData" :options="typeChartOptions" />
          </div>
        </div>

        <!-- Right: Year Trend (Bar) -->
        <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 class="text-lg font-bold text-[#0F213A] mb-6">Dokumen Hukum per Tahun</h3>
          <div class="h-[250px] relative">
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
