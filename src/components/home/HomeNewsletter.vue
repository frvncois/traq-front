<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue"

const footerN = ref(null)
const orangeSection = ref(null)

onMounted(() => {
  const section = orangeSection.value
  const target = footerN.value
  if (!section || !target) return

  const onScroll = () => {
    const rect = section.getBoundingClientRect()
    const total = rect.height
    const scrolled = Math.min(Math.max(-rect.top, 0), total) // clamp 0–total
    const progress = scrolled / total

    // fade out after 10% scrolled
    const opacity = progress < 0.5 ? 1 - progress / 0.1 : 0
    target.style.opacity = opacity
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  onScroll() // run once

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll)
  })
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

<section ref="orangeSection" class="is-orange">
  <div class="newsletter is-content">
    <div class="newsletter is-elements">
      <img src="@/assets/FooterElement.svg" class="is-sticky" />
      <img ref="footerN" src="@/assets/FooterN.svg" class="is-fixed" />
      <img src="@/assets/FooterA.svg" />
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
        top: var(--space-small);
        margin-top: var(--space-small);
        z-index: 3;
      }
      &.is-fixed {
        position: sticky;
        top: var(--space-small);
        margin-top: calc(-70vh - 0.5em);
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
  }
  &.is-elements {
    > img {
      max-width: 100%;
      height: 100%;
      &.is-fixed {
        margin-top: -122.5%;
      }
    }
  }
}
}
</style>