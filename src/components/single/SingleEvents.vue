<script setup>
import { RouterLink } from 'vue-router'
import { formatDate } from '@/services/time'

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="is-white">
    <div class="events is-wrap">
      <h1>Programmation</h1>
      <div class="events is-grid">
        <RouterLink
          v-for="event in events.slice(0, 2)"
          :key="event.documentId"
          :to="`/events/${event.documentId}`"
          class="is-item">
          <div class="is-cover">
            <img
              :src="`${event.eventCover?.url}`"
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


<style scoped>
.events {
  &.is-wrap {
    position: relative;
    padding: var(--space-small) var(--space-width) var(--space-width) var(--space-width);
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    margin-top: -70vh;
  }
  &.is-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-base);
    position: relative;
    > .is-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-small);
      > .is-cover {
        aspect-ratio: 1;
        overflow: hidden;
        position: relative;
        > img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      > .is-content {
        display: flex;
        flex-direction: column;
        > h1, h2 {
          font-size: var(--font-md);
        }
      }
      &:hover .is-content {
        color: var(--is-orange);
      }
    }
  }
}
</style>