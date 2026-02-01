<script setup>
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
</script>

<template>
  <div
    class="bg-linear-to-br from-[#0F213A] to-[#1a3b66] p-8 rounded-2xl shadow-lg text-center text-white relative overflow-hidden group">
    <div class="relative z-10">
      <h3 class="font-bold text-xl mb-2 text-white">Butuh Bantuan?</h3>
      <p class="text-sm mb-6 text-blue-100">
        Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum.
      </p>
      <Link :href="route('contact.index')"
        class="inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full shadow-md"
        style="color: var(--color-text-primary);">
        Kontak Kami
      </Link>
    </div>
  </div>
</template>
