<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { route } from 'ziggy-js';
import { Link } from '@inertiajs/vue3'; // Head removed
import SeoHead from '@/Components/SeoHead.vue';
import { computed } from 'vue';
import HelpWidget from '@/Components/HelpWidget.vue';

const props = defineProps({
  post: Object,
  relatedPosts: Array,
});

const keywords = computed(() => {
  const tags = props.post.tags?.map(t => t.name) || [];
  return [...tags, 'Berita Hukum', 'JDIH UIN SGD'].join(', ');
});
</script>

<template>

  <SeoHead :title="post.title" :description="post.desc"
    :image="post.image ? route('posts.pathimage', post.id) : undefined" :keywords="keywords" :author="post.author" />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="border-b py-8" style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm mb-4" style="color: var(--color-text-muted);">
          <Link href="/" class="hover:text-[var(--color-accent-hover)]">Beranda</Link>
          <span class="mx-2" style="color: var(--color-border-dark);">/</span>
          <Link href="/informasi-hukum" class="hover:text-[var(--color-accent-hover)]">Informasi Hukum</Link>
          <span class="mx-2" style="color: var(--color-border-dark);">/</span>
          <span class="font-medium truncate max-w-xs" style="color: var(--color-text-primary);">{{ post.title }}</span>
        </nav>
        <h1 class="text-3xl font-extrabold" style="color: var(--color-primary);">Detail {{ post.category.name }}</h1>
      </div>
    </div>
    <div class="py-12" style="background-color: var(--color-bg-secondary);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <div class="lg:w-2/3">
            <article class="rounded-2xl shadow-sm border overflow-hidden"
              style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
              <!-- Featured Image -->
              <div v-if="post.image" class="w-full h-64 md:h-96 relative"
                style="background-color: var(--color-bg-secondary);">
                <img :src="route('posts.pathimage', post.id) || 'https://via.placeholder.com/600x400?text=No+Image'"
                  :alt="post.title" class="w-full h-full object-cover">
              </div>

              <div class="p-6 md:p-10">
                <!-- Meta -->
                <div class="flex flex-wrap items-center gap-4 text-sm mb-6" style="color: var(--color-text-muted);">
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
                <h1 class="text-2xl md:text-4xl font-bold mb-8 leading-tight" style="color: var(--color-text-brand);">
                  {{ post.title }}
                </h1>

                <!-- Content -->
                <div class="prose prose-lg prose-yellow max-w-none" style="color: var(--color-text-primary);"
                  v-html="post.content"></div>

                <!-- Tags -->
                <div v-if="post.tags && post.tags.length > 0" class="mt-10 pt-6 border-t"
                  style="border-color: var(--color-border-light);">
                  <h3 class="text-sm font-bold mb-3" style="color: var(--color-text-primary);">Tags:</h3>
                  <div class="flex flex-wrap gap-2">
                    <Link v-for="tag in post.tags" :key="tag.id" :href="route('information.index', { tag: tag.slug })"
                      class="px-3 py-1 rounded-lg text-sm hover:text-yellow-700 transition cursor-default"
                      style="background-color: var(--color-bg-secondary); color: var(--color-text-secondary);">
                      #{{ tag.name }}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3 space-y-8">
            <!-- Related Posts -->
            <div class="p-6 rounded-2xl shadow-sm border"
              style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
              <div class="flex items-center justify-between mb-6">
                <h3 class="font-bold text-lg" style="color: var(--color-text-brand);">Informasi Terkait</h3>
              </div>

              <div v-if="relatedPosts.length > 0" class="space-y-6">
                <Link v-for="related in relatedPosts" :key="related.slug"
                  :href="route('information.show', related.slug)" class="flex gap-4 group">
                  <div class="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative"
                    style="background-color: var(--color-bg-secondary);">
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
                      class="text-sm font-bold line-clamp-2 leading-relaxed hover:text-[var(--color-accent-hover)] transition mb-1"
                      style="color: var(--color-primary);">
                      {{ related.title }}
                    </h4>
                    <span class="text-xs" style="color: var(--color-text-muted);">{{ related.date }}</span>
                  </div>
                </Link>
              </div>
              <div v-else class="text-gray-500 text-sm text-center py-4">
                Tidak ada informasi hukum terkait.
              </div>
            </div>

            <HelpWidget />
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
