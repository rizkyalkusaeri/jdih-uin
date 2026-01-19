<script setup>
import { Head } from '@inertiajs/vue3';

const props = defineProps({
  title: {
    type: String,
    default: 'JDIH UIN Sunan Gunung Djati'
  },
  description: {
    type: String,
    default: 'Jaringan Dokumentasi dan Informasi Hukum UIN Sunan Gunung Djati Bandung'
  },
  keywords: {
    type: String,
    default: 'JDIH, UIN SGD, Hukum, Peraturan, Bandung, Sunan Gunung Djati'
  },
  image: {
    type: String,
    default: '/images/jdih.png'
  },
  type: {
    type: String,
    default: 'website'
  },
  author: {
    type: String,
    default: 'UIN Sunan Gunung Djati Bandung'
  }
});
</script>

<template>

  <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
    <meta name="keywords" :content="keywords" />
    <meta name="author" :content="author" />

    <!-- Open Graph -->
    <meta property="og:title" :content="title" />
    <meta property="og:description" :content="description" />
    <meta property="og:image" :content="image" />
    <meta property="og:type" :content="type" />
    <meta property="og:site_name" content="JDIH UIN SGD" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" :content="title" />
    <meta name="twitter:description" :content="description" />
    <meta name="twitter:image" :content="image" />
  </Head>
</template>
