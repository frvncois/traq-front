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
  return new Date(dateString).toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>


<template>
  <div class="event is-list">
    <div
      v-for="event in events"
      :key="event.documentId"
      class="event is-item"
    >
        <div class="event is-cover">
          <img
            v-if="event.eventCover?.url"
            :src="`http://localhost:1337${event.eventCover.url}`"
            :alt="event.eventTitle"
          />
        </div>
        <div class="event is-header">
          <h3>{{ event.eventGenre }}</h3><h3>{{ event.eventOrigin }}</h3>
        </div>
        <div class="event is-details">
          <h1>{{ event.eventTitle }}</h1>
          <h2>{{ formatDate(event.eventDate) }}</h2>
        </div>
    </div>
  </div>
</template>
