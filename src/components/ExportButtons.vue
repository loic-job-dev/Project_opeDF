<script setup lang="ts">
import { ref, watch } from 'vue'
//Il n'existe pas de package officiel de types pour ces modules
// @ts-ignore
import markdownIt from 'markdown-it'
// @ts-ignore
import htmlToPdfmake from 'html-to-pdfmake'
// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake'
// @ts-ignore
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

interface Props {
  markdown: string
  filename?: string
}

const props = defineProps<Props>()

const compiledHtml = ref<string>('')
const md = markdownIt()

watch(() => props.markdown, (newVal) => {
  compiledHtml.value = md.render(newVal || '')
}, { immediate: true })

function generatePdf():void {
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

  pdfMake.createPdf(docDefinition).download(`${props.filename || 'document'}.pdf`)
}


//Commande d'installation :
//npm install html-docx-js


// function generateDocx(): void {
//   if (!compiledHtml.value) {
//     console.warn('[ExportButtons] Pas de contenu HTML à convertir')
//     return
//   }

//   const html = `
//     <html>
//       <head><meta charset="utf-8"></head>
//       <body>${compiledHtml.value}</body>
//     </html>
//   `

//   const blob = htmlDocx.asBlob(html)

//   const link = document.createElement('a')
//   link.href = URL.createObjectURL(blob)
//   link.download = `${props.filename || 'document'}.docx`
//   link.click()

//   // Libérer l'URL après utilisation
//   URL.revokeObjectURL(link.href)
// }


defineExpose({ generatePdf })
//defineExpose({ generatePdf, generateDocx })
</script>

<template>
  <!-- Pas besoin d'afficher quoi que ce soit ici -->
</template>
