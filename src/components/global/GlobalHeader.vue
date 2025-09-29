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

// ✅ Always run this after new route renders
watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    requestAnimationFrame(() => {
      updateHeaderColor()
    })
  }
)

const updateHeaderColor = () => {
  const sections = document.querySelectorAll('section')
  const scrollPosition = window.scrollY + window.innerHeight / 2

  let currentSection = null

  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    const sectionTop = rect.top + window.scrollY
    const sectionBottom = sectionTop + rect.height

    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
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
      <span v-if="!showNav">Menu</span>
      <span v-if="showNav">Retour</span>
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
      font-size: var(--font-md);
      font-family: 'Accent';
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      padding-bottom: 0;
      transition: max-height 0.75s cubic-bezier(0.85, 0, 0.15, 1), padding-bottom 0.75s cubic-bezier(0.85, 0, 0.15, 1);
    }
    
    .is-toggle {
      clip-path: var(--mask);
      background-color: currentColor;
      width: 1.5em;
      height: 3em;
      position: relative;
      bottom: 0;
      margin-top: var(--space-base);
      opacity: 0;
      transition: margin-top 0.75s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.15s cubic-bezier(0.85, 0, 0.15, 1);
      &.is-active {
        margin-top: var(--space-base);
        opacity: 1;
      }
    }
    &:hover .is-toggle {
      opacity: 1;
    }
  }
}

@media (max-width: 768px) {
  header {
  left: -0.25em;
    & div {
    & .is-toggle {
      height: 2.25em;
      width: 1em;
    }
    }
  }
}
</style>