<script setup lang="ts">
import { ref, computed } from 'vue'
import { getCompletion } from '@/lib/api'
import { useAIStore } from '@/stores/aiStore'
import ExportButtons from './ExportButtons.vue'

const aiDatas = useAIStore()
const isLoading = ref(false)

////Ajout pour l'export en PDF et docx

// 🧠 Utiliser uniquement la dernière réponse de l'assistant
const markdown = computed(() => {
  const lastAssistantMsg = [...aiDatas.messages].reverse().find(msg => msg.role === 'assistant')
  return lastAssistantMsg?.content || ''
})

// Référence vers le composant d’export
const exportRef = ref<InstanceType<typeof ExportButtons> | null>(null)

function exportPdf(): void {
  if (!exportRef.value) {
    console.warn('ExportButtons component not ready')
    return
  }
  exportRef.value.generatePdf()
}

function exportDocx(): void {
  if (!exportRef.value) {
    console.warn('ExportButtons component not ready')
    return
  }
  exportRef.value.generateDocx()
}
//////////

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
  <!-- Affichage des messages s'il existent -->
  <div class="container tchat-bloc mt-4 rounded-4" v-if="aiDatas.messages.some(msg => msg.content && msg.content.trim() !== '')">
    <div class="row">
      <template v-for="(msg, index) in aiDatas.messages" :key="index">
        <div v-if="msg.content && msg.content.trim() !== ''">
          <h5 v-if="msg.showRoleLabel">
            {{ msg.role === 'user' ? '👤 Vous' : '🤖 Assistant' }}
          </h5>
          <p v-if="msg.role === 'user'" class="p-2">{{ msg.content }}</p>
          <pre v-if="msg.role === 'assistant'" class="preview-markdown p-2 rounded">
          {{ msg.content }}
        </pre>
        </div>
      </template>
    </div>
  </div>
  <!-- Zone de saisie -->
  <div class="container mt-2">
    <div class="row">
      <label class="col-2" for="prompt">Votre demande :</label>
      <textarea class="col-10" id="prompt" v-model="aiDatas.prompt" rows="4" cols="50"
        placeholder="Veuillez entrer les informations dont vous disposez"></textarea>
    </div>
    <div class="row d-flex justify-content-center">
      <button class="col-10 m-3" @click="askAI" :disabled="isLoading">
        {{ isLoading ? 'Chargement...' : 'Obtenir des modalités avec l\'IA' }}
      </button>
    </div>
    <!-- Composant Export -->
    <div class="row">
      <ExportButtons ref="exportRef" :markdown="markdown" filename="modalites-operation" />
      <div class="col-6 d-flex justify-content-center">
        <button class="m-3" @click="exportPdf">📄 Générer en PDF</button>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <button class="m-3" @click="exportDocx">📝 Générer en .docx</button>
      </div>
    </div>
  </div>
</template>