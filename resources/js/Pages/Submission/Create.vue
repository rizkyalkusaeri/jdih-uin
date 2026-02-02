<script setup>
import { Head, useForm, usePage, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref, computed } from 'vue';
import { route } from 'ziggy-js';

const props = defineProps({
    types: {
        type: Array,
        default: () => []
    },
    unit_kerjas: {
        type: Array,
        default: () => []
    },
});

const form = useForm({
    // Step 1: Identitas
    name: '',
    nip_nim: '',
    unit_kerja: '',
    whatsapp: '',
    // Step 2: Detail
    type_id: '',
    nota_dinas_number: '',
    title: '',
    product_summary: '',
    // Step 3: Upload
    cover_letter: null,
    draft_document: null,
});

const currentStep = ref(1);
const totalSteps = 4;

const nextStep = () => {
    if (validateStep(currentStep.value)) {
        currentStep.value++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const validateStep = (step) => {
    if (step === 1) {
        if (!form.name || !form.nip_nim || !form.unit_kerja || !form.whatsapp) {
            alert('Mohon lengkapi semua data identitas.');
            return false;
        }
    } else if (step === 2) {
        if (!form.type_id || !form.nota_dinas_number || !form.title || !form.product_summary) {
            alert('Mohon lengkapi semua detail pengajuan.');
            return false;
        }
    } else if (step === 3) {
        if (!form.cover_letter || !form.draft_document) {
            alert('Mohon upload kedua dokumen yang diperlukan.');
            return false;
        }
    }
    return true;
};

const submit = () => {
    form.post(route('submission.store'), {
        preserveScroll: true,
        onSuccess: () => {
            currentStep.value = 1;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        onError: (errors) => {
            console.error(errors);
            alert('Terjadi kesalahan validasi. Silakan periksa kembali inputan Anda.');
        }
    });
};

const handleFileUpload = (field, event) => {
    form[field] = event.target.files[0];
};

const successMessage = computed(() => usePage().props.flash.success);

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Kode Tracking berhasil disalin!');
};
</script>

<template>

    <Head title="Buat Pengajuan Produk Hukum" />

    <GuestLayout>
        <div class="min-h-screen py-10 px-4 md:px-6" style="background-color: var(--color-bg-secondary);">
            <div class="max-w-6xl mx-auto">
                <!-- Page Heading -->
                <!-- Breadcrumb & Header -->
                <div class="border-b py-8 mb-8"
                    style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav class="flex text-sm mb-4" style="color: var(--color-text-muted);">
                            <Link href="/" class="hover:text-[var(--color-accent-hover)] transition">Beranda</Link>
                            <span class="mx-2" style="color: var(--color-border-dark);">/</span>
                            <span class="font-medium" style="color: var(--color-text-primary);">Buat Pengajuan Produk
                                Hukum</span>
                        </nav>
                        <h1 class="text-3xl font-extrabold" style="color: var(--color-primary);">Buat Pengajuan Produk
                            Hukum
                        </h1>
                    </div>
                </div>

                <!-- Success Message -->
                <div v-if="successMessage"
                    class="mb-8 p-8 bg-green-50 border border-green-200 rounded-2xl shadow-sm text-center">
                    <div class="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                        <svg class="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold text-green-800 mb-4">Pengajuan Berhasil!</h2>
                    <p class="text-green-700 text-lg mb-8">{{ successMessage }}</p>

                    <div v-if="$page.props.flash.success.includes('Kode Tracking Anda:')" class="flex justify-center">
                        <button @click="copyToClipboard($page.props.flash.success.split(': ')[1])"
                            class="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition shadow-lg font-bold text-lg">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            Salin Kode Tracking
                        </button>
                    </div>
                    <div class="mt-8">
                        <button @click="currentStep = 1; $page.props.flash.success = null"
                            class="text-gray-500 hover:text-gray-700 underline">Buat Pengajuan Baru</button>
                    </div>
                </div>


                <div v-else class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

                    <!-- Left Sidebar: Stepper -->
                    <aside class="hidden lg:block sticky top-24 rounded-2xl border p-6 shadow-sm"
                        style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                        <div class="flex flex-col gap-0">
                            <!-- Step 1 -->
                            <div class="grid grid-cols-[40px_1fr] gap-x-2">
                                <div class="flex flex-col items-center gap-1">
                                    <div class="flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300"
                                        :class="currentStep >= 1 ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-gray-400'"
                                        :style="currentStep >= 1 ? 'background-color: var(--color-primary);' : ''">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-0.5 h-10 transition-colors duration-300"
                                        :class="currentStep > 1 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'"
                                        :style="currentStep > 1 ? 'background-color: var(--color-primary);' : ''"></div>
                                </div>
                                <div class="flex flex-col pt-1">
                                    <p class="text-sm font-bold transition-colors"
                                        :class="currentStep >= 1 ? 'text-[var(--color-text-primary)]' : 'text-gray-500'">
                                        Identitas</p>
                                    <p class="text-xs text-gray-400">Informasi Pemohon</p>
                                </div>
                            </div>
                            <!-- Step 2 -->
                            <div class="grid grid-cols-[40px_1fr] gap-x-2">
                                <div class="flex flex-col items-center gap-1">
                                    <div class="flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300"
                                        :class="currentStep >= 2 ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-gray-400'"
                                        :style="currentStep >= 2 ? 'background-color: var(--color-primary);' : ''">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div class="w-0.5 h-10 transition-colors duration-300"
                                        :class="currentStep > 2 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'"
                                        :style="currentStep > 2 ? 'background-color: var(--color-primary);' : ''"></div>
                                </div>
                                <div class="flex flex-col pt-1">
                                    <p class="text-sm font-bold transition-colors"
                                        :class="currentStep >= 2 ? 'text-[var(--color-text-primary)]' : 'text-gray-500'">
                                        Detail</p>
                                    <p class="text-xs text-gray-400">Rincian Dokumen</p>
                                </div>
                            </div>
                            <!-- Step 3 -->
                            <div class="grid grid-cols-[40px_1fr] gap-x-2">
                                <div class="flex flex-col items-center gap-1">
                                    <div class="flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300"
                                        :class="currentStep >= 3 ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-gray-400'"
                                        :style="currentStep >= 3 ? 'background-color: var(--color-primary);' : ''">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                    </div>
                                    <div class="w-0.5 h-10 transition-colors duration-300"
                                        :class="currentStep > 3 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'"
                                        :style="currentStep > 3 ? 'background-color: var(--color-primary);' : ''"></div>
                                </div>
                                <div class="flex flex-col pt-1">
                                    <p class="text-sm font-bold transition-colors"
                                        :class="currentStep >= 3 ? 'text-[var(--color-text-primary)]' : 'text-gray-500'">
                                        Upload</p>
                                    <p class="text-xs text-gray-400">Unggah Berkas</p>
                                </div>
                            </div>
                            <!-- Step 4 -->
                            <div class="grid grid-cols-[40px_1fr] gap-x-2">
                                <div class="flex flex-col items-center gap-1">
                                    <div class="flex items-center justify-center rounded-full w-8 h-8 transition-colors duration-300"
                                        :class="currentStep >= 4 ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-gray-400'"
                                        :style="currentStep >= 4 ? 'background-color: var(--color-primary);' : ''">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex flex-col pt-1">
                                    <p class="text-sm font-bold transition-colors"
                                        :class="currentStep >= 4 ? 'text-[var(--color-text-primary)]' : 'text-gray-500'">
                                        Ringkasan</p>
                                    <p class="text-xs text-gray-400">Pratinjau</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <!-- Main Form Area -->
                    <div class="flex flex-col gap-6">

                        <!-- Mobile Stepper (Visible only on small screens) -->
                        <div
                            class="lg:hidden bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center mb-4">
                            <span class="font-bold text-gray-700">Langkah {{ currentStep }} dari 4</span>
                            <div class="flex gap-1">
                                <div v-for="s in 4" :key="s" class="h-2 w-8 rounded-full transition-colors"
                                    :class="s <= currentStep ? 'bg-[var(--color-primary)]' : 'bg-gray-200'"
                                    :style="s <= currentStep ? 'background-color: var(--color-primary);' : ''"></div>
                            </div>
                        </div>


                        <form @submit.prevent="submit" class="flex flex-col gap-6">

                            <!-- Step 1: Identitas -->
                            <section v-if="currentStep === 1" class="rounded-xl border shadow-sm overflow-hidden"
                                style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                                <div class="border-l-4 p-6" style="border-color: var(--color-accent);">
                                    <h2 class="text-xl font-bold mb-1" style="color: var(--color-text-primary);">Langkah
                                        1: Identitas Diri</h2>
                                    <p class="text-sm" style="color: var(--color-text-secondary);">Data ini digunakan
                                        untuk verifikasi pengaju.</p>
                                </div>
                                <div class="px-6 pb-8 flex flex-col gap-5">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-semibold"
                                                style="color: var(--color-text-primary);">Nama Lengkap <span
                                                    class="text-red-500">*</span></label>
                                            <input v-model="form.name" type="text"
                                                class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                placeholder="Contoh: Dr. Ahmad Fauzi, M.Ag"
                                                style="background-color: var(--color-bg-card); color: var(--color-text-primary);">
                                            <p v-if="form.errors.name" class="text-red-500 text-xs mt-1">{{
                                                form.errors.name }}</p>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-semibold"
                                                style="color: var(--color-text-primary);">NIP/NIM <span
                                                    class="text-red-500">*</span></label>
                                            <input v-model="form.nip_nim" type="text"
                                                class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                placeholder="Masukkan nomor induk"
                                                style="background-color: var(--color-bg-card); color: var(--color-text-primary);">
                                            <p v-if="form.errors.nip_nim" class="text-red-500 text-xs mt-1">{{
                                                form.errors.nip_nim }}</p>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-semibold"
                                                style="color: var(--color-text-primary);">Unit/Fakultas <span
                                                    class="text-red-500">*</span></label>
                                            <select v-model="form.unit_kerja"
                                                class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                style="background-color: var(--color-bg-card); color: var(--color-text-primary);">
                                                <option value="" disabled>Pilih Unit Kerja</option>
                                                <option v-for="unit in unit_kerjas" :key="unit" :value="unit">{{ unit }}
                                                </option>
                                            </select>
                                            <p v-if="form.errors.unit_kerja" class="text-red-500 text-xs mt-1">{{
                                                form.errors.unit_kerja }}</p>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-semibold"
                                                style="color: var(--color-text-primary);">Nomor WhatsApp <span
                                                    class="text-red-500">*</span></label>
                                            <div class="flex shadow-md rounded-lg">
                                                <span
                                                    class="inline-flex items-center px-4 rounded-l-lg border-r-0 bg-gray-50 text-gray-500 text-sm font-medium border border-gray-100">+62</span>
                                                <input v-model="form.whatsapp" type="tel"
                                                    class="w-full rounded-r-lg border-none py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                    placeholder="8123456789"
                                                    style="background-color: var(--color-bg-card); color: var(--color-text-primary);">
                                            </div>
                                            <p v-if="form.errors.whatsapp" class="text-red-500 text-xs mt-1">{{
                                                form.errors.whatsapp }}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <!-- Step 2: Detail -->
                            <section v-if="currentStep === 2" class="rounded-xl border shadow-sm overflow-hidden"
                                style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                                <div class="border-l-4 p-6" style="border-color: var(--color-accent);">
                                    <h2 class="text-xl font-bold mb-1" style="color: var(--color-text-primary);">Langkah
                                        2: Detail Produk Hukum</h2>
                                    <p class="text-sm" style="color: var(--color-text-secondary);">Informasi mengenai
                                        dokumen yang akan diajukan.</p>
                                </div>
                                <div class="px-6 pb-8 flex flex-col gap-5">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-semibold"
                                                style="color: var(--color-text-primary);">Jenis Produk <span
                                                    class="text-red-500">*</span></label>
                                            <select v-model="form.type_id"
                                                class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                style="background-color: var(--color-bg-card); color: var(--color-text-primary);">
                                                <option value="" disabled>Pilih jenis produk hukum</option>
                                                <option v-for="type in types" :key="type.id" :value="type.id">{{
                                                    type.name }}</option>
                                            </select>
                                            <p v-if="form.errors.type_id" class="text-red-500 text-xs mt-1">{{
                                                form.errors.type_id }}</p>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <label class="text-sm font-semibold"
                                                style="color: var(--color-text-primary);">Nomor Nota Dinas <span
                                                    class="text-red-500">*</span></label>
                                            <input v-model="form.nota_dinas_number" type="text"
                                                class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                placeholder="B-___/Un.05/___/___/202X"
                                                style="background-color: var(--color-bg-card); color: var(--color-text-primary);">
                                            <p v-if="form.errors.nota_dinas_number" class="text-red-500 text-xs mt-1">{{
                                                form.errors.nota_dinas_number }}</p>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold"
                                            style="color: var(--color-text-primary);">Judul/Perihal Dokumen <span
                                                class="text-red-500">*</span></label>
                                        <input v-model="form.title" type="text"
                                            class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            placeholder="Contoh: Penetapan Panitia Wisuda Ke-90"
                                            style="background-color: var(--color-bg-card); color: var(--color-text-primary);">
                                        <p v-if="form.errors.title" class="text-red-500 text-xs mt-1">{{
                                            form.errors.title }}</p>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-sm font-semibold"
                                            style="color: var(--color-text-primary);">Ringkasan / Urgensi <span
                                                class="text-red-500">*</span></label>
                                        <textarea v-model="form.product_summary"
                                            class="w-full rounded-lg border-none shadow-md py-3 px-4 min-h-[120px] leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            placeholder="Jelaskan secara singkat tujuan dan dasar hukum pengajuan ini..."
                                            style="background-color: var(--color-bg-card); color: var(--color-text-primary);"></textarea>
                                        <p v-if="form.errors.product_summary" class="text-red-500 text-xs mt-1">{{
                                            form.errors.product_summary }}</p>
                                    </div>
                                </div>
                            </section>

                            <!-- Step 3: Upload -->
                            <section v-if="currentStep === 3" class="rounded-xl border shadow-sm overflow-hidden"
                                style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                                <div class="border-l-4 p-6" style="border-color: var(--color-accent);">
                                    <h2 class="text-xl font-bold mb-1" style="color: var(--color-text-primary);">Langkah
                                        3: Unggah Berkas</h2>
                                    <p class="text-sm" style="color: var(--color-text-secondary);">Pastikan format file
                                        sesuai dengan ketentuan.</p>
                                </div>
                                <div class="px-6 pb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <!-- File 1 -->
                                    <div class="flex flex-col gap-3">
                                        <label class="text-sm font-semibold"
                                            style="color: var(--color-text-primary);">Surat Pengantar (PDF) <span
                                                class="text-red-500">*</span></label>
                                        <div class="relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors group"
                                            :class="form.cover_letter ? 'border-green-400 bg-green-50' : 'border-gray-300'">
                                            <input @change="handleFileUpload('cover_letter', $event)" type="file"
                                                accept="application/pdf"
                                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">

                                            <div v-if="form.cover_letter" class="flex flex-col items-center">
                                                <svg class="w-10 h-10 text-green-500" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <p class="text-sm font-bold text-green-700 mt-2 truncate max-w-[200px]">
                                                    {{ form.cover_letter.name }}</p>
                                            </div>
                                            <div v-else class="flex flex-col items-center">
                                                <svg class="w-10 h-10 text-gray-400 group-hover:text-gray-500"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <p class="text-xs text-center text-gray-500 mt-2">Klik atau seret file
                                                    PDF ke sini <br />(Maks. 5MB)</p>
                                                <span class="mt-3 text-xs font-bold underline"
                                                    style="color: var(--color-primary);">Pilih File</span>
                                            </div>
                                        </div>
                                        <p v-if="form.errors.cover_letter" class="text-red-500 text-xs mt-1">{{
                                            form.errors.cover_letter }}</p>
                                    </div>

                                    <!-- File 2 -->
                                    <div class="flex flex-col gap-3">
                                        <label class="text-sm font-semibold"
                                            style="color: var(--color-text-primary);">Draft Naskah (Docx) <span
                                                class="text-red-500">*</span></label>
                                        <div class="relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors group"
                                            :class="form.draft_document ? 'border-green-400 bg-green-50' : 'border-gray-300'">
                                            <input @change="handleFileUpload('draft_document', $event)" type="file"
                                                accept=".doc,.docx"
                                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">

                                            <div v-if="form.draft_document" class="flex flex-col items-center">
                                                <svg class="w-10 h-10 text-green-500" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <p class="text-sm font-bold text-green-700 mt-2 truncate max-w-[200px]">
                                                    {{ form.draft_document.name }}</p>
                                            </div>
                                            <div v-else class="flex flex-col items-center">
                                                <svg class="w-10 h-10 text-gray-400 group-hover:text-gray-500"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <p class="text-xs text-center text-gray-500 mt-2">Klik atau seret file
                                                    Word ke sini <br />(Maks. 10MB)</p>
                                                <span class="mt-3 text-xs font-bold underline"
                                                    style="color: var(--color-primary);">Pilih File</span>
                                            </div>
                                        </div>
                                        <p v-if="form.errors.draft_document" class="text-red-500 text-xs mt-1">{{
                                            form.errors.draft_document }}</p>
                                    </div>
                                </div>
                            </section>

                            <!-- Step 4: Review -->
                            <section v-if="currentStep === 4" class="rounded-xl border overflow-hidden shadow-sm p-6"
                                style="background-color: var(--color-bg-card); border-color: var(--color-primary);">
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="p-3 rounded-full bg-blue-50">
                                        <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-lg" style="color: var(--color-text-primary);">
                                            Verifikasi Akhir</h3>
                                        <p class="text-sm" style="color: var(--color-text-secondary);">Mohon periksa
                                            kembali semua data sebelum menekan tombol simpan.</p>
                                    </div>
                                </div>

                                <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                                        <div class="col-span-2 md:col-span-1">
                                            <dt class="font-medium text-gray-500">Nama Pemohon</dt>
                                            <dd class="mt-1 font-bold text-gray-900">{{ form.name }}</dd>
                                        </div>
                                        <div class="col-span-2 md:col-span-1">
                                            <dt class="font-medium text-gray-500">Unit Kerja</dt>
                                            <dd class="mt-1 font-bold text-gray-900">{{ form.unit_kerja }}</dd>
                                        </div>
                                        <div class="col-span-2 border-t border-gray-300 my-2"></div>
                                        <div class="col-span-2">
                                            <dt class="font-medium text-gray-500">Judul Pengajuan</dt>
                                            <dd class="mt-1 font-bold text-gray-900">{{ form.title }}</dd>
                                        </div>
                                        <div class="col-span-2 md:col-span-1">
                                            <dt class="font-medium text-gray-500">Jenis Produk Hukum</dt>
                                            <dd class="mt-1 font-bold text-gray-900">{{types.find(t => t.id ===
                                                form.type_id)?.name}}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </section>

                            <!-- Navigation Buttons -->
                            <div class="flex justify-between items-center pt-4">
                                <button type="button" v-if="currentStep > 1" @click="prevStep"
                                    class="px-6 py-3 rounded-lg border font-bold text-sm hover:bg-gray-50 transition"
                                    style="border-color: var(--color-border-dark);">
                                    Kembali
                                </button>
                                <div v-else></div>

                                <div class="flex gap-3">
                                    <button type="button" v-if="currentStep < totalSteps" @click="nextStep"
                                        class="px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white"
                                        style="background-color: var(--color-primary);">
                                        Selanjutnya
                                    </button>

                                    <button type="submit" v-if="currentStep === totalSteps" :disabled="form.processing"
                                        class="px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white flex items-center gap-2"
                                        style="background-color: var(--color-primary);">
                                        <svg v-if="form.processing" class="animate-spin h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        {{ form.processing ? 'Mengirim...' : 'Ajukan Sekarang' }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>
