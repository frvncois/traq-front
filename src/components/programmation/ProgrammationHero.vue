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
    align-items: flex-end;
    justify-content: space-between;
    > h1 {
      font-size: var(--font-big);
    }
    > h2 {
      font-size: var(--font-big);
      font-family: 'body';
    }
  }
  > .is-logo {
    position: absolute;
    top: var(--space-small);
    left: var(--space-width);
  }
}

@media screen and (max-width: 768px) {
.hero {
  &.is-wrap {
    > .is-content {
      h2 {
        display: none;
      }
    }
  }
}
}
</style>