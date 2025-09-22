<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isTransitioning = ref(false)
const isPageLoad = ref(true)

onMounted(() => {
  setTimeout(() => {
    isPageLoad.value = false
  }, 100)
})

router.beforeEach((to, from, next) => {
  if (from.name) { 
    isTransitioning.value = true
    
    setTimeout(() => {
      next()
    }, 1000)
  } else {
    next()
  }
})

router.afterEach(() => {
  setTimeout(() => {
    isTransitioning.value = false
  }, 100)
})
</script>

<template>
  <div 
    class="global-transition"
    :class="{ 
      'is-transitioning': isTransitioning, 
      'is-page-load': isPageLoad 
    }"
  ></div>
</template>

<style scoped>
.global-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 0vh;
  background-color: var(--is-orange);
  z-index: 8;
  transition: height 0.5s cubic-bezier(0.85, 0, 0.15, 1);
}

.global-transition.is-page-load {
  height: 100vh;
}

.global-transition.is-transitioning {
  height: 100vh;
}
</style>