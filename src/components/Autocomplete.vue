<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useFormStore } from '@/stores/formStore'
import { getCompanyBySiret, getOperationElements, CompanyData, OperationData } from '@/lib/api'
import { legalCategories } from '@/lib/legalTypes'

const form = useFormStore()

function formatToFrenchDate(dateStr: string | undefined): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

//Autocomplétion à partirt du Siret
watch(
  () => form.siretNumber,
  async (newSiret: string) => {
    //Un Siret étant toujours composé de 14 chiffres :
    if (newSiret && newSiret.length === 14) {
      try {
        const etab: CompanyData = await getCompanyBySiret(newSiret)
        console.log('Résultat API SIRET :', etab)
        form.societyOrganisation = etab.uniteLegale.denominationUniteLegale || ''
        form.judiciaryType =
          legalCategories[etab.uniteLegale.categorieJuridiqueUniteLegale || ''] ||
          etab.uniteLegale.categorieJuridiqueUniteLegale ||
          ''
        form.societyAddress = [
          etab.adresseEtablissement.numeroVoieEtablissement || '',
          etab.adresseEtablissement.typeVoieEtablissement || '',
          etab.adresseEtablissement.libelleVoieEtablissement || '',
          etab.adresseEtablissement.codePostalEtablissement || '',
          etab.adresseEtablissement.libelleCommuneEtablissement || ''
        ]
          .filter(Boolean)
          .join(' ')
          .trim()
        form.rcsNumber = etab.siren || ''
        form.capital = '' // Pas dispo dans l’API
      } catch (error) {
        console.error('Erreur lors de la récupération du SIRET', error)
      }
    }
  },
  { immediate: true }  // déclenche aussi à l’init si déjà rempli
)

//Essai d'autocomplétion à partir de l'API Houston
async function loadOperationData(): Promise<void> {
  try {
    const data: OperationData = await getOperationElements()
    form.opName = data.custom.pagetitle

form.startDate = data.date_debut?.split('T')[0] ?? ''
form.endDate = data.date_fin?.split('T')[0] ?? ''
    form.participationEndDate = formatToFrenchDate(data.date_fin_achat)
  } catch (error) {
    console.error('Erreur lors du chargement des données de l’opération', error)
  }
}

onMounted(() => {
  loadOperationData()
})
</script>


<template>
</template>
