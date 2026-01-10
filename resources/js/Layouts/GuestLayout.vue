<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import Toast from '@/Components/Toast.vue';

const showingNavigationDropdown = ref(false);
const page = usePage();
</script>

<template>
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
                        <Link href="/produk-hukum"
                            :class="[page.component.startsWith('ProdukHukum') ? 'text-yellow-500 font-bold' : 'text-gray-600 font-semibold hover:text-yellow-500', 'transition']">
                            Produk Hukum
                        </Link>
                        <Link href="/informasi-hukum"
                            :class="[route().current('information.*') ? 'text-yellow-500 font-bold' : 'text-gray-600 font-semibold hover:text-yellow-500', 'transition']">
                            Informasi Hukum
                        </Link>
                        <Link href="#" class="text-gray-600 font-semibold hover:text-yellow-500 transition">Tentang
                        </Link>
                        <Link href="#" class="text-gray-600 font-semibold hover:text-yellow-500 transition">Kontak
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
                    <Link href="/produk-hukum"
                        :class="[page.component.startsWith('ProdukHukum') ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-3 pe-4 py-2 border-l-4 text-start text-base font-medium focus:outline-none transition duration-150 ease-in-out']">
                        Produk Hukum
                    </Link>
                    <Link href="/informasi-hukum"
                        :class="[route().current('information.*') ? 'border-yellow-400 text-[#0F213A] bg-yellow-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300', 'block w-full ps-3 pe-4 py-2 border-l-4 text-start text-base font-medium focus:outline-none transition duration-150 ease-in-out']">
                        Informasi Hukum
                    </Link>
                    <Link href="#"
                        class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none transition duration-150 ease-in-out">
                        Tentang
                    </Link>
                    <Link href="#"
                        class="block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none transition duration-150 ease-in-out">
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
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
                            <li><a href="#" class="hover:text-yellow-400 transition">Profil JDIH</a></li>
                            <li><a href="#" class="hover:text-yellow-400 transition">Struktur Organisasi</a></li>
                            <li><a href="#" class="hover:text-yellow-400 transition">SOP Layanan</a></li>
                            <li><a href="#" class="hover:text-yellow-400 transition">SK Rektor</a></li>
                            <li><a href="#" class="hover:text-yellow-400 transition">Kontak Kami</a></li>
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
                                <span>Jl. A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+62 22 7800525</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>jdih@uinsgd.ac.id</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Lokasi (Map Placeholder) -->
                    <div>
                        <h4 class="text-white font-bold mb-6 text-sm uppercase tracking-wider">Lokasi</h4>
                        <div class="bg-gray-800 rounded-lg overflow-hidden h-40 w-full relative group">
                            <!-- Placeholder for map -->
                            <img src="https://via.placeholder.com/300x200.png?text=Map+Location" alt="Map"
                                class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition" />
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="bg-white text-gray-900 px-3 py-1 rounded text-xs font-bold shadow">Buka
                                    Peta</span>
                            </div>
                        </div>
                        <div class="flex gap-4 mt-6">
                            <a href="#" class="text-gray-400 hover:text-white transition"><svg class="w-6 h-6"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
                                </svg></a>
                            <a href="#" class="text-gray-400 hover:text-white transition"><svg class="w-6 h-6"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
                                </svg></a>
                            <a href="#" class="text-gray-400 hover:text-white transition"><svg class="w-6 h-6"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg></a>
                        </div>
                    </div>
                </div>

                <div
                    class="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; 2024 JDIH UIN Sunan Gunung Djati Bandung. All Rights Reserved.</p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="hover:text-white transition">Kebijakan Privasi</a>
                        <a href="#" class="hover:text-white transition">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
