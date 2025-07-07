<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
import ExportButtons from './ExportButtons.vue'

const form = useFormStore()

// Construire toujours une string valide, même si certaines données sont absentes
const markdown = computed<string>(() => {
  return `
# Opération ${form.opName || ''}

## Modalités de l’opération commerciale

L’opération intitulée **« ${form.offerTitle || ''} »**, de type **${form.offerType || ''}**, reposant sur la mécanique suivante : **${form.offerMechanism || ''}**, est organisée par la société **${form.societyOrganisation || ''}**, société de type **${form.judiciaryType || ''}**, au capital social de **${form.socialCapital || ''}**, immatriculée au Registre du Commerce et des Sociétés sous le numéro **${form.rcsNumber || ''}**, à ${form.rcsCity || ''}, dont le siège social est situé au ${form.societyAddress || ''}. Le numéro SIRET de la société est **${form.siretNumber || ''}**.

Le site internet officiel de l’organisateur est accessible à l’adresse suivante : ${form.websiteUrl || ''}.

## Durée de l’opération

Cette opération est valable du **${form.startDate || ''}** au **${form.endDate || ''}** inclus.

La date limite pour participer est fixée au **${form.participationEndDate || ''}** pour les participations en ligne, et au **${form.postEndDate || ''}** pour les participations envoyées par voie postale.

Les demandes de réclamation relatives à cette opération seront acceptées jusqu’au **${form.claimDeadline || ''}**, passé ce délai, aucune contestation ne sera prise en compte.

## Participants concernés

Cette opération est ouverte à **${form.targetAudience || ''}**, résidant dans la zone géographique suivante : **${form.geographicZone || ''}**.

## Conditions de participation

Pour être éligible, chaque participant doit réaliser un achat de **${form.eligibleProducts || ''}** selon les modalités suivantes : **${form.purchaseMode || ''}**, et ce dans l’une des enseignes suivantes : **${form.eligibleStores || ''}**.

Chaque participant ne peut effectuer qu’une seule participation, conformément à la limite suivante : **${form.participationLimit || ''}**. 

Les détails relatifs à ces limitations sont précisés ici : **${form.participationLimitDetails || ''}**.

Par ailleurs, certaines restrictions spécifiques s’appliquent : **${form.restrictions || ''}**.

## Modalités de participation

Pour participer, le candidat devra compléter un formulaire, disponible en version papier ou en ligne, incluant les informations suivantes : **${form.consumerPathDetails || ''}**.

## Justificatifs à fournir

Les participants devront fournir les justificatifs suivants :

- Type : **${form.proofType || ''}**  
- Nombre : **${form.numberOfProofs || ''}**  
- Description détaillée : **${form.proofDetails || ''}**  
- Ces justificatifs devront être originaux ou copies selon : **${form.originalProofsRequired || ''}**  
- Le mode de soumission des justificatifs est : **${form.submissionMethod || ''}**

## Rémunération ou prime

Chaque participant recevra une récompense de type **${form.refundType || ''}**, dont les conditions sont définies ainsi : **${form.refundConditions || ''}**.

Le délai de versement estimé est de **${form.refundDelay || ''}**.

Des limites éventuelles s’appliquent, notamment : **${form.refundLimits || ''}**.

Les frais liés à la participation sont remboursés comme suit : **${form.participationFeeRefund || ''}**.

## Contact

Pour toute question ou demande d’information, vous pouvez contacter l’organisateur :

- Adresse postale : **${form.contactAddress || ''}**  
- Adresse postale pour envoi papier : **${form.paperAddress || ''}**  
- Adresse e-mail : **${form.contactEmail || ''}**  
- Téléphone : **${form.contactPhone || ''}**  
- Formulaire de contact en ligne : **${form.contactFormUrl || ''}**

## Consultation des modalités

Les modalités complètes de l’opération sont consultables à l’adresse suivante : **${form.termsLocation || ''}**. 

Elles sont également relayées via les canaux suivants : **${form.offerPromotionChannels || ''}**.

## Protection des données personnelles

Conformément à la réglementation française et européenne, les données personnelles collectées dans le cadre de cette opération sont traitées par :

- Responsable de traitement : **${form.dataController || ''}**  
- Sous-traitant éventuel : **${form.dataProcessor || ''}**

Pour toute question relative à vos données, vous pouvez contacter le Délégué à la Protection des Données (DPO) à l’adresse suivante : **${form.dpoEmail || ''}**.

La politique de confidentialité est disponible ici : **${form.privacyPolicyUrl || ''}**.

La finalité du traitement est la suivante : **${form.dataPurpose || ''}**.

Les données personnelles seront conservées pendant une durée de **${form.personnalDataRetention || ''}**, et les données bancaires (ainsi que nom et prénom) pendant une durée de **${form.bankingDataRetention || ''}**.

Le consentement explicite du participant est demandé pour l’envoi éventuel de communications marketing, conformément à la réglementation en vigueur : **${form.marketingConsent || ''}**.

## Acceptation des modalités

La participation à cette opération implique l’acceptation pleine, entière et sans réserve des présentes modalités. En cas de litige, les parties s’engagent à privilégier une solution amiable avant toute procédure judiciaire.

  `.trim()
})

const exportRef = ref<InstanceType<typeof ExportButtons> | null>(null)

function exportPdf(): void {
  if (!exportRef.value) {
    console.warn('ExportButtons component not ready')
    return
  }
  //function generatePdf() declared in ExportButtons.vue
  exportRef.value.generatePdf()
}

function exportDocx(): void {
   if (!exportRef.value) {
     console.warn('ExportButtons component not ready')
     return
   }
   exportRef.value.generateDocx()
 }
</script>

<template>
  <section class="tchat-bloc p-4 rounded-4" ref="markdownRef">
    <h2>Aperçu Markdown</h2>
    <pre class="preview-markdown" >{{ markdown }}</pre>

    <ExportButtons
      ref="exportRef"
      :markdown="markdown"
      :filename="form.opName || 'document'"
    />

  </section>
  <div class="container">
    <div class="row">
            <div class="col-6 d-flex justify-content-center">
        <button @click="exportPdf">📄 Générer en PDF</button>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <button @click="exportDocx">📝 Générer en .docx</button>
      </div>
    </div>
  </div>
</template>
