import { defineStore } from 'pinia'
import { ref } from 'vue'

// Définir le type des messages, y compris showRoleLabel
type Message = {
  role: 'user' | 'assistant'
  content: string
  showRoleLabel?: boolean
}

export const useAIStore = defineStore('ai', () => {
  const prompt = ref('')
  const response = ref('Chargement...')

  // Initialiser les messages avec showRoleLabel: false
  const messages = ref<Message[]>([
    { role: 'assistant', content: prompt.value, showRoleLabel: false }
  ])

  return {
    prompt,
    response,
    messages,
  }
})
