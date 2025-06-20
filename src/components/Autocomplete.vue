<script setup>
import { ref, watch } from 'vue'
import { useFormStore } from '../stores/formStore'
import { getCompanyBySiret } from '../lib/api'
import { legalCategories } from '../lib/legalTypes'
import Typeahead from 'vue3-simple-typeahead'

const form = useFormStore()
const company = ref(null)

watch(() => form.siretNumber, async (newSiret) => {
    if (newSiret && newSiret.length === 14) {
        try {
            const etab = await getCompanyBySiret(newSiret)
            company.value = etab
            console.log('Entreprise :', etab.uniteLegale.denominationUniteLegale)
            form.societyOrganisation = etab.uniteLegale.denominationUniteLegale || ''
            form.judiciaryType = legalCategories[etab.uniteLegale.categorieJuridiqueUniteLegale] || etab.uniteLegale.categorieJuridiqueUniteLegale || ''
            form.societyAddress = `${etab.adresseEtablissement.numeroVoieEtablissement || ''} ${etab.adresseEtablissement.typeVoieEtablissement || ''} ${etab.adresseEtablissement.libelleVoieEtablissement || ''} ${etab.adresseEtablissement.codePostalEtablissement || ''} ${etab.adresseEtablissement.libelleCommuneEtablissement || ''}`.trim()
            form.rcsNumber = etab.siren || ''
            form.capital = '' // L’API ne fournit pas directement cette info

        } catch (error) {
            console.error('Erreur lors de la récupération du SIRET', error)
            company.value = null
        }
    }
}, { immediate: true }) // déclenche aussi à l’init si déjà rempli
</script>


<template>
</template>
