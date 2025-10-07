<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['close'])
const isClosing = ref(false)
const navElement = ref(null)
const transitionElement = ref(null)

const route = useRoute()

onMounted(() => {
  if (transitionElement.value) {
    const scrollY = window.lenis ? window.lenis.scroll : window.scrollY
    gsap.set(transitionElement.value, {
      position: 'absolute',
      top: scrollY,
      left: 0,
      clipPath: 'inset(0 0 100% 0)',
    })

    gsap.to(transitionElement.value, {
      clipPath: 'inset(0 0 0% 0)',
      duration: 1,
      ease: 'power4.inOut',
    })
  }
})

onUnmounted(() => {
})

const handleClose = () => {
  isClosing.value = true

  if (transitionElement.value) {
    gsap.to(transitionElement.value, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.75,
      ease: 'power4.inOut',
      onComplete: () => {
        emit('close')
      }
    })
  } else {
    setTimeout(() => {
      emit('close')
    }, 750)
  }
}

const navItems = [
  { name: 'home', label: 'Accueil', path: '/' },
  { name: 'programmation', label: 'Programmation', path: '/programmation' },
  { name: 'about', label: 'À Propos', path: '/apropos' },
  { name: 'support', label: 'Appuyez-nous', path: '/' },
  { name: 'contact', label: 'Contact', path: '/contact' }
]

const filteredNav = computed(() =>
  navItems.filter(item => item.name !== route.name)
)

defineExpose({ handleClose })
</script>

<template>
  <div
    ref="transitionElement"
    class="transition"
  >
    <nav ref="navElement">
      <div class="is-items">
        <RouterLink
          v-for="item in filteredNav"
          :key="item.name"
          :to="item.path"
          @click="handleClose"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </nav>
  </div>
</template>


<style scoped>
nav {
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100dvh;
  background-color: var(--is-fushia);
  z-index: 9;
  display: flex;
  align-items: flex-end;
  padding: var(--space-small) var(--space-width);
  font-family: 'Accent';
  box-sizing: border-box;

  > .is-items {
    display: flex;
    flex-direction: column;
    font-size: clamp(1em, 9vw, 8em);
    text-transform: uppercase;
    line-height: 1;
    > a {
      line-height: 0.95;
    }
  }
}

.transition {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100vw;
  height: 100vh;
}

@media (max-width: 768px) {
  nav {
    display: flex;
    justify-content: center;
    padding: var(--space-small);
    > .is-items {
      writing-mode: vertical-rl; 
      transform: rotate(180deg); 
      font-size: 18vw;
    }
  }
}
</style>