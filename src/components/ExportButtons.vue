<script setup>
import { ref, watch } from 'vue'
import html2pdf from 'html2pdf.js'
import markdownIt from 'markdown-it'
import { nextTick } from 'vue'

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    default: 'document',
  },
})

const compiledHtml = ref('')
const md = markdownIt()
const previewRef = ref(null)

// Watch sur markdown : recalcul HTML quand markdown change
watch(
  () => props.markdown,
  (newVal) => {
    if (typeof newVal === 'string') {
      compiledHtml.value = md.render(newVal)
    } else {
      console.warn('[ExportButtons] markdown is not a string:', newVal)
      compiledHtml.value = ''
    }
  },
  { immediate: true }
)

async function generatePdf() {
  if (!previewRef.value) {
    console.warn('[ExportButtons] previewRef is null')
    return
  }

  await nextTick()  // Attendre que DOM soit à jour

  html2pdf()
    .set({
      margin: 10,
      filename: `${props.filename}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    })
    .from(previewRef.value)
    .save()
}

defineExpose({ generatePdf })
</script>

<template>
<div ref="previewRef" v-html="compiledHtml" style="background: white; color: black; padding: 10px; border: 1px solid #ccc;"></div>
</template>