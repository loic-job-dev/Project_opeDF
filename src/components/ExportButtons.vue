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
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from 'docx'
import { saveAs } from 'file-saver'
import TurndownService from 'turndown'



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


//Génération de .docx
const turndownService = new TurndownService()


function generateDocx() {
  if (!compiledHtml.value) {
    console.warn('[ExportButtons] Pas de contenu HTML à convertir')
    return
  }

  // Convertit le HTML compilé en markdown brut
  const markdownText = turndownService.turndown(compiledHtml.value)

  // Transforme chaque ligne du markdown en bloc docx
  const lines = markdownText.split('\n')
  const docParagraphs: Paragraph[] = []

  for (const line of lines) {
    if (line.startsWith('# ')) {
      docParagraphs.push(
        new Paragraph({
          text: line.replace('# ', ''),
          heading: HeadingLevel.HEADING_1,
        })
      )
    } else if (line.startsWith('## ')) {
      docParagraphs.push(
        new Paragraph({
          text: line.replace('## ', ''),
          heading: HeadingLevel.HEADING_2,
        })
      )
    } else if (line.startsWith('- ')) {
      docParagraphs.push(
        new Paragraph({
          text: line.replace('- ', '• '),
        })
      )
    } else {
      docParagraphs.push(
        new Paragraph({
          children: [new TextRun(line)],
        })
      )
    }
  }

  const doc = new Document({
    sections: [
      {
        children: docParagraphs,
      },
    ],
  })

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${props.filename || 'document'}.docx`)
  })
}


//defineExpose({ generatePdf })
defineExpose({ generatePdf, generateDocx })
</script>

<template>
  <!-- Pas besoin d'afficher quoi que ce soit ici -->
</template>
