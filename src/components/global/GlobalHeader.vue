<script setup>
import GlobalNavigation from '@/components/global/GlobalNavigation.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const showNav = ref(false)
const headerColor = ref('var(--is-orange)')
const globalNavRef = ref(null)

const computedHeaderColor = computed(() => {
  return showNav.value ? 'var(--is-dark)' : headerColor.value
})

const toggleNav = () => {
  if (!showNav.value) {
    // Open the navigation
    showNav.value = true
  } else {
    // Close the navigation with animation
    if (globalNavRef.value) {
      globalNavRef.value.handleClose()
    }
  }
}

const closeNav = () => {
  showNav.value = false
  updateHeaderColor()
}

const updateHeaderColor = () => {
  const sections = document.querySelectorAll('section')
  const scrollPosition = window.scrollY + window.innerHeight / 2
  
  let currentSection = null
  
  // Find which section is currently in view
  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    const sectionTop = rect.top + window.scrollY
    const sectionBottom = sectionTop + rect.height
    
    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      currentSection = section
    }
  })
  
  if (currentSection) {
    if (currentSection.classList.contains('is-orange') ||
        currentSection.classList.contains('is-fushia')) {
      headerColor.value = 'var(--is-black)'
    } else if (currentSection.classList.contains('is-white')) {
      headerColor.value = 'var(--is-orange)'
    } else {
      headerColor.value = 'var(--is-orange)'
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateHeaderColor)
  updateHeaderColor() // Set initial color
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderColor)
})
</script>

<template>
  <header :style="{ color: computedHeaderColor }">
    <div @click="toggleNav" :class="{ 'is-active': showNav }">
      <span>Menu</span>
      <div class="is-toggle"></div>
    </div>
  </header>
  <GlobalNavigation v-if="showNav" ref="globalNavRef" @close="closeNav" />
</template>

<style scoped>
header {
  display: flex;
  position: fixed;
  top: var(--space-base);
  left: var(--space-base);
  z-index: 10;
  transition: color 0.75s cubic-bezier(0.85, 0, 0.15, 1);
  
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
      max-height: 0px;
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      padding-bottom: 0;
      transition: max-height 0.75s cubic-bezier(0.85, 0, 0.15, 1), padding-bottom 0.75s cubic-bezier(0.85, 0, 0.15, 1);
    }
    
    .is-toggle {
      clip-path: polygon(0 0, 100% 0%, 100% 70%, 0% 100%);
      background-color: currentColor;
      width: 2em;
      height: 3em;
      position: relative;
      bottom: 0;
    }
    
    &:hover span {
      max-height: 500px;
      padding-bottom: var(--space-small);
      transition: max-height 0.75s cubic-bezier(0.85, 0, 0.15, 1), padding-bottom 0.75s cubic-bezier(0.85, 0, 0.15, 1);
    }
    
    &.is-active span {
      max-height: 500px;
      padding-bottom: var(--space-small);
    }
  }
}
</style>