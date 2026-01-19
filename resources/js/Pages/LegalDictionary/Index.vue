<script setup>
import { Link, router } from '@inertiajs/vue3'; // Head removed
import { route } from 'ziggy-js';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, watch } from 'vue';
import { debounce } from 'lodash';
import SeoHead from '@/Components/SeoHead.vue';

const props = defineProps({
  legalDictionaries: Object,
  filters: Object,
});

const search = ref(props.filters.q || '');
const selectedChar = ref(props.filters.char || '');

const alphabet = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

// Watchers
watch([search, selectedChar], debounce(() => {
  router.get(
    route('legal-dictionary.index'),
    {
      q: search.value,
      char: selectedChar.value,
    },
    { preserveState: true, replace: true }
  );
}, 300));

const selectChar = (char) => {
  if (selectedChar.value === char) {
    selectedChar.value = ''; // Toggle off
  } else {
    selectedChar.value = char;
  }
};
</script>

<template>

  <SeoHead title="Kamus Hukum - JDIH UIN SGD"
    description="Kamus istilah hukum lengkap untuk membantu memahami terminologi hukum di lingkungan UIN Sunan Gunung Djati Bandung." />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-gray-500">Informasi Hukum</span>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-[#0F213A] font-medium">Kamus Hukum</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">Kamus Hukum</h1>
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

      <!-- Dictionary List -->
      <div v-if="legalDictionaries.data.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in legalDictionaries.data" :key="item.id"
          class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300 group">
          <h3 class="text-xl font-bold text-[#0F213A] mb-3 group-hover:text-yellow-600 transition">
            {{ item.title }}
          </h3>
          <div class="text-gray-600 text-sm leading-relaxed line-clamp-4" v-html="item.description"></div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
        <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900">Tidak ada istilah ditemukan</h3>
        <p class="text-gray-500 mt-1">Coba kata kunci lain atau pilih abjad lain.</p>
        <button @click="() => { search = ''; selectedChar = ''; }"
          class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium">
          Reset Filter
        </button>
      </div>

      <!-- Pagination -->
      <div class="mt-10 flex justify-center text-sm" v-if="legalDictionaries.links.length > 3">
        <div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
          <template v-for="(link, key) in legalDictionaries.links" :key="key">
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
  </GuestLayout>
</template>
