<script setup>
import { Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import SeoHead from '@/Components/SeoHead.vue';
import { route } from 'ziggy-js';

const props = defineProps({
  page: Object,
  links: Array
});
</script>

<template>

  <SeoHead :title="page.title + ' - JDIH UIN SGD'"
    :description="page.description.replace(/<[^>]*>?/gm, '').substring(0, 160)" />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-gray-500">Tentang</span>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-[#0F213A] font-medium">{{ page.title }}</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">{{ page.title }}</h1>
      </div>
    </div>

    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <div class="lg:w-2/3 space-y-8">

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div class="prose prose-yellow text-gray-600 max-w-none" v-html="page.description">
              </div>
            </div>

          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3 space-y-8">
            <!-- Kontak Kami Widget -->
            <div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center">
              <h3 class="font-bold text-xl mb-2">Butuh Bantuan?</h3>
              <p class="text-gray-400 text-sm mb-6">Hubungi kami jika anda membutuhkan bantuan tekait layanan
                informasi
                hukum.</p>
              <Link :href="route('contact.index')"
                class="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full">
                Kontak Kami
              </Link>
            </div>

            <!-- Tautan Terkait Widget -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6" v-if="links && links.length > 0">
              <h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Tautan Terkait
              </h3>
              <div class="space-y-3">
                <a v-for="link in links" :key="link.id" :href="link.url" target="_blank"
                  class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group">
                  <div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                    <img v-if="link.logo_path" :src="route('links.logo', link.id)" class="w-full h-full object-cover"
                      :alt="link.title">
                    <svg v-else class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight">
                    {{ link.title }}
                  </span>
                  <svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
