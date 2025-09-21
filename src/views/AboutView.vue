<script setup>
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/content'

import AboutContent from '@/components/about/AboutContent.vue'
import AboutHero from '@/components/about/AboutHero.vue'

const store = useContentStore()

onMounted(() => {
  if (!store.about) {
    store.fetchAbout()
  }
})
</script>

<template>
  <AboutHero />
  <AboutContent :about="store.about" />
</template>
