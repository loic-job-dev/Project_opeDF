<script setup>
import { computed } from 'vue'
import { useFormStore } from '../stores/formStore'

const form = useFormStore()

const markdown = computed(() => `
## ${form.opName}

**Entreprise organisatrice :** ${form.societyOrganisation}  
**Statut juridique :** ${form.judiciaryType}  
**Adresse :** ${form.societyAddress}  
**RCS / SIRET :** ${form.rcsNumber}  
**Capital :** ${form.capital}  
**Site web :** ${form.websiteUrl}  
**Période :** du ${form.startDate} au ${form.endDate}  
**Zone concernée :** ${form.geographicZone}

---

### Conditions de participation

- Public ciblé : ${form.targetAudience}
- Limite de participation : ${form.participationLimit}
- Restrictions : ${form.restrictions}
- Produits concernés : ${form.concernedProducts}
- Mode d’achat : ${form.purchaseMode}

---

### Justificatifs requis

- Type : ${form.proofType}
- Nombre : ${form.numberOfProofs}
- Détails à entourer : ${form.proofDetails}
- Mode de soumission : ${form.submissionMethod}

---

### Remboursement / Récompense

- Type : ${form.refundType}
- Conditions : ${form.refundConditions}
- Délai : ${form.refundDelay}
- Limites : ${form.refundLimits}

---

### Contact / SAV

- Adresse postale : ${form.contactAddress}
- Email : ${form.contactEmail}
- Téléphone : ${form.contactPhone}
- Formulaire : ${form.contactFormUrl}

---

### Données personnelles / RGPD

- Email DPO : ${form.dpoEmail}
- Politique de confidentialité : ${form.privacyPolicyUrl}
- Finalité du traitement : ${form.dataPurpose}
- Durée de conservation : ${form.dataRetention}
- Consentement marketing : ${form.marketingConsent}
`)
</script>

<template>
  <section class="preview-markdown">
    <h2>Aperçu Markdown</h2>
    <pre>{{ markdown }}</pre>
  </section>
</template>

<style scoped>
.preview-markdown {
  background-color: #f0f0f0;
  color: #333;
  padding: 1rem;
  white-space: pre-wrap;
  font-family: monospace;
}
</style>
