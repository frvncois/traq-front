<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { formatDate, formatTime } from '@/services/time'

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
</script>

<template>
  <section class="is-white" v-if="nextEvent">
    <div class="event is-wrap">
      <h1>Prochain Événement</h1>
          <RouterLink to="/programmation" class="events is-cta">
            <span>Découvrir</span>
            <div class="is-toggle"></div>
          </RouterLink>
      <RouterLink :to="`/events/${nextEvent.documentId}`" class="event is-next">
        <div class="event is-cover">
          <img
            :src="`${nextEvent.eventCover?.url}`"
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
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.event {
  &.is-wrap {
    position: relative;
    padding: 0 var(--space-width) var(--space-width) var(--space-width);
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    > .is-next {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--space-small);
      > h1 {
        text-transform: uppercase;
      }
      > .is-cover {
        background-color: var(--is-fushia);
        height: 40em;
        overflow: hidden;
        position: relative;
        > img {
          object-fit: cover;
          position: absolute;
          height: 100%;
          width: 100%;
        }
      }
      > .is-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        & div {
          display: flex;
          flex-direction: column;
        }
        & h2, span {
          font-size: var(--font-big);
          text-transform: uppercase;
          line-height: 0.9;
          font-family: 'Accent';
        }
      }
      &:hover .is-content {
        color: var(--is-orange);
      }
    }
    > .is-cta {
      position: absolute;
      top: 0;
      right: calc(var(--space-base) * 2);
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      overflow: hidden;
      height: 100%;
      span {
      text-transform: uppercase;
      font-family: 'Accent';
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
        width: 2em;
        height: 3.5em;
        position: relative;
        bottom: 0;
        }
      }
    }
    &:hover .is-cta span {
    max-height: 500px;
    padding-bottom: var(--space-small);
  }
}
</style>