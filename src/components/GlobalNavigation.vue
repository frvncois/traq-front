<script setup>
import { RouterLink } from 'vue-router'

const emit = defineEmits(['close'])
</script>

<template>
  <nav>
    <div class="is-items">
      <RouterLink to="/programmation" @click="emit('close')">Programmation</RouterLink>
      <RouterLink to="/apropos" @click="emit('close')">À Propos</RouterLink>
      <RouterLink to="/" @click="emit('close')">Appuyez-nous</RouterLink>
      <RouterLink to="/contact" @click="emit('close')">Contact</RouterLink>
    </div>
  </nav>
</template>
