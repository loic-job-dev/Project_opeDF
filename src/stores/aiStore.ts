import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAIStore = defineStore('ai', () => {
  const prompt = ref('')
  const response = ref('Chargement...')
  const messages = ref<{ role: string; content: string }[]>([
    { role: 'user', content: prompt.value }
  ])

  return {
    prompt,
    response,
    messages,
  }
})

