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
  <section v-if="home" class="hero">
    <div class="hero is-wrap">
      <div ref="heroFixed" class="hero is-content">
        <div class="hero is-logo">
          <LogoMain />
        </div>
        <img :src="`${home.heroCover?.url}`" />
        <h1>{{ home.heroTitle }}</h1>
        <h2>{{ home.heroSubtitle }}</h2>
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
  &.is-logo {
    color: var(--is-orange);
    position: absolute;
    top: var(--space-small);
    left: var(--space-width);
    > svg {
      width: 10.25em;
      height: 8.75em;
      object-fit: contain;
    }
  }
  .is-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    color: var(--is-orange);
    display: flex;
    height: 90vh;
    flex-direction: row;
    align-items: flex-end;
    gap: var(--space-large);
    justify-content: space-between;
    padding: var(--space-height) var(--space-width) var(--space-small) var(--space-width);
    box-sizing: border-box;
    clip-path: border-box;
    & img {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
    > h1 {
      flex: 1;
      word-spacing: 100vw;
      font-size: var(--font-big);
      text-transform: uppercase;
    }
    > h2 {
      flex: 1;
      word-spacing: 100vw;
      line-height: 0.8;
      font-size: var(--font-big);
      font-family: 'Body';
      text-transform: none;
    }
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