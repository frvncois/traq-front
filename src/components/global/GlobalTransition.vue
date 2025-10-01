<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()
const transitionElement = ref(null)

onMounted(() => {
  gsap.fromTo(
    transitionElement.value,
    { height: '100vh' },
    {
      height: '0vh',
      duration: 0.8,
      ease: 'power2.inOut',
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
          if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true })
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
  gsap.to(transitionElement.value, {
    height: '0vh',
    duration: 0.6,
    ease: 'power2.inOut',
  })
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
}
</style>