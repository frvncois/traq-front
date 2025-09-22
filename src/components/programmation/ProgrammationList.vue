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
  <div class="events is-grid">
    <RouterLink
      v-for="event in events"
      :key="event.documentId"
      :to="`/events/${event.documentId}`"
      class="is-item">

        <div class="events is-cover">
          <img
            v-if="event.eventCover?.url"
            :src="`${event.eventCover.url}`"
            :alt="event.eventTitle"
          />
        </div>
        <div class="events is-header">
          <h3>{{ event.eventGenre }}</h3> / <h3>{{ event.eventOrigin }}</h3>
        </div>
        <div class="events is-details">
          <h1>{{ event.eventTitle }}</h1>
          <h2>{{ formatDate(event.eventDate) }}</h2>
        </div>
  </RouterLink>
</div>
</template>

<style scoped>
.events {
  &.is-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: var(--space-base);
    padding: var(--space-base) var(--space-width) var(--space-width);
    position: relative;
    > .is-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-base);
      > .is-cover {
        height: 50vh;
        overflow: hidden;
        position: relative;
        clip-path: var(--mask);
        > img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      > .is-details {
        > h1 {
          font-size: var(--font-md);
        }
        > h2 {
          font-size: var(--font-md);
        }
      }
      > .is-header {
        display: flex;
        gap: var(--space-small);
        align-items: center;
        > h3 {
          font-size: var(--font-rg);
        }
      }
      &:hover > .is-details {
        color: var(--is-orange);
      }
    }
  }
}
</style>