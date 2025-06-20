<script setup>
import { ref, watch, onMounted } from 'vue'
import { useFormStore } from '../stores/formStore'
import { getCompanyBySiret } from '../lib/api'
import { getOperationElements } from '../lib/api'
import { legalCategories } from '../lib/legalTypes'

const form = useFormStore()

function formatToFrenchDate(dateStr) {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0') // mois indexé à 0
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}

//Autocomplétion à partirt du Siret
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

//Essai d'autocomplétion à partir de l'API Houston
async function loadOperationData() {
    try {
        const data = await getOperationElements()
        form.opName = data.custom.pagetitle

        //texte formaté pour correspondre à une date :
        form.startDate = data.date_debut?.split('T')[0]
        form.endDate = data.date_fin?.split('T')[0]
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
