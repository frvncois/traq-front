<script setup>
import { computed, onMounted, ref } from "vue"
import { formatDate, formatTime } from "@/services/time"

const props = defineProps({
  event: {
    type: Object,
    default: () => null,
  },
})

const stickyElement = ref(null)
const subtitleElement = ref(null)
const wrapElement = ref(null)
const aboutElement = ref(null)
const detailsElement = ref(null)

const parsedLinks = computed(() => {
  if (!props.event?.eventLinks) return ""
  return props.event.eventLinks
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n/g, "<br>")
})

onMounted(() => {
  setTimeout(() => {
    if (aboutElement.value && detailsElement.value && subtitleElement.value) {
      const aboutHeight = aboutElement.value.offsetHeight
      const subtitleHeight = subtitleElement.value.offsetHeight
      const finalHeight = aboutHeight - subtitleHeight
      console.log('About height:', aboutHeight)
      console.log('Subtitle height:', subtitleHeight)
      console.log('Final height (about - subtitle):', finalHeight)
      detailsElement.value.style.minHeight = `${finalHeight}px`
      console.log('Applied min-height to details:', finalHeight + 'px')
    }

    if (stickyElement.value && subtitleElement.value) {
      const stickyHeight = stickyElement.value.offsetHeight
      const stickyMarginTop = parseInt(getComputedStyle(stickyElement.value).marginTop)
      subtitleElement.value.style.top = `${stickyHeight + stickyMarginTop}px`
    }

    if (wrapElement.value) {
      const originalHeight = wrapElement.value.style.height
      wrapElement.value.style.height = ''

      setTimeout(() => {
        const contentHeight = wrapElement.value.scrollHeight
        wrapElement.value.style.height = `${contentHeight + window.innerHeight}px`
        console.log('Wrap content height:', contentHeight)
        console.log('Applied wrap height:', contentHeight + window.innerHeight / 2 + 'px')
      }, 50)
    }
  }, 100)

  let resizeTimeout
  const handleResize = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      if (aboutElement.value) aboutElement.value.offsetHeight
      if (subtitleElement.value) subtitleElement.value.offsetHeight
      if (aboutElement.value && detailsElement.value && subtitleElement.value) {
        const aboutHeight = aboutElement.value.offsetHeight
        const subtitleHeight = subtitleElement.value.offsetHeight
        const finalHeight = Math.max(aboutHeight - subtitleHeight, 0)
        detailsElement.value.style.minHeight = `${finalHeight}px`
        console.log('Resize recalc - About:', aboutHeight, 'Subtitle:', subtitleHeight, 'Final:', finalHeight)
      }
    }, 500)
  }

  window.addEventListener('resize', handleResize, { passive: true })

  return () => {
    clearTimeout(resizeTimeout)
    window.removeEventListener('resize', handleResize)
  }
})
</script>


<template>
  <section class="is-orange" v-if="event">
    <div ref="wrapElement" class="event is-wrap">
      <div class="event is-content">
          <div ref="stickyElement" class="event is-sticky">
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

          <div class="event is-spacing">
            <div ref="subtitleElement" class="event is-subtitle">
              <h2>{{ event.eventSubtitle }}</h2>
            </div>
              <ul ref="detailsElement" class="event is-details">
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

      </div>
      <div class="event is-content">
        <div class="event is-ticket"><h1>Billeterie</h1></div>
        <div class="event is-cover"></div>
         <p ref="aboutElement" class="event is-about" v-html="event.eventContent"></p>
      </div>
      <div>
        <div class="event is-cta">
          <span>{{ event.eventGenre }}</span>
          <div class="is-toggle"></div>
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
    padding: 0 var(--space-width) 0 var(--space-width);
    display: flex;
    flex-direction: row;
    gap: var(--space-base);
    align-items: stretch;
    > .is-content {
      display: flex;
      flex-direction: column;

      position: relative;
      &:first-child {
      flex: 0.65;
      }
      &:nth-child(2) {
      flex: 0.35;
      }
      & .is-subtitle {
        position: sticky;
        top: 0;
        width: 100%;
        background-color: var(--is-orange);
        > h2 {
        font-size: var(--font-lg);
        font-family: 'body';
        text-transform: unset;
        max-width: 18ch;
        }
      }
      > .is-spacing {
        position: absolute;
        top: calc(75vh + 4em) ;
        padding: var(--space-small) 0;
      }
      > .is-cover {
        background-color: var(--is-fushia);
        clip-path: var(--mask);
        height: 75vh;
        margin-bottom: var(--space-small);
      }

      & .is-details {
        display: flex;
        flex-direction: column;
        gap: var(--space-base);
        margin-left: 50%;
        justify-content: flex-end;
        padding-bottom: var(--space-xl);
      }
      & .is-sticky {
        background-color: var(--is-orange);
        position: sticky;
        top: 0;
        z-index: 2;
        padding-top: var(--space-small);
      }
      & .is-ticket {
        position: sticky;
        top: 0;
        z-index: 3;
        padding: var(--space-small) 0;
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
    }
    & .is-cta {
      position: sticky;
      top: 0;
      margin-right: -2.5em;
      transform: translateX(0.5em);
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      overflow: hidden;
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
        margin-top: var(--space-base);
        }
    }
  }

</style>