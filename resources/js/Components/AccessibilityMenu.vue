<script setup>
import { ref, onMounted, watch } from 'vue';

// State
const isOpen = ref(false);
const fontSize = ref(0); // 0: normal, 1: large, 2: x-large, 3: xx-large
const displayMode = ref('normal'); // normal, high-contrast, dark, grayscale
const highlightLinks = ref(false);
const dyslexicFont = ref(false);
const pauseAnimation = ref(false);
const bigCursor = ref(false);
const largeLineHeight = ref(false);
const largeLetterSpacing = ref(false);

// LocalStorage key
const STORAGE_KEY = 'jdih-accessibility-settings';

// Font size levels
const fontSizeLevels = [
  { label: 'A', value: 0, class: '' },
  { label: 'A+', value: 1, class: 'a11y-font-lg' },
  { label: 'A++', value: 2, class: 'a11y-font-xl' },
  { label: 'A+++', value: 3, class: 'a11y-font-xxl' },
];

// Display modes
const displayModes = [
  { label: 'Normal', value: 'normal', icon: '☀️' },
  { label: 'Kontras Tinggi', value: 'high-contrast', icon: '◐' },
  { label: 'Mode Gelap', value: 'dark', icon: '🌙' },
  { label: 'Grayscale', value: 'grayscale', icon: '⚫' },
];

// Apply all settings to document body
const applySettings = () => {
  const body = document.body;

  // Remove all accessibility classes first
  body.classList.remove(
    'a11y-font-lg', 'a11y-font-xl', 'a11y-font-xxl',
    'a11y-high-contrast', 'a11y-dark', 'a11y-grayscale',
    'a11y-highlight-links', 'a11y-dyslexic-font',
    'a11y-pause-animation', 'a11y-big-cursor',
    'a11y-large-line-height', 'a11y-large-letter-spacing'
  );

  // Apply font size
  const fontClass = fontSizeLevels[fontSize.value]?.class;
  if (fontClass) body.classList.add(fontClass);

  // Apply display mode
  if (displayMode.value === 'high-contrast') body.classList.add('a11y-high-contrast');
  if (displayMode.value === 'dark') body.classList.add('a11y-dark');
  if (displayMode.value === 'grayscale') body.classList.add('a11y-grayscale');

  // Apply other settings
  if (highlightLinks.value) body.classList.add('a11y-highlight-links');
  if (dyslexicFont.value) body.classList.add('a11y-dyslexic-font');
  if (bigCursor.value) body.classList.add('a11y-big-cursor');
  if (bigCursor.value) body.classList.add('a11y-big-cursor');
  if (largeLineHeight.value) body.classList.add('a11y-large-line-height');
  if (largeLetterSpacing.value) body.classList.add('a11y-large-letter-spacing');

  // Dispatch event for components that need to react (e.g., Charts)
  window.dispatchEvent(new Event('theme-change'));
};

// Save settings to localStorage
const saveSettings = () => {
  const settings = {
    fontSize: fontSize.value,
    displayMode: displayMode.value,
    highlightLinks: highlightLinks.value,
    dyslexicFont: dyslexicFont.value,
    pauseAnimation: pauseAnimation.value,
    bigCursor: bigCursor.value,
    largeLineHeight: largeLineHeight.value,
    largeLetterSpacing: largeLetterSpacing.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};

// Load settings from localStorage
const loadSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const settings = JSON.parse(saved);
      fontSize.value = settings.fontSize ?? 0;
      displayMode.value = settings.displayMode ?? 'normal';
      highlightLinks.value = settings.highlightLinks ?? false;
      dyslexicFont.value = settings.dyslexicFont ?? false;
      pauseAnimation.value = settings.pauseAnimation ?? false;
      bigCursor.value = settings.bigCursor ?? false;
      largeLineHeight.value = settings.largeLineHeight ?? false;
      largeLetterSpacing.value = settings.largeLetterSpacing ?? false;
    }
  } catch (e) {
    console.warn('Failed to load accessibility settings:', e);
  }
};

// Reset all settings
const resetAll = () => {
  fontSize.value = 0;
  displayMode.value = 'normal';
  highlightLinks.value = false;
  dyslexicFont.value = false;
  pauseAnimation.value = false;
  bigCursor.value = false;
  largeLineHeight.value = false;
  largeLetterSpacing.value = false;
};

// Toggle menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Close menu when clicking outside
const closeOnOutsideClick = (event) => {
  const menu = document.getElementById('accessibility-menu');
  const trigger = document.getElementById('accessibility-trigger');
  if (menu && trigger && !menu.contains(event.target) && !trigger.contains(event.target)) {
    isOpen.value = false;
  }
};

// Watch all settings and apply + save
watch([fontSize, displayMode, highlightLinks, dyslexicFont, pauseAnimation, bigCursor, largeLineHeight, largeLetterSpacing], () => {
  applySettings();
  saveSettings();
}, { deep: true });

// On mounted
onMounted(() => {
  loadSettings();
  applySettings();
  document.addEventListener('click', closeOnOutsideClick);
});
</script>

<template>
  <!-- Floating Trigger Button -->
  <button id="accessibility-trigger" @click="toggleMenu"
    class="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    :class="{ 'ring-4 ring-yellow-300 ring-opacity-50': isOpen }" aria-label="Buka Menu Aksesibilitas"
    :aria-expanded="isOpen">
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
    </svg>
    <span class="sr-only">Aksesibilitas</span>
  </button>

  <!-- Accessibility Menu Panel -->
  <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100" leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 translate-y-4 scale-95">
    <div v-if="isOpen" id="accessibility-menu"
      class="fixed bottom-24 right-6 z-[9999] w-80 max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100"
      role="dialog" aria-label="Menu Aksesibilitas">
      <!-- Header -->
      <div
        class="sticky top-0 bg-gradient-to-r from-[#0F213A] to-[#1a3a5c] text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
          </svg>
          <h2 class="font-bold text-lg">Aksesibilitas</h2>
        </div>
        <button @click="isOpen = false" class="p-1 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Tutup Menu">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="p-4 space-y-5">
        <!-- Font Size Section -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span class="text-lg">📝</span>
            Ukuran Teks
          </h3>
          <div class="flex gap-2">
            <button v-for="level in fontSizeLevels" :key="level.value" @click="fontSize = level.value"
              class="flex-1 py-2 px-3 rounded-lg font-semibold transition-all duration-200" :class="[
                fontSize === level.value
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]" :style="{ fontSize: `${12 + level.value * 2}px` }">
              {{ level.label }}
            </button>
          </div>
        </div>

        <!-- Display Mode Section -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span class="text-lg">🎨</span>
            Tampilan
          </h3>
          <div class="grid grid-cols-2 gap-2">
            <button v-for="mode in displayModes" :key="mode.value" @click="displayMode = mode.value"
              class="py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
              :class="[
                displayMode === mode.value
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]">
              <span>{{ mode.icon }}</span>
              {{ mode.label }}
            </button>
          </div>
        </div>

        <!-- Other Settings Section -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span class="text-lg">✨</span>
            Pengaturan Lain
          </h3>
          <div class="space-y-2">
            <!-- Highlight Links -->
            <label class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input type="checkbox" v-model="highlightLinks"
                class="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
              <span class="text-sm text-gray-700">🔗 Sorot Link</span>
            </label>

            <!-- Dyslexic Font -->
            <label class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input type="checkbox" v-model="dyslexicFont"
                class="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
              <span class="text-sm text-gray-700">🔤 Font Ramah Disleksia</span>
            </label>

            <!-- Pause Animation -->
            <label class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input type="checkbox" v-model="pauseAnimation"
                class="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
              <span class="text-sm text-gray-700">⏸️ Jeda Animasi</span>
            </label>

            <!-- Big Cursor -->
            <label class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input type="checkbox" v-model="bigCursor"
                class="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
              <span class="text-sm text-gray-700">🖱️ Kursor Besar</span>
            </label>

            <!-- Large Line Height -->
            <label class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input type="checkbox" v-model="largeLineHeight"
                class="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
              <span class="text-sm text-gray-700">↕️ Jarak Baris Besar</span>
            </label>

            <!-- Large Letter Spacing -->
            <label class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input type="checkbox" v-model="largeLetterSpacing"
                class="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500" />
              <span class="text-sm text-gray-700">↔️ Jarak Huruf Besar</span>
            </label>
          </div>
        </div>

        <!-- Reset Button -->
        <button @click="resetAll"
          class="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all duration-200 flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Semua
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Smooth scroll for menu */
#accessibility-menu {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db transparent;
}

#accessibility-menu::-webkit-scrollbar {
  width: 6px;
}

#accessibility-menu::-webkit-scrollbar-track {
  background: transparent;
}

#accessibility-menu::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 3px;
}
</style>
