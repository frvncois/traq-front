<script setup>
const props = defineProps({
  event: {
    type: Object,
    default: () => null
  }
})
</script>

<template>
  <div class="hero is-wrap" v-if="event">
    <img
      :src="`http://localhost:1337${event.eventCover?.url}`"
      :alt="event.eventTitle"
    />
  </div>
</template>
