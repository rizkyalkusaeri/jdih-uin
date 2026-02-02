<script setup>
import { Head, useForm, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { route } from 'ziggy-js';

import { computed } from 'vue';

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
        only: ['submission', 'searchPerformed', 'filters'],
    });
};

const formatDate = (dateString) => {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
};

const statusOrder = [
    'pending',
    'admin_verification',
    'legal_harmonization',
    'signing',
    'completed'
];

const getStatusLabel = (statusKey) => {
    const options = {
        'pending': 'Pengajuan Diterima',
        'admin_verification': 'Verifikasi Admin',
        'legal_harmonization': 'Harmonisasi Legal',
        'signing': 'Tanda Tangan',
        'completed': 'Terbit & Selesai',
        'rejected': 'Ditolak'
    };
    return options[statusKey] || statusKey;
};

const progressSteps = computed(() => {
    if (!props.submission) return [];

    const currentStatus = props.submission.status;
    const currentIndex = statusOrder.indexOf(currentStatus);
    const isRejected = currentStatus === 'rejected';

    return [
        { label: 'Pengajuan Diterima', value: 'pending' },
        { label: 'Verifikasi Admin', value: 'admin_verification' },
        { label: 'Harmonisasi Legal', value: 'legal_harmonization' },
        { label: 'Tanda Tangan', value: 'signing' },
        { label: 'Terbit & Selesai', value: 'completed' },
    ].map((step, index) => {
        let status = 'upcoming';

        if (isRejected) {
            status = 'rejected'; // You might want to handle this specifically
        } else if (currentIndex === -1) {
            status = 'upcoming';
        } else if (index < currentIndex) {
            status = 'completed';
        } else if (index === currentIndex) {
            status = 'current';
        }

        return {
            ...step,
            status
        };
    });
});

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
                                <div class="grow">
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

                            <!-- History Timeline -->
                            <div v-if="submission.status_histories && submission.status_histories.length > 0"
                                class="px-6 pb-6 border-t pt-6" style="border-color: var(--color-border-light);">
                                <h4 class="text-lg font-bold mb-6" style="color: var(--color-text-primary);">Riwayat
                                    Status</h4>
                                <div class="relative pl-4 ml-2 border-l-2 space-y-8"
                                    style="border-color: var(--color-border);">
                                    <div v-for="history in submission.status_histories" :key="history.id"
                                        class="relative pl-6">

                                        <!-- Dot -->
                                        <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-white"
                                            style="border-color: var(--color-primary);">
                                            <div class="w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                style="background-color: var(--color-primary);"></div>
                                        </div>

                                        <!-- Content -->
                                        <div>
                                            <p class="font-bold text-base" style="color: var(--color-text-primary);">
                                                {{ getStatusLabel(history.to_status) }}
                                            </p>
                                            <p class="text-xs mt-1 mb-2" style="color: var(--color-text-muted);">
                                                {{ formatDate(history.created_at) }}
                                                <span v-if="history.user" class="mx-1">•</span>
                                                <span v-if="history.user">Oleh: {{ history.user.name }}</span>
                                            </p>

                                            <div v-if="history.notes"
                                                class="text-sm p-3 rounded-lg border inline-block max-w-full"
                                                style="background-color: var(--color-bg-tertiary); border-color: var(--color-border-light); color: var(--color-text-secondary);">
                                                {{ history.notes }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Actions -->
                            <div class="p-6 border-t flex flex-wrap justify-end gap-3"
                                style="background-color: var(--color-bg-tertiary); border-color: var(--color-border-light);">

                                <!-- Link to Published Legal Product -->
                                <Link v-if="submission.status === 'completed' && submission.legal_product"
                                    :href="'/produk-hukum/' + submission.legal_product.slug"
                                    class="inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white"
                                    style="background-color: var(--color-success);">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                        </path>
                                    </svg>
                                    Lihat Produk Hukum
                                </Link>

                                <!-- <button type="button"
                                    class="inline-flex items-center px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-90 transition text-white"
                                    style="background-color: var(--color-primary);">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    Download Bukti Tanda Terima
                                </button> -->
                            </div>

                        </div>
                    </div>
                </transition>

            </div>
        </div>
    </GuestLayout>
</template>
