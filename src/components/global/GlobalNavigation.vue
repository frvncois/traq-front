<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const emit = defineEmits(['close'])
const isAnimated = ref(false)
const isClosing = ref(false)

onMounted(() => {
  setTimeout(() => {
    isAnimated.value = true
  }, 10)
})

const handleClose = () => {
  isClosing.value = true
  isAnimated.value = false
  
  setTimeout(() => {
    emit('close')
  }, 750)
}

defineExpose({
  handleClose
})
</script>

<template>
  <div 
    class="transition" 
    :class="{ 'is-open': isAnimated, 'is-closing': isClosing }"
  >
    <nav>
      <div class="is-items">
        <RouterLink to="/programmation" @click="handleClose">Programmation</RouterLink>
        <RouterLink to="/apropos" @click="handleClose">À Propos</RouterLink>
        <RouterLink to="/" @click="handleClose">Appuyez-nous</RouterLink>
        <RouterLink to="/contact" @click="handleClose">Contact</RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  position: fixed;
  inset: 0;
  background-color: var(--is-fushia);
  z-index: 9;
  display: flex;
  align-items: flex-end;
  padding: var(--space-height) var(--space-width);
  font-family: 'Accent';
  
  > .is-items {
    display: flex;
    flex-direction: column;
    font-size: 9.5vw;
    text-transform: uppercase;
    line-height: 1;
  }
}

.transition {
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  clip-path: inset(0 0 100% 0);
  transition: clip-path 1s cubic-bezier(0.85, 0, 0.15, 1);
  
  &.is-open {
    clip-path: inset(0 0 0% 0);
  }
}
</style>