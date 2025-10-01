<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

const emit = defineEmits(['close'])
const isAnimated = ref(false)
const isClosing = ref(false)

const route = useRoute()

onMounted(() => {
  setTimeout(() => {
    isAnimated.value = true
  }, 10)
})

const handleClose = () => {
  isClosing.value = true
  isAnimated.value = false

  setTimeout(() => {
    emit('close')
  }, 750)
}

// Navigation items
const navItems = [
  { name: 'home', label: 'Accueil', path: '/' },
  { name: 'programmation', label: 'Programmation', path: '/programmation' },
  { name: 'about', label: 'À Propos', path: '/apropos' },
  { name: 'support', label: 'Appuyez-nous', path: '/' },
  { name: 'contact', label: 'Contact', path: '/contact' }
]

// Filter out current route
const filteredNav = computed(() =>
  navItems.filter(item => item.name !== route.name)
)

defineExpose({ handleClose })
</script>

<template>
  <div
    class="transition"
    :class="{ 'is-open': isAnimated, 'is-closing': isClosing }"
  >
    <nav>
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
  position: fixed;
  inset: 0;
  background-color: var(--is-fushia);
  z-index: 9;
  display: flex;
  align-items: flex-end;
  padding: var(--space-small) var(--space-width);
  font-family: 'Accent';
  
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
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 1s cubic-bezier(0.85, 0, 0.15, 1);
  
  &.is-open {
    clip-path: inset(0 0 0% 0);
  }
}

@media (max-width: 768px) {
  nav {
    >.is-items {
      transform: rotate(-90deg);
      transform-origin: 28% 50%;
      font-size: 18vw;
      margin-bottom: 0.25em;
    }
  }
}
</style>