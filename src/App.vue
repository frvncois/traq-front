<script setup>
import { RouterView } from 'vue-router'

import GlobalFooter from './components/global/GlobalFooter.vue'
import GlobalHeader from './components/global/GlobalHeader.vue'
</script>

<template>
  <GlobalHeader />
  <RouterView />
  <GlobalFooter />
</template>
