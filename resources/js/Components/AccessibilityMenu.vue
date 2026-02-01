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

// Watch all settings and apply + save
watch([fontSize, displayMode, highlightLinks, dyslexicFont, pauseAnimation, bigCursor, largeLineHeight, largeLetterSpacing], () => {
  applySettings();
  saveSettings();
}, { deep: true });

// On mounted
onMounted(() => {
  loadSettings();
  applySettings();
});
</script>

<template>
  <!-- Side Trigger Button -->
  <button id="accessibility-trigger" @click="toggleMenu"
    class="fixed top-1/2 right-0 -translate-y-1/2 z-[9990] bg-gradient-to-l from-yellow-400 to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group rounded-l-xl w-10 h-14 hover:w-16 hover:pr-2"
    :class="{ 'translate-x-full opacity-0 pointer-events-none': isOpen }" aria-label="Buka Menu Aksesibilitas"
    :aria-expanded="isOpen">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
    </svg>
    <span class="sr-only">Aksesibilitas</span>
  </button>

  <!-- Backdrop -->
  <Transition enter-active-class="transition-opacity duration-300 ease-linear" enter-from-class="opacity-0"
    enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300 ease-linear"
    leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-[9998]" @click="isOpen = false" aria-hidden="true"></div>
  </Transition>

  <!-- Side Drawer -->
  <Transition enter-active-class="transform transition ease-in-out duration-300"
    enter-from-class="translate-x-full" enter-to-class="translate-x-0"
    leave-active-class="transform transition ease-in-out duration-300" leave-from-class="translate-x-0"
    leave-to-class="translate-x-full">
    <div v-if="isOpen" id="accessibility-menu"
      class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[9999] overflow-y-auto flex flex-col"
      role="dialog" aria-label="Menu Aksesibilitas">
      
      <!-- Header -->
      <div
        class="sticky top-0 bg-gradient-to-r from-[#0F213A] to-[#1a3a5c] text-white p-5 flex items-center justify-between shadow-md shrink-0 z-10">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
          </svg>
          <h2 class="font-bold text-lg">Aksesibilitas</h2>
        </div>
        <button @click="isOpen = false" class="p-1 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Tutup Menu">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Content -->
      <div class="p-5 space-y-6 flex-1 bg-gray-50/50">
        <!-- Font Size Section -->
        <div class="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2 border-b border-gray-100 pb-2">
            <span class="text-lg">📝</span>
            Ukuran Teks
          </h3>
          <div class="flex gap-2">
            <button v-for="level in fontSizeLevels" :key="level.value" @click="fontSize = level.value"
              class="flex-1 py-2 px-1 rounded-lg font-semibold transition-all duration-200 text-center" :class="[
                fontSize === level.value
                  ? 'bg-yellow-500 text-white shadow-md ring-2 ring-yellow-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]" :style="{ fontSize: `${12 + level.value * 2}px` }">
              {{ level.label }}
            </button>
          </div>
        </div>

        <!-- Display Mode Section -->
        <div class="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2 border-b border-gray-100 pb-2">
            <span class="text-lg">🎨</span>
            Tampilan
          </h3>
          <div class="grid grid-cols-2 gap-2">
            <button v-for="mode in displayModes" :key="mode.value" @click="displayMode = mode.value"
              class="py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 justify-center"
              :class="[
                displayMode === mode.value
                  ? 'bg-yellow-500 text-white shadow-md ring-2 ring-yellow-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]">
              <span>{{ mode.icon }}</span>
              {{ mode.label }}
            </button>
          </div>
        </div>

        <!-- Other Settings Section -->
        <div class="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2 border-b border-gray-100 pb-2">
            <span class="text-lg">✨</span>
            Pengaturan Lain
          </h3>
          <div class="space-y-2">
            <!-- Highlight Links -->
            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
              <span class="text-sm text-gray-700 group-hover:text-gray-900">🔗 Sorot Link</span>
              <div class="relative inline-flex items-center cursor-pointer">
                 <input type="checkbox" v-model="highlightLinks" class="sr-only peer">
                 <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </div>
            </label>

            <!-- Dyslexic Font -->
            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
              <span class="text-sm text-gray-700 group-hover:text-gray-900">🔤 Font Disleksia</span>
                <div class="relative inline-flex items-center cursor-pointer">
                 <input type="checkbox" v-model="dyslexicFont" class="sr-only peer">
                 <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </div>
            </label>

            <!-- Pause Animation -->
            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
               <span class="text-sm text-gray-700 group-hover:text-gray-900">⏸️ Jeda Animasi</span>
                <div class="relative inline-flex items-center cursor-pointer">
                 <input type="checkbox" v-model="pauseAnimation" class="sr-only peer">
                 <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </div>
            </label>

            <!-- Big Cursor -->
            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
               <span class="text-sm text-gray-700 group-hover:text-gray-900">🖱️ Kursor Besar</span>
                <div class="relative inline-flex items-center cursor-pointer">
                 <input type="checkbox" v-model="bigCursor" class="sr-only peer">
                 <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </div>
            </label>

            <!-- Large Line Height -->
            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
              <span class="text-sm text-gray-700 group-hover:text-gray-900">↕️ Jarak Baris</span>
                <div class="relative inline-flex items-center cursor-pointer">
                 <input type="checkbox" v-model="largeLineHeight" class="sr-only peer">
                 <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </div>
            </label>

            <!-- Large Letter Spacing -->
            <label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
               <span class="text-sm text-gray-700 group-hover:text-gray-900">↔️ Jarak Huruf</span>
               <div class="relative inline-flex items-center cursor-pointer">
                 <input type="checkbox" v-model="largeLetterSpacing" class="sr-only peer">
                 <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </div>
            </label>
          </div>
        </div>

      </div>

      <!-- Footer Reset Info -->
      <div class="p-4 bg-gray-50 border-t border-gray-200 shrink-0">
         <button @click="resetAll"
          class="w-full py-3 px-4 rounded-xl bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 text-gray-600 font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm">
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
