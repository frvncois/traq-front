<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  about: { 
    type: Array,
    default: () => []
  }
})

const sectionFixed = ref(null)
const introFixed = ref(null)

let st = null
let stIntro = null

onMounted(() => {
  setTimeout(() => {
    if (!introFixed.value) return

    stIntro = ScrollTrigger.create({
      trigger: introFixed.value,
      start: 'top top',
      end: 'max',
      pin: true,
      pinSpacing: false,
    })

    if (!sectionFixed.value) return

    st = ScrollTrigger.create({
      trigger: sectionFixed.value,
      start: 'bottom bottom',
      endTrigger: 'body',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
    })
  }, 500)
})

onUnmounted(() => {
  if (st) st.kill()
  if (stIntro) stIntro.kill()
})
</script>


<template>
  <section class="is-white" v-if="about">
    <div class="about is-wrap">
      <div ref="introFixed" class="about is-content">
        <p v-html="about.aboutIntro"></p>
      </div>
      <div ref="sectionFixed" class="about is-content">
        <div class="about is-item"></div>
        <div class="about is-item">
          <p v-html="about.aboutContent"></p>
          <ul v-if="about.artistsLocal">
            <li v-for="(artist, i) in about.artistsLocal.split('\n')" :key="i">
              {{ artist }}
            </li>
          </ul>
          <p>Quelques uns des artistes par Traquen'Art en Musique du monde</p>
          <ul v-if="about.artistsInt">
            <li v-for="(artist, i) in about.artistsInt.split('\n')" :key="i">
              {{ artist }}
            </li>
          </ul>
          <h2>Mission</h2>
          <ul class="is-num" v-if="about.aboutMission">
            <li v-for="(artist, i) in about.aboutMission.split('\n')" :key="i">
              {{ artist }}
            </li>
          </ul>
          <h2>Conseil d'administration</h2>
          <ul v-if="about.aboutConseil">
            <li v-for="(line, i) in about.aboutConseil.split('\n')" :key="i">
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.about {
  &.is-wrap {
    display: flex;
    flex-direction: column;
  }
  .is-content {
    display: flex;
    padding: var(--space-small) var(--space-width);
    gap: var(--space-large);
    position: relative;
    z-index: 2;
    background-color: var(--is-white);
  }
  > .is-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-base);
  }
  > .is-cover {
    background-color: var(--is-fushia);
    height: calc(100vh - var(--space-base) * 2);
    overflow: hidden;
    position: sticky;
    top: var(--space-base);
    > .is-mask {
      background-color: var(--is-white);
      width: 100%;
      position: absolute;
      z-index: 2;
      bottom: 0;
      aspect-ratio: 1;
      clip-path: var(--cover);
    }
    > img {
      object-fit: cover;
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }
  > p, li {
    font-family: 'Accent';
  }
  > h2 {
    font-family: 'Body';
    font-size: var(--font-big);
    text-transform: none;
    margin-top: var(--space-small);
  }
}

ul {
column-count: 2;
  &:last-child {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--space-large);
  }
  &:nth-child(6) {
    display: flex;
    flex-direction: column;
    gap: var(--space-base);
  }
  &.is-num {
    list-style-type: decimal !important;
    list-style: decimal !important;
    padding-left: var(--space-base);

    li {
      list-style-type: decimal !important;
      list-style: decimal !important;
      padding-left: var(--space-small);
    }
  }
}

li:empty { 
  padding: var(--space-small);
}

@media screen and (max-width: 768px) {
  .about {
    &.is-content {
      flex-direction: column;
      gap: var(--space-base);
      padding-bottom: var(--space-width);
    }
    > .is-item {
      gap: var(--space-md);
    }

  }
  ul {
  column-count: 1;
    &:last-child {
      display: flex;
      flex-direction: column;
    }
    &:nth-child(6) {
      display: flex;
      flex-direction: column;
      gap: var(--space-base);
    }
    &.is-num {
      list-style-type: decimal !important;
      list-style: decimal !important;
      padding-left: 1.15em;

      li {
        list-style-type: decimal !important;
        list-style: decimal !important;
        padding-left: var(--space-small);
      }
    }
  }
}


</style>