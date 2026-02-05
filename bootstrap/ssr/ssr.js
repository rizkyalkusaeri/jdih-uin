import { ref, watch, mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString, onMounted, createTextVNode, createBlock, openBlock, Fragment, renderList, withDirectives, vShow, createCommentVNode, resolveComponent, withModifiers, vModelSelect, vModelText, onUnmounted, computed, withKeys, Transition, vModelCheckbox, resolveDynamicComponent, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot, ssrLooseEqual, ssrRenderVNode } from "vue/server-renderer";
import { usePage, Head, Link, useForm, router, createInertiaApp } from "@inertiajs/vue3";
import { route, ZiggyVue } from "ziggy-js";
import axios from "axios";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js";
import { Bar, Pie, Doughnut } from "vue-chartjs";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$o = {
  __name: "Toast",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    const message = ref("");
    const type = ref("success");
    const page = usePage();
    watch(() => page.props.flash, (flash) => {
      if (flash?.success) {
        show(flash.success, "success");
      }
      if (flash?.error || page.props.errors?.message) {
        show(flash?.error || page.props.errors?.message, "error");
      }
    }, { deep: true });
    const show = (msg, t) => {
      message.value = msg;
      type.value = t;
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 3e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (visible.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "fixed top-4 right-4 z-[9999] max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",
          style: { "background-color": "var(--color-bg-card)" }
        }, _attrs))}><div class="p-4"><div class="flex items-start"><div class="flex-shrink-0">`);
        if (type.value === "success") {
          _push(`<svg class="h-6 w-6" style="${ssrRenderStyle({ "color": "var(--color-success)" })}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<svg class="h-6 w-6" style="${ssrRenderStyle({ "color": "var(--color-error)" })}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        }
        _push(`</div><div class="ml-3 w-0 flex-1 pt-0.5"><p class="text-sm font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}">${ssrInterpolate(type.value === "success" ? "Berhasil!" : "Error!")}</p><p class="mt-1 text-sm" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}">${ssrInterpolate(message.value)}</p></div><div class="ml-4 flex-shrink-0 flex"><button class="rounded-md inline-flex hover:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]" style="${ssrRenderStyle({ "background-color": "transparent", "color": "var(--color-text-secondary)" })}"><span class="sr-only">Close</span><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toast.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "SeoHead",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "JDIH UIN Sunan Gunung Djati"
    },
    description: {
      type: String,
      default: "Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung"
    },
    keywords: {
      type: String,
      default: "JDIH, UIN SGD, Hukum, Peraturan, Bandung, Sunan Gunung Djati"
    },
    image: {
      type: String,
      default: "/images/jdih.png"
    },
    type: {
      type: String,
      default: "website"
    },
    author: {
      type: String,
      default: "UIN Sunan Gunung Djati Bandung"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.title)}</title><meta name="description"${ssrRenderAttr("content", __props.description)}${_scopeId}><meta name="keywords"${ssrRenderAttr("content", __props.keywords)}${_scopeId}><meta name="author"${ssrRenderAttr("content", __props.author)}${_scopeId}><meta property="og:title"${ssrRenderAttr("content", __props.title)}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.description)}${_scopeId}><meta property="og:image"${ssrRenderAttr("content", __props.image)}${_scopeId}><meta property="og:type"${ssrRenderAttr("content", __props.type)}${_scopeId}><meta property="og:site_name" content="JDIH UIN SGD"${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", __props.title)}${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", __props.description)}${_scopeId}><meta name="twitter:image"${ssrRenderAttr("content", __props.image)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.title), 1),
              createVNode("meta", {
                name: "description",
                content: __props.description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "keywords",
                content: __props.keywords
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "author",
                content: __props.author
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:title",
                content: __props.title
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: __props.description
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: __props.image
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:type",
                content: __props.type
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:site_name",
                content: "JDIH UIN SGD"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: __props.title
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:description",
                content: __props.description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:image",
                content: __props.image
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SeoHead.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const STORAGE_KEY = "jdih-accessibility-settings";
const _sfc_main$m = {
  __name: "AccessibilityMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const fontSize = ref(0);
    const displayMode = ref("normal");
    const highlightLinks = ref(false);
    const dyslexicFont = ref(false);
    const pauseAnimation = ref(false);
    const bigCursor = ref(false);
    const largeLineHeight = ref(false);
    const largeLetterSpacing = ref(false);
    const fontSizeLevels = [
      { label: "A", value: 0, class: "" },
      { label: "A+", value: 1, class: "a11y-font-lg" },
      { label: "A++", value: 2, class: "a11y-font-xl" },
      { label: "A+++", value: 3, class: "a11y-font-xxl" }
    ];
    const displayModes = [
      { label: "Normal", value: "normal", icon: "☀️" },
      { label: "Kontras Tinggi", value: "high-contrast", icon: "◐" },
      { label: "Mode Gelap", value: "dark", icon: "🌙" },
      { label: "Grayscale", value: "grayscale", icon: "⚫" }
    ];
    const applySettings = () => {
      const body = document.body;
      body.classList.remove(
        "a11y-font-lg",
        "a11y-font-xl",
        "a11y-font-xxl",
        "a11y-high-contrast",
        "a11y-dark",
        "a11y-grayscale",
        "a11y-highlight-links",
        "a11y-dyslexic-font",
        "a11y-pause-animation",
        "a11y-big-cursor",
        "a11y-large-line-height",
        "a11y-large-letter-spacing"
      );
      const fontClass = fontSizeLevels[fontSize.value]?.class;
      if (fontClass) body.classList.add(fontClass);
      if (displayMode.value === "high-contrast") body.classList.add("a11y-high-contrast");
      if (displayMode.value === "dark") body.classList.add("a11y-dark");
      if (displayMode.value === "grayscale") body.classList.add("a11y-grayscale");
      if (highlightLinks.value) body.classList.add("a11y-highlight-links");
      if (dyslexicFont.value) body.classList.add("a11y-dyslexic-font");
      if (bigCursor.value) body.classList.add("a11y-big-cursor");
      if (bigCursor.value) body.classList.add("a11y-big-cursor");
      if (largeLineHeight.value) body.classList.add("a11y-large-line-height");
      if (largeLetterSpacing.value) body.classList.add("a11y-large-letter-spacing");
      window.dispatchEvent(new Event("theme-change"));
    };
    const saveSettings = () => {
      const settings = {
        fontSize: fontSize.value,
        displayMode: displayMode.value,
        highlightLinks: highlightLinks.value,
        dyslexicFont: dyslexicFont.value,
        pauseAnimation: pauseAnimation.value,
        bigCursor: bigCursor.value,
        largeLineHeight: largeLineHeight.value,
        largeLetterSpacing: largeLetterSpacing.value
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    };
    const loadSettings = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const settings = JSON.parse(saved);
          fontSize.value = settings.fontSize ?? 0;
          displayMode.value = settings.displayMode ?? "normal";
          highlightLinks.value = settings.highlightLinks ?? false;
          dyslexicFont.value = settings.dyslexicFont ?? false;
          pauseAnimation.value = settings.pauseAnimation ?? false;
          bigCursor.value = settings.bigCursor ?? false;
          largeLineHeight.value = settings.largeLineHeight ?? false;
          largeLetterSpacing.value = settings.largeLetterSpacing ?? false;
        }
      } catch (e) {
        console.warn("Failed to load accessibility settings:", e);
      }
    };
    watch([fontSize, displayMode, highlightLinks, dyslexicFont, pauseAnimation, bigCursor, largeLineHeight, largeLetterSpacing], () => {
      applySettings();
      saveSettings();
    }, { deep: true });
    onMounted(() => {
      loadSettings();
      applySettings();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><button id="accessibility-trigger" class="${ssrRenderClass([{ "translate-x-full opacity-0 pointer-events-none": isOpen.value }, "fixed top-1/2 right-0 -translate-y-1/2 z-[9990] bg-gradient-to-l from-yellow-400 to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group rounded-l-xl w-10 h-14 hover:w-16 hover:pr-2"])}" aria-label="Buka Menu Aksesibilitas"${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-a868f913><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-a868f913><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" data-v-a868f913></path></svg><span class="sr-only" data-v-a868f913>Aksesibilitas</span></button>`);
      if (isOpen.value) {
        _push(`<div class="fixed inset-0 bg-black/50 z-[9998]" aria-hidden="true" data-v-a868f913></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isOpen.value) {
        _push(`<div id="accessibility-menu" class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[9999] overflow-y-auto flex flex-col" role="dialog" aria-label="Menu Aksesibilitas" data-v-a868f913><div class="sticky top-0 bg-gradient-to-r from-[#0F213A] to-[#1a3a5c] text-white p-5 flex items-center justify-between shadow-md shrink-0 z-10" data-v-a868f913><div class="flex items-center gap-3" data-v-a868f913><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-v-a868f913><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" data-v-a868f913></path></svg><h2 class="font-bold text-lg" data-v-a868f913>Aksesibilitas</h2></div><button class="p-1 hover:bg-white/20 rounded-lg transition-colors" aria-label="Tutup Menu" data-v-a868f913><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a868f913><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-a868f913></path></svg></button></div><div class="p-5 space-y-6 flex-1 bg-gray-50/50" data-v-a868f913><div class="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100" data-v-a868f913><h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2 border-b border-gray-100 pb-2" data-v-a868f913><span class="text-lg" data-v-a868f913>📝</span> Ukuran Teks </h3><div class="flex gap-2" data-v-a868f913><!--[-->`);
        ssrRenderList(fontSizeLevels, (level) => {
          _push(`<button class="${ssrRenderClass([[
            fontSize.value === level.value ? "bg-yellow-500 text-white shadow-md ring-2 ring-yellow-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          ], "flex-1 py-2 px-1 rounded-lg font-semibold transition-all duration-200 text-center"])}" style="${ssrRenderStyle({ fontSize: `${12 + level.value * 2}px` })}" data-v-a868f913>${ssrInterpolate(level.label)}</button>`);
        });
        _push(`<!--]--></div></div><div class="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100" data-v-a868f913><h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2 border-b border-gray-100 pb-2" data-v-a868f913><span class="text-lg" data-v-a868f913>🎨</span> Tampilan </h3><div class="grid grid-cols-2 gap-2" data-v-a868f913><!--[-->`);
        ssrRenderList(displayModes, (mode) => {
          _push(`<button class="${ssrRenderClass([[
            displayMode.value === mode.value ? "bg-yellow-500 text-white shadow-md ring-2 ring-yellow-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          ], "py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 justify-center"])}" data-v-a868f913><span data-v-a868f913>${ssrInterpolate(mode.icon)}</span> ${ssrInterpolate(mode.label)}</button>`);
        });
        _push(`<!--]--></div></div><div class="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100" data-v-a868f913><h3 class="text-sm font-semibold text-gray-700 flex items-center gap-2 border-b border-gray-100 pb-2" data-v-a868f913><span class="text-lg" data-v-a868f913>✨</span> Pengaturan Lain </h3><div class="space-y-2" data-v-a868f913><label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group" data-v-a868f913><span class="text-sm text-gray-700 group-hover:text-gray-900" data-v-a868f913>🔗 Sorot Link</span><div class="relative inline-flex items-center cursor-pointer" data-v-a868f913><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(highlightLinks.value) ? ssrLooseContain(highlightLinks.value, null) : highlightLinks.value) ? " checked" : ""} class="sr-only peer" data-v-a868f913><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500" data-v-a868f913></div></div></label><label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group" data-v-a868f913><span class="text-sm text-gray-700 group-hover:text-gray-900" data-v-a868f913>🔤 Font Disleksia</span><div class="relative inline-flex items-center cursor-pointer" data-v-a868f913><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(dyslexicFont.value) ? ssrLooseContain(dyslexicFont.value, null) : dyslexicFont.value) ? " checked" : ""} class="sr-only peer" data-v-a868f913><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500" data-v-a868f913></div></div></label><label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group" data-v-a868f913><span class="text-sm text-gray-700 group-hover:text-gray-900" data-v-a868f913>⏸️ Jeda Animasi</span><div class="relative inline-flex items-center cursor-pointer" data-v-a868f913><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(pauseAnimation.value) ? ssrLooseContain(pauseAnimation.value, null) : pauseAnimation.value) ? " checked" : ""} class="sr-only peer" data-v-a868f913><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500" data-v-a868f913></div></div></label><label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group" data-v-a868f913><span class="text-sm text-gray-700 group-hover:text-gray-900" data-v-a868f913>🖱️ Kursor Besar</span><div class="relative inline-flex items-center cursor-pointer" data-v-a868f913><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(bigCursor.value) ? ssrLooseContain(bigCursor.value, null) : bigCursor.value) ? " checked" : ""} class="sr-only peer" data-v-a868f913><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500" data-v-a868f913></div></div></label><label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group" data-v-a868f913><span class="text-sm text-gray-700 group-hover:text-gray-900" data-v-a868f913>↕️ Jarak Baris</span><div class="relative inline-flex items-center cursor-pointer" data-v-a868f913><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(largeLineHeight.value) ? ssrLooseContain(largeLineHeight.value, null) : largeLineHeight.value) ? " checked" : ""} class="sr-only peer" data-v-a868f913><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500" data-v-a868f913></div></div></label><label class="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group" data-v-a868f913><span class="text-sm text-gray-700 group-hover:text-gray-900" data-v-a868f913>↔️ Jarak Huruf</span><div class="relative inline-flex items-center cursor-pointer" data-v-a868f913><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(largeLetterSpacing.value) ? ssrLooseContain(largeLetterSpacing.value, null) : largeLetterSpacing.value) ? " checked" : ""} class="sr-only peer" data-v-a868f913><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500" data-v-a868f913></div></div></label></div></div></div><div class="p-4 bg-gray-50 border-t border-gray-200 shrink-0" data-v-a868f913><button class="w-full py-3 px-4 rounded-xl bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 text-gray-600 font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm" data-v-a868f913><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a868f913><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-v-a868f913></path></svg> Reset Semua </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AccessibilityMenu.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const AccessibilityMenu = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-a868f913"]]);
const _sfc_main$l = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      _push(`<div class="min-h-screen font-sans" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-primary)" })}">`);
      _push(ssrRenderComponent(_sfc_main$o, null, null, _parent));
      _push(ssrRenderComponent(AccessibilityMenu, null, null, _parent));
      _push(`<header class="shadow-sm sticky top-0 z-50" style="${ssrRenderStyle({ "background-color": "var(--color-bg-primary)", "border-bottom": "1px solid var(--color-border-light)" })}"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-20 items-center"><div class="shrink-0 flex items-center gap-2 md:gap-3"><a href="https://jdihn.go.id/" target="_blank" rel="noopener noreferrer"><img src="/images/logo-jdihn.png" alt="Jaringan Dokumentasi dan Informasi Hukum Nasional" class="h-8 md:h-12 w-auto"></a>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/jdih.png" alt="Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati" class="h-8 md:h-12 w-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/jdih.png",
                alt: "Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati",
                class: "h-8 md:h-12 w-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block"${_scopeId}><h1 class="text-sm md:text-xl font-bold leading-tight" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}>JDIH UIN SGD</h1><p class="text-[10px] md:text-xs leading-tight" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}> Jaringan Dokumentasi &amp; Informasi Hukum</p></div>`);
          } else {
            return [
              createVNode("div", { class: "block" }, [
                createVNode("h1", {
                  class: "text-sm md:text-xl font-bold leading-tight",
                  style: { "color": "var(--color-text-brand)" }
                }, "JDIH UIN SGD"),
                createVNode("p", {
                  class: "text-[10px] md:text-xs leading-tight",
                  style: { "color": "var(--color-text-muted)" }
                }, " Jaringan Dokumentasi & Informasi Hukum")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex space-x-8 items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: [_ctx.route().current("home") ? "text-yellow-500 font-bold" : "text-gray-600 font-semibold hover:text-yellow-500", "transition"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beranda `);
          } else {
            return [
              createTextVNode(" Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative group"><button class="${ssrRenderClass([[_ctx.route().current("produk-hukum.*") || _ctx.route().current("submission.*") ? "text-yellow-500 font-bold" : "text-gray-600 font-semibold hover:text-yellow-500"], "flex items-center gap-1 transition focus:outline-none"])}"> Produk Hukum <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="absolute left-0 mt-2 w-56 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border": "1px solid var(--color-border-light)" })}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/produk-hukum",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 border-b border-gray-50 mb-1", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("produk-hukum.index") && !_ctx.route().params.category }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Semua Produk Hukum `);
          } else {
            return [
              createTextVNode(" Semua Produk Hukum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(page).props.categories) {
        _push(`<!--[-->`);
        ssrRenderList(unref(page).props.categories, (category) => {
          _push(ssrRenderComponent(unref(Link), {
            key: category.id,
            href: `/produk-hukum?category=${encodeURIComponent(category.name)}`,
            class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().params.category === category.name }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(category.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(category.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="border-t border-gray-100 my-1"></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/pengajuan",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("submission.create") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Buat Pengajuan `);
          } else {
            return [
              createTextVNode(" Buat Pengajuan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/pengajuan/tracking",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("submission.track") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lacak Pengajuan `);
          } else {
            return [
              createTextVNode(" Lacak Pengajuan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative group"><button class="${ssrRenderClass([[_ctx.route().current("information.*") || _ctx.route().current("infographics.*") || _ctx.route().current("glossary.*") || _ctx.route().current("legal-dictionary.*") ? "text-yellow-500 font-bold" : "text-gray-600 font-semibold hover:text-yellow-500"], "flex items-center gap-1 transition focus:outline-none"])}"> Informasi Hukum <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="absolute left-0 mt-2 w-56 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border": "1px solid var(--color-border-light)" })}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/informasi-hukum",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("information.*") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Berita, Event &amp; Dokumentasi `);
          } else {
            return [
              createTextVNode(" Berita, Event & Dokumentasi ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/infografis",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("infographics.*") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Info Grafis `);
          } else {
            return [
              createTextVNode(" Info Grafis ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/kamus-hukum",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("legal-dictionary.*") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kamus Hukum `);
          } else {
            return [
              createTextVNode(" Kamus Hukum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/glosarium",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("glossary.*") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Glosarium `);
          } else {
            return [
              createTextVNode(" Glosarium ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/statistik",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("statistics.*") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Statistik &amp; Data `);
          } else {
            return [
              createTextVNode(" Statistik & Data ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://opac.uinsgd.ac.id/?search=Hukum" target="_blank" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"> Koleksi Buku </a></div></div><div class="relative group"><button class="${ssrRenderClass([[_ctx.route().current("about.*") ? "text-yellow-500 font-bold" : "text-gray-600 font-semibold hover:text-yellow-500"], "flex items-center gap-1 transition focus:outline-none"])}"> Tentang <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="absolute left-0 mt-2 w-48 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border": "1px solid var(--color-border-light)" })}"><!--[-->`);
      ssrRenderList(_ctx.$page.props.pages, (pageItem) => {
        _push(ssrRenderComponent(unref(Link), {
          href: `/tentang/${pageItem.slug}`,
          class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("about.show", { slug: pageItem.slug }) }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(pageItem.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(pageItem.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/faq",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("about.faq") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQ `);
          } else {
            return [
              createTextVNode(" FAQ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/kontak",
        class: [_ctx.route().current("contact.index") ? "text-yellow-500 font-bold" : "text-gray-600 font-semibold hover:text-yellow-500", "transition"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontak `);
          } else {
            return [
              createTextVNode(" Kontak ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="-me-2 flex items-center md:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ block: showingNavigationDropdown.value, hidden: !showingNavigationDropdown.value }, "md:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: [_ctx.route().current("home") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-3 pe-4 py-2 border-l-4 text-start text-base font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beranda `);
          } else {
            return [
              createTextVNode(" Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-1"><div class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600"> Produk Hukum </div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/produk-hukum",
        class: [_ctx.route().current("produk-hukum.index") && !_ctx.route().params.category ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Semua Produk Hukum `);
          } else {
            return [
              createTextVNode(" Semua Produk Hukum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(page).props.categories) {
        _push(`<!--[-->`);
        ssrRenderList(unref(page).props.categories, (category) => {
          _push(ssrRenderComponent(unref(Link), {
            key: category.id,
            href: `/produk-hukum?category=${encodeURIComponent(category.name)}`,
            class: [_ctx.route().params.category === category.name ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(category.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(category.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Link), {
        href: "/pengajuan",
        class: [_ctx.route().current("submission.create") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Buat Pengajuan `);
          } else {
            return [
              createTextVNode(" Buat Pengajuan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/pengajuan/tracking",
        class: [_ctx.route().current("submission.track") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lacak Pengajuan `);
          } else {
            return [
              createTextVNode(" Lacak Pengajuan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-1"><div class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600"> Berita, Event &amp; Dokumentasi </div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/informasi-hukum",
        class: [_ctx.route().current("information.*") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Informasi Hukum `);
          } else {
            return [
              createTextVNode(" Informasi Hukum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/infografis",
        class: [_ctx.route().current("infographics.*") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Info Grafis `);
          } else {
            return [
              createTextVNode(" Info Grafis ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/statistik",
        class: [_ctx.route().current("statistics.*") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Statistik &amp; Data `);
          } else {
            return [
              createTextVNode(" Statistik & Data ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-1"><div class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600"> Tentang </div><!--[-->`);
      ssrRenderList(_ctx.$page.props.pages, (pageItem) => {
        _push(ssrRenderComponent(unref(Link), {
          href: `/tentang/${pageItem.slug}`,
          class: [_ctx.route().current("about.show", { slug: pageItem.slug }) ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(pageItem.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(pageItem.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/faq",
        class: [_ctx.route().current("about.faq") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQ `);
          } else {
            return [
              createTextVNode(" FAQ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/kontak",
        class: [_ctx.route().current("contact.index") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontak `);
          } else {
            return [
              createTextVNode(" Kontak ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="pt-16 pb-8" style="${ssrRenderStyle({ "background-color": "var(--color-primary)", "color": "var(--color-text-inverse)" })}"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"><div class="space-y-4"><div class="flex items-center gap-3"><img src="/images/jdih.png" alt="Logo" class="h-10 w-auto bg-white rounded-full p-1"><div><h3 class="text-lg font-bold">JDIH UIN SGD</h3></div></div><p class="text-gray-400 text-sm leading-relaxed"> Jaringan Dokumentasi dan Informasi Hukum Universitas Islam Negeri Sunan Gunung Djati Bandung. Wadah pendayaggunaan bersama atas dokumen hukum secara tertib, terpadu, dan berkesinambungan. </p></div><div><h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Tautan Cepat</h4><ul class="space-y-3 text-sm text-gray-400"><!--[-->`);
      ssrRenderList(_ctx.$page.props.pages, (pageItem) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: `/tentang/${pageItem.slug}`,
          class: "hover:text-yellow-400 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(pageItem.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(pageItem.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/faq",
        class: "hover:text-yellow-400 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQ`);
          } else {
            return [
              createTextVNode("FAQ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/kontak",
        class: "hover:text-yellow-400 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kontak Kami`);
          } else {
            return [
              createTextVNode("Kontak Kami")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Kontak Kami</h4><ul class="space-y-4 text-sm text-gray-400"><li class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>${_ctx.$page.props.generals.alamat?.description ?? `Jl. A.H. Nasution No. 105,
                                    Cipadung,
                                    Cibiru, Kota Bandung, Jawa Barat 40614` ?? ""}</span></li><li class="flex items-center gap-3"><svg class="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span>${_ctx.$page.props.generals.telepon?.description ?? "022-7500000" ?? ""}</span></li><li class="flex items-center gap-3"><svg class="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span>${_ctx.$page.props.generals.email?.description ?? "email@jdih-uin.com" ?? ""}</span></li></ul></div></div><div class="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} JDIH UIN Sunan Gunung Djati Bandung. All Rights Reserved. </p><div class="flex space-x-6 mt-4 md:mt-0"><a href="/tentang/kebijakan-privasi" class="hover:text-white transition">Kebijakan Privasi</a><a href="/tentang/prasyarat" class="hover:text-white transition">Syarat &amp; Ketentuan</a></div></div></div></footer></div><!--]-->`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "HelpWidget",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-linear-to-br from-[#0F213A] to-[#1a3b66] p-8 rounded-2xl shadow-lg text-center text-white relative overflow-hidden group" }, _attrs))}><div class="relative z-10"><h3 class="font-bold text-xl mb-2 text-white">Butuh Bantuan?</h3><p class="text-sm mb-6 text-blue-100"> Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum. </p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: unref(route)("contact.index"),
        class: "inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full shadow-md",
        style: { "color": "var(--color-text-primary)" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kontak Kami `);
          } else {
            return [
              createTextVNode(" Kontak Kami ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HelpWidget.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "FAQ",
  __ssrInlineRender: true,
  props: {
    links: Array,
    faqs: Array
  },
  setup(__props) {
    const props = __props;
    const localFaqs = ref(props.faqs.map((faq, index) => ({
      ...faq,
      isOpen: index === 0
    })));
    const toggleFaq = (index) => {
      localFaqs.value[index].isOpen = !localFaqs.value[index].isOpen;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "FAQ - JDIH UIN SGD",
        description: "Pertanyaan yang sering diajukan mengenai layanan Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-3f1f590b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-3f1f590b${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}" data-v-3f1f590b${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}" data-v-3f1f590b${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}" data-v-3f1f590b${_scopeId}>Tentang</span><span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}" data-v-3f1f590b${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-3f1f590b${_scopeId}>FAQ</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}" data-v-3f1f590b${_scopeId}>Frequently Asked Questions</h1></div></div><div class="py-12" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}" data-v-3f1f590b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-3f1f590b${_scopeId}><div class="flex flex-col lg:flex-row gap-8" data-v-3f1f590b${_scopeId}><div class="lg:w-2/3 space-y-8" data-v-3f1f590b${_scopeId}><div class="space-y-4" data-v-3f1f590b${_scopeId}><!--[-->`);
            ssrRenderList(localFaqs.value, (faq, index) => {
              _push2(`<div class="${ssrRenderClass([{ "shadow-md": faq.isOpen }, "rounded-xl shadow-sm border overflow-hidden transition-all duration-300"])}" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-3f1f590b${_scopeId}><button class="w-full flex items-center justify-between p-6 text-left focus:outline-none" data-v-3f1f590b${_scopeId}><span class="font-bold text-lg pr-8" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-3f1f590b${_scopeId}>${ssrInterpolate(faq.question)}</span><div class="${ssrRenderClass([{ "text-yellow-600": faq.isOpen }, "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"])}" style="${ssrRenderStyle(faq.isOpen ? "background-color: var(--color-bg-secondary);" : "background-color: var(--color-bg-secondary);")}" data-v-3f1f590b${_scopeId}><svg class="${ssrRenderClass([{ "rotate-180": faq.isOpen }, "w-5 h-5 transition-transform duration-300"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-3f1f590b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-3f1f590b${_scopeId}></path></svg></div></button><div class="px-6 pb-6 leading-relaxed border-t pt-4 animate-fadeIn" style="${ssrRenderStyle([
                { "color": "var(--color-text-secondary)", "border-color": "var(--color-border-light)" },
                faq.isOpen ? null : { display: "none" }
              ])}" data-v-3f1f590b${_scopeId}>${faq.answer ?? ""}</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="lg:w-1/3 space-y-8" data-v-3f1f590b${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-3f1f590b${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}" data-v-3f1f590b${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-3f1f590b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" data-v-3f1f590b${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3" data-v-3f1f590b${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group" data-v-3f1f590b${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" data-v-3f1f590b${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)} data-v-3f1f590b${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-3f1f590b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" data-v-3f1f590b${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" data-v-3f1f590b${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-3f1f590b${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-v-3f1f590b${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", { style: { "color": "var(--color-text-description)" } }, "Tentang"),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "FAQ")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-text-brand)" }
                  }, "Frequently Asked Questions")
                ])
              ]),
              createVNode("div", {
                class: "py-12",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(localFaqs.value, (faq, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: ["rounded-xl shadow-sm border overflow-hidden transition-all duration-300", { "shadow-md": faq.isOpen }],
                            style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                          }, [
                            createVNode("button", {
                              onClick: ($event) => toggleFaq(index),
                              class: "w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            }, [
                              createVNode("span", {
                                class: "font-bold text-lg pr-8",
                                style: { "color": "var(--color-text-primary)" }
                              }, toDisplayString(faq.question), 1),
                              createVNode("div", {
                                class: ["w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", { "text-yellow-600": faq.isOpen }],
                                style: faq.isOpen ? "background-color: var(--color-bg-secondary);" : "background-color: var(--color-bg-secondary);"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: ["w-5 h-5 transition-transform duration-300", { "rotate-180": faq.isOpen }],
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M19 9l-7 7-7-7"
                                  })
                                ], 2))
                              ], 6)
                            ], 8, ["onClick"]),
                            withDirectives(createVNode("div", {
                              class: "px-6 pb-6 leading-relaxed border-t pt-4 animate-fadeIn",
                              style: { "color": "var(--color-text-secondary)", "border-color": "var(--color-border-light)" },
                              innerHTML: faq.answer
                            }, null, 8, ["innerHTML"]), [
                              [vShow, faq.isOpen]
                            ])
                          ], 2);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode(_sfc_main$k),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-xl shadow-sm border p-6",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold mb-4 flex items-center gap-2",
                          style: { "color": "var(--color-text-brand)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-blue-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            })
                          ])),
                          createTextVNode(" Tautan Terkait ")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link) => {
                            return openBlock(), createBlock("a", {
                              key: link.id,
                              href: link.url,
                              target: "_blank",
                              class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                            }, [
                              createVNode("div", { class: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" }, [
                                link.logo_path ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: unref(route)("links.logo", link.id),
                                  class: "w-full h-full object-cover",
                                  alt: link.title
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-4 h-4 text-gray-400 group-hover:text-blue-500",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  })
                                ]))
                              ]),
                              createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" }, toDisplayString(link.title), 1),
                              (openBlock(), createBlock("svg", {
                                class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                              ]))
                            ], 8, ["href"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/FAQ.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const FAQ = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-3f1f590b"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FAQ
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    links: Array,
    general: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Tentang JDIH - JDIH UIN SGD",
        description: "Tentang Jaringan Dokumentasi dan Informasi Hukum Universitas Islam Negeri Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Tentang JDIH</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}>Tentang JDIH UIN SGD</h1></div></div><div class="py-12" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}>`);
            if (__props.general) {
              _push2(`<div class="rounded-2xl shadow-sm border p-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="prose prose-yellow max-w-none" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${__props.general.description ?? ""}</div></div>`);
            } else {
              _push2(`<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"${_scopeId}><div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Belum Ada Data</h3><p class="text-gray-500 mt-2"${_scopeId}>Data profil belum ditambahkan.</p></div>`);
            }
            _push2(`</div><div class="lg:w-1/3 space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden"${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", _ctx.route("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)}${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight"${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Tentang JDIH")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-text-brand)" }
                  }, "Tentang JDIH UIN SGD")
                ])
              ]),
              createVNode("div", {
                class: "py-12",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      __props.general ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-2xl shadow-sm border p-8",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("div", {
                          class: "prose prose-yellow max-w-none",
                          style: { "color": "var(--color-text-primary)" },
                          innerHTML: __props.general.description
                        }, null, 8, ["innerHTML"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
                      }, [
                        createVNode("div", { class: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Belum Ada Data"),
                        createVNode("p", { class: "text-gray-500 mt-2" }, "Data profil belum ditambahkan.")
                      ]))
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode(_sfc_main$k),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-xl shadow-sm border p-6",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold mb-4 flex items-center gap-2",
                          style: { "color": "var(--color-text-brand)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-blue-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            })
                          ])),
                          createTextVNode(" Tautan Terkait ")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link) => {
                            return openBlock(), createBlock("a", {
                              key: link.id,
                              href: link.url,
                              target: "_blank",
                              class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                            }, [
                              createVNode("div", { class: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" }, [
                                link.logo_path ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: _ctx.route("links.logo", link.id),
                                  class: "w-full h-full object-cover",
                                  alt: link.title
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-4 h-4 text-gray-400 group-hover:text-blue-500",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  })
                                ]))
                              ]),
                              createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" }, toDisplayString(link.title), 1),
                              (openBlock(), createBlock("svg", {
                                class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                              ]))
                            ], 8, ["href"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Index.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  __name: "Prasyarat",
  __ssrInlineRender: true,
  props: {
    links: Array,
    general: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Prasyarat & Syarat Penggunaan - JDIH UIN SGD",
        description: "Syarat dan ketentuan penggunaan layanan Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}"${_scopeId}>Tentang</span><span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Prasyarat</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}>Prasyarat &amp; Syarat Penggunaan</h1></div></div><div class="py-12" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}>`);
            if (__props.general) {
              _push2(`<div class="rounded-2xl shadow-sm border p-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="prose prose-yellow max-w-none" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${__props.general.description ?? ""}</div></div>`);
            } else {
              _push2(`<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"${_scopeId}><div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Belum Ada Data</h3><p class="text-gray-500 mt-2"${_scopeId}>Data prasyarat belum ditambahkan.</p></div>`);
            }
            _push2(`</div><div class="lg:w-1/3 space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden"${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)}${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight"${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", { style: { "color": "var(--color-text-description)" } }, "Tentang"),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Prasyarat")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-text-brand)" }
                  }, "Prasyarat & Syarat Penggunaan")
                ])
              ]),
              createVNode("div", {
                class: "py-12",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      __props.general ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-2xl shadow-sm border p-8",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("div", {
                          class: "prose prose-yellow max-w-none",
                          style: { "color": "var(--color-text-primary)" },
                          innerHTML: __props.general.description
                        }, null, 8, ["innerHTML"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
                      }, [
                        createVNode("div", { class: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Belum Ada Data"),
                        createVNode("p", { class: "text-gray-500 mt-2" }, "Data prasyarat belum ditambahkan.")
                      ]))
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode(_sfc_main$k),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-xl shadow-sm border p-6",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold mb-4 flex items-center gap-2",
                          style: { "color": "var(--color-text-brand)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-blue-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            })
                          ])),
                          createTextVNode(" Tautan Terkait ")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link) => {
                            return openBlock(), createBlock("a", {
                              key: link.id,
                              href: link.url,
                              target: "_blank",
                              class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                            }, [
                              createVNode("div", { class: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" }, [
                                link.logo_path ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: unref(route)("links.logo", link.id),
                                  class: "w-full h-full object-cover",
                                  alt: link.title
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-4 h-4 text-gray-400 group-hover:text-blue-500",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  })
                                ]))
                              ]),
                              createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" }, toDisplayString(link.title), 1),
                              (openBlock(), createBlock("svg", {
                                class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                              ]))
                            ], 8, ["href"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Prasyarat.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "Privacy",
  __ssrInlineRender: true,
  props: {
    links: Array,
    general: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Kebijakan Privasi - JDIH UIN SGD",
        description: "Kebijakan Privasi Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}"${_scopeId}>Tentang</span><span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Kebijakan Privasi</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}>Kebijakan Privasi</h1></div></div><div class="py-12" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}>`);
            if (__props.general) {
              _push2(`<div class="rounded-2xl shadow-sm border p-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="prose prose-yellow max-w-none" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${__props.general.description ?? ""}</div></div>`);
            } else {
              _push2(`<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"${_scopeId}><div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Belum Ada Data</h3><p class="text-gray-500 mt-2"${_scopeId}>Data kebijakan privasi belum ditambahkan.</p></div>`);
            }
            _push2(`</div><div class="lg:w-1/3 space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden"${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)}${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight"${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", { style: { "color": "var(--color-text-description)" } }, "Tentang"),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Kebijakan Privasi")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-text-brand)" }
                  }, "Kebijakan Privasi")
                ])
              ]),
              createVNode("div", {
                class: "py-12",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      __props.general ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-2xl shadow-sm border p-8",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("div", {
                          class: "prose prose-yellow max-w-none",
                          style: { "color": "var(--color-text-primary)" },
                          innerHTML: __props.general.description
                        }, null, 8, ["innerHTML"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
                      }, [
                        createVNode("div", { class: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Belum Ada Data"),
                        createVNode("p", { class: "text-gray-500 mt-2" }, "Data kebijakan privasi belum ditambahkan.")
                      ]))
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode(_sfc_main$k),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-xl shadow-sm border p-6",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold mb-4 flex items-center gap-2",
                          style: { "color": "var(--color-text-brand)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-blue-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            })
                          ])),
                          createTextVNode(" Tautan Terkait ")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link) => {
                            return openBlock(), createBlock("a", {
                              key: link.id,
                              href: link.url,
                              target: "_blank",
                              class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                            }, [
                              createVNode("div", { class: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" }, [
                                link.logo_path ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: unref(route)("links.logo", link.id),
                                  class: "w-full h-full object-cover",
                                  alt: link.title
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-4 h-4 text-gray-400 group-hover:text-blue-500",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  })
                                ]))
                              ]),
                              createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" }, toDisplayString(link.title), 1),
                              (openBlock(), createBlock("svg", {
                                class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                              ]))
                            ], 8, ["href"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Privacy.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    page: Object,
    links: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: __props.page.title + " - JDIH UIN SGD",
        description: __props.page.description.replace(/<[^>]*>?/gm, "").substring(0, 160)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}"${_scopeId}>Tentang</span><span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(__props.page.title)}</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}>${ssrInterpolate(__props.page.title)}</h1></div></div><div class="py-12" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}><div class="rounded-2xl shadow-sm border p-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="prose prose-yellow max-w-none" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${__props.page.description ?? ""}</div></div></div><div class="lg:w-1/3 space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden"${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)}${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight"${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", { style: { "color": "var(--color-text-description)" } }, "Tentang"),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, toDisplayString(__props.page.title), 1)
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-text-brand)" }
                  }, toDisplayString(__props.page.title), 1)
                ])
              ]),
              createVNode("div", {
                class: "py-12",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      createVNode("div", {
                        class: "rounded-2xl shadow-sm border p-8",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("div", {
                          class: "prose prose-yellow max-w-none",
                          style: { "color": "var(--color-text-primary)" },
                          innerHTML: __props.page.description
                        }, null, 8, ["innerHTML"])
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode(_sfc_main$k),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-xl shadow-sm border p-6",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold mb-4 flex items-center gap-2",
                          style: { "color": "var(--color-text-brand)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-blue-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            })
                          ])),
                          createTextVNode(" Tautan Terkait ")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link) => {
                            return openBlock(), createBlock("a", {
                              key: link.id,
                              href: link.url,
                              target: "_blank",
                              class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                            }, [
                              createVNode("div", { class: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" }, [
                                link.logo_path ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: unref(route)("links.logo", link.id),
                                  class: "w-full h-full object-cover",
                                  alt: link.title
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-4 h-4 text-gray-400 group-hover:text-blue-500",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  })
                                ]))
                              ]),
                              createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" }, toDisplayString(link.title), 1),
                              (openBlock(), createBlock("svg", {
                                class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                              ]))
                            ], 8, ["href"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Show.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "Structure",
  __ssrInlineRender: true,
  props: {
    links: Array,
    general: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Struktur Organisasi - JDIH UIN SGD",
        description: "Struktur Organisasi Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}"${_scopeId}>Tentang</span><span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Struktur Organisasi</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}>Struktur Organisasi</h1></div></div><div class="py-12" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}>`);
            if (__props.general) {
              _push2(`<div class="rounded-2xl shadow-sm border p-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="prose prose-yellow max-w-none" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${__props.general.description ?? ""}</div></div>`);
            } else {
              _push2(`<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"${_scopeId}><div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Belum Ada Data</h3><p class="text-gray-500 mt-2"${_scopeId}>Data struktur organisasi belum ditambahkan.</p></div>`);
            }
            _push2(`</div><div class="lg:w-1/3 space-y-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden"${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", _ctx.route("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)}${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight"${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", { style: { "color": "var(--color-text-description)" } }, "Tentang"),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Struktur Organisasi")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-text-brand)" }
                  }, "Struktur Organisasi")
                ])
              ]),
              createVNode("div", {
                class: "py-12",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      __props.general ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-2xl shadow-sm border p-8",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("div", {
                          class: "prose prose-yellow max-w-none",
                          style: { "color": "var(--color-text-primary)" },
                          innerHTML: __props.general.description
                        }, null, 8, ["innerHTML"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
                      }, [
                        createVNode("div", { class: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Belum Ada Data"),
                        createVNode("p", { class: "text-gray-500 mt-2" }, "Data struktur organisasi belum ditambahkan.")
                      ]))
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode(_sfc_main$k),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-xl shadow-sm border p-6",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold mb-4 flex items-center gap-2",
                          style: { "color": "var(--color-text-brand)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-blue-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            })
                          ])),
                          createTextVNode(" Tautan Terkait ")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link) => {
                            return openBlock(), createBlock("a", {
                              key: link.id,
                              href: link.url,
                              target: "_blank",
                              class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                            }, [
                              createVNode("div", { class: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" }, [
                                link.logo_path ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: _ctx.route("links.logo", link.id),
                                  class: "w-full h-full object-cover",
                                  alt: link.title
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-4 h-4 text-gray-400 group-hover:text-blue-500",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  })
                                ]))
                              ]),
                              createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" }, toDisplayString(link.title), 1),
                              (openBlock(), createBlock("svg", {
                                class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                              ]))
                            ], 8, ["href"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Structure.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    links: Array,
    generals: Object
  },
  setup(__props) {
    const form = useForm({
      category: "Individu",
      name: "",
      address: "",
      identity_number: "",
      phone: "",
      email: "",
      identity_file: null
    });
    const submit = () => {
      form.post(route("contact.store"), {
        preserveScroll: true,
        onSuccess: () => form.reset()
      });
    };
    const fileInput = ref(null);
    const handleFileChange = (e) => {
      form.identity_file = e.target.files[0];
    };
    ref(usePage().props.flash.success);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Kontak Kami" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Kontak Kami</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Kontak Kami</h1></div></div><div class="py-12" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}>`);
            if (_ctx.$page.props.flash.success) {
              _push2(`<div class="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-3"${_scopeId}><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(_ctx.$page.props.flash.success)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="rounded-2xl shadow-sm border p-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h2 class="text-2xl font-bold mb-6" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Formulir Kontak</h2><p class="mb-8" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}> Silakan isi formulir di bawah ini untuk menghubungi kami. Kami akan segera merespon pesan anda. </p><form class="space-y-6"${_scopeId}><div${_scopeId}><label for="category" class="block text-sm font-bold text-gray-700 mb-2"${_scopeId}> Kategori Pengirim <span class="text-red-500"${_scopeId}>*</span></label><select id="category" class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"${_scopeId}><option value="Individu"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Individu") : ssrLooseEqual(unref(form).category, "Individu")) ? " selected" : ""}${_scopeId}>Individu</option><option value="Kelompok"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Kelompok") : ssrLooseEqual(unref(form).category, "Kelompok")) ? " selected" : ""}${_scopeId}>Kelompok</option><option value="LSM/NGO"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "LSM/NGO") : ssrLooseEqual(unref(form).category, "LSM/NGO")) ? " selected" : ""}${_scopeId}>LSM / NGO</option><option value="Instansi Pemerintah"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Instansi Pemerintah") : ssrLooseEqual(unref(form).category, "Instansi Pemerintah")) ? " selected" : ""}${_scopeId}>Instansi Pemerintah</option><option value="Lembaga Pendidikan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Lembaga Pendidikan") : ssrLooseEqual(unref(form).category, "Lembaga Pendidikan")) ? " selected" : ""}${_scopeId}>Lembaga Pendidikan</option><option value="Lainnya"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Lainnya") : ssrLooseEqual(unref(form).category, "Lainnya")) ? " selected" : ""}${_scopeId}>Lainnya</option></select>`);
            if (unref(form).errors.category) {
              _push2(`<div class="text-red-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.category)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><label for="name" class="block text-sm font-bold text-gray-700 mb-2"${_scopeId}> Atas Nama <span class="text-red-500"${_scopeId}>*</span></label><input type="text" id="name"${ssrRenderAttr("value", unref(form).name)} placeholder="Nama Lengkap / Nama Instansi" class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"${_scopeId}>`);
            if (unref(form).errors.name) {
              _push2(`<div class="text-red-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><label for="address" class="block text-sm font-bold text-gray-700 mb-2"${_scopeId}> Alamat Lengkap <span class="text-red-500"${_scopeId}>*</span></label><textarea id="address" rows="3" placeholder="Masukkan alamat lengkap..." class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"${_scopeId}>${ssrInterpolate(unref(form).address)}</textarea>`);
            if (unref(form).errors.address) {
              _push2(`<div class="text-red-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.address)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label for="identity_number" class="block text-sm font-bold text-gray-700 mb-2"${_scopeId}> Nomor Identitas (KTP/SIM/Paspor) <span class="text-red-500"${_scopeId}>*</span></label><input type="text" id="identity_number"${ssrRenderAttr("value", unref(form).identity_number)} placeholder="Contoh: 3201..." class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"${_scopeId}>`);
            if (unref(form).errors.identity_number) {
              _push2(`<div class="text-red-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.identity_number)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><label for="current_identity_file" class="block text-sm font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}> Upload Identitas <span class="text-red-500"${_scopeId}>*</span></label><input type="file" id="current_identity_file" accept="image/*,.pdf" class="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100" style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}"${_scopeId}><p class="text-xs mt-1" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Format: JPG, PNG, PDF. Maks 2MB.</p>`);
            if (unref(form).errors.identity_file) {
              _push2(`<div class="text-red-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.identity_file)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label for="phone" class="block text-sm font-bold text-gray-700 mb-2"${_scopeId}> Nomor Whatsapp / Telepon <span class="text-red-500"${_scopeId}>*</span></label><input type="text" id="phone"${ssrRenderAttr("value", unref(form).phone)} placeholder="08..." class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"${_scopeId}>`);
            if (unref(form).errors.phone) {
              _push2(`<div class="text-red-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.phone)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><label for="email" class="block text-sm font-bold text-gray-700 mb-2"${_scopeId}> Email <span class="text-red-500"${_scopeId}>*</span></label><input type="email" id="email"${ssrRenderAttr("value", unref(form).email)} placeholder="alamat@email.com" class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"${_scopeId}>`);
            if (unref(form).errors.email) {
              _push2(`<div class="text-red-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="pt-4"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg hover:shadow-xl disabled:opacity-50 flex justify-center items-center gap-2" style="${ssrRenderStyle({ "background-color": "var(--color-primary)" })}"${_scopeId}>`);
            if (unref(form).processing) {
              _push2(`<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(form).processing ? "Mengirim..." : "Kirim Pesan")}</button></div></form></div></div><div class="lg:w-1/3 space-y-8"${_scopeId}><div class="p-8 bg-linear-to-br from-[#0F213A] to-[#1a3b66] text-white rounded-2xl shadow-lg"${_scopeId}><h3 class="font-bold text-xl mb-6 flex items-center gap-2"${_scopeId}><svg class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg> Kantor JDIH </h3><div class="space-y-6"${_scopeId}><div${_scopeId}><h4 class="font-bold text-yellow-400 mb-1 text-sm"${_scopeId}>Alamat:</h4><p class="text-sm leading-relaxed text-white/80"${_scopeId}>${__props.generals.alamat?.description ?? `Fakultas Syariah dan Hukum, Lt.2
Jln A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614` ?? ""}</p></div><div${_scopeId}><h4 class="font-bold text-yellow-400 mb-1 text-sm"${_scopeId}>Kontak:</h4><ul class="space-y-2 text-sm text-white/80"${_scopeId}><li class="flex items-center gap-2"${_scopeId}><svg class="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"${_scopeId}></path></svg><span${_scopeId}>${__props.generals.telepon?.description ?? `022-7500000` ?? ""}</span></li><li class="flex items-center gap-2"${_scopeId}><svg class="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId}></path></svg><span${_scopeId}>${__props.generals.email?.description ?? `jdih@uin.ac.id` ?? ""}</span></li></ul></div><div${_scopeId}><h4 class="font-bold text-yellow-400 mb-3 text-sm"${_scopeId}>Sosial Media:</h4><div class="flex gap-4"${_scopeId}><a${ssrRenderAttr("href", __props.generals.facebook?.description.replace(/<[^>]*>?/gm, ""))} target="_blank" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"${_scopeId}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z"${_scopeId}></path></svg></a><a${ssrRenderAttr("href", __props.generals.instagram?.description.replace(/<[^>]*>?/gm, ""))} target="_blank" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"${_scopeId}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"${_scopeId}></path></svg></a><a${ssrRenderAttr("href", __props.generals.youtube?.description.replace(/<[^>]*>?/gm, ""))} target="_blank" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"${_scopeId}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"${_scopeId}></path></svg></a></div></div></div></div>`);
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden"${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)}${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight"${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Kontak Kami")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Kontak Kami")
                ])
              ]),
              createVNode("div", {
                class: "py-12",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      _ctx.$page.props.flash.success ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-3"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ])),
                        createTextVNode(" " + toDisplayString(_ctx.$page.props.flash.success), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", {
                        class: "rounded-2xl shadow-sm border p-8",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h2", {
                          class: "text-2xl font-bold mb-6",
                          style: { "color": "var(--color-primary)" }
                        }, "Formulir Kontak"),
                        createVNode("p", {
                          class: "mb-8",
                          style: { "color": "var(--color-text-secondary)" }
                        }, " Silakan isi formulir di bawah ini untuk menghubungi kami. Kami akan segera merespon pesan anda. "),
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"]),
                          class: "space-y-6"
                        }, [
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "category",
                              class: "block text-sm font-bold text-gray-700 mb-2"
                            }, [
                              createTextVNode(" Kategori Pengirim "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            withDirectives(createVNode("select", {
                              id: "category",
                              "onUpdate:modelValue": ($event) => unref(form).category = $event,
                              class: "w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"
                            }, [
                              createVNode("option", { value: "Individu" }, "Individu"),
                              createVNode("option", { value: "Kelompok" }, "Kelompok"),
                              createVNode("option", { value: "LSM/NGO" }, "LSM / NGO"),
                              createVNode("option", { value: "Instansi Pemerintah" }, "Instansi Pemerintah"),
                              createVNode("option", { value: "Lembaga Pendidikan" }, "Lembaga Pendidikan"),
                              createVNode("option", { value: "Lainnya" }, "Lainnya")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).category]
                            ]),
                            unref(form).errors.category ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-red-500 text-sm mt-1"
                            }, toDisplayString(unref(form).errors.category), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "name",
                              class: "block text-sm font-bold text-gray-700 mb-2"
                            }, [
                              createTextVNode(" Atas Nama "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            withDirectives(createVNode("input", {
                              type: "text",
                              id: "name",
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              placeholder: "Nama Lengkap / Nama Instansi",
                              class: "w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).name]
                            ]),
                            unref(form).errors.name ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-red-500 text-sm mt-1"
                            }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "address",
                              class: "block text-sm font-bold text-gray-700 mb-2"
                            }, [
                              createTextVNode(" Alamat Lengkap "),
                              createVNode("span", { class: "text-red-500" }, "*")
                            ]),
                            withDirectives(createVNode("textarea", {
                              id: "address",
                              "onUpdate:modelValue": ($event) => unref(form).address = $event,
                              rows: "3",
                              placeholder: "Masukkan alamat lengkap...",
                              class: "w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).address]
                            ]),
                            unref(form).errors.address ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-red-500 text-sm mt-1"
                            }, toDisplayString(unref(form).errors.address), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "identity_number",
                                class: "block text-sm font-bold text-gray-700 mb-2"
                              }, [
                                createTextVNode(" Nomor Identitas (KTP/SIM/Paspor) "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              withDirectives(createVNode("input", {
                                type: "text",
                                id: "identity_number",
                                "onUpdate:modelValue": ($event) => unref(form).identity_number = $event,
                                placeholder: "Contoh: 3201...",
                                class: "w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).identity_number]
                              ]),
                              unref(form).errors.identity_number ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-red-500 text-sm mt-1"
                              }, toDisplayString(unref(form).errors.identity_number), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "current_identity_file",
                                class: "block text-sm font-bold mb-2",
                                style: { "color": "var(--color-text-primary)" }
                              }, [
                                createTextVNode(" Upload Identitas "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode("input", {
                                type: "file",
                                id: "current_identity_file",
                                onChange: handleFileChange,
                                accept: "image/*,.pdf",
                                ref_key: "fileInput",
                                ref: fileInput,
                                class: "w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100",
                                style: { "color": "var(--color-text-description)" }
                              }, null, 544),
                              createVNode("p", {
                                class: "text-xs mt-1",
                                style: { "color": "var(--color-text-muted)" }
                              }, "Format: JPG, PNG, PDF. Maks 2MB."),
                              unref(form).errors.identity_file ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-red-500 text-sm mt-1"
                              }, toDisplayString(unref(form).errors.identity_file), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "phone",
                                class: "block text-sm font-bold text-gray-700 mb-2"
                              }, [
                                createTextVNode(" Nomor Whatsapp / Telepon "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              withDirectives(createVNode("input", {
                                type: "text",
                                id: "phone",
                                "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                placeholder: "08...",
                                class: "w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).phone]
                              ]),
                              unref(form).errors.phone ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-red-500 text-sm mt-1"
                              }, toDisplayString(unref(form).errors.phone), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "email",
                                class: "block text-sm font-bold text-gray-700 mb-2"
                              }, [
                                createTextVNode(" Email "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              withDirectives(createVNode("input", {
                                type: "email",
                                id: "email",
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                placeholder: "alamat@email.com",
                                class: "w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).email]
                              ]),
                              unref(form).errors.email ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-red-500 text-sm mt-1"
                              }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "pt-4" }, [
                            createVNode("button", {
                              type: "submit",
                              disabled: unref(form).processing,
                              class: "w-full text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg hover:shadow-xl disabled:opacity-50 flex justify-center items-center gap-2",
                              style: { "background-color": "var(--color-primary)" }
                            }, [
                              unref(form).processing ? (openBlock(), createBlock("svg", {
                                key: 0,
                                class: "animate-spin h-5 w-5 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("circle", {
                                  class: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  "stroke-width": "4"
                                }),
                                createVNode("path", {
                                  class: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })
                              ])) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(unref(form).processing ? "Mengirim..." : "Kirim Pesan"), 1)
                            ], 8, ["disabled"])
                          ])
                        ], 32)
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode("div", { class: "p-8 bg-linear-to-br from-[#0F213A] to-[#1a3b66] text-white rounded-2xl shadow-lg" }, [
                        createVNode("h3", { class: "font-bold text-xl mb-6 flex items-center gap-2" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-6 h-6 text-yellow-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            }),
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            })
                          ])),
                          createTextVNode(" Kantor JDIH ")
                        ]),
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", null, [
                            createVNode("h4", { class: "font-bold text-yellow-400 mb-1 text-sm" }, "Alamat:"),
                            createVNode("p", {
                              class: "text-sm leading-relaxed text-white/80",
                              innerHTML: __props.generals.alamat?.description ?? `Fakultas Syariah dan Hukum, Lt.2
Jln A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614`
                            }, null, 8, ["innerHTML"])
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", { class: "font-bold text-yellow-400 mb-1 text-sm" }, "Kontak:"),
                            createVNode("ul", { class: "space-y-2 text-sm text-white/80" }, [
                              createVNode("li", { class: "flex items-center gap-2" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-white/60",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  })
                                ])),
                                createVNode("span", {
                                  innerHTML: __props.generals.telepon?.description ?? `022-7500000`
                                }, null, 8, ["innerHTML"])
                              ]),
                              createVNode("li", { class: "flex items-center gap-2" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-white/60",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  })
                                ])),
                                createVNode("span", {
                                  innerHTML: __props.generals.email?.description ?? `jdih@uin.ac.id`
                                }, null, 8, ["innerHTML"])
                              ])
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", { class: "font-bold text-yellow-400 mb-3 text-sm" }, "Sosial Media:"),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("a", {
                                href: __props.generals.facebook?.description.replace(/<[^>]*>?/gm, ""),
                                target: "_blank",
                                class: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", { d: "M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" })
                                ]))
                              ], 8, ["href"]),
                              createVNode("a", {
                                href: __props.generals.instagram?.description.replace(/<[^>]*>?/gm, ""),
                                target: "_blank",
                                class: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" })
                                ]))
                              ], 8, ["href"]),
                              createVNode("a", {
                                href: __props.generals.youtube?.description.replace(/<[^>]*>?/gm, ""),
                                target: "_blank",
                                class: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" })
                                ]))
                              ], 8, ["href"])
                            ])
                          ])
                        ])
                      ]),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-xl shadow-sm border p-6",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold mb-4 flex items-center gap-2",
                          style: { "color": "var(--color-primary)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-blue-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            })
                          ])),
                          createTextVNode(" Tautan Terkait ")
                        ]),
                        createVNode("div", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link) => {
                            return openBlock(), createBlock("a", {
                              key: link.id,
                              href: link.url,
                              target: "_blank",
                              class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                            }, [
                              createVNode("div", { class: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" }, [
                                link.logo_path ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  src: unref(route)("links.logo", link.id),
                                  class: "w-full h-full object-cover",
                                  alt: link.title
                                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
                                  key: 1,
                                  class: "w-4 h-4 text-gray-400 group-hover:text-blue-500",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  })
                                ]))
                              ]),
                              createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" }, toDisplayString(link.title), 1),
                              (openBlock(), createBlock("svg", {
                                class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                              ]))
                            ], 8, ["href"]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact/Index.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash$1 = { exports: {} };
var lodash = lodash$1.exports;
var hasRequiredLodash;
function requireLodash() {
  if (hasRequiredLodash) return lodash$1.exports;
  hasRequiredLodash = 1;
  (function(module, exports$1) {
    (function() {
      var undefined$1;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        // Latin Extended-A block.
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = exports$1 && !exports$1.nodeType && exports$1;
      var freeModule = freeExports && true && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      })();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined$1) {
            result = result === undefined$1 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined$1 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = (function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        })();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
        var defineProperty = (function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        })();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
        function lodash2(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ (function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined$1;
            return result2;
          };
        })();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined$1;
        }
        lodash2.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash2
          }
        };
        lodash2.prototype = baseLodash.prototype;
        lodash2.prototype.constructor = lodash2;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed2;
                } else if (!computed2) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined$1 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined$1 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined$1;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined$1 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined$1) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined$1) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined$1) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined$1 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined$1 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined$1, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed2 === computed2) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed2) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed2, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
              var computed2 = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined$1 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined$1;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined$1 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed2);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined$1 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined$1 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
              if (newValue === undefined$1) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
          var isCommon = newValue === undefined$1;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined$1;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
              if (newValue === undefined$1) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed2 = array[mid];
              if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed2 <= value : computed2 < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed2, seen)) {
              var seen = computed2;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed2 === computed2) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed2) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed2);
                }
                result2.push(value);
              } else if (!includes2(seen, computed2, comparator)) {
                if (seen !== result2) {
                  seen.push(computed2);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined$1;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined$1 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
            if (newValue === undefined$1) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined$1 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined$1,
                args,
                holders,
                undefined$1,
                undefined$1,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined$1 && other === undefined$1) {
              return defaultValue;
            }
            if (value !== undefined$1) {
              result2 = value;
            }
            if (other !== undefined$1) {
              if (result2 === undefined$1) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined$1 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined$1;
            }
            start = toFinite(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= -4;
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined$1, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= -97;
            partials = holders = undefined$1;
          }
          ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined$1 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined$1;
          }
          var data = isBindKey ? undefined$1 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= -25;
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined$1, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined$1 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined$1) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined$1, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash2.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined$1;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined$1;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash2[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined$1, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined$1 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined$1;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined$1;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined$1;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined$1 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined$1, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash2(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined$1
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined$1);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined$1) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined$1;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined$1
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined$1 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined$1 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined$1;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined$1;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined$1;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined$1;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined$1) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined$1;
          }
          function flush() {
            return timerId === undefined$1 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined$1) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined$1) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start === undefined$1 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          var result2 = customizer ? customizer(value, other) : undefined$1;
          return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined$1;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined$1, customDefaultsMerge);
          return apply(mergeWith, undefined$1, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined$1 : baseGet(object, path);
          return result2 === undefined$1 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined$1;
          }
          while (++index < length) {
            var value = object == null ? undefined$1 : object[toKey(path[index])];
            if (value === undefined$1) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined$1) {
            upper = lower;
            lower = undefined$1;
          }
          if (upper !== undefined$1) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined$1) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined$1;
          }
          if (floating === undefined$1) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined$1;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined$1;
            }
          }
          if (lower === undefined$1 && upper === undefined$1) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined$1) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined$1;
          }
          limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash2.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined$1;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined$1) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined$1 : pattern;
          if (pattern === undefined$1) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined$1, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined$1 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash2.after = after;
        lodash2.ary = ary;
        lodash2.assign = assign;
        lodash2.assignIn = assignIn;
        lodash2.assignInWith = assignInWith;
        lodash2.assignWith = assignWith;
        lodash2.at = at;
        lodash2.before = before;
        lodash2.bind = bind;
        lodash2.bindAll = bindAll;
        lodash2.bindKey = bindKey;
        lodash2.castArray = castArray;
        lodash2.chain = chain;
        lodash2.chunk = chunk;
        lodash2.compact = compact;
        lodash2.concat = concat;
        lodash2.cond = cond;
        lodash2.conforms = conforms;
        lodash2.constant = constant;
        lodash2.countBy = countBy;
        lodash2.create = create;
        lodash2.curry = curry;
        lodash2.curryRight = curryRight;
        lodash2.debounce = debounce;
        lodash2.defaults = defaults;
        lodash2.defaultsDeep = defaultsDeep;
        lodash2.defer = defer;
        lodash2.delay = delay;
        lodash2.difference = difference;
        lodash2.differenceBy = differenceBy;
        lodash2.differenceWith = differenceWith;
        lodash2.drop = drop;
        lodash2.dropRight = dropRight;
        lodash2.dropRightWhile = dropRightWhile;
        lodash2.dropWhile = dropWhile;
        lodash2.fill = fill;
        lodash2.filter = filter;
        lodash2.flatMap = flatMap;
        lodash2.flatMapDeep = flatMapDeep;
        lodash2.flatMapDepth = flatMapDepth;
        lodash2.flatten = flatten;
        lodash2.flattenDeep = flattenDeep;
        lodash2.flattenDepth = flattenDepth;
        lodash2.flip = flip;
        lodash2.flow = flow;
        lodash2.flowRight = flowRight;
        lodash2.fromPairs = fromPairs;
        lodash2.functions = functions;
        lodash2.functionsIn = functionsIn;
        lodash2.groupBy = groupBy;
        lodash2.initial = initial;
        lodash2.intersection = intersection;
        lodash2.intersectionBy = intersectionBy;
        lodash2.intersectionWith = intersectionWith;
        lodash2.invert = invert;
        lodash2.invertBy = invertBy;
        lodash2.invokeMap = invokeMap;
        lodash2.iteratee = iteratee;
        lodash2.keyBy = keyBy;
        lodash2.keys = keys;
        lodash2.keysIn = keysIn;
        lodash2.map = map;
        lodash2.mapKeys = mapKeys;
        lodash2.mapValues = mapValues;
        lodash2.matches = matches;
        lodash2.matchesProperty = matchesProperty;
        lodash2.memoize = memoize;
        lodash2.merge = merge;
        lodash2.mergeWith = mergeWith;
        lodash2.method = method;
        lodash2.methodOf = methodOf;
        lodash2.mixin = mixin;
        lodash2.negate = negate;
        lodash2.nthArg = nthArg;
        lodash2.omit = omit;
        lodash2.omitBy = omitBy;
        lodash2.once = once;
        lodash2.orderBy = orderBy;
        lodash2.over = over;
        lodash2.overArgs = overArgs;
        lodash2.overEvery = overEvery;
        lodash2.overSome = overSome;
        lodash2.partial = partial;
        lodash2.partialRight = partialRight;
        lodash2.partition = partition;
        lodash2.pick = pick;
        lodash2.pickBy = pickBy;
        lodash2.property = property;
        lodash2.propertyOf = propertyOf;
        lodash2.pull = pull;
        lodash2.pullAll = pullAll;
        lodash2.pullAllBy = pullAllBy;
        lodash2.pullAllWith = pullAllWith;
        lodash2.pullAt = pullAt;
        lodash2.range = range;
        lodash2.rangeRight = rangeRight;
        lodash2.rearg = rearg;
        lodash2.reject = reject;
        lodash2.remove = remove;
        lodash2.rest = rest;
        lodash2.reverse = reverse;
        lodash2.sampleSize = sampleSize;
        lodash2.set = set;
        lodash2.setWith = setWith;
        lodash2.shuffle = shuffle;
        lodash2.slice = slice;
        lodash2.sortBy = sortBy;
        lodash2.sortedUniq = sortedUniq;
        lodash2.sortedUniqBy = sortedUniqBy;
        lodash2.split = split;
        lodash2.spread = spread;
        lodash2.tail = tail;
        lodash2.take = take;
        lodash2.takeRight = takeRight;
        lodash2.takeRightWhile = takeRightWhile;
        lodash2.takeWhile = takeWhile;
        lodash2.tap = tap;
        lodash2.throttle = throttle;
        lodash2.thru = thru;
        lodash2.toArray = toArray;
        lodash2.toPairs = toPairs;
        lodash2.toPairsIn = toPairsIn;
        lodash2.toPath = toPath;
        lodash2.toPlainObject = toPlainObject;
        lodash2.transform = transform;
        lodash2.unary = unary;
        lodash2.union = union;
        lodash2.unionBy = unionBy;
        lodash2.unionWith = unionWith;
        lodash2.uniq = uniq;
        lodash2.uniqBy = uniqBy;
        lodash2.uniqWith = uniqWith;
        lodash2.unset = unset;
        lodash2.unzip = unzip;
        lodash2.unzipWith = unzipWith;
        lodash2.update = update;
        lodash2.updateWith = updateWith;
        lodash2.values = values;
        lodash2.valuesIn = valuesIn;
        lodash2.without = without;
        lodash2.words = words;
        lodash2.wrap = wrap;
        lodash2.xor = xor;
        lodash2.xorBy = xorBy;
        lodash2.xorWith = xorWith;
        lodash2.zip = zip;
        lodash2.zipObject = zipObject;
        lodash2.zipObjectDeep = zipObjectDeep;
        lodash2.zipWith = zipWith;
        lodash2.entries = toPairs;
        lodash2.entriesIn = toPairsIn;
        lodash2.extend = assignIn;
        lodash2.extendWith = assignInWith;
        mixin(lodash2, lodash2);
        lodash2.add = add;
        lodash2.attempt = attempt;
        lodash2.camelCase = camelCase;
        lodash2.capitalize = capitalize;
        lodash2.ceil = ceil;
        lodash2.clamp = clamp;
        lodash2.clone = clone;
        lodash2.cloneDeep = cloneDeep;
        lodash2.cloneDeepWith = cloneDeepWith;
        lodash2.cloneWith = cloneWith;
        lodash2.conformsTo = conformsTo;
        lodash2.deburr = deburr;
        lodash2.defaultTo = defaultTo;
        lodash2.divide = divide;
        lodash2.endsWith = endsWith;
        lodash2.eq = eq;
        lodash2.escape = escape;
        lodash2.escapeRegExp = escapeRegExp;
        lodash2.every = every;
        lodash2.find = find;
        lodash2.findIndex = findIndex;
        lodash2.findKey = findKey;
        lodash2.findLast = findLast;
        lodash2.findLastIndex = findLastIndex;
        lodash2.findLastKey = findLastKey;
        lodash2.floor = floor;
        lodash2.forEach = forEach;
        lodash2.forEachRight = forEachRight;
        lodash2.forIn = forIn;
        lodash2.forInRight = forInRight;
        lodash2.forOwn = forOwn;
        lodash2.forOwnRight = forOwnRight;
        lodash2.get = get;
        lodash2.gt = gt;
        lodash2.gte = gte;
        lodash2.has = has;
        lodash2.hasIn = hasIn;
        lodash2.head = head;
        lodash2.identity = identity;
        lodash2.includes = includes;
        lodash2.indexOf = indexOf;
        lodash2.inRange = inRange;
        lodash2.invoke = invoke;
        lodash2.isArguments = isArguments;
        lodash2.isArray = isArray;
        lodash2.isArrayBuffer = isArrayBuffer;
        lodash2.isArrayLike = isArrayLike;
        lodash2.isArrayLikeObject = isArrayLikeObject;
        lodash2.isBoolean = isBoolean;
        lodash2.isBuffer = isBuffer;
        lodash2.isDate = isDate;
        lodash2.isElement = isElement;
        lodash2.isEmpty = isEmpty;
        lodash2.isEqual = isEqual;
        lodash2.isEqualWith = isEqualWith;
        lodash2.isError = isError;
        lodash2.isFinite = isFinite;
        lodash2.isFunction = isFunction;
        lodash2.isInteger = isInteger;
        lodash2.isLength = isLength;
        lodash2.isMap = isMap;
        lodash2.isMatch = isMatch;
        lodash2.isMatchWith = isMatchWith;
        lodash2.isNaN = isNaN;
        lodash2.isNative = isNative;
        lodash2.isNil = isNil;
        lodash2.isNull = isNull;
        lodash2.isNumber = isNumber;
        lodash2.isObject = isObject;
        lodash2.isObjectLike = isObjectLike;
        lodash2.isPlainObject = isPlainObject;
        lodash2.isRegExp = isRegExp;
        lodash2.isSafeInteger = isSafeInteger;
        lodash2.isSet = isSet;
        lodash2.isString = isString;
        lodash2.isSymbol = isSymbol;
        lodash2.isTypedArray = isTypedArray;
        lodash2.isUndefined = isUndefined;
        lodash2.isWeakMap = isWeakMap;
        lodash2.isWeakSet = isWeakSet;
        lodash2.join = join;
        lodash2.kebabCase = kebabCase;
        lodash2.last = last;
        lodash2.lastIndexOf = lastIndexOf;
        lodash2.lowerCase = lowerCase;
        lodash2.lowerFirst = lowerFirst;
        lodash2.lt = lt;
        lodash2.lte = lte;
        lodash2.max = max;
        lodash2.maxBy = maxBy;
        lodash2.mean = mean;
        lodash2.meanBy = meanBy;
        lodash2.min = min;
        lodash2.minBy = minBy;
        lodash2.stubArray = stubArray;
        lodash2.stubFalse = stubFalse;
        lodash2.stubObject = stubObject;
        lodash2.stubString = stubString;
        lodash2.stubTrue = stubTrue;
        lodash2.multiply = multiply;
        lodash2.nth = nth;
        lodash2.noConflict = noConflict;
        lodash2.noop = noop;
        lodash2.now = now;
        lodash2.pad = pad;
        lodash2.padEnd = padEnd;
        lodash2.padStart = padStart;
        lodash2.parseInt = parseInt2;
        lodash2.random = random;
        lodash2.reduce = reduce;
        lodash2.reduceRight = reduceRight;
        lodash2.repeat = repeat;
        lodash2.replace = replace;
        lodash2.result = result;
        lodash2.round = round;
        lodash2.runInContext = runInContext2;
        lodash2.sample = sample;
        lodash2.size = size;
        lodash2.snakeCase = snakeCase;
        lodash2.some = some;
        lodash2.sortedIndex = sortedIndex;
        lodash2.sortedIndexBy = sortedIndexBy;
        lodash2.sortedIndexOf = sortedIndexOf;
        lodash2.sortedLastIndex = sortedLastIndex;
        lodash2.sortedLastIndexBy = sortedLastIndexBy;
        lodash2.sortedLastIndexOf = sortedLastIndexOf;
        lodash2.startCase = startCase;
        lodash2.startsWith = startsWith;
        lodash2.subtract = subtract;
        lodash2.sum = sum;
        lodash2.sumBy = sumBy;
        lodash2.template = template;
        lodash2.times = times;
        lodash2.toFinite = toFinite;
        lodash2.toInteger = toInteger;
        lodash2.toLength = toLength;
        lodash2.toLower = toLower;
        lodash2.toNumber = toNumber;
        lodash2.toSafeInteger = toSafeInteger;
        lodash2.toString = toString;
        lodash2.toUpper = toUpper;
        lodash2.trim = trim;
        lodash2.trimEnd = trimEnd;
        lodash2.trimStart = trimStart;
        lodash2.truncate = truncate;
        lodash2.unescape = unescape;
        lodash2.uniqueId = uniqueId;
        lodash2.upperCase = upperCase;
        lodash2.upperFirst = upperFirst;
        lodash2.each = forEach;
        lodash2.eachRight = forEachRight;
        lodash2.first = head;
        mixin(lodash2, (function() {
          var source = {};
          baseForOwn(lodash2, function(func, methodName) {
            if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        })(), { "chain": false });
        lodash2.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash2[methodName].placeholder = lodash2;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined$1) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash2.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash2.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash2[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined$1
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash2.prototype.at = wrapperAt;
        lodash2.prototype.chain = wrapperChain;
        lodash2.prototype.commit = wrapperCommit;
        lodash2.prototype.next = wrapperNext;
        lodash2.prototype.plant = wrapperPlant;
        lodash2.prototype.reverse = wrapperReverse;
        lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
        lodash2.prototype.first = lodash2.prototype.head;
        if (symIterator) {
          lodash2.prototype[symIterator] = wrapperToIterator;
        }
        return lodash2;
      });
      var _ = runInContext();
      if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(lodash);
  })(lodash$1, lodash$1.exports);
  return lodash$1.exports;
}
var lodashExports = requireLodash();
const _sfc_main$c = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const selectedChar = ref("");
    const items = ref([]);
    const currentPage = ref(1);
    const lastPage = ref(1);
    const loading = ref(false);
    const total = ref(0);
    const alphabet = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
    const fetchData = async (page = 1, reset = false) => {
      if (loading.value) return;
      if (!reset && page > lastPage.value) return;
      loading.value = true;
      try {
        const params = new URLSearchParams();
        params.append("page", page);
        if (search.value) params.append("q", search.value);
        if (selectedChar.value) params.append("char", selectedChar.value);
        const response = await axios.get(`/api/glossary?${params.toString()}`);
        const data = response.data;
        if (reset) {
          items.value = data.data;
        } else {
          items.value = [...items.value, ...data.data];
        }
        currentPage.value = data.current_page;
        lastPage.value = data.last_page;
        total.value = data.total;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      fetchData(1, true);
    });
    const debouncedFetch = lodashExports.debounce(() => {
      currentPage.value = 1;
      fetchData(1, true);
    }, 300);
    watch([search, selectedChar], () => {
      debouncedFetch();
    });
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 200 && !loading.value && currentPage.value < lastPage.value) {
        fetchData(currentPage.value + 1, false);
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const selectChar = (char) => {
      if (selectedChar.value === char) {
        selectedChar.value = "";
      } else {
        selectedChar.value = char;
      }
    };
    const resetFilters = () => {
      search.value = "";
      selectedChar.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Glosarium - JDIH UIN SGD",
        description: "Daftar istilah dan definisi hukum yang sering digunakan dalam lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}"${_scopeId}>Informasi Hukum</span><span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Glosarium</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Glosarium</h1><p class="mt-2" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Daftar istilah dan definisi hukum.</p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="rounded-xl shadow-sm border p-6 mb-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="relative mb-6"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId}><svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", search.value)} placeholder="Cari istilah..." class="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-input)", "border-color": "var(--color-border-input)", "color": "var(--color-text-primary)" })}"${_scopeId}></div><div class="flex flex-wrap gap-2 justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(alphabet, (char) => {
              _push2(`<button class="${ssrRenderClass([[
                selectedChar.value === char ? "text-white border-transparent" : "hover:text-yellow-600"
              ], "w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition duration-200 border"])}" style="${ssrRenderStyle(selectedChar.value === char ? "background-color: var(--color-primary);" : "background-color: var(--color-bg-secondary); border-color: var(--color-border-input); color: var(--color-text-secondary);")}"${_scopeId}>${ssrInterpolate(char)}</button>`);
            });
            _push2(`<!--]--></div></div>`);
            if (total.value > 0) {
              _push2(`<div class="mb-4 text-sm text-gray-500"${_scopeId}> Menampilkan ${ssrInterpolate(items.value.length)} dari ${ssrInterpolate(total.value)} istilah </div>`);
            } else {
              _push2(`<!---->`);
            }
            if (items.value.length > 0) {
              _push2(`<div class="flex flex-col gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (item) => {
                _push2(`<div class="rounded-xl shadow-sm border p-6 hover:shadow-md transition duration-300 group" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="text-lg font-bold mb-2 transition group-hover:text-yellow-600" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(item.title)}</h3><div class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>${item.description ?? ""}</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (loading.value) {
              _push2(`<div class="flex justify-center py-8"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><svg class="animate-spin h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg><span class="text-gray-500"${_scopeId}>Memuat data...</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!loading.value && items.value.length === 0) {
              _push2(`<div class="text-center py-16 rounded-xl shadow-sm border" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><svg class="w-16 h-16 mx-auto mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg><h3 class="text-lg font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Tidak ada istilah ditemukan</h3><p class="mt-1" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Coba kata kunci lain atau pilih abjad lain.</p><button class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"${_scopeId}> Reset Filter </button></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!loading.value && items.value.length > 0 && currentPage.value >= lastPage.value) {
              _push2(`<div class="text-center py-6 text-gray-400 text-sm"${_scopeId}> — Semua data telah dimuat — </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", { style: { "color": "var(--color-text-description)" } }, "Informasi Hukum"),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Glosarium")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Glosarium"),
                  createVNode("p", {
                    class: "mt-2",
                    style: { "color": "var(--color-text-secondary)" }
                  }, "Daftar istilah dan definisi hukum.")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", {
                  class: "rounded-xl shadow-sm border p-6 mb-8",
                  style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                }, [
                  createVNode("div", { class: "relative mb-6" }, [
                    createVNode("span", { class: "absolute inset-y-0 left-0 flex items-center pl-3" }, [
                      (openBlock(), createBlock("svg", {
                        class: "h-5 w-5 text-gray-400",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        })
                      ]))
                    ]),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      placeholder: "Cari istilah...",
                      class: "w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition",
                      style: { "background-color": "var(--color-bg-input)", "border-color": "var(--color-border-input)", "color": "var(--color-text-primary)" }
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-2 justify-center" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(alphabet, (char) => {
                      return createVNode("button", {
                        key: char,
                        onClick: ($event) => selectChar(char),
                        class: ["w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition duration-200 border", [
                          selectedChar.value === char ? "text-white border-transparent" : "hover:text-yellow-600"
                        ]],
                        style: selectedChar.value === char ? "background-color: var(--color-primary);" : "background-color: var(--color-bg-secondary); border-color: var(--color-border-input); color: var(--color-text-secondary);"
                      }, toDisplayString(char), 15, ["onClick"]);
                    }), 64))
                  ])
                ]),
                total.value > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-4 text-sm text-gray-500"
                }, " Menampilkan " + toDisplayString(items.value.length) + " dari " + toDisplayString(total.value) + " istilah ", 1)) : createCommentVNode("", true),
                items.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex flex-col gap-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "rounded-xl shadow-sm border p-6 hover:shadow-md transition duration-300 group",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("h3", {
                        class: "text-lg font-bold mb-2 transition group-hover:text-yellow-600",
                        style: { "color": "var(--color-primary)" }
                      }, toDisplayString(item.title), 1),
                      createVNode("div", {
                        class: "text-sm leading-relaxed",
                        style: { "color": "var(--color-text-secondary)" },
                        innerHTML: item.description
                      }, null, 8, ["innerHTML"])
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                loading.value ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex justify-center py-8"
                }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    (openBlock(), createBlock("svg", {
                      class: "animate-spin h-6 w-6 text-yellow-500",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }),
                      createVNode("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      })
                    ])),
                    createVNode("span", { class: "text-gray-500" }, "Memuat data...")
                  ])
                ])) : createCommentVNode("", true),
                !loading.value && items.value.length === 0 ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "text-center py-16 rounded-xl shadow-sm border",
                  style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-16 h-16 mx-auto mb-4",
                    style: { "color": "var(--color-text-muted)" },
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    })
                  ])),
                  createVNode("h3", {
                    class: "text-lg font-medium",
                    style: { "color": "var(--color-text-primary)" }
                  }, "Tidak ada istilah ditemukan"),
                  createVNode("p", {
                    class: "mt-1",
                    style: { "color": "var(--color-text-secondary)" }
                  }, "Coba kata kunci lain atau pilih abjad lain."),
                  createVNode("button", {
                    onClick: resetFilters,
                    class: "mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                  }, " Reset Filter ")
                ])) : createCommentVNode("", true),
                !loading.value && items.value.length > 0 && currentPage.value >= lastPage.value ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "text-center py-6 text-gray-400 text-sm"
                }, " — Semua data telah dimuat — ")) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Glossary/Index.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "AwardsCarousel",
  __ssrInlineRender: true,
  props: {
    awards: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const displayAwards = computed(() => [...props.awards, ...props.awards, ...props.awards]);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.awards.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "w-full py-12 overflow-hidden relative",
          style: { "background-color": "var(--color-primary)" }
        }, _attrs))} data-v-0ca72c62><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center" data-v-0ca72c62><h2 class="text-2xl font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--color-text-inverse)" })}" data-v-0ca72c62>Penghargaan</h2><div class="h-1 w-16 bg-yellow-500 rounded-full mx-auto" data-v-0ca72c62></div></div><div class="relative w-full overflow-hidden group/track" data-v-0ca72c62><div class="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[var(--color-primary)] to-transparent z-10 pointer-events-none" data-v-0ca72c62></div><div class="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[var(--color-primary)] to-transparent z-10 pointer-events-none" data-v-0ca72c62></div><div class="flex gap-16 animate-marquee w-max pt-4 pb-20 group-hover/track:[animation-play-state:paused] px-4" data-v-0ca72c62><!--[-->`);
        ssrRenderList(displayAwards.value, (award, index) => {
          _push(`<div class="relative group/item flex flex-col items-center justify-center cursor-pointer" data-v-0ca72c62><div class="h-24 w-24 md:h-32 md:w-32 transition-transform duration-300 transform group-hover/item:scale-110" data-v-0ca72c62><img${ssrRenderAttr("src", award.image)}${ssrRenderAttr("alt", award.title)}${ssrRenderAttr("title", award.title)} class="w-full h-full object-contain drop-shadow-lg" loading="lazy" data-v-0ca72c62></div><div class="absolute -bottom-14 opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-y-2 group-hover/item:translate-y-0 text-center w-48 z-20 pointer-events-none" data-v-0ca72c62><div class="text-xs font-bold py-2 px-3 rounded-lg shadow-xl mx-auto inline-block relative border" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)", "border-color": "var(--color-border-light)" })}" data-v-0ca72c62>${ssrInterpolate(award.title)} <div class="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 border-t border-l" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-0ca72c62></div></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AwardsCarousel.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AwardsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-0ca72c62"]]);
const _sfc_main$a = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    stats: Object,
    recentProducts: Array,
    popularProducts: Array,
    collections: Array,
    news: Array,
    events: Array,
    documentations: Array,
    feedbacks: Array,
    types: Array,
    topTypes: Array,
    topTypes: Array,
    visitorStats: Object,
    visitorStats: Object,
    awards: Array,
    journals: Array
  },
  setup(__props) {
    Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
    const props = __props;
    const searchQuery = ref("");
    const searchType = ref("Semua Jenis");
    const handleSearch = () => {
      router.get(route("produk-hukum.index"), {
        search: searchQuery.value,
        type: searchType.value !== "Semua Jenis" ? [searchType.value] : []
      });
    };
    const activeTab = ref("terbaru");
    const displayedProducts = computed(() => {
      return activeTab.value === "terbaru" ? props.recentProducts : props.popularProducts;
    });
    const statsDisplay = computed(() => [
      { label: "Total Produk Hukum", value: props.stats.totalProducts + "+", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
      { label: "Pengunjung Hari Ini", value: props.visitorStats?.today || 0, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { label: "Total Pengunjung", value: (props.visitorStats?.total || 0).toLocaleString(), icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" },
      { label: "Indeks Kepuasan", value: props.stats.avgRating + "/5", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ]);
    const isDarkMode = ref(false);
    const checkTheme = () => {
      isDarkMode.value = document.body.classList.contains("a11y-dark");
    };
    const chartTextColor = computed(() => isDarkMode.value ? "#CBD5E1" : "#374151");
    const chartGridColor = computed(() => isDarkMode.value ? "#334155" : "#E5E7EB");
    const barChartData = computed(() => ({
      labels: props.topTypes.map((t) => t.name),
      datasets: [
        {
          label: "Jumlah Lihat",
          backgroundColor: "#3b82f6",
          // blue-500
          data: props.topTypes.map((t) => t.count)
        }
      ]
    }));
    const barChartOptions = computed(() => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
            color: chartTextColor.value
          },
          grid: {
            color: chartGridColor.value
          }
        },
        x: {
          ticks: {
            font: { size: 10 },
            color: chartTextColor.value
          },
          grid: {
            display: false
          }
        }
      }
    }));
    const pieChartData = computed(() => ({
      labels: ["Tahun Ini", "Bulan Ini", "Hari Ini"],
      datasets: [
        {
          backgroundColor: ["#f59e0b", "#10b981", "#3b82f6"],
          // yellow, green, blue
          borderColor: isDarkMode.value ? "#1E293B" : "#FFFFFF",
          data: [props.visitorStats.year, props.visitorStats.month, props.visitorStats.today]
        }
      ]
    }));
    const pieChartOptions = computed(() => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: chartTextColor.value
          }
        }
      }
    }));
    onMounted(() => {
      checkTheme();
      window.addEventListener("theme-change", checkTheme);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Beranda" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId}><div class="absolute inset-0" data-v-d9261fb9${_scopeId}><img src="/images/uinsgdbdg_cover.jpg" alt="Background" class="w-full h-full object-cover" data-v-d9261fb9${_scopeId}><div class="absolute inset-0 bg-linear-to-b from-[#0F213A]/90 via-[#0F213A]/80 to-[#0F213A]/60" data-v-d9261fb9${_scopeId}></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 flex flex-col items-center text-center" data-v-d9261fb9${_scopeId}><h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight fade-in-up drop-shadow-md" data-v-d9261fb9${_scopeId}> Pusat Data Hukum &amp; Regulasi <br class="hidden md:block" data-v-d9261fb9${_scopeId}><span class="mt-2 inline-block" style="${ssrRenderStyle({ "color": "var(--color-accent)" })}" data-v-d9261fb9${_scopeId}>UIN Sunan Gunung Djati</span></h1><p class="text-gray-100 text-lg md:text-xl max-w-4xl mb-12 fade-in-up delay-100 leading-relaxed drop-shadow-sm font-medium" data-v-d9261fb9${_scopeId}> Selamat datang di Jaringan Dokumentasi dan Informasi Hukum (JDIH) UIN Sunan Gunung Djati <br class="hidden md:block" data-v-d9261fb9${_scopeId}> Akses seluruh dokumen hukum dan regulasi kampus dengan mudah. </p><div class="w-full max-w-3xl rounded-lg p-2 flex gap-2 shadow-2xl fade-in-up delay-200" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)" })}" data-v-d9261fb9${_scopeId}><div class="hidden md:flex items-center pl-3 pr-2 border-r min-w-[160px] relative" style="${ssrRenderStyle({ "border-color": "var(--color-border)" })}" data-v-d9261fb9${_scopeId}><select class="w-full bg-transparent py-2 px-2 border-none rounded-lg transition-all duration-200 ease-in-out focus:ring-0 focus:outline-0 text-gray-700 text-sm font-medium appearance-none cursor-pointer pr-8" data-v-d9261fb9${_scopeId}><option data-v-d9261fb9${ssrIncludeBooleanAttr(Array.isArray(searchType.value) ? ssrLooseContain(searchType.value, null) : ssrLooseEqual(searchType.value, null)) ? " selected" : ""}${_scopeId}>Semua Jenis</option><!--[-->`);
            ssrRenderList(__props.types, (type) => {
              _push2(`<option class="text-gray-700"${ssrRenderAttr("value", type.name)} data-v-d9261fb9${ssrIncludeBooleanAttr(Array.isArray(searchType.value) ? ssrLooseContain(searchType.value, type.name) : ssrLooseEqual(searchType.value, type.name)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(type.name)}</option>`);
            });
            _push2(`<!--]--></select><div class="absolute right-2 pointer-events-none px-4" data-v-d9261fb9${_scopeId}><svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d9261fb9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-d9261fb9${_scopeId}></path></svg></div></div><div class="flex-1 flex items-center" data-v-d9261fb9${_scopeId}><svg class="h-5 w-5 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-d9261fb9${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="Masukkan kata kunci atau nomor dokumen..." class="w-full border-none py-2 px-2 rounded-lg ml-2 focus:ring-0 focus:outline-0 placeholder-gray-400" style="${ssrRenderStyle({ "background-color": "transparent", "color": "var(--color-text-primary)" })}" data-v-d9261fb9${_scopeId}></div><button class="hover:bg-yellow-400 font-bold px-8 py-2 rounded-md transition shadow-sm flex items-center justify-center" style="${ssrRenderStyle({ "background-color": "var(--color-accent)", "color": "var(--color-text-inverse)" })}" data-v-d9261fb9${_scopeId}> CARI </button></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20" data-v-d9261fb9${_scopeId}><div class="rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border-light)]" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)" })}" data-v-d9261fb9${_scopeId}><!--[-->`);
            ssrRenderList(statsDisplay.value, (stat, index) => {
              _push2(`<div class="p-6 flex flex-col items-center text-center" data-v-d9261fb9${_scopeId}><div class="mb-3" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId}><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d9261fb9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", stat.icon)} data-v-d9261fb9${_scopeId}></path></svg></div><div class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId}>${ssrInterpolate(stat.value)}</div><div class="text-sm mt-1" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}" data-v-d9261fb9${_scopeId}>${ssrInterpolate(stat.label)}</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="py-20 border-t" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" })}" data-v-d9261fb9${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-d9261fb9${_scopeId}><div class="flex justify-between items-center mb-8" data-v-d9261fb9${_scopeId}><div class="flex space-x-6 border-b" style="${ssrRenderStyle({ "border-color": "var(--color-border)" })}" data-v-d9261fb9${_scopeId}><button class="${ssrRenderClass(["pb-4 font-bold text-lg border-b-2 transition", activeTab.value === "terbaru" ? "border-yellow-500 text-yellow-500" : "border-transparent text-gray-400 hover:text-gray-600"])}" data-v-d9261fb9${_scopeId}> Terbaru </button><button class="${ssrRenderClass(["pb-4 font-bold text-lg border-b-2 transition", activeTab.value === "terpopuler" ? "border-yellow-500 text-yellow-500" : "border-transparent text-gray-400 hover:text-gray-600"])}" data-v-d9261fb9${_scopeId}> Terpopuler </button></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk-hukum",
              class: "text-sm font-bold hover:text-[var(--color-primary)]",
              style: { "color": "var(--color-text-muted)" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lihat Semua <span class="ml-1" data-v-d9261fb9${_scopeId2}>→</span>`);
                } else {
                  return [
                    createTextVNode(" Lihat Semua "),
                    createVNode("span", { class: "ml-1" }, "→")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" data-v-d9261fb9${_scopeId}>`);
            if (displayedProducts.value.length === 0) {
              _push2(`<div class="col-span-2 text-center py-10 text-gray-500 italic" data-v-d9261fb9${_scopeId}> Belum ada dokumen yang tersedia. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(displayedProducts.value, (doc) => {
              _push2(ssrRenderComponent(unref(Link), {
                key: doc.id,
                href: unref(route)("produk-hukum.show", doc.slug),
                class: "flex flex-col rounded-xl border hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group cursor-pointer relative overflow-hidden",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-1 w-full bg-linear-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500" data-v-d9261fb9${_scopeId2}></div><div class="p-6 flex flex-col h-full" data-v-d9261fb9${_scopeId2}><div class="flex justify-between items-start mb-3" data-v-d9261fb9${_scopeId2}><div class="flex flex-col gap-1" data-v-d9261fb9${_scopeId2}><span class="${ssrRenderClass([doc.badge_style, "px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider inline-block w-fit"])}" data-v-d9261fb9${_scopeId2}>${ssrInterpolate(doc.type)}</span>`);
                    if (doc.year) {
                      _push3(`<span class="text-xs font-bold text-gray-400" data-v-d9261fb9${_scopeId2}> Tahun ${ssrInterpolate(doc.year)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    if (doc.status && doc.category_name && doc.category_name.toLowerCase().includes("peraturan")) {
                      _push3(`<div class="${ssrRenderClass([
                        "px-2 py-0.5 rounded-full text-[10px] font-bold border",
                        doc.status === "Berlaku" || doc.status === "active" ? "bg-green-50 text-green-600 border-green-200" : "bg-red-50 text-red-600 border-red-200"
                      ])}" data-v-d9261fb9${_scopeId2}>${ssrInterpolate(doc.status === "active" ? "Berlaku" : doc.status)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><h3 class="text-lg font-bold leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${ssrRenderAttr("title", doc.title)} data-v-d9261fb9${_scopeId2}>${ssrInterpolate(doc.title)}</h3><div class="mt-auto space-y-2 pt-4" data-v-d9261fb9${_scopeId2}><div class="flex items-center gap-2 text-sm text-gray-600" data-v-d9261fb9${_scopeId2}><svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" data-v-d9261fb9${_scopeId2}></path></svg><span class="font-medium truncate" data-v-d9261fb9${_scopeId2}>${ssrInterpolate(doc.number)}</span></div>`);
                    if (doc.signer) {
                      _push3(`<div class="flex items-center gap-2 text-sm text-gray-600" data-v-d9261fb9${_scopeId2}><svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-d9261fb9${_scopeId2}></path></svg><span class="truncate" data-v-d9261fb9${_scopeId2}>Oleh: ${ssrInterpolate(doc.signer)}</span></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (activeTab.value === "terpopuler") {
                      _push3(`<div class="flex items-center gap-2 text-sm text-gray-500" data-v-d9261fb9${_scopeId2}><svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-d9261fb9${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-d9261fb9${_scopeId2}></path></svg><span data-v-d9261fb9${_scopeId2}>${ssrInterpolate(doc.views)}x Dilihat</span></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="mt-4 pt-4 border-t flex justify-end" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}" data-v-d9261fb9${_scopeId2}><span class="text-xs font-bold text-gray-400 group-hover:text-yellow-600 flex items-center gap-1 transition-colors" data-v-d9261fb9${_scopeId2}> Selengkapnya <svg class="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-d9261fb9${_scopeId2}></path></svg></span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-1 w-full bg-linear-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500" }),
                      createVNode("div", { class: "p-6 flex flex-col h-full" }, [
                        createVNode("div", { class: "flex justify-between items-start mb-3" }, [
                          createVNode("div", { class: "flex flex-col gap-1" }, [
                            createVNode("span", {
                              class: [doc.badge_style, "px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider inline-block w-fit"]
                            }, toDisplayString(doc.type), 3),
                            doc.year ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs font-bold text-gray-400"
                            }, " Tahun " + toDisplayString(doc.year), 1)) : createCommentVNode("", true)
                          ]),
                          doc.status && doc.category_name && doc.category_name.toLowerCase().includes("peraturan") ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: [
                              "px-2 py-0.5 rounded-full text-[10px] font-bold border",
                              doc.status === "Berlaku" || doc.status === "active" ? "bg-green-50 text-green-600 border-green-200" : "bg-red-50 text-red-600 border-red-200"
                            ]
                          }, toDisplayString(doc.status === "active" ? "Berlaku" : doc.status), 3)) : createCommentVNode("", true)
                        ]),
                        createVNode("h3", {
                          class: "text-lg font-bold leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2",
                          style: { "color": "var(--color-primary)" },
                          title: doc.title
                        }, toDisplayString(doc.title), 9, ["title"]),
                        createVNode("div", { class: "mt-auto space-y-2 pt-4" }, [
                          createVNode("div", { class: "flex items-center gap-2 text-sm text-gray-600" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 text-gray-400 shrink-0",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                              })
                            ])),
                            createVNode("span", { class: "font-medium truncate" }, toDisplayString(doc.number), 1)
                          ]),
                          doc.signer ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex items-center gap-2 text-sm text-gray-600"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 text-gray-400 shrink-0",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              })
                            ])),
                            createVNode("span", { class: "truncate" }, "Oleh: " + toDisplayString(doc.signer), 1)
                          ])) : createCommentVNode("", true),
                          activeTab.value === "terpopuler" ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex items-center gap-2 text-sm text-gray-500"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 text-gray-400 shrink-0",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              }),
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              })
                            ])),
                            createVNode("span", null, toDisplayString(doc.views) + "x Dilihat", 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", {
                          class: "mt-4 pt-4 border-t flex justify-end",
                          style: { "border-color": "var(--color-border-light)" }
                        }, [
                          createVNode("span", { class: "text-xs font-bold text-gray-400 group-hover:text-yellow-600 flex items-center gap-1 transition-colors" }, [
                            createTextVNode(" Selengkapnya "),
                            (openBlock(), createBlock("svg", {
                              class: "w-3 h-3 transition-transform group-hover:translate-x-1",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                              })
                            ]))
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div><div class="py-20 border-t" style="${ssrRenderStyle({ "background-color": "var(--color-bg-primary)", "border-color": "var(--color-border-light)" })}" data-v-d9261fb9${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-d9261fb9${_scopeId}><div class="mb-8 flex justify-between items-end" data-v-d9261fb9${_scopeId}><div data-v-d9261fb9${_scopeId}><span class="text-yellow-500 font-bold tracking-wider text-xs uppercase mb-1 block" data-v-d9261fb9${_scopeId}>Transparansi Data</span><h2 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId}>Statistik &amp; Matriks Data</h2><div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1" data-v-d9261fb9${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: unref(route)("statistics.index"),
              class: "text-sm font-bold text-gray-500 hover:text-[#0F213A] flex items-center gap-1 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lihat Detail <span class="ml-1" data-v-d9261fb9${_scopeId2}>→</span>`);
                } else {
                  return [
                    createTextVNode(" Lihat Detail "),
                    createVNode("span", { class: "ml-1" }, "→")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-d9261fb9${_scopeId}><div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col" data-v-d9261fb9${_scopeId}><h3 class="flex items-center gap-2 font-bold text-[#0F213A] mb-6" data-v-d9261fb9${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" data-v-d9261fb9${_scopeId}></path></svg><div style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}" data-v-d9261fb9${_scopeId}> 5 Jenis Produk Hukum Terpopuler</div></h3><div class="flex-1 min-h-[300px] relative" data-v-d9261fb9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Bar), {
              data: barChartData.value,
              options: barChartOptions.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col" data-v-d9261fb9${_scopeId}><h3 class="flex items-center gap-2 font-bold text-[#0F213A] mb-6" data-v-d9261fb9${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-d9261fb9${_scopeId}></path></svg><div style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}" data-v-d9261fb9${_scopeId}>Statistik Pengunjung</div></h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full" data-v-d9261fb9${_scopeId}><div class="min-h-[200px] flex items-center justify-center relative" data-v-d9261fb9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Pie), {
              data: pieChartData.value,
              options: pieChartOptions.value
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col justify-center space-y-4" data-v-d9261fb9${_scopeId}><div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500" data-v-d9261fb9${_scopeId}><div class="text-xs font-bold uppercase" style="${ssrRenderStyle({ "color": "var(--color-text-inverse)" })}" data-v-d9261fb9${_scopeId}> Total Pengunjung</div><div class="text-xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-text-inverse)" })}" data-v-d9261fb9${_scopeId}>${ssrInterpolate((__props.visitorStats?.total || 0).toLocaleString())}</div></div><div class="grid grid-cols-2 gap-2" data-v-d9261fb9${_scopeId}><div class="p-2 bg-gray-50 rounded border border-gray-100" data-v-d9261fb9${_scopeId}><div class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-d9261fb9${_scopeId}>Tahun Ini </div><div class="font-bold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-d9261fb9${_scopeId}>${ssrInterpolate((__props.visitorStats?.year || 0).toLocaleString())}</div></div><div class="p-2 bg-gray-50 rounded border border-gray-100" data-v-d9261fb9${_scopeId}><div class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-d9261fb9${_scopeId}>Bulan Ini </div><div class="font-bold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-d9261fb9${_scopeId}>${ssrInterpolate((__props.visitorStats?.month || 0).toLocaleString())}</div></div><div class="p-2 bg-gray-50 rounded border border-gray-100" data-v-d9261fb9${_scopeId}><div class="text-[10px]" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-d9261fb9${_scopeId}>Hari Ini </div><div class="font-bold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-d9261fb9${_scopeId}>${ssrInterpolate((__props.visitorStats?.today || 0).toLocaleString())}</div></div><div class="p-2 bg-green-50 rounded border border-green-100" data-v-d9261fb9${_scopeId}><div class="text-[10px] text-green-600 font-bold flex items-center gap-1" data-v-d9261fb9${_scopeId}><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" data-v-d9261fb9${_scopeId}></span> Online </div><div class="font-bold text-green-800" data-v-d9261fb9${_scopeId}>${ssrInterpolate((__props.visitorStats?.online || 0).toLocaleString())}</div></div></div></div></div></div></div></div></div>`);
            if (__props.journals && __props.journals.length > 0) {
              _push2(`<div class="py-20 border-t" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" })}" data-v-d9261fb9${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-d9261fb9${_scopeId}><div class="flex justify-between items-end mb-10" data-v-d9261fb9${_scopeId}><div data-v-d9261fb9${_scopeId}><h2 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId}>Jurnal Hukum</h2><div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1" data-v-d9261fb9${_scopeId}></div></div>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("produk-hukum.index", { type: ["Jurnal Hukum"] }),
                class: "text-sm font-bold flex items-center gap-1 transition-colors hover:text-[var(--color-primary)]",
                style: { "color": "var(--color-text-muted)" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lihat Semua <span class="ml-1" data-v-d9261fb9${_scopeId2}>→</span>`);
                  } else {
                    return [
                      createTextVNode(" Lihat Semua "),
                      createVNode("span", { class: "ml-1" }, "→")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-v-d9261fb9${_scopeId}><!--[-->`);
              ssrRenderList(__props.journals, (journal) => {
                _push2(`<a${ssrRenderAttr("href", journal.link)} target="_blank" class="group rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border flex flex-col overflow-hidden relative" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-d9261fb9${_scopeId}>`);
                if (journal.accreditation) {
                  _push2(`<div class="absolute top-3 right-3 z-10 bg-yellow-400 text-[10px] font-extrabold px-2 py-1 rounded shadow-md uppercase tracking-wide" style="${ssrRenderStyle({ "color": "var(--color-text-inverse)" })}" data-v-d9261fb9${_scopeId}>${ssrInterpolate(journal.accreditation)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="h-64 overflow-hidden relative bg-gray-200" data-v-d9261fb9${_scopeId}>`);
                if (journal.cover_image) {
                  _push2(`<img${ssrRenderAttr("src", journal.cover_image)}${ssrRenderAttr("alt", journal.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-v-d9261fb9${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100" data-v-d9261fb9${_scopeId}><svg class="w-12 h-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-d9261fb9${_scopeId}></path></svg></div>`);
                }
                _push2(`<div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" data-v-d9261fb9${_scopeId}></div></div><div class="p-5 flex-1 flex flex-col" data-v-d9261fb9${_scopeId}><h3 class="text-lg font-bold leading-snug mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${ssrRenderAttr("title", journal.title)} data-v-d9261fb9${_scopeId}>${ssrInterpolate(journal.title)}</h3><p class="text-xs line-clamp-3 mb-4 leading-relaxed" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}" data-v-d9261fb9${_scopeId}>${ssrInterpolate(journal.description)}</p><div class="mt-auto pt-4 border-t" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}" data-v-d9261fb9${_scopeId}><span class="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId}> Baca Selengkapnya <span class="rounded-full p-1" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}" data-v-d9261fb9${_scopeId}>→</span></span></div></div></a>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.news.length > 0) {
              _push2(`<div class="py-20 border-t" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-d9261fb9${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-d9261fb9${_scopeId}><div class="flex justify-between items-center mb-10" data-v-d9261fb9${_scopeId}><div data-v-d9261fb9${_scopeId}><h2 class="text-2xl md:text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId}>Informasi Hukum</h2><div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1" data-v-d9261fb9${_scopeId}></div></div>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("information.index"),
                class: "text-sm font-bold hover:text-[var(--color-primary)]",
                style: { "color": "var(--color-text-muted)" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lihat Semua <span class="ml-1" data-v-d9261fb9${_scopeId2}>→</span>`);
                  } else {
                    return [
                      createTextVNode(" Lihat Semua "),
                      createVNode("span", { class: "ml-1" }, "→")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer" data-v-d9261fb9${_scopeId}><!--[-->`);
              ssrRenderList(__props.news, (item, idx) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: idx,
                  href: unref(route)("information.show", item.slug),
                  class: "rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group border h-full flex flex-col",
                  style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="h-48 overflow-hidden relative" data-v-d9261fb9${_scopeId2}><img${ssrRenderAttr("src", unref(route)("posts.pathimage", item.id) || "https://via.placeholder.com/600x400?text=No+Image")}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover group-hover:scale-105 transition duration-500" data-v-d9261fb9${_scopeId2}><div class="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 m-4 rounded" style="${ssrRenderStyle({ "color": "var(--color-text-inverse)" })}" data-v-d9261fb9${_scopeId2}>${ssrInterpolate(item.category)}</div></div><div class="p-6 flex-1 flex flex-col" data-v-d9261fb9${_scopeId2}><div class="text-xs mb-3 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}" data-v-d9261fb9${_scopeId2}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-d9261fb9${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-d9261fb9${_scopeId2}></path></svg> ${ssrInterpolate(item.date)}</div><h3 class="text-lg font-bold mb-3 leading-snug group-hover:text-yellow-600 transition" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId2}>${ssrInterpolate(item.title)}</h3><p class="text-sm line-clamp-3 mb-6" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}" data-v-d9261fb9${_scopeId2}>${ssrInterpolate(item.desc)}</p><div class="mt-auto" data-v-d9261fb9${_scopeId2}><span class="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-d9261fb9${_scopeId2}>Baca Selengkapnya <span class="rounded-full p-1" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}" data-v-d9261fb9${_scopeId2}>→</span></span></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "h-48 overflow-hidden relative" }, [
                          createVNode("img", {
                            src: unref(route)("posts.pathimage", item.id) || "https://via.placeholder.com/600x400?text=No+Image",
                            alt: item.title,
                            class: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", {
                            class: "absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 m-4 rounded",
                            style: { "color": "var(--color-text-inverse)" }
                          }, toDisplayString(item.category), 1)
                        ]),
                        createVNode("div", { class: "p-6 flex-1 flex flex-col" }, [
                          createVNode("div", {
                            class: "text-xs mb-3 flex items-center gap-2",
                            style: { "color": "var(--color-text-muted)" }
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              })
                            ])),
                            createTextVNode(" " + toDisplayString(item.date), 1)
                          ]),
                          createVNode("h3", {
                            class: "text-lg font-bold mb-3 leading-snug group-hover:text-yellow-600 transition",
                            style: { "color": "var(--color-primary)" }
                          }, toDisplayString(item.title), 1),
                          createVNode("p", {
                            class: "text-sm line-clamp-3 mb-6",
                            style: { "color": "var(--color-text-secondary)" }
                          }, toDisplayString(item.desc), 1),
                          createVNode("div", { class: "mt-auto" }, [
                            createVNode("span", {
                              class: "text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all",
                              style: { "color": "var(--color-primary)" }
                            }, [
                              createTextVNode("Baca Selengkapnya "),
                              createVNode("span", {
                                class: "rounded-full p-1",
                                style: { "background-color": "var(--color-bg-secondary)" }
                              }, "→")
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(AwardsCarousel, { awards: __props.awards }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                class: "relative overflow-hidden",
                style: { "background-color": "var(--color-primary)" }
              }, [
                createVNode("div", { class: "absolute inset-0" }, [
                  createVNode("img", {
                    src: "/images/uinsgdbdg_cover.jpg",
                    alt: "Background",
                    class: "w-full h-full object-cover"
                  }),
                  createVNode("div", { class: "absolute inset-0 bg-linear-to-b from-[#0F213A]/90 via-[#0F213A]/80 to-[#0F213A]/60" })
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 flex flex-col items-center text-center" }, [
                  createVNode("h1", { class: "text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight fade-in-up drop-shadow-md" }, [
                    createTextVNode(" Pusat Data Hukum & Regulasi "),
                    createVNode("br", { class: "hidden md:block" }),
                    createVNode("span", {
                      class: "mt-2 inline-block",
                      style: { "color": "var(--color-accent)" }
                    }, "UIN Sunan Gunung Djati")
                  ]),
                  createVNode("p", { class: "text-gray-100 text-lg md:text-xl max-w-4xl mb-12 fade-in-up delay-100 leading-relaxed drop-shadow-sm font-medium" }, [
                    createTextVNode(" Selamat datang di Jaringan Dokumentasi dan Informasi Hukum (JDIH) UIN Sunan Gunung Djati "),
                    createVNode("br", { class: "hidden md:block" }),
                    createTextVNode(" Akses seluruh dokumen hukum dan regulasi kampus dengan mudah. ")
                  ]),
                  createVNode("div", {
                    class: "w-full max-w-3xl rounded-lg p-2 flex gap-2 shadow-2xl fade-in-up delay-200",
                    style: { "background-color": "var(--color-bg-card)" }
                  }, [
                    createVNode("div", {
                      class: "hidden md:flex items-center pl-3 pr-2 border-r min-w-[160px] relative",
                      style: { "border-color": "var(--color-border)" }
                    }, [
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => searchType.value = $event,
                        class: "w-full bg-transparent py-2 px-2 border-none rounded-lg transition-all duration-200 ease-in-out focus:ring-0 focus:outline-0 text-gray-700 text-sm font-medium appearance-none cursor-pointer pr-8"
                      }, [
                        createVNode("option", null, "Semua Jenis"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.types, (type) => {
                          return openBlock(), createBlock("option", {
                            class: "text-gray-700",
                            key: type.id,
                            value: type.name
                          }, toDisplayString(type.name), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, searchType.value]
                      ]),
                      createVNode("div", { class: "absolute right-2 pointer-events-none px-4" }, [
                        (openBlock(), createBlock("svg", {
                          class: "h-4 w-4 text-gray-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M19 9l-7 7-7-7"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "flex-1 flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        class: "h-5 w-5 text-gray-400 ml-2",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        })
                      ])),
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        onKeyup: withKeys(handleSearch, ["enter"]),
                        placeholder: "Masukkan kata kunci atau nomor dokumen...",
                        class: "w-full border-none py-2 px-2 rounded-lg ml-2 focus:ring-0 focus:outline-0 placeholder-gray-400",
                        style: { "background-color": "transparent", "color": "var(--color-text-primary)" }
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, searchQuery.value]
                      ])
                    ]),
                    createVNode("button", {
                      onClick: handleSearch,
                      class: "hover:bg-yellow-400 font-bold px-8 py-2 rounded-md transition shadow-sm flex items-center justify-center",
                      style: { "background-color": "var(--color-accent)", "color": "var(--color-text-inverse)" }
                    }, " CARI ")
                  ])
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20" }, [
                createVNode("div", {
                  class: "rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--color-border-light)]",
                  style: { "background-color": "var(--color-bg-card)" }
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(statsDisplay.value, (stat, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "p-6 flex flex-col items-center text-center"
                    }, [
                      createVNode("div", {
                        class: "mb-3",
                        style: { "color": "var(--color-primary)" }
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-8 h-8",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: stat.icon
                          }, null, 8, ["d"])
                        ]))
                      ]),
                      createVNode("div", {
                        class: "text-3xl font-extrabold",
                        style: { "color": "var(--color-primary)" }
                      }, toDisplayString(stat.value), 1),
                      createVNode("div", {
                        class: "text-sm mt-1",
                        style: { "color": "var(--color-text-muted)" }
                      }, toDisplayString(stat.label), 1)
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("div", {
                class: "py-20 border-t",
                style: { "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex justify-between items-center mb-8" }, [
                    createVNode("div", {
                      class: "flex space-x-6 border-b",
                      style: { "border-color": "var(--color-border)" }
                    }, [
                      createVNode("button", {
                        onClick: ($event) => activeTab.value = "terbaru",
                        class: ["pb-4 font-bold text-lg border-b-2 transition", activeTab.value === "terbaru" ? "border-yellow-500 text-yellow-500" : "border-transparent text-gray-400 hover:text-gray-600"]
                      }, " Terbaru ", 10, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => activeTab.value = "terpopuler",
                        class: ["pb-4 font-bold text-lg border-b-2 transition", activeTab.value === "terpopuler" ? "border-yellow-500 text-yellow-500" : "border-transparent text-gray-400 hover:text-gray-600"]
                      }, " Terpopuler ", 10, ["onClick"])
                    ]),
                    createVNode(unref(Link), {
                      href: "/produk-hukum",
                      class: "text-sm font-bold hover:text-[var(--color-primary)]",
                      style: { "color": "var(--color-text-muted)" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Lihat Semua "),
                        createVNode("span", { class: "ml-1" }, "→")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" }, [
                    displayedProducts.value.length === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "col-span-2 text-center py-10 text-gray-500 italic"
                    }, " Belum ada dokumen yang tersedia. ")) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(displayedProducts.value, (doc) => {
                      return openBlock(), createBlock(unref(Link), {
                        key: doc.id,
                        href: unref(route)("produk-hukum.show", doc.slug),
                        class: "flex flex-col rounded-xl border hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group cursor-pointer relative overflow-hidden",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-1 w-full bg-linear-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500" }),
                          createVNode("div", { class: "p-6 flex flex-col h-full" }, [
                            createVNode("div", { class: "flex justify-between items-start mb-3" }, [
                              createVNode("div", { class: "flex flex-col gap-1" }, [
                                createVNode("span", {
                                  class: [doc.badge_style, "px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider inline-block w-fit"]
                                }, toDisplayString(doc.type), 3),
                                doc.year ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-xs font-bold text-gray-400"
                                }, " Tahun " + toDisplayString(doc.year), 1)) : createCommentVNode("", true)
                              ]),
                              doc.status && doc.category_name && doc.category_name.toLowerCase().includes("peraturan") ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: [
                                  "px-2 py-0.5 rounded-full text-[10px] font-bold border",
                                  doc.status === "Berlaku" || doc.status === "active" ? "bg-green-50 text-green-600 border-green-200" : "bg-red-50 text-red-600 border-red-200"
                                ]
                              }, toDisplayString(doc.status === "active" ? "Berlaku" : doc.status), 3)) : createCommentVNode("", true)
                            ]),
                            createVNode("h3", {
                              class: "text-lg font-bold leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2",
                              style: { "color": "var(--color-primary)" },
                              title: doc.title
                            }, toDisplayString(doc.title), 9, ["title"]),
                            createVNode("div", { class: "mt-auto space-y-2 pt-4" }, [
                              createVNode("div", { class: "flex items-center gap-2 text-sm text-gray-600" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-gray-400 shrink-0",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                  })
                                ])),
                                createVNode("span", { class: "font-medium truncate" }, toDisplayString(doc.number), 1)
                              ]),
                              doc.signer ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center gap-2 text-sm text-gray-600"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-gray-400 shrink-0",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  })
                                ])),
                                createVNode("span", { class: "truncate" }, "Oleh: " + toDisplayString(doc.signer), 1)
                              ])) : createCommentVNode("", true),
                              activeTab.value === "terpopuler" ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-center gap-2 text-sm text-gray-500"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-gray-400 shrink-0",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  }),
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  })
                                ])),
                                createVNode("span", null, toDisplayString(doc.views) + "x Dilihat", 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", {
                              class: "mt-4 pt-4 border-t flex justify-end",
                              style: { "border-color": "var(--color-border-light)" }
                            }, [
                              createVNode("span", { class: "text-xs font-bold text-gray-400 group-hover:text-yellow-600 flex items-center gap-1 transition-colors" }, [
                                createTextVNode(" Selengkapnya "),
                                (openBlock(), createBlock("svg", {
                                  class: "w-3 h-3 transition-transform group-hover:translate-x-1",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", {
                class: "py-20 border-t",
                style: { "background-color": "var(--color-bg-primary)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "mb-8 flex justify-between items-end" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "text-yellow-500 font-bold tracking-wider text-xs uppercase mb-1 block" }, "Transparansi Data"),
                      createVNode("h2", {
                        class: "text-3xl font-extrabold",
                        style: { "color": "var(--color-primary)" }
                      }, "Statistik & Matriks Data"),
                      createVNode("div", { class: "h-1.5 w-24 bg-yellow-500 rounded-full mt-1" })
                    ]),
                    createVNode(unref(Link), {
                      href: unref(route)("statistics.index"),
                      class: "text-sm font-bold text-gray-500 hover:text-[#0F213A] flex items-center gap-1 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Lihat Detail "),
                        createVNode("span", { class: "ml-1" }, "→")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col" }, [
                      createVNode("h3", { class: "flex items-center gap-2 font-bold text-[#0F213A] mb-6" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5 text-yellow-500",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
                          })
                        ])),
                        createVNode("div", { style: { "color": "var(--color-text-secondary)" } }, " 5 Jenis Produk Hukum Terpopuler")
                      ]),
                      createVNode("div", { class: "flex-1 min-h-[300px] relative" }, [
                        createVNode(unref(Bar), {
                          data: barChartData.value,
                          options: barChartOptions.value
                        }, null, 8, ["data", "options"])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col" }, [
                      createVNode("h3", { class: "flex items-center gap-2 font-bold text-[#0F213A] mb-6" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5 text-yellow-500",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          })
                        ])),
                        createVNode("div", { style: { "color": "var(--color-text-secondary)" } }, "Statistik Pengunjung")
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 h-full" }, [
                        createVNode("div", { class: "min-h-[200px] flex items-center justify-center relative" }, [
                          createVNode(unref(Pie), {
                            data: pieChartData.value,
                            options: pieChartOptions.value
                          }, null, 8, ["data", "options"])
                        ]),
                        createVNode("div", { class: "flex flex-col justify-center space-y-4" }, [
                          createVNode("div", { class: "p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500" }, [
                            createVNode("div", {
                              class: "text-xs font-bold uppercase",
                              style: { "color": "var(--color-text-inverse)" }
                            }, " Total Pengunjung"),
                            createVNode("div", {
                              class: "text-xl font-extrabold",
                              style: { "color": "var(--color-text-inverse)" }
                            }, toDisplayString((__props.visitorStats?.total || 0).toLocaleString()), 1)
                          ]),
                          createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                            createVNode("div", { class: "p-2 bg-gray-50 rounded border border-gray-100" }, [
                              createVNode("div", {
                                class: "text-[10px]",
                                style: { "color": "var(--color-text-primary)" }
                              }, "Tahun Ini "),
                              createVNode("div", {
                                class: "font-bold",
                                style: { "color": "var(--color-text-primary)" }
                              }, toDisplayString((__props.visitorStats?.year || 0).toLocaleString()), 1)
                            ]),
                            createVNode("div", { class: "p-2 bg-gray-50 rounded border border-gray-100" }, [
                              createVNode("div", {
                                class: "text-[10px]",
                                style: { "color": "var(--color-text-primary)" }
                              }, "Bulan Ini "),
                              createVNode("div", {
                                class: "font-bold",
                                style: { "color": "var(--color-text-primary)" }
                              }, toDisplayString((__props.visitorStats?.month || 0).toLocaleString()), 1)
                            ]),
                            createVNode("div", { class: "p-2 bg-gray-50 rounded border border-gray-100" }, [
                              createVNode("div", {
                                class: "text-[10px]",
                                style: { "color": "var(--color-text-primary)" }
                              }, "Hari Ini "),
                              createVNode("div", {
                                class: "font-bold",
                                style: { "color": "var(--color-text-primary)" }
                              }, toDisplayString((__props.visitorStats?.today || 0).toLocaleString()), 1)
                            ]),
                            createVNode("div", { class: "p-2 bg-green-50 rounded border border-green-100" }, [
                              createVNode("div", { class: "text-[10px] text-green-600 font-bold flex items-center gap-1" }, [
                                createVNode("span", { class: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
                                createTextVNode(" Online ")
                              ]),
                              createVNode("div", { class: "font-bold text-green-800" }, toDisplayString((__props.visitorStats?.online || 0).toLocaleString()), 1)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              __props.journals && __props.journals.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-20 border-t",
                style: { "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex justify-between items-end mb-10" }, [
                    createVNode("div", null, [
                      createVNode("h2", {
                        class: "text-3xl font-extrabold",
                        style: { "color": "var(--color-primary)" }
                      }, "Jurnal Hukum"),
                      createVNode("div", { class: "h-1.5 w-24 bg-yellow-500 rounded-full mt-1" })
                    ]),
                    createVNode(unref(Link), {
                      href: unref(route)("produk-hukum.index", { type: ["Jurnal Hukum"] }),
                      class: "text-sm font-bold flex items-center gap-1 transition-colors hover:text-[var(--color-primary)]",
                      style: { "color": "var(--color-text-muted)" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Lihat Semua "),
                        createVNode("span", { class: "ml-1" }, "→")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.journals, (journal) => {
                      return openBlock(), createBlock("a", {
                        key: journal.id,
                        href: journal.link,
                        target: "_blank",
                        class: "group rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border flex flex-col overflow-hidden relative",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        journal.accreditation ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute top-3 right-3 z-10 bg-yellow-400 text-[10px] font-extrabold px-2 py-1 rounded shadow-md uppercase tracking-wide",
                          style: { "color": "var(--color-text-inverse)" }
                        }, toDisplayString(journal.accreditation), 1)) : createCommentVNode("", true),
                        createVNode("div", { class: "h-64 overflow-hidden relative bg-gray-200" }, [
                          journal.cover_image ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: journal.cover_image,
                            alt: journal.title,
                            class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-full h-full flex items-center justify-center text-gray-400 bg-gray-100"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-12 h-12 opacity-50",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "1",
                                d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              })
                            ]))
                          ])),
                          createVNode("div", { class: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" })
                        ]),
                        createVNode("div", { class: "p-5 flex-1 flex flex-col" }, [
                          createVNode("h3", {
                            class: "text-lg font-bold leading-snug mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2",
                            style: { "color": "var(--color-primary)" },
                            title: journal.title
                          }, toDisplayString(journal.title), 9, ["title"]),
                          createVNode("p", {
                            class: "text-xs line-clamp-3 mb-4 leading-relaxed",
                            style: { "color": "var(--color-text-secondary)" }
                          }, toDisplayString(journal.description), 1),
                          createVNode("div", {
                            class: "mt-auto pt-4 border-t",
                            style: { "border-color": "var(--color-border-light)" }
                          }, [
                            createVNode("span", {
                              class: "text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all",
                              style: { "color": "var(--color-primary)" }
                            }, [
                              createTextVNode(" Baca Selengkapnya "),
                              createVNode("span", {
                                class: "rounded-full p-1",
                                style: { "background-color": "var(--color-bg-secondary)" }
                              }, "→")
                            ])
                          ])
                        ])
                      ], 8, ["href"]);
                    }), 128))
                  ])
                ])
              ])) : createCommentVNode("", true),
              __props.news.length > 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "py-20 border-t",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex justify-between items-center mb-10" }, [
                    createVNode("div", null, [
                      createVNode("h2", {
                        class: "text-2xl md:text-3xl font-extrabold",
                        style: { "color": "var(--color-primary)" }
                      }, "Informasi Hukum"),
                      createVNode("div", { class: "h-1.5 w-24 bg-yellow-500 rounded-full mt-1" })
                    ]),
                    createVNode(unref(Link), {
                      href: unref(route)("information.index"),
                      class: "text-sm font-bold hover:text-[var(--color-primary)]",
                      style: { "color": "var(--color-text-muted)" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Lihat Semua "),
                        createVNode("span", { class: "ml-1" }, "→")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.news, (item, idx) => {
                      return openBlock(), createBlock(unref(Link), {
                        key: idx,
                        href: unref(route)("information.show", item.slug),
                        class: "rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group border h-full flex flex-col",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "h-48 overflow-hidden relative" }, [
                            createVNode("img", {
                              src: unref(route)("posts.pathimage", item.id) || "https://via.placeholder.com/600x400?text=No+Image",
                              alt: item.title,
                              class: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", {
                              class: "absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 m-4 rounded",
                              style: { "color": "var(--color-text-inverse)" }
                            }, toDisplayString(item.category), 1)
                          ]),
                          createVNode("div", { class: "p-6 flex-1 flex flex-col" }, [
                            createVNode("div", {
                              class: "text-xs mb-3 flex items-center gap-2",
                              style: { "color": "var(--color-text-muted)" }
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                })
                              ])),
                              createTextVNode(" " + toDisplayString(item.date), 1)
                            ]),
                            createVNode("h3", {
                              class: "text-lg font-bold mb-3 leading-snug group-hover:text-yellow-600 transition",
                              style: { "color": "var(--color-primary)" }
                            }, toDisplayString(item.title), 1),
                            createVNode("p", {
                              class: "text-sm line-clamp-3 mb-6",
                              style: { "color": "var(--color-text-secondary)" }
                            }, toDisplayString(item.desc), 1),
                            createVNode("div", { class: "mt-auto" }, [
                              createVNode("span", {
                                class: "text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all",
                                style: { "color": "var(--color-primary)" }
                              }, [
                                createTextVNode("Baca Selengkapnya "),
                                createVNode("span", {
                                  class: "rounded-full p-1",
                                  style: { "background-color": "var(--color-bg-secondary)" }
                                }, "→")
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode(AwardsCarousel, { awards: __props.awards }, null, 8, ["awards"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-d9261fb9"]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
      // Expected format: [{ label: 'Home', url: '/' }, { label: 'Current Page' }]
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "flex overflow-x-auto whitespace-nowrap py-1 mb-4 no-scrollbar",
        "aria-label": "Breadcrumb"
      }, _attrs))} data-v-d7e4e43e><ol class="inline-flex items-center text-sm" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}" data-v-d7e4e43e><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        _push(`<li class="inline-flex items-center" data-v-d7e4e43e>`);
        if (index > 0) {
          _push(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}" data-v-d7e4e43e>/</span>`);
        } else {
          _push(`<!---->`);
        }
        if (item.url) {
          _push(ssrRenderComponent(unref(Link), {
            href: item.url,
            class: "inline-flex items-center font-medium transition duration-150 ease-in-out hover:text-[var(--color-accent-hover)]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span class="font-medium" aria-current="page" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}" data-v-d7e4e43e>${ssrInterpolate(item.label)}</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Breadcrumb.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-d7e4e43e"]]);
const _sfc_main$8 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    infographics: Object
  },
  setup(__props) {
    const breadcrumbItems = [
      { label: "Beranda", url: "/" },
      { label: "Info Grafis" }
    ];
    const showLightbox = ref(false);
    const activeInfographic = ref(null);
    const currentImageIndex = ref(0);
    const lightboxImages = computed(() => {
      if (!activeInfographic.value || !activeInfographic.value.images) return [];
      return activeInfographic.value.images.map((img, index) => ({
        src: route("infographics.gallery", [activeInfographic.value.id, index]),
        alt: activeInfographic.value.title
      }));
    });
    const openLightbox = (item) => {
      activeInfographic.value = item;
      currentImageIndex.value = 0;
      showLightbox.value = true;
      document.body.style.overflow = "hidden";
    };
    const closeLightbox = () => {
      showLightbox.value = false;
      activeInfographic.value = null;
      document.body.style.overflow = "";
    };
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
    const touchStartX = ref(0);
    const touchEndX = ref(0);
    const handleTouchStart = (e) => {
      touchStartX.value = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e) => {
      touchEndX.value = e.changedTouches[0].screenX;
      handleSwipe();
    };
    const handleSwipe = () => {
      if (touchStartX.value - touchEndX.value > 50) {
        nextImage();
      }
      if (touchEndX.value - touchStartX.value > 50) {
        prevImage();
      }
    };
    const handleKeydown = (e) => {
      if (!showLightbox.value) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleKeydown);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Info Grafis - JDIH UIN SGD",
        description: "Galeri informasi hukum dalam bentuk grafis visual yang menarik dan mudah dipahami."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Info Grafis</h1><p class="mt-2" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Galeri informasi hukum dalam bentuk grafis visual yang menarik.</p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}>`);
            if (__props.infographics.data.length > 0) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(__props.infographics.data, (item) => {
                _push2(`<div class="group rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="aspect-[0.8] relative overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}>`);
                if (item.cover_image) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("infographics.cover", item.id))}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover group-hover:scale-105 transition duration-700"${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center text-gray-400"${_scopeId}><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg></div>`);
                }
                _push2(`<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"${_scopeId}><span class="bg-white/90 p-3 rounded-full text-[#0F213A] shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></span></div>`);
                if (item.images && item.images.length > 0) {
                  _push2(`<div class="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1"${_scopeId}><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg> ${ssrInterpolate(item.images ? item.images.length : 0)} Slide </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="p-5 flex-1 flex justify-center"${_scopeId}><h3 class="font-bold text-xl text-center transition mb-2 group-hover:text-yellow-600" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(item.title)}</h3></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-20"${_scopeId}><div class="inline-block p-4 rounded-full bg-gray-50 mb-4"${_scopeId}><svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg></div><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Belum ada Info Grafis</h3><p class="text-gray-500 mt-1"${_scopeId}>Saat ini belum ada data info grafis yang tersedia.</p></div>`);
            }
            if (__props.infographics.links.length > 3) {
              _push2(`<div class="mt-12 flex justify-center text-sm"${_scopeId}><div class="flex flex-wrap justify-center gap-1.5 p-2 rounded-xl border shadow-sm" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><!--[-->`);
              ssrRenderList(__props.infographics.links, (link, key) => {
                _push2(`<!--[-->`);
                if (link.url) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: link.url,
                    class: ["h-9 min-w-[36px] px-2 flex items-center justify-center rounded-lg transition text-xs font-bold", [
                      link.active ? "text-white shadow-md transform scale-105" : "hover:bg-gray-50",
                      !link.url && "opacity-50 cursor-not-allowed"
                    ]],
                    style: link.active ? "background-color: var(--color-primary);" : "color: var(--color-text-secondary);"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span class="h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (showLightbox.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"${_scopeId}><button class="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2"${_scopeId}><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
              if (lightboxImages.value.length > 1) {
                _push2(`<button class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent hidden md:block"${ssrIncludeBooleanAttr(currentImageIndex.value === 0) ? " disabled" : ""}${_scopeId}><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<!---->`);
              }
              if (lightboxImages.value.length > 1) {
                _push2(`<button class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent hidden md:block"${ssrIncludeBooleanAttr(currentImageIndex.value === lightboxImages.value.length - 1) ? " disabled" : ""}${_scopeId}><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="relative w-full h-full max-w-5xl max-h-screen p-4 md:p-10 flex flex-col items-center justify-center"${_scopeId}><div class="relative w-full h-full flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", lightboxImages.value[currentImageIndex.value]?.src)}${ssrRenderAttr("alt", lightboxImages.value[currentImageIndex.value]?.alt)} class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"${_scopeId}></div><div class="absolute bottom-6 left-0 right-0 text-center pointer-events-none"${_scopeId}><h3 class="text-white font-bold text-lg mb-1"${_scopeId}>${ssrInterpolate(activeInfographic.value?.title)}</h3><p class="text-gray-400 text-sm"${_scopeId}> Gambar ${ssrInterpolate(currentImageIndex.value + 1)} dari ${ssrInterpolate(lightboxImages.value.length)}</p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode(Breadcrumb, { items: breadcrumbItems }),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Info Grafis"),
                  createVNode("p", {
                    class: "mt-2",
                    style: { "color": "var(--color-text-secondary)" }
                  }, "Galeri informasi hukum dalam bentuk grafis visual yang menarik.")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                __props.infographics.data.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.infographics.data, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      onClick: ($event) => openLightbox(item),
                      class: "group rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", {
                        class: "aspect-[0.8] relative overflow-hidden",
                        style: { "background-color": "var(--color-bg-secondary)" }
                      }, [
                        item.cover_image ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: unref(route)("infographics.cover", item.id),
                          alt: item.title,
                          class: "w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "w-full h-full flex items-center justify-center text-gray-400"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-12 h-12",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            })
                          ]))
                        ])),
                        createVNode("div", { class: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" }, [
                          createVNode("span", { class: "bg-white/90 p-3 rounded-full text-[#0F213A] shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-6 h-6",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              })
                            ]))
                          ])
                        ]),
                        item.images && item.images.length > 0 ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-3 h-3",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            })
                          ])),
                          createTextVNode(" " + toDisplayString(item.images ? item.images.length : 0) + " Slide ", 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "p-5 flex-1 flex justify-center" }, [
                        createVNode("h3", {
                          class: "font-bold text-xl text-center transition mb-2 group-hover:text-yellow-600",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(item.title), 1)
                      ])
                    ], 8, ["onClick"]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center py-20"
                }, [
                  createVNode("div", { class: "inline-block p-4 rounded-full bg-gray-50 mb-4" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-12 h-12 text-gray-300",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      })
                    ]))
                  ]),
                  createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Belum ada Info Grafis"),
                  createVNode("p", { class: "text-gray-500 mt-1" }, "Saat ini belum ada data info grafis yang tersedia.")
                ])),
                __props.infographics.links.length > 3 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mt-12 flex justify-center text-sm"
                }, [
                  createVNode("div", {
                    class: "flex flex-wrap justify-center gap-1.5 p-2 rounded-xl border shadow-sm",
                    style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.infographics.links, (link, key) => {
                      return openBlock(), createBlock(Fragment, { key }, [
                        link.url ? (openBlock(), createBlock(unref(Link), {
                          key: 0,
                          href: link.url,
                          class: ["h-9 min-w-[36px] px-2 flex items-center justify-center rounded-lg transition text-xs font-bold", [
                            link.active ? "text-white shadow-md transform scale-105" : "hover:bg-gray-50",
                            !link.url && "opacity-50 cursor-not-allowed"
                          ]],
                          style: link.active ? "background-color: var(--color-primary);" : "color: var(--color-text-secondary);",
                          innerHTML: link.label
                        }, null, 8, ["href", "class", "style", "innerHTML"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          innerHTML: link.label,
                          class: "h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"
                        }, null, 8, ["innerHTML"]))
                      ], 64);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createVNode(Transition, {
                "enter-active-class": "transition duration-300 ease-out",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "transition duration-200 ease-in",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: withCtx(() => [
                  showLightbox.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm",
                    onClick: withModifiers(closeLightbox, ["self"]),
                    onTouchstart: handleTouchStart,
                    onTouchend: handleTouchEnd
                  }, [
                    createVNode("button", {
                      onClick: closeLightbox,
                      class: "absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-8 h-8",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M6 18L18 6M6 6l12 12"
                        })
                      ]))
                    ]),
                    lightboxImages.value.length > 1 ? (openBlock(), createBlock("button", {
                      key: 0,
                      onClick: withModifiers(prevImage, ["stop"]),
                      class: "absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent hidden md:block",
                      disabled: currentImageIndex.value === 0
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-10 h-10",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 19l-7-7 7-7"
                        })
                      ]))
                    ], 8, ["disabled"])) : createCommentVNode("", true),
                    lightboxImages.value.length > 1 ? (openBlock(), createBlock("button", {
                      key: 1,
                      onClick: withModifiers(nextImage, ["stop"]),
                      class: "absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent hidden md:block",
                      disabled: currentImageIndex.value === lightboxImages.value.length - 1
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-10 h-10",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9 5l7 7-7 7"
                        })
                      ]))
                    ], 8, ["disabled"])) : createCommentVNode("", true),
                    createVNode("div", { class: "relative w-full h-full max-w-5xl max-h-screen p-4 md:p-10 flex flex-col items-center justify-center" }, [
                      createVNode("div", { class: "relative w-full h-full flex items-center justify-center" }, [
                        createVNode(Transition, {
                          "enter-active-class": "transition duration-300 ease-out",
                          "enter-from-class": "opacity-0 scale-95",
                          "enter-to-class": "opacity-100 scale-100",
                          "leave-active-class": "transition duration-200 ease-in absolute",
                          "leave-from-class": "opacity-100 scale-100",
                          "leave-to-class": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("img", {
                              key: currentImageIndex.value,
                              src: lightboxImages.value[currentImageIndex.value]?.src,
                              alt: lightboxImages.value[currentImageIndex.value]?.alt,
                              class: "max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
                            }, null, 8, ["src", "alt"]))
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "absolute bottom-6 left-0 right-0 text-center pointer-events-none" }, [
                        createVNode("h3", { class: "text-white font-bold text-lg mb-1" }, toDisplayString(activeInfographic.value?.title), 1),
                        createVNode("p", { class: "text-gray-400 text-sm" }, " Gambar " + toDisplayString(currentImageIndex.value + 1) + " dari " + toDisplayString(lightboxImages.value.length), 1)
                      ])
                    ])
                  ], 32)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Infographics/Index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    posts: Object,
    categories: Array,
    tags: Array,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const showMobileFilters = ref(false);
    const search = ref(props.filters.q || "");
    const sort = ref(props.filters.sort || "newest");
    const selectedCategories = ref(props.filters.categories ? String(props.filters.categories).split(",") : []);
    const selectedTags = ref(props.filters.tags ? String(props.filters.tags).split(",") : []);
    const searchCategory = ref("");
    const searchTag = ref("");
    const showAllCategories = ref(false);
    const showAllTags = ref(false);
    const filteredCategories = computed(() => {
      let cats = props.categories;
      if (searchCategory.value) {
        cats = cats.filter((c) => c.name.toLowerCase().includes(searchCategory.value.toLowerCase()));
      }
      return showAllCategories.value ? cats : cats.slice(0, 5);
    });
    const filteredTags = computed(() => {
      let tgs = props.tags;
      if (searchTag.value) {
        tgs = tgs.filter((t) => t.name.toLowerCase().includes(searchTag.value.toLowerCase()));
      }
      return showAllTags.value ? tgs : tgs.slice(0, 5);
    });
    const updateParams = lodashExports.debounce(() => {
      router.get(
        route("information.index"),
        {
          q: search.value,
          sort: sort.value,
          categories: selectedCategories.value.join(","),
          tags: selectedTags.value.join(",")
        },
        { preserveState: true, replace: true }
      );
    }, 300);
    watch(search, updateParams);
    watch(sort, updateParams);
    watch(selectedCategories, updateParams, { deep: true });
    watch(selectedTags, updateParams, { deep: true });
    const resetFilters = () => {
      search.value = "";
      sort.value = "newest";
      selectedCategories.value = [];
      selectedTags.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Informasi Hukum - JDIH UIN Sunan Gunung Djati",
        description: "Berita dan artikel menarik seputar hukum di lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Informasi Hukum</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Informasi Hukum</h1></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="flex flex-col lg:flex-row gap-10"${_scopeId}><div class="${ssrRenderClass([{ "hidden lg:block": !showMobileFilters.value }, "w-full lg:w-1/4 shrink-0 space-y-6"])}"${_scopeId}><div class="rounded-xl shadow-sm border overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="p-5 border-b flex justify-between items-center" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"${_scopeId}></path></svg> Filter Pencarian </h3><button class="text-xs font-medium text-gray-400 hover:text-red-500 transition"${_scopeId}>Reset Filter</button></div><div class="p-5 border-b" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}"${_scopeId}><h4 class="font-bold text-sm mb-3" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Kategori</h4><div class="mb-3 relative"${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchCategory.value)} placeholder="Cari kategori..." class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"${_scopeId}></div><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(filteredCategories.value, (category) => {
              _push2(`<div class="flex items-center justify-between group"${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedCategories.value) ? ssrLooseContain(selectedCategories.value, category.slug) : selectedCategories.value) ? " checked" : ""}${ssrRenderAttr("value", category.slug)} class="rounded text-yellow-500 focus:ring-yellow-500/50" style="${ssrRenderStyle({ "border-color": "var(--color-border-input)" })}"${_scopeId}><span class="text-sm transition truncate max-w-[150px] group-hover:text-[var(--color-primary)]" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${ssrRenderAttr("title", category.name)}${_scopeId}>${ssrInterpolate(category.name)}</span></label><span class="text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-muted)" })}"${_scopeId}>${ssrInterpolate(category.posts_count || 0)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchCategory.value && __props.categories.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"${_scopeId}>${ssrInterpolate(showAllCategories.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllCategories.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="p-5 border-b" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}"${_scopeId}><h4 class="font-bold text-sm mb-3" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Tag</h4><div class="mb-3 relative"${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchTag.value)} placeholder="Cari tag..." class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"${_scopeId}></div><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(filteredTags.value, (tag) => {
              _push2(`<div class="flex items-center justify-between group"${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedTags.value) ? ssrLooseContain(selectedTags.value, tag.slug) : selectedTags.value) ? " checked" : ""}${ssrRenderAttr("value", tag.slug)} class="rounded text-yellow-500 focus:ring-yellow-500/50" style="${ssrRenderStyle({ "border-color": "var(--color-border-input)" })}"${_scopeId}><span class="text-sm transition truncate max-w-[150px] group-hover:text-[var(--color-primary)]" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${ssrRenderAttr("title", tag.name)}${_scopeId}>${ssrInterpolate(tag.name)}</span></label><span class="text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-muted)" })}"${_scopeId}>${ssrInterpolate(tag.posts_count || 0)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchTag.value && __props.tags.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"${_scopeId}>${ssrInterpolate(showAllTags.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllTags.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="flex-1 w-full md:w-3/4"${_scopeId}><div class="rounded-lg border p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="font-medium mb-3 sm:mb-0" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}> Menampilkan <span class="font-bold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(__props.posts.total)}</span> Hasil Pencarian </div><div class="flex items-center gap-3"${_scopeId}><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Urutkan:</span><select class="rounded-md pl-3 pr-3 py-1 text-sm focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer" style="${ssrRenderStyle({ "background-color": "var(--color-bg-input)", "border-color": "var(--color-border-input)", "color": "var(--color-text-primary)" })}"${_scopeId}><option value="newest"${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "newest") : ssrLooseEqual(sort.value, "newest")) ? " selected" : ""}${_scopeId}>Terbaru</option><option value="popular"${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "popular") : ssrLooseEqual(sort.value, "popular")) ? " selected" : ""}${_scopeId}>Terpopuler</option></select></div></div><div class="mb-6 flex gap-3"${_scopeId}><div class="relative flex-1"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId}><svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", search.value)} placeholder="Cari berita atau artikel..." class="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500" style="${ssrRenderStyle({ "background-color": "var(--color-bg-input)", "border-color": "var(--color-border-input)", "color": "var(--color-text-primary)" })}"${_scopeId}></div><button class="${ssrRenderClass([{ "bg-gray-50 text-[#0F213A] border-[#0F213A]": showMobileFilters.value }, "lg:hidden px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-[#0F213A] hover:border-[#0F213A] transition flex items-center gap-2 shadow-sm"])}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"${_scopeId}></path></svg><span class="hidden sm:inline font-medium"${_scopeId}>Filter</span></button></div>`);
            if (__props.posts.data.length > 0) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.posts.data, (post) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: post.id,
                  href: unref(route)("information.show", post.slug),
                  class: "group rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition",
                  style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="aspect-video relative overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId2}>`);
                      if (post.image) {
                        _push3(`<img${ssrRenderAttr("src", unref(route)("posts.pathimage", post.id) || "https://via.placeholder.com/600x400?text=No+Image")}${ssrRenderAttr("alt", post.title)} class="w-full h-full object-cover group-hover:scale-105 transition duration-500"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center text-gray-400"${_scopeId2}><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId2}></path></svg></div>`);
                      }
                      _push3(`<div class="absolute top-4 left-4"${_scopeId2}><span class="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm"${_scopeId2}>${ssrInterpolate(post.category ? post.category.name : "Umum")}</span></div></div><div class="p-6"${_scopeId2}><div class="flex items-center text-xs mb-3 gap-3" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId2}></path></svg> ${ssrInterpolate(post.date)}</span><span class="flex items-center gap-1"${_scopeId2}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId2}></path></svg> ${ssrInterpolate(post.views_count)} Views </span></div><h2 class="text-xl font-bold mb-3 line-clamp-2 hover:text-yellow-600 transition" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId2}>${ssrInterpolate(post.title)}</h2><p class="text-sm line-clamp-3 mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId2}>${ssrInterpolate(post.desc)}</p><span class="text-yellow-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"${_scopeId2}> Baca Selengkapnya <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId2}></path></svg></span></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "aspect-video relative overflow-hidden",
                          style: { "background-color": "var(--color-bg-secondary)" }
                        }, [
                          post.image ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: unref(route)("posts.pathimage", post.id) || "https://via.placeholder.com/600x400?text=No+Image",
                            alt: post.title,
                            class: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-full h-full flex items-center justify-center text-gray-400"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-12 h-12",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              })
                            ]))
                          ])),
                          createVNode("div", { class: "absolute top-4 left-4" }, [
                            createVNode("span", { class: "bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm" }, toDisplayString(post.category ? post.category.name : "Umum"), 1)
                          ])
                        ]),
                        createVNode("div", { class: "p-6" }, [
                          createVNode("div", {
                            class: "flex items-center text-xs mb-3 gap-3",
                            style: { "color": "var(--color-text-muted)" }
                          }, [
                            createVNode("span", { class: "flex items-center gap-1" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                })
                              ])),
                              createTextVNode(" " + toDisplayString(post.date), 1)
                            ]),
                            createVNode("span", { class: "flex items-center gap-1" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }),
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })
                              ])),
                              createTextVNode(" " + toDisplayString(post.views_count) + " Views ", 1)
                            ])
                          ]),
                          createVNode("h2", {
                            class: "text-xl font-bold mb-3 line-clamp-2 hover:text-yellow-600 transition",
                            style: { "color": "var(--color-primary)" }
                          }, toDisplayString(post.title), 1),
                          createVNode("p", {
                            class: "text-sm line-clamp-3 mb-4",
                            style: { "color": "var(--color-text-secondary)" }
                          }, toDisplayString(post.desc), 1),
                          createVNode("span", { class: "text-yellow-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" }, [
                            createTextVNode(" Baca Selengkapnya "),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                              })
                            ]))
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-12 rounded-xl shadow-sm border" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><svg class="w-16 h-16 mx-auto mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"${_scopeId}></path></svg><h3 class="text-lg font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Belum ada informasi</h3><p class="mt-1" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Coba sesuaikan filter pencarian anda.</p><button class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"${_scopeId}>Reset Filter</button></div>`);
            }
            if (__props.posts.links.length > 3) {
              _push2(`<div class="mt-10 flex justify-center text-sm"${_scopeId}><div class="flex flex-wrap justify-center gap-1.5 p-2 rounded-xl border shadow-sm" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><!--[-->`);
              ssrRenderList(__props.posts.links, (link, key) => {
                _push2(`<!--[-->`);
                if (link.url) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: link.url,
                    class: ["h-9 min-w-[36px] px-2 flex items-center justify-center rounded-lg transition text-xs font-bold", [
                      link.active ? "text-white shadow-md transform scale-105" : "hover:bg-gray-50",
                      !link.url && "opacity-50 cursor-not-allowed"
                    ]],
                    style: link.active ? "background-color: var(--color-primary);" : "color: var(--color-text-secondary);"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span class="h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Informasi Hukum")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Informasi Hukum")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", { class: "flex flex-col lg:flex-row gap-10" }, [
                  createVNode("div", {
                    class: ["w-full lg:w-1/4 shrink-0 space-y-6", { "hidden lg:block": !showMobileFilters.value }]
                  }, [
                    createVNode("div", {
                      class: "rounded-xl shadow-sm border overflow-hidden",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", {
                        class: "p-5 border-b flex justify-between items-center",
                        style: { "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold flex items-center gap-2",
                          style: { "color": "var(--color-primary)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-yellow-500",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            })
                          ])),
                          createTextVNode(" Filter Pencarian ")
                        ]),
                        createVNode("button", {
                          onClick: resetFilters,
                          class: "text-xs font-medium text-gray-400 hover:text-red-500 transition"
                        }, "Reset Filter")
                      ]),
                      createVNode("div", {
                        class: "p-5 border-b",
                        style: { "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h4", {
                          class: "font-bold text-sm mb-3",
                          style: { "color": "var(--color-primary)" }
                        }, "Kategori"),
                        createVNode("div", { class: "mb-3 relative" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 text-gray-400 absolute left-3 top-2.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                          ])),
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => searchCategory.value = $event,
                            placeholder: "Cari kategori...",
                            class: "w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, searchCategory.value]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.id,
                              class: "flex items-center justify-between group"
                            }, [
                              createVNode("label", { class: "flex items-center gap-3 cursor-pointer flex-1" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => selectedCategories.value = $event,
                                  value: category.slug,
                                  class: "rounded text-yellow-500 focus:ring-yellow-500/50",
                                  style: { "border-color": "var(--color-border-input)" }
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, selectedCategories.value]
                                ]),
                                createVNode("span", {
                                  class: "text-sm transition truncate max-w-[150px] group-hover:text-[var(--color-primary)]",
                                  style: { "color": "var(--color-text-secondary)" },
                                  title: category.name
                                }, toDisplayString(category.name), 9, ["title"])
                              ]),
                              createVNode("span", {
                                class: "text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition",
                                style: { "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-muted)" }
                              }, toDisplayString(category.posts_count || 0), 1)
                            ]);
                          }), 128)),
                          !searchCategory.value && __props.categories.length > 5 ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: ($event) => showAllCategories.value = !showAllCategories.value,
                            class: "text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"
                          }, [
                            createTextVNode(toDisplayString(showAllCategories.value ? "Sembunyikan" : "Lihat Selengkapnya") + " ", 1),
                            (openBlock(), createBlock("svg", {
                              class: ["w-3 h-3", { "rotate-180": showAllCategories.value }],
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M19 9l-7 7-7-7"
                              })
                            ], 2))
                          ], 8, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", {
                        class: "p-5 border-b",
                        style: { "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h4", {
                          class: "font-bold text-sm mb-3",
                          style: { "color": "var(--color-primary)" }
                        }, "Tag"),
                        createVNode("div", { class: "mb-3 relative" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 text-gray-400 absolute left-3 top-2.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                          ])),
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => searchTag.value = $event,
                            placeholder: "Cari tag...",
                            class: "w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, searchTag.value]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredTags.value, (tag) => {
                            return openBlock(), createBlock("div", {
                              key: tag.id,
                              class: "flex items-center justify-between group"
                            }, [
                              createVNode("label", { class: "flex items-center gap-3 cursor-pointer flex-1" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => selectedTags.value = $event,
                                  value: tag.slug,
                                  class: "rounded text-yellow-500 focus:ring-yellow-500/50",
                                  style: { "border-color": "var(--color-border-input)" }
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, selectedTags.value]
                                ]),
                                createVNode("span", {
                                  class: "text-sm transition truncate max-w-[150px] group-hover:text-[var(--color-primary)]",
                                  style: { "color": "var(--color-text-secondary)" },
                                  title: tag.name
                                }, toDisplayString(tag.name), 9, ["title"])
                              ]),
                              createVNode("span", {
                                class: "text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition",
                                style: { "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-muted)" }
                              }, toDisplayString(tag.posts_count || 0), 1)
                            ]);
                          }), 128)),
                          !searchTag.value && __props.tags.length > 5 ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: ($event) => showAllTags.value = !showAllTags.value,
                            class: "text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"
                          }, [
                            createTextVNode(toDisplayString(showAllTags.value ? "Sembunyikan" : "Lihat Selengkapnya") + " ", 1),
                            (openBlock(), createBlock("svg", {
                              class: ["w-3 h-3", { "rotate-180": showAllTags.value }],
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M19 9l-7 7-7-7"
                              })
                            ], 2))
                          ], 8, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ], 2),
                  createVNode("div", { class: "flex-1 w-full md:w-3/4" }, [
                    createVNode("div", {
                      class: "rounded-lg border p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", {
                        class: "font-medium mb-3 sm:mb-0",
                        style: { "color": "var(--color-text-secondary)" }
                      }, [
                        createTextVNode(" Menampilkan "),
                        createVNode("span", {
                          class: "font-bold",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(__props.posts.total), 1),
                        createTextVNode(" Hasil Pencarian ")
                      ]),
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", {
                          class: "text-sm",
                          style: { "color": "var(--color-text-muted)" }
                        }, "Urutkan:"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => sort.value = $event,
                          class: "rounded-md pl-3 pr-3 py-1 text-sm focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer",
                          style: { "background-color": "var(--color-bg-input)", "border-color": "var(--color-border-input)", "color": "var(--color-text-primary)" }
                        }, [
                          createVNode("option", { value: "newest" }, "Terbaru"),
                          createVNode("option", { value: "popular" }, "Terpopuler")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, sort.value]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mb-6 flex gap-3" }, [
                      createVNode("div", { class: "relative flex-1" }, [
                        createVNode("span", { class: "absolute inset-y-0 left-0 flex items-center pl-3" }, [
                          (openBlock(), createBlock("svg", {
                            class: "h-5 w-5 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                          ]))
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => search.value = $event,
                          placeholder: "Cari berita atau artikel...",
                          class: "w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500",
                          style: { "background-color": "var(--color-bg-input)", "border-color": "var(--color-border-input)", "color": "var(--color-text-primary)" }
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, search.value]
                        ])
                      ]),
                      createVNode("button", {
                        onClick: ($event) => showMobileFilters.value = !showMobileFilters.value,
                        class: ["lg:hidden px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:text-[#0F213A] hover:border-[#0F213A] transition flex items-center gap-2 shadow-sm", { "bg-gray-50 text-[#0F213A] border-[#0F213A]": showMobileFilters.value }]
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                          })
                        ])),
                        createVNode("span", { class: "hidden sm:inline font-medium" }, "Filter")
                      ], 10, ["onClick"])
                    ]),
                    __props.posts.data.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 md:grid-cols-2 gap-6"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.posts.data, (post) => {
                        return openBlock(), createBlock(unref(Link), {
                          key: post.id,
                          href: unref(route)("information.show", post.slug),
                          class: "group rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "aspect-video relative overflow-hidden",
                              style: { "background-color": "var(--color-bg-secondary)" }
                            }, [
                              post.image ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: unref(route)("posts.pathimage", post.id) || "https://via.placeholder.com/600x400?text=No+Image",
                                alt: post.title,
                                class: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
                              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "w-full h-full flex items-center justify-center text-gray-400"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-12 h-12",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  })
                                ]))
                              ])),
                              createVNode("div", { class: "absolute top-4 left-4" }, [
                                createVNode("span", { class: "bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm" }, toDisplayString(post.category ? post.category.name : "Umum"), 1)
                              ])
                            ]),
                            createVNode("div", { class: "p-6" }, [
                              createVNode("div", {
                                class: "flex items-center text-xs mb-3 gap-3",
                                style: { "color": "var(--color-text-muted)" }
                              }, [
                                createVNode("span", { class: "flex items-center gap-1" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    })
                                  ])),
                                  createTextVNode(" " + toDisplayString(post.date), 1)
                                ]),
                                createVNode("span", { class: "flex items-center gap-1" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    }),
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    })
                                  ])),
                                  createTextVNode(" " + toDisplayString(post.views_count) + " Views ", 1)
                                ])
                              ]),
                              createVNode("h2", {
                                class: "text-xl font-bold mb-3 line-clamp-2 hover:text-yellow-600 transition",
                                style: { "color": "var(--color-primary)" }
                              }, toDisplayString(post.title), 1),
                              createVNode("p", {
                                class: "text-sm line-clamp-3 mb-4",
                                style: { "color": "var(--color-text-secondary)" }
                              }, toDisplayString(post.desc), 1),
                              createVNode("span", { class: "text-yellow-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" }, [
                                createTextVNode(" Baca Selengkapnya "),
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                  })
                                ]))
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["href"]);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center py-12 rounded-xl shadow-sm border",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-16 h-16 mx-auto mb-4",
                        style: { "color": "var(--color-text-muted)" },
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        })
                      ])),
                      createVNode("h3", {
                        class: "text-lg font-medium",
                        style: { "color": "var(--color-text-primary)" }
                      }, "Belum ada informasi"),
                      createVNode("p", {
                        class: "mt-1",
                        style: { "color": "var(--color-text-secondary)" }
                      }, "Coba sesuaikan filter pencarian anda."),
                      createVNode("button", {
                        onClick: resetFilters,
                        class: "mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                      }, "Reset Filter")
                    ])),
                    __props.posts.links.length > 3 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "mt-10 flex justify-center text-sm"
                    }, [
                      createVNode("div", {
                        class: "flex flex-wrap justify-center gap-1.5 p-2 rounded-xl border shadow-sm",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.posts.links, (link, key) => {
                          return openBlock(), createBlock(Fragment, { key }, [
                            link.url ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: link.url,
                              class: ["h-9 min-w-[36px] px-2 flex items-center justify-center rounded-lg transition text-xs font-bold", [
                                link.active ? "text-white shadow-md transform scale-105" : "hover:bg-gray-50",
                                !link.url && "opacity-50 cursor-not-allowed"
                              ]],
                              style: link.active ? "background-color: var(--color-primary);" : "color: var(--color-text-secondary);",
                              innerHTML: link.label
                            }, null, 8, ["href", "class", "style", "innerHTML"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              innerHTML: link.label,
                              class: "h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"
                            }, null, 8, ["innerHTML"]))
                          ], 64);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Information/Index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    post: Object,
    relatedPosts: Array
  },
  setup(__props) {
    const props = __props;
    const keywords = computed(() => {
      const tags = props.post.tags?.map((t) => t.name) || [];
      return [...tags, "Berita Hukum", "JDIH UIN SGD"].join(", ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: __props.post.title,
        description: __props.post.desc,
        image: __props.post.image ? unref(route)("posts.pathimage", __props.post.id) : void 0,
        keywords: keywords.value,
        author: __props.post.author
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/informasi-hukum",
              class: "hover:text-[var(--color-accent-hover)]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Informasi Hukum`);
                } else {
                  return [
                    createTextVNode("Informasi Hukum")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium truncate max-w-xs" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(__props.post.title)}</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Detail ${ssrInterpolate(__props.post.category.name)}</h1></div></div><div class="py-12" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3"${_scopeId}><article class="rounded-2xl shadow-sm border overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}>`);
            if (__props.post.image) {
              _push2(`<div class="w-full h-64 md:h-96 relative" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><img${ssrRenderAttr("src", unref(route)("posts.pathimage", __props.post.id) || "https://via.placeholder.com/600x400?text=No+Image")}${ssrRenderAttr("alt", __props.post.title)} class="w-full h-full object-cover"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="p-6 md:p-10"${_scopeId}><div class="flex flex-wrap items-center gap-4 text-sm mb-6" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}><span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold"${_scopeId}>${ssrInterpolate(__props.post.category ? __props.post.category.name : "Umum")}</span><span class="flex items-center gap-1"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg> ${ssrInterpolate(__props.post.date)}</span><span class="flex items-center gap-1"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg> ${ssrInterpolate(__props.post.author)}</span><span class="flex items-center gap-1"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> ${ssrInterpolate(__props.post.views_count)} Views </span></div><h1 class="text-2xl md:text-4xl font-bold mb-8 leading-tight" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}>${ssrInterpolate(__props.post.title)}</h1><div class="prose prose-lg prose-yellow max-w-none" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${__props.post.content ?? ""}</div>`);
            if (__props.post.tags && __props.post.tags.length > 0) {
              _push2(`<div class="mt-10 pt-6 border-t" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="text-sm font-bold mb-3" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Tags:</h3><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.post.tags, (tag) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: tag.id,
                  href: unref(route)("information.index", { tag: tag.slug }),
                  class: "px-3 py-1 rounded-lg text-sm hover:text-yellow-700 transition cursor-default",
                  style: { "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-secondary)" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` #${ssrInterpolate(tag.name)}`);
                    } else {
                      return [
                        createTextVNode(" #" + toDisplayString(tag.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></article></div><div class="lg:w-1/3 space-y-8"${_scopeId}><div class="p-6 rounded-2xl shadow-sm border" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="flex items-center justify-between mb-6"${_scopeId}><h3 class="font-bold text-lg" style="${ssrRenderStyle({ "color": "var(--color-text-brand)" })}"${_scopeId}>Informasi Terkait</h3></div>`);
            if (__props.relatedPosts.length > 0) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.relatedPosts, (related) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: related.slug,
                  href: unref(route)("information.show", related.slug),
                  class: "flex gap-4 group"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="w-20 h-20 shrink-0 rounded-lg overflow-hidden relative" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId2}>`);
                      if (related.image) {
                        _push3(`<img${ssrRenderAttr("src", unref(route)("posts.pathimage", related.id) || "https://via.placeholder.com/600x400?text=No+Image")}${ssrRenderAttr("alt", related.title)} class="w-full h-full object-cover group-hover:scale-110 transition duration-500"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center"${_scopeId2}><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId2}></path></svg></div>`);
                      }
                      _push3(`</div><div${_scopeId2}><h4 class="text-sm font-bold line-clamp-2 leading-relaxed hover:text-[var(--color-accent-hover)] transition mb-1" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId2}>${ssrInterpolate(related.title)}</h4><span class="text-xs" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId2}>${ssrInterpolate(related.date)}</span></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "w-20 h-20 shrink-0 rounded-lg overflow-hidden relative",
                          style: { "background-color": "var(--color-bg-secondary)" }
                        }, [
                          related.image ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: unref(route)("posts.pathimage", related.id) || "https://via.placeholder.com/600x400?text=No+Image",
                            alt: related.title,
                            class: "w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-full h-full flex items-center justify-center"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-6 h-6 text-gray-400",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              })
                            ]))
                          ]))
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", {
                            class: "text-sm font-bold line-clamp-2 leading-relaxed hover:text-[var(--color-accent-hover)] transition mb-1",
                            style: { "color": "var(--color-primary)" }
                          }, toDisplayString(related.title), 1),
                          createVNode("span", {
                            class: "text-xs",
                            style: { "color": "var(--color-text-muted)" }
                          }, toDisplayString(related.date), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-gray-500 text-sm text-center py-4"${_scopeId}> Tidak ada informasi hukum terkait. </div>`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)]"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode(unref(Link), {
                      href: "/informasi-hukum",
                      class: "hover:text-[var(--color-accent-hover)]"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Informasi Hukum")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium truncate max-w-xs",
                      style: { "color": "var(--color-text-primary)" }
                    }, toDisplayString(__props.post.title), 1)
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Detail " + toDisplayString(__props.post.category.name), 1)
                ])
              ]),
              createVNode("div", {
                class: "py-12",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3" }, [
                      createVNode("article", {
                        class: "rounded-2xl shadow-sm border overflow-hidden",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        __props.post.image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full h-64 md:h-96 relative",
                          style: { "background-color": "var(--color-bg-secondary)" }
                        }, [
                          createVNode("img", {
                            src: unref(route)("posts.pathimage", __props.post.id) || "https://via.placeholder.com/600x400?text=No+Image",
                            alt: __props.post.title,
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src", "alt"])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "p-6 md:p-10" }, [
                          createVNode("div", {
                            class: "flex flex-wrap items-center gap-4 text-sm mb-6",
                            style: { "color": "var(--color-text-muted)" }
                          }, [
                            createVNode("span", { class: "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold" }, toDisplayString(__props.post.category ? __props.post.category.name : "Umum"), 1),
                            createVNode("span", { class: "flex items-center gap-1" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                })
                              ])),
                              createTextVNode(" " + toDisplayString(__props.post.date), 1)
                            ]),
                            createVNode("span", { class: "flex items-center gap-1" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                })
                              ])),
                              createTextVNode(" " + toDisplayString(__props.post.author), 1)
                            ]),
                            createVNode("span", { class: "flex items-center gap-1" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }),
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })
                              ])),
                              createTextVNode(" " + toDisplayString(__props.post.views_count) + " Views ", 1)
                            ])
                          ]),
                          createVNode("h1", {
                            class: "text-2xl md:text-4xl font-bold mb-8 leading-tight",
                            style: { "color": "var(--color-text-brand)" }
                          }, toDisplayString(__props.post.title), 1),
                          createVNode("div", {
                            class: "prose prose-lg prose-yellow max-w-none",
                            style: { "color": "var(--color-text-primary)" },
                            innerHTML: __props.post.content
                          }, null, 8, ["innerHTML"]),
                          __props.post.tags && __props.post.tags.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-10 pt-6 border-t",
                            style: { "border-color": "var(--color-border-light)" }
                          }, [
                            createVNode("h3", {
                              class: "text-sm font-bold mb-3",
                              style: { "color": "var(--color-text-primary)" }
                            }, "Tags:"),
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.post.tags, (tag) => {
                                return openBlock(), createBlock(unref(Link), {
                                  key: tag.id,
                                  href: unref(route)("information.index", { tag: tag.slug }),
                                  class: "px-3 py-1 rounded-lg text-sm hover:text-yellow-700 transition cursor-default",
                                  style: { "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-secondary)" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" #" + toDisplayString(tag.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode("div", {
                        class: "p-6 rounded-2xl shadow-sm border",
                        style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                          createVNode("h3", {
                            class: "font-bold text-lg",
                            style: { "color": "var(--color-text-brand)" }
                          }, "Informasi Terkait")
                        ]),
                        __props.relatedPosts.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-6"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.relatedPosts, (related) => {
                            return openBlock(), createBlock(unref(Link), {
                              key: related.slug,
                              href: unref(route)("information.show", related.slug),
                              class: "flex gap-4 group"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "w-20 h-20 shrink-0 rounded-lg overflow-hidden relative",
                                  style: { "background-color": "var(--color-bg-secondary)" }
                                }, [
                                  related.image ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: unref(route)("posts.pathimage", related.id) || "https://via.placeholder.com/600x400?text=No+Image",
                                    alt: related.title,
                                    class: "w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "w-full h-full flex items-center justify-center"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-6 h-6 text-gray-400",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      })
                                    ]))
                                  ]))
                                ]),
                                createVNode("div", null, [
                                  createVNode("h4", {
                                    class: "text-sm font-bold line-clamp-2 leading-relaxed hover:text-[var(--color-accent-hover)] transition mb-1",
                                    style: { "color": "var(--color-primary)" }
                                  }, toDisplayString(related.title), 1),
                                  createVNode("span", {
                                    class: "text-xs",
                                    style: { "color": "var(--color-text-muted)" }
                                  }, toDisplayString(related.date), 1)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["href"]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-gray-500 text-sm text-center py-4"
                        }, " Tidak ada informasi hukum terkait. "))
                      ]),
                      createVNode(_sfc_main$k)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Information/Show.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const selectedChar = ref("");
    const items = ref([]);
    const currentPage = ref(1);
    const lastPage = ref(1);
    const loading = ref(false);
    const total = ref(0);
    const alphabet = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
    const fetchData = async (page = 1, reset = false) => {
      if (loading.value) return;
      if (!reset && page > lastPage.value) return;
      loading.value = true;
      try {
        const params = new URLSearchParams();
        params.append("page", page);
        if (search.value) params.append("q", search.value);
        if (selectedChar.value) params.append("char", selectedChar.value);
        const response = await axios.get(`/api/legal-dictionary?${params.toString()}`);
        const data = response.data;
        if (reset) {
          items.value = data.data;
        } else {
          items.value = [...items.value, ...data.data];
        }
        currentPage.value = data.current_page;
        lastPage.value = data.last_page;
        total.value = data.total;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      fetchData(1, true);
    });
    const debouncedFetch = lodashExports.debounce(() => {
      currentPage.value = 1;
      fetchData(1, true);
    }, 300);
    watch([search, selectedChar], () => {
      debouncedFetch();
    });
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 200 && !loading.value && currentPage.value < lastPage.value) {
        fetchData(currentPage.value + 1, false);
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const selectChar = (char) => {
      if (selectedChar.value === char) {
        selectedChar.value = "";
      } else {
        selectedChar.value = char;
      }
    };
    const resetFilters = () => {
      search.value = "";
      selectedChar.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Kamus Hukum - JDIH UIN SGD",
        description: "Kamus istilah hukum lengkap untuk membantu memahami terminologi hukum di lingkungan UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}"${_scopeId}>Informasi Hukum</span><span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Kamus Hukum</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Kamus Hukum</h1><p class="mt-2" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Daftar istilah dan definisi hukum.</p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="rounded-xl shadow-sm border p-6 mb-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="relative mb-6"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId}><svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", search.value)} placeholder="Cari istilah..." class="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-input)", "border-color": "var(--color-border-input)", "color": "var(--color-text-primary)" })}"${_scopeId}></div><div class="flex flex-wrap gap-2 justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(alphabet, (char) => {
              _push2(`<button class="${ssrRenderClass([[
                selectedChar.value === char ? "text-white border-transparent" : "hover:text-yellow-600"
              ], "w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition duration-200 border"])}" style="${ssrRenderStyle(selectedChar.value === char ? "background-color: var(--color-primary);" : "background-color: var(--color-bg-secondary); border-color: var(--color-border-input); color: var(--color-text-secondary);")}"${_scopeId}>${ssrInterpolate(char)}</button>`);
            });
            _push2(`<!--]--></div></div>`);
            if (total.value > 0) {
              _push2(`<div class="mb-4 text-sm text-gray-500"${_scopeId}> Menampilkan ${ssrInterpolate(items.value.length)} dari ${ssrInterpolate(total.value)} istilah </div>`);
            } else {
              _push2(`<!---->`);
            }
            if (items.value.length > 0) {
              _push2(`<div class="flex flex-col gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (item) => {
                _push2(`<div class="rounded-xl shadow-sm border p-6 hover:shadow-md transition duration-300 group" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="text-lg font-bold mb-2 transition group-hover:text-yellow-600" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(item.title)}</h3><div class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>${item.description ?? ""}</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (loading.value) {
              _push2(`<div class="flex justify-center py-8"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><svg class="animate-spin h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg><span class="text-gray-500"${_scopeId}>Memuat data...</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!loading.value && items.value.length === 0) {
              _push2(`<div class="text-center py-16 rounded-xl shadow-sm border" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><svg class="w-16 h-16 mx-auto mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg><h3 class="text-lg font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Tidak ada istilah ditemukan</h3><p class="mt-1" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Coba kata kunci lain atau pilih abjad lain.</p><button class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"${_scopeId}> Reset Filter </button></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!loading.value && items.value.length > 0 && currentPage.value >= lastPage.value) {
              _push2(`<div class="text-center py-6 text-gray-400 text-sm"${_scopeId}> — Semua data telah dimuat — </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", { style: { "color": "var(--color-text-description)" } }, "Informasi Hukum"),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Kamus Hukum")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Kamus Hukum"),
                  createVNode("p", {
                    class: "mt-2",
                    style: { "color": "var(--color-text-secondary)" }
                  }, "Daftar istilah dan definisi hukum.")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", {
                  class: "rounded-xl shadow-sm border p-6 mb-8",
                  style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                }, [
                  createVNode("div", { class: "relative mb-6" }, [
                    createVNode("span", { class: "absolute inset-y-0 left-0 flex items-center pl-3" }, [
                      (openBlock(), createBlock("svg", {
                        class: "h-5 w-5 text-gray-400",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        })
                      ]))
                    ]),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => search.value = $event,
                      placeholder: "Cari istilah...",
                      class: "w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition",
                      style: { "background-color": "var(--color-bg-input)", "border-color": "var(--color-border-input)", "color": "var(--color-text-primary)" }
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, search.value]
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-2 justify-center" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(alphabet, (char) => {
                      return createVNode("button", {
                        key: char,
                        onClick: ($event) => selectChar(char),
                        class: ["w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition duration-200 border", [
                          selectedChar.value === char ? "text-white border-transparent" : "hover:text-yellow-600"
                        ]],
                        style: selectedChar.value === char ? "background-color: var(--color-primary);" : "background-color: var(--color-bg-secondary); border-color: var(--color-border-input); color: var(--color-text-secondary);"
                      }, toDisplayString(char), 15, ["onClick"]);
                    }), 64))
                  ])
                ]),
                total.value > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-4 text-sm text-gray-500"
                }, " Menampilkan " + toDisplayString(items.value.length) + " dari " + toDisplayString(total.value) + " istilah ", 1)) : createCommentVNode("", true),
                items.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex flex-col gap-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "rounded-xl shadow-sm border p-6 hover:shadow-md transition duration-300 group",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("h3", {
                        class: "text-lg font-bold mb-2 transition group-hover:text-yellow-600",
                        style: { "color": "var(--color-primary)" }
                      }, toDisplayString(item.title), 1),
                      createVNode("div", {
                        class: "text-sm leading-relaxed",
                        style: { "color": "var(--color-text-secondary)" },
                        innerHTML: item.description
                      }, null, 8, ["innerHTML"])
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                loading.value ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex justify-center py-8"
                }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    (openBlock(), createBlock("svg", {
                      class: "animate-spin h-6 w-6 text-yellow-500",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }),
                      createVNode("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      })
                    ])),
                    createVNode("span", { class: "text-gray-500" }, "Memuat data...")
                  ])
                ])) : createCommentVNode("", true),
                !loading.value && items.value.length === 0 ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "text-center py-16 rounded-xl shadow-sm border",
                  style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-16 h-16 mx-auto mb-4",
                    style: { "color": "var(--color-text-muted)" },
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    })
                  ])),
                  createVNode("h3", {
                    class: "text-lg font-medium",
                    style: { "color": "var(--color-text-primary)" }
                  }, "Tidak ada istilah ditemukan"),
                  createVNode("p", {
                    class: "mt-1",
                    style: { "color": "var(--color-text-secondary)" }
                  }, "Coba kata kunci lain atau pilih abjad lain."),
                  createVNode("button", {
                    onClick: resetFilters,
                    class: "mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                  }, " Reset Filter ")
                ])) : createCommentVNode("", true),
                !loading.value && items.value.length > 0 && currentPage.value >= lastPage.value ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "text-center py-6 text-gray-400 text-sm"
                }, " — Semua data telah dimuat — ")) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/LegalDictionary/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    legalProducts: Object,
    options: Object,
    // types, subjects, statuses
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const showMobileFilters = ref(false);
    const filtersState = ref({
      search: props.filters?.search || "",
      year: props.filters?.year || "",
      type: props.filters?.type ? String(props.filters.type).split(",") : [],
      category: props.filters?.category ? String(props.filters.category).split(",") : [],
      // Added category
      subject: props.filters?.subject ? String(props.filters.subject).split(",") : [],
      status: props.filters?.status ? String(props.filters.status).split(",") : [],
      sort: props.filters?.sort || "Terbaru"
    });
    const searchType = ref("");
    const searchCategory = ref("");
    const searchSubject = ref("");
    const showAllTypes = ref(false);
    const showAllCategories = ref(false);
    const showAllSubjects = ref(false);
    const filteredTypes = computed(() => {
      let list = props.options.types || [];
      if (searchType.value) {
        list = list.filter((t) => t.name.toLowerCase().includes(searchType.value.toLowerCase()));
      }
      return showAllTypes.value ? list : list.slice(0, 5);
    });
    const filteredCategories = computed(() => {
      let list = props.options.categories || [];
      if (searchCategory.value) {
        list = list.filter((c) => c.name.toLowerCase().includes(searchCategory.value.toLowerCase()));
      }
      return showAllCategories.value ? list : list.slice(0, 5);
    });
    const filteredSubjects = computed(() => {
      let list = props.options.subjects || [];
      if (searchSubject.value) {
        list = list.filter((s) => s.name.toLowerCase().includes(searchSubject.value.toLowerCase()));
      }
      return showAllSubjects.value ? list : list.slice(0, 5);
    });
    const updateParams = lodashExports.debounce(() => {
      router.get(
        route("produk-hukum.index"),
        {
          search: filtersState.value.search,
          year: filtersState.value.year,
          search: filtersState.value.search,
          year: filtersState.value.year,
          type: filtersState.value.type.join(","),
          category: filtersState.value.category.join(","),
          // Added category
          subject: filtersState.value.subject.join(","),
          status: filtersState.value.status.join(","),
          sort: filtersState.value.sort
        },
        { preserveState: true, replace: true }
      );
    }, 500);
    watch(filtersState, updateParams, { deep: true });
    const resetFilters = () => {
      filtersState.value = {
        search: "",
        year: "",
        type: [],
        category: [],
        // Added category
        subject: [],
        status: [],
        sort: "Terbaru"
      };
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      return new Date(dateString).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Produk Hukum - JDIH UIN Sunan Gunung Djati",
        description: "Cari dan temukan produk hukum, peraturan, dan keputusan di lingkungan UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-29a9a675${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-29a9a675${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}" data-v-29a9a675${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}" data-v-29a9a675${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}" data-v-29a9a675${_scopeId}>Pencarian Produk Hukum</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-29a9a675${_scopeId}>Pencarian Produk Hukum</h1></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" data-v-29a9a675${_scopeId}><div class="flex flex-col lg:flex-row gap-10" data-v-29a9a675${_scopeId}><div class="${ssrRenderClass([{ "hidden lg:block": !showMobileFilters.value }, "w-full lg:w-1/4 shrink-0 space-y-6"])}" data-v-29a9a675${_scopeId}><div class="rounded-xl shadow-sm border overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-29a9a675${_scopeId}><div class="p-5 border-b flex justify-between items-center" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" })}" data-v-29a9a675${_scopeId}><h3 class="font-bold flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-29a9a675${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" data-v-29a9a675${_scopeId}></path></svg> Filter Pencarian </h3><button class="text-xs font-medium text-gray-400 hover:text-red-500 transition" data-v-29a9a675${_scopeId}>Reset Filter</button></div><div class="p-5 border-b" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}" data-v-29a9a675${_scopeId}><h4 class="font-bold text-sm mb-3" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-29a9a675${_scopeId}>Tahun</h4><input type="number"${ssrRenderAttr("value", filtersState.value.year)} placeholder="Contoh: 2024" class="w-full pl-3 pr-3 py-1 text-sm rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:text-gray-400 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border)", "color": "var(--color-text-primary)" })}" data-v-29a9a675${_scopeId}></div><div class="p-5 border-b" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}" data-v-29a9a675${_scopeId}><h4 class="font-bold text-sm mb-3" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-29a9a675${_scopeId}>Jenis Produk Hukum </h4><div class="mb-3 relative" data-v-29a9a675${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-29a9a675${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchType.value)} placeholder="Cari jenis..." class="w-full pl-9 pr-3 py-2 text-xs rounded-md focus:ring-yellow-500 focus:border-yellow-500" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border)", "color": "var(--color-text-primary)" })}" data-v-29a9a675${_scopeId}></div><div class="space-y-2" data-v-29a9a675${_scopeId}><!--[-->`);
            ssrRenderList(filteredTypes.value, (type) => {
              _push2(`<div class="flex items-center justify-between group" data-v-29a9a675${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1" data-v-29a9a675${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.type) ? ssrLooseContain(filtersState.value.type, type.name) : filtersState.value.type) ? " checked" : ""}${ssrRenderAttr("value", type.name)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" data-v-29a9a675${_scopeId}><span class="text-sm group-hover:text-[var(--color-primary)] transition truncate max-w-[150px]" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${ssrRenderAttr("title", type.name)} data-v-29a9a675${_scopeId}>${ssrInterpolate(type.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" data-v-29a9a675${_scopeId}>${ssrInterpolate(type.count)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchType.value && __props.options.types.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1" data-v-29a9a675${_scopeId}>${ssrInterpolate(showAllTypes.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllTypes.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-29a9a675${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="p-5 border-b" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}" data-v-29a9a675${_scopeId}><h4 class="font-bold text-sm mb-3" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-29a9a675${_scopeId}>Kategori</h4><div class="mb-3 relative" data-v-29a9a675${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-29a9a675${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchCategory.value)} placeholder="Cari kategori..." class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50" data-v-29a9a675${_scopeId}></div><div class="space-y-2" data-v-29a9a675${_scopeId}><!--[-->`);
            ssrRenderList(filteredCategories.value, (category) => {
              _push2(`<div class="flex items-center justify-between group" data-v-29a9a675${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1" data-v-29a9a675${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.category) ? ssrLooseContain(filtersState.value.category, category.name) : filtersState.value.category) ? " checked" : ""}${ssrRenderAttr("value", category.name)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" data-v-29a9a675${_scopeId}><span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"${ssrRenderAttr("title", category.name)} data-v-29a9a675${_scopeId}>${ssrInterpolate(category.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" data-v-29a9a675${_scopeId}>${ssrInterpolate(category.count)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchCategory.value && __props.options.categories?.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1" data-v-29a9a675${_scopeId}>${ssrInterpolate(showAllCategories.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllCategories.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-29a9a675${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="p-5 border-b border-gray-100" data-v-29a9a675${_scopeId}><h4 class="font-bold text-sm text-[#0F213A] mb-3" data-v-29a9a675${_scopeId}>Subjek</h4><div class="mb-3 relative" data-v-29a9a675${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-29a9a675${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchSubject.value)} placeholder="Cari subjek..." class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50" data-v-29a9a675${_scopeId}></div><div class="space-y-2" data-v-29a9a675${_scopeId}><!--[-->`);
            ssrRenderList(filteredSubjects.value, (subject) => {
              _push2(`<div class="flex items-center justify-between group" data-v-29a9a675${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1" data-v-29a9a675${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.subject) ? ssrLooseContain(filtersState.value.subject, subject.name) : filtersState.value.subject) ? " checked" : ""}${ssrRenderAttr("value", subject.name)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" data-v-29a9a675${_scopeId}><span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"${ssrRenderAttr("title", subject.name)} data-v-29a9a675${_scopeId}>${ssrInterpolate(subject.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" data-v-29a9a675${_scopeId}>${ssrInterpolate(subject.count)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchSubject.value && __props.options.subjects.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1" data-v-29a9a675${_scopeId}>${ssrInterpolate(showAllSubjects.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllSubjects.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-29a9a675${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="p-5" data-v-29a9a675${_scopeId}><h4 class="font-bold text-sm text-[#0F213A] mb-3" data-v-29a9a675${_scopeId}>Status Produk</h4><div class="space-y-2" data-v-29a9a675${_scopeId}><!--[-->`);
            ssrRenderList(__props.options.statuses, (status) => {
              _push2(`<div class="flex items-center justify-between group" data-v-29a9a675${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1" data-v-29a9a675${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.status) ? ssrLooseContain(filtersState.value.status, status.value) : filtersState.value.status) ? " checked" : ""}${ssrRenderAttr("value", status.value)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" data-v-29a9a675${_scopeId}><span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition" data-v-29a9a675${_scopeId}>${ssrInterpolate(status.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" data-v-29a9a675${_scopeId}>${ssrInterpolate(status.count)}</span></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="flex-1" data-v-29a9a675${_scopeId}><div class="rounded-lg border p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-29a9a675${_scopeId}><div class="font-medium mb-3 sm:mb-0" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}" data-v-29a9a675${_scopeId}> Menampilkan <span class="font-bold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}" data-v-29a9a675${_scopeId}>${ssrInterpolate(props.legalProducts.total)}</span> Hasil Pencarian </div><div class="flex items-center gap-3" data-v-29a9a675${_scopeId}><span class="text-gray-400 text-sm" data-v-29a9a675${_scopeId}>Urutkan:</span><select class="rounded-md pl-3 pr-3 py-1 text-sm focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border)", "color": "var(--color-text-primary)" })}" data-v-29a9a675${_scopeId}><option data-v-29a9a675${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.sort) ? ssrLooseContain(filtersState.value.sort, null) : ssrLooseEqual(filtersState.value.sort, null)) ? " selected" : ""}${_scopeId}>Terbaru</option><option data-v-29a9a675${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.sort) ? ssrLooseContain(filtersState.value.sort, null) : ssrLooseEqual(filtersState.value.sort, null)) ? " selected" : ""}${_scopeId}>Terpopuler</option></select></div></div><div class="mb-6 flex gap-3" data-v-29a9a675${_scopeId}><div class="relative flex-1" data-v-29a9a675${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center pl-3" data-v-29a9a675${_scopeId}><svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-29a9a675${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", filtersState.value.search)} placeholder="Cari berdasarkan judul atau nomor peraturan..." class="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border)", "color": "var(--color-text-primary)" })}" data-v-29a9a675${_scopeId}></div><button class="${ssrRenderClass([{ "active-filter": showMobileFilters.value }, "lg:hidden px-4 py-2 border rounded-lg transition flex items-center gap-2 shadow-sm mobile-filter-btn"])}" data-v-29a9a675${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" data-v-29a9a675${_scopeId}></path></svg><span class="hidden sm:inline font-medium" data-v-29a9a675${_scopeId}>Filter</span></button></div><div class="space-y-4" data-v-29a9a675${_scopeId}><!--[-->`);
            ssrRenderList(props.legalProducts.data, (item) => {
              _push2(`<div class="rounded-xl p-6 border shadow-sm hover:shadow-md transition group relative overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}" data-v-29a9a675${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("produk-hukum.show", item.slug),
                class: "absolute inset-0 z-10"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex gap-5 relative z-20 pointer-events-none" data-v-29a9a675${_scopeId}><div class="shrink-0 hidden sm:block" data-v-29a9a675${_scopeId}>`);
              if (item.cover_image) {
                _push2(`<img${ssrRenderAttr("src", `/storage/${item.cover_image}`)}${ssrRenderAttr("alt", item.title)} class="w-12 h-12 rounded-lg object-cover bg-gray-50 shadow-sm transition group-hover:shadow-md border border-gray-100" data-v-29a9a675${_scopeId}>`);
              } else {
                _push2(`<div class="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition" data-v-29a9a675${_scopeId}><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-29a9a675${_scopeId}></path></svg></div>`);
              }
              _push2(`</div><div class="flex-1" data-v-29a9a675${_scopeId}><div class="flex flex-wrap items-center gap-2 mb-2" data-v-29a9a675${_scopeId}><span class="bg-yellow-400 text-[#0F213A] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide" data-v-29a9a675${_scopeId}>${ssrInterpolate(item.type?.name || "Dokumen")}</span><span class="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded" data-v-29a9a675${_scopeId}>${ssrInterpolate(item.year)}</span><div class="ml-auto" data-v-29a9a675${_scopeId}>`);
              if (item.status === "active" || item.status === "Berlaku") {
                _push2(`<span class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" data-v-29a9a675${_scopeId}><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-29a9a675${_scopeId}></path></svg> Berlaku </span>`);
              } else {
                _push2(`<span class="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" data-v-29a9a675${_scopeId}><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-29a9a675${_scopeId}></path></svg> Tidak Berlaku </span>`);
              }
              _push2(`</div></div><h3 class="text-lg font-bold leading-snug mb-3 group-hover:text-yellow-600 transition pointer-events-auto" data-v-29a9a675${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("produk-hukum.show", item.slug),
                style: { "color": "var(--color-primary)" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</h3><div class="flex flex-wrap gap-y-2 gap-x-6 text-xs text-gray-500 font-medium" data-v-29a9a675${_scopeId}><span class="flex items-center gap-1.5" data-v-29a9a675${_scopeId}><span class="text-gray-300" data-v-29a9a675${_scopeId}>#</span> Nomor: ${ssrInterpolate(item.number)}</span><span class="flex items-center gap-1.5" data-v-29a9a675${_scopeId}><svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-29a9a675${_scopeId}></path></svg> ${ssrInterpolate(formatDate(item.published_date))}</span><span class="flex items-center gap-1.5" data-v-29a9a675${_scopeId}><svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-29a9a675${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-29a9a675${_scopeId}></path></svg> ${ssrInterpolate(item.views_count || 0)} Dilihat </span></div><div class="mt-4 flex justify-end pointer-events-auto" data-v-29a9a675${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("produk-hukum.show", item.slug),
                class: "text-sm font-bold border px-4 py-2 rounded-lg hover:text-white transition flex items-center gap-2",
                style: { "color": "var(--color-primary)", "border-color": "var(--color-border)" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lihat Detail <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-29a9a675${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-29a9a675${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      createTextVNode(" Lihat Detail "),
                      (openBlock(), createBlock("svg", {
                        class: "w-4 h-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M14 5l7 7m0 0l-7 7m7-7H3"
                        })
                      ]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
            if (props.legalProducts.links.length > 3) {
              _push2(`<div class="mt-10 flex justify-center text-sm" data-v-29a9a675${_scopeId}><div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm" data-v-29a9a675${_scopeId}><!--[-->`);
              ssrRenderList(props.legalProducts.links, (link, key) => {
                _push2(`<!--[-->`);
                if (link.url) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: link.url,
                    class: ["h-9 min-w-[36px] px-2 flex items-center justify-center rounded-lg transition text-xs font-bold", [
                      link.active ? "bg-[#0F213A] text-white shadow-md transform scale-105" : "text-gray-500 hover:bg-gray-50 hover:text-[#0F213A]",
                      !link.url && "opacity-50 cursor-not-allowed"
                    ]]
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span class="h-9 min-w-[36px] px-2 flex items-center justify-center" style="${ssrRenderStyle({ "color": "var(--color-border)" })}" data-v-29a9a675${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Pencarian Produk Hukum")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Pencarian Produk Hukum")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", { class: "flex flex-col lg:flex-row gap-10" }, [
                  createVNode("div", {
                    class: ["w-full lg:w-1/4 shrink-0 space-y-6", { "hidden lg:block": !showMobileFilters.value }]
                  }, [
                    createVNode("div", {
                      class: "rounded-xl shadow-sm border overflow-hidden",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", {
                        class: "p-5 border-b flex justify-between items-center",
                        style: { "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h3", {
                          class: "font-bold flex items-center gap-2",
                          style: { "color": "var(--color-primary)" }
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-yellow-500",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                            })
                          ])),
                          createTextVNode(" Filter Pencarian ")
                        ]),
                        createVNode("button", {
                          onClick: resetFilters,
                          class: "text-xs font-medium text-gray-400 hover:text-red-500 transition"
                        }, "Reset Filter")
                      ]),
                      createVNode("div", {
                        class: "p-5 border-b",
                        style: { "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h4", {
                          class: "font-bold text-sm mb-3",
                          style: { "color": "var(--color-primary)" }
                        }, "Tahun"),
                        withDirectives(createVNode("input", {
                          type: "number",
                          "onUpdate:modelValue": ($event) => filtersState.value.year = $event,
                          placeholder: "Contoh: 2024",
                          class: "w-full pl-3 pr-3 py-1 text-sm rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:text-gray-400 transition",
                          style: { "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border)", "color": "var(--color-text-primary)" }
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, filtersState.value.year]
                        ])
                      ]),
                      createVNode("div", {
                        class: "p-5 border-b",
                        style: { "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h4", {
                          class: "font-bold text-sm mb-3",
                          style: { "color": "var(--color-primary)" }
                        }, "Jenis Produk Hukum "),
                        createVNode("div", { class: "mb-3 relative" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 text-gray-400 absolute left-3 top-2.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                          ])),
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => searchType.value = $event,
                            placeholder: "Cari jenis...",
                            class: "w-full pl-9 pr-3 py-2 text-xs rounded-md focus:ring-yellow-500 focus:border-yellow-500",
                            style: { "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border)", "color": "var(--color-text-primary)" }
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, searchType.value]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredTypes.value, (type) => {
                            return openBlock(), createBlock("div", {
                              key: type.id,
                              class: "flex items-center justify-between group"
                            }, [
                              createVNode("label", { class: "flex items-center gap-3 cursor-pointer flex-1" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => filtersState.value.type = $event,
                                  value: type.name,
                                  class: "rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50"
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, filtersState.value.type]
                                ]),
                                createVNode("span", {
                                  class: "text-sm group-hover:text-[var(--color-primary)] transition truncate max-w-[150px]",
                                  style: { "color": "var(--color-text-secondary)" },
                                  title: type.name
                                }, toDisplayString(type.name), 9, ["title"])
                              ]),
                              createVNode("span", { class: "bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" }, toDisplayString(type.count), 1)
                            ]);
                          }), 128)),
                          !searchType.value && __props.options.types.length > 5 ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: ($event) => showAllTypes.value = !showAllTypes.value,
                            class: "text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"
                          }, [
                            createTextVNode(toDisplayString(showAllTypes.value ? "Sembunyikan" : "Lihat Selengkapnya") + " ", 1),
                            (openBlock(), createBlock("svg", {
                              class: ["w-3 h-3", { "rotate-180": showAllTypes.value }],
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M19 9l-7 7-7-7"
                              })
                            ], 2))
                          ], 8, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", {
                        class: "p-5 border-b",
                        style: { "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("h4", {
                          class: "font-bold text-sm mb-3",
                          style: { "color": "var(--color-primary)" }
                        }, "Kategori"),
                        createVNode("div", { class: "mb-3 relative" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 text-gray-400 absolute left-3 top-2.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                          ])),
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => searchCategory.value = $event,
                            placeholder: "Cari kategori...",
                            class: "w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, searchCategory.value]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredCategories.value, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.id,
                              class: "flex items-center justify-between group"
                            }, [
                              createVNode("label", { class: "flex items-center gap-3 cursor-pointer flex-1" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => filtersState.value.category = $event,
                                  value: category.name,
                                  class: "rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50"
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, filtersState.value.category]
                                ]),
                                createVNode("span", {
                                  class: "text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]",
                                  title: category.name
                                }, toDisplayString(category.name), 9, ["title"])
                              ]),
                              createVNode("span", { class: "bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" }, toDisplayString(category.count), 1)
                            ]);
                          }), 128)),
                          !searchCategory.value && __props.options.categories?.length > 5 ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: ($event) => showAllCategories.value = !showAllCategories.value,
                            class: "text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"
                          }, [
                            createTextVNode(toDisplayString(showAllCategories.value ? "Sembunyikan" : "Lihat Selengkapnya") + " ", 1),
                            (openBlock(), createBlock("svg", {
                              class: ["w-3 h-3", { "rotate-180": showAllCategories.value }],
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M19 9l-7 7-7-7"
                              })
                            ], 2))
                          ], 8, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "p-5 border-b border-gray-100" }, [
                        createVNode("h4", { class: "font-bold text-sm text-[#0F213A] mb-3" }, "Subjek"),
                        createVNode("div", { class: "mb-3 relative" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 text-gray-400 absolute left-3 top-2.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                          ])),
                          withDirectives(createVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": ($event) => searchSubject.value = $event,
                            placeholder: "Cari subjek...",
                            class: "w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-md focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, searchSubject.value]
                          ])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredSubjects.value, (subject) => {
                            return openBlock(), createBlock("div", {
                              key: subject.id,
                              class: "flex items-center justify-between group"
                            }, [
                              createVNode("label", { class: "flex items-center gap-3 cursor-pointer flex-1" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => filtersState.value.subject = $event,
                                  value: subject.name,
                                  class: "rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50"
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, filtersState.value.subject]
                                ]),
                                createVNode("span", {
                                  class: "text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]",
                                  title: subject.name
                                }, toDisplayString(subject.name), 9, ["title"])
                              ]),
                              createVNode("span", { class: "bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" }, toDisplayString(subject.count), 1)
                            ]);
                          }), 128)),
                          !searchSubject.value && __props.options.subjects.length > 5 ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: ($event) => showAllSubjects.value = !showAllSubjects.value,
                            class: "text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"
                          }, [
                            createTextVNode(toDisplayString(showAllSubjects.value ? "Sembunyikan" : "Lihat Selengkapnya") + " ", 1),
                            (openBlock(), createBlock("svg", {
                              class: ["w-3 h-3", { "rotate-180": showAllSubjects.value }],
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M19 9l-7 7-7-7"
                              })
                            ], 2))
                          ], 8, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "p-5" }, [
                        createVNode("h4", { class: "font-bold text-sm text-[#0F213A] mb-3" }, "Status Produk"),
                        createVNode("div", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.options.statuses, (status) => {
                            return openBlock(), createBlock("div", {
                              key: status.value,
                              class: "flex items-center justify-between group"
                            }, [
                              createVNode("label", { class: "flex items-center gap-3 cursor-pointer flex-1" }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => filtersState.value.status = $event,
                                  value: status.value,
                                  class: "rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50"
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, filtersState.value.status]
                                ]),
                                createVNode("span", { class: "text-gray-600 text-sm group-hover:text-[#0F213A] transition" }, toDisplayString(status.name), 1)
                              ]),
                              createVNode("span", { class: "bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" }, toDisplayString(status.count), 1)
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ], 2),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", {
                      class: "rounded-lg border p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", {
                        class: "font-medium mb-3 sm:mb-0",
                        style: { "color": "var(--color-text-secondary)" }
                      }, [
                        createTextVNode(" Menampilkan "),
                        createVNode("span", {
                          class: "font-bold",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(props.legalProducts.total), 1),
                        createTextVNode(" Hasil Pencarian ")
                      ]),
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", { class: "text-gray-400 text-sm" }, "Urutkan:"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => filtersState.value.sort = $event,
                          class: "rounded-md pl-3 pr-3 py-1 text-sm focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer",
                          style: { "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border)", "color": "var(--color-text-primary)" }
                        }, [
                          createVNode("option", null, "Terbaru"),
                          createVNode("option", null, "Terpopuler")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, filtersState.value.sort]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mb-6 flex gap-3" }, [
                      createVNode("div", { class: "relative flex-1" }, [
                        createVNode("span", { class: "absolute inset-y-0 left-0 flex items-center pl-3" }, [
                          (openBlock(), createBlock("svg", {
                            class: "h-5 w-5 text-gray-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                          ]))
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => filtersState.value.search = $event,
                          placeholder: "Cari berdasarkan judul atau nomor peraturan...",
                          class: "w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border)", "color": "var(--color-text-primary)" }
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, filtersState.value.search]
                        ])
                      ]),
                      createVNode("button", {
                        onClick: ($event) => showMobileFilters.value = !showMobileFilters.value,
                        class: ["lg:hidden px-4 py-2 border rounded-lg transition flex items-center gap-2 shadow-sm mobile-filter-btn", { "active-filter": showMobileFilters.value }]
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                          })
                        ])),
                        createVNode("span", { class: "hidden sm:inline font-medium" }, "Filter")
                      ], 10, ["onClick"])
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.legalProducts.data, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: "rounded-xl p-6 border shadow-sm hover:shadow-md transition group relative overflow-hidden",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                        }, [
                          createVNode(unref(Link), {
                            href: unref(route)("produk-hukum.show", item.slug),
                            class: "absolute inset-0 z-10"
                          }, null, 8, ["href"]),
                          createVNode("div", { class: "flex gap-5 relative z-20 pointer-events-none" }, [
                            createVNode("div", { class: "shrink-0 hidden sm:block" }, [
                              item.cover_image ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: `/storage/${item.cover_image}`,
                                alt: item.title,
                                class: "w-12 h-12 rounded-lg object-cover bg-gray-50 shadow-sm transition group-hover:shadow-md border border-gray-100"
                              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  })
                                ]))
                              ]))
                            ]),
                            createVNode("div", { class: "flex-1" }, [
                              createVNode("div", { class: "flex flex-wrap items-center gap-2 mb-2" }, [
                                createVNode("span", { class: "bg-yellow-400 text-[#0F213A] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide" }, toDisplayString(item.type?.name || "Dokumen"), 1),
                                createVNode("span", { class: "bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded" }, toDisplayString(item.year), 1),
                                createVNode("div", { class: "ml-auto" }, [
                                  item.status === "active" || item.status === "Berlaku" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-3 h-3",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M5 13l4 4L19 7"
                                      })
                                    ])),
                                    createTextVNode(" Berlaku ")
                                  ])) : (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-3 h-3",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                      })
                                    ])),
                                    createTextVNode(" Tidak Berlaku ")
                                  ]))
                                ])
                              ]),
                              createVNode("h3", { class: "text-lg font-bold leading-snug mb-3 group-hover:text-yellow-600 transition pointer-events-auto" }, [
                                createVNode(unref(Link), {
                                  href: unref(route)("produk-hukum.show", item.slug),
                                  style: { "color": "var(--color-primary)" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              createVNode("div", { class: "flex flex-wrap gap-y-2 gap-x-6 text-xs text-gray-500 font-medium" }, [
                                createVNode("span", { class: "flex items-center gap-1.5" }, [
                                  createVNode("span", { class: "text-gray-300" }, "#"),
                                  createTextVNode(" Nomor: " + toDisplayString(item.number), 1)
                                ]),
                                createVNode("span", { class: "flex items-center gap-1.5" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-4 h-4 text-gray-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    })
                                  ])),
                                  createTextVNode(" " + toDisplayString(formatDate(item.published_date)), 1)
                                ]),
                                createVNode("span", { class: "flex items-center gap-1.5" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-4 h-4 text-gray-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    }),
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    })
                                  ])),
                                  createTextVNode(" " + toDisplayString(item.views_count || 0) + " Dilihat ", 1)
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 flex justify-end pointer-events-auto" }, [
                                createVNode(unref(Link), {
                                  href: unref(route)("produk-hukum.show", item.slug),
                                  class: "text-sm font-bold border px-4 py-2 rounded-lg hover:text-white transition flex items-center gap-2",
                                  style: { "color": "var(--color-primary)", "border-color": "var(--color-border)" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Lihat Detail "),
                                    (openBlock(), createBlock("svg", {
                                      class: "w-4 h-4",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                      })
                                    ]))
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ])
                        ]);
                      }), 128))
                    ]),
                    props.legalProducts.links.length > 3 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-10 flex justify-center text-sm"
                    }, [
                      createVNode("div", { class: "flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.legalProducts.links, (link, key) => {
                          return openBlock(), createBlock(Fragment, { key }, [
                            link.url ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: link.url,
                              class: ["h-9 min-w-[36px] px-2 flex items-center justify-center rounded-lg transition text-xs font-bold", [
                                link.active ? "bg-[#0F213A] text-white shadow-md transform scale-105" : "text-gray-500 hover:bg-gray-50 hover:text-[#0F213A]",
                                !link.url && "opacity-50 cursor-not-allowed"
                              ]],
                              innerHTML: link.label
                            }, null, 8, ["href", "class", "innerHTML"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              innerHTML: link.label,
                              class: "h-9 min-w-[36px] px-2 flex items-center justify-center",
                              style: { "color": "var(--color-border)" }
                            }, null, 8, ["innerHTML"]))
                          ], 64);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ProdukHukum/Index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-29a9a675"]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    legalProduct: Object,
    relatedDocuments: Array,
    links: Array,
    ratingStats: Object
    // { average: 4.5, count: 10 }
  },
  setup(__props) {
    const props = __props;
    const cleanDescription = computed(() => {
      if (!props.legalProduct.abstract) return "";
      return props.legalProduct.abstract.replace(/<[^>]*>/g, "").substring(0, 160);
    });
    const keywords = computed(() => {
      const subjects = props.legalProduct.subjects?.map((s) => s.name) || [];
      return [...subjects, "JDIH", "Hukum", props.legalProduct.type?.name].join(", ");
    });
    const showPreviewModal = ref(false);
    const showRatingModal = ref(false);
    const previewUrl = ref("");
    const ratingForm = useForm({
      rating: 0,
      feedback: ""
    });
    const openPreview = () => {
      if (props.legalProduct.file_path) {
        previewUrl.value = route("produk-hukum.preview", props.legalProduct.slug);
      } else if (props.legalProduct.link) {
        previewUrl.value = props.legalProduct.link;
      }
      showPreviewModal.value = true;
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    };
    const isEmptyHtml = (html) => {
      if (!html) return true;
      const cleanText = html.replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, "").trim();
      return cleanText === "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SeoHead = resolveComponent("SeoHead");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SeoHead, {
        title: __props.legalProduct.title,
        description: cleanDescription.value,
        keywords: keywords.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk-hukum",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Produk Hukum `);
                } else {
                  return [
                    createTextVNode("Produk Hukum ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="truncate max-w-[200px]" style="${ssrRenderStyle({ "color": "var(--color-text-description)" })}"${_scopeId}>${ssrInterpolate(__props.legalProduct.type?.name || "Dokumen")}</span><span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Detail</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Detail</h1></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-3 gap-10"${_scopeId}><div class="lg:col-span-2 space-y-8"${_scopeId}><div class="rounded-xl shadow-sm border p-8 relative overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-16 -mt-16 z-0" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}></div><div class="relative z-10"${_scopeId}><div class="flex flex-wrap items-center gap-2 mb-6"${_scopeId}>`);
            if (__props.legalProduct.status === "active" || __props.legalProduct.status === "Berlaku") {
              _push2(`<span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg> Berlaku </span>`);
            } else {
              _push2(`<span class="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg> Tidak Berlaku </span>`);
            }
            _push2(`<span class="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"${_scopeId}></path></svg> ${ssrInterpolate(__props.legalProduct.type?.name)}</span><span class="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> ${ssrInterpolate(__props.legalProduct.views_count || "0")} VIEWS </span></div><h1 class="text-2xl md:text-3xl font-extrabold leading-tight mb-4 uppercase" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(__props.legalProduct.title)}</h1>`);
            if (!isEmptyHtml(__props.legalProduct.abstract)) {
              _push2(`<div class="border-l-4 border-yellow-400 pl-4 mb-8"${_scopeId}><span class="text-xs font-bold uppercase tracking-wider mb-2 block" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>ABSTRAK</span><div class="text-lg leading-relaxed prose max-w-none" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>${__props.legalProduct.abstract ?? ""}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!isEmptyHtml(__props.legalProduct.description)) {
              _push2(`<div class="border-l-4 border-yellow-400 pl-4 mb-8"${_scopeId}><span class="text-xs font-bold uppercase tracking-wider mb-2 block" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>DESKRIPSI</span><div class="text-lg leading-relaxed prose max-w-none" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>${__props.legalProduct.description ?? ""}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t pt-6" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="text-lg font-bold mb-4" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Detail Informasi </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8"${_scopeId}>`);
            if (__props.legalProduct.number) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>NOMOR </p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.number)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.year) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>TAHUN </p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.year)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.type?.name) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>JENIS DOKUMEN</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.type?.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.category?.name) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}> KATEGORI</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.category?.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.accreditation) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}> AKREDITASI</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.accreditation)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.determination_date) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>TANGGAL PENETAPAN</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(formatDate(__props.legalProduct.determination_date))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.published_date) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>TANGGAL TERBIT</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(formatDate(__props.legalProduct.published_date))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.publisher?.name) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}> PENERBIT</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.publisher?.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.author) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>PENULIS </p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.author)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.initiator?.name) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}> PEMRAKARSA</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.initiator?.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.signer?.name) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}> PENANDATANGAN</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.signer?.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.place?.name) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>TEMPAT TERBIT</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.place?.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.legalField?.name) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>BIDANG HUKUM</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.legalField?.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.location?.name) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>LOKASI PENYIMPANAN</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.location?.name)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.doc_nature) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>SIFAT DOKUMEN</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.doc_nature)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.government_affair) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>URUSAN PEMERINTAHAN</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.government_affair)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.language) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>BAHASA </p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.language)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.edition) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>EDISI </p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.edition)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.page_description) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}> DESKRIPSI FISIK</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.page_description)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.source) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>SUMBER </p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.legalProduct.source)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.validity_start) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}>MULAI BERLAKU</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(formatDate(__props.legalProduct.validity_start))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.validity_end) {
              _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1"${_scopeId}> BERAKHIR BERLAKU</p><p class="text-base font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(formatDate(__props.legalProduct.validity_end))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.legalProduct.subjects && __props.legalProduct.subjects.length > 0) {
              _push2(`<div class="mt-6 pt-6 border-t" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}"${_scopeId}><p class="text-xs font-bold uppercase tracking-wider mb-3" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>SUBJEK</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.legalProduct.subjects, (subject) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: subject.id,
                  href: unref(route)("produk-hukum.index", { subject: [subject.name] }),
                  class: "px-3 py-1 rounded text-xs font-medium border hover:text-blue-600 hover:border-blue-200 transition cursor-pointer",
                  style: { "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-secondary)", "border-color": "var(--color-border)" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(subject.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(subject.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="rounded-xl shadow-sm border overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="p-4 border-b flex flex-col sm:flex-row justify-between items-center gap-4" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="bg-red-100 p-2 rounded text-red-600"${_scopeId}><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-bold truncate max-w-[200px] sm:max-w-xs" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}> Lampiran / Dokumen</p><p class="text-xs" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>${ssrInterpolate(__props.legalProduct.number)}</p></div></div><div class="flex gap-3 w-full sm:w-auto"${_scopeId}>`);
            if (__props.legalProduct.file_path || __props.legalProduct.link) {
              _push2(`<button class="flex-1 sm:flex-none border px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-secondary)", "border-color": "var(--color-border)" })}"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> Pratinjau </button>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.file_path) {
              _push2(`<a${ssrRenderAttr("href", unref(route)("produk-hukum.download", __props.legalProduct.slug))} target="_blank" class="flex-1 sm:flex-none bg-yellow-500 hover:bg-yellow-400 px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"${_scopeId}></path></svg> Download </a>`);
            } else {
              _push2(`<!---->`);
            }
            if (!__props.legalProduct.file_path && __props.legalProduct.link) {
              _push2(`<a${ssrRenderAttr("href", __props.legalProduct.link)} target="_blank" class="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg> Buka Dokumen </a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="bg-gray-100 w-full h-[600px] relative"${_scopeId}>`);
            if (!__props.legalProduct.file_path && __props.legalProduct.link) {
              _push2(`<iframe${ssrRenderAttr("src", __props.legalProduct.link)} class="w-full h-full" frameborder="0"${_scopeId}></iframe>`);
            } else if (__props.legalProduct.file_path) {
              _push2(`<iframe${ssrRenderAttr("src", unref(route)("produk-hukum.preview", __props.legalProduct.slug))} class="w-full h-full" frameborder="0"${_scopeId}></iframe>`);
            } else {
              _push2(`<div class="flex items-center justify-center h-full text-gray-400 font-medium"${_scopeId}> Tidak ada dokumen lampiran. </div>`);
            }
            _push2(`</div></div></div><div class="space-y-6"${_scopeId}>`);
            if (__props.legalProduct.cover_image) {
              _push2(`<div class="rounded-xl shadow-sm border p-6 overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg> Cover </h3><div class="rounded-lg overflow-hidden border border-gray-100 relative group"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.legalProduct.link ? "a" : "div"), {
                href: __props.legalProduct.link || null,
                target: __props.legalProduct.link ? "_blank" : null,
                class: "block relative"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `/storage/${__props.legalProduct.cover_image}`)}${ssrRenderAttr("alt", __props.legalProduct.title)} class="w-full h-auto object-cover transition duration-300 group-hover:scale-105"${_scopeId2}>`);
                    if (__props.legalProduct.link) {
                      _push3(`<div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center opacity-0 group-hover:opacity-100"${_scopeId2}><svg class="w-8 h-8 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId2}></path></svg></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("img", {
                        src: `/storage/${__props.legalProduct.cover_image}`,
                        alt: __props.legalProduct.title,
                        class: "w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                      }, null, 8, ["src", "alt"]),
                      __props.legalProduct.link ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center opacity-0 group-hover:opacity-100"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-8 h-8 text-white drop-shadow-md",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          })
                        ]))
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }), _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.replaced_documents && __props.legalProduct.replaced_documents.length > 0 || __props.legalProduct.replaced_by && __props.legalProduct.replaced_by.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> Riwayat Dokumen </h3>`);
              if (__props.legalProduct.replaced_documents?.length > 0) {
                _push2(`<div class="mb-4"${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2"${_scopeId}>MENCABUT:</p><ul class="space-y-3"${_scopeId}><!--[-->`);
                ssrRenderList(__props.legalProduct.replaced_documents, (doc) => {
                  _push2(`<li class="flex gap-2 group"${_scopeId}><div class="mt-1 text-red-500"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></div><div${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(Link), {
                    href: unref(route)("produk-hukum.show", doc.slug),
                    class: "text-sm font-bold text-gray-700 group-hover:text-red-600 transition leading-snug"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(doc.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(doc.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></li>`);
                });
                _push2(`<!--]--></ul></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.legalProduct.replaced_by?.length > 0) {
                _push2(`<div${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2"${_scopeId}>DICABUT OLEH:</p><ul class="space-y-3"${_scopeId}><!--[-->`);
                ssrRenderList(__props.legalProduct.replaced_by, (doc) => {
                  _push2(`<li class="flex gap-2 group"${_scopeId}><div class="mt-1 text-green-500"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg></div><div${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(Link), {
                    href: unref(route)("produk-hukum.show", doc.slug),
                    class: "text-sm font-bold text-gray-700 group-hover:text-green-600 transition leading-snug"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(doc.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(doc.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></li>`);
                });
                _push2(`<!--]--></ul></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.supporting_links && __props.legalProduct.supporting_links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}><svg class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Data Dukung </h3><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.legalProduct.supporting_links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50 transition group"${_scopeId}><span class="text-sm font-medium text-gray-700 group-hover:text-green-700 leading-tight"${_scopeId}>${ssrInterpolate(link.name)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"${_scopeId}></path></svg> Dokumen Terkait </h3><div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.relatedDocuments, (doc) => {
              _push2(`<div class="flex gap-3 group cursor-pointer"${_scopeId}><div class="mt-1 text-gray-400 group-hover:text-blue-600 transition"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg></div><div${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("produk-hukum.show", doc.slug)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h4 class="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition leading-snug mb-1"${_scopeId2}>${ssrInterpolate(doc.title)}</h4>`);
                  } else {
                    return [
                      createVNode("h4", { class: "text-sm font-bold text-gray-700 group-hover:text-blue-600 transition leading-snug mb-1" }, toDisplayString(doc.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="text-[10px] text-gray-500"${_scopeId}>${ssrInterpolate(doc.type?.name)}</p></div></div>`);
            });
            _push2(`<!--]-->`);
            if (!__props.relatedDocuments.length) {
              _push2(`<div class="text-sm text-gray-400 italic"${_scopeId}> Tidak ada dokumen terkait. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6 pt-4 border-t border-gray-100 text-center"${_scopeId}><a href="#" class="text-xs font-bold text-blue-600 hover:text-blue-800 transition"${_scopeId}>Lihat Semua</a></div></div>`);
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden"${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)}${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight"${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="rounded-xl shadow-sm border p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h4 class="text-sm font-extrabold mb-2 flex justify-between items-center" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}> Apakah dokumen ini membantu? </h4><p class="text-xs text-gray-400 mb-4"${_scopeId}>Bantu kami meningkatkan kualitas layanan JDIH.</p><div class="flex gap-3 mb-6"${_scopeId}><button class="flex-1 border border-gray-200 hover:border-green-400 hover:bg-green-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group"${_scopeId}><span class="text-xl group-hover:scale-110 transition"${_scopeId}>👍</span><span class="text-[10px] font-bold text-gray-600 group-hover:text-green-600"${_scopeId}>Ya, Puas</span></button><button class="flex-1 border border-gray-200 hover:border-red-400 hover:bg-red-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group"${_scopeId}><span class="text-xl group-hover:scale-110 transition"${_scopeId}>👎</span><span class="text-[10px] font-bold text-gray-600 group-hover:text-red-600"${_scopeId}>Tidak</span></button></div><div class="flex items-center justify-between border-t pt-4" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}"${_scopeId}><span class="text-[10px] font-bold uppercase" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>RATING PENGGUNA</span><span class="text-sm font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(__props.ratingStats?.average || 0)}/5.0</span></div><div class="flex gap-1 text-yellow-400 mt-1 text-sm"${_scopeId}><!--[-->`);
            ssrRenderList(5, (i) => {
              _push2(`<span class="${ssrRenderClass(i <= Math.round(__props.ratingStats?.average || 0) ? "text-yellow-400" : "text-gray-200")}"${_scopeId}>★</span>`);
            });
            _push2(`<!--]--></div><p class="text-[10px] text-gray-400 mt-1"${_scopeId}>(Berdasarkan ${ssrInterpolate(__props.ratingStats?.count || 0)} ulasan)</p></div>`);
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode(unref(Link), {
                      href: "/produk-hukum",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Produk Hukum ")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "truncate max-w-[200px]",
                      style: { "color": "var(--color-text-description)" }
                    }, toDisplayString(__props.legalProduct.type?.name || "Dokumen"), 1),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Detail")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Detail")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-10" }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-8" }, [
                    createVNode("div", {
                      class: "rounded-xl shadow-sm border p-8 relative overflow-hidden",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", {
                        class: "absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-16 -mt-16 z-0",
                        style: { "background-color": "var(--color-bg-secondary)" }
                      }),
                      createVNode("div", { class: "relative z-10" }, [
                        createVNode("div", { class: "flex flex-wrap items-center gap-2 mb-6" }, [
                          __props.legalProduct.status === "active" || __props.legalProduct.status === "Berlaku" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-3.5 h-3.5",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M5 13l4 4L19 7"
                              })
                            ])),
                            createTextVNode(" Berlaku ")
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-3.5 h-3.5",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ])),
                            createTextVNode(" Tidak Berlaku ")
                          ])),
                          createVNode("span", { class: "bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-3.5 h-3.5",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              })
                            ])),
                            createTextVNode(" " + toDisplayString(__props.legalProduct.type?.name), 1)
                          ]),
                          createVNode("span", { class: "bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-3.5 h-3.5",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              }),
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              })
                            ])),
                            createTextVNode(" " + toDisplayString(__props.legalProduct.views_count || "0") + " VIEWS ", 1)
                          ])
                        ]),
                        createVNode("h1", {
                          class: "text-2xl md:text-3xl font-extrabold leading-tight mb-4 uppercase",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(__props.legalProduct.title), 1),
                        !isEmptyHtml(__props.legalProduct.abstract) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "border-l-4 border-yellow-400 pl-4 mb-8"
                        }, [
                          createVNode("span", {
                            class: "text-xs font-bold uppercase tracking-wider mb-2 block",
                            style: { "color": "var(--color-text-muted)" }
                          }, "ABSTRAK"),
                          createVNode("div", {
                            class: "text-lg leading-relaxed prose max-w-none",
                            style: { "color": "var(--color-text-secondary)" },
                            innerHTML: __props.legalProduct.abstract
                          }, null, 8, ["innerHTML"])
                        ])) : createCommentVNode("", true),
                        !isEmptyHtml(__props.legalProduct.description) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "border-l-4 border-yellow-400 pl-4 mb-8"
                        }, [
                          createVNode("span", {
                            class: "text-xs font-bold uppercase tracking-wider mb-2 block",
                            style: { "color": "var(--color-text-muted)" }
                          }, "DESKRIPSI"),
                          createVNode("div", {
                            class: "text-lg leading-relaxed prose max-w-none",
                            style: { "color": "var(--color-text-secondary)" },
                            innerHTML: __props.legalProduct.description
                          }, null, 8, ["innerHTML"])
                        ])) : createCommentVNode("", true),
                        createVNode("div", {
                          class: "border-t pt-6",
                          style: { "border-color": "var(--color-border-light)" }
                        }, [
                          createVNode("h3", {
                            class: "text-lg font-bold mb-4",
                            style: { "color": "var(--color-primary)" }
                          }, "Detail Informasi "),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8" }, [
                            __props.legalProduct.number ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "NOMOR "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.number), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.year ? (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "TAHUN "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.year), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.type?.name ? (openBlock(), createBlock("div", { key: 2 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "JENIS DOKUMEN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.type?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.category?.name ? (openBlock(), createBlock("div", { key: 3 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " KATEGORI"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.category?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.accreditation ? (openBlock(), createBlock("div", { key: 4 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " AKREDITASI"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.accreditation), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.determination_date ? (openBlock(), createBlock("div", { key: 5 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "TANGGAL PENETAPAN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(formatDate(__props.legalProduct.determination_date)), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.published_date ? (openBlock(), createBlock("div", { key: 6 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "TANGGAL TERBIT"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(formatDate(__props.legalProduct.published_date)), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.publisher?.name ? (openBlock(), createBlock("div", { key: 7 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " PENERBIT"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.publisher?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.author ? (openBlock(), createBlock("div", { key: 8 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "PENULIS "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.author), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.initiator?.name ? (openBlock(), createBlock("div", { key: 9 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " PEMRAKARSA"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.initiator?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.signer?.name ? (openBlock(), createBlock("div", { key: 10 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " PENANDATANGAN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.signer?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.place?.name ? (openBlock(), createBlock("div", { key: 11 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "TEMPAT TERBIT"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.place?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.legalField?.name ? (openBlock(), createBlock("div", { key: 12 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "BIDANG HUKUM"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.legalField?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.location?.name ? (openBlock(), createBlock("div", { key: 13 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "LOKASI PENYIMPANAN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.location?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.doc_nature ? (openBlock(), createBlock("div", { key: 14 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "SIFAT DOKUMEN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.doc_nature), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.government_affair ? (openBlock(), createBlock("div", { key: 15 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "URUSAN PEMERINTAHAN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.government_affair), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.language ? (openBlock(), createBlock("div", { key: 16 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "BAHASA "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.language), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.edition ? (openBlock(), createBlock("div", { key: 17 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "EDISI "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.edition), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.page_description ? (openBlock(), createBlock("div", { key: 18 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " DESKRIPSI FISIK"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.page_description), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.source ? (openBlock(), createBlock("div", { key: 19 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "SUMBER "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.source), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.validity_start ? (openBlock(), createBlock("div", { key: 20 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "MULAI BERLAKU"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(formatDate(__props.legalProduct.validity_start)), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.validity_end ? (openBlock(), createBlock("div", { key: 21 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " BERAKHIR BERLAKU"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(formatDate(__props.legalProduct.validity_end)), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          __props.legalProduct.subjects && __props.legalProduct.subjects.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-6 pt-6 border-t",
                            style: { "border-color": "var(--color-border-light)" }
                          }, [
                            createVNode("p", {
                              class: "text-xs font-bold uppercase tracking-wider mb-3",
                              style: { "color": "var(--color-text-muted)" }
                            }, "SUBJEK"),
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.legalProduct.subjects, (subject) => {
                                return openBlock(), createBlock(unref(Link), {
                                  key: subject.id,
                                  href: unref(route)("produk-hukum.index", { subject: [subject.name] }),
                                  class: "px-3 py-1 rounded text-xs font-medium border hover:text-blue-600 hover:border-blue-200 transition cursor-pointer",
                                  style: { "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-secondary)", "border-color": "var(--color-border)" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(subject.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "rounded-xl shadow-sm border overflow-hidden",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", {
                        class: "p-4 border-b flex flex-col sm:flex-row justify-between items-center gap-4",
                        style: { "background-color": "var(--color-bg-secondary)", "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("div", { class: "bg-red-100 p-2 rounded text-red-600" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-6 h-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                              })
                            ]))
                          ]),
                          createVNode("div", null, [
                            createVNode("p", {
                              class: "text-sm font-bold truncate max-w-[200px] sm:max-w-xs",
                              style: { "color": "var(--color-primary)" }
                            }, " Lampiran / Dokumen"),
                            createVNode("p", {
                              class: "text-xs",
                              style: { "color": "var(--color-text-muted)" }
                            }, toDisplayString(__props.legalProduct.number), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex gap-3 w-full sm:w-auto" }, [
                          __props.legalProduct.file_path || __props.legalProduct.link ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: openPreview,
                            class: "flex-1 sm:flex-none border px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition",
                            style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-secondary)", "border-color": "var(--color-border)" }
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              }),
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              })
                            ])),
                            createTextVNode(" Pratinjau ")
                          ])) : createCommentVNode("", true),
                          __props.legalProduct.file_path ? (openBlock(), createBlock("a", {
                            key: 1,
                            href: unref(route)("produk-hukum.download", __props.legalProduct.slug),
                            target: "_blank",
                            class: "flex-1 sm:flex-none bg-yellow-500 hover:bg-yellow-400 px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm",
                            style: { "color": "var(--color-text-primary)" }
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              })
                            ])),
                            createTextVNode(" Download ")
                          ], 8, ["href"])) : createCommentVNode("", true),
                          !__props.legalProduct.file_path && __props.legalProduct.link ? (openBlock(), createBlock("a", {
                            key: 2,
                            href: __props.legalProduct.link,
                            target: "_blank",
                            class: "flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              })
                            ])),
                            createTextVNode(" Buka Dokumen ")
                          ], 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-100 w-full h-[600px] relative" }, [
                        !__props.legalProduct.file_path && __props.legalProduct.link ? (openBlock(), createBlock("iframe", {
                          key: 0,
                          src: __props.legalProduct.link,
                          class: "w-full h-full",
                          frameborder: "0"
                        }, null, 8, ["src"])) : __props.legalProduct.file_path ? (openBlock(), createBlock("iframe", {
                          key: 1,
                          src: unref(route)("produk-hukum.preview", __props.legalProduct.slug),
                          class: "w-full h-full",
                          frameborder: "0"
                        }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                          key: 2,
                          class: "flex items-center justify-center h-full text-gray-400 font-medium"
                        }, " Tidak ada dokumen lampiran. "))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    __props.legalProduct.cover_image ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "rounded-xl shadow-sm border p-6 overflow-hidden",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("h3", {
                        class: "font-bold mb-4 flex items-center gap-2",
                        style: { "color": "var(--color-primary)" }
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5 text-yellow-500",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          })
                        ])),
                        createTextVNode(" Cover ")
                      ]),
                      createVNode("div", { class: "rounded-lg overflow-hidden border border-gray-100 relative group" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(__props.legalProduct.link ? "a" : "div"), {
                          href: __props.legalProduct.link || null,
                          target: __props.legalProduct.link ? "_blank" : null,
                          class: "block relative"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: `/storage/${__props.legalProduct.cover_image}`,
                              alt: __props.legalProduct.title,
                              class: "w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                            }, null, 8, ["src", "alt"]),
                            __props.legalProduct.link ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center opacity-0 group-hover:opacity-100"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-8 h-8 text-white drop-shadow-md",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                })
                              ]))
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["href", "target"]))
                      ])
                    ])) : createCommentVNode("", true),
                    __props.legalProduct.replaced_documents && __props.legalProduct.replaced_documents.length > 0 || __props.legalProduct.replaced_by && __props.legalProduct.replaced_by.length > 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "rounded-xl shadow-sm border p-6",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("h3", {
                        class: "font-bold mb-4 flex items-center gap-2",
                        style: { "color": "var(--color-primary)" }
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ])),
                        createTextVNode(" Riwayat Dokumen ")
                      ]),
                      __props.legalProduct.replaced_documents?.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mb-4"
                      }, [
                        createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" }, "MENCABUT:"),
                        createVNode("ul", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.legalProduct.replaced_documents, (doc) => {
                            return openBlock(), createBlock("li", {
                              key: doc.id,
                              class: "flex gap-2 group"
                            }, [
                              createVNode("div", { class: "mt-1 text-red-500" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(Link), {
                                  href: unref(route)("produk-hukum.show", doc.slug),
                                  class: "text-sm font-bold text-gray-700 group-hover:text-red-600 transition leading-snug"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(doc.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      __props.legalProduct.replaced_by?.length > 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-2" }, "DICABUT OLEH:"),
                        createVNode("ul", { class: "space-y-3" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.legalProduct.replaced_by, (doc) => {
                            return openBlock(), createBlock("li", {
                              key: doc.id,
                              class: "flex gap-2 group"
                            }, [
                              createVNode("div", { class: "mt-1 text-green-500" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M5 13l4 4L19 7"
                                  })
                                ]))
                              ]),
                              createVNode("div", null, [
                                createVNode(unref(Link), {
                                  href: unref(route)("produk-hukum.show", doc.slug),
                                  class: "text-sm font-bold text-gray-700 group-hover:text-green-600 transition leading-snug"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(doc.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    __props.legalProduct.supporting_links && __props.legalProduct.supporting_links.length > 0 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "rounded-xl shadow-sm border p-6",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("h3", {
                        class: "font-bold mb-4 flex items-center gap-2",
                        style: { "color": "var(--color-primary)" }
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5 text-green-600",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          })
                        ])),
                        createTextVNode(" Data Dukung ")
                      ]),
                      createVNode("div", { class: "space-y-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.legalProduct.supporting_links, (link) => {
                          return openBlock(), createBlock("a", {
                            key: link.id,
                            href: link.url,
                            target: "_blank",
                            class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50 transition group"
                          }, [
                            createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-green-700 leading-tight" }, toDisplayString(link.name), 1),
                            (openBlock(), createBlock("svg", {
                              class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-green-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              })
                            ]))
                          ], 8, ["href"]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", {
                      class: "rounded-xl shadow-sm border p-6",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("h3", {
                        class: "font-bold mb-4 flex items-center gap-2",
                        style: { "color": "var(--color-primary)" }
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5 text-blue-600",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          })
                        ])),
                        createTextVNode(" Dokumen Terkait ")
                      ]),
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.relatedDocuments, (doc) => {
                          return openBlock(), createBlock("div", {
                            key: doc.id,
                            class: "flex gap-3 group cursor-pointer"
                          }, [
                            createVNode("div", { class: "mt-1 text-gray-400 group-hover:text-blue-600 transition" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                })
                              ]))
                            ]),
                            createVNode("div", null, [
                              createVNode(unref(Link), {
                                href: unref(route)("produk-hukum.show", doc.slug)
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-sm font-bold text-gray-700 group-hover:text-blue-600 transition leading-snug mb-1" }, toDisplayString(doc.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("p", { class: "text-[10px] text-gray-500" }, toDisplayString(doc.type?.name), 1)
                            ])
                          ]);
                        }), 128)),
                        !__props.relatedDocuments.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-gray-400 italic"
                        }, " Tidak ada dokumen terkait. ")) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mt-6 pt-4 border-t border-gray-100 text-center" }, [
                        createVNode("a", {
                          href: "#",
                          class: "text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                        }, "Lihat Semua")
                      ])
                    ]),
                    __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "rounded-xl shadow-sm border p-6",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("h3", {
                        class: "font-bold mb-4 flex items-center gap-2",
                        style: { "color": "var(--color-primary)" }
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5 text-blue-600",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          })
                        ])),
                        createTextVNode(" Tautan Terkait ")
                      ]),
                      createVNode("div", { class: "space-y-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.links, (link) => {
                          return openBlock(), createBlock("a", {
                            key: link.id,
                            href: link.url,
                            target: "_blank",
                            class: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group"
                          }, [
                            createVNode("div", { class: "w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" }, [
                              link.logo_path ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: unref(route)("links.logo", link.id),
                                class: "w-full h-full object-cover",
                                alt: link.title
                              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("svg", {
                                key: 1,
                                class: "w-4 h-4 text-gray-400 group-hover:text-blue-500",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                })
                              ]))
                            ]),
                            createVNode("span", { class: "text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" }, toDisplayString(link.title), 1),
                            (openBlock(), createBlock("svg", {
                              class: "w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              })
                            ]))
                          ], 8, ["href"]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", {
                      class: "rounded-xl shadow-sm border p-6",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("h4", {
                        class: "text-sm font-extrabold mb-2 flex justify-between items-center",
                        style: { "color": "var(--color-primary)" }
                      }, " Apakah dokumen ini membantu? "),
                      createVNode("p", { class: "text-xs text-gray-400 mb-4" }, "Bantu kami meningkatkan kualitas layanan JDIH."),
                      createVNode("div", { class: "flex gap-3 mb-6" }, [
                        createVNode("button", {
                          onClick: ($event) => {
                            showRatingModal.value = true;
                            unref(ratingForm).rating = 5;
                          },
                          class: "flex-1 border border-gray-200 hover:border-green-400 hover:bg-green-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group"
                        }, [
                          createVNode("span", { class: "text-xl group-hover:scale-110 transition" }, "👍"),
                          createVNode("span", { class: "text-[10px] font-bold text-gray-600 group-hover:text-green-600" }, "Ya, Puas")
                        ], 8, ["onClick"]),
                        createVNode("button", {
                          onClick: ($event) => {
                            showRatingModal.value = true;
                            unref(ratingForm).rating = 1;
                          },
                          class: "flex-1 border border-gray-200 hover:border-red-400 hover:bg-red-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group"
                        }, [
                          createVNode("span", { class: "text-xl group-hover:scale-110 transition" }, "👎"),
                          createVNode("span", { class: "text-[10px] font-bold text-gray-600 group-hover:text-red-600" }, "Tidak")
                        ], 8, ["onClick"])
                      ]),
                      createVNode("div", {
                        class: "flex items-center justify-between border-t pt-4",
                        style: { "border-color": "var(--color-border-light)" }
                      }, [
                        createVNode("span", {
                          class: "text-[10px] font-bold uppercase",
                          style: { "color": "var(--color-text-muted)" }
                        }, "RATING PENGGUNA"),
                        createVNode("span", {
                          class: "text-sm font-extrabold",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(__props.ratingStats?.average || 0) + "/5.0", 1)
                      ]),
                      createVNode("div", { class: "flex gap-1 text-yellow-400 mt-1 text-sm" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                          return createVNode("span", {
                            key: i,
                            class: i <= Math.round(__props.ratingStats?.average || 0) ? "text-yellow-400" : "text-gray-200"
                          }, "★", 2);
                        }), 64))
                      ]),
                      createVNode("p", { class: "text-[10px] text-gray-400 mt-1" }, "(Berdasarkan " + toDisplayString(__props.ratingStats?.count || 0) + " ulasan)", 1)
                    ]),
                    createVNode(_sfc_main$k)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (showPreviewModal.value) {
        _push(`<div class="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"><div class="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden flex flex-col shadow-2xl"><div class="bg-[#0F213A] p-4 flex justify-between items-center shrink-0"><h3 class="text-white font-bold truncate pr-4">${ssrInterpolate(__props.legalProduct.title)}</h3><button class="text-gray-400 hover:text-white transition"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="flex-1 bg-gray-100 relative"><iframe${ssrRenderAttr("src", previewUrl.value)} class="w-full h-full" frameborder="0"></iframe></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showRatingModal.value) {
        _push(`<div class="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"><div class="bg-white w-full max-w-md rounded-xl p-6 shadow-2xl relative"><button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><h3 class="text-lg font-bold text-[#0F213A] mb-4 text-center">Beri Penilaian</h3><div class="flex justify-center gap-2 mb-6"><!--[-->`);
        ssrRenderList(5, (star) => {
          _push(`<button type="button" class="${ssrRenderClass([star <= unref(ratingForm).rating ? "text-yellow-400" : "text-gray-200", "text-3xl transition transform hover:scale-110 focus:outline-none"])}"> ★ </button>`);
        });
        _push(`<!--]--></div><textarea placeholder="Masukan atau saran Anda (opsional)..." class="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none mb-4 h-24 resize-none">${ssrInterpolate(unref(ratingForm).feedback)}</textarea><button${ssrIncludeBooleanAttr(unref(ratingForm).processing || unref(ratingForm).rating === 0) ? " disabled" : ""} class="w-full bg-[#0F213A] hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed">${ssrInterpolate(unref(ratingForm).processing ? "Mengirim..." : "Kirim Penilaian")}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ProdukHukum/Show.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    visitorStats: Object,
    productsByType: Array,
    productsByYear: Array,
    topProducts: Array,
    totalLegalDocuments: Number,
    totalPUU: Number,
    statStatus: Array
  },
  setup(__props) {
    Chart.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
      ArcElement,
      PointElement,
      LineElement
    );
    const props = __props;
    const formatNumber = (num) => {
      return new Intl.NumberFormat("id-ID").format(num || 0);
    };
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: { family: "'Inter', sans-serif", size: 12 },
            usePointStyle: true,
            padding: 20
          }
        }
      }
    };
    const typeChartData = computed(() => {
      return {
        labels: props.productsByType.map((item) => item.label),
        datasets: [
          {
            backgroundColor: props.productsByType.map((item) => item.color),
            data: props.productsByType.map((item) => item.value),
            borderWidth: 0,
            hoverOffset: 4
          }
        ]
      };
    });
    const typeChartOptions = {
      ...commonOptions,
      cutout: "60%"
    };
    const statusChartData = computed(() => {
      return {
        labels: props.statStatus.map((item) => item.status),
        datasets: [
          {
            backgroundColor: props.statStatus.map((item) => item.color),
            data: props.statStatus.map((item) => item.count),
            borderWidth: 0,
            hoverOffset: 4
          }
        ]
      };
    });
    const statusChartOptions = {
      ...commonOptions,
      cutout: "60%"
    };
    const yearChartData = computed(() => {
      return {
        labels: props.productsByYear.map((item) => item.year),
        datasets: [
          {
            label: "Dokumen",
            backgroundColor: "#F59E0B",
            // Amber-500
            borderRadius: 4,
            data: props.productsByYear.map((item) => item.count)
          }
        ]
      };
    });
    const yearChartOptions = {
      ...commonOptions,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true,
            borderDash: [2, 2],
            color: "#f3f4f6"
          },
          ticks: {
            font: { family: "'Inter', sans-serif", size: 11 }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: { family: "'Inter', sans-serif", size: 11 }
          }
        }
      },
      plugins: {
        legend: {
          display: false
          // Hide legend for single bar chart
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, {
        title: "Statistik & Data - JDIH UIN SGD",
        description: "Visualisasi data produk hukum, statistik pengunjung, dan tren unduhan di JDIH UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-b py-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Statistik &amp; Data</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Statistik &amp; Data</h1><p class="mt-2" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Visualisasi data produk hukum dan statistik pengunjung JDIH.</p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div class="bg-linear-to-br from-[#0F213A] to-[#1a3b66] p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group"${_scopeId}><div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition transform group-hover:scale-110"${_scopeId}><svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"${_scopeId}></path></svg></div><div class="relative z-10"${_scopeId}><p class="text-blue-200 font-medium text-lg mb-1"${_scopeId}>Jumlah Seluruh Dokumen Hukum</p><h2 class="text-5xl font-bold"${_scopeId}>${ssrInterpolate(formatNumber(__props.totalLegalDocuments))}</h2><div class="mt-4 inline-flex items-center text-sm font-medium text-blue-100 bg-white/10 px-3 py-1 rounded-full"${_scopeId}><span${_scopeId}>Semua Kategori</span></div></div></div><div class="bg-linear-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group"${_scopeId}><div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition transform group-hover:scale-110"${_scopeId}><svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"${_scopeId}></path></svg></div><div class="relative z-10"${_scopeId}><p class="text-yellow-100 font-medium text-lg mb-1"${_scopeId}>Jumlah Koleksi PUU</p><h2 class="text-5xl font-bold"${_scopeId}>${ssrInterpolate(formatNumber(__props.totalPUU))}</h2><div class="mt-4 inline-flex items-center text-sm font-medium text-yellow-100 bg-white/10 px-3 py-1 rounded-full"${_scopeId}><span${_scopeId}>Peraturan Perundang-undangan</span></div></div></div></div><div${_scopeId}><h3 class="text-lg font-bold mb-4 flex items-center gap-2" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg> Statistik Pengunjung </h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"${_scopeId}><div class="p-6 rounded-xl border shadow-sm flex items-center gap-4 hover:border-blue-200 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-medium uppercase tracking-wide" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Total Pengunjung</p><p class="text-2xl font-bold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(formatNumber(__props.visitorStats.total))}</p></div></div><div class="p-6 rounded-xl border shadow-sm flex items-center gap-4 hover:border-green-200 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-medium uppercase tracking-wide" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Hari Ini </p><p class="text-2xl font-bold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(formatNumber(__props.visitorStats.today))}</p></div></div><div class="p-6 rounded-xl border shadow-sm flex items-center gap-4 hover:border-amber-200 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-medium uppercase tracking-wide" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Bulan Ini </p><p class="text-2xl font-bold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(formatNumber(__props.visitorStats.month))}</p></div></div><div class="p-6 rounded-xl border shadow-sm flex items-center gap-4 hover:border-purple-200 transition" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-medium uppercase tracking-wide" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Sedang Online</p><p class="text-2xl font-bold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(__props.visitorStats.online)}</p></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"${_scopeId}><div class="p-6 rounded-xl border shadow-sm" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="text-lg font-bold mb-6" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Status Keberlakuan PUU</h3><div class="h-[250px] relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Doughnut), {
              data: statusChartData.value,
              options: statusChartOptions
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="p-6 rounded-xl border shadow-sm" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="text-lg font-bold mb-6" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Jumlah PUU Berdasarkan Jenis</h3><div class="h-[250px] relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Doughnut), {
              data: typeChartData.value,
              options: typeChartOptions
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="p-6 rounded-xl border shadow-sm" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="text-lg font-bold mb-6" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Dokumen Hukum per Tahun</h3><div class="h-[250px] relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Bar), {
              data: yearChartData.value,
              options: yearChartOptions
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="rounded-xl border shadow-sm overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="p-6 border-b flex items-center justify-between" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}"${_scopeId}><h3 class="text-lg font-bold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Dokumen Hukum Terpopuler</h3>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk-hukum",
              class: "text-sm hover:text-yellow-600 font-medium",
              style: { "color": "var(--color-primary)" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Lihat Semua → `);
                } else {
                  return [
                    createTextVNode("Lihat Semua → ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-sm text-left"${_scopeId}><thead class="uppercase font-medium" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-muted)" })}"${_scopeId}><tr${_scopeId}><th class="px-6 py-4"${_scopeId}>Judul Dokumen</th><th class="px-6 py-4 whitespace-nowrap"${_scopeId}>Nomor</th><th class="px-6 py-4 whitespace-nowrap"${_scopeId}>Tahun</th><th class="px-6 py-4 whitespace-nowrap"${_scopeId}>Jenis</th><th class="px-6 py-4 text-center"${_scopeId}>Dilihat</th></tr></thead><tbody class="divide-y divide-[var(--color-border-light)]"${_scopeId}><!--[-->`);
            ssrRenderList(__props.topProducts, (item, index) => {
              _push2(`<tr class="hover:bg-gray-50 transition"${_scopeId}><td class="px-6 py-4 font-medium" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("produk-hukum.show", item.slug),
                class: "hover:text-blue-700 hover:underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.number)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.year)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-semibold"${_scopeId}>${ssrInterpolate(item.type)}</span></td><td class="px-6 py-4 text-center font-bold text-gray-700"${_scopeId}>${ssrInterpolate(formatNumber(item.views))}</td></tr>`);
            });
            _push2(`<!--]-->`);
            if (__props.topProducts.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="5" class="px-6 py-8 text-center text-gray-500"${_scopeId}>Belum ada data dokumen.</td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "border-b py-8",
                style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", {
                    class: "flex text-sm mb-4",
                    style: { "color": "var(--color-text-muted)" }
                  }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-[var(--color-accent-hover)] transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "mx-2",
                      style: { "color": "var(--color-border-dark)" }
                    }, "/"),
                    createVNode("span", {
                      class: "font-medium",
                      style: { "color": "var(--color-text-primary)" }
                    }, "Statistik & Data")
                  ]),
                  createVNode("h1", {
                    class: "text-3xl font-extrabold",
                    style: { "color": "var(--color-primary)" }
                  }, "Statistik & Data"),
                  createVNode("p", {
                    class: "mt-2",
                    style: { "color": "var(--color-text-secondary)" }
                  }, "Visualisasi data produk hukum dan statistik pengunjung JDIH.")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "bg-linear-to-br from-[#0F213A] to-[#1a3b66] p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group" }, [
                    createVNode("div", { class: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition transform group-hover:scale-110" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-32 h-32",
                        fill: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" })
                      ]))
                    ]),
                    createVNode("div", { class: "relative z-10" }, [
                      createVNode("p", { class: "text-blue-200 font-medium text-lg mb-1" }, "Jumlah Seluruh Dokumen Hukum"),
                      createVNode("h2", { class: "text-5xl font-bold" }, toDisplayString(formatNumber(__props.totalLegalDocuments)), 1),
                      createVNode("div", { class: "mt-4 inline-flex items-center text-sm font-medium text-blue-100 bg-white/10 px-3 py-1 rounded-full" }, [
                        createVNode("span", null, "Semua Kategori")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-linear-to-br from-yellow-500 to-yellow-600 p-8 rounded-2xl shadow-lg text-white relative overflow-hidden group" }, [
                    createVNode("div", { class: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition transform group-hover:scale-110" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-32 h-32",
                        fill: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", { d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" })
                      ]))
                    ]),
                    createVNode("div", { class: "relative z-10" }, [
                      createVNode("p", { class: "text-yellow-100 font-medium text-lg mb-1" }, "Jumlah Koleksi PUU"),
                      createVNode("h2", { class: "text-5xl font-bold" }, toDisplayString(formatNumber(__props.totalPUU)), 1),
                      createVNode("div", { class: "mt-4 inline-flex items-center text-sm font-medium text-yellow-100 bg-white/10 px-3 py-1 rounded-full" }, [
                        createVNode("span", null, "Peraturan Perundang-undangan")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("h3", {
                    class: "text-lg font-bold mb-4 flex items-center gap-2",
                    style: { "color": "var(--color-primary)" }
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5 text-gray-400",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      })
                    ])),
                    createTextVNode(" Statistik Pengunjung ")
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, [
                    createVNode("div", {
                      class: "p-6 rounded-xl border shadow-sm flex items-center gap-4 hover:border-blue-200 transition",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", { class: "w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          })
                        ]))
                      ]),
                      createVNode("div", null, [
                        createVNode("p", {
                          class: "text-sm font-medium uppercase tracking-wide",
                          style: { "color": "var(--color-text-muted)" }
                        }, "Total Pengunjung"),
                        createVNode("p", {
                          class: "text-2xl font-bold",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(formatNumber(__props.visitorStats.total)), 1)
                      ])
                    ]),
                    createVNode("div", {
                      class: "p-6 rounded-xl border shadow-sm flex items-center gap-4 hover:border-green-200 transition",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", { class: "w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          })
                        ]))
                      ]),
                      createVNode("div", null, [
                        createVNode("p", {
                          class: "text-sm font-medium uppercase tracking-wide",
                          style: { "color": "var(--color-text-muted)" }
                        }, "Hari Ini "),
                        createVNode("p", {
                          class: "text-2xl font-bold",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(formatNumber(__props.visitorStats.today)), 1)
                      ])
                    ]),
                    createVNode("div", {
                      class: "p-6 rounded-xl border shadow-sm flex items-center gap-4 hover:border-amber-200 transition",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", { class: "w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          })
                        ]))
                      ]),
                      createVNode("div", null, [
                        createVNode("p", {
                          class: "text-sm font-medium uppercase tracking-wide",
                          style: { "color": "var(--color-text-muted)" }
                        }, "Bulan Ini "),
                        createVNode("p", {
                          class: "text-2xl font-bold",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(formatNumber(__props.visitorStats.month)), 1)
                      ])
                    ]),
                    createVNode("div", {
                      class: "p-6 rounded-xl border shadow-sm flex items-center gap-4 hover:border-purple-200 transition",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", { class: "w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                          })
                        ]))
                      ]),
                      createVNode("div", null, [
                        createVNode("p", {
                          class: "text-sm font-medium uppercase tracking-wide",
                          style: { "color": "var(--color-text-muted)" }
                        }, "Sedang Online"),
                        createVNode("p", {
                          class: "text-2xl font-bold",
                          style: { "color": "var(--color-primary)" }
                        }, toDisplayString(__props.visitorStats.online), 1)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                  createVNode("div", {
                    class: "p-6 rounded-xl border shadow-sm",
                    style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                  }, [
                    createVNode("h3", {
                      class: "text-lg font-bold mb-6",
                      style: { "color": "var(--color-primary)" }
                    }, "Status Keberlakuan PUU"),
                    createVNode("div", { class: "h-[250px] relative" }, [
                      createVNode(unref(Doughnut), {
                        data: statusChartData.value,
                        options: statusChartOptions
                      }, null, 8, ["data"])
                    ])
                  ]),
                  createVNode("div", {
                    class: "p-6 rounded-xl border shadow-sm",
                    style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                  }, [
                    createVNode("h3", {
                      class: "text-lg font-bold mb-6",
                      style: { "color": "var(--color-primary)" }
                    }, "Jumlah PUU Berdasarkan Jenis"),
                    createVNode("div", { class: "h-[250px] relative" }, [
                      createVNode(unref(Doughnut), {
                        data: typeChartData.value,
                        options: typeChartOptions
                      }, null, 8, ["data"])
                    ])
                  ]),
                  createVNode("div", {
                    class: "p-6 rounded-xl border shadow-sm",
                    style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                  }, [
                    createVNode("h3", {
                      class: "text-lg font-bold mb-6",
                      style: { "color": "var(--color-primary)" }
                    }, "Dokumen Hukum per Tahun"),
                    createVNode("div", { class: "h-[250px] relative" }, [
                      createVNode(unref(Bar), {
                        data: yearChartData.value,
                        options: yearChartOptions
                      }, null, 8, ["data"])
                    ])
                  ])
                ]),
                createVNode("div", {
                  class: "rounded-xl border shadow-sm overflow-hidden",
                  style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                }, [
                  createVNode("div", {
                    class: "p-6 border-b flex items-center justify-between",
                    style: { "border-color": "var(--color-border-light)" }
                  }, [
                    createVNode("h3", {
                      class: "text-lg font-bold",
                      style: { "color": "var(--color-primary)" }
                    }, "Dokumen Hukum Terpopuler"),
                    createVNode(unref(Link), {
                      href: "/produk-hukum",
                      class: "text-sm hover:text-yellow-600 font-medium",
                      style: { "color": "var(--color-primary)" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Lihat Semua → ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full text-sm text-left" }, [
                      createVNode("thead", {
                        class: "uppercase font-medium",
                        style: { "background-color": "var(--color-bg-secondary)", "color": "var(--color-text-muted)" }
                      }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "px-6 py-4" }, "Judul Dokumen"),
                          createVNode("th", { class: "px-6 py-4 whitespace-nowrap" }, "Nomor"),
                          createVNode("th", { class: "px-6 py-4 whitespace-nowrap" }, "Tahun"),
                          createVNode("th", { class: "px-6 py-4 whitespace-nowrap" }, "Jenis"),
                          createVNode("th", { class: "px-6 py-4 text-center" }, "Dilihat")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-[var(--color-border-light)]" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.topProducts, (item, index) => {
                          return openBlock(), createBlock("tr", {
                            key: index,
                            class: "hover:bg-gray-50 transition"
                          }, [
                            createVNode("td", {
                              class: "px-6 py-4 font-medium",
                              style: { "color": "var(--color-primary)" }
                            }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("produk-hukum.show", item.slug),
                                class: "hover:text-blue-700 hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(item.number), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, toDisplayString(item.year), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("span", { class: "px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-semibold" }, toDisplayString(item.type), 1)
                            ]),
                            createVNode("td", { class: "px-6 py-4 text-center font-bold text-gray-700" }, toDisplayString(formatNumber(item.views)), 1)
                          ]);
                        }), 128)),
                        __props.topProducts.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "5",
                            class: "px-6 py-8 text-center text-gray-500"
                          }, "Belum ada data dokumen.")
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Statistics/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const totalSteps = 4;
const _sfc_main$1 = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    types: {
      type: Array,
      default: () => []
    },
    unit_kerjas: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const form = useForm({
      // Step 1: Identitas
      name: "",
      nip_nim: "",
      unit_kerja: "",
      whatsapp: "",
      // Step 2: Detail
      type_id: "",
      nota_dinas_number: "",
      title: "",
      product_summary: "",
      // Step 3: Upload
      cover_letter: null,
      draft_document: null
    });
    const currentStep = ref(1);
    const nextStep = () => {
      if (validateStep(currentStep.value)) {
        currentStep.value++;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const prevStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const validateStep = (step) => {
      if (step === 1) {
        if (!form.name || !form.nip_nim || !form.unit_kerja || !form.whatsapp) {
          alert("Mohon lengkapi semua data identitas.");
          return false;
        }
      } else if (step === 2) {
        if (!form.type_id || !form.nota_dinas_number || !form.title || !form.product_summary) {
          alert("Mohon lengkapi semua detail pengajuan.");
          return false;
        }
      } else if (step === 3) {
        if (!form.cover_letter || !form.draft_document) {
          alert("Mohon upload kedua dokumen yang diperlukan.");
          return false;
        }
      }
      return true;
    };
    const submit = () => {
      form.post(route("submission.store"), {
        preserveScroll: true,
        onSuccess: () => {
          currentStep.value = 1;
          window.scrollTo({ top: 0, behavior: "smooth" });
          form.reset();
        },
        onError: (errors) => {
          console.error(errors);
          alert("Terjadi kesalahan validasi. Silakan periksa kembali inputan Anda.");
        }
      });
    };
    const handleFileUpload = (field, event) => {
      form[field] = event.target.files[0];
    };
    const successMessage = computed(() => usePage().props.flash.success);
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      alert("Kode Tracking berhasil disalin!");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Buat Pengajuan Produk Hukum" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen py-10 px-4 md:px-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-6xl mx-auto"${_scopeId}><div class="border-b py-8 mb-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Buat Pengajuan Produk Hukum</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Buat Pengajuan Produk Hukum </h1></div></div>`);
            if (successMessage.value) {
              _push2(`<div class="mb-8 p-8 bg-green-50 border border-green-200 rounded-2xl shadow-sm text-center"${_scopeId}><div class="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"${_scopeId}><svg class="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg></div><h2 class="text-3xl font-bold text-green-800 mb-4"${_scopeId}>Pengajuan Berhasil!</h2><p class="text-green-700 text-lg mb-8"${_scopeId}>${ssrInterpolate(successMessage.value)}</p>`);
              if (_ctx.$page.props.flash.success.includes("Kode Tracking Anda:")) {
                _push2(`<div class="flex justify-center"${_scopeId}><button class="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition shadow-lg font-bold text-lg"${_scopeId}><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"${_scopeId}></path></svg> Salin Kode Tracking </button></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="mt-8"${_scopeId}><button class="text-gray-500 hover:text-gray-700 underline"${_scopeId}>Buat Pengajuan Baru</button></div></div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start"${_scopeId}><aside class="hidden lg:block sticky top-24 rounded-2xl border p-6 shadow-sm" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="flex flex-col gap-0"${_scopeId}><div class="grid grid-cols-[40px_1fr] gap-x-2"${_scopeId}><div class="flex flex-col items-center gap-1"${_scopeId}><div class="${ssrRenderClass([currentStep.value >= 1 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400", "flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300"])}" style="${ssrRenderStyle(currentStep.value >= 1 ? "background-color: var(--color-primary);" : "")}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg></div><div class="${ssrRenderClass([currentStep.value > 1 ? "bg-[var(--color-primary)]" : "bg-gray-200", "w-0.5 h-10 transition-colors duration-300"])}" style="${ssrRenderStyle(currentStep.value > 1 ? "background-color: var(--color-primary);" : "")}"${_scopeId}></div></div><div class="flex flex-col pt-1"${_scopeId}><p class="${ssrRenderClass([currentStep.value >= 1 ? "text-[var(--color-text-primary)]" : "text-gray-500", "text-sm font-bold transition-colors"])}"${_scopeId}> Identitas</p><p class="text-xs text-gray-400"${_scopeId}>Informasi Pemohon</p></div></div><div class="grid grid-cols-[40px_1fr] gap-x-2"${_scopeId}><div class="flex flex-col items-center gap-1"${_scopeId}><div class="${ssrRenderClass([currentStep.value >= 2 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400", "flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300"])}" style="${ssrRenderStyle(currentStep.value >= 2 ? "background-color: var(--color-primary);" : "")}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg></div><div class="${ssrRenderClass([currentStep.value > 2 ? "bg-[var(--color-primary)]" : "bg-gray-200", "w-0.5 h-10 transition-colors duration-300"])}" style="${ssrRenderStyle(currentStep.value > 2 ? "background-color: var(--color-primary);" : "")}"${_scopeId}></div></div><div class="flex flex-col pt-1"${_scopeId}><p class="${ssrRenderClass([currentStep.value >= 2 ? "text-[var(--color-text-primary)]" : "text-gray-500", "text-sm font-bold transition-colors"])}"${_scopeId}> Detail</p><p class="text-xs text-gray-400"${_scopeId}>Rincian Dokumen</p></div></div><div class="grid grid-cols-[40px_1fr] gap-x-2"${_scopeId}><div class="flex flex-col items-center gap-1"${_scopeId}><div class="${ssrRenderClass([currentStep.value >= 3 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400", "flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300"])}" style="${ssrRenderStyle(currentStep.value >= 3 ? "background-color: var(--color-primary);" : "")}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"${_scopeId}></path></svg></div><div class="${ssrRenderClass([currentStep.value > 3 ? "bg-[var(--color-primary)]" : "bg-gray-200", "w-0.5 h-10 transition-colors duration-300"])}" style="${ssrRenderStyle(currentStep.value > 3 ? "background-color: var(--color-primary);" : "")}"${_scopeId}></div></div><div class="flex flex-col pt-1"${_scopeId}><p class="${ssrRenderClass([currentStep.value >= 3 ? "text-[var(--color-text-primary)]" : "text-gray-500", "text-sm font-bold transition-colors"])}"${_scopeId}> Upload</p><p class="text-xs text-gray-400"${_scopeId}>Unggah Berkas</p></div></div><div class="grid grid-cols-[40px_1fr] gap-x-2"${_scopeId}><div class="flex flex-col items-center gap-1"${_scopeId}><div class="${ssrRenderClass([currentStep.value >= 4 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400", "flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300"])}" style="${ssrRenderStyle(currentStep.value >= 4 ? "background-color: var(--color-primary);" : "")}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg></div></div><div class="flex flex-col pt-1"${_scopeId}><p class="${ssrRenderClass([currentStep.value >= 4 ? "text-[var(--color-text-primary)]" : "text-gray-500", "text-sm font-bold transition-colors"])}"${_scopeId}> Ringkasan</p><p class="text-xs text-gray-400"${_scopeId}>Pratinjau</p></div></div></div></aside><div class="flex flex-col gap-6"${_scopeId}><div class="lg:hidden bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center mb-4"${_scopeId}><span class="font-bold text-gray-700"${_scopeId}>Langkah ${ssrInterpolate(currentStep.value)} dari 4</span><div class="flex gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(4, (s) => {
                _push2(`<div class="${ssrRenderClass([s <= currentStep.value ? "bg-[var(--color-primary)]" : "bg-gray-200", "h-2 w-8 rounded-full transition-colors"])}" style="${ssrRenderStyle(s <= currentStep.value ? "background-color: var(--color-primary);" : "")}"${_scopeId}></div>`);
              });
              _push2(`<!--]--></div></div><form class="flex flex-col gap-6"${_scopeId}>`);
              if (currentStep.value === 1) {
                _push2(`<section class="rounded-xl border shadow-sm overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="border-l-4 p-6" style="${ssrRenderStyle({ "border-color": "var(--color-accent)" })}"${_scopeId}><h2 class="text-xl font-bold mb-1" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Langkah 1: Identitas Diri</h2><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Data ini digunakan untuk verifikasi pengaju.</p></div><div class="px-6 pb-8 flex flex-col gap-5"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-5"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Nama Lengkap <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Contoh: Dr. Ahmad Fauzi, M.Ag" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" })}"${_scopeId}>`);
                if (unref(form).errors.name) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>NIP/NIM <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).nip_nim)} type="text" class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Masukkan nomor induk" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" })}"${_scopeId}>`);
                if (unref(form).errors.nip_nim) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.nip_nim)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-5"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Unit/Fakultas <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" })}"${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).unit_kerja) ? ssrLooseContain(unref(form).unit_kerja, "") : ssrLooseEqual(unref(form).unit_kerja, "")) ? " selected" : ""}${_scopeId}>Pilih Unit Kerja</option><!--[-->`);
                ssrRenderList(__props.unit_kerjas, (unit) => {
                  _push2(`<option${ssrRenderAttr("value", unit)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).unit_kerja) ? ssrLooseContain(unref(form).unit_kerja, unit) : ssrLooseEqual(unref(form).unit_kerja, unit)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(unit)}</option>`);
                });
                _push2(`<!--]--></select>`);
                if (unref(form).errors.unit_kerja) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.unit_kerja)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Nomor WhatsApp <span class="text-red-500"${_scopeId}>*</span></label><div class="flex shadow-md rounded-lg"${_scopeId}><span class="inline-flex items-center px-4 rounded-l-lg border-r-0 bg-gray-50 text-gray-500 text-sm font-medium border border-gray-100"${_scopeId}>+62</span><input${ssrRenderAttr("value", unref(form).whatsapp)} type="tel" class="w-full rounded-r-lg border-none py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="8123456789" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" })}"${_scopeId}></div>`);
                if (unref(form).errors.whatsapp) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.whatsapp)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              if (currentStep.value === 2) {
                _push2(`<section class="rounded-xl border shadow-sm overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="border-l-4 p-6" style="${ssrRenderStyle({ "border-color": "var(--color-accent)" })}"${_scopeId}><h2 class="text-xl font-bold mb-1" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Langkah 2: Detail Produk Hukum</h2><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Informasi mengenai dokumen yang akan diajukan.</p></div><div class="px-6 pb-8 flex flex-col gap-5"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-5"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Jenis Produk <span class="text-red-500"${_scopeId}>*</span></label><select class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" })}"${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).type_id) ? ssrLooseContain(unref(form).type_id, "") : ssrLooseEqual(unref(form).type_id, "")) ? " selected" : ""}${_scopeId}>Pilih jenis produk hukum</option><!--[-->`);
                ssrRenderList(__props.types, (type) => {
                  _push2(`<option${ssrRenderAttr("value", type.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).type_id) ? ssrLooseContain(unref(form).type_id, type.id) : ssrLooseEqual(unref(form).type_id, type.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(type.name)}</option>`);
                });
                _push2(`<!--]--></select>`);
                if (unref(form).errors.type_id) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.type_id)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Nomor Nota Dinas <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).nota_dinas_number)} type="text" class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="B-___/Un.05/___/___/202X" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" })}"${_scopeId}>`);
                if (unref(form).errors.nota_dinas_number) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.nota_dinas_number)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Judul/Perihal Dokumen <span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Contoh: Penetapan Panitia Wisuda Ke-90" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" })}"${_scopeId}>`);
                if (unref(form).errors.title) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.title)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex flex-col gap-2"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Ringkasan / Urgensi <span class="text-red-500"${_scopeId}>*</span></label><textarea class="w-full rounded-lg border-none shadow-md py-3 px-4 min-h-[120px] leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Jelaskan secara singkat tujuan dan dasar hukum pengajuan ini..." style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(unref(form).product_summary)}</textarea>`);
                if (unref(form).errors.product_summary) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.product_summary)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              if (currentStep.value === 3) {
                _push2(`<section class="rounded-xl border shadow-sm overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="border-l-4 p-6" style="${ssrRenderStyle({ "border-color": "var(--color-accent)" })}"${_scopeId}><h2 class="text-xl font-bold mb-1" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Langkah 3: Unggah Berkas</h2><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Pastikan format file sesuai dengan ketentuan.</p></div><div class="px-6 pb-8 grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div class="flex flex-col gap-3"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Surat Pengantar (PDF) <span class="text-red-500"${_scopeId}>*</span></label><div class="${ssrRenderClass([unref(form).cover_letter ? "border-green-400 bg-green-50" : "border-gray-300", "relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors group"])}"${_scopeId}><input type="file" accept="application/pdf" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"${_scopeId}>`);
                if (unref(form).cover_letter) {
                  _push2(`<div class="flex flex-col items-center"${_scopeId}><svg class="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"${_scopeId}></path></svg><p class="text-sm font-bold text-green-700 mt-2 truncate max-w-[200px]"${_scopeId}>${ssrInterpolate(unref(form).cover_letter.name)}</p></div>`);
                } else {
                  _push2(`<div class="flex flex-col items-center"${_scopeId}><svg class="w-10 h-10 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg><p class="text-xs text-center text-gray-500 mt-2"${_scopeId}>Klik atau seret file PDF ke sini <br${_scopeId}>(Maks. 5MB)</p><span class="mt-3 text-xs font-bold underline" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Pilih File</span></div>`);
                }
                _push2(`</div>`);
                if (unref(form).errors.cover_letter) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.cover_letter)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex flex-col gap-3"${_scopeId}><label class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Draft Naskah (Docx) <span class="text-red-500"${_scopeId}>*</span></label><div class="${ssrRenderClass([unref(form).draft_document ? "border-green-400 bg-green-50" : "border-gray-300", "relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors group"])}"${_scopeId}><input type="file" accept=".doc,.docx" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"${_scopeId}>`);
                if (unref(form).draft_document) {
                  _push2(`<div class="flex flex-col items-center"${_scopeId}><svg class="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"${_scopeId}></path></svg><p class="text-sm font-bold text-green-700 mt-2 truncate max-w-[200px]"${_scopeId}>${ssrInterpolate(unref(form).draft_document.name)}</p></div>`);
                } else {
                  _push2(`<div class="flex flex-col items-center"${_scopeId}><svg class="w-10 h-10 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg><p class="text-xs text-center text-gray-500 mt-2"${_scopeId}>Klik atau seret file Word ke sini <br${_scopeId}>(Maks. 10MB)</p><span class="mt-3 text-xs font-bold underline" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Pilih File</span></div>`);
                }
                _push2(`</div>`);
                if (unref(form).errors.draft_document) {
                  _push2(`<p class="text-red-500 text-xs mt-1"${_scopeId}>${ssrInterpolate(unref(form).errors.draft_document)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              if (currentStep.value === 4) {
                _push2(`<section class="rounded-xl border overflow-hidden shadow-sm p-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-primary)" })}"${_scopeId}><div class="flex items-center gap-4 mb-6"${_scopeId}><div class="p-3 rounded-full bg-blue-50"${_scopeId}><svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><div${_scopeId}><h3 class="font-bold text-lg" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}> Verifikasi Akhir</h3><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Mohon periksa kembali semua data sebelum menekan tombol simpan.</p></div></div><div class="bg-gray-50 rounded-xl p-6 border border-gray-100"${_scopeId}><dl class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm"${_scopeId}><div class="col-span-2 md:col-span-1"${_scopeId}><dt class="font-medium text-gray-500"${_scopeId}>Nama Pemohon</dt><dd class="mt-1 font-bold text-gray-900"${_scopeId}>${ssrInterpolate(unref(form).name)}</dd></div><div class="col-span-2 md:col-span-1"${_scopeId}><dt class="font-medium text-gray-500"${_scopeId}>Unit Kerja</dt><dd class="mt-1 font-bold text-gray-900"${_scopeId}>${ssrInterpolate(unref(form).unit_kerja)}</dd></div><div class="col-span-2 border-t border-gray-300 my-2"${_scopeId}></div><div class="col-span-2"${_scopeId}><dt class="font-medium text-gray-500"${_scopeId}>Judul Pengajuan</dt><dd class="mt-1 font-bold text-gray-900"${_scopeId}>${ssrInterpolate(unref(form).title)}</dd></div><div class="col-span-2 md:col-span-1"${_scopeId}><dt class="font-medium text-gray-500"${_scopeId}>Jenis Produk Hukum</dt><dd class="mt-1 font-bold text-gray-900"${_scopeId}>${ssrInterpolate(__props.types.find((t) => t.id === unref(form).type_id)?.name)}</dd></div></dl></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex justify-between items-center pt-4"${_scopeId}>`);
              if (currentStep.value > 1) {
                _push2(`<button type="button" class="px-6 py-3 rounded-lg border font-bold text-sm hover:bg-gray-50 transition" style="${ssrRenderStyle({ "border-color": "var(--color-border-dark)" })}"${_scopeId}> Kembali </button>`);
              } else {
                _push2(`<div${_scopeId}></div>`);
              }
              _push2(`<div class="flex gap-3"${_scopeId}>`);
              if (currentStep.value < totalSteps) {
                _push2(`<button type="button" class="px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white" style="${ssrRenderStyle({ "background-color": "var(--color-primary)" })}"${_scopeId}> Selanjutnya </button>`);
              } else {
                _push2(`<!---->`);
              }
              if (currentStep.value === totalSteps) {
                _push2(`<button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white flex items-center gap-2" style="${ssrRenderStyle({ "background-color": "var(--color-primary)" })}"${_scopeId}>`);
                if (unref(form).processing) {
                  _push2(`<svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(unref(form).processing ? "Mengirim..." : "Ajukan Sekarang")}</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></form></div></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "min-h-screen py-10 px-4 md:px-6",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-6xl mx-auto" }, [
                  createVNode("div", {
                    class: "border-b py-8 mb-8",
                    style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                  }, [
                    createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                      createVNode("nav", {
                        class: "flex text-sm mb-4",
                        style: { "color": "var(--color-text-muted)" }
                      }, [
                        createVNode(unref(Link), {
                          href: "/",
                          class: "hover:text-[var(--color-accent-hover)] transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Beranda")
                          ]),
                          _: 1
                        }),
                        createVNode("span", {
                          class: "mx-2",
                          style: { "color": "var(--color-border-dark)" }
                        }, "/"),
                        createVNode("span", {
                          class: "font-medium",
                          style: { "color": "var(--color-text-primary)" }
                        }, "Buat Pengajuan Produk Hukum")
                      ]),
                      createVNode("h1", {
                        class: "text-3xl font-extrabold",
                        style: { "color": "var(--color-primary)" }
                      }, "Buat Pengajuan Produk Hukum ")
                    ])
                  ]),
                  successMessage.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-8 p-8 bg-green-50 border border-green-200 rounded-2xl shadow-sm text-center"
                  }, [
                    createVNode("div", { class: "inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-10 h-10 text-green-600",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ]))
                    ]),
                    createVNode("h2", { class: "text-3xl font-bold text-green-800 mb-4" }, "Pengajuan Berhasil!"),
                    createVNode("p", { class: "text-green-700 text-lg mb-8" }, toDisplayString(successMessage.value), 1),
                    _ctx.$page.props.flash.success.includes("Kode Tracking Anda:") ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-center"
                    }, [
                      createVNode("button", {
                        onClick: ($event) => copyToClipboard(_ctx.$page.props.flash.success.split(": ")[1]),
                        class: "flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition shadow-lg font-bold text-lg"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                          })
                        ])),
                        createTextVNode(" Salin Kode Tracking ")
                      ], 8, ["onClick"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "mt-8" }, [
                      createVNode("button", {
                        onClick: ($event) => {
                          currentStep.value = 1;
                          _ctx.$page.props.flash.success = null;
                        },
                        class: "text-gray-500 hover:text-gray-700 underline"
                      }, "Buat Pengajuan Baru", 8, ["onClick"])
                    ])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start"
                  }, [
                    createVNode("aside", {
                      class: "hidden lg:block sticky top-24 rounded-2xl border p-6 shadow-sm",
                      style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                    }, [
                      createVNode("div", { class: "flex flex-col gap-0" }, [
                        createVNode("div", { class: "grid grid-cols-[40px_1fr] gap-x-2" }, [
                          createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                            createVNode("div", {
                              class: ["flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300", currentStep.value >= 1 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400"],
                              style: currentStep.value >= 1 ? "background-color: var(--color-primary);" : ""
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                })
                              ]))
                            ], 6),
                            createVNode("div", {
                              class: ["w-0.5 h-10 transition-colors duration-300", currentStep.value > 1 ? "bg-[var(--color-primary)]" : "bg-gray-200"],
                              style: currentStep.value > 1 ? "background-color: var(--color-primary);" : ""
                            }, null, 6)
                          ]),
                          createVNode("div", { class: "flex flex-col pt-1" }, [
                            createVNode("p", {
                              class: ["text-sm font-bold transition-colors", currentStep.value >= 1 ? "text-[var(--color-text-primary)]" : "text-gray-500"]
                            }, " Identitas", 2),
                            createVNode("p", { class: "text-xs text-gray-400" }, "Informasi Pemohon")
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-[40px_1fr] gap-x-2" }, [
                          createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                            createVNode("div", {
                              class: ["flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300", currentStep.value >= 2 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400"],
                              style: currentStep.value >= 2 ? "background-color: var(--color-primary);" : ""
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                })
                              ]))
                            ], 6),
                            createVNode("div", {
                              class: ["w-0.5 h-10 transition-colors duration-300", currentStep.value > 2 ? "bg-[var(--color-primary)]" : "bg-gray-200"],
                              style: currentStep.value > 2 ? "background-color: var(--color-primary);" : ""
                            }, null, 6)
                          ]),
                          createVNode("div", { class: "flex flex-col pt-1" }, [
                            createVNode("p", {
                              class: ["text-sm font-bold transition-colors", currentStep.value >= 2 ? "text-[var(--color-text-primary)]" : "text-gray-500"]
                            }, " Detail", 2),
                            createVNode("p", { class: "text-xs text-gray-400" }, "Rincian Dokumen")
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-[40px_1fr] gap-x-2" }, [
                          createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                            createVNode("div", {
                              class: ["flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300", currentStep.value >= 3 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400"],
                              style: currentStep.value >= 3 ? "background-color: var(--color-primary);" : ""
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                })
                              ]))
                            ], 6),
                            createVNode("div", {
                              class: ["w-0.5 h-10 transition-colors duration-300", currentStep.value > 3 ? "bg-[var(--color-primary)]" : "bg-gray-200"],
                              style: currentStep.value > 3 ? "background-color: var(--color-primary);" : ""
                            }, null, 6)
                          ]),
                          createVNode("div", { class: "flex flex-col pt-1" }, [
                            createVNode("p", {
                              class: ["text-sm font-bold transition-colors", currentStep.value >= 3 ? "text-[var(--color-text-primary)]" : "text-gray-500"]
                            }, " Upload", 2),
                            createVNode("p", { class: "text-xs text-gray-400" }, "Unggah Berkas")
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-[40px_1fr] gap-x-2" }, [
                          createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                            createVNode("div", {
                              class: ["flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300", currentStep.value >= 4 ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-400"],
                              style: currentStep.value >= 4 ? "background-color: var(--color-primary);" : ""
                            }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }),
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                })
                              ]))
                            ], 6)
                          ]),
                          createVNode("div", { class: "flex flex-col pt-1" }, [
                            createVNode("p", {
                              class: ["text-sm font-bold transition-colors", currentStep.value >= 4 ? "text-[var(--color-text-primary)]" : "text-gray-500"]
                            }, " Ringkasan", 2),
                            createVNode("p", { class: "text-xs text-gray-400" }, "Pratinjau")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-6" }, [
                      createVNode("div", { class: "lg:hidden bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center mb-4" }, [
                        createVNode("span", { class: "font-bold text-gray-700" }, "Langkah " + toDisplayString(currentStep.value) + " dari 4", 1),
                        createVNode("div", { class: "flex gap-1" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(4, (s) => {
                            return createVNode("div", {
                              key: s,
                              class: ["h-2 w-8 rounded-full transition-colors", s <= currentStep.value ? "bg-[var(--color-primary)]" : "bg-gray-200"],
                              style: s <= currentStep.value ? "background-color: var(--color-primary);" : ""
                            }, null, 6);
                          }), 64))
                        ])
                      ]),
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "flex flex-col gap-6"
                      }, [
                        currentStep.value === 1 ? (openBlock(), createBlock("section", {
                          key: 0,
                          class: "rounded-xl border shadow-sm overflow-hidden",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                        }, [
                          createVNode("div", {
                            class: "border-l-4 p-6",
                            style: { "border-color": "var(--color-accent)" }
                          }, [
                            createVNode("h2", {
                              class: "text-xl font-bold mb-1",
                              style: { "color": "var(--color-text-primary)" }
                            }, "Langkah 1: Identitas Diri"),
                            createVNode("p", {
                              class: "text-sm",
                              style: { "color": "var(--color-text-secondary)" }
                            }, "Data ini digunakan untuk verifikasi pengaju.")
                          ]),
                          createVNode("div", { class: "px-6 pb-8 flex flex-col gap-5" }, [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-5" }, [
                              createVNode("div", { class: "flex flex-col gap-2" }, [
                                createVNode("label", {
                                  class: "text-sm font-semibold",
                                  style: { "color": "var(--color-text-primary)" }
                                }, [
                                  createTextVNode("Nama Lengkap "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  type: "text",
                                  class: "w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                  placeholder: "Contoh: Dr. Ahmad Fauzi, M.Ag",
                                  style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" }
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(form).name]
                                ]),
                                unref(form).errors.name ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-red-500 text-xs mt-1"
                                }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "flex flex-col gap-2" }, [
                                createVNode("label", {
                                  class: "text-sm font-semibold",
                                  style: { "color": "var(--color-text-primary)" }
                                }, [
                                  createTextVNode("NIP/NIM "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => unref(form).nip_nim = $event,
                                  type: "text",
                                  class: "w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                  placeholder: "Masukkan nomor induk",
                                  style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" }
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(form).nip_nim]
                                ]),
                                unref(form).errors.nip_nim ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-red-500 text-xs mt-1"
                                }, toDisplayString(unref(form).errors.nip_nim), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-5" }, [
                              createVNode("div", { class: "flex flex-col gap-2" }, [
                                createVNode("label", {
                                  class: "text-sm font-semibold",
                                  style: { "color": "var(--color-text-primary)" }
                                }, [
                                  createTextVNode("Unit/Fakultas "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => unref(form).unit_kerja = $event,
                                  class: "w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                  style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" }
                                }, [
                                  createVNode("option", {
                                    value: "",
                                    disabled: ""
                                  }, "Pilih Unit Kerja"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.unit_kerjas, (unit) => {
                                    return openBlock(), createBlock("option", {
                                      key: unit,
                                      value: unit
                                    }, toDisplayString(unit), 9, ["value"]);
                                  }), 128))
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(form).unit_kerja]
                                ]),
                                unref(form).errors.unit_kerja ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-red-500 text-xs mt-1"
                                }, toDisplayString(unref(form).errors.unit_kerja), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "flex flex-col gap-2" }, [
                                createVNode("label", {
                                  class: "text-sm font-semibold",
                                  style: { "color": "var(--color-text-primary)" }
                                }, [
                                  createTextVNode("Nomor WhatsApp "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                createVNode("div", { class: "flex shadow-md rounded-lg" }, [
                                  createVNode("span", { class: "inline-flex items-center px-4 rounded-l-lg border-r-0 bg-gray-50 text-gray-500 text-sm font-medium border border-gray-100" }, "+62"),
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => unref(form).whatsapp = $event,
                                    type: "tel",
                                    class: "w-full rounded-r-lg border-none py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                    placeholder: "8123456789",
                                    style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" }
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).whatsapp]
                                  ])
                                ]),
                                unref(form).errors.whatsapp ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-red-500 text-xs mt-1"
                                }, toDisplayString(unref(form).errors.whatsapp), 1)) : createCommentVNode("", true)
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        currentStep.value === 2 ? (openBlock(), createBlock("section", {
                          key: 1,
                          class: "rounded-xl border shadow-sm overflow-hidden",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                        }, [
                          createVNode("div", {
                            class: "border-l-4 p-6",
                            style: { "border-color": "var(--color-accent)" }
                          }, [
                            createVNode("h2", {
                              class: "text-xl font-bold mb-1",
                              style: { "color": "var(--color-text-primary)" }
                            }, "Langkah 2: Detail Produk Hukum"),
                            createVNode("p", {
                              class: "text-sm",
                              style: { "color": "var(--color-text-secondary)" }
                            }, "Informasi mengenai dokumen yang akan diajukan.")
                          ]),
                          createVNode("div", { class: "px-6 pb-8 flex flex-col gap-5" }, [
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-5" }, [
                              createVNode("div", { class: "flex flex-col gap-2" }, [
                                createVNode("label", {
                                  class: "text-sm font-semibold",
                                  style: { "color": "var(--color-text-primary)" }
                                }, [
                                  createTextVNode("Jenis Produk "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => unref(form).type_id = $event,
                                  class: "w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                  style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" }
                                }, [
                                  createVNode("option", {
                                    value: "",
                                    disabled: ""
                                  }, "Pilih jenis produk hukum"),
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.types, (type) => {
                                    return openBlock(), createBlock("option", {
                                      key: type.id,
                                      value: type.id
                                    }, toDisplayString(type.name), 9, ["value"]);
                                  }), 128))
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(form).type_id]
                                ]),
                                unref(form).errors.type_id ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-red-500 text-xs mt-1"
                                }, toDisplayString(unref(form).errors.type_id), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "flex flex-col gap-2" }, [
                                createVNode("label", {
                                  class: "text-sm font-semibold",
                                  style: { "color": "var(--color-text-primary)" }
                                }, [
                                  createTextVNode("Nomor Nota Dinas "),
                                  createVNode("span", { class: "text-red-500" }, "*")
                                ]),
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => unref(form).nota_dinas_number = $event,
                                  type: "text",
                                  class: "w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                  placeholder: "B-___/Un.05/___/___/202X",
                                  style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" }
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(form).nota_dinas_number]
                                ]),
                                unref(form).errors.nota_dinas_number ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "text-red-500 text-xs mt-1"
                                }, toDisplayString(unref(form).errors.nota_dinas_number), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col gap-2" }, [
                              createVNode("label", {
                                class: "text-sm font-semibold",
                                style: { "color": "var(--color-text-primary)" }
                              }, [
                                createTextVNode("Judul/Perihal Dokumen "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                type: "text",
                                class: "w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                placeholder: "Contoh: Penetapan Panitia Wisuda Ke-90",
                                style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" }
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).title]
                              ]),
                              unref(form).errors.title ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-red-500 text-xs mt-1"
                              }, toDisplayString(unref(form).errors.title), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex flex-col gap-2" }, [
                              createVNode("label", {
                                class: "text-sm font-semibold",
                                style: { "color": "var(--color-text-primary)" }
                              }, [
                                createTextVNode("Ringkasan / Urgensi "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              withDirectives(createVNode("textarea", {
                                "onUpdate:modelValue": ($event) => unref(form).product_summary = $event,
                                class: "w-full rounded-lg border-none shadow-md py-3 px-4 min-h-[120px] leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                placeholder: "Jelaskan secara singkat tujuan dan dasar hukum pengajuan ini...",
                                style: { "background-color": "var(--color-bg-card)", "color": "var(--color-text-primary)" }
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).product_summary]
                              ]),
                              unref(form).errors.product_summary ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-red-500 text-xs mt-1"
                              }, toDisplayString(unref(form).errors.product_summary), 1)) : createCommentVNode("", true)
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        currentStep.value === 3 ? (openBlock(), createBlock("section", {
                          key: 2,
                          class: "rounded-xl border shadow-sm overflow-hidden",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                        }, [
                          createVNode("div", {
                            class: "border-l-4 p-6",
                            style: { "border-color": "var(--color-accent)" }
                          }, [
                            createVNode("h2", {
                              class: "text-xl font-bold mb-1",
                              style: { "color": "var(--color-text-primary)" }
                            }, "Langkah 3: Unggah Berkas"),
                            createVNode("p", {
                              class: "text-sm",
                              style: { "color": "var(--color-text-secondary)" }
                            }, "Pastikan format file sesuai dengan ketentuan.")
                          ]),
                          createVNode("div", { class: "px-6 pb-8 grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", { class: "flex flex-col gap-3" }, [
                              createVNode("label", {
                                class: "text-sm font-semibold",
                                style: { "color": "var(--color-text-primary)" }
                              }, [
                                createTextVNode("Surat Pengantar (PDF) "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode("div", {
                                class: ["relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors group", unref(form).cover_letter ? "border-green-400 bg-green-50" : "border-gray-300"]
                              }, [
                                createVNode("input", {
                                  onChange: ($event) => handleFileUpload("cover_letter", $event),
                                  type: "file",
                                  accept: "application/pdf",
                                  class: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                }, null, 40, ["onChange"]),
                                unref(form).cover_letter ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex flex-col items-center"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-10 h-10 text-green-500",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20"
                                  }, [
                                    createVNode("path", {
                                      "fill-rule": "evenodd",
                                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                      "clip-rule": "evenodd"
                                    })
                                  ])),
                                  createVNode("p", { class: "text-sm font-bold text-green-700 mt-2 truncate max-w-[200px]" }, toDisplayString(unref(form).cover_letter.name), 1)
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex flex-col items-center"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-10 h-10 text-gray-400 group-hover:text-gray-500",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "1.5",
                                      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    })
                                  ])),
                                  createVNode("p", { class: "text-xs text-center text-gray-500 mt-2" }, [
                                    createTextVNode("Klik atau seret file PDF ke sini "),
                                    createVNode("br"),
                                    createTextVNode("(Maks. 5MB)")
                                  ]),
                                  createVNode("span", {
                                    class: "mt-3 text-xs font-bold underline",
                                    style: { "color": "var(--color-primary)" }
                                  }, "Pilih File")
                                ]))
                              ], 2),
                              unref(form).errors.cover_letter ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-red-500 text-xs mt-1"
                              }, toDisplayString(unref(form).errors.cover_letter), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex flex-col gap-3" }, [
                              createVNode("label", {
                                class: "text-sm font-semibold",
                                style: { "color": "var(--color-text-primary)" }
                              }, [
                                createTextVNode("Draft Naskah (Docx) "),
                                createVNode("span", { class: "text-red-500" }, "*")
                              ]),
                              createVNode("div", {
                                class: ["relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors group", unref(form).draft_document ? "border-green-400 bg-green-50" : "border-gray-300"]
                              }, [
                                createVNode("input", {
                                  onChange: ($event) => handleFileUpload("draft_document", $event),
                                  type: "file",
                                  accept: ".doc,.docx",
                                  class: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                }, null, 40, ["onChange"]),
                                unref(form).draft_document ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex flex-col items-center"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-10 h-10 text-green-500",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20"
                                  }, [
                                    createVNode("path", {
                                      "fill-rule": "evenodd",
                                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                      "clip-rule": "evenodd"
                                    })
                                  ])),
                                  createVNode("p", { class: "text-sm font-bold text-green-700 mt-2 truncate max-w-[200px]" }, toDisplayString(unref(form).draft_document.name), 1)
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex flex-col items-center"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-10 h-10 text-gray-400 group-hover:text-gray-500",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "1.5",
                                      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    })
                                  ])),
                                  createVNode("p", { class: "text-xs text-center text-gray-500 mt-2" }, [
                                    createTextVNode("Klik atau seret file Word ke sini "),
                                    createVNode("br"),
                                    createTextVNode("(Maks. 10MB)")
                                  ]),
                                  createVNode("span", {
                                    class: "mt-3 text-xs font-bold underline",
                                    style: { "color": "var(--color-primary)" }
                                  }, "Pilih File")
                                ]))
                              ], 2),
                              unref(form).errors.draft_document ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-red-500 text-xs mt-1"
                              }, toDisplayString(unref(form).errors.draft_document), 1)) : createCommentVNode("", true)
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        currentStep.value === 4 ? (openBlock(), createBlock("section", {
                          key: 3,
                          class: "rounded-xl border overflow-hidden shadow-sm p-6",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-primary)" }
                        }, [
                          createVNode("div", { class: "flex items-center gap-4 mb-6" }, [
                            createVNode("div", { class: "p-3 rounded-full bg-blue-50" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6 text-blue-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ]))
                            ]),
                            createVNode("div", null, [
                              createVNode("h3", {
                                class: "font-bold text-lg",
                                style: { "color": "var(--color-text-primary)" }
                              }, " Verifikasi Akhir"),
                              createVNode("p", {
                                class: "text-sm",
                                style: { "color": "var(--color-text-secondary)" }
                              }, "Mohon periksa kembali semua data sebelum menekan tombol simpan.")
                            ])
                          ]),
                          createVNode("div", { class: "bg-gray-50 rounded-xl p-6 border border-gray-100" }, [
                            createVNode("dl", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm" }, [
                              createVNode("div", { class: "col-span-2 md:col-span-1" }, [
                                createVNode("dt", { class: "font-medium text-gray-500" }, "Nama Pemohon"),
                                createVNode("dd", { class: "mt-1 font-bold text-gray-900" }, toDisplayString(unref(form).name), 1)
                              ]),
                              createVNode("div", { class: "col-span-2 md:col-span-1" }, [
                                createVNode("dt", { class: "font-medium text-gray-500" }, "Unit Kerja"),
                                createVNode("dd", { class: "mt-1 font-bold text-gray-900" }, toDisplayString(unref(form).unit_kerja), 1)
                              ]),
                              createVNode("div", { class: "col-span-2 border-t border-gray-300 my-2" }),
                              createVNode("div", { class: "col-span-2" }, [
                                createVNode("dt", { class: "font-medium text-gray-500" }, "Judul Pengajuan"),
                                createVNode("dd", { class: "mt-1 font-bold text-gray-900" }, toDisplayString(unref(form).title), 1)
                              ]),
                              createVNode("div", { class: "col-span-2 md:col-span-1" }, [
                                createVNode("dt", { class: "font-medium text-gray-500" }, "Jenis Produk Hukum"),
                                createVNode("dd", { class: "mt-1 font-bold text-gray-900" }, toDisplayString(__props.types.find((t) => t.id === unref(form).type_id)?.name), 1)
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex justify-between items-center pt-4" }, [
                          currentStep.value > 1 ? (openBlock(), createBlock("button", {
                            key: 0,
                            type: "button",
                            onClick: prevStep,
                            class: "px-6 py-3 rounded-lg border font-bold text-sm hover:bg-gray-50 transition",
                            style: { "border-color": "var(--color-border-dark)" }
                          }, " Kembali ")) : (openBlock(), createBlock("div", { key: 1 })),
                          createVNode("div", { class: "flex gap-3" }, [
                            currentStep.value < totalSteps ? (openBlock(), createBlock("button", {
                              key: 0,
                              type: "button",
                              onClick: nextStep,
                              class: "px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white",
                              style: { "background-color": "var(--color-primary)" }
                            }, " Selanjutnya ")) : createCommentVNode("", true),
                            currentStep.value === totalSteps ? (openBlock(), createBlock("button", {
                              key: 1,
                              type: "submit",
                              disabled: unref(form).processing,
                              class: "px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white flex items-center gap-2",
                              style: { "background-color": "var(--color-primary)" }
                            }, [
                              unref(form).processing ? (openBlock(), createBlock("svg", {
                                key: 0,
                                class: "animate-spin h-5 w-5",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("circle", {
                                  class: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  "stroke-width": "4"
                                }),
                                createVNode("path", {
                                  class: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })
                              ])) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(unref(form).processing ? "Mengirim..." : "Ajukan Sekarang"), 1)
                            ], 8, ["disabled"])) : createCommentVNode("", true)
                          ])
                        ])
                      ], 32)
                    ])
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Submission/Create.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Track",
  __ssrInlineRender: true,
  props: {
    submission: Object,
    filters: Object,
    searchPerformed: Boolean
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      tracking_code: props.filters.tracking_code || ""
    });
    const submit = () => {
      form.get(route("submission.track"), {
        preserveState: true,
        preserveScroll: true,
        only: ["submission", "searchPerformed", "filters"]
      });
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    };
    const statusOrder = [
      "pending",
      "admin_verification",
      "legal_harmonization",
      "signing",
      "completed"
    ];
    const getStatusLabel = (statusKey) => {
      const options = {
        "pending": "Pengajuan Diterima",
        "admin_verification": "Verifikasi Admin",
        "legal_harmonization": "Harmonisasi Legal",
        "signing": "Tanda Tangan",
        "completed": "Terbit & Selesai",
        "rejected": "Ditolak"
      };
      return options[statusKey] || statusKey;
    };
    computed(() => {
      if (!props.submission) return [];
      const currentStatus = props.submission.status;
      const currentIndex = statusOrder.indexOf(currentStatus);
      const isRejected = currentStatus === "rejected";
      return [
        { label: "Pengajuan Diterima", value: "pending" },
        { label: "Verifikasi Admin", value: "admin_verification" },
        { label: "Harmonisasi Legal", value: "legal_harmonization" },
        { label: "Tanda Tangan", value: "signing" },
        { label: "Terbit & Selesai", value: "completed" }
      ].map((step, index) => {
        let status = "upcoming";
        if (isRejected) {
          status = "rejected";
        } else if (currentIndex === -1) {
          status = "upcoming";
        } else if (index < currentIndex) {
          status = "completed";
        } else if (index === currentIndex) {
          status = "current";
        }
        return {
          ...step,
          status
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Lacak Pengajuan Produk Hukum" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen py-10 px-4 md:px-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-secondary)" })}"${_scopeId}><div class="max-w-6xl mx-auto"${_scopeId}><div class="border-b py-8 mb-8" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm mb-4" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-[var(--color-accent-hover)] transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Beranda`);
                } else {
                  return [
                    createTextVNode("Beranda")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2" style="${ssrRenderStyle({ "color": "var(--color-border-dark)" })}"${_scopeId}>/</span><span class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Lacak Pengajuan Produk Hukum</span></nav><h1 class="text-3xl font-extrabold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>Lacak Pengajuan Produk Hukum </h1></div></div><div class="rounded-xl border shadow-sm overflow-hidden mb-6" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="border-l-4 p-6" style="${ssrRenderStyle({ "border-color": "var(--color-accent)" })}"${_scopeId}><h2 class="text-xl font-bold mb-1" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Masukkan Nomor Tracking</h2><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Cek status pengajuan produk hukum Anda dengan nomor tracking yang diberikan saat pengajuan.</p></div><div class="px-6 pb-8"${_scopeId}><form class="max-w-2xl"${_scopeId}><div class="flex flex-col sm:flex-row gap-4"${_scopeId}><div class="grow"${_scopeId}><input${ssrRenderAttr("value", unref(form).tracking_code)} type="text" placeholder="Contoh: REG-20240101-ABCD" class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500" style="${ssrRenderStyle({ "background-color": "var(--color-bg-input)", "color": "var(--color-text-primary)" })}" required${_scopeId}></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white flex items-center justify-center gap-2" style="${ssrRenderStyle({ "background-color": "var(--color-primary)" })}"${_scopeId}>`);
            if (unref(form).processing) {
              _push2(`<svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(form).processing ? "Mencari..." : "Lacak Sekarang")}</button></div></form></div></div>`);
            if (__props.searchPerformed) {
              _push2(`<div class="space-y-6"${_scopeId}>`);
              if (!__props.submission) {
                _push2(`<div class="rounded-xl border shadow-sm overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-error)" })}"${_scopeId}><div class="border-l-4 p-6" style="${ssrRenderStyle({ "border-color": "var(--color-error)" })}"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="p-3 rounded-full" style="${ssrRenderStyle({ "background-color": "rgba(239, 68, 68, 0.1)" })}"${_scopeId}><svg class="w-6 h-6" style="${ssrRenderStyle({ "color": "var(--color-error)" })}" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"${_scopeId}></path></svg></div><div${_scopeId}><h3 class="font-bold text-lg" style="${ssrRenderStyle({ "color": "var(--color-error)" })}"${_scopeId}>Data Tidak Ditemukan</h3><p class="text-sm mt-1" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}> Data pengajuan dengan nomor tracking <strong style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(__props.filters.tracking_code)}</strong> tidak ditemukan. Silakan periksa kembali nomor tracking Anda. </p></div></div></div></div>`);
              } else {
                _push2(`<div class="rounded-xl border shadow-sm overflow-hidden" style="${ssrRenderStyle({ "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" })}"${_scopeId}><div class="border-l-4 p-6" style="${ssrRenderStyle({ "border-color": "var(--color-success)" })}"${_scopeId}><div class="flex flex-col md:flex-row justify-between items-start md:items-center"${_scopeId}><div${_scopeId}><h3 class="text-xl font-bold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}> Informasi Pengajuan</h3><p class="text-sm mt-1" style="${ssrRenderStyle({ "color": "var(--color-text-secondary)" })}"${_scopeId}>Nomor Tracking: <span class="font-mono font-bold" style="${ssrRenderStyle({ "color": "var(--color-primary)" })}"${_scopeId}>${ssrInterpolate(__props.submission.tracking_code)}</span></p></div><div class="mt-4 md:mt-0"${_scopeId}><span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold" style="${ssrRenderStyle({
                  backgroundColor: __props.submission.status === "pending" ? "var(--color-accent-light)" : __props.submission.status === "approved" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                  color: __props.submission.status === "pending" ? "var(--color-accent-dark)" : __props.submission.status === "approved" ? "var(--color-success)" : "var(--color-error)"
                })}"${_scopeId}>${ssrInterpolate(__props.submission.status ? __props.submission.status.toUpperCase() : "UNKNOWN")}</span></div></div></div><div class="px-6 pb-6 pt-4"${_scopeId}><div class="rounded-xl p-6 border" style="${ssrRenderStyle({ "background-color": "var(--color-bg-tertiary)", "border-color": "var(--color-border-light)" })}"${_scopeId}><dl class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm"${_scopeId}><div class="col-span-2"${_scopeId}><dt class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Judul Pengajuan</dt><dd class="mt-1 font-bold text-base" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(__props.submission.title)}</dd></div><div${_scopeId}><dt class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Tanggal Diajukan</dt><dd class="mt-1 font-bold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(formatDate(__props.submission.created_at))}</dd></div><div${_scopeId}><dt class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Jenis Produk Hukum</dt><dd class="mt-1 font-bold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(__props.submission.type ? __props.submission.type.name : "-")}</dd></div><div${_scopeId}><dt class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>Unit Kerja </dt><dd class="mt-1 font-bold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(__props.submission.unit_kerja)}</dd></div><div${_scopeId}><dt class="font-medium" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>No. Nota Dinas</dt><dd class="mt-1 font-bold" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(__props.submission.nota_dinas_number)}</dd></div></dl></div></div>`);
                if (__props.submission.status_histories && __props.submission.status_histories.length > 0) {
                  _push2(`<div class="px-6 pb-6 border-t pt-6" style="${ssrRenderStyle({ "border-color": "var(--color-border-light)" })}"${_scopeId}><h4 class="text-lg font-bold mb-6" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>Riwayat Status</h4><div class="relative pl-4 ml-2 border-l-2 space-y-8" style="${ssrRenderStyle({ "border-color": "var(--color-border)" })}"${_scopeId}><!--[-->`);
                  ssrRenderList(__props.submission.status_histories, (history) => {
                    _push2(`<div class="relative pl-6"${_scopeId}><div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-white" style="${ssrRenderStyle({ "border-color": "var(--color-primary)" })}"${_scopeId}><div class="w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style="${ssrRenderStyle({ "background-color": "var(--color-primary)" })}"${_scopeId}></div></div><div${_scopeId}><p class="font-bold text-base" style="${ssrRenderStyle({ "color": "var(--color-text-primary)" })}"${_scopeId}>${ssrInterpolate(getStatusLabel(history.to_status))}</p><p class="text-xs mt-1 mb-2" style="${ssrRenderStyle({ "color": "var(--color-text-muted)" })}"${_scopeId}>${ssrInterpolate(formatDate(history.created_at))} `);
                    if (history.user) {
                      _push2(`<span class="mx-1"${_scopeId}>•</span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (history.user) {
                      _push2(`<span${_scopeId}>Oleh: ${ssrInterpolate(history.user.name)}</span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</p>`);
                    if (history.notes) {
                      _push2(`<div class="text-sm p-3 rounded-lg border inline-block max-w-full" style="${ssrRenderStyle({ "background-color": "var(--color-bg-tertiary)", "border-color": "var(--color-border-light)", "color": "var(--color-text-secondary)" })}"${_scopeId}>${ssrInterpolate(history.notes)}</div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div></div>`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="p-6 border-t flex flex-wrap justify-end gap-3" style="${ssrRenderStyle({ "background-color": "var(--color-bg-tertiary)", "border-color": "var(--color-border-light)" })}"${_scopeId}>`);
                if (__props.submission.status === "completed" && __props.submission.legal_product) {
                  _push2(ssrRenderComponent(unref(Link), {
                    href: "/produk-hukum/" + __props.submission.legal_product.slug,
                    class: "inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white",
                    style: { "background-color": "var(--color-success)" }
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId2}></path></svg> Lihat Produk Hukum `);
                      } else {
                        return [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            })
                          ])),
                          createTextVNode(" Lihat Produk Hukum ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "min-h-screen py-10 px-4 md:px-6",
                style: { "background-color": "var(--color-bg-secondary)" }
              }, [
                createVNode("div", { class: "max-w-6xl mx-auto" }, [
                  createVNode("div", {
                    class: "border-b py-8 mb-8",
                    style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                  }, [
                    createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                      createVNode("nav", {
                        class: "flex text-sm mb-4",
                        style: { "color": "var(--color-text-muted)" }
                      }, [
                        createVNode(unref(Link), {
                          href: "/",
                          class: "hover:text-[var(--color-accent-hover)] transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Beranda")
                          ]),
                          _: 1
                        }),
                        createVNode("span", {
                          class: "mx-2",
                          style: { "color": "var(--color-border-dark)" }
                        }, "/"),
                        createVNode("span", {
                          class: "font-medium",
                          style: { "color": "var(--color-text-primary)" }
                        }, "Lacak Pengajuan Produk Hukum")
                      ]),
                      createVNode("h1", {
                        class: "text-3xl font-extrabold",
                        style: { "color": "var(--color-primary)" }
                      }, "Lacak Pengajuan Produk Hukum ")
                    ])
                  ]),
                  createVNode("div", {
                    class: "rounded-xl border shadow-sm overflow-hidden mb-6",
                    style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                  }, [
                    createVNode("div", {
                      class: "border-l-4 p-6",
                      style: { "border-color": "var(--color-accent)" }
                    }, [
                      createVNode("h2", {
                        class: "text-xl font-bold mb-1",
                        style: { "color": "var(--color-text-primary)" }
                      }, "Masukkan Nomor Tracking"),
                      createVNode("p", {
                        class: "text-sm",
                        style: { "color": "var(--color-text-secondary)" }
                      }, "Cek status pengajuan produk hukum Anda dengan nomor tracking yang diberikan saat pengajuan.")
                    ]),
                    createVNode("div", { class: "px-6 pb-8" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-2xl"
                      }, [
                        createVNode("div", { class: "flex flex-col sm:flex-row gap-4" }, [
                          createVNode("div", { class: "grow" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).tracking_code = $event,
                              type: "text",
                              placeholder: "Contoh: REG-20240101-ABCD",
                              class: "w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500",
                              style: { "background-color": "var(--color-bg-input)", "color": "var(--color-text-primary)" },
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).tracking_code]
                            ])
                          ]),
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(form).processing,
                            class: "px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white flex items-center justify-center gap-2",
                            style: { "background-color": "var(--color-primary)" }
                          }, [
                            unref(form).processing ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "animate-spin h-5 w-5",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("circle", {
                                class: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                "stroke-width": "4"
                              }),
                              createVNode("path", {
                                class: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              })
                            ])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(unref(form).processing ? "Mencari..." : "Lacak Sekarang"), 1)
                          ], 8, ["disabled"])
                        ])
                      ], 32)
                    ])
                  ]),
                  createVNode(Transition, {
                    "enter-active-class": "transition ease-out duration-300",
                    "enter-from-class": "transform opacity-0 scale-95",
                    "enter-to-class": "transform opacity-100 scale-100",
                    "leave-active-class": "transition ease-in duration-200",
                    "leave-from-class": "transform opacity-100 scale-100",
                    "leave-to-class": "transform opacity-0 scale-95"
                  }, {
                    default: withCtx(() => [
                      __props.searchPerformed ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "space-y-6"
                      }, [
                        !__props.submission ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "rounded-xl border shadow-sm overflow-hidden",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-error)" }
                        }, [
                          createVNode("div", {
                            class: "border-l-4 p-6",
                            style: { "border-color": "var(--color-error)" }
                          }, [
                            createVNode("div", { class: "flex items-start gap-4" }, [
                              createVNode("div", {
                                class: "p-3 rounded-full",
                                style: { "background-color": "rgba(239, 68, 68, 0.1)" }
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-6 h-6",
                                  style: { "color": "var(--color-error)" },
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ]),
                              createVNode("div", null, [
                                createVNode("h3", {
                                  class: "font-bold text-lg",
                                  style: { "color": "var(--color-error)" }
                                }, "Data Tidak Ditemukan"),
                                createVNode("p", {
                                  class: "text-sm mt-1",
                                  style: { "color": "var(--color-text-secondary)" }
                                }, [
                                  createTextVNode(" Data pengajuan dengan nomor tracking "),
                                  createVNode("strong", { style: { "color": "var(--color-text-primary)" } }, toDisplayString(__props.filters.tracking_code), 1),
                                  createTextVNode(" tidak ditemukan. Silakan periksa kembali nomor tracking Anda. ")
                                ])
                              ])
                            ])
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "rounded-xl border shadow-sm overflow-hidden",
                          style: { "background-color": "var(--color-bg-card)", "border-color": "var(--color-border-light)" }
                        }, [
                          createVNode("div", {
                            class: "border-l-4 p-6",
                            style: { "border-color": "var(--color-success)" }
                          }, [
                            createVNode("div", { class: "flex flex-col md:flex-row justify-between items-start md:items-center" }, [
                              createVNode("div", null, [
                                createVNode("h3", {
                                  class: "text-xl font-bold",
                                  style: { "color": "var(--color-text-primary)" }
                                }, " Informasi Pengajuan"),
                                createVNode("p", {
                                  class: "text-sm mt-1",
                                  style: { "color": "var(--color-text-secondary)" }
                                }, [
                                  createTextVNode("Nomor Tracking: "),
                                  createVNode("span", {
                                    class: "font-mono font-bold",
                                    style: { "color": "var(--color-primary)" }
                                  }, toDisplayString(__props.submission.tracking_code), 1)
                                ])
                              ]),
                              createVNode("div", { class: "mt-4 md:mt-0" }, [
                                createVNode("span", {
                                  class: "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold",
                                  style: {
                                    backgroundColor: __props.submission.status === "pending" ? "var(--color-accent-light)" : __props.submission.status === "approved" ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                                    color: __props.submission.status === "pending" ? "var(--color-accent-dark)" : __props.submission.status === "approved" ? "var(--color-success)" : "var(--color-error)"
                                  }
                                }, toDisplayString(__props.submission.status ? __props.submission.status.toUpperCase() : "UNKNOWN"), 5)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "px-6 pb-6 pt-4" }, [
                            createVNode("div", {
                              class: "rounded-xl p-6 border",
                              style: { "background-color": "var(--color-bg-tertiary)", "border-color": "var(--color-border-light)" }
                            }, [
                              createVNode("dl", { class: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm" }, [
                                createVNode("div", { class: "col-span-2" }, [
                                  createVNode("dt", {
                                    class: "font-medium",
                                    style: { "color": "var(--color-text-muted)" }
                                  }, "Judul Pengajuan"),
                                  createVNode("dd", {
                                    class: "mt-1 font-bold text-base",
                                    style: { "color": "var(--color-text-primary)" }
                                  }, toDisplayString(__props.submission.title), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("dt", {
                                    class: "font-medium",
                                    style: { "color": "var(--color-text-muted)" }
                                  }, "Tanggal Diajukan"),
                                  createVNode("dd", {
                                    class: "mt-1 font-bold",
                                    style: { "color": "var(--color-text-primary)" }
                                  }, toDisplayString(formatDate(__props.submission.created_at)), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("dt", {
                                    class: "font-medium",
                                    style: { "color": "var(--color-text-muted)" }
                                  }, "Jenis Produk Hukum"),
                                  createVNode("dd", {
                                    class: "mt-1 font-bold",
                                    style: { "color": "var(--color-text-primary)" }
                                  }, toDisplayString(__props.submission.type ? __props.submission.type.name : "-"), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("dt", {
                                    class: "font-medium",
                                    style: { "color": "var(--color-text-muted)" }
                                  }, "Unit Kerja "),
                                  createVNode("dd", {
                                    class: "mt-1 font-bold",
                                    style: { "color": "var(--color-text-primary)" }
                                  }, toDisplayString(__props.submission.unit_kerja), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("dt", {
                                    class: "font-medium",
                                    style: { "color": "var(--color-text-muted)" }
                                  }, "No. Nota Dinas"),
                                  createVNode("dd", {
                                    class: "mt-1 font-bold",
                                    style: { "color": "var(--color-text-primary)" }
                                  }, toDisplayString(__props.submission.nota_dinas_number), 1)
                                ])
                              ])
                            ])
                          ]),
                          __props.submission.status_histories && __props.submission.status_histories.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "px-6 pb-6 border-t pt-6",
                            style: { "border-color": "var(--color-border-light)" }
                          }, [
                            createVNode("h4", {
                              class: "text-lg font-bold mb-6",
                              style: { "color": "var(--color-text-primary)" }
                            }, "Riwayat Status"),
                            createVNode("div", {
                              class: "relative pl-4 ml-2 border-l-2 space-y-8",
                              style: { "border-color": "var(--color-border)" }
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.submission.status_histories, (history) => {
                                return openBlock(), createBlock("div", {
                                  key: history.id,
                                  class: "relative pl-6"
                                }, [
                                  createVNode("div", {
                                    class: "absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-white",
                                    style: { "border-color": "var(--color-primary)" }
                                  }, [
                                    createVNode("div", {
                                      class: "w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                      style: { "background-color": "var(--color-primary)" }
                                    })
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("p", {
                                      class: "font-bold text-base",
                                      style: { "color": "var(--color-text-primary)" }
                                    }, toDisplayString(getStatusLabel(history.to_status)), 1),
                                    createVNode("p", {
                                      class: "text-xs mt-1 mb-2",
                                      style: { "color": "var(--color-text-muted)" }
                                    }, [
                                      createTextVNode(toDisplayString(formatDate(history.created_at)) + " ", 1),
                                      history.user ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "mx-1"
                                      }, "•")) : createCommentVNode("", true),
                                      history.user ? (openBlock(), createBlock("span", { key: 1 }, "Oleh: " + toDisplayString(history.user.name), 1)) : createCommentVNode("", true)
                                    ]),
                                    history.notes ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-sm p-3 rounded-lg border inline-block max-w-full",
                                      style: { "background-color": "var(--color-bg-tertiary)", "border-color": "var(--color-border-light)", "color": "var(--color-text-secondary)" }
                                    }, toDisplayString(history.notes), 1)) : createCommentVNode("", true)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode("div", {
                            class: "p-6 border-t flex flex-wrap justify-end gap-3",
                            style: { "background-color": "var(--color-bg-tertiary)", "border-color": "var(--color-border-light)" }
                          }, [
                            __props.submission.status === "completed" && __props.submission.legal_product ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: "/produk-hukum/" + __props.submission.legal_product.slug,
                              class: "inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white",
                              style: { "background-color": "var(--color-success)" }
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  class: "w-5 h-5 mr-2",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  })
                                ])),
                                createTextVNode(" Lihat Produk Hukum ")
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true)
                          ])
                        ]))
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Submission/Track.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About/FAQ.vue": __vite_glob_0_0, "./Pages/About/Index.vue": __vite_glob_0_1, "./Pages/About/Prasyarat.vue": __vite_glob_0_2, "./Pages/About/Privacy.vue": __vite_glob_0_3, "./Pages/About/Show.vue": __vite_glob_0_4, "./Pages/About/Structure.vue": __vite_glob_0_5, "./Pages/Contact/Index.vue": __vite_glob_0_6, "./Pages/Glossary/Index.vue": __vite_glob_0_7, "./Pages/Home.vue": __vite_glob_0_8, "./Pages/Infographics/Index.vue": __vite_glob_0_9, "./Pages/Information/Index.vue": __vite_glob_0_10, "./Pages/Information/Show.vue": __vite_glob_0_11, "./Pages/LegalDictionary/Index.vue": __vite_glob_0_12, "./Pages/ProdukHukum/Index.vue": __vite_glob_0_13, "./Pages/ProdukHukum/Show.vue": __vite_glob_0_14, "./Pages/Statistics/Index.vue": __vite_glob_0_15, "./Pages/Submission/Create.vue": __vite_glob_0_16, "./Pages/Submission/Track.vue": __vite_glob_0_17 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).use(ZiggyVue, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
    }
  })
);
