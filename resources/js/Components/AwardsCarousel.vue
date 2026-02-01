<script setup>
import { computed } from 'vue';

const props = defineProps({
  awards: {
    type: Array,
    default: () => []
  }
});

// Triple the list to ensure no headers/gaps on wide screens
const displayAwards = computed(() => [...props.awards, ...props.awards, ...props.awards]);
</script>

<template>
  <div v-if="awards.length > 0" class="w-full py-12 overflow-hidden relative"
    style="background-color: var(--color-primary);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
      <h2 class="text-2xl font-bold mb-2" style="color: var(--color-text-inverse);">Penghargaan</h2>
      <div class="h-1 w-16 bg-yellow-500 rounded-full mx-auto"></div>
    </div>

    <!-- Carousel Container -->
    <div class="relative w-full overflow-hidden group/track">
      <!-- Gradient Overlays for smooth fade effect at edges -->
      <div
        class="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[var(--color-primary)] to-transparent z-10 pointer-events-none">
      </div>
      <div
        class="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[var(--color-primary)] to-transparent z-10 pointer-events-none">
      </div>

      <!-- Scroll Track -->
      <div class="flex gap-16 animate-marquee w-max pt-4 pb-20 group-hover/track:[animation-play-state:paused] px-4">
        <div v-for="(award, index) in displayAwards" :key="index"
          class="relative group/item flex flex-col items-center justify-center cursor-pointer">
          <!-- Image -->
          <div class="h-24 w-24 md:h-32 md:w-32 transition-transform duration-300 transform group-hover/item:scale-110">
            <img :src="award.image" :alt="award.title" :title="award.title"
              class="w-full h-full object-contain drop-shadow-lg" loading="lazy" />
          </div>

          <!-- Title Toggle (Visible on Hover/Click) -->
          <div
            class="absolute -bottom-14 opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-y-2 group-hover/item:translate-y-0 text-center w-48 z-20 pointer-events-none">
            <div class="text-xs font-bold py-2 px-3 rounded-lg shadow-xl mx-auto inline-block relative border"
              style="background-color: var(--color-bg-card); color: var(--color-text-primary); border-color: var(--color-border-light);">
              {{ award.title }}
              <!-- Arrow -->
              <div class="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 border-t border-l"
                style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

/* Pause on hover is handled via tailwind group-hover/track utilities above, 
   but can be reinforced here if needed: */
/* .group:hover .animate-marquee {
    animation-play-state: paused;
} */
</style>
