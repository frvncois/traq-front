<script setup>
import GlobalNavigation from '@/components/global/GlobalNavigation.vue'
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const showNav = ref(false)
const headerColor = ref('var(--is-orange)')
const globalNavRef = ref(null)
const headerElement = ref(null)

const route = useRoute()

const computedHeaderColor = computed(() =>
  showNav.value ? 'var(--is-dark)' : headerColor.value
)

const toggleNav = () => {
  if (!showNav.value) {
    if (window.smoother) {
      window.smoother.paused(true)
    }

    showNav.value = true
  } else if (globalNavRef.value) {
    globalNavRef.value.handleClose()
  }
}

const closeNav = () => {
  showNav.value = false
  updateHeaderColor()

  if (window.smoother) {
    window.smoother.paused(false)
  }
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

let rafId = null

const updateHeaderColor = () => {
  if (rafId) {
    cancelAnimationFrame(rafId)
  }

  rafId = requestAnimationFrame(() => {
    if (route.name === 'contact') {
      headerColor.value = 'var(--is-black)'
      return
    }

    const sections = document.querySelectorAll('section')
    const headerRect = document.querySelector('header')?.getBoundingClientRect()

    if (!headerRect) return

    const headerBottom = headerRect.bottom

    let currentSection = null
    let closestDistance = Infinity

    sections.forEach(section => {
      const rect = section.getBoundingClientRect()

      // Check if section is visible and overlapping with header area
      if (rect.bottom > 0 && rect.top < headerBottom) {
        // Calculate distance from section top to viewport top
        const distance = Math.abs(rect.top)

        // Use the section that's closest to the top of viewport
        if (distance < closestDistance) {
          closestDistance = distance
          currentSection = section
        }
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

    rafId = null
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateHeaderColor, { passive: true })
  window.addEventListener('resize', updateHeaderColor, { passive: true })
  updateHeaderColor()

  setTimeout(() => {
    if (headerElement.value) {
      ScrollTrigger.create({
        trigger: headerElement.value,
        start: 'top top',
        end: 'max',
        pin: true,
        pinSpacing: false,
      })
    }
  }, 200)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderColor)
  window.removeEventListener('resize', updateHeaderColor)
  ScrollTrigger.getAll().forEach(st => st.kill())
})
</script>

<template>
  <header ref="headerElement" :style="{ color: computedHeaderColor }">
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
  position: absolute;
  left: calc(var(--space-small) * 0.75);
  padding: var(--space-small) var(--space-base);
  z-index: 10;

  div {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    gap: 1em;
    top: 0;
    transition: top 0.5s cubic-bezier(0.85, 0, 0.15, 1);

    span {
      text-transform: uppercase;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-size: var(--font-md);
      font-family: 'Accent';
      white-space: nowrap;
      position: relative;
    }

    .is-toggle {
      clip-path: var(--mask);
      background-color: currentColor;
      width: 1.5em;
      height: 2.5em;
      position: relative;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.5s cubic-bezier(0.85, 0, 0.15, 1);
    }
    &:hover {
      top: 1em;

      .is-toggle {
        opacity: 1;
      }
    }
  }
}

@media (max-width: 768px) {
  header {
  padding: 0.35em 0.55em;
  left: -0.25em;
    & div {
    & .is-toggle {
      height: 2em;
      width: 1em;
    }
    }
  }
}
</style>