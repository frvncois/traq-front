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

      <!-- Intro -->
      <div class="about is-content">
        <p>{{ about.aboutIntro }}</p>
      </div>

      <div class="about is-content">
        <!-- Left item: could be an image -->
        <div class="about is-item">
          image
        </div>

        <!-- Right item: rich text + lists -->
        <div class="about is-item">
          <div v-html="about.aboutContent"></div>

          <h2>Artistes Locaux</h2>
          <ul v-if="about.artistsLocal">
            <li v-for="(artist, i) in about.artistsLocal.split('\n')" :key="i">
              {{ artist }}
            </li>
          </ul>

          <h2>Artistes Internationaux</h2>
          <p>Quelques uns des artistes par Traquen'Art en Musique du monde</p>
          <ul v-if="about.artistsInt">
            <li v-for="(artist, i) in about.artistsInt.split('\n')" :key="i">
              {{ artist }}
            </li>
          </ul>

          <h1>Notre Mission</h1>
          <div v-html="about.aboutMission"></div>

          <h1>Conseil</h1>
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
