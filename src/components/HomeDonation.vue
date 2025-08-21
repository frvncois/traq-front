<script setup>
const props = defineProps({
  home: {
    type: Object,
    default: () => null
  }
})
</script>

<template>
  <section class="is-white" v-if="home">
    <div class="donation is-wrap">
      <div class="donation is-content">
        <h1>Faire un don</h1>
        <p>{{ home.donationIntro }}</p>
      </div>
      <div class="donation is-cover" v-if="home.donationCover?.url">
        <img :src="`${home.donationCover.url}`">
      </div>
    </div>
  </section>
</template>
