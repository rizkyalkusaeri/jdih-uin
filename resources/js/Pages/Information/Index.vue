<script setup>
import { Link, router } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, watch, computed } from 'vue';
import { debounce } from 'lodash';
import SeoHead from '@/Components/SeoHead.vue';

const props = defineProps({
  posts: Object,
  categories: Array,
  tags: Array,
  filters: Object,
});

// State
const search = ref(props.filters.q || '');
const sort = ref(props.filters.sort || 'newest');
const selectedCategories = ref(props.filters.categories ? String(props.filters.categories).split(',') : []);
const selectedTags = ref(props.filters.tags ? String(props.filters.tags).split(',') : []);

// Sidebar Search State
const searchCategory = ref('');
const searchTag = ref('');
const showAllCategories = ref(false);
const showAllTags = ref(false);

// Filtered Lists for Sidebar
const filteredCategories = computed(() => {
  let cats = props.categories;
  if (searchCategory.value) {
    cats = cats.filter(c => c.name.toLowerCase().includes(searchCategory.value.toLowerCase()));
  }
  return showAllCategories.value ? cats : cats.slice(0, 5);
});

const filteredTags = computed(() => {
  let tgs = props.tags;
  if (searchTag.value) {
    tgs = tgs.filter(t => t.name.toLowerCase().includes(searchTag.value.toLowerCase()));
  }
  return showAllTags.value ? tgs : tgs.slice(0, 5);
});

// Watchers for Filters
const updateParams = debounce(() => {
  router.get(
    route('information.index'),
    {
      q: search.value,
      sort: sort.value,
      categories: selectedCategories.value.join(','),
      tags: selectedTags.value.join(','),
    },
    { preserveState: true, replace: true }
  );
}, 300);

watch(search, updateParams);
watch(sort, updateParams);
watch(selectedCategories, updateParams, { deep: true });
watch(selectedTags, updateParams, { deep: true });

const resetFilters = () => {
  search.value = '';
  sort.value = 'newest';
  selectedCategories.value = [];
  selectedTags.value = [];
};
</script>

<template>

  <SeoHead title="Informasi Hukum - JDIH UIN Sunan Gunung Djati"
    description="Berita dan artikel menarik seputar hukum di lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung." />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-[#0F213A] font-medium">Informasi Hukum</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">Informasi Hukum</h1>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="flex flex-col lg:flex-row gap-10">

        <!-- Sidebar Filters -->
        <div class="w-full lg:w-1/4 shrink-0 space-y-6">
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 class="font-bold text-[#0F213A] flex items-center gap-2">
                <svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter Pencarian
              </h3>
              <button @click="resetFilters"
                class="text-xs font-medium text-gray-400 hover:text-red-500 transition">Reset
                Filter</button>
            </div>

            <!-- Categories -->
            <div class="p-5 border-b border-gray-100">
              <h4 class="font-bold text-sm text-[#0F213A] mb-3">Kategori</h4>

              <!-- Search Category -->
              <div class="mb-3 relative">
                <svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" v-model="searchCategory" placeholder="Cari kategori..."
                  class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50" />
              </div>

              <div class="space-y-2">
                <div v-for="category in filteredCategories" :key="category.id"
                  class="flex items-center justify-between group">
                  <label class="flex items-center gap-3 cursor-pointer flex-1">
                    <input type="checkbox" v-model="selectedCategories" :value="category.slug"
                      class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" />
                    <span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"
                      :title="category.name">{{ category.name }}</span>
                  </label>
                  <span
                    class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition">
                    {{ category.posts_count || 0 }}
                  </span>
                </div>

                <button v-if="!searchCategory && categories.length > 5" @click="showAllCategories = !showAllCategories"
                  class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1">
                  {{ showAllCategories ? 'Sembunyikan' : 'Lihat Selengkapnya' }}
                  <svg class="w-3 h-3" :class="{ 'rotate-180': showAllCategories }" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Tags -->
            <div class="p-5 border-b border-gray-100">
              <h4 class="font-bold text-sm text-[#0F213A] mb-3">Tag</h4>

              <!-- Search Tag -->
              <div class="mb-3 relative">
                <svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" v-model="searchTag" placeholder="Cari tag..."
                  class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50" />
              </div>

              <div class="space-y-2">
                <div v-for="tag in filteredTags" :key="tag.id" class="flex items-center justify-between group">
                  <label class="flex items-center gap-3 cursor-pointer flex-1">
                    <input type="checkbox" v-model="selectedTags" :value="tag.slug"
                      class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" />
                    <span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"
                      :title="tag.name">{{ tag.name }}</span>
                  </label>
                  <span
                    class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition">
                    {{ tag.posts_count || 0 }}
                  </span>
                </div>

                <button v-if="!searchTag && tags.length > 5" @click="showAllTags = !showAllTags"
                  class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1">
                  {{ showAllTags ? 'Sembunyikan' : 'Lihat Selengkapnya' }}
                  <svg class="w-3 h-3" :class="{ 'rotate-180': showAllTags }" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 w-full md:w-3/4">
          <!-- Top Bar -->
          <div
            class="bg-white rounded-lg border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm">
            <div class="text-gray-600 font-medium mb-3 sm:mb-0">
              Menampilkan <span class="font-bold text-[#0F213A]">{{ posts.total }}</span>
              Hasil Pencarian
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-400 text-sm">Urutkan:</span>
              <select v-model="sort"
                class="border-gray-200 rounded-md text-sm text-[#0F213A] focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer">
                <option value="newest">Terbaru</option>
                <option value="popular">Terpopuler</option>
              </select>
            </div>
          </div>

          <!-- Search Bar -->
          <div class="mb-6 relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input type="text" v-model="search" placeholder="Cari berita atau artikel..."
              class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" />
          </div>

          <!-- Posts Grid -->
          <div v-if="posts.data.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link v-for="post in posts.data" :key="post.id" :href="route('information.show', post.slug)"
              class="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              <div class="aspect-video relative overflow-hidden bg-gray-100">
                <img v-if="post.image"
                  :src="route('posts.pathimage', post.id) || 'https://via.placeholder.com/600x400?text=No+Image'"
                  :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                  <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="absolute top-4 left-4">
                  <span class="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {{ post.category ? post.category.name : 'Umum' }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center text-xs text-gray-500 mb-3 gap-3">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                      </path>
                    </svg>
                    {{ post.date }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {{ post.views_count }} Views
                  </span>
                </div>
                <h2 class="text-xl font-bold text-[#0F213A] mb-3 line-clamp-2 group-hover:text-yellow-600 transition">
                  {{ post.title }}
                </h2>
                <p class="text-gray-600 text-sm line-clamp-3 mb-4">
                  {{ post.desc }}
                </p>
                <span
                  class="text-yellow-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Baca Selengkapnya
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
            <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900">Belum ada informasi</h3>
            <p class="text-gray-500 mt-1">Coba sesuaikan filter pencarian anda.</p>
            <button @click="resetFilters" class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium">Reset
              Filter</button>
          </div>

          <!-- Pagination -->
          <div class="mt-10 flex justify-center text-sm" v-if="posts.links.length > 3">
            <div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
              <template v-for="(link, key) in posts.links" :key="key">
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
