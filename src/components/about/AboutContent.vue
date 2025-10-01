<script setup>
const props = defineProps({
  about: {
    type: Object,
    default: () => null
  }
})
</script>

<template>
  <section class="is-white" v-if="about">
    <div class="about is-wrap">
      <div class="about is-content is-sticky">
        <p v-html="about.aboutIntro"></p>
      </div>
      <div class="about is-content">
        <div class="about is-item">
          <div class="about is-cover">
            <div class="about is-mask"></div>
            <img :src="`${about.aboutImage?.url}`" />
          </div>
        </div>
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
          <ul v-if="about.aboutMission">
            <li v-for="(artist, i) in about.aboutMission.split('\n')" :key="i">
              {{ artist }}
            </li>
          </ul>
          <h2>Conseil</h2>
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
  > .is-content {
    display: flex;
    padding: var(--space-small) var(--space-width);
    gap: var(--space-large);
    position: relative;
    z-index: 2;
    background-color: var(--is-white);
    &.is-sticky {
      position: sticky;
      top:0;
      z-index: 1;
    }
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
    margin-bottom: var(--space-width);
  }
  &:nth-child(6) {
    display: flex;
    flex-direction: column;
    gap: var(--space-base);
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
    }
  }
}

ul {
    display: flex;
    flex-direction: column;
    gap: 0;
}
</style>