<script setup>
import { onMounted, onBeforeUnmount } from "vue"

onMounted(() => {
  const fixedImg = document.querySelector(".newsletter.is-elements .is-fixed") // FooterN
  const aImg = document.querySelector(".newsletter.is-elements img[src*='FooterA']") // FooterA

  if (!fixedImg || !aImg) return

  const handleScroll = () => {
    const fixedRect = fixedImg.getBoundingClientRect()
    const aRect = aImg.getBoundingClientRect()

    // Check overlap: if A’s top has entered N’s area → fade N
    if (aRect.top <= fixedRect.bottom && aRect.bottom >= fixedRect.top) {
      fixedImg.style.opacity = "0"
    } else {
      fixedImg.style.opacity = "1"
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  handleScroll()

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll)
  })
})
</script>

<template>
    <section class="is-white">
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
                    <img src="@/assets/FooterN.svg" class="is-fixed" />
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
.newsletter {
    &.is-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    & h1 {
      font-size: 9vw;
      line-height: 1;
      }
    }
  &.is-intro {
    padding: var(--space-width);
  }
  &.is-content {
    display: flex;
    flex-direction: row;
    gap: var(--space-base);
    background-color: var(--is-orange);
    padding: var(--space-height) var(--space-width);
  }
  &.is-elements {
    flex: 1;
    position: relative;
    > img {
      height: 70vh;
      z-index: 2;
      position: relative;
      &.is-sticky {
        position: sticky;
        top: var(--space-base);
        z-index: 3;
      }
      &.is-fixed {
        position: sticky;
        top: var(--space-base);
        margin-top: -100%;
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