<script setup lang="ts">
import PreviewMarkdown from '@/components/PreviewMarkdown.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToForm() {
    router.push('/formulaire')
}
function goTotextWithAI() {
    router.push('/withai')
}
</script>

<template>
    <PreviewMarkdown />
    <div>
        <button @click="goToForm">← Retour au formulaire</button>
    </div>
        <div>
        <button @click="goTotextWithAI">Essai avec IA (non fonctionnel, à venir)</button>
    </div>
</template>