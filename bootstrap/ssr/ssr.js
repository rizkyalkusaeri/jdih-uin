import { ref, watch, mergeProps, useSSRContext, unref, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, withDirectives, vShow, createCommentVNode, resolveComponent, withModifiers, vModelSelect, vModelText, computed, withKeys, onMounted, onUnmounted, Transition, vModelCheckbox, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { usePage, Head, Link, useForm, router, createInertiaApp } from "@inertiajs/vue3";
import { route, ZiggyVue } from "ziggy-js";
import { debounce } from "lodash";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js";
import { Bar, Pie, Doughnut } from "vue-chartjs";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$i = {
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
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-4 right-4 z-[9999] max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden" }, _attrs))}><div class="p-4"><div class="flex items-start"><div class="flex-shrink-0">`);
        if (type.value === "success") {
          _push(`<svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<svg class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        }
        _push(`</div><div class="ml-3 w-0 flex-1 pt-0.5"><p class="text-sm font-medium text-gray-900">${ssrInterpolate(type.value === "success" ? "Berhasil!" : "Error!")}</p><p class="mt-1 text-sm text-gray-500">${ssrInterpolate(message.value)}</p></div><div class="ml-4 flex-shrink-0 flex"><button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><span class="sr-only">Close</span><svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toast.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SeoHead.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-50 font-sans text-gray-900">`);
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`<header class="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-20 items-center"><div class="shrink-0 flex items-center gap-3"><a href="https://jdihn.go.id/" target="_blank" rel="noopener noreferrer"><img src="/images/logo-jdihn.png" alt="Jaringan Dokumentasi dan Informasi Hukum Nasional" class="h-12 w-auto"></a>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/jdih.png" alt="Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati" class="h-12 w-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/jdih.png",
                alt: "Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati",
                class: "h-12 w-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hidden md:block"${_scopeId}><h1 class="text-xl font-bold text-[#0F213A] leading-tight"${_scopeId}>JDIH UIN SGD</h1><p class="text-xs text-gray-500"${_scopeId}>Jaringan Dokumentasi &amp; Informasi Hukum</p></div>`);
          } else {
            return [
              createVNode("div", { class: "hidden md:block" }, [
                createVNode("h1", { class: "text-xl font-bold text-[#0F213A] leading-tight" }, "JDIH UIN SGD"),
                createVNode("p", { class: "text-xs text-gray-500" }, "Jaringan Dokumentasi & Informasi Hukum")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex space-x-8 items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: [unref(page).component === "Home" ? "text-yellow-500 font-bold" : "text-gray-600 font-semibold hover:text-yellow-500", "transition"]
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
      _push(ssrRenderComponent(unref(Link), {
        href: "/produk-hukum",
        class: [unref(page).component.startsWith("ProdukHukum") ? "text-yellow-500 font-bold" : "text-gray-600 font-semibold hover:text-yellow-500", "transition"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Produk Hukum `);
          } else {
            return [
              createTextVNode(" Produk Hukum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative group"><button class="${ssrRenderClass([{ "text-yellow-500 font-bold": _ctx.route().current("information.*") || _ctx.route().current("infographics.*") || _ctx.route().current("glossary.*") || _ctx.route().current("legal-dictionary.*") }, "flex items-center gap-1 text-gray-600 font-semibold hover:text-yellow-500 transition focus:outline-none"])}"> Informasi Hukum <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">`);
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
      _push(`</div></div><div class="relative group"><button class="${ssrRenderClass([{ "text-yellow-500 font-bold": _ctx.route().current("about.index") || _ctx.route().current("about.structure") || _ctx.route().current("about.faq") || _ctx.route().current("about.prasyarat") || _ctx.route().current("about.privacy") }, "flex items-center gap-1 text-gray-600 font-semibold hover:text-yellow-500 transition focus:outline-none"])}"> Tentang <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button><div class="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("about.index") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profil JDIH `);
          } else {
            return [
              createTextVNode(" Profil JDIH ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/struktur-organisasi",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("about.structure") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Struktur Organisasi `);
          } else {
            return [
              createTextVNode(" Struktur Organisasi ")
            ];
          }
        }),
        _: 1
      }, _parent));
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
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/prasyarat",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("about.prasyarat") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Prasyarat `);
          } else {
            return [
              createTextVNode(" Prasyarat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/kebijakan-privasi",
        class: ["block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700", { "font-bold text-yellow-600 bg-yellow-50": _ctx.route().current("about.privacy") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kebijakan Privasi `);
          } else {
            return [
              createTextVNode(" Kebijakan Privasi ")
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
        class: [unref(page).component === "Home" ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-3 pe-4 py-2 border-l-4 text-start text-base font-medium focus:outline-none transition duration-150 ease-in-out"]
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
      _push(ssrRenderComponent(unref(Link), {
        href: "/produk-hukum",
        class: [unref(page).component.startsWith("ProdukHukum") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-3 pe-4 py-2 border-l-4 text-start text-base font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Produk Hukum `);
          } else {
            return [
              createTextVNode(" Produk Hukum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-1"><div class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600"> Berita, Event &amp; Dokumentasi </div>`);
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
      _push(`</div><div class="space-y-1"><div class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600"> Tentang </div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang",
        class: [_ctx.route().current("about.index") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profil JDIH `);
          } else {
            return [
              createTextVNode(" Profil JDIH ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/struktur-organisasi",
        class: [_ctx.route().current("about.structure") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Struktur Organisasi `);
          } else {
            return [
              createTextVNode(" Struktur Organisasi ")
            ];
          }
        }),
        _: 1
      }, _parent));
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
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/prasyarat",
        class: [_ctx.route().current("about.prasyarat") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Prasyarat `);
          } else {
            return [
              createTextVNode(" Prasyarat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/tentang/kebijakan-privasi",
        class: [_ctx.route().current("about.privacy") ? "border-yellow-400 text-[#0F213A] bg-yellow-50" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300", "block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kebijakan Privasi `);
          } else {
            return [
              createTextVNode(" Kebijakan Privasi ")
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
      _push(`</main><footer class="bg-[#0F213A] text-white pt-16 pb-8"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"><div class="space-y-4"><div class="flex items-center gap-3"><img src="/images/jdih.png" alt="Logo" class="h-10 w-auto bg-white rounded-full p-1"><div><h3 class="text-lg font-bold">JDIH UIN SGD</h3></div></div><p class="text-gray-400 text-sm leading-relaxed"> Jaringan Dokumentasi dan Informasi Hukum Universitas Islam Negeri Sunan Gunung Djati Bandung. Wadah pendayaggunaan bersama atas dokumen hukum secara tertib, terpadu, dan berkesinambungan. </p></div><div><h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Tautan Cepat</h4><ul class="space-y-3 text-sm text-gray-400"><li><a href="/tentang" class="hover:text-yellow-400 transition">Profil JDIH</a></li><li><a href="/tentang/struktur-organisasi" class="hover:text-yellow-400 transition">Struktur Organisasi</a></li><li><a href="/tentang/faq" class="hover:text-yellow-400 transition">FAQ</a></li><li><a href="/kontak" class="hover:text-yellow-400 transition">Kontak Kami</a></li></ul></div><div><h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Kontak Kami</h4><ul class="space-y-4 text-sm text-gray-400"><li class="flex items-start gap-3"><svg class="w-5 h-5 text-yellow-400 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>Jl. A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614</span></li><li class="flex items-center gap-3"><svg class="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span>+62 22 7800525</span></li><li class="flex items-center gap-3"><svg class="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span>jdih@uinsgd.ac.id</span></li></ul></div></div><div class="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400"><p>© 2024 JDIH UIN Sunan Gunung Djati Bandung. All Rights Reserved.</p><div class="flex space-x-6 mt-4 md:mt-0"><a href="/tentang/kebijakan-privasi" class="hover:text-white transition">Kebijakan Privasi</a><a href="/tentang/prasyarat" class="hover:text-white transition">Syarat &amp; Ketentuan</a></div></div></div></footer></div><!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$f = {
  __name: "FAQ",
  __ssrInlineRender: true,
  props: {
    links: Array
  },
  setup(__props) {
    const faqs = ref([
      {
        question: "Apa itu JDIH UIN SGD?",
        answer: "JDIH UIN SGD adalah Jaringan Dokumentasi dan Informasi Hukum di lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung. Sistem ini menyediakan akses terhadap berbagai koleksi produk hukum yang berlaku di universitas serta instrumen hukum lainnya.",
        isOpen: true
      },
      {
        question: "Bagaimana cara mencari produk hukum?",
        answer: "Anda dapat menggunakan fitur pencarian di halaman Beranda atau halaman Produk Hukum. Masukkan kata kunci seperti judul, nomor, atau tahun peraturan untuk menemukan dokumen yang Anda cari. Anda juga dapat menggunakan filter pencarian untuk hasil yang lebih spesifik.",
        isOpen: false
      },
      {
        question: "Apakah saya perlu mendaftar untuk mengunduh dokumen?",
        answer: "Sebagian besar dokumen produk hukum yang bersifat publik dapat diunduh tanpa perlu mendaftar. Namun, untuk fitur tertentu atau dokumen khusus, mungkin diperlukan akses login.",
        isOpen: false
      },
      {
        question: "Bagaimana jika saya menemukan tautan yang rusak?",
        answer: "Jika Anda menemukan tautan yang rusak atau masalah pada website, silakan hubungi kami melalui halaman Kontak atau widget 'Butuh Bantuan' yang tersedia.",
        isOpen: false
      },
      {
        question: "Apakah informasi di website ini selalu diperbarui?",
        answer: "Ya, kami berkomitmen untuk selalu memperbarui basis data produk hukum kami segera setelah ada peraturan baru yang diterbitkan atau perubahan status pada peraturan yang sudah ada.",
        isOpen: false
      }
    ]);
    const toggleFaq = (index) => {
      faqs.value[index].isOpen = !faqs.value[index].isOpen;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "FAQ - JDIH UIN SGD",
        description: "Pertanyaan yang sering diajukan mengenai layanan Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8" data-v-f90acb9c${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-f90acb9c${_scopeId}><nav class="flex text-sm text-gray-500 mb-4" data-v-f90acb9c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300" data-v-f90acb9c${_scopeId}>/</span><span class="text-gray-500" data-v-f90acb9c${_scopeId}>Tentang</span><span class="mx-2 text-gray-300" data-v-f90acb9c${_scopeId}>/</span><span class="text-[#0F213A] font-medium" data-v-f90acb9c${_scopeId}>FAQ</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]" data-v-f90acb9c${_scopeId}>Frequently Asked Questions</h1></div></div><div class="bg-gray-50 py-12" data-v-f90acb9c${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-f90acb9c${_scopeId}><div class="flex flex-col lg:flex-row gap-8" data-v-f90acb9c${_scopeId}><div class="lg:w-2/3 space-y-8" data-v-f90acb9c${_scopeId}><div class="space-y-4" data-v-f90acb9c${_scopeId}><!--[-->`);
            ssrRenderList(faqs.value, (faq, index) => {
              _push2(`<div class="${ssrRenderClass([{ "shadow-md": faq.isOpen }, "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"])}" data-v-f90acb9c${_scopeId}><button class="w-full flex items-center justify-between p-6 text-left focus:outline-none" data-v-f90acb9c${_scopeId}><span class="font-bold text-[#0F213A] text-lg pr-8" data-v-f90acb9c${_scopeId}>${ssrInterpolate(faq.question)}</span><div class="${ssrRenderClass([{ "bg-yellow-50 text-yellow-600": faq.isOpen }, "w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 transition-colors"])}" data-v-f90acb9c${_scopeId}><svg class="${ssrRenderClass([{ "rotate-180": faq.isOpen }, "w-5 h-5 transition-transform duration-300"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f90acb9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-f90acb9c${_scopeId}></path></svg></div></button><div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 animate-fadeIn" style="${ssrRenderStyle(faq.isOpen ? null : { display: "none" })}" data-v-f90acb9c${_scopeId}>${ssrInterpolate(faq.answer)}</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="lg:w-1/3 space-y-8" data-v-f90acb9c${_scopeId}><div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24" data-v-f90acb9c${_scopeId}><div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6" data-v-f90acb9c${_scopeId}><svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f90acb9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" data-v-f90acb9c${_scopeId}></path></svg></div><h3 class="font-bold text-xl mb-2" data-v-f90acb9c${_scopeId}>Butuh Bantuan?</h3><p class="text-gray-400 text-sm mb-8 leading-relaxed" data-v-f90acb9c${_scopeId}> Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/kontak",
              class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-f90acb9c${_scopeId2}>Kontak Kami</span><svg class="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f90acb9c${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-f90acb9c${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("span", null, "Kontak Kami"),
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 group-hover:translate-x-1 transition",
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
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-8 pt-8 border-t border-gray-700/50" data-v-f90acb9c${_scopeId}><p class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4" data-v-f90acb9c${_scopeId}>Atau hubungi via</p><div class="flex justify-center gap-4" data-v-f90acb9c${_scopeId}><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition" data-v-f90acb9c${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-f90acb9c${_scopeId}><path d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" data-v-f90acb9c${_scopeId}></path></svg></a><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition" data-v-f90acb9c${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-v-f90acb9c${_scopeId}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" data-v-f90acb9c${_scopeId}></path></svg></a></div></div></div>`);
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6" data-v-f90acb9c${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2" data-v-f90acb9c${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f90acb9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" data-v-f90acb9c${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3" data-v-f90acb9c${_scopeId}><!--[-->`);
              ssrRenderList(__props.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.url)} target="_blank" class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group" data-v-f90acb9c${_scopeId}><div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden" data-v-f90acb9c${_scopeId}>`);
                if (link.logo_path) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("links.logo", link.id))} class="w-full h-full object-cover"${ssrRenderAttr("alt", link.title)} data-v-f90acb9c${_scopeId}>`);
                } else {
                  _push2(`<svg class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f90acb9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" data-v-f90acb9c${_scopeId}></path></svg>`);
                }
                _push2(`</div><span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight" data-v-f90acb9c${_scopeId}>${ssrInterpolate(link.title)}</span><svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-f90acb9c${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-v-f90acb9c${_scopeId}></path></svg></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-gray-500" }, "Tentang"),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "FAQ")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Frequently Asked Questions")
                ])
              ]),
              createVNode("div", { class: "bg-gray-50 py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(faqs.value, (faq, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: ["bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300", { "shadow-md": faq.isOpen }]
                          }, [
                            createVNode("button", {
                              onClick: ($event) => toggleFaq(index),
                              class: "w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            }, [
                              createVNode("span", { class: "font-bold text-[#0F213A] text-lg pr-8" }, toDisplayString(faq.question), 1),
                              createVNode("div", {
                                class: ["w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 transition-colors", { "bg-yellow-50 text-yellow-600": faq.isOpen }]
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
                              ], 2)
                            ], 8, ["onClick"]),
                            withDirectives(createVNode("div", { class: "px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 animate-fadeIn" }, toDisplayString(faq.answer), 513), [
                              [vShow, faq.isOpen]
                            ])
                          ], 2);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode("div", { class: "bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24" }, [
                        createVNode("div", { class: "w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-yellow-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "font-bold text-xl mb-2" }, "Butuh Bantuan?"),
                        createVNode("p", { class: "text-gray-400 text-sm mb-8 leading-relaxed" }, " Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. "),
                        createVNode(unref(Link), {
                          href: "/kontak",
                          class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Kontak Kami"),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 group-hover:translate-x-1 transition",
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
                        }),
                        createVNode("div", { class: "mt-8 pt-8 border-t border-gray-700/50" }, [
                          createVNode("p", { class: "text-xs text-gray-500 uppercase tracking-widest font-bold mb-4" }, "Atau hubungi via"),
                          createVNode("div", { class: "flex justify-center gap-4" }, [
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" })
                              ]))
                            ]),
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" })
                              ]))
                            ])
                          ])
                        ])
                      ]),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                      }, [
                        createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/FAQ.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const FAQ = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-f90acb9c"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FAQ
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    links: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Tentang JDIH - JDIH UIN SGD",
        description: "Tentang Jaringan Dokumentasi dan Informasi Hukum Universitas Islam Negeri Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Tentang JDIH</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Tentang JDIH UIN SGD</h1></div></div><div class="bg-gray-50 py-12"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><h2 class="text-2xl font-bold text-[#0F213A] mb-4"${_scopeId}>Tentang JDIH UIN SGD</h2><div class="prose prose-yellow text-gray-600 max-w-none"${_scopeId}><p${_scopeId}> Jaringan Dokumentasi dan Informasi Hukum (JDIH) Universitas Islam Negeri Sunan Gunung Djati Bandung adalah wadah pendayagunaan bersama atas dokumen hukum secara tertib, terpadu, dan berkesinambungan yang bersarana pemberian pelayanan informasi hukum secara lengkap, akurat, mudah, dan cepat. </p></div></div><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><h2 class="text-xl font-bold text-[#0F213A] mb-4"${_scopeId}>Dasar Hukum</h2><ul class="list-disc list-inside space-y-2 text-gray-600"${_scopeId}><li${_scopeId}>Peraturan Presiden Nomor 33 Tahun 2012 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional. </li><li${_scopeId}>Peraturan Menteri Hukum dan Hak Asasi Manusia Nomor 8 Tahun 2019 tentang Standar Pengelolaan Dokumen dan Informasi Hukum.</li><li${_scopeId}>Keputusan Rektor UIN Sunan Gunung Djati Bandung tentang Pembentukan Tim Pengelola JDIH.</li></ul></div><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><h2 class="text-xl font-bold text-[#0F213A] mb-4"${_scopeId}>Visi dan Misi</h2><div class="mb-6"${_scopeId}><h3 class="font-bold text-lg text-gray-800 mb-2"${_scopeId}>Visi</h3><p class="text-gray-600 italic"${_scopeId}> &quot;Terwujudnya Jaringan Dokumentasi dan Informasi Hukum yang Terpadu dan Terintegrasi untuk Mendukung UIN Sunan Gunung Djati Bandung yang Unggul dan Kompetitif.&quot; </p></div><div${_scopeId}><h3 class="font-bold text-lg text-gray-800 mb-2"${_scopeId}>Misi</h3><ul class="list-decimal list-inside space-y-2 text-gray-600"${_scopeId}><li${_scopeId}>Mewujudkan pengelolaan dokumentasi dan informasi hukum yang tertib, terpadu, dan berkesinambungan. </li><li${_scopeId}>Menyediakan informasi hukum yang lengkap, akurat, mudah, dan cepat diakses.</li><li${_scopeId}>Mengembangkan kerjasama jaringan dokumentasi dan informasi hukum dengan instansi lain.</li><li${_scopeId}>Meningkatkan kualitas sumber daya manusia pengelola JDIH.</li></ul></div></div><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><h2 class="text-xl font-bold text-[#0F213A] mb-4"${_scopeId}>Maksud dan Tujuan</h2><div class="space-y-4 text-gray-600"${_scopeId}><p${_scopeId}><strong class="text-gray-800"${_scopeId}>Maksud:</strong><br${_scopeId}> Penyelenggaraan JDIH dimaksudkan untuk menjamin ketersediaan dokumentasi dan informasi hukum yang lengkap dan akurat, serta dapat diakses secara cepat dan mudah oleh sivitas akademika dan masyarakat umum. </p><p${_scopeId}><strong class="text-gray-800"${_scopeId}>Tujuan:</strong><br${_scopeId}><ul class="list-disc list-inside mt-2 space-y-1"${_scopeId}><li${_scopeId}>Menjamin terciptanya pengelolaan dokumentasi dan informasi hukum yang terpadu dan terintegrasi. </li><li${_scopeId}>Menjamin ketersediaan dokumentasi dan informasi hukum yang lengkap dan akurat.</li><li${_scopeId}>Meningkatkan kualitas pelayanan informasi hukum kepada publik.</li><li${_scopeId}>Mendukung proses pengambilan keputusan dan pembentukan produk hukum di lingkungan Universitas. </li></ul></p></div></div></div><div class="lg:w-1/3 space-y-8"${_scopeId}><div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24"${_scopeId}><div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"${_scopeId}><svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"${_scopeId}></path></svg></div><h3 class="font-bold text-xl mb-2"${_scopeId}>Butuh Bantuan?</h3><p class="text-gray-400 text-sm mb-8 leading-relaxed"${_scopeId}> Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/kontak",
              class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Kontak Kami</span><svg class="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("span", null, "Kontak Kami"),
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 group-hover:translate-x-1 transition",
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
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-8 pt-8 border-t border-gray-700/50"${_scopeId}><p class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4"${_scopeId}>Atau hubungi via</p><div class="flex justify-center gap-4"${_scopeId}><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z"${_scopeId}></path></svg></a><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"${_scopeId}></path></svg></a></div></div></div>`);
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
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
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Tentang JDIH")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Tentang JDIH UIN SGD")
                ])
              ]),
              createVNode("div", { class: "bg-gray-50 py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("h2", { class: "text-2xl font-bold text-[#0F213A] mb-4" }, "Tentang JDIH UIN SGD"),
                        createVNode("div", { class: "prose prose-yellow text-gray-600 max-w-none" }, [
                          createVNode("p", null, " Jaringan Dokumentasi dan Informasi Hukum (JDIH) Universitas Islam Negeri Sunan Gunung Djati Bandung adalah wadah pendayagunaan bersama atas dokumen hukum secara tertib, terpadu, dan berkesinambungan yang bersarana pemberian pelayanan informasi hukum secara lengkap, akurat, mudah, dan cepat. ")
                        ])
                      ]),
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-4" }, "Dasar Hukum"),
                        createVNode("ul", { class: "list-disc list-inside space-y-2 text-gray-600" }, [
                          createVNode("li", null, "Peraturan Presiden Nomor 33 Tahun 2012 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional. "),
                          createVNode("li", null, "Peraturan Menteri Hukum dan Hak Asasi Manusia Nomor 8 Tahun 2019 tentang Standar Pengelolaan Dokumen dan Informasi Hukum."),
                          createVNode("li", null, "Keputusan Rektor UIN Sunan Gunung Djati Bandung tentang Pembentukan Tim Pengelola JDIH.")
                        ])
                      ]),
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-4" }, "Visi dan Misi"),
                        createVNode("div", { class: "mb-6" }, [
                          createVNode("h3", { class: "font-bold text-lg text-gray-800 mb-2" }, "Visi"),
                          createVNode("p", { class: "text-gray-600 italic" }, ' "Terwujudnya Jaringan Dokumentasi dan Informasi Hukum yang Terpadu dan Terintegrasi untuk Mendukung UIN Sunan Gunung Djati Bandung yang Unggul dan Kompetitif." ')
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "font-bold text-lg text-gray-800 mb-2" }, "Misi"),
                          createVNode("ul", { class: "list-decimal list-inside space-y-2 text-gray-600" }, [
                            createVNode("li", null, "Mewujudkan pengelolaan dokumentasi dan informasi hukum yang tertib, terpadu, dan berkesinambungan. "),
                            createVNode("li", null, "Menyediakan informasi hukum yang lengkap, akurat, mudah, dan cepat diakses."),
                            createVNode("li", null, "Mengembangkan kerjasama jaringan dokumentasi dan informasi hukum dengan instansi lain."),
                            createVNode("li", null, "Meningkatkan kualitas sumber daya manusia pengelola JDIH.")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-4" }, "Maksud dan Tujuan"),
                        createVNode("div", { class: "space-y-4 text-gray-600" }, [
                          createVNode("p", null, [
                            createVNode("strong", { class: "text-gray-800" }, "Maksud:"),
                            createVNode("br"),
                            createTextVNode(" Penyelenggaraan JDIH dimaksudkan untuk menjamin ketersediaan dokumentasi dan informasi hukum yang lengkap dan akurat, serta dapat diakses secara cepat dan mudah oleh sivitas akademika dan masyarakat umum. ")
                          ]),
                          createVNode("p", null, [
                            createVNode("strong", { class: "text-gray-800" }, "Tujuan:"),
                            createVNode("br"),
                            createVNode("ul", { class: "list-disc list-inside mt-2 space-y-1" }, [
                              createVNode("li", null, "Menjamin terciptanya pengelolaan dokumentasi dan informasi hukum yang terpadu dan terintegrasi. "),
                              createVNode("li", null, "Menjamin ketersediaan dokumentasi dan informasi hukum yang lengkap dan akurat."),
                              createVNode("li", null, "Meningkatkan kualitas pelayanan informasi hukum kepada publik."),
                              createVNode("li", null, "Mendukung proses pengambilan keputusan dan pembentukan produk hukum di lingkungan Universitas. ")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode("div", { class: "bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24" }, [
                        createVNode("div", { class: "w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-yellow-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "font-bold text-xl mb-2" }, "Butuh Bantuan?"),
                        createVNode("p", { class: "text-gray-400 text-sm mb-8 leading-relaxed" }, " Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. "),
                        createVNode(unref(Link), {
                          href: "/kontak",
                          class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Kontak Kami"),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 group-hover:translate-x-1 transition",
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
                        }),
                        createVNode("div", { class: "mt-8 pt-8 border-t border-gray-700/50" }, [
                          createVNode("p", { class: "text-xs text-gray-500 uppercase tracking-widest font-bold mb-4" }, "Atau hubungi via"),
                          createVNode("div", { class: "flex justify-center gap-4" }, [
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" })
                              ]))
                            ]),
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" })
                              ]))
                            ])
                          ])
                        ])
                      ]),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                      }, [
                        createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Index.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "Prasyarat",
  __ssrInlineRender: true,
  props: {
    links: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Prasyarat & Syarat Penggunaan - JDIH UIN SGD",
        description: "Syarat dan ketentuan penggunaan layanan Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-gray-500"${_scopeId}>Tentang</span><span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Prasyarat</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Prasyarat &amp; Syarat Penggunaan</h1></div></div><div class="bg-gray-50 py-12"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><div class="prose prose-yellow text-gray-600 max-w-none"${_scopeId}><h2 class="text-xl font-bold text-[#0F213A] mb-2"${_scopeId}>Prasyarat</h2><p${_scopeId}> Harap baca dengan saksama syarat penggunaan di bawah ini sebelum menggunakan situs web ini, agar Anda dapat menggunakan informasi di situs web ini. Jika Anda tidak menyetujui syarat penggunaan, Anda tidak boleh melanjutkan ke langkah berikutnya. Jika Anda langsung menuju halaman berikutnya, maka Anda dianggap memahami dan menyetujui isi syarat penggunaan. Syarat-syarat ini dapat berubah dari waktu ke waktu sesuai dengan kebijakan yang telah ditetapkan, oleh karena itu diharapkan Anda mengikuti perkembangannya secara berkala. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Presentasi</h2><p${_scopeId}> Situs web ini dibangun untuk kenyamanan pengunjung. Untuk itu, kami berusaha menyajikan semua informasi (teks, grafik, dan semua atribut yang ada) sebaik mungkin. Semua halaman situs web ini dirancang untuk berjalan pada berbagai ukuran layar. Gunakan browser Chrome, Firefox, Safari, atau Internet Explorer (versi 11.00 ke atas) untuk mendapatkan hasil terbaik dari layanan ini. Namun, kami tidak dapat menjamin bahwa informasi yang kami berikan dapat memenuhi keinginan semua pengguna situs web ini. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Hak Cipta</h2><p${_scopeId}> Situs ini dilindungi hak cipta dan telah terdaftar secara resmi di Sekretariat UIN Sunan Gunung Djati Bandung. Oleh karena itu, seluruh konten (teks, grafik, dan media lainnya) di situs web ini adalah hak cipta dan milik UIN Sunan Gunung Djati Bandung. Semua bentuk penggunaan komersial materi harus mendapatkan izin dari Sekretaris UIN Sunan Gunung Djati Bandung. Setiap tindakan yang sengaja menyebabkan kerusakan pada data, program, informasi, dan hal-hal terkait dengannya, dianggap sebagai pelanggaran hukum. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Virus</h2><p${_scopeId}> Dampak perkembangan teknologi informasi adalah munculnya virus komputer baru di internet, sehingga kami memperingatkan Anda tentang bahaya yang ditimbulkan virus ini terhadap sistem Anda. Merupakan tanggung jawab Anda untuk mendeteksi semua materi yang diunduh dari internet. Kami tidak bertanggung jawab atas kerugian atau kerusakan apa pun yang disebabkan oleh virus. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Keamanan</h2><p${_scopeId}> Penggunaan internet dan email tidak bersifat rahasia. Karena ada kemungkinan informasi yang dikirimkan kepada kami dibaca atau digunakan oleh pihak lain. Untuk melindungi kerahasiaan Anda, disarankan agar email yang dikirim tidak memuat informasi sensitif seperti nilai rekening, laporan keuangan, dll. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Akses</h2><p${_scopeId}> Kami berhak untuk menghentikan akses yang tidak sah dan berbahaya ke situs ini untuk melindungi semua konten yang terdapat di dalamnya. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Umpan Balik</h2><p${_scopeId}> Kami menghargai setiap umpan balik yang diberikan kepada kami, untuk menghindari kesalahpahaman. Apa pun yang Anda kirimkan kepada kami, baik ide, saran, dll., akan menjadi milik kami tanpa kompensasi dan tidak ada klaim atasnya. </p></div></div></div><div class="lg:w-1/3 space-y-8"${_scopeId}><div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24"${_scopeId}><div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"${_scopeId}><svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"${_scopeId}></path></svg></div><h3 class="font-bold text-xl mb-2"${_scopeId}>Butuh Bantuan?</h3><p class="text-gray-400 text-sm mb-8 leading-relaxed"${_scopeId}> Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/kontak",
              class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Kontak Kami</span><svg class="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("span", null, "Kontak Kami"),
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 group-hover:translate-x-1 transition",
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
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-8 pt-8 border-t border-gray-700/50"${_scopeId}><p class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4"${_scopeId}>Atau hubungi via</p><div class="flex justify-center gap-4"${_scopeId}><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z"${_scopeId}></path></svg></a><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"${_scopeId}></path></svg></a></div></div></div>`);
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
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
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-gray-500" }, "Tentang"),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Prasyarat")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Prasyarat & Syarat Penggunaan")
                ])
              ]),
              createVNode("div", { class: "bg-gray-50 py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("div", { class: "prose prose-yellow text-gray-600 max-w-none" }, [
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2" }, "Prasyarat"),
                          createVNode("p", null, " Harap baca dengan saksama syarat penggunaan di bawah ini sebelum menggunakan situs web ini, agar Anda dapat menggunakan informasi di situs web ini. Jika Anda tidak menyetujui syarat penggunaan, Anda tidak boleh melanjutkan ke langkah berikutnya. Jika Anda langsung menuju halaman berikutnya, maka Anda dianggap memahami dan menyetujui isi syarat penggunaan. Syarat-syarat ini dapat berubah dari waktu ke waktu sesuai dengan kebijakan yang telah ditetapkan, oleh karena itu diharapkan Anda mengikuti perkembangannya secara berkala. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Presentasi"),
                          createVNode("p", null, " Situs web ini dibangun untuk kenyamanan pengunjung. Untuk itu, kami berusaha menyajikan semua informasi (teks, grafik, dan semua atribut yang ada) sebaik mungkin. Semua halaman situs web ini dirancang untuk berjalan pada berbagai ukuran layar. Gunakan browser Chrome, Firefox, Safari, atau Internet Explorer (versi 11.00 ke atas) untuk mendapatkan hasil terbaik dari layanan ini. Namun, kami tidak dapat menjamin bahwa informasi yang kami berikan dapat memenuhi keinginan semua pengguna situs web ini. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Hak Cipta"),
                          createVNode("p", null, " Situs ini dilindungi hak cipta dan telah terdaftar secara resmi di Sekretariat UIN Sunan Gunung Djati Bandung. Oleh karena itu, seluruh konten (teks, grafik, dan media lainnya) di situs web ini adalah hak cipta dan milik UIN Sunan Gunung Djati Bandung. Semua bentuk penggunaan komersial materi harus mendapatkan izin dari Sekretaris UIN Sunan Gunung Djati Bandung. Setiap tindakan yang sengaja menyebabkan kerusakan pada data, program, informasi, dan hal-hal terkait dengannya, dianggap sebagai pelanggaran hukum. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Virus"),
                          createVNode("p", null, " Dampak perkembangan teknologi informasi adalah munculnya virus komputer baru di internet, sehingga kami memperingatkan Anda tentang bahaya yang ditimbulkan virus ini terhadap sistem Anda. Merupakan tanggung jawab Anda untuk mendeteksi semua materi yang diunduh dari internet. Kami tidak bertanggung jawab atas kerugian atau kerusakan apa pun yang disebabkan oleh virus. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Keamanan"),
                          createVNode("p", null, " Penggunaan internet dan email tidak bersifat rahasia. Karena ada kemungkinan informasi yang dikirimkan kepada kami dibaca atau digunakan oleh pihak lain. Untuk melindungi kerahasiaan Anda, disarankan agar email yang dikirim tidak memuat informasi sensitif seperti nilai rekening, laporan keuangan, dll. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Akses"),
                          createVNode("p", null, " Kami berhak untuk menghentikan akses yang tidak sah dan berbahaya ke situs ini untuk melindungi semua konten yang terdapat di dalamnya. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Umpan Balik"),
                          createVNode("p", null, " Kami menghargai setiap umpan balik yang diberikan kepada kami, untuk menghindari kesalahpahaman. Apa pun yang Anda kirimkan kepada kami, baik ide, saran, dll., akan menjadi milik kami tanpa kompensasi dan tidak ada klaim atasnya. ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode("div", { class: "bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24" }, [
                        createVNode("div", { class: "w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-yellow-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "font-bold text-xl mb-2" }, "Butuh Bantuan?"),
                        createVNode("p", { class: "text-gray-400 text-sm mb-8 leading-relaxed" }, " Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. "),
                        createVNode(unref(Link), {
                          href: "/kontak",
                          class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Kontak Kami"),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 group-hover:translate-x-1 transition",
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
                        }),
                        createVNode("div", { class: "mt-8 pt-8 border-t border-gray-700/50" }, [
                          createVNode("p", { class: "text-xs text-gray-500 uppercase tracking-widest font-bold mb-4" }, "Atau hubungi via"),
                          createVNode("div", { class: "flex justify-center gap-4" }, [
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" })
                              ]))
                            ]),
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" })
                              ]))
                            ])
                          ])
                        ])
                      ]),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                      }, [
                        createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Prasyarat.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "Privacy",
  __ssrInlineRender: true,
  props: {
    links: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Kebijakan Privasi - JDIH UIN SGD",
        description: "Kebijakan Privasi Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-gray-500"${_scopeId}>Tentang</span><span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Kebijakan Privasi</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Kebijakan Privasi</h1></div></div><div class="bg-gray-50 py-12"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><div class="prose prose-yellow text-gray-600 max-w-none"${_scopeId}><h2 class="text-xl font-bold text-[#0F213A] mb-2"${_scopeId}>Pendahuluan</h2><p${_scopeId}> Kami di JDIH UIN Sunan Gunung Djati Bandung menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan situs web kami. Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Informasi yang Kami Kumpulkan</h2><p${_scopeId}> Kami dapat mengumpulkan informasi yang dapat mengidentifikasi Anda secara pribadi (&quot;Informasi Pribadi&quot;), seperti nama, alamat email, dan nomor telepon, terutama ketika Anda menghubungi kami melalui formulir kontak atau menggunakan layanan tertentu. Kami juga mengumpulkan informasi non-pribadi secara otomatis, seperti alamat IP, jenis browser, halaman yang dikunjungi, dan waktu akses, untuk tujuan analitik dan peningkatan layanan. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Penggunaan Informasi</h2><p${_scopeId}> Informasi yang kami kumpulkan digunakan untuk: <ul${_scopeId}><li${_scopeId}>Menyediakan dan memelihara layanan kami.</li><li${_scopeId}>Memberitahu Anda tentang perubahan pada layanan kami.</li><li${_scopeId}>Memungkinkan Anda untuk berpartisipasi dalam fitur interaktif layanan kami.</li><li${_scopeId}>Memberikan dukungan pelanggan.</li><li${_scopeId}>Mengumpulkan analisis atau informasi berharga sehingga kami dapat meningkatkan layanan kami.</li><li${_scopeId}>Memantau penggunaan layanan kami.</li><li${_scopeId}>Mendeteksi, mencegah, dan mengatasi masalah teknis.</li></ul></p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Cookies</h2><p${_scopeId}> Kami menggunakan cookie dan teknologi pelacakan serupa untuk melacak aktivitas di layanan kami dan menyimpan informasi tertentu. Cookie adalah file dengan sejumlah kecil data yang mungkin menyertakan pengenal unik anonim. Anda dapat menginstruksikan browser Anda untuk menolak semua cookie atau untuk menunjukkan kapan cookie dikirim. Namun, jika Anda tidak menerima cookie, Anda mungkin tidak dapat menggunakan beberapa bagian dari layanan kami. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Keamanan Data</h2><p${_scopeId}> Keamanan data Anda penting bagi kami, tetapi ingatlah bahwa tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindungi Informasi Pribadi Anda, kami tidak dapat menjamin keamanannya secara mutlak. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Tautan ke Situs Lain</h2><p${_scopeId}> Layanan kami mungkin berisi tautan ke situs lain yang tidak dioperasikan oleh kami. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs pihak ketiga tersebut. Kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi setiap situs yang Anda kunjungi. Kami tidak memiliki kendali atas dan tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs atau layanan pihak ketiga mana pun. </p><h2 class="text-xl font-bold text-[#0F213A] mb-2 mt-4"${_scopeId}>Perubahan Kebijakan Privasi Ini</h2><p${_scopeId}> Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memposting kebijakan privasi baru di halaman ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan. Perubahan pada Kebijakan Privasi ini efektif ketika diposting di halaman ini. </p></div></div></div><div class="lg:w-1/3 space-y-8"${_scopeId}><div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24"${_scopeId}><div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"${_scopeId}><svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"${_scopeId}></path></svg></div><h3 class="font-bold text-xl mb-2"${_scopeId}>Butuh Bantuan?</h3><p class="text-gray-400 text-sm mb-8 leading-relaxed"${_scopeId}> Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/kontak",
              class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Kontak Kami</span><svg class="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("span", null, "Kontak Kami"),
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 group-hover:translate-x-1 transition",
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
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-8 pt-8 border-t border-gray-700/50"${_scopeId}><p class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4"${_scopeId}>Atau hubungi via</p><div class="flex justify-center gap-4"${_scopeId}><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z"${_scopeId}></path></svg></a><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"${_scopeId}></path></svg></a></div></div></div>`);
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
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
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-gray-500" }, "Tentang"),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Kebijakan Privasi")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Kebijakan Privasi")
                ])
              ]),
              createVNode("div", { class: "bg-gray-50 py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("div", { class: "prose prose-yellow text-gray-600 max-w-none" }, [
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2" }, "Pendahuluan"),
                          createVNode("p", null, " Kami di JDIH UIN Sunan Gunung Djati Bandung menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan situs web kami. Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Informasi yang Kami Kumpulkan"),
                          createVNode("p", null, ' Kami dapat mengumpulkan informasi yang dapat mengidentifikasi Anda secara pribadi ("Informasi Pribadi"), seperti nama, alamat email, dan nomor telepon, terutama ketika Anda menghubungi kami melalui formulir kontak atau menggunakan layanan tertentu. Kami juga mengumpulkan informasi non-pribadi secara otomatis, seperti alamat IP, jenis browser, halaman yang dikunjungi, dan waktu akses, untuk tujuan analitik dan peningkatan layanan. '),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Penggunaan Informasi"),
                          createVNode("p", null, [
                            createTextVNode(" Informasi yang kami kumpulkan digunakan untuk: "),
                            createVNode("ul", null, [
                              createVNode("li", null, "Menyediakan dan memelihara layanan kami."),
                              createVNode("li", null, "Memberitahu Anda tentang perubahan pada layanan kami."),
                              createVNode("li", null, "Memungkinkan Anda untuk berpartisipasi dalam fitur interaktif layanan kami."),
                              createVNode("li", null, "Memberikan dukungan pelanggan."),
                              createVNode("li", null, "Mengumpulkan analisis atau informasi berharga sehingga kami dapat meningkatkan layanan kami."),
                              createVNode("li", null, "Memantau penggunaan layanan kami."),
                              createVNode("li", null, "Mendeteksi, mencegah, dan mengatasi masalah teknis.")
                            ])
                          ]),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Cookies"),
                          createVNode("p", null, " Kami menggunakan cookie dan teknologi pelacakan serupa untuk melacak aktivitas di layanan kami dan menyimpan informasi tertentu. Cookie adalah file dengan sejumlah kecil data yang mungkin menyertakan pengenal unik anonim. Anda dapat menginstruksikan browser Anda untuk menolak semua cookie atau untuk menunjukkan kapan cookie dikirim. Namun, jika Anda tidak menerima cookie, Anda mungkin tidak dapat menggunakan beberapa bagian dari layanan kami. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Keamanan Data"),
                          createVNode("p", null, " Keamanan data Anda penting bagi kami, tetapi ingatlah bahwa tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindungi Informasi Pribadi Anda, kami tidak dapat menjamin keamanannya secara mutlak. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Tautan ke Situs Lain"),
                          createVNode("p", null, " Layanan kami mungkin berisi tautan ke situs lain yang tidak dioperasikan oleh kami. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs pihak ketiga tersebut. Kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi setiap situs yang Anda kunjungi. Kami tidak memiliki kendali atas dan tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs atau layanan pihak ketiga mana pun. "),
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-2 mt-4" }, "Perubahan Kebijakan Privasi Ini"),
                          createVNode("p", null, " Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memposting kebijakan privasi baru di halaman ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan. Perubahan pada Kebijakan Privasi ini efektif ketika diposting di halaman ini. ")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode("div", { class: "bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24" }, [
                        createVNode("div", { class: "w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-yellow-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "font-bold text-xl mb-2" }, "Butuh Bantuan?"),
                        createVNode("p", { class: "text-gray-400 text-sm mb-8 leading-relaxed" }, " Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. "),
                        createVNode(unref(Link), {
                          href: "/kontak",
                          class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Kontak Kami"),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 group-hover:translate-x-1 transition",
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
                        }),
                        createVNode("div", { class: "mt-8 pt-8 border-t border-gray-700/50" }, [
                          createVNode("p", { class: "text-xs text-gray-500 uppercase tracking-widest font-bold mb-4" }, "Atau hubungi via"),
                          createVNode("div", { class: "flex justify-center gap-4" }, [
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" })
                              ]))
                            ]),
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" })
                              ]))
                            ])
                          ])
                        ])
                      ]),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                      }, [
                        createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Privacy.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "Structure",
  __ssrInlineRender: true,
  props: {
    links: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Struktur Organisasi - JDIH UIN SGD",
        description: "Struktur Organisasi Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-gray-500"${_scopeId}>Tentang</span><span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Struktur Organisasi</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Struktur Organisasi</h1></div></div><div class="bg-gray-50 py-12"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><h2 class="text-2xl font-bold text-[#0F213A] mb-4"${_scopeId}>Tentang Struktur Organisasi</h2><div class="prose prose-yellow text-gray-600 max-w-none"${_scopeId}><p${_scopeId}> Struktur Organisasi Jaringan Dokumentasi dan Informasi Hukum (JDIH) UIN Sunan Gunung Djati Bandung dirancang untuk memastikan pengelolaan dokumen dan informasi hukum berjalan secara efektif, efisien, dan terpadu. </p><p${_scopeId}> Organisasi ini dipimpin oleh Rektor sebagai Pengarah, dibantu oleh Wakil Rektor sebagai Penanggung Jawab, dan Kepala Pusat sebagai Ketua Pelaksana harian yang membawahi berbagai divisi teknis. </p></div></div><div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><h2 class="text-xl font-bold text-[#0F213A] mb-6"${_scopeId}>Bagan Struktur Organisasi</h2><div class="bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 p-4 flex items-center justify-center min-h-[400px]"${_scopeId}><div class="text-center"${_scopeId}><img src="https://via.placeholder.com/800x600?text=Struktur+Organisasi+JDIH+UIN+SGD" alt="Struktur Organisasi JDIH" class="max-w-full h-auto rounded-lg shadow-sm mx-auto hover:scale-[1.02] transition duration-500 cursor-zoom-in"${_scopeId}><p class="text-xs text-gray-400 mt-4 italic"${_scopeId}>Klik gambar untuk memperbesar</p></div></div></div></div><div class="lg:w-1/3 space-y-8"${_scopeId}><div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24"${_scopeId}><div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"${_scopeId}><svg class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"${_scopeId}></path></svg></div><h3 class="font-bold text-xl mb-2"${_scopeId}>Butuh Bantuan?</h3><p class="text-gray-400 text-sm mb-8 leading-relaxed"${_scopeId}> Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. </p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/kontak",
              class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Kontak Kami</span><svg class="w-4 h-4 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("span", null, "Kontak Kami"),
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 group-hover:translate-x-1 transition",
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
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-8 pt-8 border-t border-gray-700/50"${_scopeId}><p class="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4"${_scopeId}>Atau hubungi via</p><div class="flex justify-center gap-4"${_scopeId}><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z"${_scopeId}></path></svg></a><a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"${_scopeId}></path></svg></a></div></div></div>`);
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
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
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-gray-500" }, "Tentang"),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Struktur Organisasi")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Struktur Organisasi")
                ])
              ]),
              createVNode("div", { class: "bg-gray-50 py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3 space-y-8" }, [
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("h2", { class: "text-2xl font-bold text-[#0F213A] mb-4" }, "Tentang Struktur Organisasi"),
                        createVNode("div", { class: "prose prose-yellow text-gray-600 max-w-none" }, [
                          createVNode("p", null, " Struktur Organisasi Jaringan Dokumentasi dan Informasi Hukum (JDIH) UIN Sunan Gunung Djati Bandung dirancang untuk memastikan pengelolaan dokumen dan informasi hukum berjalan secara efektif, efisien, dan terpadu. "),
                          createVNode("p", null, " Organisasi ini dipimpin oleh Rektor sebagai Pengarah, dibantu oleh Wakil Rektor sebagai Penanggung Jawab, dan Kepala Pusat sebagai Ketua Pelaksana harian yang membawahi berbagai divisi teknis. ")
                        ])
                      ]),
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-6" }, "Bagan Struktur Organisasi"),
                        createVNode("div", { class: "bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 p-4 flex items-center justify-center min-h-[400px]" }, [
                          createVNode("div", { class: "text-center" }, [
                            createVNode("img", {
                              src: "https://via.placeholder.com/800x600?text=Struktur+Organisasi+JDIH+UIN+SGD",
                              alt: "Struktur Organisasi JDIH",
                              class: "max-w-full h-auto rounded-lg shadow-sm mx-auto hover:scale-[1.02] transition duration-500 cursor-zoom-in"
                            }),
                            createVNode("p", { class: "text-xs text-gray-400 mt-4 italic" }, "Klik gambar untuk memperbesar")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "lg:w-1/3 space-y-8" }, [
                      createVNode("div", { class: "bg-[#0F213A] text-white p-8 rounded-2xl text-center shadow-lg top-24" }, [
                        createVNode("div", { class: "w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-8 h-8 text-yellow-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            })
                          ]))
                        ]),
                        createVNode("h3", { class: "font-bold text-xl mb-2" }, "Butuh Bantuan?"),
                        createVNode("p", { class: "text-gray-400 text-sm mb-8 leading-relaxed" }, " Hubungi kami jika anda membutuhkan bantuan terkait layanan informasi hukum, kendala akses, atau pertanyaan seputar produk hukum. "),
                        createVNode(unref(Link), {
                          href: "/kontak",
                          class: "inline-flex items-center justify-center gap-2 bg-yellow-500 text-[#0F213A] px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition w-full group"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Kontak Kami"),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 group-hover:translate-x-1 transition",
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
                        }),
                        createVNode("div", { class: "mt-8 pt-8 border-t border-gray-700/50" }, [
                          createVNode("p", { class: "text-xs text-gray-500 uppercase tracking-widest font-bold mb-4" }, "Atau hubungi via"),
                          createVNode("div", { class: "flex justify-center gap-4" }, [
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" })
                              ]))
                            ]),
                            createVNode("a", {
                              href: "#",
                              class: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" })
                              ]))
                            ])
                          ])
                        ])
                      ]),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                      }, [
                        createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Structure.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    links: Array
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
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Kontak Kami</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Kontak Kami</h1></div></div><div class="bg-gray-50 py-12"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3 space-y-8"${_scopeId}>`);
            if (_ctx.$page.props.flash.success) {
              _push2(`<div class="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-3"${_scopeId}><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> ${ssrInterpolate(_ctx.$page.props.flash.success)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"${_scopeId}><h2 class="text-2xl font-bold text-[#0F213A] mb-6"${_scopeId}>Formulir Kontak</h2><p class="text-gray-600 mb-8"${_scopeId}> Silakan isi formulir di bawah ini untuk menghubungi kami. Kami akan segera merespon pesan anda. </p><form class="space-y-6"${_scopeId}><div${_scopeId}><label for="category" class="block text-sm font-bold text-gray-700 mb-2"${_scopeId}> Kategori Pengirim <span class="text-red-500"${_scopeId}>*</span></label><select id="category" class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"${_scopeId}><option value="Individu"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Individu") : ssrLooseEqual(unref(form).category, "Individu")) ? " selected" : ""}${_scopeId}>Individu</option><option value="Kelompok"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Kelompok") : ssrLooseEqual(unref(form).category, "Kelompok")) ? " selected" : ""}${_scopeId}>Kelompok</option><option value="LSM/NGO"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "LSM/NGO") : ssrLooseEqual(unref(form).category, "LSM/NGO")) ? " selected" : ""}${_scopeId}>LSM / NGO</option><option value="Instansi Pemerintah"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Instansi Pemerintah") : ssrLooseEqual(unref(form).category, "Instansi Pemerintah")) ? " selected" : ""}${_scopeId}>Instansi Pemerintah</option><option value="Lembaga Pendidikan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Lembaga Pendidikan") : ssrLooseEqual(unref(form).category, "Lembaga Pendidikan")) ? " selected" : ""}${_scopeId}>Lembaga Pendidikan</option><option value="Lainnya"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "Lainnya") : ssrLooseEqual(unref(form).category, "Lainnya")) ? " selected" : ""}${_scopeId}>Lainnya</option></select>`);
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
            _push2(`</div><div${_scopeId}><label for="current_identity_file" class="block text-sm font-bold text-gray-700 mb-2"${_scopeId}> Upload Identitas <span class="text-red-500"${_scopeId}>*</span></label><input type="file" id="current_identity_file" accept="image/*,.pdf" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"${_scopeId}><p class="text-xs text-gray-400 mt-1"${_scopeId}>Format: JPG, PNG, PDF. Maks 2MB.</p>`);
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
            _push2(`</div></div><div class="pt-4"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="w-full bg-[#0F213A] text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl disabled:opacity-50 flex justify-center items-center gap-2"${_scopeId}>`);
            if (unref(form).processing) {
              _push2(`<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(form).processing ? "Mengirim..." : "Kirim Pesan")}</button></div></form></div></div><div class="lg:w-1/3 space-y-8"${_scopeId}><div class="bg-[#0F213A] text-white p-8 rounded-2xl shadow-lg"${_scopeId}><h3 class="font-bold text-xl mb-6 flex items-center gap-2"${_scopeId}><svg class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg> Kantor JDIH </h3><div class="space-y-6"${_scopeId}><div${_scopeId}><h4 class="font-bold text-yellow-400 mb-1 text-sm"${_scopeId}>Alamat:</h4><p class="text-gray-300 text-sm leading-relaxed"${_scopeId}> Gedung Rektorat Lt. 1<br${_scopeId}> UIN Sunan Gunung Djati Bandung<br${_scopeId}> Jalan A.H. Nasution No. 105,<br${_scopeId}> Cipadung, Cibiru, Bandung 40614 </p></div><div${_scopeId}><h4 class="font-bold text-yellow-400 mb-1 text-sm"${_scopeId}>Kontak:</h4><ul class="space-y-2 text-sm text-gray-300"${_scopeId}><li class="flex items-center gap-2"${_scopeId}><svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"${_scopeId}></path></svg> +62 22 7800525 </li><li class="flex items-center gap-2"${_scopeId}><svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId}></path></svg> jdih@uinsgd.ac.id </li></ul></div><div${_scopeId}><h4 class="font-bold text-yellow-400 mb-3 text-sm"${_scopeId}>Sosial Media:</h4><div class="flex gap-4"${_scopeId}><a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"${_scopeId}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z"${_scopeId}></path></svg></a><a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"${_scopeId}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"${_scopeId}></path></svg></a><a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"${_scopeId}><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"${_scopeId}></path></svg></a></div></div></div></div>`);
            if (__props.links && __props.links.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
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
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Kontak Kami")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Kontak Kami")
                ])
              ]),
              createVNode("div", { class: "bg-gray-50 py-12" }, [
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
                      createVNode("div", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 p-8" }, [
                        createVNode("h2", { class: "text-2xl font-bold text-[#0F213A] mb-6" }, "Formulir Kontak"),
                        createVNode("p", { class: "text-gray-600 mb-8" }, " Silakan isi formulir di bawah ini untuk menghubungi kami. Kami akan segera merespon pesan anda. "),
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
                                class: "block text-sm font-bold text-gray-700 mb-2"
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
                                class: "w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                              }, null, 544),
                              createVNode("p", { class: "text-xs text-gray-400 mt-1" }, "Format: JPG, PNG, PDF. Maks 2MB."),
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
                              class: "w-full bg-[#0F213A] text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl disabled:opacity-50 flex justify-center items-center gap-2"
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
                      createVNode("div", { class: "bg-[#0F213A] text-white p-8 rounded-2xl shadow-lg" }, [
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
                            createVNode("p", { class: "text-gray-300 text-sm leading-relaxed" }, [
                              createTextVNode(" Gedung Rektorat Lt. 1"),
                              createVNode("br"),
                              createTextVNode(" UIN Sunan Gunung Djati Bandung"),
                              createVNode("br"),
                              createTextVNode(" Jalan A.H. Nasution No. 105,"),
                              createVNode("br"),
                              createTextVNode(" Cipadung, Cibiru, Bandung 40614 ")
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", { class: "font-bold text-yellow-400 mb-1 text-sm" }, "Kontak:"),
                            createVNode("ul", { class: "space-y-2 text-sm text-gray-300" }, [
                              createVNode("li", { class: "flex items-center gap-2" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-gray-500",
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
                                createTextVNode(" +62 22 7800525 ")
                              ]),
                              createVNode("li", { class: "flex items-center gap-2" }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4 text-gray-500",
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
                                createTextVNode(" jdih@uinsgd.ac.id ")
                              ])
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", { class: "font-bold text-yellow-400 mb-3 text-sm" }, "Sosial Media:"),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("a", {
                                href: "#",
                                class: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", { d: "M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" })
                                ]))
                              ]),
                              createVNode("a", {
                                href: "#",
                                class: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" })
                                ]))
                              ]),
                              createVNode("a", {
                                href: "#",
                                class: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" })
                                ]))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      __props.links && __props.links.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                      }, [
                        createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact/Index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    glossaries: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.q || "");
    const selectedChar = ref(props.filters.char || "");
    const alphabet = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
    watch([search, selectedChar], debounce(() => {
      router.get(
        route("glossary.index"),
        {
          q: search.value,
          char: selectedChar.value
        },
        { preserveState: true, replace: true }
      );
    }, 300));
    const selectChar = (char) => {
      if (selectedChar.value === char) {
        selectedChar.value = "";
      } else {
        selectedChar.value = char;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Glosarium - JDIH UIN SGD",
        description: "Daftar istilah dan definisi hukum yang sering digunakan dalam lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-gray-500"${_scopeId}>Informasi Hukum</span><span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Glosarium</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Glosarium</h1><p class="text-gray-500 mt-2"${_scopeId}>Daftar istilah dan definisi hukum.</p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"${_scopeId}><div class="relative mb-6"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId}><svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", search.value)} placeholder="Cari istilah..." class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"${_scopeId}></div><div class="flex flex-wrap gap-2 justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(alphabet, (char) => {
              _push2(`<button class="${ssrRenderClass([[
                selectedChar.value === char ? "bg-[#0F213A] text-white border-[#0F213A]" : "bg-white text-gray-600 border-gray-200 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200"
              ], "w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition duration-200 border"])}"${_scopeId}>${ssrInterpolate(char)}</button>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.glossaries.data.length > 0) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.glossaries.data, (item) => {
                _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300 group"${_scopeId}><h3 class="text-xl font-bold text-[#0F213A] mb-3 group-hover:text-yellow-600 transition"${_scopeId}>${ssrInterpolate(item.title)}</h3><div class="text-gray-600 text-sm leading-relaxed line-clamp-4"${_scopeId}>${item.description ?? ""}</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100"${_scopeId}><svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Tidak ada istilah ditemukan</h3><p class="text-gray-500 mt-1"${_scopeId}>Coba kata kunci lain atau pilih abjad lain.</p><button class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"${_scopeId}> Reset Filter </button></div>`);
            }
            if (__props.glossaries.links.length > 3) {
              _push2(`<div class="mt-10 flex justify-center text-sm"${_scopeId}><div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm"${_scopeId}><!--[-->`);
              ssrRenderList(__props.glossaries.links, (link, key) => {
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
                  _push2(`<span class="h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-gray-500" }, "Informasi Hukum"),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Glosarium")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Glosarium"),
                  createVNode("p", { class: "text-gray-500 mt-2" }, "Daftar istilah dan definisi hukum.")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8" }, [
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
                      class: "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
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
                          selectedChar.value === char ? "bg-[#0F213A] text-white border-[#0F213A]" : "bg-white text-gray-600 border-gray-200 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200"
                        ]]
                      }, toDisplayString(char), 11, ["onClick"]);
                    }), 64))
                  ])
                ]),
                __props.glossaries.data.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.glossaries.data, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300 group"
                    }, [
                      createVNode("h3", { class: "text-xl font-bold text-[#0F213A] mb-3 group-hover:text-yellow-600 transition" }, toDisplayString(item.title), 1),
                      createVNode("div", {
                        class: "text-gray-600 text-sm leading-relaxed line-clamp-4",
                        innerHTML: item.description
                      }, null, 8, ["innerHTML"])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100"
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-16 h-16 text-gray-300 mx-auto mb-4",
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
                  createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Tidak ada istilah ditemukan"),
                  createVNode("p", { class: "text-gray-500 mt-1" }, "Coba kata kunci lain atau pilih abjad lain."),
                  createVNode("button", {
                    onClick: () => {
                      search.value = "";
                      selectedChar.value = "";
                    },
                    class: "mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                  }, " Reset Filter ", 8, ["onClick"])
                ])),
                __props.glossaries.links.length > 3 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mt-10 flex justify-center text-sm"
                }, [
                  createVNode("div", { class: "flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.glossaries.links, (link, key) => {
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
                          class: "h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"
                        }, null, 8, ["innerHTML"]))
                      ], 64);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Glossary/Index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
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
    const displayAwards = computed(() => [...props.awards, ...props.awards]);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.awards.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#0F213A] py-12 overflow-hidden relative" }, _attrs))} data-v-8900be12><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center" data-v-8900be12><h2 class="text-2xl font-bold text-white mb-2" data-v-8900be12>Penghargaan</h2><div class="h-1 w-16 bg-yellow-500 rounded-full mx-auto" data-v-8900be12></div></div><div class="relative w-full overflow-hidden group/track" data-v-8900be12><div class="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#0F213A] to-transparent z-10 pointer-events-none" data-v-8900be12></div><div class="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#0F213A] to-transparent z-10 pointer-events-none" data-v-8900be12></div><div class="flex gap-16 animate-marquee w-max py-4 group-hover/track:[animation-play-state:paused] px-4" data-v-8900be12><!--[-->`);
        ssrRenderList(displayAwards.value, (award, index) => {
          _push(`<div class="relative group/item flex flex-col items-center justify-center cursor-pointer" data-v-8900be12><div class="h-24 w-24 md:h-32 md:w-32 transition-transform duration-300 transform group-hover/item:scale-125" data-v-8900be12><img${ssrRenderAttr("src", award.image)}${ssrRenderAttr("alt", award.title)} class="w-full h-full object-contain drop-shadow-lg" loading="lazy" data-v-8900be12></div><div class="absolute -bottom-12 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/item:translate-y-0 text-center w-48 z-20 pointer-events-none" data-v-8900be12><div class="bg-white text-[#0F213A] text-xs font-bold py-1 px-3 rounded shadow-lg mx-auto inline-block relative" data-v-8900be12>${ssrInterpolate(award.title)} <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45" data-v-8900be12></div></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AwardsCarousel.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AwardsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8900be12"]]);
const _sfc_main$7 = {
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
    awards: Array
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
    const barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision: 0 }
        },
        x: {
          ticks: { font: { size: 10 } }
          // Smaller font for long names
        }
      }
    };
    const pieChartData = computed(() => ({
      labels: ["Tahun Ini", "Bulan Ini", "Hari Ini"],
      datasets: [
        {
          backgroundColor: ["#f59e0b", "#10b981", "#3b82f6"],
          // yellow, green, blue
          data: [props.visitorStats.year, props.visitorStats.month, props.visitorStats.today]
        }
      ]
    }));
    const pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Beranda" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative bg-[#0F213A] overflow-hidden"${_scopeId}><div class="absolute inset-0"${_scopeId}><img src="/images/944597_720.jpg" alt="Background" class="w-full h-full object-cover"${_scopeId}><div class="absolute inset-0 bg-linear-to-b from-[#0F213A]/90 via-[#0F213A]/80 to-[#0F213A]/60"${_scopeId}></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col items-center text-center"${_scopeId}><h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"${_scopeId}> Cari Produk Hukum UIN SGD </h1><p class="text-gray-300 text-lg md:text-xl max-w-2xl mb-10"${_scopeId}> Pusat pencarian &amp; informasi produk hukum resmi Universitas Islam Negeri Sunan Gunung Djati Bandung. Transparan, Akuntabel, dan Terpercaya. </p><div class="w-full max-w-3xl bg-white rounded-lg p-2 flex gap-2 shadow-lg"${_scopeId}><div class="hidden md:flex items-center pl-3 pr-2 border-r border-gray-200 min-w-[160px] relative"${_scopeId}><select class="w-full bg-transparent border-none transition-all duration-200 ease-in-out focus:ring-0 focus:outline-0 text-gray-700 text-sm font-medium appearance-none cursor-pointer pr-8"${_scopeId}><option${ssrIncludeBooleanAttr(Array.isArray(searchType.value) ? ssrLooseContain(searchType.value, null) : ssrLooseEqual(searchType.value, null)) ? " selected" : ""}${_scopeId}>Semua Jenis</option><!--[-->`);
            ssrRenderList(__props.types, (type) => {
              _push2(`<option${ssrRenderAttr("value", type.name)}${ssrIncludeBooleanAttr(Array.isArray(searchType.value) ? ssrLooseContain(searchType.value, type.name) : ssrLooseEqual(searchType.value, type.name)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(type.name)}</option>`);
            });
            _push2(`<!--]--></select><div class="absolute right-2 pointer-events-none"${_scopeId}><svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId}></path></svg></div></div><div class="flex-1 flex items-center"${_scopeId}><svg class="h-5 w-5 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="Masukkan kata kunci atau nomor dokumen..." class="w-full border-none ml-2 focus:ring-0 focus:outline-0 text-gray-600 placeholder-gray-400"${_scopeId}></div><button class="bg-[#FFC700] hover:bg-yellow-400 text-[#0F213A] font-bold px-8 py-3 rounded-md transition shadow-sm flex items-center justify-center"${_scopeId}> CARI </button></div></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20"${_scopeId}><div class="bg-white rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100"${_scopeId}><!--[-->`);
            ssrRenderList(statsDisplay.value, (stat, index) => {
              _push2(`<div class="p-6 flex flex-col items-center text-center"${_scopeId}><div class="text-[#0F213A] mb-3"${_scopeId}><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${ssrRenderAttr("d", stat.icon)}${_scopeId}></path></svg></div><div class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>${ssrInterpolate(stat.value)}</div><div class="text-gray-500 text-sm mt-1"${_scopeId}>${ssrInterpolate(stat.label)}</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="bg-gray-50 py-20 border-t border-gray-100"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex justify-between items-center mb-8"${_scopeId}><div class="flex space-x-6 border-b border-gray-200"${_scopeId}><button class="${ssrRenderClass(["pb-4 font-bold text-lg border-b-2 transition", activeTab.value === "terbaru" ? "border-yellow-500 text-yellow-500" : "border-transparent text-gray-400 hover:text-gray-600"])}"${_scopeId}> Terbaru </button><button class="${ssrRenderClass(["pb-4 font-bold text-lg border-b-2 transition", activeTab.value === "terpopuler" ? "border-yellow-500 text-yellow-500" : "border-transparent text-gray-400 hover:text-gray-600"])}"${_scopeId}> Terpopuler </button></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk-hukum",
              class: "text-sm font-bold text-gray-500 hover:text-[#0F213A]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lihat Semua <span class="ml-1"${_scopeId2}>→</span>`);
                } else {
                  return [
                    createTextVNode(" Lihat Semua "),
                    createVNode("span", { class: "ml-1" }, "→")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"${_scopeId}>`);
            if (displayedProducts.value.length === 0) {
              _push2(`<div class="col-span-2 text-center py-10 text-gray-500 italic"${_scopeId}> Belum ada dokumen yang tersedia. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(displayedProducts.value, (doc) => {
              _push2(ssrRenderComponent(unref(Link), {
                key: doc.id,
                href: unref(route)("produk-hukum.show", doc.slug),
                class: "flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:border-blue-900/30 transition-all group cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="hidden sm:flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-900 shrink-0"${_scopeId2}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId2}></path></svg></div><div class="flex flex-col gap-2 flex-1"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><span class="${ssrRenderClass([doc.badge_style, "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide"])}"${_scopeId2}>${ssrInterpolate(doc.type)}</span></div><h3 class="text-[#212529] text-base font-bold leading-snug group-hover:text-blue-900 transition-colors"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: unref(route)("produk-hukum.show", doc.slug)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(doc.number)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(doc.number), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h3><p class="text-gray-500 text-sm line-clamp-2"${_scopeId2}>${ssrInterpolate(doc.desc)}</p><div class="flex items-center gap-4 mt-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: unref(route)("produk-hukum.show", doc.slug),
                      class: "flex items-center gap-1 text-xs font-bold text-gray-500 group-hover:text-blue-900 transition-colors"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId3}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId3}></path></svg> Lihat Detail `);
                        } else {
                          return [
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
                            createTextVNode(" Lihat Detail ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<a${ssrRenderAttr("href", unref(route)("produk-hukum.download", doc.slug))} target="_blank" class="flex items-center gap-1 text-xs font-bold text-gray-500 group-hover:text-blue-900 transition-colors"${_scopeId2}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"${_scopeId2}></path></svg> Unduh </a></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "hidden sm:flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-900 shrink-0" }, [
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
                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          })
                        ]))
                      ]),
                      createVNode("div", { class: "flex flex-col gap-2 flex-1" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", {
                            class: [doc.badge_style, "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide"]
                          }, toDisplayString(doc.type), 3)
                        ]),
                        createVNode("h3", { class: "text-[#212529] text-base font-bold leading-snug group-hover:text-blue-900 transition-colors" }, [
                          createVNode(unref(Link), {
                            href: unref(route)("produk-hukum.show", doc.slug)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(doc.number), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        createVNode("p", { class: "text-gray-500 text-sm line-clamp-2" }, toDisplayString(doc.desc), 1),
                        createVNode("div", { class: "flex items-center gap-4 mt-2" }, [
                          createVNode(unref(Link), {
                            href: unref(route)("produk-hukum.show", doc.slug),
                            class: "flex items-center gap-1 text-xs font-bold text-gray-500 group-hover:text-blue-900 transition-colors"
                          }, {
                            default: withCtx(() => [
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
                              createTextVNode(" Lihat Detail ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode("a", {
                            href: unref(route)("produk-hukum.download", doc.slug),
                            target: "_blank",
                            class: "flex items-center gap-1 text-xs font-bold text-gray-500 group-hover:text-blue-900 transition-colors"
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
                            createTextVNode(" Unduh ")
                          ], 8, ["href"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div><div class="bg-white py-20 border-t border-gray-100"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="mb-8 flex justify-between items-end"${_scopeId}><div${_scopeId}><span class="text-yellow-500 font-bold tracking-wider text-xs uppercase mb-1 block"${_scopeId}>Transparansi Data</span><h2 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Statistik &amp; Matriks Data</h2><div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1"${_scopeId}></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"${_scopeId}><div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col"${_scopeId}><h3 class="flex items-center gap-2 font-bold text-[#0F213A] mb-6"${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"${_scopeId}></path></svg> 5 Jenis Produk Hukum Terpopuler </h3><div class="flex-1 min-h-[300px] relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Bar), {
              data: barChartData.value,
              options: barChartOptions
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col"${_scopeId}><h3 class="flex items-center gap-2 font-bold text-[#0F213A] mb-6"${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId}></path></svg> Statistik Pengunjung </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full"${_scopeId}><div class="min-h-[200px] flex items-center justify-center relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Pie), {
              data: pieChartData.value,
              options: pieChartOptions
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col justify-center space-y-4"${_scopeId}><div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500"${_scopeId}><div class="text-xs text-gray-500 font-bold uppercase"${_scopeId}>Total Pengunjung</div><div class="text-xl font-extrabold text-blue-900"${_scopeId}>${ssrInterpolate((__props.visitorStats?.total || 0).toLocaleString())}</div></div><div class="grid grid-cols-2 gap-2"${_scopeId}><div class="p-2 bg-gray-50 rounded border border-gray-100"${_scopeId}><div class="text-[10px] text-gray-500"${_scopeId}>Tahun Ini</div><div class="font-bold text-gray-800"${_scopeId}>${ssrInterpolate((__props.visitorStats?.year || 0).toLocaleString())}</div></div><div class="p-2 bg-gray-50 rounded border border-gray-100"${_scopeId}><div class="text-[10px] text-gray-500"${_scopeId}>Bulan Ini</div><div class="font-bold text-gray-800"${_scopeId}>${ssrInterpolate((__props.visitorStats?.month || 0).toLocaleString())}</div></div><div class="p-2 bg-gray-50 rounded border border-gray-100"${_scopeId}><div class="text-[10px] text-gray-500"${_scopeId}>Hari Ini</div><div class="font-bold text-gray-800"${_scopeId}>${ssrInterpolate((__props.visitorStats?.today || 0).toLocaleString())}</div></div><div class="p-2 bg-green-50 rounded border border-green-100"${_scopeId}><div class="text-[10px] text-green-600 font-bold flex items-center gap-1"${_scopeId}><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"${_scopeId}></span> Online </div><div class="font-bold text-green-800"${_scopeId}>${ssrInterpolate((__props.visitorStats?.online || 0).toLocaleString())}</div></div></div></div></div></div></div></div></div>`);
            if (__props.news.length > 0) {
              _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"${_scopeId}><div class="flex justify-between items-center mb-10"${_scopeId}><div${_scopeId}><h2 class="text-2xl md:text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Informasi Hukum</h2><div class="h-1.5 w-24 bg-yellow-500 rounded-full mt-1"${_scopeId}></div></div>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("information.index"),
                class: "text-sm font-bold text-gray-500 hover:text-[#0F213A]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lihat Semua <span class="ml-1"${_scopeId2}>→</span>`);
                  } else {
                    return [
                      createTextVNode(" Lihat Semua "),
                      createVNode("span", { class: "ml-1" }, "→")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer"${_scopeId}><!--[-->`);
              ssrRenderList(__props.news, (item, idx) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: idx,
                  href: unref(route)("information.show", item.slug),
                  class: "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-gray-100 h-full flex flex-col"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="h-48 overflow-hidden relative"${_scopeId2}><img${ssrRenderAttr("src", unref(route)("posts.pathimage", item.id) || "https://via.placeholder.com/600x400?text=No+Image")}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover group-hover:scale-105 transition duration-500"${_scopeId2}><div class="absolute top-0 right-0 bg-yellow-400 text-[#0F213A] text-xs font-bold px-3 py-1 m-4 rounded"${_scopeId2}>${ssrInterpolate(item.category)}</div></div><div class="p-6 flex-1 flex flex-col"${_scopeId2}><div class="text-gray-400 text-xs mb-3 flex items-center gap-2"${_scopeId2}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId2}></path></svg> ${ssrInterpolate(item.date)}</div><h3 class="text-lg font-bold text-[#0F213A] mb-3 leading-snug group-hover:text-yellow-600 transition"${_scopeId2}>${ssrInterpolate(item.title)}</h3><p class="text-gray-500 text-sm line-clamp-3 mb-6"${_scopeId2}>${ssrInterpolate(item.desc)}</p><div class="mt-auto"${_scopeId2}><span class="text-[#0F213A] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"${_scopeId2}>Baca Selengkapnya <span class="bg-gray-100 rounded-full p-1"${_scopeId2}>→</span></span></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "h-48 overflow-hidden relative" }, [
                          createVNode("img", {
                            src: unref(route)("posts.pathimage", item.id) || "https://via.placeholder.com/600x400?text=No+Image",
                            alt: item.title,
                            class: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "absolute top-0 right-0 bg-yellow-400 text-[#0F213A] text-xs font-bold px-3 py-1 m-4 rounded" }, toDisplayString(item.category), 1)
                        ]),
                        createVNode("div", { class: "p-6 flex-1 flex flex-col" }, [
                          createVNode("div", { class: "text-gray-400 text-xs mb-3 flex items-center gap-2" }, [
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
                          createVNode("h3", { class: "text-lg font-bold text-[#0F213A] mb-3 leading-snug group-hover:text-yellow-600 transition" }, toDisplayString(item.title), 1),
                          createVNode("p", { class: "text-gray-500 text-sm line-clamp-3 mb-6" }, toDisplayString(item.desc), 1),
                          createVNode("div", { class: "mt-auto" }, [
                            createVNode("span", { class: "text-[#0F213A] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" }, [
                              createTextVNode("Baca Selengkapnya "),
                              createVNode("span", { class: "bg-gray-100 rounded-full p-1" }, "→")
                            ])
                          ])
                        ])
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
            _push2(ssrRenderComponent(AwardsCarousel, { awards: __props.awards }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "relative bg-[#0F213A] overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0" }, [
                  createVNode("img", {
                    src: "/images/944597_720.jpg",
                    alt: "Background",
                    class: "w-full h-full object-cover"
                  }),
                  createVNode("div", { class: "absolute inset-0 bg-linear-to-b from-[#0F213A]/90 via-[#0F213A]/80 to-[#0F213A]/60" })
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 flex flex-col items-center text-center" }, [
                  createVNode("h1", { class: "text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" }, " Cari Produk Hukum UIN SGD "),
                  createVNode("p", { class: "text-gray-300 text-lg md:text-xl max-w-2xl mb-10" }, " Pusat pencarian & informasi produk hukum resmi Universitas Islam Negeri Sunan Gunung Djati Bandung. Transparan, Akuntabel, dan Terpercaya. "),
                  createVNode("div", { class: "w-full max-w-3xl bg-white rounded-lg p-2 flex gap-2 shadow-lg" }, [
                    createVNode("div", { class: "hidden md:flex items-center pl-3 pr-2 border-r border-gray-200 min-w-[160px] relative" }, [
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => searchType.value = $event,
                        class: "w-full bg-transparent border-none transition-all duration-200 ease-in-out focus:ring-0 focus:outline-0 text-gray-700 text-sm font-medium appearance-none cursor-pointer pr-8"
                      }, [
                        createVNode("option", null, "Semua Jenis"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.types, (type) => {
                          return openBlock(), createBlock("option", {
                            key: type.id,
                            value: type.name
                          }, toDisplayString(type.name), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, searchType.value]
                      ]),
                      createVNode("div", { class: "absolute right-2 pointer-events-none" }, [
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
                        class: "w-full border-none ml-2 focus:ring-0 focus:outline-0 text-gray-600 placeholder-gray-400"
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, searchQuery.value]
                      ])
                    ]),
                    createVNode("button", {
                      onClick: handleSearch,
                      class: "bg-[#FFC700] hover:bg-yellow-400 text-[#0F213A] font-bold px-8 py-3 rounded-md transition shadow-sm flex items-center justify-center"
                    }, " CARI ")
                  ])
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(statsDisplay.value, (stat, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "p-6 flex flex-col items-center text-center"
                    }, [
                      createVNode("div", { class: "text-[#0F213A] mb-3" }, [
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
                      createVNode("div", { class: "text-3xl font-extrabold text-[#0F213A]" }, toDisplayString(stat.value), 1),
                      createVNode("div", { class: "text-gray-500 text-sm mt-1" }, toDisplayString(stat.label), 1)
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("div", { class: "bg-gray-50 py-20 border-t border-gray-100" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex justify-between items-center mb-8" }, [
                    createVNode("div", { class: "flex space-x-6 border-b border-gray-200" }, [
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
                      class: "text-sm font-bold text-gray-500 hover:text-[#0F213A]"
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
                        class: "flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-lg hover:border-blue-900/30 transition-all group cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "hidden sm:flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-900 shrink-0" }, [
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
                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "flex flex-col gap-2 flex-1" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", {
                                class: [doc.badge_style, "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide"]
                              }, toDisplayString(doc.type), 3)
                            ]),
                            createVNode("h3", { class: "text-[#212529] text-base font-bold leading-snug group-hover:text-blue-900 transition-colors" }, [
                              createVNode(unref(Link), {
                                href: unref(route)("produk-hukum.show", doc.slug)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(doc.number), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]),
                            createVNode("p", { class: "text-gray-500 text-sm line-clamp-2" }, toDisplayString(doc.desc), 1),
                            createVNode("div", { class: "flex items-center gap-4 mt-2" }, [
                              createVNode(unref(Link), {
                                href: unref(route)("produk-hukum.show", doc.slug),
                                class: "flex items-center gap-1 text-xs font-bold text-gray-500 group-hover:text-blue-900 transition-colors"
                              }, {
                                default: withCtx(() => [
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
                                  createTextVNode(" Lihat Detail ")
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              createVNode("a", {
                                href: unref(route)("produk-hukum.download", doc.slug),
                                target: "_blank",
                                class: "flex items-center gap-1 text-xs font-bold text-gray-500 group-hover:text-blue-900 transition-colors"
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
                                createTextVNode(" Unduh ")
                              ], 8, ["href"])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-white py-20 border-t border-gray-100" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "mb-8 flex justify-between items-end" }, [
                    createVNode("div", null, [
                      createVNode("span", { class: "text-yellow-500 font-bold tracking-wider text-xs uppercase mb-1 block" }, "Transparansi Data"),
                      createVNode("h2", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Statistik & Matriks Data"),
                      createVNode("div", { class: "h-1.5 w-24 bg-yellow-500 rounded-full mt-1" })
                    ])
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
                        createTextVNode(" 5 Jenis Produk Hukum Terpopuler ")
                      ]),
                      createVNode("div", { class: "flex-1 min-h-[300px] relative" }, [
                        createVNode(unref(Bar), {
                          data: barChartData.value,
                          options: barChartOptions
                        }, null, 8, ["data"])
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
                        createTextVNode(" Statistik Pengunjung ")
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 h-full" }, [
                        createVNode("div", { class: "min-h-[200px] flex items-center justify-center relative" }, [
                          createVNode(unref(Pie), {
                            data: pieChartData.value,
                            options: pieChartOptions
                          }, null, 8, ["data"])
                        ]),
                        createVNode("div", { class: "flex flex-col justify-center space-y-4" }, [
                          createVNode("div", { class: "p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500" }, [
                            createVNode("div", { class: "text-xs text-gray-500 font-bold uppercase" }, "Total Pengunjung"),
                            createVNode("div", { class: "text-xl font-extrabold text-blue-900" }, toDisplayString((__props.visitorStats?.total || 0).toLocaleString()), 1)
                          ]),
                          createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                            createVNode("div", { class: "p-2 bg-gray-50 rounded border border-gray-100" }, [
                              createVNode("div", { class: "text-[10px] text-gray-500" }, "Tahun Ini"),
                              createVNode("div", { class: "font-bold text-gray-800" }, toDisplayString((__props.visitorStats?.year || 0).toLocaleString()), 1)
                            ]),
                            createVNode("div", { class: "p-2 bg-gray-50 rounded border border-gray-100" }, [
                              createVNode("div", { class: "text-[10px] text-gray-500" }, "Bulan Ini"),
                              createVNode("div", { class: "font-bold text-gray-800" }, toDisplayString((__props.visitorStats?.month || 0).toLocaleString()), 1)
                            ]),
                            createVNode("div", { class: "p-2 bg-gray-50 rounded border border-gray-100" }, [
                              createVNode("div", { class: "text-[10px] text-gray-500" }, "Hari Ini"),
                              createVNode("div", { class: "font-bold text-gray-800" }, toDisplayString((__props.visitorStats?.today || 0).toLocaleString()), 1)
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
              __props.news.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
              }, [
                createVNode("div", { class: "flex justify-between items-center mb-10" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-2xl md:text-3xl font-extrabold text-[#0F213A]" }, "Informasi Hukum"),
                    createVNode("div", { class: "h-1.5 w-24 bg-yellow-500 rounded-full mt-1" })
                  ]),
                  createVNode(unref(Link), {
                    href: unref(route)("information.index"),
                    class: "text-sm font-bold text-gray-500 hover:text-[#0F213A]"
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
                      class: "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-gray-100 h-full flex flex-col"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-48 overflow-hidden relative" }, [
                          createVNode("img", {
                            src: unref(route)("posts.pathimage", item.id) || "https://via.placeholder.com/600x400?text=No+Image",
                            alt: item.title,
                            class: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "absolute top-0 right-0 bg-yellow-400 text-[#0F213A] text-xs font-bold px-3 py-1 m-4 rounded" }, toDisplayString(item.category), 1)
                        ]),
                        createVNode("div", { class: "p-6 flex-1 flex flex-col" }, [
                          createVNode("div", { class: "text-gray-400 text-xs mb-3 flex items-center gap-2" }, [
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
                          createVNode("h3", { class: "text-lg font-bold text-[#0F213A] mb-3 leading-snug group-hover:text-yellow-600 transition" }, toDisplayString(item.title), 1),
                          createVNode("p", { class: "text-gray-500 text-sm line-clamp-3 mb-6" }, toDisplayString(item.desc), 1),
                          createVNode("div", { class: "mt-auto" }, [
                            createVNode("span", { class: "text-[#0F213A] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" }, [
                              createTextVNode("Baca Selengkapnya "),
                              createVNode("span", { class: "bg-gray-100 rounded-full p-1" }, "→")
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["href"]);
                  }), 128))
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    infographics: Object
  },
  setup(__props) {
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
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Info Grafis - JDIH UIN SGD",
        description: "Galeri informasi hukum dalam bentuk grafis visual yang menarik dan mudah dipahami."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Info Grafis</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Info Grafis</h1><p class="mt-2 text-gray-500"${_scopeId}>Galeri informasi hukum dalam bentuk grafis visual yang menarik.</p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}>`);
            if (__props.infographics.data.length > 0) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(__props.infographics.data, (item) => {
                _push2(`<div class="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"${_scopeId}><div class="aspect-[0.8] relative overflow-hidden bg-gray-100"${_scopeId}>`);
                if (item.cover_image) {
                  _push2(`<img${ssrRenderAttr("src", unref(route)("infographics.cover", item.id))}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover group-hover:scale-105 transition duration-700"${_scopeId}>`);
                } else {
                  _push2(`<div class="w-full h-full flex items-center justify-center text-gray-400"${_scopeId}><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg></div>`);
                }
                _push2(`<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"${_scopeId}><span class="bg-white/90 p-3 rounded-full text-[#0F213A] shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></span></div>`);
                if (item.images && item.images.length > 0) {
                  _push2(`<div class="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1"${_scopeId}><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg> ${ssrInterpolate((item.images ? item.images.length : 0) + 1)} Slide </div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="p-5 flex-1 flex justify-center"${_scopeId}><h3 class="font-bold text-xl text-center text-[#0F213A] group-hover:text-yellow-600 transition mb-2"${_scopeId}>${ssrInterpolate(item.title)}</h3></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-20"${_scopeId}><div class="inline-block p-4 rounded-full bg-gray-50 mb-4"${_scopeId}><svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg></div><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Belum ada Info Grafis</h3><p class="text-gray-500 mt-1"${_scopeId}>Saat ini belum ada data info grafis yang tersedia.</p></div>`);
            }
            if (__props.infographics.links.length > 3) {
              _push2(`<div class="mt-12 flex justify-center text-sm"${_scopeId}><div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm"${_scopeId}><!--[-->`);
              ssrRenderList(__props.infographics.links, (link, key) => {
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
                _push2(`<button class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent"${ssrIncludeBooleanAttr(currentImageIndex.value === 0) ? " disabled" : ""}${_scopeId}><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<!---->`);
              }
              if (lightboxImages.value.length > 1) {
                _push2(`<button class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent"${ssrIncludeBooleanAttr(currentImageIndex.value === lightboxImages.value.length - 1) ? " disabled" : ""}${_scopeId}><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="relative w-full h-full max-w-5xl max-h-screen p-4 md:p-10 flex flex-col items-center justify-center"${_scopeId}><div class="relative w-full h-full flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", lightboxImages.value[currentImageIndex.value]?.src)}${ssrRenderAttr("alt", lightboxImages.value[currentImageIndex.value]?.alt)} class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"${_scopeId}></div><div class="absolute bottom-6 left-0 right-0 text-center"${_scopeId}><h3 class="text-white font-bold text-lg mb-1"${_scopeId}>${ssrInterpolate(activeInfographic.value?.title)}</h3><p class="text-gray-400 text-sm"${_scopeId}> Gambar ${ssrInterpolate(currentImageIndex.value + 1)} dari ${ssrInterpolate(lightboxImages.value.length)}</p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Info Grafis")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Info Grafis"),
                  createVNode("p", { class: "mt-2 text-gray-500" }, "Galeri informasi hukum dalam bentuk grafis visual yang menarik.")
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
                      class: "group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
                    }, [
                      createVNode("div", { class: "aspect-[0.8] relative overflow-hidden bg-gray-100" }, [
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
                          createTextVNode(" " + toDisplayString((item.images ? item.images.length : 0) + 1) + " Slide ", 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "p-5 flex-1 flex justify-center" }, [
                        createVNode("h3", { class: "font-bold text-xl text-center text-[#0F213A] group-hover:text-yellow-600 transition mb-2" }, toDisplayString(item.title), 1)
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
                  createVNode("div", { class: "flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.infographics.links, (link, key) => {
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
                    onClick: withModifiers(closeLightbox, ["self"])
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
                      class: "absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent",
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
                      class: "absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition disabled:opacity-30 disabled:hover:bg-transparent",
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
                      createVNode("div", { class: "absolute bottom-6 left-0 right-0 text-center" }, [
                        createVNode("h3", { class: "text-white font-bold text-lg mb-1" }, toDisplayString(activeInfographic.value?.title), 1),
                        createVNode("p", { class: "text-gray-400 text-sm" }, " Gambar " + toDisplayString(currentImageIndex.value + 1) + " dari " + toDisplayString(lightboxImages.value.length), 1)
                      ])
                    ])
                  ])) : createCommentVNode("", true)
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Infographics/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
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
    const updateParams = debounce(() => {
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
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Informasi Hukum - JDIH UIN Sunan Gunung Djati",
        description: "Berita dan artikel menarik seputar hukum di lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Informasi Hukum</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Informasi Hukum</h1></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="flex flex-col lg:flex-row gap-10"${_scopeId}><div class="w-full lg:w-1/4 shrink-0 space-y-6"${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"${_scopeId}><div class="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50"${_scopeId}><h3 class="font-bold text-[#0F213A] flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"${_scopeId}></path></svg> Filter Pencarian </h3><button class="text-xs font-medium text-gray-400 hover:text-red-500 transition"${_scopeId}>Reset Filter</button></div><div class="p-5 border-b border-gray-100"${_scopeId}><h4 class="font-bold text-sm text-[#0F213A] mb-3"${_scopeId}>Kategori</h4><div class="mb-3 relative"${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchCategory.value)} placeholder="Cari kategori..." class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"${_scopeId}></div><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(filteredCategories.value, (category) => {
              _push2(`<div class="flex items-center justify-between group"${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedCategories.value) ? ssrLooseContain(selectedCategories.value, category.slug) : selectedCategories.value) ? " checked" : ""}${ssrRenderAttr("value", category.slug)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50"${_scopeId}><span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"${ssrRenderAttr("title", category.name)}${_scopeId}>${ssrInterpolate(category.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition"${_scopeId}>${ssrInterpolate(category.posts_count || 0)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchCategory.value && __props.categories.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"${_scopeId}>${ssrInterpolate(showAllCategories.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllCategories.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="p-5 border-b border-gray-100"${_scopeId}><h4 class="font-bold text-sm text-[#0F213A] mb-3"${_scopeId}>Tag</h4><div class="mb-3 relative"${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchTag.value)} placeholder="Cari tag..." class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"${_scopeId}></div><div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(filteredTags.value, (tag) => {
              _push2(`<div class="flex items-center justify-between group"${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedTags.value) ? ssrLooseContain(selectedTags.value, tag.slug) : selectedTags.value) ? " checked" : ""}${ssrRenderAttr("value", tag.slug)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50"${_scopeId}><span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"${ssrRenderAttr("title", tag.name)}${_scopeId}>${ssrInterpolate(tag.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition"${_scopeId}>${ssrInterpolate(tag.posts_count || 0)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchTag.value && __props.tags.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"${_scopeId}>${ssrInterpolate(showAllTags.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllTags.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="flex-1 w-full md:w-3/4"${_scopeId}><div class="bg-white rounded-lg border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm"${_scopeId}><div class="text-gray-600 font-medium mb-3 sm:mb-0"${_scopeId}> Menampilkan <span class="font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.posts.total)}</span> Hasil Pencarian </div><div class="flex items-center gap-3"${_scopeId}><span class="text-gray-400 text-sm"${_scopeId}>Urutkan:</span><select class="border-gray-200 rounded-md text-sm text-[#0F213A] focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer"${_scopeId}><option value="newest"${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "newest") : ssrLooseEqual(sort.value, "newest")) ? " selected" : ""}${_scopeId}>Terbaru</option><option value="popular"${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "popular") : ssrLooseEqual(sort.value, "popular")) ? " selected" : ""}${_scopeId}>Terpopuler</option></select></div></div><div class="mb-6 relative"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId}><svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", search.value)} placeholder="Cari berita atau artikel..." class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"${_scopeId}></div>`);
            if (__props.posts.data.length > 0) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.posts.data, (post) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: post.id,
                  href: unref(route)("information.show", post.slug),
                  class: "group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="aspect-video relative overflow-hidden bg-gray-100"${_scopeId2}>`);
                      if (post.image) {
                        _push3(`<img${ssrRenderAttr("src", unref(route)("posts.pathimage", post.id) || "https://via.placeholder.com/600x400?text=No+Image")}${ssrRenderAttr("alt", post.title)} class="w-full h-full object-cover group-hover:scale-105 transition duration-500"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center text-gray-400"${_scopeId2}><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId2}></path></svg></div>`);
                      }
                      _push3(`<div class="absolute top-4 left-4"${_scopeId2}><span class="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm"${_scopeId2}>${ssrInterpolate(post.category ? post.category.name : "Umum")}</span></div></div><div class="p-6"${_scopeId2}><div class="flex items-center text-xs text-gray-500 mb-3 gap-3"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId2}></path></svg> ${ssrInterpolate(post.date)}</span><span class="flex items-center gap-1"${_scopeId2}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId2}></path></svg> ${ssrInterpolate(post.views_count)} Views </span></div><h2 class="text-xl font-bold text-[#0F213A] mb-3 line-clamp-2 group-hover:text-yellow-600 transition"${_scopeId2}>${ssrInterpolate(post.title)}</h2><p class="text-gray-600 text-sm line-clamp-3 mb-4"${_scopeId2}>${ssrInterpolate(post.desc)}</p><span class="text-yellow-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"${_scopeId2}> Baca Selengkapnya <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId2}></path></svg></span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "aspect-video relative overflow-hidden bg-gray-100" }, [
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
                          createVNode("div", { class: "flex items-center text-xs text-gray-500 mb-3 gap-3" }, [
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
                          createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-3 line-clamp-2 group-hover:text-yellow-600 transition" }, toDisplayString(post.title), 1),
                          createVNode("p", { class: "text-gray-600 text-sm line-clamp-3 mb-4" }, toDisplayString(post.desc), 1),
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
              _push2(`<div class="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100"${_scopeId}><svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"${_scopeId}></path></svg><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Belum ada informasi</h3><p class="text-gray-500 mt-1"${_scopeId}>Coba sesuaikan filter pencarian anda.</p><button class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"${_scopeId}>Reset Filter</button></div>`);
            }
            if (__props.posts.links.length > 3) {
              _push2(`<div class="mt-10 flex justify-center text-sm"${_scopeId}><div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm"${_scopeId}><!--[-->`);
              ssrRenderList(__props.posts.links, (link, key) => {
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
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Informasi Hukum")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Informasi Hukum")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", { class: "flex flex-col lg:flex-row gap-10" }, [
                  createVNode("div", { class: "w-full lg:w-1/4 shrink-0 space-y-6" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" }, [
                      createVNode("div", { class: "p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50" }, [
                        createVNode("h3", { class: "font-bold text-[#0F213A] flex items-center gap-2" }, [
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
                      createVNode("div", { class: "p-5 border-b border-gray-100" }, [
                        createVNode("h4", { class: "font-bold text-sm text-[#0F213A] mb-3" }, "Kategori"),
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
                                  class: "rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50"
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, selectedCategories.value]
                                ]),
                                createVNode("span", {
                                  class: "text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]",
                                  title: category.name
                                }, toDisplayString(category.name), 9, ["title"])
                              ]),
                              createVNode("span", { class: "bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" }, toDisplayString(category.posts_count || 0), 1)
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
                      createVNode("div", { class: "p-5 border-b border-gray-100" }, [
                        createVNode("h4", { class: "font-bold text-sm text-[#0F213A] mb-3" }, "Tag"),
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
                                  class: "rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50"
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, selectedTags.value]
                                ]),
                                createVNode("span", {
                                  class: "text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]",
                                  title: tag.name
                                }, toDisplayString(tag.name), 9, ["title"])
                              ]),
                              createVNode("span", { class: "bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" }, toDisplayString(tag.posts_count || 0), 1)
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
                  ]),
                  createVNode("div", { class: "flex-1 w-full md:w-3/4" }, [
                    createVNode("div", { class: "bg-white rounded-lg border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm" }, [
                      createVNode("div", { class: "text-gray-600 font-medium mb-3 sm:mb-0" }, [
                        createTextVNode(" Menampilkan "),
                        createVNode("span", { class: "font-bold text-[#0F213A]" }, toDisplayString(__props.posts.total), 1),
                        createTextVNode(" Hasil Pencarian ")
                      ]),
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", { class: "text-gray-400 text-sm" }, "Urutkan:"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => sort.value = $event,
                          class: "border-gray-200 rounded-md text-sm text-[#0F213A] focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer"
                        }, [
                          createVNode("option", { value: "newest" }, "Terbaru"),
                          createVNode("option", { value: "popular" }, "Terpopuler")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, sort.value]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mb-6 relative" }, [
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
                        class: "w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, search.value]
                      ])
                    ]),
                    __props.posts.data.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 md:grid-cols-2 gap-6"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.posts.data, (post) => {
                        return openBlock(), createBlock(unref(Link), {
                          key: post.id,
                          href: unref(route)("information.show", post.slug),
                          class: "group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "aspect-video relative overflow-hidden bg-gray-100" }, [
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
                              createVNode("div", { class: "flex items-center text-xs text-gray-500 mb-3 gap-3" }, [
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
                              createVNode("h2", { class: "text-xl font-bold text-[#0F213A] mb-3 line-clamp-2 group-hover:text-yellow-600 transition" }, toDisplayString(post.title), 1),
                              createVNode("p", { class: "text-gray-600 text-sm line-clamp-3 mb-4" }, toDisplayString(post.desc), 1),
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
                      class: "text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-16 h-16 text-gray-300 mx-auto mb-4",
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
                      createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Belum ada informasi"),
                      createVNode("p", { class: "text-gray-500 mt-1" }, "Coba sesuaikan filter pencarian anda."),
                      createVNode("button", {
                        onClick: resetFilters,
                        class: "mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                      }, "Reset Filter")
                    ])),
                    __props.posts.links.length > 3 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "mt-10 flex justify-center text-sm"
                    }, [
                      createVNode("div", { class: "flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.posts.links, (link, key) => {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Information/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
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
      _push(ssrRenderComponent(_sfc_main$h, {
        title: __props.post.title,
        description: __props.post.desc,
        image: __props.post.image ? unref(route)("posts.pathimage", __props.post.id) : void 0,
        keywords: keywords.value,
        author: __props.post.author
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600"
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
            _push2(`<span class="mx-2"${_scopeId}>/</span>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/informasi-hukum",
              class: "hover:text-yellow-600"
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
            _push2(`<span class="mx-2"${_scopeId}>/</span><span class="text-gray-800 font-medium truncate max-w-xs"${_scopeId}>${ssrInterpolate(__props.post.title)}</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Detail ${ssrInterpolate(__props.post.category.name)}</h1></div></div><div class="bg-gray-50 py-12"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-8"${_scopeId}><div class="lg:w-2/3"${_scopeId}><article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"${_scopeId}>`);
            if (__props.post.image) {
              _push2(`<div class="w-full h-64 md:h-96 relative bg-gray-100"${_scopeId}><img${ssrRenderAttr("src", unref(route)("posts.pathimage", __props.post.id) || "https://via.placeholder.com/600x400?text=No+Image")}${ssrRenderAttr("alt", __props.post.title)} class="w-full h-full object-cover"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="p-6 md:p-10"${_scopeId}><div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6"${_scopeId}><span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold"${_scopeId}>${ssrInterpolate(__props.post.category ? __props.post.category.name : "Umum")}</span><span class="flex items-center gap-1"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg> ${ssrInterpolate(__props.post.date)}</span><span class="flex items-center gap-1"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg> ${ssrInterpolate(__props.post.author)}</span><span class="flex items-center gap-1"${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> ${ssrInterpolate(__props.post.views_count)} Views </span></div><h1 class="text-2xl md:text-4xl font-bold text-[#0F213A] mb-8 leading-tight"${_scopeId}>${ssrInterpolate(__props.post.title)}</h1><div class="prose prose-lg prose-yellow max-w-none text-gray-700"${_scopeId}>${__props.post.content ?? ""}</div>`);
            if (__props.post.tags && __props.post.tags.length > 0) {
              _push2(`<div class="mt-10 pt-6 border-t border-gray-100"${_scopeId}><h3 class="text-sm font-bold text-gray-900 mb-3"${_scopeId}>Tags:</h3><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.post.tags, (tag) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: tag.id,
                  href: unref(route)("information.index", { tag: tag.slug }),
                  class: "px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-yellow-50 hover:text-yellow-700 transition cursor-default"
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
            _push2(`</div></article></div><div class="lg:w-1/3 space-y-8"${_scopeId}><div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"${_scopeId}><div class="flex items-center justify-between mb-6"${_scopeId}><h3 class="font-bold text-[#0F213A] text-lg"${_scopeId}>Informasi Terkait</h3></div>`);
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
                      _push3(`<div class="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 relative"${_scopeId2}>`);
                      if (related.image) {
                        _push3(`<img${ssrRenderAttr("src", unref(route)("posts.pathimage", related.id) || "https://via.placeholder.com/600x400?text=No+Image")}${ssrRenderAttr("alt", related.title)} class="w-full h-full object-cover group-hover:scale-110 transition duration-500"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center"${_scopeId2}><svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId2}></path></svg></div>`);
                      }
                      _push3(`</div><div${_scopeId2}><h4 class="text-sm font-bold text-[#0F213A] line-clamp-2 leading-relaxed group-hover:text-yellow-600 transition mb-1"${_scopeId2}>${ssrInterpolate(related.title)}</h4><span class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(related.date)}</span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 relative" }, [
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
                          createVNode("h4", { class: "text-sm font-bold text-[#0F213A] line-clamp-2 leading-relaxed group-hover:text-yellow-600 transition mb-1" }, toDisplayString(related.title), 1),
                          createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(related.date), 1)
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
            _push2(`</div><div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center"${_scopeId}><h3 class="font-bold text-xl mb-2"${_scopeId}>Butuh Bantuan?</h3><p class="text-gray-400 text-sm mb-6"${_scopeId}>Hubungi kami jika anda membutuhkan bantuan tekait layanan informasi hukum.</p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: unref(route)("contact.index"),
              class: "inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Kontak Kami `);
                } else {
                  return [
                    createTextVNode(" Kontak Kami ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2" }, "/"),
                    createVNode(unref(Link), {
                      href: "/informasi-hukum",
                      class: "hover:text-yellow-600"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Informasi Hukum")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2" }, "/"),
                    createVNode("span", { class: "text-gray-800 font-medium truncate max-w-xs" }, toDisplayString(__props.post.title), 1)
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Detail " + toDisplayString(__props.post.category.name), 1)
                ])
              ]),
              createVNode("div", { class: "bg-gray-50 py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-8" }, [
                    createVNode("div", { class: "lg:w-2/3" }, [
                      createVNode("article", { class: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" }, [
                        __props.post.image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "w-full h-64 md:h-96 relative bg-gray-100"
                        }, [
                          createVNode("img", {
                            src: unref(route)("posts.pathimage", __props.post.id) || "https://via.placeholder.com/600x400?text=No+Image",
                            alt: __props.post.title,
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src", "alt"])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "p-6 md:p-10" }, [
                          createVNode("div", { class: "flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6" }, [
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
                          createVNode("h1", { class: "text-2xl md:text-4xl font-bold text-[#0F213A] mb-8 leading-tight" }, toDisplayString(__props.post.title), 1),
                          createVNode("div", {
                            class: "prose prose-lg prose-yellow max-w-none text-gray-700",
                            innerHTML: __props.post.content
                          }, null, 8, ["innerHTML"]),
                          __props.post.tags && __props.post.tags.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-10 pt-6 border-t border-gray-100"
                          }, [
                            createVNode("h3", { class: "text-sm font-bold text-gray-900 mb-3" }, "Tags:"),
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.post.tags, (tag) => {
                                return openBlock(), createBlock(unref(Link), {
                                  key: tag.id,
                                  href: unref(route)("information.index", { tag: tag.slug }),
                                  class: "px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-yellow-50 hover:text-yellow-700 transition cursor-default"
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
                      createVNode("div", { class: "bg-white p-6 rounded-2xl shadow-sm border border-gray-100" }, [
                        createVNode("div", { class: "flex items-center justify-between mb-6" }, [
                          createVNode("h3", { class: "font-bold text-[#0F213A] text-lg" }, "Informasi Terkait")
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
                                createVNode("div", { class: "w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 relative" }, [
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
                                  createVNode("h4", { class: "text-sm font-bold text-[#0F213A] line-clamp-2 leading-relaxed group-hover:text-yellow-600 transition mb-1" }, toDisplayString(related.title), 1),
                                  createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(related.date), 1)
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
                      createVNode("div", { class: "bg-[#0F213A] text-white p-8 rounded-2xl text-center" }, [
                        createVNode("h3", { class: "font-bold text-xl mb-2" }, "Butuh Bantuan?"),
                        createVNode("p", { class: "text-gray-400 text-sm mb-6" }, "Hubungi kami jika anda membutuhkan bantuan tekait layanan informasi hukum."),
                        createVNode(unref(Link), {
                          href: unref(route)("contact.index"),
                          class: "inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Kontak Kami ")
                          ]),
                          _: 1
                        }, 8, ["href"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Information/Show.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    legalDictionaries: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const search = ref(props.filters.q || "");
    const selectedChar = ref(props.filters.char || "");
    const alphabet = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
    watch([search, selectedChar], debounce(() => {
      router.get(
        route("legal-dictionary.index"),
        {
          q: search.value,
          char: selectedChar.value
        },
        { preserveState: true, replace: true }
      );
    }, 300));
    const selectChar = (char) => {
      if (selectedChar.value === char) {
        selectedChar.value = "";
      } else {
        selectedChar.value = char;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Kamus Hukum - JDIH UIN SGD",
        description: "Kamus istilah hukum lengkap untuk membantu memahami terminologi hukum di lingkungan UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-gray-500"${_scopeId}>Informasi Hukum</span><span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Kamus Hukum</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Kamus Hukum</h1><p class="text-gray-500 mt-2"${_scopeId}>Daftar istilah dan definisi hukum.</p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8"${_scopeId}><div class="relative mb-6"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center pl-3"${_scopeId}><svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", search.value)} placeholder="Cari istilah..." class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"${_scopeId}></div><div class="flex flex-wrap gap-2 justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(alphabet, (char) => {
              _push2(`<button class="${ssrRenderClass([[
                selectedChar.value === char ? "bg-[#0F213A] text-white border-[#0F213A]" : "bg-white text-gray-600 border-gray-200 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200"
              ], "w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition duration-200 border"])}"${_scopeId}>${ssrInterpolate(char)}</button>`);
            });
            _push2(`<!--]--></div></div>`);
            if (__props.legalDictionaries.data.length > 0) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.legalDictionaries.data, (item) => {
                _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300 group"${_scopeId}><h3 class="text-xl font-bold text-[#0F213A] mb-3 group-hover:text-yellow-600 transition"${_scopeId}>${ssrInterpolate(item.title)}</h3><div class="text-gray-600 text-sm leading-relaxed line-clamp-4"${_scopeId}>${item.description ?? ""}</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100"${_scopeId}><svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg><h3 class="text-lg font-medium text-gray-900"${_scopeId}>Tidak ada istilah ditemukan</h3><p class="text-gray-500 mt-1"${_scopeId}>Coba kata kunci lain atau pilih abjad lain.</p><button class="mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"${_scopeId}> Reset Filter </button></div>`);
            }
            if (__props.legalDictionaries.links.length > 3) {
              _push2(`<div class="mt-10 flex justify-center text-sm"${_scopeId}><div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm"${_scopeId}><!--[-->`);
              ssrRenderList(__props.legalDictionaries.links, (link, key) => {
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
                  _push2(`<span class="h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"${_scopeId}>${link.label ?? ""}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-gray-500" }, "Informasi Hukum"),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Kamus Hukum")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Kamus Hukum"),
                  createVNode("p", { class: "text-gray-500 mt-2" }, "Daftar istilah dan definisi hukum.")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8" }, [
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
                      class: "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
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
                          selectedChar.value === char ? "bg-[#0F213A] text-white border-[#0F213A]" : "bg-white text-gray-600 border-gray-200 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200"
                        ]]
                      }, toDisplayString(char), 11, ["onClick"]);
                    }), 64))
                  ])
                ]),
                __props.legalDictionaries.data.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.legalDictionaries.data, (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300 group"
                    }, [
                      createVNode("h3", { class: "text-xl font-bold text-[#0F213A] mb-3 group-hover:text-yellow-600 transition" }, toDisplayString(item.title), 1),
                      createVNode("div", {
                        class: "text-gray-600 text-sm leading-relaxed line-clamp-4",
                        innerHTML: item.description
                      }, null, 8, ["innerHTML"])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100"
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "w-16 h-16 text-gray-300 mx-auto mb-4",
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
                  createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Tidak ada istilah ditemukan"),
                  createVNode("p", { class: "text-gray-500 mt-1" }, "Coba kata kunci lain atau pilih abjad lain."),
                  createVNode("button", {
                    onClick: () => {
                      search.value = "";
                      selectedChar.value = "";
                    },
                    class: "mt-4 text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                  }, " Reset Filter ", 8, ["onClick"])
                ])),
                __props.legalDictionaries.links.length > 3 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mt-10 flex justify-center text-sm"
                }, [
                  createVNode("div", { class: "flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.legalDictionaries.links, (link, key) => {
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
                          class: "h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300"
                        }, null, 8, ["innerHTML"]))
                      ], 64);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/LegalDictionary/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
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
    const filtersState = ref({
      search: props.filters?.search || "",
      year: props.filters?.year || "",
      type: props.filters?.type ? String(props.filters.type).split(",") : [],
      subject: props.filters?.subject ? String(props.filters.subject).split(",") : [],
      status: props.filters?.status ? String(props.filters.status).split(",") : [],
      sort: props.filters?.sort || "Terbaru"
    });
    const searchType = ref("");
    const searchSubject = ref("");
    const showAllTypes = ref(false);
    const showAllSubjects = ref(false);
    const filteredTypes = computed(() => {
      let list = props.options.types || [];
      if (searchType.value) {
        list = list.filter((t) => t.name.toLowerCase().includes(searchType.value.toLowerCase()));
      }
      return showAllTypes.value ? list : list.slice(0, 5);
    });
    const filteredSubjects = computed(() => {
      let list = props.options.subjects || [];
      if (searchSubject.value) {
        list = list.filter((s) => s.name.toLowerCase().includes(searchSubject.value.toLowerCase()));
      }
      return showAllSubjects.value ? list : list.slice(0, 5);
    });
    const updateParams = debounce(() => {
      router.get(
        route("produk-hukum.index"),
        {
          search: filtersState.value.search,
          year: filtersState.value.year,
          type: filtersState.value.type.join(","),
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
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Produk Hukum - JDIH UIN Sunan Gunung Djati",
        description: "Cari dan temukan produk hukum, peraturan, dan keputusan di lingkungan UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8" data-v-bad568db${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-bad568db${_scopeId}><nav class="flex text-sm text-gray-500 mb-4" data-v-bad568db${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300" data-v-bad568db${_scopeId}>/</span><span class="text-[#0F213A] font-medium" data-v-bad568db${_scopeId}>Pencarian Produk Hukum</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]" data-v-bad568db${_scopeId}>Pencarian Produk Hukum</h1></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" data-v-bad568db${_scopeId}><div class="flex flex-col lg:flex-row gap-10" data-v-bad568db${_scopeId}><div class="w-full lg:w-1/4 shrink-0 space-y-6" data-v-bad568db${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" data-v-bad568db${_scopeId}><div class="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50" data-v-bad568db${_scopeId}><h3 class="font-bold text-[#0F213A] flex items-center gap-2" data-v-bad568db${_scopeId}><svg class="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" data-v-bad568db${_scopeId}></path></svg> Filter Pencarian </h3><button class="text-xs font-medium text-gray-400 hover:text-red-500 transition" data-v-bad568db${_scopeId}>Reset Filter</button></div><div class="p-5 border-b border-gray-100" data-v-bad568db${_scopeId}><h4 class="font-bold text-sm text-[#0F213A] mb-3" data-v-bad568db${_scopeId}>Tahun</h4><input type="number"${ssrRenderAttr("value", filtersState.value.year)} placeholder="Contoh: 2024" class="w-full text-sm border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 placeholder:text-gray-300 transition" data-v-bad568db${_scopeId}></div><div class="p-5 border-b border-gray-100" data-v-bad568db${_scopeId}><h4 class="font-bold text-sm text-[#0F213A] mb-3" data-v-bad568db${_scopeId}>Jenis Produk Hukum</h4><div class="mb-3 relative" data-v-bad568db${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-bad568db${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchType.value)} placeholder="Cari jenis..." class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50" data-v-bad568db${_scopeId}></div><div class="space-y-2" data-v-bad568db${_scopeId}><!--[-->`);
            ssrRenderList(filteredTypes.value, (type) => {
              _push2(`<div class="flex items-center justify-between group" data-v-bad568db${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1" data-v-bad568db${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.type) ? ssrLooseContain(filtersState.value.type, type.name) : filtersState.value.type) ? " checked" : ""}${ssrRenderAttr("value", type.name)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" data-v-bad568db${_scopeId}><span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"${ssrRenderAttr("title", type.name)} data-v-bad568db${_scopeId}>${ssrInterpolate(type.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" data-v-bad568db${_scopeId}>${ssrInterpolate(type.count)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchType.value && __props.options.types.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1" data-v-bad568db${_scopeId}>${ssrInterpolate(showAllTypes.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllTypes.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-bad568db${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="p-5 border-b border-gray-100" data-v-bad568db${_scopeId}><h4 class="font-bold text-sm text-[#0F213A] mb-3" data-v-bad568db${_scopeId}>Subjek</h4><div class="mb-3 relative" data-v-bad568db${_scopeId}><svg class="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-bad568db${_scopeId}></path></svg><input type="text"${ssrRenderAttr("value", searchSubject.value)} placeholder="Cari subjek..." class="w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50" data-v-bad568db${_scopeId}></div><div class="space-y-2" data-v-bad568db${_scopeId}><!--[-->`);
            ssrRenderList(filteredSubjects.value, (subject) => {
              _push2(`<div class="flex items-center justify-between group" data-v-bad568db${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1" data-v-bad568db${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.subject) ? ssrLooseContain(filtersState.value.subject, subject.name) : filtersState.value.subject) ? " checked" : ""}${ssrRenderAttr("value", subject.name)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" data-v-bad568db${_scopeId}><span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]"${ssrRenderAttr("title", subject.name)} data-v-bad568db${_scopeId}>${ssrInterpolate(subject.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" data-v-bad568db${_scopeId}>${ssrInterpolate(subject.count)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!searchSubject.value && __props.options.subjects.length > 5) {
              _push2(`<button class="text-xs font-bold text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1" data-v-bad568db${_scopeId}>${ssrInterpolate(showAllSubjects.value ? "Sembunyikan" : "Lihat Selengkapnya")} <svg class="${ssrRenderClass([{ "rotate-180": showAllSubjects.value }, "w-3 h-3"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-bad568db${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="p-5" data-v-bad568db${_scopeId}><h4 class="font-bold text-sm text-[#0F213A] mb-3" data-v-bad568db${_scopeId}>Status Produk</h4><div class="space-y-2" data-v-bad568db${_scopeId}><!--[-->`);
            ssrRenderList(__props.options.statuses, (status) => {
              _push2(`<div class="flex items-center justify-between group" data-v-bad568db${_scopeId}><label class="flex items-center gap-3 cursor-pointer flex-1" data-v-bad568db${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.status) ? ssrLooseContain(filtersState.value.status, status.value) : filtersState.value.status) ? " checked" : ""}${ssrRenderAttr("value", status.value)} class="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/50" data-v-bad568db${_scopeId}><span class="text-gray-600 text-sm group-hover:text-[#0F213A] transition" data-v-bad568db${_scopeId}>${ssrInterpolate(status.name)}</span></label><span class="bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full group-hover:bg-yellow-100 group-hover:text-yellow-700 transition" data-v-bad568db${_scopeId}>${ssrInterpolate(status.count)}</span></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="flex-1" data-v-bad568db${_scopeId}><div class="bg-white rounded-lg border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm" data-v-bad568db${_scopeId}><div class="text-gray-600 font-medium mb-3 sm:mb-0" data-v-bad568db${_scopeId}> Menampilkan <span class="font-bold text-[#0F213A]" data-v-bad568db${_scopeId}>${ssrInterpolate(props.legalProducts.total)}</span> Hasil Pencarian </div><div class="flex items-center gap-3" data-v-bad568db${_scopeId}><span class="text-gray-400 text-sm" data-v-bad568db${_scopeId}>Urutkan:</span><select class="border-gray-200 rounded-md text-sm text-[#0F213A] focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer" data-v-bad568db${_scopeId}><option data-v-bad568db${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.sort) ? ssrLooseContain(filtersState.value.sort, null) : ssrLooseEqual(filtersState.value.sort, null)) ? " selected" : ""}${_scopeId}>Terbaru</option><option data-v-bad568db${ssrIncludeBooleanAttr(Array.isArray(filtersState.value.sort) ? ssrLooseContain(filtersState.value.sort, null) : ssrLooseEqual(filtersState.value.sort, null)) ? " selected" : ""}${_scopeId}>Terpopuler</option></select></div></div><div class="mb-6 relative" data-v-bad568db${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center pl-3" data-v-bad568db${_scopeId}><svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-bad568db${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", filtersState.value.search)} placeholder="Cari berdasarkan judul atau nomor peraturan..." class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" data-v-bad568db${_scopeId}></div><div class="space-y-4" data-v-bad568db${_scopeId}><!--[-->`);
            ssrRenderList(props.legalProducts.data, (item) => {
              _push2(`<div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition group relative overflow-hidden" data-v-bad568db${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("produk-hukum.show", item.slug),
                class: "absolute inset-0 z-10"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex gap-5 relative z-20 pointer-events-none" data-v-bad568db${_scopeId}><div class="shrink-0 hidden sm:block" data-v-bad568db${_scopeId}><div class="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition" data-v-bad568db${_scopeId}><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-bad568db${_scopeId}></path></svg></div></div><div class="flex-1" data-v-bad568db${_scopeId}><div class="flex flex-wrap items-center gap-2 mb-2" data-v-bad568db${_scopeId}><span class="bg-yellow-400 text-[#0F213A] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide" data-v-bad568db${_scopeId}>${ssrInterpolate(item.type?.name || "Dokumen")}</span><span class="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded" data-v-bad568db${_scopeId}>${ssrInterpolate(item.year)}</span><div class="ml-auto" data-v-bad568db${_scopeId}>`);
              if (item.status === "active" || item.status === "Berlaku") {
                _push2(`<span class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" data-v-bad568db${_scopeId}><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-bad568db${_scopeId}></path></svg> Berlaku </span>`);
              } else {
                _push2(`<span class="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" data-v-bad568db${_scopeId}><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-bad568db${_scopeId}></path></svg> Tidak Berlaku </span>`);
              }
              _push2(`</div></div><h3 class="text-lg font-bold text-[#0F213A] leading-snug mb-3 group-hover:text-yellow-600 transition pointer-events-auto" data-v-bad568db${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("produk-hukum.show", item.slug)
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
              _push2(`</h3><div class="flex flex-wrap gap-y-2 gap-x-6 text-xs text-gray-500 font-medium" data-v-bad568db${_scopeId}><span class="flex items-center gap-1.5" data-v-bad568db${_scopeId}><span class="text-gray-300" data-v-bad568db${_scopeId}>#</span> Nomor: ${ssrInterpolate(item.number)}</span><span class="flex items-center gap-1.5" data-v-bad568db${_scopeId}><svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-bad568db${_scopeId}></path></svg> ${ssrInterpolate(formatDate(item.published_date))}</span><span class="flex items-center gap-1.5" data-v-bad568db${_scopeId}><svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-bad568db${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-v-bad568db${_scopeId}></path></svg> ${ssrInterpolate(item.views_count || 0)} Dilihat </span></div><div class="mt-4 flex justify-end pointer-events-auto" data-v-bad568db${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(route)("produk-hukum.show", item.slug),
                class: "text-sm font-bold text-[#0F213A] border border-gray-200 px-4 py-2 rounded-lg hover:border-[#0F213A] hover:bg-[#0F213A] hover:text-white transition flex items-center gap-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lihat Detail <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-bad568db${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-bad568db${_scopeId2}></path></svg>`);
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
              _push2(`<div class="mt-10 flex justify-center text-sm" data-v-bad568db${_scopeId}><div class="flex flex-wrap justify-center gap-1.5 bg-white p-2 rounded-xl border border-gray-100 shadow-sm" data-v-bad568db${_scopeId}><!--[-->`);
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
                  _push2(`<span class="h-9 min-w-[36px] px-2 flex items-center justify-center text-gray-300" data-v-bad568db${_scopeId}>${link.label ?? ""}</span>`);
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
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Pencarian Produk Hukum")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Pencarian Produk Hukum")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", { class: "flex flex-col lg:flex-row gap-10" }, [
                  createVNode("div", { class: "w-full lg:w-1/4 shrink-0 space-y-6" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" }, [
                      createVNode("div", { class: "p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50" }, [
                        createVNode("h3", { class: "font-bold text-[#0F213A] flex items-center gap-2" }, [
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
                      createVNode("div", { class: "p-5 border-b border-gray-100" }, [
                        createVNode("h4", { class: "font-bold text-sm text-[#0F213A] mb-3" }, "Tahun"),
                        withDirectives(createVNode("input", {
                          type: "number",
                          "onUpdate:modelValue": ($event) => filtersState.value.year = $event,
                          placeholder: "Contoh: 2024",
                          class: "w-full text-sm border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 placeholder:text-gray-300 transition"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, filtersState.value.year]
                        ])
                      ]),
                      createVNode("div", { class: "p-5 border-b border-gray-100" }, [
                        createVNode("h4", { class: "font-bold text-sm text-[#0F213A] mb-3" }, "Jenis Produk Hukum"),
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
                            class: "w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"
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
                                  class: "text-gray-600 text-sm group-hover:text-[#0F213A] transition truncate max-w-[150px]",
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
                            class: "w-full pl-9 pr-3 py-2 text-xs border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-gray-50"
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
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "bg-white rounded-lg border border-gray-100 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm" }, [
                      createVNode("div", { class: "text-gray-600 font-medium mb-3 sm:mb-0" }, [
                        createTextVNode(" Menampilkan "),
                        createVNode("span", { class: "font-bold text-[#0F213A]" }, toDisplayString(props.legalProducts.total), 1),
                        createTextVNode(" Hasil Pencarian ")
                      ]),
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", { class: "text-gray-400 text-sm" }, "Urutkan:"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => filtersState.value.sort = $event,
                          class: "border-gray-200 rounded-md text-sm text-[#0F213A] focus:border-yellow-500 focus:ring-yellow-500/50 cursor-pointer"
                        }, [
                          createVNode("option", null, "Terbaru"),
                          createVNode("option", null, "Terpopuler")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, filtersState.value.sort]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mb-6 relative" }, [
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
                        class: "w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, filtersState.value.search]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.legalProducts.data, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.id,
                          class: "bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition group relative overflow-hidden"
                        }, [
                          createVNode(unref(Link), {
                            href: unref(route)("produk-hukum.show", item.slug),
                            class: "absolute inset-0 z-10"
                          }, null, 8, ["href"]),
                          createVNode("div", { class: "flex gap-5 relative z-20 pointer-events-none" }, [
                            createVNode("div", { class: "shrink-0 hidden sm:block" }, [
                              createVNode("div", { class: "w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition" }, [
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
                              ])
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
                              createVNode("h3", { class: "text-lg font-bold text-[#0F213A] leading-snug mb-3 group-hover:text-yellow-600 transition pointer-events-auto" }, [
                                createVNode(unref(Link), {
                                  href: unref(route)("produk-hukum.show", item.slug)
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
                                  class: "text-sm font-bold text-[#0F213A] border border-gray-200 px-4 py-2 rounded-lg hover:border-[#0F213A] hover:bg-[#0F213A] hover:text-white transition flex items-center gap-2"
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ProdukHukum/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bad568db"]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
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
      previewUrl.value = route("produk-hukum.preview", props.legalProduct.slug);
      showPreviewModal.value = true;
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, {
        title: __props.legalProduct.title,
        description: cleanDescription.value,
        keywords: keywords.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2"${_scopeId}>/</span>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk-hukum",
              class: "hover:text-yellow-600 transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Produk Hukum`);
                } else {
                  return [
                    createTextVNode("Produk Hukum")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="mx-2"${_scopeId}>/</span><span class="text-gray-400 truncate max-w-[200px]"${_scopeId}>${ssrInterpolate(__props.legalProduct.type?.name || "Dokumen")}</span><span class="mx-2"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Detail</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Detail</h1></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-3 gap-10"${_scopeId}><div class="lg:col-span-2 space-y-8"${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden"${_scopeId}><div class="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 z-0"${_scopeId}></div><div class="relative z-10"${_scopeId}><div class="flex flex-wrap items-center gap-2 mb-6"${_scopeId}>`);
            if (__props.legalProduct.status === "active" || __props.legalProduct.status === "Berlaku") {
              _push2(`<span class="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg> Berlaku </span>`);
            } else {
              _push2(`<span class="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg> Tidak Berlaku </span>`);
            }
            _push2(`<span class="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"${_scopeId}></path></svg> ${ssrInterpolate(__props.legalProduct.type?.name)}</span><span class="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> ${ssrInterpolate(__props.legalProduct.views_count || "0")} VIEWS </span></div><h1 class="text-2xl md:text-3xl font-extrabold text-[#0F213A] leading-tight mb-4 uppercase"${_scopeId}>${ssrInterpolate(__props.legalProduct.title)}</h1>`);
            if (__props.legalProduct.abstract) {
              _push2(`<div class="border-l-4 border-yellow-400 pl-4 mb-8"${_scopeId}><span class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block"${_scopeId}>ABSTRAK</span><div class="text-gray-600 text-lg leading-relaxed prose max-w-none"${_scopeId}>${__props.legalProduct.abstract ?? ""}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-gray-100 pt-6"${_scopeId}><h3 class="text-lg font-bold text-[#0F213A] mb-4"${_scopeId}>Detail Informasi</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8"${_scopeId}>`);
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
              _push2(`<div class="mt-6 pt-6 border-t border-gray-100"${_scopeId}><p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3"${_scopeId}>SUBJEK</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(__props.legalProduct.subjects, (subject) => {
                _push2(ssrRenderComponent(unref(Link), {
                  key: subject.id,
                  href: unref(route)("produk-hukum.index", { subject: [subject.name] }),
                  class: "bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition cursor-pointer"
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
            _push2(`</div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"${_scopeId}><div class="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center bg-gray-50/50 gap-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="bg-red-100 p-2 rounded text-red-600"${_scopeId}><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm font-bold text-[#0F213A] truncate max-w-[200px] sm:max-w-xs"${_scopeId}> Lampiran</p><p class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(__props.legalProduct.number)}</p></div></div><div class="flex gap-3 w-full sm:w-auto"${_scopeId}>`);
            if (__props.legalProduct.file_path) {
              _push2(`<button class="flex-1 sm:flex-none border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg> Pratinjau </button>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.legalProduct.file_path) {
              _push2(`<a${ssrRenderAttr("href", unref(route)("produk-hukum.download", __props.legalProduct.slug))} target="_blank" class="flex-1 sm:flex-none bg-[#FFC700] hover:bg-yellow-400 text-[#0F213A] px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm"${_scopeId}><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"${_scopeId}></path></svg> Download </a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="bg-gray-100 w-full h-[600px] relative"${_scopeId}>`);
            if (__props.legalProduct.file_path) {
              _push2(`<iframe${ssrRenderAttr("src", unref(route)("produk-hukum.preview", __props.legalProduct.slug))} class="w-full h-full" frameborder="0"${_scopeId}></iframe>`);
            } else {
              _push2(`<div class="flex items-center justify-center h-full text-gray-400 font-medium"${_scopeId}> Tidak ada dokumen lampiran. </div>`);
            }
            _push2(`</div></div></div><div class="space-y-6"${_scopeId}>`);
            if (__props.legalProduct.replaced_documents && __props.legalProduct.replaced_documents.length > 0 || __props.legalProduct.replaced_by && __props.legalProduct.replaced_by.length > 0) {
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg> Riwayat Dokumen </h3>`);
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
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"${_scopeId}></path></svg> Dokumen Terkait </h3><div class="space-y-4"${_scopeId}><!--[-->`);
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
              _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2"${_scopeId}><svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"${_scopeId}></path></svg> Tautan Terkait </h3><div class="space-y-3"${_scopeId}><!--[-->`);
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
            _push2(`<div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6"${_scopeId}><h4 class="text-sm font-extrabold text-[#0F213A] mb-2 flex justify-between items-center"${_scopeId}> Apakah dokumen ini membantu? </h4><p class="text-xs text-gray-400 mb-4"${_scopeId}>Bantu kami meningkatkan kualitas layanan JDIH.</p><div class="flex gap-3 mb-6"${_scopeId}><button class="flex-1 border border-gray-200 hover:border-green-400 hover:bg-green-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group"${_scopeId}><span class="text-xl group-hover:scale-110 transition"${_scopeId}>👍</span><span class="text-[10px] font-bold text-gray-600 group-hover:text-green-600"${_scopeId}>Ya, Puas</span></button><button class="flex-1 border border-gray-200 hover:border-red-400 hover:bg-red-50 rounded-lg p-2 flex flex-col items-center gap-1 transition group"${_scopeId}><span class="text-xl group-hover:scale-110 transition"${_scopeId}>👎</span><span class="text-[10px] font-bold text-gray-600 group-hover:text-red-600"${_scopeId}>Tidak</span></button></div><div class="flex items-center justify-between border-t border-gray-100 pt-4"${_scopeId}><span class="text-[10px] font-bold text-gray-400 uppercase"${_scopeId}>RATING PENGGUNA</span><span class="text-sm font-extrabold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.ratingStats?.average || 0)}/5.0</span></div><div class="flex gap-1 text-yellow-400 mt-1 text-sm"${_scopeId}><!--[-->`);
            ssrRenderList(5, (i) => {
              _push2(`<span class="${ssrRenderClass(i <= Math.round(__props.ratingStats?.average || 0) ? "text-yellow-400" : "text-gray-200")}"${_scopeId}>★</span>`);
            });
            _push2(`<!--]--></div><p class="text-[10px] text-gray-400 mt-1"${_scopeId}>(Berdasarkan ${ssrInterpolate(__props.ratingStats?.count || 0)} ulasan)</p></div><div class="bg-[#0F213A] text-white p-8 rounded-2xl text-center"${_scopeId}><h3 class="font-bold text-xl mb-2"${_scopeId}>Butuh Bantuan?</h3><p class="text-gray-400 text-sm mb-6"${_scopeId}>Hubungi kami jika anda membutuhkan bantuan tekait layanan informasi hukum.</p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: unref(route)("contact.index"),
              class: "inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Kontak Kami `);
                } else {
                  return [
                    createTextVNode(" Kontak Kami ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-blue-50 rounded-xl p-6 border border-blue-100"${_scopeId}><div class="flex gap-3"${_scopeId}><div class="mt-1 text-blue-600 shrink-0"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"${_scopeId}></path></svg></div><div${_scopeId}><h4 class="text-sm font-bold text-[#0F213A] mb-1"${_scopeId}>Disclaimer</h4><p class="text-xs text-gray-600 leading-relaxed"${_scopeId}> Dokumen digital ini adalah salinan untuk tujuan informasi. Jika terdapat perbedaan dengan dokumen fisik yang ditandatangani, maka dokumen fisik yang berlaku. </p></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2" }, "/"),
                    createVNode(unref(Link), {
                      href: "/produk-hukum",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Produk Hukum")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2" }, "/"),
                    createVNode("span", { class: "text-gray-400 truncate max-w-[200px]" }, toDisplayString(__props.legalProduct.type?.name || "Dokumen"), 1),
                    createVNode("span", { class: "mx-2" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Detail")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Detail")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-10" }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-8" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden" }, [
                      createVNode("div", { class: "absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 z-0" }),
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
                        createVNode("h1", { class: "text-2xl md:text-3xl font-extrabold text-[#0F213A] leading-tight mb-4 uppercase" }, toDisplayString(__props.legalProduct.title), 1),
                        __props.legalProduct.abstract ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "border-l-4 border-yellow-400 pl-4 mb-8"
                        }, [
                          createVNode("span", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block" }, "ABSTRAK"),
                          createVNode("div", {
                            class: "text-gray-600 text-lg leading-relaxed prose max-w-none",
                            innerHTML: __props.legalProduct.abstract
                          }, null, 8, ["innerHTML"])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "border-t border-gray-100 pt-6" }, [
                          createVNode("h3", { class: "text-lg font-bold text-[#0F213A] mb-4" }, "Detail Informasi"),
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
                            __props.legalProduct.determination_date ? (openBlock(), createBlock("div", { key: 4 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "TANGGAL PENETAPAN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(formatDate(__props.legalProduct.determination_date)), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.published_date ? (openBlock(), createBlock("div", { key: 5 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "TANGGAL TERBIT"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(formatDate(__props.legalProduct.published_date)), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.publisher?.name ? (openBlock(), createBlock("div", { key: 6 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " PENERBIT"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.publisher?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.author ? (openBlock(), createBlock("div", { key: 7 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "PENULIS "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.author), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.initiator?.name ? (openBlock(), createBlock("div", { key: 8 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " PEMRAKARSA"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.initiator?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.signer?.name ? (openBlock(), createBlock("div", { key: 9 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " PENANDATANGAN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.signer?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.place?.name ? (openBlock(), createBlock("div", { key: 10 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "TEMPAT TERBIT"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.place?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.legalField?.name ? (openBlock(), createBlock("div", { key: 11 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "BIDANG HUKUM"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.legalField?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.location?.name ? (openBlock(), createBlock("div", { key: 12 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "LOKASI PENYIMPANAN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.location?.name), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.doc_nature ? (openBlock(), createBlock("div", { key: 13 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "SIFAT DOKUMEN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.doc_nature), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.government_affair ? (openBlock(), createBlock("div", { key: 14 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "URUSAN PEMERINTAHAN"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.government_affair), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.language ? (openBlock(), createBlock("div", { key: 15 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "BAHASA "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.language), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.edition ? (openBlock(), createBlock("div", { key: 16 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "EDISI "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.edition), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.page_description ? (openBlock(), createBlock("div", { key: 17 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " DESKRIPSI FISIK"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.page_description), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.source ? (openBlock(), createBlock("div", { key: 18 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "SUMBER "),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(__props.legalProduct.source), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.validity_start ? (openBlock(), createBlock("div", { key: 19 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "MULAI BERLAKU"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(formatDate(__props.legalProduct.validity_start)), 1)
                            ])) : createCommentVNode("", true),
                            __props.legalProduct.validity_end ? (openBlock(), createBlock("div", { key: 20 }, [
                              createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, " BERAKHIR BERLAKU"),
                              createVNode("p", { class: "text-base font-bold text-[#0F213A]" }, toDisplayString(formatDate(__props.legalProduct.validity_end)), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          __props.legalProduct.subjects && __props.legalProduct.subjects.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-6 pt-6 border-t border-gray-100"
                          }, [
                            createVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-3" }, "SUBJEK"),
                            createVNode("div", { class: "flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.legalProduct.subjects, (subject) => {
                                return openBlock(), createBlock(unref(Link), {
                                  key: subject.id,
                                  href: unref(route)("produk-hukum.index", { subject: [subject.name] }),
                                  class: "bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition cursor-pointer"
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
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" }, [
                      createVNode("div", { class: "p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center bg-gray-50/50 gap-4" }, [
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
                            createVNode("p", { class: "text-sm font-bold text-[#0F213A] truncate max-w-[200px] sm:max-w-xs" }, " Lampiran"),
                            createVNode("p", { class: "text-xs text-gray-500" }, toDisplayString(__props.legalProduct.number), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex gap-3 w-full sm:w-auto" }, [
                          __props.legalProduct.file_path ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: openPreview,
                            class: "flex-1 sm:flex-none border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition"
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
                            class: "flex-1 sm:flex-none bg-[#FFC700] hover:bg-yellow-400 text-[#0F213A] px-6 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm"
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
                          ], 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-100 w-full h-[600px] relative" }, [
                        __props.legalProduct.file_path ? (openBlock(), createBlock("iframe", {
                          key: 0,
                          src: unref(route)("produk-hukum.preview", __props.legalProduct.slug),
                          class: "w-full h-full",
                          frameborder: "0"
                        }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex items-center justify-center h-full text-gray-400 font-medium"
                        }, " Tidak ada dokumen lampiran. "))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    __props.legalProduct.replaced_documents && __props.legalProduct.replaced_documents.length > 0 || __props.legalProduct.replaced_by && __props.legalProduct.replaced_by.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                    }, [
                      createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5 text-gray-600",
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
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6" }, [
                      createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
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
                      key: 1,
                      class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                    }, [
                      createVNode("h3", { class: "font-bold text-[#0F213A] mb-4 flex items-center gap-2" }, [
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
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6" }, [
                      createVNode("h4", { class: "text-sm font-extrabold text-[#0F213A] mb-2 flex justify-between items-center" }, " Apakah dokumen ini membantu? "),
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
                      createVNode("div", { class: "flex items-center justify-between border-t border-gray-100 pt-4" }, [
                        createVNode("span", { class: "text-[10px] font-bold text-gray-400 uppercase" }, "RATING PENGGUNA"),
                        createVNode("span", { class: "text-sm font-extrabold text-[#0F213A]" }, toDisplayString(__props.ratingStats?.average || 0) + "/5.0", 1)
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
                    createVNode("div", { class: "bg-[#0F213A] text-white p-8 rounded-2xl text-center" }, [
                      createVNode("h3", { class: "font-bold text-xl mb-2" }, "Butuh Bantuan?"),
                      createVNode("p", { class: "text-gray-400 text-sm mb-6" }, "Hubungi kami jika anda membutuhkan bantuan tekait layanan informasi hukum."),
                      createVNode(unref(Link), {
                        href: unref(route)("contact.index"),
                        class: "inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Kontak Kami ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    createVNode("div", { class: "bg-blue-50 rounded-xl p-6 border border-blue-100" }, [
                      createVNode("div", { class: "flex gap-3" }, [
                        createVNode("div", { class: "mt-1 text-blue-600 shrink-0" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 20 20"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                              "clip-rule": "evenodd"
                            })
                          ]))
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", { class: "text-sm font-bold text-[#0F213A] mb-1" }, "Disclaimer"),
                          createVNode("p", { class: "text-xs text-gray-600 leading-relaxed" }, " Dokumen digital ini adalah salinan untuk tujuan informasi. Jika terdapat perbedaan dengan dokumen fisik yang ditandatangani, maka dokumen fisik yang berlaku. ")
                        ])
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
      if (showPreviewModal.value) {
        _push(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"><div class="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden flex flex-col shadow-2xl"><div class="bg-[#0F213A] p-4 flex justify-between items-center shrink-0"><h3 class="text-white font-bold truncate pr-4">${ssrInterpolate(__props.legalProduct.title)}</h3><button class="text-gray-400 hover:text-white transition"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="flex-1 bg-gray-100 relative"><iframe${ssrRenderAttr("src", previewUrl.value)} class="w-full h-full" frameborder="0"></iframe></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showRatingModal.value) {
        _push(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"><div class="bg-white w-full max-w-md rounded-xl p-6 shadow-2xl relative"><button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><h3 class="text-lg font-bold text-[#0F213A] mb-4 text-center">Beri Penilaian</h3><div class="flex justify-center gap-2 mb-6"><!--[-->`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ProdukHukum/Show.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    visitorStats: Object,
    productsByType: Array,
    productsByYear: Array,
    topProducts: Array
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
      _push(ssrRenderComponent(_sfc_main$h, {
        title: "Statistik & Data - JDIH UIN SGD",
        description: "Visualisasi data produk hukum, statistik pengunjung, dan tren unduhan di JDIH UIN Sunan Gunung Djati Bandung."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white border-b border-gray-100 py-8"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><nav class="flex text-sm text-gray-500 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "hover:text-yellow-600 transition"
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
            _push2(`<span class="mx-2 text-gray-300"${_scopeId}>/</span><span class="text-[#0F213A] font-medium"${_scopeId}>Statistik &amp; Data</span></nav><h1 class="text-3xl font-extrabold text-[#0F213A]"${_scopeId}>Statistik &amp; Data</h1><p class="mt-2 text-gray-500"${_scopeId}>Visualisasi data produk hukum dan statistik pengunjung JDIH.</p></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"${_scopeId}><div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm text-gray-500 font-medium uppercase tracking-wide"${_scopeId}>Total Pengunjung</p><p class="text-2xl font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(formatNumber(__props.visitorStats.total))}</p></div></div><div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm text-gray-500 font-medium uppercase tracking-wide"${_scopeId}>Hari Ini</p><p class="text-2xl font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(formatNumber(__props.visitorStats.today))}</p></div></div><div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm text-gray-500 font-medium uppercase tracking-wide"${_scopeId}>Bulan Ini</p><p class="text-2xl font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(formatNumber(__props.visitorStats.month))}</p></div></div><div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600"${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"${_scopeId}></path></svg></div><div${_scopeId}><p class="text-sm text-gray-500 font-medium uppercase tracking-wide"${_scopeId}>Sedang Online</p><p class="text-2xl font-bold text-[#0F213A]"${_scopeId}>${ssrInterpolate(__props.visitorStats.online)}</p></div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-1"${_scopeId}><h3 class="text-lg font-bold text-[#0F213A] mb-6"${_scopeId}>Persebaran Jenis Dokumen</h3><div class="h-[300px] relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Doughnut), {
              data: typeChartData.value,
              options: typeChartOptions
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-2"${_scopeId}><h3 class="text-lg font-bold text-[#0F213A] mb-6"${_scopeId}>Dokumen Hukum per Tahun</h3><div class="h-[300px] relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Bar), {
              data: yearChartData.value,
              options: yearChartOptions
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"${_scopeId}><div class="p-6 border-b border-gray-100 flex items-center justify-between"${_scopeId}><h3 class="text-lg font-bold text-[#0F213A]"${_scopeId}>Dokumen Hukum Terpopuler</h3>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/produk-hukum",
              class: "text-sm text-[#0F213A] hover:text-yellow-600 font-medium"
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
            _push2(`</div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-sm text-left"${_scopeId}><thead class="bg-gray-50 text-gray-500 uppercase font-medium"${_scopeId}><tr${_scopeId}><th class="px-6 py-4"${_scopeId}>Judul Dokumen</th><th class="px-6 py-4 whitespace-nowrap"${_scopeId}>Nomor</th><th class="px-6 py-4 whitespace-nowrap"${_scopeId}>Tahun</th><th class="px-6 py-4 whitespace-nowrap"${_scopeId}>Jenis</th><th class="px-6 py-4 text-center"${_scopeId}>Dilihat</th></tr></thead><tbody class="divide-y divide-gray-100"${_scopeId}><!--[-->`);
            ssrRenderList(__props.topProducts, (item, index) => {
              _push2(`<tr class="hover:bg-gray-50 transition"${_scopeId}><td class="px-6 py-4 font-medium text-[#0F213A]"${_scopeId}>`);
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
              createVNode("div", { class: "bg-white border-b border-gray-100 py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("nav", { class: "flex text-sm text-gray-500 mb-4" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "hover:text-yellow-600 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Beranda")
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "mx-2 text-gray-300" }, "/"),
                    createVNode("span", { class: "text-[#0F213A] font-medium" }, "Statistik & Data")
                  ]),
                  createVNode("h1", { class: "text-3xl font-extrabold text-[#0F213A]" }, "Statistik & Data"),
                  createVNode("p", { class: "mt-2 text-gray-500" }, "Visualisasi data produk hukum dan statistik pengunjung JDIH.")
                ])
              ]),
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10" }, [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, [
                  createVNode("div", { class: "bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4" }, [
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
                      createVNode("p", { class: "text-sm text-gray-500 font-medium uppercase tracking-wide" }, "Total Pengunjung"),
                      createVNode("p", { class: "text-2xl font-bold text-[#0F213A]" }, toDisplayString(formatNumber(__props.visitorStats.total)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4" }, [
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
                      createVNode("p", { class: "text-sm text-gray-500 font-medium uppercase tracking-wide" }, "Hari Ini"),
                      createVNode("p", { class: "text-2xl font-bold text-[#0F213A]" }, toDisplayString(formatNumber(__props.visitorStats.today)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4" }, [
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
                      createVNode("p", { class: "text-sm text-gray-500 font-medium uppercase tracking-wide" }, "Bulan Ini"),
                      createVNode("p", { class: "text-2xl font-bold text-[#0F213A]" }, toDisplayString(formatNumber(__props.visitorStats.month)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4" }, [
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
                      createVNode("p", { class: "text-sm text-gray-500 font-medium uppercase tracking-wide" }, "Sedang Online"),
                      createVNode("p", { class: "text-2xl font-bold text-[#0F213A]" }, toDisplayString(__props.visitorStats.online), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-1" }, [
                    createVNode("h3", { class: "text-lg font-bold text-[#0F213A] mb-6" }, "Persebaran Jenis Dokumen"),
                    createVNode("div", { class: "h-[300px] relative" }, [
                      createVNode(unref(Doughnut), {
                        data: typeChartData.value,
                        options: typeChartOptions
                      }, null, 8, ["data"])
                    ])
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-2" }, [
                    createVNode("h3", { class: "text-lg font-bold text-[#0F213A] mb-6" }, "Dokumen Hukum per Tahun"),
                    createVNode("div", { class: "h-[300px] relative" }, [
                      createVNode(unref(Bar), {
                        data: yearChartData.value,
                        options: yearChartOptions
                      }, null, 8, ["data"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden" }, [
                  createVNode("div", { class: "p-6 border-b border-gray-100 flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-lg font-bold text-[#0F213A]" }, "Dokumen Hukum Terpopuler"),
                    createVNode(unref(Link), {
                      href: "/produk-hukum",
                      class: "text-sm text-[#0F213A] hover:text-yellow-600 font-medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Lihat Semua → ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full text-sm text-left" }, [
                      createVNode("thead", { class: "bg-gray-50 text-gray-500 uppercase font-medium" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "px-6 py-4" }, "Judul Dokumen"),
                          createVNode("th", { class: "px-6 py-4 whitespace-nowrap" }, "Nomor"),
                          createVNode("th", { class: "px-6 py-4 whitespace-nowrap" }, "Tahun"),
                          createVNode("th", { class: "px-6 py-4 whitespace-nowrap" }, "Jenis"),
                          createVNode("th", { class: "px-6 py-4 text-center" }, "Dilihat")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-gray-100" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.topProducts, (item, index) => {
                          return openBlock(), createBlock("tr", {
                            key: index,
                            class: "hover:bg-gray-50 transition"
                          }, [
                            createVNode("td", { class: "px-6 py-4 font-medium text-[#0F213A]" }, [
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Statistics/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const appName = "JDIH UIN SGD";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About/FAQ.vue": __vite_glob_0_0, "./Pages/About/Index.vue": __vite_glob_0_1, "./Pages/About/Prasyarat.vue": __vite_glob_0_2, "./Pages/About/Privacy.vue": __vite_glob_0_3, "./Pages/About/Structure.vue": __vite_glob_0_4, "./Pages/Contact/Index.vue": __vite_glob_0_5, "./Pages/Glossary/Index.vue": __vite_glob_0_6, "./Pages/Home.vue": __vite_glob_0_7, "./Pages/Infographics/Index.vue": __vite_glob_0_8, "./Pages/Information/Index.vue": __vite_glob_0_9, "./Pages/Information/Show.vue": __vite_glob_0_10, "./Pages/LegalDictionary/Index.vue": __vite_glob_0_11, "./Pages/ProdukHukum/Index.vue": __vite_glob_0_12, "./Pages/ProdukHukum/Show.vue": __vite_glob_0_13, "./Pages/Statistics/Index.vue": __vite_glob_0_14 });
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
