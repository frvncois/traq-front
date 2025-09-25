
<script setup>
import { onMounted, ref } from "vue"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerN = ref(null)
const footerA = ref(null)

onMounted(() => {
  if (footerN.value && footerA.value) {
    gsap.to(footerN.value, {
      opacity: 0,
      scrollTrigger: {
        trigger: footerA.value,
        start: "top 30%",
        end: "top 10%",
        scrub: true
      }
    })
  }
})
</script>

<template>
    <section class="is-white is-stack">
        <div class="newsletter is-wrap">
            <div class="newsletter is-intro">
                <h1>Diffuseur des arts de la scène</h1>
            </div>
        </div>
    </section>
    <section class="is-orange">
      <div class="newsletter is-content">
                <div class="newsletter is-elements">
                    <img src="@/assets/FooterElement.svg" class="is-sticky" />
                    <img ref="footerN" src="@/assets/FooterN.svg" class="is-fixed" />
                    <img ref="footerA" src="@/assets/FooterA.svg" />
                    <img src="@/assets/FooterR.svg" />
                    <img src="@/assets/FooterT.svg" />
                </div>
                <div class="newsletter is-cta">
                    <h2>Abonnez-vous à notre infolettre</h2>
                </div>
            </div>
    </section>
</template>

<style scoped>
.is-stack {
  position: sticky;
  top:0;
}

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
    padding: var(--space-large) var(--space-width); 
  }
  &.is-content {
    display: flex;
    flex-direction: row;
    gap: var(--space-base);
    background-color: var(--is-orange);
    padding: 0 var(--space-width) calc(var(--space-base) * 2.5) var(--space-width);
  }
  &.is-elements {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    > img {
      height: 70vh;
      z-index: 2;
      position: relative;
      &.is-sticky {
        position: sticky;
        top: 0;
        padding-top: var(--space-small);
        z-index: 3;
      }
      &.is-fixed {
        position: sticky;
        top: var(--space-small);
        margin-top: calc(-100% - 0.75em);
        z-index: 1;
        opacity: 1;
      }
    }
  }
  &.is-cta {
    flex: 1;
      position: sticky;
      top: var(--space-base);
    & h2 {
      font-size: var(--font-lg);
    }
  }
}
</style>