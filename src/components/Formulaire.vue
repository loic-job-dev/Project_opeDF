<script setup>
import { useFormStore } from '../stores/formStore'
const form = useFormStore()
</script>

<template>
  <h1>OpéDF, l'outil de génération de PDF destiné aux opés</h1>

  <section>
    <h2>Informations générales sur l’opération</h2>

    <label>Nom de l’opération :</label>
    <input v-model="form.opName" />
    <p>{{ form.opName }}</p>

    <label>Nom de l’entreprise organisatrice :</label>
    <input v-model="form.societyOrganisation" />
    <p>{{ form.societyOrganisation }}</p>

    <label>Type juridique de l’entreprise :</label>
    <input v-model="form.judiciaryType" />
    <p>{{ form.judiciaryType }}</p>

    <label>Adresse postale du siège social :</label>
    <input v-model="form.societyAddress" />
    <p>{{ form.societyAddress }}</p>

    <label>Numéro RCS / SIRET :</label>
    <input v-model="form.rcsNumber" />
    <p>{{ form.rcsNumber }}</p>

    <label>Capital social :</label>
    <input v-model="form.capital" />
    <p>{{ form.capital }}</p>

    <label>URL du site de l’opération :</label>
    <input v-model="form.websiteUrl" />
    <p>{{ form.websiteUrl }}</p>

    <label>Période de validité :</label>
    <div>
      <input type="date" v-model="form.startDate" /> au
      <input type="date" v-model="form.endDate" />
    </div>
    <p>{{ form.startDate }} – {{ form.endDate }}</p>

    <label>Zone géographique concernée :</label>
    <input v-model="form.geographicZone" />
    <p>{{ form.geographicZone }}</p>
  </section>

  <section>
    <h2>Conditions de participation</h2>

    <label>Public ciblé :</label>
    <input v-model="form.targetAudience" />
    <p>{{ form.targetAudience }}</p>

    <label>Nombre maximal de participations :</label>
    <input v-model="form.participationLimit" />
    <p>{{ form.participationLimit }}</p>

    <label>Restrictions spécifiques :</label>
    <textarea v-model="form.restrictions" rows="5" />
    <p>{{ form.restrictions }}</p>

    <label>Produits concernés :</label>
    <input v-model="form.concernedProducts" />
    <p>{{ form.concernedProducts }}</p>

    <label>Mode d’achat :</label>
    <input v-model="form.purchaseMode" />
    <p>{{ form.purchaseMode }}</p>
  </section>

  <section>
    <h2>Justificatifs requis</h2>

    <label>Type de preuve d’achat :</label>
    <input v-model="form.proofType" />
    <p>{{ form.proofType }}</p>

    <label>Nombre de justificatifs demandés :</label>
    <input v-model="form.numberOfProofs" />
    <p>{{ form.numberOfProofs }}</p>

    <label>Informations à entourer :</label>
    <textarea v-model="form.proofDetails" rows="3" />
    <p>{{ form.proofDetails }}</p>

    <label>Mode de soumission :</label>
    <input v-model="form.submissionMethod" />
    <p>{{ form.submissionMethod }}</p>
  </section>

  <section>
    <h2>Remboursement / récompense</h2>

    <label>Type de remboursement :</label>
    <input v-model="form.refundType" />
    <p>{{ form.refundType }}</p>

    <label>Conditions de calcul :</label>
    <textarea v-model="form.refundConditions" rows="3" />
    <p>{{ form.refundConditions }}</p>

    <label>Délai estimé :</label>
    <input v-model="form.refundDelay" />
    <p>{{ form.refundDelay }}</p>

    <label>Limites de remboursement :</label>
    <textarea v-model="form.refundLimits" rows="2" />
    <p>{{ form.refundLimits }}</p>
  </section>

  <section>
    <h2>Contact et service client</h2>

    <label>Adresse postale :</label>
    <input v-model="form.contactAddress" />
    <p>{{ form.contactAddress }}</p>

    <label>Email de contact :</label>
    <input type="email" v-model="form.contactEmail" />
    <p>{{ form.contactEmail }}</p>

    <label>Téléphone :</label>
    <input v-model="form.contactPhone" />
    <p>{{ form.contactPhone }}</p>

    <label>Formulaire de contact (URL) :</label>
    <input v-model="form.contactFormUrl" />
    <p>{{ form.contactFormUrl }}</p>
  </section>

  <section>
    <h2>Données personnelles / RGPD</h2>

    <label>Email du DPO / RGPD :</label>
    <input type="email" v-model="form.dpoEmail" />
    <p>{{ form.dpoEmail }}</p>

    <label>URL vers la politique de confidentialité :</label>
    <input v-model="form.privacyPolicyUrl" />
    <p>{{ form.privacyPolicyUrl }}</p>

    <label>Finalité du traitement :</label>
    <textarea v-model="form.dataPurpose" rows="2" />
    <p>{{ form.dataPurpose }}</p>

    <label>Durée de conservation des données :</label>
    <input v-model="form.dataRetention" />
    <p>{{ form.dataRetention }}</p>

    <label>Consentement marketing / newsletter :</label>
    <textarea v-model="form.marketingConsent" rows="2" />
    <p>{{ form.marketingConsent }}</p>
  </section>
</template>
