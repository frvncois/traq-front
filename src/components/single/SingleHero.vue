<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LogoMain from '@/assets/LogoMain.vue'
import { ref, onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  event: { type: Object, default: () => null }
})

const heroFixed = ref(null)
let st = null

onMounted(() => {
  setTimeout(() => {
    if (!heroFixed.value) return

    st = ScrollTrigger.create({
      trigger: heroFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })
  }, 500)
})

onUnmounted(() => {
  if (st) st.kill()
})
</script>

<template>
  <section v-if="event">
    <div class="hero is-wrap">
      <div class="hero is-logo">
        <RouterLink to="/"><LogoMain /></RouterLink>
      </div>
      <div ref="heroFixed" class="hero is-content">
        <img
          :src="`${event.eventCover?.url}`"
          :alt="event.eventTitle"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  &.is-wrap {
    display: flex;
    height: 90vh;
    overflow: hidden;
    align-items: flex-end;
  }
  .is-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 90vh;
    > img {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      inset: 0;
      width: 100vw;
      min-height: 100vh;
      object-fit: cover;
    }
  }
  > .is-logo {
    position: absolute;
    z-index: 1;
    top: var(--space-small);
    left: var(--space-width);
    color: var(--is-orange);
  }
}

@media screen and (max-width: 768px) {
  .hero {
    &.is-wrap {
      height: 80vh;
    }
    &.is-content {
      height: 80vh;
    }
    &.is-logo {
      top: 0.4em;
        svg {
        height: auto;
        width: 6em;
      }
    }
  }
}
</style>