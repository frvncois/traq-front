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

<style scoped>
.donation {
  &.is-wrap {
    position: relative;
    > .is-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-width);
      padding: var(--space-width);
      > h1 {
        text-transform: uppercase;
        font-size: var(--font-big);
      }
    }
    > .is-cover {
      position: relative;
      height: 75vh;
      overflow: hidden;
      > img {
        position: absolute;
        inset: 0;
      }
    }
  }
}
</style>