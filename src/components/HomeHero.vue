<script setup>
import { ref, onMounted } from 'vue'
import LogoMain from '@/assets/LogoMain.vue'

const props = defineProps({
  home: {
    type: Object,
    default: () => null
  }
})

const aboutHeight = ref('0vh')
const contentHeight = ref('100vh')

// Titles animation state
const titleOpacity = ref(0)
const titleTranslate = ref('1em')

// Intro animation state
const textOpacity = ref(0)
const textTranslate = ref('1em')

onMounted(() => {
  // Step 1: initial state (already set)
  aboutHeight.value = '0vh'
  contentHeight.value = '100vh'
  titleOpacity.value = 0
  textOpacity.value = 0
  titleTranslate.value = '0.25em'
  textTranslate.value = '0.25em'

  // Hold 1s in initial state
  setTimeout(() => {
    // Step 2: animate hero layout
    aboutHeight.value = '20vh'
    contentHeight.value = '80vh'

    // Step 3a: animate titles (after 250ms)
    setTimeout(() => {
      titleOpacity.value = 1
      titleTranslate.value = '0em'
    }, 250)

    // Step 3b: animate intro (after 450ms)
    setTimeout(() => {
      textOpacity.value = 1
      textTranslate.value = '0em'
    }, 450)
  }, 1000)
})
</script>

<template>
  <section v-if="home" class="hero">
    <div class="hero is-wrap">
      <!-- Hero content block -->
      <div
        class="hero is-content"
        :style="{ height: contentHeight, transition: 'height 0.75s ease' }"
      >
        <div class="hero is-logo">
          <LogoMain />
        </div>
        <img :src="`http://localhost:1337${home.heroCover?.url}`" />

        <h1
          :style="{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslate})`,
            transition: 'opacity 0.75s ease, transform 0.75s ease'
          }"
        >
          {{ home.heroTitle }}
        </h1>

        <h2
          :style="{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslate})`,
            transition: 'opacity 0.75s ease, transform 0.75s ease'
          }"
        >
          {{ home.heroSubtitle }}
        </h2>
      </div>

      <div
        class="hero is-about"
        :style="{ height: aboutHeight, transition: 'height 0.75s ease' }"
      >
        <p
          :style="{
            opacity: textOpacity,
            transform: `translateY(${textTranslate})`,
            transition: 'opacity 0.75s ease, transform 0.75s ease'
          }"
        >
          {{ home.heroIntro }}
        </p>
      </div>
    </div>
  </section>
</template>
