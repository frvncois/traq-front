<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { formatDate } from '@/services/time'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
})

const gridElement = ref(null)
const sectionElement = ref(null)
let ctx = null

onMounted(() => {
  setTimeout(() => {
    if (!gridElement.value || !sectionElement.value) return

    ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: gridElement.value,
        start: "bottom bottom",
        end: "max",
        pin: true,
        pinSpacing: false,
      })
    })
  }, 300)
})

onBeforeUnmount(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>


<template>
  <section ref="sectionElement" class="is-white">
    <div ref="gridElement" class="events is-grid">
      <RouterLink
        v-for="event in events"
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
            bottom: 0;
            aspect-ratio: 1;
            clip-path: var(--cover);
          }
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

@media screen and (max-width: 768px) {
.events {
  &.is-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-small);
    padding-bottom: var(--space-large);
    > .is-item {
      > .is-header {
        h3 {
          font-size: var(--font-rg);
        }
      }
    }
  }
}
}
</style>