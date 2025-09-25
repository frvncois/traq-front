<script setup>
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/content'

import HomeHero from '@/components/home/HomeHero.vue'
import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeUpcoming from '@/components/home/HomeUpcoming.vue'
import HomeEvents from '@/components/home/HomeEvents.vue'
import HomeDonation from '@/components/home/HomeDonation.vue'
import HomeNewsletter from '@/components/home/HomeNewsletter.vue'

const store = useContentStore()

onMounted(() => {
  if (!store.home) store.fetchHome()
  if (!store.events.length) store.fetchEvents()
})
</script>

<template>
  <main>
    <HomeHero :home="store.home" />
    <HomeIntro :home="store.home" />
    <HomeUpcoming :events="store.events" />
    <HomeEvents :events="store.events" />
    <HomeDonation :home="store.home" />
    <HomeNewsletter :home="store.home" />
  </main>
</template>

