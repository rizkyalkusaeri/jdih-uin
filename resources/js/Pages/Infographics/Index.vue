<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { route } from 'ziggy-js';

const props = defineProps({
  infographics: Object,
});

// Lightbox State
const showLightbox = ref(false);
const activeInfographic = ref(null);
const currentImageIndex = ref(0);
const lightboxImages = ref([]);

// Open Lightbox
const openLightbox = (infographic) => {
  activeInfographic.value = infographic;

  // Combine cover + gallery images
  const images = [];
  if (infographic.cover_image) {
    images.push({
      // src: '/storage/' + infographic.cover_image,
      src: route('infographics.cover', infographic.id),
      alt: infographic.title + ' - Cover'
    });
  }

  if (infographic.images && Array.isArray(infographic.images)) {
    infographic.images.forEach((img, index) => {
      images.push({
        // src: '/storage/' + img,
        src: route('infographics.gallery', { infographic: infographic.id, index: index }),
        alt: infographic.title + ' - Image ' + (index + 1)
      });
    });
  }

  lightboxImages.value = images;
  currentImageIndex.value = 0;
  showLightbox.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling
};

// Close Lightbox
const closeLightbox = () => {
  showLightbox.value = false;
  activeInfographic.value = null;
  lightboxImages.value = [];
  document.body.style.overflow = '';
};

// Navigation
const nextImage = () => {
  if (currentImageIndex.value < lightboxImages.value.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

// Keyboard Navigation
const handleKeydown = (e) => {
  if (!showLightbox.value) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>

  <Head title="Info Grafis" />

  <GuestLayout>
    <!-- Header -->
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-[#0F213A] font-medium">Info Grafis</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">Info Grafis</h1>
        <p class="mt-2 text-gray-500">Galeri informasi hukum dalam bentuk grafis visual yang menarik.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <!-- Grid -->
      <div v-if="infographics.data.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="item in infographics.data" :key="item.id" @click="openLightbox(item)"
          class="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1">

          <!-- Cover Image -->
          <div class="aspect-[0.8] relative overflow-hidden bg-gray-100">
            <img v-if="item.cover_image" :src="route('infographics.cover', item.id)" :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <!-- Overlay & Icon -->
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span
                class="bg-white/90 p-3 rounded-full text-[#0F213A] shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>

            <!-- Image Count Badge -->
            <div v-if="item.images && item.images.length > 0"
              class="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ (item.images ? item.images.length : 0) + 1 }} Slide
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 flex-1 flex justify-center">
            <h3 class="font-bold text-xl text-center text-[#0F213A] group-hover:text-yellow-600 transition mb-2">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <div class="inline-block p-4 rounded-full bg-gray-50 mb-4">
          <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900">Belum ada Info Grafis</h3>
        <p class="text-gray-500 mt-1">Saat ini belum ada data info grafis yang tersedia.</p>
      </div>

      <!-- Pagination -->
      <div class="mt-12 flex justify-center text-sm" v-if="infographics.links.length > 3">
        <div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
          <template v-for="(link, key) in infographics.links" :key="key">
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

    <!-- Lightbox Modal -->
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="showLightbox" class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        @click.self="closeLightbox">

        <!-- Close Button -->
        <button @click="closeLightbox" class="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Navigation Buttons -->
        <button v-if="lightboxImages.length > 1" @click.stop="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent"
          :disabled="currentImageIndex === 0">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button v-if="lightboxImages.length > 1" @click.stop="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent"
          :disabled="currentImageIndex === lightboxImages.length - 1">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Image Container -->
        <div
          class="relative w-full h-full max-w-5xl max-h-screen p-4 md:p-10 flex flex-col items-center justify-center">
          <div class="relative w-full h-full flex items-center justify-center">
            <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-200 ease-in absolute"
              leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
              <img :key="currentImageIndex" :src="lightboxImages[currentImageIndex]?.src"
                :alt="lightboxImages[currentImageIndex]?.alt"
                class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg" />
            </Transition>
          </div>

          <!-- Caption & Counter -->
          <div class="absolute bottom-6 left-0 right-0 text-center">
            <h3 class="text-white font-bold text-lg mb-1">{{ activeInfographic?.title }}</h3>
            <p class="text-gray-400 text-sm">
              Gambar {{ currentImageIndex + 1 }} dari {{ lightboxImages.length }}
            </p>
          </div>
        </div>
      </div>
    </Transition>

  </GuestLayout>
</template>
