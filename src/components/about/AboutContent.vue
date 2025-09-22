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
      <div class="about is-content">
        <p v-html="about.aboutIntro"></p>
      </div>
      <div class="about is-content">
        <div class="about is-item">
          <div class="about is-cover">
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
          <p v-html="about.aboutMission"></p>
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
  }
  > .is-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-base);
  }
  > .is-cover {
    background-color: var(--is-fushia);
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 0% 100%);
    height: 40em;
    overflow: hidden;
    position: sticky;
    top: var(--space-base);
    > img {
      object-fit: cover;
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }
}

ul {
column-count: 2;
  &:last-child {
    display: flex;
    flex-direction: column;
  }
}

li:empty { 
  padding: var(--space-small);
}
</style>