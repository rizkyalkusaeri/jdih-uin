<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
  items: {
    type: Array,
    required: true,
    // Expected format: [{ label: 'Home', url: '/' }, { label: 'Current Page' }]
  }
});
</script>

<template>
  <nav class="flex overflow-x-auto whitespace-nowrap py-1 mb-4 no-scrollbar" aria-label="Breadcrumb">
    <ol class="inline-flex items-center text-sm text-gray-500">
      <template v-for="(item, index) in items" :key="index">
        <li class="inline-flex items-center">
          <template v-if="index > 0">
            <span class="mx-2 text-gray-300">/</span>
          </template>

          <Link v-if="item.url" :href="item.url"
            class="inline-flex items-center font-medium hover:text-yellow-600 transition duration-150 ease-in-out">
            {{ item.label }}
          </Link>
          <span v-else class="text-[#0F213A] font-medium" aria-current="page">
            {{ item.label }}
          </span>
        </li>
      </template>
    </ol>
  </nav>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
