<script setup>
import GlobalNavigation from '@/components/global/GlobalNavigation.vue'
import { ref } from 'vue'

const showNav = ref(false)
const toggleNav = () => {
  showNav.value = !showNav.value
}
const closeNav = () => {
  showNav.value = false
}
</script>

<template>
  <header>
    <div @click="toggleNav">
      <span>Menu</span>
      <div class="is-toggle"></div>
    </div>
  </header>
  <GlobalNavigation v-if="showNav" @close="closeNav" />
</template>

<style scoped>
header {
  display: flex;
  position: fixed;
  top: var(--space-small);
  left: calc(var(--space-width) / 3.5);
  z-index: 10;
  color: var(--is-orange);
  > svg {
    width: 10em;
    height: 8em;
  }
  div {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    top: 0;
    height: 100%;
    span {
      text-transform: uppercase;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      max-height: 0px;
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      transition: max-height 0.75s ease-in-out;
      padding-bottom: var(--space-base);
    }
    .is-toggle {
      clip-path: polygon(0 0, 100% 0%, 100% 70%, 0% 100%);
      background-color: var(--is-black);
      width: 2em;
      height: 3em;
      position: relative;
      bottom: 0;
    }
    &:hover span {
      max-height: 500px;
    }
  }
}
</style>