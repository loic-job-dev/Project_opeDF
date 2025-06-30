import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAIStore = defineStore('ai', () => {
  const prompt = ref('Explique ce qu\'est une modalité de participation en droit français')
  const response = ref('Chargement...')

  return {
    prompt,
    response,
  }
})

