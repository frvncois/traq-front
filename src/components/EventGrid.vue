<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <section class="is-white">
    <div class="event is-wrap">
      <h1>Programmation</h1>
        <div class="event is-cta">
          <RouterLink to="/events">
            <span>Découvrir</span>
            <div class="is-toggle"></div>
          </RouterLink>
        </div>
      <div class="event is-grid">
        <RouterLink
          v-for="event in events.slice(0, 2)"
          :key="event.documentId"
          :to="`/events/${event.documentId}`"
          class="is-item">
          <div class="is-cover">
            <img
              :src="`http://localhost:1337${event.eventCover?.url}`"
              :alt="event.eventTitle"
            />
          </div>
          <div class="is-content">
            <h1>{{ event.eventTitle }}</h1>
            <h2>{{ formatDate(event.eventDate) }}</h2>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
