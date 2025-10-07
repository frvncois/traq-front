<script setup>
import { RouterLink } from 'vue-router'
import { formatDate } from '@/services/time'


const props = defineProps({
  events: { type: Object, default: () => null }
})


</script>

<template>
  <section class="is-white">
    <div class="events is-wrap">
      <h1><RouterLink to="/programmation">Programmation</RouterLink></h1>
      <RouterLink to="/programmation" class="events is-cta">
        <span>Découvrir</span>
        <div class="is-toggle"></div>
      </RouterLink>

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
      > h1 {
        font-size: var(--font-md);
        line-height: 0.75;
        &:hover {
          color: var(--is-orange);
        }
      }
      > .is-grid {
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
      .is-cta {
        position: absolute;
        right: calc(var(--space-small) * 2.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        height: 100%;

        span {
          text-transform: uppercase;
          font-family: 'Accent';
          font-size: var(--font-md);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          max-height: 0px;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          padding-bottom: 0;
          transition: max-height 0.75s cubic-bezier(0.85, 0, 0.15, 1), padding-bottom 0.75s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .is-toggle {
          clip-path: var(--mask);
          background-color: var(--is-black);
          width: 1.5em;
          height: 3em;
          position: relative;
          bottom: 0;
          }
      }
    }
    &:hover .is-cta span {
    max-height: 500px;
    padding-bottom: var(--space-xs);
  }
}
@media (max-width: 768px) {
  .events {
    &.is-wrap {
      > .is-grid {
        display: flex;
        flex-direction: column;
        gap: var(--space-small);
        > .is-content {
          flex-direction: column;
          gap: 0;
        }
      }
      .is-cta {
        padding-top: 0.75em;
        top: -0.35em;
        right: 0.425em;
        .is-toggle {
          width: 0.9em;
          height: 1.75em;
        }
      }
    }
  }
}
</style>