<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from "vue"
import { formatDate, formatTime } from "@/services/time"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  event: {
    type: Object,
    default: () => null,
  },
})

const titleElement = ref(null)
const ticketElement = ref(null)
const subtitleElement = ref(null)
const sectionElement = ref(null)
const ctaElement = ref(null)

const parsedLinks = computed(() => {
  if (!props.event?.eventLinks) return ""
  return props.event.eventLinks
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n/g, "<br>")
})

let ctx = null

onMounted(() => {
  setTimeout(() => {
    if (!titleElement.value || !ticketElement.value || !subtitleElement.value || !sectionElement.value || !ctaElement.value) {
      return
    }

    ctx = gsap.context(() => {
      const titleHeight = titleElement.value.offsetHeight

      ScrollTrigger.create({
        trigger: titleElement.value,
        start: "top top",
        endTrigger: sectionElement.value,
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      })

      ScrollTrigger.create({
        trigger: ticketElement.value,
        start: "top top",
        endTrigger: sectionElement.value,
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      })

      ScrollTrigger.create({
        trigger: subtitleElement.value,
        start: "top-=" + titleHeight + " top",
        endTrigger: sectionElement.value,
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      })

      ScrollTrigger.create({
        trigger: ctaElement.value,
        start: "top top",
        endTrigger: sectionElement.value,
        end: "bottom top",
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
  <section ref="sectionElement" class="is-orange" v-if="event">

    <div class="event is-wrap">

      <div class="event is-content">
        <div ref="titleElement" class="event is-title">
          <h1>{{ event.eventTitle }}</h1>
          <h2>{{ formatDate(event.eventDate) }}</h2>
          <h2>{{ formatTime(event.eventDate) }}</h2>
        </div>
        <div class="event is-location">
          <p>LOCALISATION</p>
          <p>{{ event.eventVenue }}</p>
          <p>{{ event.eventStreet }}</p>
          <p>{{ event.eventCity }}</p>
        </div>
      </div>

      <div class="event is-content">
        <div ref="ticketElement" class="event is-ticket">
          <h1>Billeterie</h1>
        </div>
        <div class="event is-cover"></div>
      </div>

      <div class="event is-content">
        <div ref="subtitleElement" class="event is-subtitle">
            <h2>{{ event.eventSubtitle }}</h2>
        </div>
          <ul class="event is-details">
            <li>
              <h3>En partenaire avec</h3>
              {{ event.eventPartners }}
            </li>
            <li>
              <h3>Artistes</h3>
              {{ event.eventArtists }}
            </li>
            <li>
              <h3>Liens</h3>
              <div v-html="parsedLinks"></div>
            </li>
        </ul>
      </div>

      <div class="event is-content">
        <p class="event is-about" v-html="event.eventContent"></p>
      </div>

    </div>

    <div ref="ctaElement" class="event is-cta">
      <span>{{ event.eventGenre }}</span>
      <div class="is-toggle"></div>
    </div>

  </section>
</template>

<style scoped>
.event {
  &.is-wrap {
    position: relative;
    padding: 0 var(--space-width) var(--space-base) var(--space-width);
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    flex-direction: row;
    gap: var(--space-base);
    align-items: stretch;
    > .is-content {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-top: var(--space-small);
      & .is-title {
        background-color: var(--is-orange);
        z-index: 3;
        position: relative;
      }
      & .is-subtitle {
        width: 100%;
        background-color: var(--is-orange);
        > h2 {
        font-size: var(--font-lg);
        font-family: 'body';
        text-transform: unset;
        max-width: 18ch;
        }
      }
      > .is-cover {
        background-color: var(--is-fushia);
        clip-path: var(--mask);
        aspect-ratio: 9 / 16;
        flex-shrink: 0;
        margin-top: var(--space-small);
        margin-bottom: var(--space-small);
      }
      & .is-details {
        display: flex;
        flex-direction: column;
        gap: var(--space-base);
        margin-left: 50%;
        justify-content: flex-end;
        margin-top: auto;
      }
      & .is-ticket {
        z-index: 3;
        background-color: var(--is-orange);
      }
      & h1, h2 {
        z-index: 2;
        font-size: var(--font-big);
      }
      & p, li {
        font-family: 'accent';
      }
    }
    > .is-genre {
      position: absolute;
      right: 0;
    }
    &:last-child .is-items {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &.is-mobile {
      display: none;
    }
  }
  &.is-cta {
        position: absolute;
        top: 0;
        right: calc(var(--space-small) * 2.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        height: 100%;
          span {
            padding-top: var(--space-small);
            font-family: 'Accent';
            text-transform: uppercase;
            font-size: var(--font-md);
            writing-mode: vertical-rl;
            text-orientation: mixed;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            padding-bottom: 0;
          }
      .is-toggle {
        clip-path: var(--mask);
        background-color: var(--is-black);
        width: 1.5em;
        height: 3em;
        position: relative;
        bottom: 0;
        margin-top: var(--space-xs);
      }
  }
}

@media screen and (max-width: 768px) {
  .event {
    &.is-wrap {
      &.is-desktop {
        display: none;
      }
      &.is-mobile {
        display: flex;
        flex-direction: column;
      }
      > .is-content {
        gap: var(--space-width);
        > .is-sticky {
          position: relative;
        }
        > .is-ticket {
          position: relative;
        }
          > .is-details {
            margin-left: unset;
            padding-bottom: unset;
          
        }
      }
    }
  }
}
</style>