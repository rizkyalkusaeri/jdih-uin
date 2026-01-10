<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { route } from 'ziggy-js';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
  post: Object,
  relatedPosts: Array,
});
</script>

<template>

  <Head :title="post.title" />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600">Beranda</Link>
          <span class="mx-2">/</span>
          <Link href="/informasi-hukum" class="hover:text-yellow-600">Informasi Hukum</Link>
          <span class="mx-2">/</span>
          <span class="text-gray-800 font-medium truncate max-w-xs">{{ post.title }}</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">Detail {{ post.category.name }}</h1>
      </div>
    </div>
    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <div class="lg:w-2/3">
            <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <!-- Featured Image -->
              <div v-if="post.image" class="w-full h-64 md:h-96 relative bg-gray-100">
                <img :src="route('posts.pathimage', post.id) || 'https://via.placeholder.com/600x400?text=No+Image'"
                  :alt="post.title" class="w-full h-full object-cover">
              </div>

              <div class="p-6 md:p-10">
                <!-- Meta -->
                <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {{ post.category ? post.category.name : 'Umum' }}
                  </span>
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    {{ post.author }}
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

                <!-- Title -->
                <h1 class="text-2xl md:text-4xl font-bold text-[#0F213A] mb-8 leading-tight">
                  {{ post.title }}
                </h1>

                <!-- Content -->
                <div class="prose prose-lg prose-yellow max-w-none text-gray-700" v-html="post.content"></div>

                <!-- Tags -->
                <div v-if="post.tags && post.tags.length > 0" class="mt-10 pt-6 border-t border-gray-100">
                  <h3 class="text-sm font-bold text-gray-900 mb-3">Tags:</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in post.tags" :key="tag.id"
                      class="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-yellow-50 hover:text-yellow-700 transition cursor-default">
                      #{{ tag.name }}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3 space-y-8">
            <!-- Related Posts -->
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div class="flex items-center justify-between mb-6">
                <h3 class="font-bold text-[#0F213A] text-lg">Berita Terkait</h3>
              </div>

              <div v-if="relatedPosts.length > 0" class="space-y-6">
                <Link v-for="related in relatedPosts" :key="related.slug"
                  :href="route('information.show', related.slug)" class="flex gap-4 group">
                  <div class="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 relative">
                    <img v-if="related.image"
                      :src="route('posts.pathimage', related.id) || 'https://via.placeholder.com/600x400?text=No+Image'"
                      :alt="related.title"
                      class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                    <div v-else class="w-full h-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4
                      class="text-sm font-bold text-[#0F213A] line-clamp-2 leading-relaxed group-hover:text-yellow-600 transition mb-1">
                      {{ related.title }}
                    </h4>
                    <span class="text-xs text-gray-500">{{ related.date }}</span>
                  </div>
                </Link>
              </div>
              <div v-else class="text-gray-500 text-sm text-center py-4">
                Tidak ada berita terkait.
              </div>
            </div>

            <div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center">
              <h3 class="font-bold text-xl mb-2">Butuh Bantuan?</h3>
              <p class="text-gray-400 text-sm mb-6">Hubungi kami jika anda membutuhkan bantuan tekait layanan informasi
                hukum.</p>
              <Link href="#"
                class="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full">
                Kontak Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
