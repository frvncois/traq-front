<script setup>
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/content'

import EventGrid from '@/components/EventGrid.vue'
import EventNext from '@/components/EventNext.vue'
import HomeDonation from '@/components/HomeDonation.vue'
import HomeHero from '@/components/HomeHero.vue'
import HomeNewsletter from '@/components/HomeNewsletter.vue'

const store = useContentStore()

onMounted(() => {
  if (!store.home) store.fetchHome()
  if (!store.events.length) store.fetchEvents()
})
</script>

<template>
  <main>
    <HomeHero :home="store.home" />
    <EventNext :events="store.events" />
    <EventGrid :events="store.events" />
    <HomeDonation :home="store.home" />
    <HomeNewsletter :home="store.home" />
  </main>
</template>

