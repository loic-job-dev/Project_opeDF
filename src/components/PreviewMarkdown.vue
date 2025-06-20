<script setup>
import { computed, ref } from 'vue'
import { useFormStore } from '../stores/formStore'
import ExportButtons from './ExportButtons.vue'

const form = useFormStore()

// Construire toujours une string valide, même si certaines données sont absentes
const markdown = computed(() => {
  return `
### **Conditions générales de participation**

La présente opération **« ${form.opName || ''} »**, organisée par **${form.societyOrganisation || ''}**, une société de type **${form.judiciaryType || ''}** dont le siège social est situé à **${form.societyAddress || ''}**, est ouverte à toute personne physique majeure résidant en France métropolitaine.

Une seule participation par foyer (même nom, même adresse postale et/ou email) est autorisée pour toute la durée de l’opération, pour un achat compris entre le **${form.startDate || ''}** et le **${form.endDate || ''}**, sur la zone géographique suivante : **${form.geographicZone || ''}**.

La date limite de participation est fixée à l'échéance suivante : **« ${form.participationEndDate || ''} »**.

La participation doit être personnelle. Il est interdit de participer via plusieurs identités, adresses électroniques ou coordonnées bancaires.

---

### **Modalités de participation**

Pour participer à cette opération, le participant devra faire un achat selon le mode d’achat suivant : **${form.purchaseMode || ''}**, portant sur les produits concernés : **${form.concernedProducts || ''}**, durant la période mentionnée ci-dessus.

Le nombre maximal de participations autorisé est de **${form.participationLimit || ''}** par participant.

Le participant devra ensuite compléter le formulaire en ligne accessible à l’adresse **${form.websiteUrl || ''}**, fournir une preuve d’achat conforme, et respecter les restrictions spécifiques suivantes :  
**${form.restrictions || ''}**

---

### **Justificatifs à fournir**

Le participant devra fournir une preuve d’achat complète, lisible et nominative, comportant les éléments suivants à entourer :  
**${form.proofDetails || ''}**

Les justificatifs demandés sont au nombre de **${form.numberOfProofs || ''}**, de type : **${form.proofType || ''}**.

Le mode de soumission des justificatifs est : **${form.submissionMethod || ''}**.

Toute participation incomplète, illisible, erronée ou non conforme aux modalités sera rejetée.

---

### **Remboursement / Récompense**

Sous réserve de la conformité du dossier, le remboursement ou la récompense (type : **${form.refundType || ''}**) sera effectué selon les conditions de calcul suivantes :  
**${form.refundConditions || ''}**

Le délai estimé pour le remboursement est de **${form.refundDelay || ''}**.

Les limites de remboursement applicables sont :  
**${form.refundLimits || ''}**

Le participant recevra un email confirmant la bonne prise en charge de sa participation.

---

### **Responsabilité – Internet**

La société organisatrice décline toute responsabilité en cas de :

* Problèmes de connexion internet
* Erreurs de téléchargement ou de formulaire
* Pertes ou retards liés à la transmission électronique des données

Le participant est réputé informé des risques liés à l’utilisation d’internet.

---

### **Protection des données personnelles**

Conformément à la loi n°78-17 du 6 janvier 1978 modifiée et au Règlement (UE) 2016/679 (RGPD), chaque participant dispose des droits suivants sur ses données personnelles : accès, rectification, suppression, limitation, opposition et portabilité.

Les données sont nécessaires au traitement de la participation et seront conservées pendant une durée maximale de **${form.dataRetention || ''}** après la fin de l’opération.

Pour toute demande liée aux données personnelles, vous pouvez contacter le DPO à l’adresse email suivante : **${form.dpoEmail || ''}**, ou consulter la politique de confidentialité disponible ici : **${form.privacyPolicyUrl || ''}**.

Le traitement des données a pour finalité suivante :  
**${form.dataPurpose || ''}**

Le consentement marketing / newsletter est détaillé ici :  
**${form.marketingConsent || ''}**

---

### **Contact et service client**

Pour toute question relative à l’opération, vous pouvez contacter le service client à l’adresse postale suivante :  
**${form.contactAddress || ''}**,  
par email : **${form.contactEmail || ''}**,  
par téléphone : **${form.contactPhone || ''}**,  
ou via le formulaire de contact disponible à l’URL : **${form.contactFormUrl || ''}**.

---

### **Réclamations / CNIL**

Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL via son site internet : [www.cnil.fr](https://www.cnil.fr).

---

### **Validité des modalités**

La participation à cette opération implique l’acceptation pleine et entière des présentes modalités.

Toute réclamation devra être formulée dans un délai d’un (1) mois après la clôture de l’offre.

En cas de litige, seule la version des modalités affichée sur le site officiel de l’opération fait foi.
  `.trim()
})

const exportRef = ref(null)

function exportPdf() {
  if (!exportRef.value) {
    console.warn('ExportButtons component not ready')
    return
  }
  //function generatePdf() declared in ExportButtons.vue
  exportRef.value.generatePdf()
}
</script>

<template>
  <section class="preview-markdown" ref="markdownRef">
    <h2>Aperçu Markdown</h2>
    <pre>{{ markdown }}</pre>

    <!-- ExportButtons ne rend rien dans le DOM -->
    <ExportButtons
      ref="exportRef"
      :markdown="markdown"
      :filename="form.opName || 'document'"
    />

    <button @click="exportPdf">📄 Générer le PDF</button>
  </section>
</template>