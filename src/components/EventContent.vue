<script setup>
const props = defineProps({
  event: {
    type: Object,
    default: () => null
  }
})

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>

<template>
  <section v-if="event">
    <div class="event is-wrap">
      <div class="event is-content">
        <div>
          <h1>{{ event.eventTitle }}</h1>
          {{ formatDate(event.eventDate) }}
          {{ event.eventVenue }} <span v-if="event.eventCity">— {{ event.eventCity }}</span>
          <p class="address" v-if="event.eventStreet">{{ event.eventStreet }}</p>
        </div>

        <div>
          <h1>Billeterie</h1>
          <span class="event is-element"></span>
        </div>

        <div>
          <h2>{{ event.eventSubtitle }}</h2>
              {{ event.eventPartners }}
              {{ event.eventArtists }}
        </div>

        <div class="content" v-html="event.eventContent">
        </div>

      </div>
    </div>
  </section>
</template>
