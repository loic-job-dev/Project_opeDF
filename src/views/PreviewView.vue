<script setup lang="ts">
import PreviewMarkdown from '@/components/PreviewMarkdown.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToForm() {
  router.push('/formulaire')
}
</script>

<template>
  <PreviewMarkdown />
  <button @click="goToForm">← Retour au formulaire</button>
</template>