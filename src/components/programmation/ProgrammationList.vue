<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RouterLink } from 'vue-router'
import { formatDate } from '@/services/time'
import { ref, computed, onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
})

const sortedEvents = computed(() => {
  return [...props.events].sort((a, b) => {
    const dateA = new Date(a.eventDate)
    const dateB = new Date(b.eventDate)
    return dateA - dateB
  })
})

const sectionFixed = ref(null)
let st = null

onMounted(() => {
  setTimeout(() => {
    if (!sectionFixed.value) return

    st = ScrollTrigger.create({
      trigger: sectionFixed.value,
      start: 'bottom bottom',
      endTrigger: 'body',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      pinnedContainer: sectionFixed.value,
    })
  }, 500)
})

onUnmounted(() => {
  if (st) st.kill()
})
</script>


<template>
  <section class="is-white">
    <div ref="sectionFixed" class="events is-grid">
      <RouterLink
        v-for="event in sortedEvents"
        :key="event.documentId"
        :to="`/events/${event.documentId}`"
        class="is-item">

          <div class="events is-cover">
                <div class="events is-mask"></div>
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
  </section>
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
        overflow: hidden;
        position: relative;
        aspect-ratio: 9 / 16;
        flex-shrink: 0;
          > .is-mask {
            background-color: var(--is-white);
            width: 100%;
            position: absolute;
            z-index: 2;
            bottom: -1px;
            aspect-ratio: 1;
            clip-path: var(--cover);
          }
        > img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          z-index: 1;
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

@media screen and (max-width: 768px) {
.events {
  &.is-grid {
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    padding-top: var(--space-small);
    padding-bottom: var(--space-large);
    > .is-item {
      > .is-header {
        h3 {
          font-size: var(--font-rg);
        }
      }
      .is-cover {
        min-height: 20em;
        aspect-ratio: unset;
        margin-bottom: 2px;
      }
    }
  }
}
}
</style>