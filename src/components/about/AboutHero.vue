<script setup>
import LogoMain from '@/assets/LogoMain.vue';
</script>

<template>
  <section class="is-orange">
    <div class="hero is-wrap">
      <div class="hero is-logo">
        <RouterLink to="/">
          <LogoMain />
        </RouterLink>
      </div>
      <div class="hero is-content">
        <h1>À Propos</h1>
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
    > .is-content {
      display: flex;
      padding: var(--space-small) var(--space-width);
      > h1 {
        font-size: var(--font-big);
      }
    }
    > .is-logo {
      position: absolute;
      top: var(--space-base);
      left: var(--space-width);
    }
  }
}
</style>