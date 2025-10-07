<script setup>
import { RouterView } from 'vue-router'
import GlobalFooter from './components/global/GlobalFooter.vue'
import GlobalHeader from './components/global/GlobalHeader.vue'
import GlobalTransition from './components/global/GlobalTransition.vue'
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <GlobalHeader />
      <RouterView />
      <GlobalFooter />
    </div>
  </div>
  <GlobalTransition />
</template>