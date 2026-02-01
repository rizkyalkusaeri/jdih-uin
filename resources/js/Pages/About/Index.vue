<script setup>
import { Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import SeoHead from '@/Components/SeoHead.vue';
import HelpWidget from '@/Components/HelpWidget.vue';


const props = defineProps({
  links: Array,
  general: Object
});
</script>

<template>

  <SeoHead title="Tentang JDIH - JDIH UIN SGD"
    description="Tentang Jaringan Dokumentasi dan Informasi Hukum Universitas Islam Negeri Sunan Gunung Djati Bandung." />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="border-b py-8" style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm mb-4" style="color: var(--color-text-muted);">
          <Link href="/" class="hover:text-[var(--color-accent-hover)] transition">Beranda</Link>
          <span class="mx-2" style="color: var(--color-border-dark);">/</span>
          <span class="font-medium" style="color: var(--color-text-primary);">Tentang JDIH</span>
        </nav>
        <h1 class="text-3xl font-extrabold" style="color: var(--color-text-brand);">Tentang JDIH UIN SGD</h1>
      </div>
    </div>

    <div class="py-12" style="background-color: var(--color-bg-secondary);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <div class="lg:w-2/3 space-y-8">

            <div v-if="general" class="rounded-2xl shadow-sm border p-8"
              style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
              <div class="prose prose-yellow max-w-none" style="color: var(--color-text-primary);"
                v-html="general.description">
              </div>
            </div>

            <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
              <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900">Belum Ada Data</h3>
              <p class="text-gray-500 mt-2">Data profil belum ditambahkan.</p>
            </div>

          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3 space-y-8">
            <!-- Kontak Kami Widget -->
            <HelpWidget />

            <!-- Tautan Terkait Widget -->
            <div class="rounded-xl shadow-sm border p-6" v-if="links && links.length > 0"
              style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
              <h3 class="font-bold mb-4 flex items-center gap-2" style="color: var(--color-text-brand);">
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
