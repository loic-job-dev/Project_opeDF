<script setup lang="ts">
import Formulaire from '@/components/Formulaire.vue'
import Autocomplete from '@/components/Autocomplete.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPreview() {
  router.push('/preview')
}
function goToForm() {
  router.push('/formulaire')
}

</script>

<template>
  <div>
    <button @click="goToPreview">→ Aperçu Markdown</button>
  </div>
  <div>
    <button @click="goToForm">← Retour au formulaire</button>
  </div>
  <div>Page de test avec IA</div>
</template>
