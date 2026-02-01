<script setup>
import { Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref } from 'vue';
import { route } from 'ziggy-js';
import SeoHead from '@/Components/SeoHead.vue';
import HelpWidget from '@/Components/HelpWidget.vue';

const props = defineProps({
  links: Array,
  faqs: Array
});

const localFaqs = ref(props.faqs.map((faq, index) => ({
  ...faq,
  isOpen: index === 0
})));

const toggleFaq = (index) => {
  localFaqs.value[index].isOpen = !localFaqs.value[index].isOpen;
};
</script>

<template>

  <SeoHead title="FAQ - JDIH UIN SGD"
    description="Pertanyaan yang sering diajukan mengenai layanan Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung." />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="border-b py-8" style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm mb-4" style="color: var(--color-text-muted);">
          <Link href="/" class="hover:text-[var(--color-accent-hover)] transition">Beranda</Link>
          <span class="mx-2" style="color: var(--color-border-dark);">/</span>
          <span style="color: var(--color-text-description);">Tentang</span>
          <span class="mx-2" style="color: var(--color-border-dark);">/</span>
          <span class="font-medium" style="color: var(--color-text-primary);">FAQ</span>
        </nav>
        <h1 class="text-3xl font-extrabold" style="color: var(--color-text-brand);">Frequently Asked Questions</h1>
      </div>
    </div>

    <div class="py-12" style="background-color: var(--color-bg-secondary);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <div class="lg:w-2/3 space-y-8">

            <!-- FAQ List -->
            <div class="space-y-4">
              <div v-for="(faq, index) in localFaqs" :key="index"
                class="rounded-xl shadow-sm border overflow-hidden transition-all duration-300"
                :class="{ 'shadow-md': faq.isOpen }"
                style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                <button @click="toggleFaq(index)"
                  class="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                  <span class="font-bold text-lg pr-8" style="color: var(--color-text-primary);">{{ faq.question
                  }}</span>
                  <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"
                    :class="{ 'text-yellow-600': faq.isOpen }"
                    :style="faq.isOpen ? 'background-color: var(--color-bg-secondary);' : 'background-color: var(--color-bg-secondary);'">
                    <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': faq.isOpen }"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div v-show="faq.isOpen" class="px-6 pb-6 leading-relaxed border-t pt-4 animate-fadeIn"
                  style="color: var(--color-text-secondary); border-color: var(--color-border-light);"
                  v-html="faq.answer">
                </div>
              </div>
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

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
