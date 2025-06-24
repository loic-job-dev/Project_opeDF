<script setup lang="ts">
import { ref, onMounted } from 'vue';

const data = ref<any>(null);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await fetch('/.netlify/functions/getData');
    if (!response.ok) throw new Error('Erreur serveur');
    data.value = await response.json();
  } catch (err) {
    error.value = (err as Error).message;
  }
});
</script>

<template>
  <div>
    <h2>Données reçues :</h2>
    <pre>{{ data }}</pre>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
