<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from '@/stores/content'

import EventContent from '@/components/EventContent.vue'
import EventCover from '@/components/EventCover.vue'
import EventGrid from '@/components/EventGrid.vue'

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
    <EventCover :event="event" />
    <EventContent :event="event" />
  </section>
    <EventGrid :events="store.events.filter(e => e.documentId !== documentId)" />
</template>
