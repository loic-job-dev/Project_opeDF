<script setup lang="ts">
import DataFetcher from '@/components/DataFetcher.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPreview() {
  router.push('/preview')
}
function goToForm() {
  router.push('/formulaire')
}

</script>

<template>
  <div>
    <button @click="goToForm">Version formulaire</button>
  </div>
  <DataFetcher/>
</template>
