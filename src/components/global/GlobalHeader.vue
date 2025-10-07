<script setup>
import GlobalNavigation from '@/components/global/GlobalNavigation.vue'
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const showNav = ref(false)
const headerColor = ref('var(--is-orange)')
const globalNavRef = ref(null)

const route = useRoute()

const computedHeaderColor = computed(() =>
  showNav.value ? 'var(--is-dark)' : headerColor.value
)

const toggleNav = () => {
  if (!showNav.value) showNav.value = true
  else if (globalNavRef.value) globalNavRef.value.handleClose()
}

const closeNav = () => {
  showNav.value = false
  updateHeaderColor()
}

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    setTimeout(() => {
      updateHeaderColor()
    }, 100)
  },
  { immediate: true }
)

const updateHeaderColor = () => {
  if (route.name === 'contact') {
    headerColor.value = 'var(--is-black)'
    return
  }

  const sections = document.querySelectorAll('section')
  const headerRect = document.querySelector('header')?.getBoundingClientRect()

  if (!headerRect) return

  const headerCenter = headerRect.top + headerRect.height / 2

  let currentSection = null

  sections.forEach(section => {
    const rect = section.getBoundingClientRect()

    if (headerCenter >= rect.top && headerCenter <= rect.bottom) {
      currentSection = section
    }
  })

  if (!currentSection) return

  if (currentSection.classList.contains('is-fushia')) {
    headerColor.value = 'var(--is-black)'
  } else if (currentSection.classList.contains('is-orange')) {
    headerColor.value = 'var(--is-black)'
  } else if (currentSection.classList.contains('is-white')) {
    headerColor.value = 'var(--is-orange)'
  } else {
    headerColor.value = 'var(--is-orange)'
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateHeaderColor)
  window.addEventListener('resize', updateHeaderColor)
  updateHeaderColor()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderColor)
  window.removeEventListener('resize', updateHeaderColor)
})
</script>

<template>
  <header :style="{ color: computedHeaderColor }">
    <div @click="toggleNav">
      <span>Menu</span>
      <div class="is-toggle" :class="{ 'is-active': showNav }"></div>
    </div>
  </header>
  <GlobalNavigation v-if="showNav" ref="globalNavRef" @close="closeNav" />
</template>


<style scoped>
header {
  display: flex;
  position: fixed;
  top: var(--space-small);
  left: calc(var(--space-small) * 0.75);
  padding: 0 var(--space-base);
  z-index: 10;
  transition: color 0.5s cubic-bezier(0.85, 0, 0.15, 1);
  
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
    height: 100%;
    
    span {
      text-transform: uppercase;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-size: var(--font-md);
      font-family: 'Accent';
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      transition: margin-top 0.5s ease-in-out;
    }
    
    .is-toggle {
      clip-path: var(--mask);
      background-color: currentColor;
      width: 1.5em;
      height: 3em;
      position: relative;
      bottom: 0;
      margin-top: var(--space-small);
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    &:hover .is-toggle {
      opacity: 1;
    }
    &:hover span {
      margin-top: var(--space-small);
    }
  }
}

@media (max-width: 768px) {
  header {
  left: -0.275em;
  top: 0.45em;
    & div {
    & .is-toggle {
      height: 2.25em;
      width: 1em;
    }
    }
  }
}
</style>