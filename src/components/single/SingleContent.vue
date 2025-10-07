<script setup>
import { onMounted, onUnmounted, ref } from "vue"
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

const titleFixed = ref(null)
const subtitleFixed = ref(null)
const ticketFixed = ref(null)
let st = null
let stSubtitle = null
let stTicket = null

onMounted(() => {
  setTimeout(() => {
    if (!titleFixed.value || !subtitleFixed.value) return
    const titleHeight = titleFixed.value.offsetHeight

    st = ScrollTrigger.create({
      trigger: titleFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })

    stSubtitle = ScrollTrigger.create({
      trigger: subtitleFixed.value,
      start: `top ${titleHeight}px`,
      end: 'max',
      pin: true,
      pinSpacing: false,
    })

    stTicket = ScrollTrigger.create({
      trigger: ticketFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })
  }, 500)
})


onUnmounted(() => {
  if (st) st.kill()
  if (stSubtitle) stSubtitle.kill()
  if (stTicket) stTicket.kill()
})
</script>

<template>
  <section ref="sectionElement" class="is-orange" v-if="event">

    <div class="event is-wrap">

      <div class="event is-content">
        <div ref="titleFixed" class="event is-title">
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
        <div ref="ticketFixed" class="event is-ticket">
          <h1>Billeterie</h1>
        </div>
        <div class="event is-cover"></div>
      </div>

      <div class="event is-content">
        <div ref="subtitleFixed" class="event is-subtitle">
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
      & .is-title {
        background-color: var(--is-orange);
        z-index: 10;
        position: relative;
        padding-top: var(--space-xs);
      }
      & .is-subtitle {
        width: 100%;
        background-color: var(--is-orange);
        padding-top: var(--space-xs);
        z-index: 10;
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
        padding: var(--space-xs) 0;
        > h1 {
          margin-left: -0.05em;
        }
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
  }

  &.is-cta {
    position: absolute;
    padding-top: var(--space-small);
    right: calc(var(--space-small) * 2.75);
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    height: 100%;
    gap: var(--space-small);

    span {
      text-transform: uppercase;
      font-family: 'Accent';
      font-size: var(--font-md);
      writing-mode: vertical-rl;
      text-orientation: mixed;
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

@media screen and (max-width: 768px) {
  .event {
    &.is-wrap {
        display: flex;
        flex-direction: column;
        > .is-content {
          gap: var(--space-width);
            & .is-details {
              margin-left: 0%;
            }
            & .is-about {
              padding-bottom: var(--space-width);
            }
        }

        }
        &.is-cta {
        right: 0.25em;
          span {
            padding-top: 0;
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
          width: 1em;
          height: 2em;
      }
  }
  }
}
</style>