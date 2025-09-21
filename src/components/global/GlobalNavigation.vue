<script setup>
import { RouterLink } from 'vue-router'

const emit = defineEmits(['close'])
</script>

<template>
  <nav>
    <div class="is-items">
      <RouterLink to="/programmation" @click="emit('close')">Programmation</RouterLink>
      <RouterLink to="/apropos" @click="emit('close')">À Propos</RouterLink>
      <RouterLink to="/" @click="emit('close')">Appuyez-nous</RouterLink>
      <RouterLink to="/contact" @click="emit('close')">Contact</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  inset: 0;
  background-color: var(--is-fushia);
  z-index: 9;
  display: flex;
  align-items: flex-end;
  padding: var(--space-height);
  > .is-items {
    display: flex;
    flex-direction: column;
    font-size: 10.5vw;
    text-transform: uppercase;
    line-height: 1;
  }
}
</style>