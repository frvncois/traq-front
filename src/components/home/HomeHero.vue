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
  <section v-if="home" class="hero">
    <div class="hero is-wrap">
      <div class="hero is-content">
        <div class="hero is-logo">
          <LogoMain />
        </div>
        <img :src="`${home.heroCover?.url}`" />
        <h1>{{ home.heroTitle }}</h1>
        <h2>{{ home.heroSubtitle }}</h2>
      </div>
      <div class="hero is-about">
        <p>{{ home.heroIntro }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  &.is-wrap {
    display: flex;
    height: 100vh;
    overflow: hidden;
    align-items: flex-end;
  }
  &.is-logo {
    color: var(--is-orange);
    position: absolute;
    top: var(--space-base);
    left: var(--space-width);
  }
  &.is-content {
    position: fixed;
    top: 0;
    z-index: -1;
    color: var(--is-orange);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    height: 80vh;
    padding: var(--space-height) var(--space-width) var(--space-base) var(--space-width);
    box-sizing: border-box;
    > img {
      position: absolute;
      z-index: -1;
      inset: 0;
      height: 100vh;
      width: 100%;
      object-fit: cover;
    }
    > h1 {
      flex: 1;
      word-spacing: 100vw;
      font-size: var(--font-big);
      text-transform: uppercase;
    }
    > h2 {
      flex: 1;
      word-spacing: 100vw;
      line-height: 0.8;
      font-size: var(--font-big);
      font-family: 'Accent';
      text-transform: none;
    }
  }
  &.is-about {
    display: flex;
    flex-direction: column;
    background: var(--is-white);
    height: 20vh;
    > p {
      padding: var(--space-small) var(--space-width);
    }
  }
}
</style>