<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  home: { type: Object, default: () => null }
})

const donationFixed= ref(null)
const coverFixed= ref(null)
let st = null
let stCover = null

onMounted(() => {
  setTimeout(() => {
    if (!donationFixed.value) return

    st = ScrollTrigger.create({
      trigger: donationFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })
  }, 500)

  setTimeout(() => {
    if (!coverFixed.value) return

    stCover = ScrollTrigger.create({
      trigger: coverFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })
  }, 500)
})

onUnmounted(() => {
  if (st) st.kill()
  if (stCover) stCover.kill()
})
</script>

<template>
  <section
    class="is-white"v-if="home">
    <div class="donation is-wrap">
      <div ref="donationFixed" class="donation is-content">
        <h1>Faire un don</h1>
        <p>{{ home.donationIntro }}</p>
        <RouterLink to="/events" class="events is-cta">
          <span>Appuyez-nous</span>
          <div class="is-toggle"></div>
        </RouterLink>
      </div>
      <div class="donation is-cover">
        <img
          ref="coverFixed"
          v-if="home.donationCover?.url"
          :src="home.donationCover.url"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.donation {
  &.is-wrap {
    position: relative;
    .is-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
      padding: var(--space-small) var(--space-width);
      > h1 {
        text-transform: uppercase;
        font-size: var(--font-big);
        line-height: 0.75;
      }
      > p {
        font-family: 'Accent';
      }
    }
    .is-cover {
      position: relative;
      height: 75vh;
      overflow: hidden;
      clip-path: border-box;
      img {
        position: absolute;
        z-index: -1;
        inset: 0;
        min-width: 100vw;
        height: 75vh;
        object-fit: cover;
      }
    }
    .is-cta {
      position: absolute;
      padding-top: var(--space-small);
      right: calc(var(--space-small) * 2.75);
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      overflow: hidden;
      height: 100%;

      span {
        text-transform: uppercase;
        font-family: 'Accent';
        font-size: var(--font-md);
        writing-mode: vertical-rl;
        text-orientation: mixed;
        max-height: 0px;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        padding-bottom: 0;
        transition: max-height 0.75s cubic-bezier(0.85, 0, 0.15, 1), padding-bottom 0.75s cubic-bezier(0.85, 0, 0.15, 1);
      }

      .is-toggle {
        clip-path: var(--mask);
        background-color: var(--is-black);
        width: 1.5em;
        height: 3em;
        position: relative;
        bottom: 0;
        }
    }
  }
    &:hover .is-cta span {
    max-height: 500px;
    padding-bottom: var(--space-xs);
  }
}

@media (max-width: 768px) {
  .donation {
    &.is-wrap {
      .is-cta {
        padding-top: 0.35em;
        right: 0.425em;
        .is-toggle {
          width: 0.9em;
          height: 1.75em;
        }
      }
      .is-cover {
        position: relative;
        height: 75vh;
        overflow: hidden;
        width: 100vw;
      }
    }
  }
  p {
      font-size: var(--font-rg);
    }
}
</style>