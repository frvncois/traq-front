<script setup>
import { computed } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
})


const nextEvent = computed(() => {
  if (!props.events.length) return null

  const now = new Date()
  return [...props.events]
    .filter(e => new Date(e.eventDate) >= now)
    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))[0] 
    || props.events[0]
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

const formatTime = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}h${minutes}`
}
</script>

<template>
  <section class="is-white" v-if="nextEvent">
    <div class="event is-wrap">
      <h1>Prochain Événement</h1>
      <div class="event is-cta">
        <span>Découvrir</span>
        <div class="is-toggle"></div>
      </div>
      <div class="event is-next">
        <div class="event is-cover">
          <img
            :src="`http://localhost:1337${nextEvent.eventCover?.url}`"
            :alt="nextEvent.eventTitle"
          />
        </div>
        <div class="event is-content">
          <h2>{{ nextEvent.eventTitle }}</h2>
          <div>
            <span>{{ formatDate(nextEvent.eventDate) }}</span>
            <span>{{ formatTime(nextEvent.eventDate) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
