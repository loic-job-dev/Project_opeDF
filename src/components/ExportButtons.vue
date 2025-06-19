<script setup>
import { ref, watch } from 'vue'
import markdownIt from 'markdown-it'
import htmlToPdfmake from 'html-to-pdfmake'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs
// Définit Roboto comme police par défaut, une modification peut créer des erreurs selon la police
pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf',
  }
}

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

watch(() => props.markdown, (newVal) => {
  compiledHtml.value = md.render(newVal || '')
}, { immediate: true })

function generatePdf() {
  if (!compiledHtml.value) {
    console.warn('[ExportButtons] Pas de contenu HTML à convertir')
    return
  }
  // Convertit le HTML en contenu compatible pdfMake
  const pdfContent = htmlToPdfmake(compiledHtml.value)

  const docDefinition = {
    content: pdfContent,
    defaultStyle: {
      fontSize: 12,
      font: 'Roboto',
    },
    pageMargins: [40, 60, 40, 60], // marges gauche, haut, droite, bas
  }

  pdfMake.createPdf(docDefinition).download(`${props.filename}.pdf`)
}

defineExpose({ generatePdf })
</script>

<template>
  <!-- Pas besoin d'afficher quoi que ce soit ici -->
</template>
