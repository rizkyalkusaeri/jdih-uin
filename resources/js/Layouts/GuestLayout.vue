<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import Toast from '@/Components/Toast.vue';
import SeoHead from '@/Components/SeoHead.vue';

const showingNavigationDropdown = ref(false);
const page = usePage();

</script>

<template>
    <SeoHead />
    <div class="min-h-screen bg-gray-50 font-sans text-gray-900">
        <Toast />
        <!-- Header -->
        <header class="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20 items-center">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center gap-3">
                        <a href="https://jdihn.go.id/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logo-jdihn.png" alt="Jaringan Dokumentasi dan Informasi Hukum Nasional"
                                class="h-12 w-auto" />
                        </a>
                        <Link href="/">
                            <img src="/images/jdih.png"
                                alt="Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati"
                                class="h-12 w-auto" />
                        </Link>
                        <Link href="/">
                            <div class="hidden md:block">
                                <h1 class="text-xl font-bold text-[#0F213A] leading-tight">JDIH UIN SGD</h1>
                                <p class="text-xs text-gray-500">Jaringan Dokumentasi & Informasi Hukum</p>
                            </div>
                        </Link>
                    </div>

                    <!-- Desktop Menu -->
                    <div class="hidden md:flex space-x-8 items-center">
                        <Link href="/"
                            :class="[page.component === 'Home' ? 'text-yellow-500 font-bold' : 'text-gray-600 font-semibold hover:text-yellow-500', 'transition']">
                            Beranda
                        </Link>
                        <!-- Produk Hukum Dropdown -->
                        <div class="relative group">
                            <button
                                class="flex items-center gap-1 text-gray-600 font-semibold hover:text-yellow-500 transition focus:outline-none"
                                :class="{ 'text-yellow-500 font-bold': page.component.startsWith('ProdukHukum') }">
                                Produk Hukum
                                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Dropdown Menu -->
                            <div
                                class="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                                <Link href="/produk-hukum"
                                    class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 border-b border-gray-50 mb-1"
                                    :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().current('produk-hukum.index') && !route().params.category }">
                                    Semua Produk Hukum
                                </Link>
                                <template v-if="page.props.categories">
                                    <Link v-for="category in page.props.categories" :key="category.id"
                                        :href="`/produk-hukum?category=${encodeURIComponent(category.name)}`"
                                        class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                                        :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().params.category === category.name }">
                                        {{ category.name }}
                                    </Link>
                                </template>
                            </div>
                        </div>
                        <!-- Berita, Event & Dokumentasi Dropdown -->
                        <div class="relative group">
                            <button
                                class="flex items-center gap-1 text-gray-600 font-semibold hover:text-yellow-500 transition focus:outline-none"
                                :class="{ 'text-yellow-500 font-bold': route().current('information.*') || route().current('infographics.*') || route().current('glossary.*') || route().current('legal-dictionary.*') }">
                                Informasi Hukum
                                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Dropdown Menu -->
                            <div
                                class="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                                <Link href="/informasi-hukum"
                                    class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                                    :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().current('information.*') }">
                                    Berita, Event & Dokumentasi
                                </Link>
                                <Link href="/infografis"
                                    class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                                    :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().current('infographics.*') }">
                                    Info Grafis
                                </Link>
                                <Link href="/kamus-hukum"
                                    class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                                    :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().current('legal-dictionary.*') }">
                                    Kamus Hukum
                                </Link>
                                <Link href="/glosarium"
                                    class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                                    :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().current('glossary.*') }">
                                    Glosarium
                                </Link>
                                <Link href="/statistik"
                                    class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                                    :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().current('statistics.*') }">
                                    Statistik & Data
                                </Link>
                            </div>
                        </div>
                        <!-- Tentang Dropdown -->
                        <div class="relative group">
                            <button
                                class="flex items-center gap-1 text-gray-600 font-semibold hover:text-yellow-500 transition focus:outline-none"
                                :class="{ 'text-yellow-500 font-bold': route().current('about.index') || route().current('about.structure') || route().current('about.faq') || route().current('about.prasyarat') || route().current('about.privacy') }">
                                Tentang
                                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Dropdown Menu -->
                            <div
                                class="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                                <template v-for="pageItem in $page.props.pages" :key="pageItem.slug">
                                    <Link :href="`/tentang/${pageItem.slug}`"
                                        class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                                        :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().current() === 'about.show' && route().params.slug === pageItem.slug }">
                                        {{ pageItem.title }}
                                    </Link>
                                </template>
                                <Link href="/tentang/faq"
                                    class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                                    :class="{ 'font-bold text-yellow-600 bg-yellow-50': route().current('about.faq') }">
                                    FAQ
                                </Link>
                            </div>
                        </div>
                        <Link href="/kontak"
                            :class="[route().current('contact.index') ? 'text-yellow-500 font-bold' : 'text-gray-600 font-semibold hover:text-yellow-500', 'transition']">
                            Kontak
                        </Link>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="-me-2 flex items-center md:hidden">
                        <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{
                                    hidden: showingNavigationDropdown,
                                    'inline-flex': !showingNavigationDropdown,
                                }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{
                                    hidden: !showingNavigationDropdown,
                                    'inline-flex': showingNavigationDropdown,
                                }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="md:hidden">
                <div class="pt-2 pb-3 space-y-1">
                    <Link href="/"
                        :class="[page.component === 'Home' ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-3 pe-4 py-2 border-l-4 text-start text-base font-medium focus:outline-none transition duration-150 ease-in-out']">
                        Beranda
                    </Link>
                    <!-- Produk Hukum Group -->
                    <div class="space-y-1">
                        <div
                            class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600">
                            Produk Hukum
                        </div>
                        <Link href="/produk-hukum"
                            :class="[route().current('produk-hukum.index') && !route().params.category ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out']">
                            Semua Produk Hukum
                        </Link>
                        <template v-if="page.props.categories">
                            <Link v-for="category in page.props.categories" :key="category.id"
                                :href="`/produk-hukum?category=${encodeURIComponent(category.name)}`"
                                :class="[route().params.category === category.name ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out']">
                                {{ category.name }}
                            </Link>
                        </template>
                    </div>
                    <!-- Berita, Event & Dokumentasi Group -->
                    <div class="space-y-1">
                        <div
                            class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600">
                            Berita, Event & Dokumentasi
                        </div>
                        <Link href="/informasi-hukum"
                            :class="[route().current('information.*') ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out']">
                            Informasi Hukum
                        </Link>
                        <Link href="/infografis"
                            :class="[route().current('infographics.*') ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out']">
                            Info Grafis
                        </Link>
                        <Link href="/statistik"
                            :class="[route().current('statistics.*') ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out']">
                            Statistik & Data
                        </Link>
                    </div>
                    <!-- Tentang Group -->
                    <div class="space-y-1">
                        <div
                            class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600">
                            Tentang
                        </div>
                        <template v-for="pageItem in $page.props.pages" :key="pageItem.slug">
                            <Link :href="`/tentang/${pageItem.slug}`"
                                :class="[route().current() === 'about.show' && route().params.slug === pageItem.slug ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out']">
                                {{ pageItem.title }}
                            </Link>
                        </template>
                        <Link href="/tentang/faq"
                            :class="[route().current('about.faq') ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out']">
                            FAQ
                        </Link>
                    </div>
                    <Link href="/kontak"
                        :class="[route().current('contact.index') ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-8 pe-4 py-2 border-l-4 text-sm font-medium focus:outline-none transition duration-150 ease-in-out']">
                        Kontak
                    </Link>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-[#0F213A] text-white pt-16 pb-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <!-- Brand -->
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <img src="/images/jdih.png" alt="Logo" class="h-10 w-auto bg-white rounded-full p-1" />
                            <div>
                                <h3 class="text-lg font-bold">JDIH UIN SGD</h3>
                            </div>
                        </div>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            Jaringan Dokumentasi dan Informasi Hukum Universitas Islam Negeri Sunan Gunung Djati
                            Bandung. Wadah pendayaggunaan bersama atas dokumen hukum secara tertib, terpadu, dan
                            berkesinambungan.
                        </p>
                    </div>

                    <!-- Tautan Cepat -->
                    <div>
                        <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Tautan Cepat</h4>
                        <ul class="space-y-3 text-sm text-gray-400">
                            <li><a href="/tentang" class="hover:text-yellow-400 transition">Profil JDIH</a></li>
                            <li><a href="/tentang/struktur-organisasi" class="hover:text-yellow-400 transition">Struktur
                                    Organisasi</a></li>
                            <li><a href="/tentang/faq" class="hover:text-yellow-400 transition">FAQ</a></li>
                            <li><a href="/kontak" class="hover:text-yellow-400 transition">Kontak
                                    Kami</a></li>
                        </ul>
                    </div>

                    <!-- Kontak Kami -->
                    <div>
                        <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Kontak Kami</h4>
                        <ul class="space-y-4 text-sm text-gray-400">
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-yellow-400 mt-1 shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span v-html="$page.props.generals.alamat?.description ?? `Jl. A.H. Nasution No. 105,
                                    Cipadung,
                                    Cibiru, Kota Bandung, Jawa Barat 40614`"></span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span v-html="$page.props.generals.telepon?.description ?? '022-7500000'"></span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span v-html="$page.props.generals.email?.description ?? 'email@jdih-uin.com'"></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    class="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {{ new Date().getFullYear() }} JDIH UIN Sunan Gunung Djati Bandung. All Rights Reserved.
                    </p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="/tentang/kebijakan-privasi" class="hover:text-white transition">Kebijakan Privasi</a>
                        <a href="/tentang/prasyarat" class="hover:text-white transition">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
