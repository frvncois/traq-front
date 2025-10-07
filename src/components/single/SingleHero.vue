<script setup>
import LogoMain from '@/assets/LogoMain.vue';

const props = defineProps({
  event: {
    type: Object,
    default: () => null
  }
})

</script>

<template>
  <section v-if="event">
    <div class="hero is-wrap">
      <div class="hero is-logo">
        <RouterLink to="/"><LogoMain /></RouterLink>
      </div>
      <div class="hero is-content">
        <img
          :src="`${event.eventCover?.url}`"
          :alt="event.eventTitle"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  &.is-wrap {
    height: 80vh;
    background: var(--is-orange);
    color: var(--is-black);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    clip-path: border-box;
  }
  > .is-content {
    display: flex;
    > img {
      position: fixed;
      top:0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      z-index: 0;
    }
  }
  > .is-logo {
    position: absolute;
    z-index: 1;
    top: var(--space-small);
    left: var(--space-width);
    color: var(--is-orange);
  }
}

@media screen and (max-width: 768px) {
  .hero {
    &.is-logo svg {
      height: 6em;
      width: auto;
    }
  }
}
</style>