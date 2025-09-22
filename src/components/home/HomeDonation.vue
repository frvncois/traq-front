<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  home: {
    type: Object,
    default: () => null
  }
})
const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null
onMounted(() => {
  if (sectionRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.intersectionRatio > 0.1
        })
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 0.8, 1],
        rootMargin: '0px'
      }
    )
    observer.observe(sectionRef.value)
  }
})
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
<template>
  <section
    ref="sectionRef"
    class="is-white"
    v-if="home"
  >
    <div class="donation is-wrap">
      <div class="donation is-content">
        <h1>Faire un don</h1>
        <p>{{ home.donationIntro }}</p>
      </div>
      <RouterLink to="/events" class="events is-cta">
        <span :class="{ 'is-visible': isVisible }">Appuyez-nous</span>
        <div class="is-toggle"></div>
      </RouterLink>
      <div
        class="donation is-cover"
        v-if="home.donationCover?.url"
        :style="{ backgroundImage: `url(${home.donationCover.url})` }"
      >
      </div>
    </div>
  </section>
</template>
<style scoped>
.donation {
  &.is-wrap {
    position: relative;
    > .is-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-large);
      padding: var(--space-small) var(--space-width);
      > h1 {
        text-transform: uppercase;
        font-size: var(--font-big);
      }
    }
    > .is-cta {
      position: absolute;
      top: 0;
      right: var(--space-base);
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      overflow: hidden;
      height: 100%;
      span {
        text-transform: uppercase;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        max-height: 0px;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        padding-bottom: 0;
        transition: max-height 0.75s cubic-bezier(0.85, 0, 0.15, 1), padding-bottom 0.75s cubic-bezier(0.85, 0, 0.15, 1);
        &.is-visible {
          max-height: 500px !important;
          padding-bottom: var(--space-small) !important;
        }
      }
      .is-toggle {
        clip-path: polygon(0 0, 100% 0%, 100% 70%, 0% 100%);
        background-color: var(--is-black);
        width: 2em;
        height: 3em;
        position: relative;
        bottom: 0;
      }
      &:hover span {
        max-height: 500px;
        padding-bottom: var(--space-small);
      }
    }
    > .is-cover {
      position: relative;
      height: 75vh;
      overflow: hidden;
      background-attachment: fixed;
      background-size: cover;
      > img {
        position: absolute;
        inset: 0;
      }
    }
  }
}
</style>