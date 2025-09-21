<script setup>
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/content'

import ProgrammationHero from '@/components/programmation/ProgrammationHero.vue'
import ProgrammationList from '@/components/programmation/ProgrammationList.vue'

const store = useContentStore()

onMounted(() => {
  if (!store.events.length) {
    store.fetchEvents()
  }
})
</script>

<template>
  <ProgrammationHero />
  <ProgrammationList :events="store.events" />
</template>
