import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const opName = ref('Fête des pères Black & Dekker')
  const offerTitle = ref('Offre spéciale Fête des Pères')
  const offerType = ref('Promotion commerciale')
  const offerMechanism = ref('Achat avec remboursement partiel')
  const siretNumber = ref('123 456 789 00012')
  const societyOrganisation = ref('Black & Decker France SAS')
  const judiciaryType = ref('SAS')
  const societyAddress = ref('12 rue des Entrepreneurs, 75015 Paris')
  const rcsNumber = ref('B 123 456 789')
  const rcsCity = ref('Paris')
  const socialCapital = ref('1 000 000 €')
  const websiteUrl = ref('https://www.blackanddecker.fr')
  const startDate = ref('2025-06-01')
  const endDate = ref('2025-06-30')
  const participationEndDate = ref('2025-06-29')
  const postEndDate = ref('2025-07-05')
  const claimDeadline = ref('2025-07-15')
  const geographicZone = ref('France métropolitaine')

  const targetAudience = ref('Toute personne physique majeure')
  const participationLimit = ref('1 participation par personne')
  const participationLimitDetails = ref('Une seule participation par foyer, même nom et adresse')
  const restrictions = ref('Offre non cumulable avec d’autres promotions')
  const consumerPathDetails = ref('Remplir le formulaire en ligne avec les coordonnées complètes')
  const eligibleProducts = ref('Tous les outils Black & Decker achetés')
  const eligibleStores = ref('Magasins partenaires et site officiel')
  const purchaseMode = ref('Achat en magasin ou en ligne')

  const proofType = ref('Ticket de caisse original')
  const numberOfProofs = ref('1')
  const proofDetails = ref('Ticket avec date d’achat et montant visible')
  const originalProofsRequired = ref('Oui, uniquement les originaux')
  const submissionMethod = ref('Envoi postal ou téléchargement via formulaire web')

  const refundType = ref('Remboursement partiel')
  const refundConditions = ref('10% du montant TTC de l’achat')
  const refundDelay = ref('Sous 6 semaines après réception du dossier complet')
  const refundLimits = ref('Maximum 50 € par participant')
  const participationFeeRefund = ref('Frais de participation non remboursés')

  const contactAddress = ref('Black & Decker SAS, Service Clients, 12 rue des Entrepreneurs, 75015 Paris')
  const paperAddress = ref('Black & Decker SAS, Service Promotions, 12 rue des Entrepreneurs, 75015 Paris')
  const contactEmail = ref('serviceclients@blackanddecker.fr')
  const contactPhone = ref('01 23 45 67 89')
  const contactFormUrl = ref('https://www.blackanddecker.fr/contact')
  const termsLocation = ref('https://www.blackanddecker.fr/conditions-offre')
  const offerPromotionChannels = ref('Site web, réseaux sociaux, newsletters')

  const dataController = ref('Black & Decker SAS')
  const dataProcessor = ref('Prestataire informatique externe')
  const dpoEmail = ref('dpo@blackanddecker.fr')
  const privacyPolicyUrl = ref('https://www.blackanddecker.fr/politique-confidentialite')
  const dataPurpose = ref('Gestion de la participation à l’opération promotionnelle')
  const personnalDataRetention = ref('3 ans à compter de la fin de l’opération')
  const bankingDataRetention = ref('10 ans à compter de la fin de l’opération')
  const marketingConsent = ref('Consentement explicite requis pour recevoir des communications marketing')

  return {
    opName,
    offerTitle,
    offerType,
    offerMechanism,
    siretNumber,
    societyOrganisation,
    judiciaryType,
    societyAddress,
    rcsNumber,
    rcsCity,
    socialCapital,
    websiteUrl,
    startDate,
    endDate,
    participationEndDate,
    postEndDate,
    claimDeadline,
    geographicZone,
    targetAudience,
    participationLimit,
    participationLimitDetails,
    restrictions,
    consumerPathDetails,
    eligibleProducts,
    eligibleStores,
    purchaseMode,
    proofType,
    numberOfProofs,
    proofDetails,
    originalProofsRequired,
    submissionMethod,
    refundType,
    refundConditions,
    refundDelay,
    refundLimits,
    participationFeeRefund,
    contactAddress,
    paperAddress,
    contactEmail,
    contactPhone,
    contactFormUrl,
    termsLocation,
    offerPromotionChannels,
    dataController,
    dataProcessor,
    dpoEmail,
    privacyPolicyUrl,
    dataPurpose,
    personnalDataRetention,
    bankingDataRetention,
    marketingConsent
  }
})
