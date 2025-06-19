<script setup>
import { ref } from 'vue'
import Formulaire from './components/Formulaire.vue'
import PreviewMarkdown from './components/PreviewMarkdown.vue'

const showPreview = ref(false)

function toggleView() {
  showPreview.value = !showPreview.value
}
</script>

<template>
  <div class="container">
    <h1>OpéDF – Générateur d'opérations PDF</h1>

    <button @click="toggleView">
      {{ showPreview ? '← Retour au formulaire' : '→ Aperçu Markdown' }}
    </button>

    <hr />

    <Formulaire v-if="!showPreview" />
    <PreviewMarkdown v-else />
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

button {
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
}

button:hover {
  background-color: #0056b3;
}
</style>