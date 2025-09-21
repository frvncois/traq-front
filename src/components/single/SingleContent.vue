<script setup>
import { formatDate, formatTime } from '@/services/time'

const props = defineProps({
  event: {
    type: Object,
    default: () => null
  }
})

</script>

<template>
  <section class="is-orange" v-if="event">
    <div class="event is-wrap">
      <div class="event is-content">
        <div class="event is-items">
          <div>
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
          <h1>Billeterie</h1>
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
              {{ event.eventLinks }}
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
    padding: var(--space-small) 0;
    > .is-items {
      display: flex;
      flex-direction: column;
      gap: var(--space-small);
      & h1, h2 {
        font-size: var(--font-big);
      }
      > .is-subtitle {
        font-size: var(--font-lg);
        text-transform: unset;
        font-family: 'accent';
        max-width: 15ch;
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
    }
    &:last-child .is-items {  
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  }
}
</style>