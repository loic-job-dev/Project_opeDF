<script setup>
import { useFormStore } from '../stores/formStore'
const form = useFormStore()
</script>

<template>
  <div class="container">

    <section class="section">
      <h2>Informations générales sur l’opération</h2>

      <div class="form-group">
        <label for="opName">Nom de l’opération :</label>
        <input id="opName" v-model="form.opName" />
      </div>

      <div class="form-group">
        <label for="societyOrganisation">Nom de l’entreprise organisatrice :</label>
        <input id="societyOrganisation" v-model="form.societyOrganisation" />
      </div>

      <div class="form-group">
        <label for="judiciaryType">Type juridique de l’entreprise :</label>
        <input id="judiciaryType" v-model="form.judiciaryType" />
      </div>

      <div class="form-group">
        <label for="societyAddress">Adresse postale du siège social :</label>
        <input id="societyAddress" v-model="form.societyAddress" />
      </div>

      <div class="form-group">
        <label for="rcsNumber">Numéro RCS / SIRET :</label>
        <input id="rcsNumber" v-model="form.rcsNumber" />
      </div>

      <div class="form-group">
        <label for="capital">Capital social :</label>
        <input id="capital" v-model="form.capital" />
      </div>

      <div class="form-group">
        <label for="websiteUrl">URL du site de l’opération :</label>
        <input id="websiteUrl" v-model="form.websiteUrl" />
      </div>

      <div class="form-group date-range">
        <label>Période d'achat :</label>
        <input type="date" v-model="form.startDate" /> au
        <input type="date" v-model="form.endDate" />
      </div>

      <div class="form-group date-range">
        <label for="participationEndDate">Date limite de participation</label>
        <input id="participationEndDate" v-model="form.participationEndDate" />
      </div>

      <div class="form-group">
        <label for="geographicZone">Zone géographique concernée :</label>
        <input id="geographicZone" v-model="form.geographicZone" />
      </div>
    </section>

    <section class="section">
      <h2>Conditions de participation</h2>

      <div class="form-group">
        <label for="targetAudience">Public ciblé :</label>
        <input id="targetAudience" v-model="form.targetAudience" />
      </div>

      <div class="form-group">
        <label for="participationLimit">Nombre maximal de participations :</label>
        <input id="participationLimit" v-model="form.participationLimit" />
      </div>

      <div class="form-group">
        <label for="restrictions">Restrictions spécifiques :</label>
        <textarea id="restrictions" v-model="form.restrictions" rows="5"></textarea>
      </div>

      <div class="form-group">
        <label for="concernedProducts">Produits concernés :</label>
        <input id="concernedProducts" v-model="form.concernedProducts" />
      </div>

      <div class="form-group">
        <label for="purchaseMode">Mode d’achat :</label>
        <input id="purchaseMode" v-model="form.purchaseMode" />
      </div>
    </section>

    <section class="section">
      <h2>Justificatifs requis</h2>

      <div class="form-group">
        <label for="proofType">Type de preuve d’achat :</label>
        <input id="proofType" v-model="form.proofType" />
      </div>

      <div class="form-group">
        <label for="numberOfProofs">Nombre de justificatifs demandés :</label>
        <input id="numberOfProofs" v-model="form.numberOfProofs" />
      </div>

      <div class="form-group">
        <label for="proofDetails">Informations à entourer :</label>
        <textarea id="proofDetails" v-model="form.proofDetails" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label for="submissionMethod">Mode de soumission :</label>
        <input id="submissionMethod" v-model="form.submissionMethod" />
      </div>
    </section>

    <section class="section">
      <h2>Remboursement / récompense</h2>

      <div class="form-group">
        <label for="refundType">Type de remboursement :</label>
        <input id="refundType" v-model="form.refundType" />
      </div>

      <div class="form-group">
        <label for="refundConditions">Conditions de calcul :</label>
        <textarea id="refundConditions" v-model="form.refundConditions" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label for="refundDelay">Délai estimé :</label>
        <input id="refundDelay" v-model="form.refundDelay" />
      </div>

      <div class="form-group">
        <label for="refundLimits">Limites de remboursement :</label>
        <textarea id="refundLimits" v-model="form.refundLimits" rows="2"></textarea>
      </div>
    </section>

    <section class="section">
      <h2>Contact et service client</h2>

      <div class="form-group">
        <label for="contactAddress">Adresse postale :</label>
        <input id="contactAddress" v-model="form.contactAddress" />
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
        <label for="contactFormUrl">Formulaire de contact (URL) :</label>
        <input id="contactFormUrl" v-model="form.contactFormUrl" />
      </div>
    </section>

    <section class="section">
      <h2>Données personnelles / RGPD</h2>

      <div class="form-group">
        <label for="dpoEmail">Email du DPO / RGPD :</label>
        <input id="dpoEmail" type="email" v-model="form.dpoEmail" />
      </div>

      <div class="form-group">
        <label for="privacyPolicyUrl">URL vers la politique de confidentialité :</label>
        <input id="privacyPolicyUrl" v-model="form.privacyPolicyUrl" />
      </div>

      <div class="form-group">
        <label for="dataPurpose">Finalité du traitement :</label>
        <textarea id="dataPurpose" v-model="form.dataPurpose" rows="2"></textarea>
      </div>

      <div class="form-group">
        <label for="dataRetention">Durée de conservation des données :</label>
        <input id="dataRetention" v-model="form.dataRetention" />
      </div>

      <div class="form-group">
        <label for="marketingConsent">Consentement marketing / newsletter :</label>
        <textarea id="marketingConsent" v-model="form.marketingConsent" rows="2"></textarea>
      </div>
    </section>
  </div>
</template>

