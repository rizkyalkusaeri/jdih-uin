<script setup>
import { computed } from 'vue';

const props = defineProps({
  awards: {
    type: Array,
    default: () => []
  }
});

// Double the list for seamless infinite scroll
const displayAwards = computed(() => [...props.awards, ...props.awards]);
</script>

<template>
  <div v-if="awards.length > 0" class="w-full bg-[#0F213A] py-12 overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
      <h2 class="text-2xl font-bold text-white mb-2">Penghargaan</h2>
      <div class="h-1 w-16 bg-yellow-500 rounded-full mx-auto"></div>
    </div>

    <!-- Carousel Container -->
    <div class="relative w-full overflow-hidden group/track">
      <!-- Gradient Overlays for smooth fade effect at edges -->
      <div
        class="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#0F213A] to-transparent z-10 pointer-events-none">
      </div>
      <div
        class="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#0F213A] to-transparent z-10 pointer-events-none">
      </div>

      <!-- Scroll Track -->
      <div class="flex gap-16 animate-marquee w-max py-4 group-hover/track:[animation-play-state:paused] px-4">
        <div v-for="(award, index) in displayAwards" :key="index"
          class="relative group/item flex flex-col items-center justify-center cursor-pointer">
          <!-- Image -->
          <div class="h-24 w-24 md:h-32 md:w-32 transition-transform duration-300 transform group-hover/item:scale-125">
            <img :src="award.image" :alt="award.title" class="w-full h-full object-contain drop-shadow-lg"
              loading="lazy" />
          </div>

          <!-- Tooltip / Title Toggle -->
          <div
            class="absolute -bottom-12 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/item:translate-y-0 text-center w-48 z-20 pointer-events-none">
            <div
              class="bg-white text-[#0F213A] text-xs font-bold py-1 px-3 rounded shadow-lg mx-auto inline-block relative">
              {{ award.title }}
              <!-- Arrow -->
              <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45">
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
