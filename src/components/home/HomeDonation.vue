<script setup>
const props = defineProps({
  home: {
    type: Object,
    default: () => null
  }
})
</script>





<template>
  <section
    class="is-white"
    v-if="home">
    <div class="donation is-wrap">
      <div class="donation is-content">
        <h1>Faire un don</h1>
        <p>{{ home.donationIntro }}</p>
      </div>
      <RouterLink to="/events" class="events is-cta">
        <span>Appuyez-nous</span>
        <div class="is-toggle"></div>
      </RouterLink>
      <div class="donation is-cover">
        <img
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
    > .is-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
      padding: var(--space-small) var(--space-width);
      > h1 {
        text-transform: uppercase;
        font-size: var(--font-big);
      }
      > p {
        font-family: 'Accent';
      }
    }
    > .is-cta {
      position: absolute;
      top: 0;
      right: calc(var(--space-base) * 2);
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
        font-size: var(--font-md);
        font-family: 'Accent';
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
        clip-path: var(--mask);
        background-color: var(--is-black);
        width: 1.5em;
        height: 3em;
        position: relative;
        bottom: 0;
      }
    }
    > .is-cover {
      position: relative;
      height: 100vh;
      overflow: hidden;
      clip-path: border-box;

      img {
        position: fixed;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        top: 0;
        object-fit: cover;
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
    > .is-content {
      padding-top: unset;
    }
    > .is-cta {
        right: 0.25em; 
      & .is-toggle {
          width: 1em;
          height: 2em;
        }
    }
    > .is-cover {
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