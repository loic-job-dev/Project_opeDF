import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  // Informations générales
  const opName = ref('Nom de l’opération')
  const societyOrganisation = ref('Nom de l’entreprise organisatrice')
  const judiciaryType = ref('SAS')
  const societyAddress = ref('22 avenue Lionel Terray, 69330 Jonage')
  const rcsNumber = ref('RCS 418 915 138')
  const capital = ref('296 000 €')
  const websiteUrl = ref('https://www.exemple-offre.fr')
  const startDate = ref('2025-06-01') // format ISO pour input date
  const endDate = ref('2025-07-31')
  const participationEndDate = ref ('15 jours après l\'achat')
  const geographicZone = ref('France métropolitaine')

  // Conditions de participation
  const targetAudience = ref('Personnes physiques majeures résidant en France métropolitaine')
  const participationLimit = ref('1 participation par foyer ou adresse email')
  const restrictions = ref('Salariés de l’entreprise organisatrice exclus')
  const concernedProducts = ref('3 pots de peinture Dulux Valentine')
  const purchaseMode = ref('Achat en magasin ou en ligne sur le site partenaire')

  // Justificatifs requis
  const proofType = ref('Ticket de caisse ou facture + codes-barres')
  const numberOfProofs = ref('3')
  const proofDetails = ref('Entourer la date, les produits éligibles et les montants')
  const submissionMethod = ref('Soumission en ligne via le site de l’opération')

  // Remboursement / récompense
  const refundType = ref('Remboursement par virement bancaire')
  const refundConditions = ref('100% du prix du produit le moins cher acheté')
  const refundDelay = ref('1 à 8 semaines après validation')
  const refundLimits = ref('1 remboursement par foyer sur la durée de l’opération')

  // Contact et service client
  const contactAddress = ref('Promodev – BP 82 110 – 13847 Vitrolles Cedex')
  const contactEmail = ref('contact@offre-promo.fr')
  const contactPhone = ref('09 70 82 00 58')
  const contactFormUrl = ref('https://www.exemple-offre.fr/contact')

  // Données personnelles / RGPD
  const dpoEmail = ref('dpo@promo.dev')
  const privacyPolicyUrl = ref('https://www.exemple-offre.fr/politique-confidentialite')
  const dataPurpose = ref('Gestion de l’opération promotionnelle et traitement des remboursements')
  const dataRetention = ref('3 ans après la fin de l’opération')
  const marketingConsent = ref('Possibilité d’envoi de newsletter si consentement donné')

  return {
    opName,
    societyOrganisation,
    judiciaryType,
    societyAddress,
    rcsNumber,
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
