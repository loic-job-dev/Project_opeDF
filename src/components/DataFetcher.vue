<script setup lang="ts">
import { ref } from 'vue'
import { getCompletion } from '@/lib/api'
import { useAIStore } from '@/stores/aiStore'

const aiDatas = useAIStore()
const isLoading = ref(false)

async function askAI() {
  const prompt = aiDatas.prompt.trim()
  if (!prompt) return

  // Ajouter le prompt dans l’historique
  aiDatas.messages.push({ role: 'user', content: prompt, showRoleLabel: true })

  // Réinitialiser le champ prompt
  aiDatas.prompt = ''
  isLoading.value = true

  try {
    const reply = await getCompletion(aiDatas.messages)
    aiDatas.messages.push({ role: 'assistant', content: reply, showRoleLabel: true })
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err)
    aiDatas.messages.push({ role: 'assistant', content: '❌ Erreur : ' + errorMessage, showRoleLabel: true })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <div class="chat-box">
      <div v-for="(msg, index) in aiDatas.messages" :key="index" :class="msg.role">
        <strong v-if="msg.showRoleLabel">
          {{ msg.role === 'user' ? '👤 Vous' : '🤖 Assistant' }}
        </strong>
        <p v-if="msg.role === 'user'" >{{ msg.content }}</p>
        <pre v-else>{{ msg.content }}</pre>
      </div>
    </div>

    <label for="prompt">Votre demande :</label>
    <textarea id="prompt" v-model="aiDatas.prompt" rows="4" cols="50"
      placeholder="Veuillez entrer les informations dont vous disposez"></textarea>

    <button @click="askAI" :disabled="isLoading">
      {{ isLoading ? 'Chargement...' : 'Générer les modalités avec l\'IA' }}
    </button>
  </div>
</template>