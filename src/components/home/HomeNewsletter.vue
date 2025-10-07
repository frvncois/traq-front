<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  home: { type: Object, default: () => null }
})

const elementsFixed= ref(null)
const elementsFixed2= ref(null)
const ctaFixed= ref(null)
const titleFixed= ref(null)

let st = null
let st2 = null
let stCta = null
let stTitle = null

onMounted(() => {
  setTimeout(() => {
    if (!elementsFixed.value) return

    st = ScrollTrigger.create({
      trigger: elementsFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })
  }, 500)

  setTimeout(() => {
    if (!elementsFixed2.value) return

    st2 = ScrollTrigger.create({
      trigger: elementsFixed2.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })
  }, 500)

  setTimeout(() => {
    if (!ctaFixed.value) return

    stCta = ScrollTrigger.create({
      trigger: ctaFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })
  }, 500)

  setTimeout(() => {
    if (!titleFixed.value) return

    stTitle = ScrollTrigger.create({
      trigger: titleFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })
  }, 500)

})

onUnmounted(() => {
  if (st) st.kill()
  if (st2) st2.kill()
  if (stCta) stCta.kill()
  if (stTitle) stTitle.kill()
})
</script>


<template>
<section class="is-white is-stack">
  <div class="newsletter is-wrap">
    <div ref="titleFixed" class="newsletter is-intro">
      <h1>Diffuseur des arts de la scène</h1>
    </div>
  </div>
</section>

<section class="is-orange">
  <div class="newsletter is-content">
    <div class="newsletter is-elements">
      <img ref="elementsFixed" src="@/assets/FooterElement.svg"/>
      <img ref="elementsFixed2" src="@/assets/FooterN.svg"/>
      <img src="@/assets/FooterA.svg" />
      <img src="@/assets/FooterR.svg" />
      <img src="@/assets/FooterT.svg" />
    </div>
    <div ref="ctaFixed" class="newsletter is-cta">
      <h2>Abonnez-vous à notre infolettre</h2>
    </div>
  </div>
</section>
</template>

<style scoped>
.newsletter {
    &.is-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    & h1 {
      font-size: 9.75vw;
      line-height: 1;
      }
    }
  &.is-intro {
    padding: var(--space-width); 
  }
  &.is-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--space-base);
    background-color: var(--is-orange);
    padding: 0 var(--space-width) calc(var(--space-base) * 2.5) var(--space-width);
  }
  &.is-elements {
    flex: 1;
    flex-shrink: 1;
    position: relative;
    display: flex;
    gap: var(--space-base);
    flex-direction: column;
    > img {
      aspect-ratio: 1;
      z-index: 2;
      position: relative;
      width: 100%;
      &:first-child {
        position: relative;
        z-index: 3;
        padding-top: var(--space-small);
      }
      &:nth-child(2) {
        position: relative;
        margin-top: calc(-100% - 1.5em);
        padding-top: var(--space-small);
      }
    }
  }
  &.is-cta {
      flex: 1;
      padding: 0.125em;
    & h2 {
      font-size: var(--font-lg);
      line-height: 0.85;
    }
  }
}

@media (max-width: 768px) {
.newsletter {
  &.is-wrap {
    h1 {
      font-size: 13vw;
      line-height: 0.95;
    }
  }
  &.is-intro {
    padding: var(--space-width);
  }
  &.is-content {
    flex-direction: column;
    gap: var(--space-small);
  }
  &.is-elements {
    > img {
      max-width: 100%;
      height: 100%;
      &:first-child {
        padding-top: var(--space-small);
      }
      &:nth-child(2) {
        margin-top: calc(-100% - 0.75em);
      }
    }
  }
}
}
</style>