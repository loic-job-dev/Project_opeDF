import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAIStore = defineStore('form', () => {
  const prompt = ref('Explique ce qu\'est une modalité de participation en droit français')

  return {
    prompt,
  }
})
