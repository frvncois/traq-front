<script setup>
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/content'

import AboutContent from '@/components/AboutContent.vue'
import AboutHero from '@/components/AboutHero.vue'

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
