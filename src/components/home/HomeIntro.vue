<script setup>
import LogoMain from '@/assets/LogoMain.vue'

const props = defineProps({
  home: {
    type: Object,
    default: () => null
  }
})
</script>

<template>
  <section v-if="home" class="is-white">
    <div class="about is-wrap">
      <div class="about is-intro">
        <p>{{ home.heroIntro }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
    position: sticky;
    top: 0;
}
.about {
  &.is-wrap {
    display: flex;
    overflow: hidden;
    align-items: flex-end;
  }
  &.is-intro {
    display: flex;
    flex-direction: column;
    background: var(--is-white);
    height: 25vh;
    > p {
      padding: var(--space-small) var(--space-width);
      font-family: 'Accent';
    }
  }
}

@media screen and (max-width: 768px) {
  h2 {
    display: none;
  }
}
</style>