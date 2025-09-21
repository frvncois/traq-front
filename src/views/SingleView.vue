<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '@/stores/content'

import SingleContent from '@/components/single/SingleContent.vue'
import SingleHero from '@/components/single/SingleHero.vue'
import SingleEvents from '@/components/single/SingleEvents.vue'

const route = useRoute()
const { documentId } = route.params

const store = useContentStore()
const event = ref(null)

onMounted(async () => {
  event.value = await store.fetchEventByDocumentId(documentId)

  if (!store.events.length) {
    await store.fetchEvents()
  }
})
</script>

<template>
  <section v-if="event" class="is-orange">
    <SingleHero :event="event" />
    <SingleContent :event="event" />
  </section>
    <SingleEvents :events="store.events.filter(e => e.documentId !== documentId)" />
</template>
