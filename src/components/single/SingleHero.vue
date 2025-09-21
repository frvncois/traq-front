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
  <section class="is-orange">
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
  }
  > .is-content {
    display: flex;
    > img {
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
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
</style>