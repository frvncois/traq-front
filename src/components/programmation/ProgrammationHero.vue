<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LogoMain from '@/assets/LogoMain.vue'
import { ref, onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  home: { type: Object, default: () => null }
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
  <section class="is-orange">
    <div class="hero is-wrap">
      <div class="hero is-logo">
        <router-link to="/">
          <LogoMain />
        </router-link>
      </div>
      <div ref="heroFixed" class="hero is-content">
        <h1>Programmation</h1>
        <h2>2025 - 2026</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  &.is-wrap {
    height: 80vh;
    color: var(--is-black);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .is-content {
    display: flex;
    padding: var(--space-small) var(--space-width);
    align-items: flex-end;
    justify-content: space-between;
    > h1 {
      font-size: var(--font-big);
    }
    > h2 {
      font-size: var(--font-big);
      font-family: 'body';
    }
  }
  > .is-logo {
    position: absolute;
    top: var(--space-small);
    left: var(--space-width);
  }
}

@media screen and (max-width: 768px) {
  h2 {
    display: none;
  }
  .hero {
    &.is-wrap {
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