<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ref } from 'vue';
import { route } from 'ziggy-js';
import SeoHead from '@/Components/SeoHead.vue';

const props = defineProps({
  links: Array
});

const form = useForm({
  category: 'Individu',
  name: '',
  address: '',
  identity_number: '',
  phone: '',
  email: '',
  identity_file: null,
});

const submit = () => {
  form.post(route('contact.store'), {
    preserveScroll: true,
    onSuccess: () => form.reset(),
  });
};

const fileInput = ref(null);

const handleFileChange = (e) => {
  form.identity_file = e.target.files[0];
};

const successMessage = ref(usePage().props.flash.success);
</script>

<template>

  <Head title="Kontak Kami" />

  <GuestLayout>
    <!-- Breadcrumb & Header -->
    <div class="bg-white border-b border-gray-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex text-sm text-gray-500 mb-4">
          <Link href="/" class="hover:text-yellow-600 transition">Beranda</Link>
          <span class="mx-2 text-gray-300">/</span>
          <span class="text-[#0F213A] font-medium">Kontak Kami</span>
        </nav>
        <h1 class="text-3xl font-extrabold text-[#0F213A]">Kontak Kami</h1>
      </div>
    </div>

    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <div class="lg:w-2/3 space-y-8">

            <div v-if="$page.props.flash.success"
              class="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-3">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ $page.props.flash.success }}
            </div>

            <!-- Form Kontak -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 class="text-2xl font-bold text-[#0F213A] mb-6">Formulir Kontak</h2>
              <p class="text-gray-600 mb-8">
                Silakan isi formulir di bawah ini untuk menghubungi kami. Kami akan segera merespon pesan
                anda.
              </p>

              <form @submit.prevent="submit" class="space-y-6">
                <!-- Kategori -->
                <div>
                  <label for="category" class="block text-sm font-bold text-gray-700 mb-2">
                    Kategori Pengirim <span class="text-red-500">*</span>
                  </label>
                  <select id="category" v-model="form.category"
                    class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1">
                    <option value="Individu">Individu</option>
                    <option value="Kelompok">Kelompok</option>
                    <option value="LSM/NGO">LSM / NGO</option>
                    <option value="Instansi Pemerintah">Instansi Pemerintah</option>
                    <option value="Lembaga Pendidikan">Lembaga Pendidikan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  <div v-if="form.errors.category" class="text-red-500 text-sm mt-1">{{
                    form.errors.category }}</div>
                </div>

                <!-- Atas Nama -->
                <div>
                  <label for="name" class="block text-sm font-bold text-gray-700 mb-2">
                    Atas Nama <span class="text-red-500">*</span>
                  </label>
                  <input type="text" id="name" v-model="form.name" placeholder="Nama Lengkap / Nama Instansi"
                    class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1" />
                  <div v-if="form.errors.name" class="text-red-500 text-sm mt-1">{{ form.errors.name
                    }}</div>
                </div>

                <!-- Alamat -->
                <div>
                  <label for="address" class="block text-sm font-bold text-gray-700 mb-2">
                    Alamat Lengkap <span class="text-red-500">*</span>
                  </label>
                  <textarea id="address" v-model="form.address" rows="3" placeholder="Masukkan alamat lengkap..."
                    class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1"></textarea>
                  <div v-if="form.errors.address" class="text-red-500 text-sm mt-1">{{
                    form.errors.address }}</div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Nomor Identitas -->
                  <div>
                    <label for="identity_number" class="block text-sm font-bold text-gray-700 mb-2">
                      Nomor Identitas (KTP/SIM/Paspor) <span class="text-red-500">*</span>
                    </label>
                    <input type="text" id="identity_number" v-model="form.identity_number" placeholder="Contoh: 3201..."
                      class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1" />
                    <div v-if="form.errors.identity_number" class="text-red-500 text-sm mt-1">{{
                      form.errors.identity_number }}</div>
                  </div>

                  <!-- Upload Identitas -->
                  <div>
                    <label for="current_identity_file" class="block text-sm font-bold text-gray-700 mb-2">
                      Upload Identitas <span class="text-red-500">*</span>
                    </label>
                    <input type="file" id="current_identity_file" @change="handleFileChange" accept="image/*,.pdf"
                      ref="fileInput"
                      class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100" />
                    <p class="text-xs text-gray-400 mt-1">Format: JPG, PNG, PDF. Maks 2MB.</p>
                    <div v-if="form.errors.identity_file" class="text-red-500 text-sm mt-1">{{
                      form.errors.identity_file }}</div>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Whatsapp -->
                  <div>
                    <label for="phone" class="block text-sm font-bold text-gray-700 mb-2">
                      Nomor Whatsapp / Telepon <span class="text-red-500">*</span>
                    </label>
                    <input type="text" id="phone" v-model="form.phone" placeholder="08..."
                      class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1" />
                    <div v-if="form.errors.phone" class="text-red-500 text-sm mt-1">{{
                      form.errors.phone }}</div>
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="email" class="block text-sm font-bold text-gray-700 mb-2">
                      Email <span class="text-red-500">*</span>
                    </label>
                    <input type="email" id="email" v-model="form.email" placeholder="alamat@email.com"
                      class="w-full appearance-none rounded-lg border px-4 py-2.5 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1" />
                    <div v-if="form.errors.email" class="text-red-500 text-sm mt-1">{{
                      form.errors.email }}</div>
                  </div>
                </div>

                <div class="pt-4">
                  <button type="submit" :disabled="form.processing"
                    class="w-full bg-[#0F213A] text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl disabled:opacity-50 flex justify-center items-center gap-2">
                    <svg v-if="form.processing" class="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                    {{ form.processing ? 'Mengirim...' : 'Kirim Pesan' }}
                  </button>
                </div>
              </form>
            </div>

          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3 space-y-8">
            <!-- Informasi Kontak Widget -->
            <div class="bg-[#0F213A] text-white p-8 rounded-2xl shadow-lg">
              <h3 class="font-bold text-xl mb-6 flex items-center gap-2">
                <svg class="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kantor JDIH
              </h3>

              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-yellow-400 mb-1 text-sm">Alamat:</h4>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    Gedung Rektorat Lt. 1<br>
                    UIN Sunan Gunung Djati Bandung<br>
                    Jalan A.H. Nasution No. 105,<br>
                    Cipadung, Cibiru, Bandung 40614
                  </p>
                </div>

                <div>
                  <h4 class="font-bold text-yellow-400 mb-1 text-sm">Kontak:</h4>
                  <ul class="space-y-2 text-sm text-gray-300">
                    <li class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +62 22 7800525
                    </li>
                    <li class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      jdih@uinsgd.ac.id
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-bold text-yellow-400 mb-3 text-sm">Sosial Media:</h4>
                  <div class="flex gap-4">
                    <a href="#"
                      class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M24 11.779c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.928 4.359 10.831 10.125 11.739v-8.307h-3.047v-3.432h3.047v-2.626c0-3.003 1.792-4.664 4.533-4.664 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.229h3.328l-.532 3.432h-2.796v8.307c5.766-.908 10.125-5.811 10.125-11.739z" />
                      </svg>
                    </a>
                    <a href="#"
                      class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    </a>
                    <a href="#"
                      class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#0F213A] transition text-white">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tautan Terkait Widget (Reusing logic) -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6" v-if="links && links.length > 0">
              <h3 class="font-bold text-[#0F213A] mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Tautan Terkait
              </h3>
              <div class="space-y-3">
                <a v-for="link in links" :key="link.id" :href="link.url" target="_blank"
                  class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition group">
                  <div class="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                    <img v-if="link.logo_path" :src="route('links.logo', link.id)" class="w-full h-full object-cover"
                      :alt="link.title">
                    <svg v-else class="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-tight">
                    {{ link.title }}
                  </span>
                  <svg class="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
