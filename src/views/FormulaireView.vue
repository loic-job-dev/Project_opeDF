<script setup lang="ts">
import Formulaire from '@/components/Formulaire.vue'
import Autocomplete from '@/components/Autocomplete.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPreview() {
    router.push('/preview')
}
function goTotextWithAI() {
    router.push('/withai')
}

</script>

<template>
    <div>
        <button @click="goTotextWithAI">Essai avec IA</button>
    </div>
    <div>
        <button @click="goToPreview">→ Aperçu Markdown</button>
    </div>
    <Formulaire />
    <Autocomplete />
    <div>
        <button @click="goToPreview">→ Aperçu Markdown</button>
    </div>
</template>
