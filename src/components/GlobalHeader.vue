<script setup>
import GlobalNavigation from '@/components/GlobalNavigation.vue'
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
