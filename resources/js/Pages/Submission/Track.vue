<script setup>
import { Head, useForm, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { route } from 'ziggy-js';

const props = defineProps({
    submission: Object,
    filters: Object,
    searchPerformed: Boolean,
});

const form = useForm({
    tracking_code: props.filters.tracking_code || '',
});

const submit = () => {
    form.get(route('submission.track'), {
        preserveState: true,
        preserveScroll: true,
    });
};

const formatDate = (dateString) => {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
};

// Static Progress Steps
const steps = [
    { label: 'Pengajuan Diterima', status: 'completed' },
    { label: 'Verifikasi Admin', status: 'current' },
    { label: 'Harmonisasi Legal', status: 'upcoming' },
    { label: 'Tanda Tangan', status: 'upcoming' },
    { label: 'Terbit & Selesai', status: 'upcoming' },
];

</script>

<template>

    <Head title="Lacak Pengajuan Produk Hukum" />
    <GuestLayout>
        <div class="min-h-screen py-10 px-4 md:px-6" style="background-color: var(--color-bg-secondary);">
            <div class="max-w-6xl mx-auto">
                <!-- Breadcrumb & Header -->
                <div class="border-b py-8 mb-8"
                    style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav class="flex text-sm mb-4" style="color: var(--color-text-muted);">
                            <Link href="/" class="hover:text-[var(--color-accent-hover)] transition">Beranda</Link>
                            <span class="mx-2" style="color: var(--color-border-dark);">/</span>
                            <span class="font-medium" style="color: var(--color-text-primary);">Lacak Pengajuan Produk
                                Hukum</span>
                        </nav>
                        <h1 class="text-3xl font-extrabold" style="color: var(--color-primary);">Lacak Pengajuan Produk
                            Hukum
                        </h1>
                    </div>
                </div>

                <!-- Search Section -->
                <div class="rounded-xl border shadow-sm overflow-hidden mb-6"
                    style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                    <div class="border-l-4 p-6" style="border-color: var(--color-accent);">
                        <h2 class="text-xl font-bold mb-1" style="color: var(--color-text-primary);">Masukkan Nomor
                            Tracking</h2>
                        <p class="text-sm" style="color: var(--color-text-secondary);">Cek status pengajuan produk hukum
                            Anda dengan nomor tracking yang diberikan saat pengajuan.</p>
                    </div>
                    <div class="px-6 pb-8">
                        <form @submit.prevent="submit" class="max-w-2xl">
                            <div class="flex flex-col sm:flex-row gap-4">
                                <div class="flex-grow">
                                    <input v-model="form.tracking_code" type="text"
                                        placeholder="Contoh: REG-20240101-ABCD"
                                        class="w-full rounded-lg border-none shadow-md py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        style="background-color: var(--color-bg-input); color: var(--color-text-primary);"
                                        required>
                                </div>
                                <button type="submit" :disabled="form.processing"
                                    class="px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white flex items-center justify-center gap-2"
                                    style="background-color: var(--color-primary);">
                                    <svg v-if="form.processing" class="animate-spin h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    {{ form.processing ? 'Mencari...' : 'Lacak Sekarang' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Result Section -->
                <transition enter-active-class="transition ease-out duration-300"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-200"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <div v-if="searchPerformed" class="space-y-6">

                        <!-- Not Found -->
                        <div v-if="!submission" class="rounded-xl border shadow-sm overflow-hidden"
                            style="background-color: var(--color-bg-card); border-color: var(--color-error);">
                            <div class="border-l-4 p-6" style="border-color: var(--color-error);">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 rounded-full" style="background-color: rgba(239, 68, 68, 0.1);">
                                        <svg class="w-6 h-6" style="color: var(--color-error);" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-lg" style="color: var(--color-error);">Data Tidak
                                            Ditemukan</h3>
                                        <p class="text-sm mt-1" style="color: var(--color-text-secondary);">
                                            Data pengajuan dengan nomor tracking <strong
                                                style="color: var(--color-text-primary);">{{ filters.tracking_code
                                                }}</strong> tidak ditemukan. Silakan periksa kembali nomor tracking
                                            Anda.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Found -->
                        <div v-else class="rounded-xl border shadow-sm overflow-hidden"
                            style="background-color: var(--color-bg-card); border-color: var(--color-border-light);">
                            <!-- Header -->
                            <div class="border-l-4 p-6" style="border-color: var(--color-success);">
                                <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <div>
                                        <h3 class="text-xl font-bold" style="color: var(--color-text-primary);">
                                            Informasi
                                            Pengajuan</h3>
                                        <p class="text-sm mt-1" style="color: var(--color-text-secondary);">Nomor
                                            Tracking: <span class="font-mono font-bold"
                                                style="color: var(--color-primary);">{{
                                                    submission.tracking_code }}</span></p>
                                    </div>
                                    <div class="mt-4 md:mt-0">
                                        <span
                                            class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold"
                                            :style="{
                                                backgroundColor: submission.status === 'pending' ? 'var(--color-accent-light)' : submission.status === 'approved' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                                color: submission.status === 'pending' ? 'var(--color-accent-dark)' : submission.status === 'approved' ? 'var(--color-success)' : 'var(--color-error)'
                                            }">
                                            {{ submission.status ? submission.status.toUpperCase() : 'UNKNOWN' }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- Details -->
                            <div class="px-6 pb-6 pt-4">
                                <div class="rounded-xl p-6 border"
                                    style="background-color: var(--color-bg-tertiary); border-color: var(--color-border-light);">
                                    <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                                        <div class="col-span-2">
                                            <dt class="font-medium" style="color: var(--color-text-muted);">Judul
                                                Pengajuan</dt>
                                            <dd class="mt-1 font-bold text-base"
                                                style="color: var(--color-text-primary);">{{
                                                    submission.title }}</dd>
                                        </div>
                                        <div>
                                            <dt class="font-medium" style="color: var(--color-text-muted);">Tanggal
                                                Diajukan</dt>
                                            <dd class="mt-1 font-bold" style="color: var(--color-text-primary);">{{
                                                formatDate(submission.created_at) }}</dd>
                                        </div>
                                        <div>
                                            <dt class="font-medium" style="color: var(--color-text-muted);">Jenis Produk
                                                Hukum</dt>
                                            <dd class="mt-1 font-bold" style="color: var(--color-text-primary);">{{
                                                submission.type ?
                                                    submission.type.name : '-' }}</dd>
                                        </div>
                                        <div>
                                            <dt class="font-medium" style="color: var(--color-text-muted);">Unit Kerja
                                            </dt>
                                            <dd class="mt-1 font-bold" style="color: var(--color-text-primary);">{{
                                                submission.unit_kerja }}</dd>
                                        </div>
                                        <div>
                                            <dt class="font-medium" style="color: var(--color-text-muted);">No. Nota
                                                Dinas</dt>
                                            <dd class="mt-1 font-bold" style="color: var(--color-text-primary);">{{
                                                submission.nota_dinas_number }}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            <!-- Progress Timeline -->
                            <div class="px-6 pb-6">
                                <h4 class="text-lg font-bold mb-6" style="color: var(--color-text-primary);">Progress
                                    Pengajuan</h4>

                                <div class="relative">
                                    <!-- Line (Desktop) -->
                                    <div class="absolute left-0 top-5 w-full h-1 hidden md:block"
                                        style="background-color: var(--color-border);"></div>

                                    <div
                                        class="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 space-y-6 md:space-y-0">
                                        <div v-for="(step, index) in steps" :key="index"
                                            class="flex flex-col items-center w-full md:w-auto text-center group">
                                            <!-- Circle -->
                                            <div class="w-10 h-10 rounded-full flex items-center justify-center border-4 transition-colors duration-200 mb-2"
                                                :style="{
                                                    backgroundColor: index === 0 ? 'var(--color-primary)' : 'var(--color-bg-card)',
                                                    borderColor: index === 0 ? 'var(--color-accent-light)' : 'var(--color-border)',
                                                    color: index === 0 ? 'white' : 'var(--color-text-muted)'
                                                }">
                                                <svg v-if="index === 0" class="w-5 h-5" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span v-else class="text-sm font-bold">{{ index + 1 }}</span>
                                            </div>
                                            <!-- Label -->
                                            <span class="text-xs md:text-sm font-medium transition-colors duration-200"
                                                :style="{ color: index === 0 ? 'var(--color-primary)' : 'var(--color-text-secondary)' }">
                                                {{ step.label }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Actions -->
                            <div class="p-6 border-t flex justify-end"
                                style="background-color: var(--color-bg-tertiary); border-color: var(--color-border-light);">
                                <button type="button"
                                    class="inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white"
                                    style="background-color: var(--color-primary);">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    Download Bukti Tanda Terima
                                </button>
                            </div>

                        </div>
                    </div>
                </transition>

            </div>
        </div>
    </GuestLayout>
</template>
