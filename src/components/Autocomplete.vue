<script setup>
import { ref, watch } from 'vue'
import { useFormStore } from '../stores/formStore'
import { getCompanyBySiret } from '../lib/api'
import { legalCategories } from '../lib/legalTypes'

const form = useFormStore()

watch(() => form.siretNumber, async (newSiret) => {
    //Un numéro Siret étant toujours composé de 14 chiffres :
    if (newSiret && newSiret.length === 14) {
        try {
            const etab = await getCompanyBySiret(newSiret)
            form.societyOrganisation = etab.uniteLegale.denominationUniteLegale || ''
            form.judiciaryType = legalCategories[etab.uniteLegale.categorieJuridiqueUniteLegale] || etab.uniteLegale.categorieJuridiqueUniteLegale || ''
            form.societyAddress = `${etab.adresseEtablissement.numeroVoieEtablissement || ''} ${etab.adresseEtablissement.typeVoieEtablissement || ''} ${etab.adresseEtablissement.libelleVoieEtablissement || ''} ${etab.adresseEtablissement.codePostalEtablissement || ''} ${etab.adresseEtablissement.libelleCommuneEtablissement || ''}`.trim()
            form.rcsNumber = etab.siren || ''
            form.capital = '' // L’API ne fournit pas directement cette info

        } catch (error) {
            console.error('Erreur lors de la récupération du SIRET', error)
        }
    }
}, { immediate: true }) // déclenche aussi à l’init si déjà rempli
</script>


<template>
</template>
