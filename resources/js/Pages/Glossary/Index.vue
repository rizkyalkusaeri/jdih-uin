<script setup>
import { Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { debounce } from 'lodash';
import SeoHead from '@/Components/SeoHead.vue';
import axios from 'axios';

const search = ref('');
const selectedChar = ref('');
const items = ref([]);
const currentPage = ref(1);
const lastPage = ref(1);
const loading = ref(false);
const total = ref(0);

const alphabet = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

// Fetch data from API
const fetchData = async (page = 1, reset = false) => {
  if (loading.value) return;
  if (!reset && page > lastPage.value) return;

  loading.value = true;

  try {
    const params = new URLSearchParams();
    params.append('page', page);
    if (search.value) params.append('q', search.value);
    if (selectedChar.value) params.append('char', selectedChar.value);

    const response = await axios.get(`/api/glossary?${params.toString()}`);
    const data = response.data;

    if (reset) {
      items.value = data.data;
    } else {
      items.value = [...items.value, ...data.data];
    }

    currentPage.value = data.current_page;
    lastPage.value = data.last_page;
    total.value = data.total;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

// Initial load
onMounted(() => {
  fetchData(1, true);
});

// Watch for filter changes
const debouncedFetch = debounce(() => {
  currentPage.value = 1;
  fetchData(1, true);
}, 300);

watch([search, selectedChar], () => {
  debouncedFetch();
});

// Infinite scroll
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 200 && !loading.value && currentPage.value < lastPage.value) {
    fetchData(currentPage.value + 1, false);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const selectChar = (char) => {
  if (selectedChar.value === char) {
    selectedChar.value = '';
  } else {
    selectedChar.value = char;
  }
};

const resetFilters = () => {
  search.value = '';
  selectedChar.value = '';
};
</script>

<template>

  <SeoHead title="Glosarium - JDIH UIN SGD"
    description="Daftar istilah dan definisi hukum yang sering digunakan dalam lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung." />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-gray-500">Informasi Hukum</span>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-[#0F213A] font-medium">Glosarium</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">Glosarium</h1>
        <p class="text-gray-500 mt-2">Daftar istilah dan definisi hukum.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <!-- Search & Filter -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <!-- Search -->
        <div class="relative mb-6">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input type="text" v-model="search" placeholder="Cari istilah..."
            class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition" />
        </div>

        <!-- Alphabet Filter -->
        <div class="flex flex-wrap gap-2 justify-center">
          <button v-for="char in alphabet" :key="char" @click="selectChar(char)"
            class="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition duration-200 border"
            :class="[
              selectedChar === char
                ? 'bg-[#0F213A] text-white border-[#0F213A]'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200'
            ]">
            {{ char }}
          </button>
        </div>
      </div>

      <!-- Info -->
      <div class="mb-4 text-sm text-gray-500" v-if="total > 0">
        Menampilkan {{ items.length }} dari {{ total }} istilah
      </div>

      <!-- Glossary List -->
      <div v-if="items.length > 0" class="flex flex-col gap-4">
        <div v-for="item in items" :key="item.id"
          class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300 group">
          <h3 class="text-lg font-bold text-[#0F213A] mb-2 group-hover:text-yellow-600 transition">
            {{ item.title }}
          </h3>
          <div class="text-gray-600 text-sm leading-relaxed" v-html="item.description"></div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-8">
        <div class="flex items-center gap-3">
          <svg class="animate-spin h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          <span class="text-gray-500">Memuat data...</span>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && items.length === 0"
        class="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900">Tidak ada istilah ditemukan</h3>
        <p class="text-gray-500 mt-1">Coba kata kunci lain atau pilih abjad lain.</p>
        <button @click="resetFilters" class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium">
          Reset Filter
        </button>
      </div>

      <!-- End of List -->
      <div v-if="!loading && items.length > 0 && currentPage >= lastPage"
        class="text-center py-6 text-gray-400 text-sm">
        — Semua data telah dimuat —
      </div>

    </div>
  </GuestLayout>
</template>
