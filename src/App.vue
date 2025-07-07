<script setup lang="ts">
import { ref } from 'vue'
import Formulaire from './components/Formulaire.vue'
import PreviewMarkdown from './components/PreviewMarkdown.vue'
import Autocomplete from './components/Autocomplete.vue'

const showPreview = ref<boolean>(false)

// function toggleView(): void {
//   showPreview.value = !showPreview.value
// }
</script>

<template>
  <div class="container">
    <h1>Modalia - Générateur de modalités en PDF et .docx</h1>
    <router-view />
  </div>
</template>