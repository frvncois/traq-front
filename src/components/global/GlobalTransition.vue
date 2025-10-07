<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()
const transitionElement = ref(null)
const isInitialLoad = ref(true)

onMounted(() => {
  gsap.fromTo(
    transitionElement.value,
    { height: '100vh' },
    {
      height: '0vh',
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        isInitialLoad.value = false
      }
    }
  )
})

router.beforeEach((to, from, next) => {
  if (from.name) {
    gsap.fromTo(
      transitionElement.value,
      { height: '0vh' },
      {
        height: '100vh',
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          if (window.smoother) {
            window.smoother.scrollTo(0, false)
          } else {
            window.scrollTo(0, 0)
          }
          next()
        }
      }
    )
  } else {
    next()
  }
})

router.afterEach(() => {
  if (!isInitialLoad.value) {
    gsap.to(transitionElement.value, {
      height: '0vh',
      duration: 0.6,
      ease: 'power2.inOut',
    })
  }
})
</script>

<template>
  <div
    ref="transitionElement"
    class="global-transition"
  ></div>
</template>

<style scoped>
.global-transition {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 0vh;
  background-color: var(--is-orange);
  z-index: 8;
  pointer-events: none;
}
</style>