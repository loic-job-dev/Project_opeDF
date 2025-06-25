<script setup lang="ts">
import { ref } from 'vue'
import { getCompletion } from '@/lib/api'
import { useAIStore } from '@/stores/aiStore'

const aiDatas = useAIStore()

const response = ref('Chargement...')

async function askAI() {
  response.value = await getCompletion(aiDatas.prompt)
}
</script>

<template>
  <div>
    <label for="prompt">Votre demande :</label>
    <textarea
      id="prompt"
      v-model="aiDatas.prompt"
      rows="4"
      cols="50"
      placeholder="Entrez votre question ici"
    ></textarea>
  </div>
  <button @click="askAI">Interroger Chat-GPT</button>
  <p>{{ response }}</p>
</template>