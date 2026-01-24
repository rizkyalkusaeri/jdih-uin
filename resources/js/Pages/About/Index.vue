<script setup>
import { Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import SeoHead from '@/Components/SeoHead.vue';


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
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-[#0F213A] font-medium">Tentang JDIH</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">Tentang JDIH UIN SGD</h1>
      </div>
    </div>

    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <div class="lg:w-2/3 space-y-8">

            <div v-if="general" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div class="prose prose-yellow text-gray-600 max-w-none" v-html="general.description">
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
            <div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24">
              <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 class="font-bold text-xl mb-2">Butuh Bantuan?</h3>
              <p class="text-gray-400 text-sm mb-8 leading-relaxed">
                Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau
                pertanyaan seputar produk hukum.
              </p>
              <Link href="/kontak"
                class="inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group">
                <span>Kontak Kami</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <div class="mt-8 pt-8 border-t border-gray-700/50">
                <p class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Atau hubungi via</p>
                <div class="flex justify-center gap-4">
                  <a href="#"
                    class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" />
                    </svg>
                  </a>
                  <a href="#"
                    class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
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
