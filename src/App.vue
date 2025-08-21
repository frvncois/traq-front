<script setup>
import { RouterView } from 'vue-router'

import GlobalFooter from './components/GlobalFooter.vue'
import GlobalHeader from './components/GlobalHeader.vue'
</script>

<template>
  <GlobalHeader />
  <RouterView />
  <GlobalFooter />
</template>
