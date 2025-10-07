<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  home: { type: Object, default: () => null }
})

const introFixed = ref(null)
let st = null

onMounted(() => {
  setTimeout(() => {
    if (!introFixed.value) return

    st = ScrollTrigger.create({
      trigger: introFixed.value,
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
  <section v-if="home" class="is-white">
    <div class="about is-wrap">
      <div ref="introFixed" class="about is-intro">
        <p>{{ home.heroIntro }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  &.is-wrap {
    display: flex;
    overflow: hidden;
    align-items: flex-end;
  }
  &.is-intro {
    display: flex;
    flex-direction: column;
    background: var(--is-white);
    padding: var(--space-small) var(--space-width) var(--space-large) var(--space-width);
    > p {
      font-family: 'Accent';
      font-size: var(--font-rg);
    }
  }
}
</style>