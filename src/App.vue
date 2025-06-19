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
    <h1>OpéDF – Générateur de PDF pour les opérations</h1>

    <button @click="toggleView">
      {{ showPreview ? '← Retour au formulaire' : '→ Aperçu Markdown' }}
    </button>

    <hr />

    <Formulaire v-if="!showPreview" />
    <PreviewMarkdown v-else />
  </div>
</template>