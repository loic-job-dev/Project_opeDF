<script setup lang="ts">
import Formulaire from '@/components/Formulaire.vue'
import Autocomplete from '@/components/Autocomplete.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPreview() {
  router.push('/preview')
}


</script>

<template>
    <button @click="goToPreview">→ Aperçu Markdown</button>
    <Formulaire />
    <Autocomplete />
    <button @click="goToPreview">→ Aperçu Markdown</button>
</template>
