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
    <div class = "m-3">
        <button @click="goTotextWithAI">Essai avec IA</button>
    </div>
    <div class = "m-3">
        <button @click="goToPreview">→ Aperçu avant édition</button>
    </div>
    <Formulaire />
    <Autocomplete />
    <div class = "m-3">
        <button @click="goToPreview">→ Aperçu avant édition</button>
    </div>
</template>
