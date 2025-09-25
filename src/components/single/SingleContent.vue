<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { computed } from "vue"
import { formatDate, formatTime } from "@/services/time"

const props = defineProps({
  event: {
    type: Object,
    default: () => null,
  },
})

const parsedLinks = computed(() => {
  if (!props.event?.eventLinks) return ""
  return props.event.eventLinks
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n/g, "<br>")
})


gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const section = document.querySelector("section.is-orange")
  if (!section) return

  const stickyEl = section.querySelector(".event.is-sticky")
  if (stickyEl) stickyEl.style.zIndex = "2"
  const subtitleEl = section.querySelector(".event.is-subtitle")
  const ticketEl = section.querySelector(".event.is-ticket")
  const genreEl = section.querySelector(".event.is-cta")

  ;[stickyEl, subtitleEl, genreEl, ticketEl].forEach((el) => {
    if (!el) return
    ScrollTrigger.create({
      trigger: el,                  // each element controls its own pinning
      start: "top top",             // when element top hits viewport top
      endTrigger: section,          // release when section is done
      end: "bottom top",            // when section bottom hits viewport top
      pin: true,
      pinSpacing: false,
      markers: false,
    })
  })
})


onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((st) => st.kill())
})
</script>


<template>
  <section class="is-orange" v-if="event">
    <div class="event is-wrap">
        <div class="event is-cta">
            <span>{{ event.eventGenre }}</span>
            <div class="is-toggle"></div>
        </div>
      <div class="event is-content">
        <div class="event is-items">
          <div class="event is-sticky">
            <h1>{{ event.eventTitle }}</h1>
            <h2>{{ formatDate(event.eventDate) }}</h2>
            <h2>{{ formatTime(event.eventDate) }}</h2>
          </div>
          <div>
            <p>LOCALISATION</p>
            <p>{{ event.eventVenue }}</p>
            <p>{{ event.eventStreet }}</p>
            <p>{{ event.eventCity }}</p>
          </div>
        </div>
        <div class="event is-items">
          <h1 class="event is-ticket">Billeterie</h1>
          <div class="event is-cover"></div>
        </div>
      </div>
      <div class="event is-content">
        <div class="event is-items">
          <h2 class="event is-subtitle">{{ event.eventSubtitle }}</h2>
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
        <div class="event is-items">
         <p v-html="event.eventContent"></p>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
section {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.event {
  &.is-wrap {
    position: relative;
    padding: 0 var(--space-width) var(--space-width) var(--space-width);
    display: flex;
    flex-direction: column;
    gap: var(--space-base);
    > .is-content {
    display: grid;
    grid-template-columns: 1fr 0.75fr;
    gap: var(--space-width);

    > .is-items {
      display: flex;
      flex-direction: column;
      gap: var(--space-small);
      & h1, h2 {
        font-size: var(--font-big);
      }
      & .is-subtitle {
        font-size: var(--font-lg);
        text-transform: unset;
        font-family: 'body';
        max-width: 18ch;
      }
      > .is-cover {
        background-color: var(--is-fushia);
        flex: 1;
        clip-path: var(--mask);
        min-height: 50em;
      }
      > .is-details {
        display: flex;
        flex-direction: column;
        gap: var(--space-base);
        margin-left: 50%;
      }
      & .is-sticky {
        background-color: var(--is-orange);
        position: relative;
        z-index: 2;
        > h1 {
          padding-top: 0.75rem;
        }
      }
      & h1 {
        background-color: var(--is-orange);
        z-index: 2;
      }
      & { 
        font-family: 'Accent';
      }
    }
    &:last-child .is-items {  
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    }
    & .is-cta {
      position: absolute;
      right: calc(var(--space-base) * 2);
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
        width: 2em;
        height: 3.5em;
        position: relative;
        bottom: 0;
        margin-top: var(--space-base);
        }
    }
  }
}
</style>