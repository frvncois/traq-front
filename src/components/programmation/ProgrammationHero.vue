<script setup>
import LogoMain from '@/assets/LogoMain.vue';
</script>

<template>
  <section class="is-orange">
    <div class="hero is-wrap">
      <div class="cover is-logo">
        <router-link to="/">
          <LogoMain />
        </router-link>
      </div>
      <div class="hero is-content">
        <h1>Programmation</h1>
        <h2>2025 - 2026</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  &.is-wrap {
    height: 80vh;
    color: var(--is-black);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  > .is-content {
    display: flex;
    padding: var(--space-small) var(--space-width);
    justify-content: space-between;
    > h1 {
      font-size: var(--font-big);
    }
    > h2 {
      font-size: var(--font-big);
      font-family: 'accent';
    }
  }
  > .is-logo {
    position: absolute;
    top: var(--space-base);
    left: var(--space-width);
  }
}
</style>