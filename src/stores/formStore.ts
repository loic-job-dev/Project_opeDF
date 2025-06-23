import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const opName = ref<string>('Nom de l’opération')
  const societyOrganisation = ref<string>('Nom de l’entreprise organisatrice')
  const judiciaryType = ref<string>('SAS')
  const societyAddress = ref<string>('22 avenue Lionel Terray, 69330 Jonage')
  const rcsNumber = ref<string>('RCS 418 915 138')
  const siretNumber = ref<string>('A remplir pour autocomplétion')
  const capital = ref<string>('296 000 €')
  const websiteUrl = ref<string>('https://www.exemple-offre.fr')
  const startDate = ref<string>('2025-06-01')
  const endDate = ref<string>('2025-07-31')
  const participationEndDate = ref<string>('15 jours après l\'achat')
  const geographicZone = ref<string>('France métropolitaine')

  const targetAudience = ref<string>('Personnes physiques majeures résidant en France métropolitaine')
  const participationLimit = ref<string>('1 participation par foyer ou adresse email')
  const restrictions = ref<string>('Salariés de l’entreprise organisatrice exclus')
  const concernedProducts = ref<string>('3 pots de peinture Dulux Valentine')
  const purchaseMode = ref<string>('Achat en magasin ou en ligne sur le site partenaire')

  const proofType = ref<string>('Ticket de caisse ou facture + codes-barres')
  const numberOfProofs = ref<string>('3')
  const proofDetails = ref<string>('Entourer la date, les produits éligibles et les montants')
  const submissionMethod = ref<string>('Soumission en ligne via le site de l’opération')

  const refundType = ref<string>('Remboursement par virement bancaire')
  const refundConditions = ref<string>('100% du prix du produit le moins cher acheté')
  const refundDelay = ref<string>('1 à 8 semaines après validation')
  const refundLimits = ref<string>('1 remboursement par foyer sur la durée de l’opération')

  const contactAddress = ref<string>('Promodev – BP 82 110 – 13847 Vitrolles Cedex')
  const contactEmail = ref<string>('contact@offre-promo.fr')
  const contactPhone = ref<string>('09 70 82 00 58')
  const contactFormUrl = ref<string>('https://www.exemple-offre.fr/contact')

  const dpoEmail = ref<string>('dpo@promo.dev')
  const privacyPolicyUrl = ref<string>('https://www.exemple-offre.fr/politique-confidentialite')
  const dataPurpose = ref<string>('Gestion de l’opération promotionnelle et traitement des remboursements')
  const dataRetention = ref<string>('3 ans après la fin de l’opération')
  const marketingConsent = ref<string>('Possibilité d’envoi de newsletter si consentement donné')

  return {
    opName,
    societyOrganisation,
    judiciaryType,
    societyAddress,
    rcsNumber,
    siretNumber,
    capital,
    websiteUrl,
    startDate,
    endDate,
    participationEndDate,
    geographicZone,

    targetAudience,
    participationLimit,
    restrictions,
    concernedProducts,
    purchaseMode,

    proofType,
    numberOfProofs,
    proofDetails,
    submissionMethod,

    refundType,
    refundConditions,
    refundDelay,
    refundLimits,

    contactAddress,
    contactEmail,
    contactPhone,
    contactFormUrl,

    dpoEmail,
    privacyPolicyUrl,
    dataPurpose,
    dataRetention,
    marketingConsent
  }
})
