<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'

const form = useFormStore()

function onSiretInput(event: Event) {
  const target = event.target as HTMLInputElement
  const cleaned = target.value.replace(/\D/g, '')
  form.siretNumber = cleaned
}
</script>

<template>
  <div class="container">
    <section class="section">
      <h2>Informations sur l’opération</h2>

      <div class="form-group">
        <label for="opName">Nom de l’opération :</label>
        <input id="opName" v-model="form.opName" />
      </div>

      <div class="form-group">
        <label for="offerTitle">Titre de l'offre :</label>
        <input id="offerTitle" v-model="form.offerTitle" />
      </div>

      <div class="form-group">
        <label for="offerType">Type d'offre :</label>
        <input id="offerType" v-model="form.offerType" />
      </div>

      <div class="form-group">
        <label for="offerMechanism">Mécanisme de l'offre :</label>
        <input id="offerMechanism" v-model="form.offerMechanism" />
      </div>

      <div class="form-group">
        <label for="siretNumber">Numéro Siret :</label>
        <input id="siretNumber" v-model="form.siretNumber" @input="onSiretInput" inputmode="numeric" />
      </div>

      <div class="form-group">
        <label for="societyOrganisation">Nom de l'entreprise :</label>
        <input id="societyOrganisation" v-model="form.societyOrganisation" />
      </div>

      <div class="form-group">
        <label for="judiciaryType">Type juridique :</label>
        <input id="judiciaryType" v-model="form.judiciaryType" />
      </div>

      <div class="form-group">
        <label for="societyAddress">Adresse du siège :</label>
        <input id="societyAddress" v-model="form.societyAddress" />
      </div>

      <div class="form-group">
        <label for="rcsNumber">Numéro RCS :</label>
        <input id="rcsNumber" v-model="form.rcsNumber" />
      </div>

      <div class="form-group">
        <label for="rcsCity">Ville RCS :</label>
        <input id="rcsCity" v-model="form.rcsCity" />
      </div>

      <div class="form-group">
        <label for="socialCapital">Capital social :</label>
        <input id="socialCapital" v-model="form.socialCapital" />
      </div>

      <div class="form-group">
        <label for="websiteUrl">Site de l’opération :</label>
        <input id="websiteUrl" v-model="form.websiteUrl" />
      </div>

      <div class="form-group">
        <label for="startDate">Début :</label>
        <input type="date" id="startDate" v-model="form.startDate" />
      </div>

      <div class="form-group">
        <label for="endDate">Fin :</label>
        <input type="date" id="endDate" v-model="form.endDate" />
      </div>

      <div class="form-group">
        <label for="participationEndDate">Date limite de participation :</label>
        <input id="participationEndDate" v-model="form.participationEndDate" />
      </div>

      <div class="form-group">
        <label for="claimDeadline">Date limite de réclamation :</label>
        <input id="claimDeadline" v-model="form.claimDeadline" />
      </div>

      <div class="form-group">
        <label for="geographicZone">Zone géographique :</label>
        <input id="geographicZone" v-model="form.geographicZone" />
      </div>

      <div class="form-group">
        <label for="targetAudience">Public ciblé :</label>
        <input id="targetAudience" v-model="form.targetAudience" />
      </div>

      <div class="form-group">
        <label for="participationLimit">Limite de participation :</label>
        <input id="participationLimit" v-model="form.participationLimit" />
      </div>

      <div class="form-group">
        <label for="participationLimitDetails">Détails des limites de participation :</label>
        <input id="participationLimitDetails" v-model="form.participationLimitDetails" />
      </div>
      

      <div class="form-group">
        <label for="restrictions">Restrictions :</label>
        <textarea id="restrictions" v-model="form.restrictions" />
      </div>

      <div class="form-group">
        <label for="eligibleProducts">Produits concernés :</label>
        <input id="eligibleProducts" v-model="form.eligibleProducts" />
      </div>

      <div class="form-group">
        <label for="eligibleStores">Magasins éligibles :</label>
        <input id="eligibleStores" v-model="form.eligibleStores" />
      </div>

      <div class="form-group">
        <label for="purchaseMode">Mode d'achat :</label>
        <input id="purchaseMode" v-model="form.purchaseMode" />
      </div>

      <div class="form-group">
        <label for="proofType">Type de preuve :</label>
        <input id="proofType" v-model="form.proofType" />
      </div>

      <div class="form-group">
        <label for="numberOfProofs">Nombre de justificatifs :</label>
        <input id="numberOfProofs" v-model="form.numberOfProofs" />
      </div>

      <div class="form-group">
        <label for="proofDetails">Détails des preuves :</label>
        <textarea id="proofDetails" v-model="form.proofDetails" />
      </div>

      <div class="form-group">
        <label for="submissionMethod">Soumission :</label>
        <input id="submissionMethod" v-model="form.submissionMethod" />
      </div>

      <div class="form-group">
        <label for="refundType">Type de remboursement :</label>
        <input id="refundType" v-model="form.refundType" />
      </div>

      <div class="form-group">
        <label for="refundConditions">Conditions :</label>
        <textarea id="refundConditions" v-model="form.refundConditions" />
      </div>

      <div class="form-group">
        <label for="refundDelay">Délai :</label>
        <input id="refundDelay" v-model="form.refundDelay" />
      </div>

      <div class="form-group">
        <label for="refundLimits">Limites :</label>
        <textarea id="refundLimits" v-model="form.refundLimits" />
      </div>

      <div class="form-group">
        <label for="contactAddress">Adresse de contact :</label>
        <input id="contactAddress" v-model="form.contactAddress" />
      </div>

      <div class="form-group">
        <label for="paperAddress">Adresse courrier :</label>
        <input id="paperAddress" v-model="form.paperAddress" />
      </div>

      <div class="form-group">
        <label for="contactEmail">Email de contact :</label>
        <input id="contactEmail" type="email" v-model="form.contactEmail" />
      </div>

      <div class="form-group">
        <label for="contactPhone">Téléphone :</label>
        <input id="contactPhone" v-model="form.contactPhone" />
      </div>

      <div class="form-group">
        <label for="dpoEmail">Email DPO :</label>
        <input id="dpoEmail" v-model="form.dpoEmail" />
      </div>

      <div class="form-group">
        <label for="privacyPolicyUrl">Politique de confidentialité :</label>
        <input id="privacyPolicyUrl" v-model="form.privacyPolicyUrl" />
      </div>

      <div class="form-group">
        <label for="dataPurpose">Finalité des données :</label>
        <textarea id="dataPurpose" v-model="form.dataPurpose" />
      </div>

      <div class="form-group">
        <label for="dataRetention">Durée de conservation des données personnelles :</label>
        <input id="dataRetention" v-model="form.personnalDataRetention" />
      </div>

      <div class="form-group">
        <label for="dataRetention">Durée de conservation des données bancaires + nom + prénom :</label>
        <input id="dataRetention" v-model="form.bankingDataRetention" />
      </div>

      <div class="form-group">
        <label for="marketingConsent">Consentement marketing :</label>
        <textarea id="marketingConsent" v-model="form.marketingConsent" />
      </div>
    </section>
  </div>
</template>
