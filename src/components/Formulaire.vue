<script setup>
import { ref } from 'vue'

//Informations générales
const opName = ref('Nom de l’opération')
const societyOrganisation = ref('Nom de l’entreprise organisatrice')
const judiciaryType = ref('Type juridique de l’entreprise (SAS, SARL...)')
const societyAddress = ref('Adresse postale du siège social')
const rcsNumber = ref('Numéro RCS / SIRET')
const capital = ref('Capital social')
const websiteUrl = ref('URL du site de l’opération')
const startDate = ref('Date de début')
const endDate = ref('Date de fin')
const geographicZone = ref('Zone géographique concernée')

//Conditions de participation
const targetAudience = ref('Public ciblé (ex : majeurs, domiciliés en France...)')
const participationLimit = ref('Nombre maximal de participations (par foyer, email, IP...)')
const restrictions = ref('Restrictions éventuelles (ex : salariés exclus, achat simultané requis...)')
const concernedProducts = ref('Produits concernés (marques, types, formats...)')
const purchaseMode = ref('Mode d’achat (magasin, en ligne, site spécifique...)')

// Justificatifs requis
const proofType = ref('Type de preuve d’achat (ex : ticket de caisse, code-barres...)')
const numberOfProofs = ref('Nombre de justificatifs demandés')
const proofDetails = ref('Informations à entourer sur les justificatifs')
const submissionMethod = ref('Mode de soumission (en ligne, postal, etc.)')

// Remboursement / récompense
const refundType = ref('Type de remboursement (virement, carte prépayée...)')
const refundConditions = ref('Conditions de calcul du remboursement')
const refundDelay = ref('Délai estimé de remboursement')
const refundLimits = ref('Limites de remboursement par foyer / produit')

// Contact et SAV
const contactAddress = ref('Adresse postale du SAV (si applicable)')
const contactEmail = ref('Email de contact')
const contactPhone = ref('Téléphone de contact')
const contactFormUrl = ref('Lien vers le formulaire de contact')

// Données personnelles / RGPD
const dpoEmail = ref('Email du DPO ou responsable RGPD')
const privacyPolicyUrl = ref('URL vers la politique de confidentialité')
const dataPurpose = ref('Finalité du traitement des données')
const dataRetention = ref('Durée de conservation des données')
const marketingConsent = ref('Mentions spécifiques pour newsletter / marketing')

</script>

<template>
    <section>
        <h2>Informations générales sur l’opération</h2>

        <label>Nom de l’opération : </label>
        <input v-model="opName" />
        <p>{{ opName }}</p>

        <label>Nom de l’entreprise organisatrice : </label>
        <input v-model="societyOrganisation" />
        <p>{{ societyOrganisation }}</p>

        <label>Type juridique de l’entreprise (SAS, SARL...) : </label>
        <input v-model="judiciaryType" />
        <p>{{ judiciaryType }}</p>

        <label>Adresse postale du siège social : </label>
        <input v-model="societyAddress" />
        <p>{{ societyAddress }}</p>

        <label>Numéro RCS / SIRET : </label>
        <input v-model="rcsNumber" />
        <p>{{ rcsNumber }}</p>

        <label>Capital social : </label>
        <input v-model="capital" />
        <p>{{ capital }}</p>

        <label>URL du site de l’opération : </label>
        <input v-model="websiteUrl" />
        <p>{{ websiteUrl }}</p>

        <label>Période de validité : </label>
        <div>
            <input type="date" v-model="startDate" /> au
            <input type="date" v-model="endDate" />
        </div>
        <p>{{ startDate }} – {{ endDate }}</p>

        <label>Zone géographique concernée : </label>
        <input v-model="geographicZone" />
        <p>{{ geographicZone }}</p>
    </section>
    
    <section>
        <h2>Conditions de participation</h2>

        <label>Public ciblé : </label>
        <input v-model="targetAudience" />
        <p>{{ targetAudience }}</p>

        <label>Nombre maximal de participations : </label>
        <input v-model="participationLimit" />
        <p>{{ participationLimit }}</p>

        <label>Restrictions spécifiques : </label>
        <textarea v-model="restrictions" rows="5" />
        <p>{{ restrictions }}</p>

        <label>Produits concernés : </label>
        <input v-model="concernedProducts" />
        <p>{{ concernedProducts }}</p>

        <label>Mode d’achat : </label>
        <input v-model="purchaseMode" />
        <p>{{ purchaseMode }}</p>
    </section>

    <section>
        <h2>Justificatifs requis</h2>

        <label>Type de preuve d’achat</label>
        <input v-model="proofType" />
        <p>{{ proofType }}</p>

        <label>Nombre de justificatifs demandés</label>
        <input v-model="numberOfProofs" />
        <p>{{ numberOfProofs }}</p>

        <label>Informations à entourer</label>
        <textarea v-model="proofDetails" rows="3" />
        <p>{{ proofDetails }}</p>

        <label>Mode de soumission</label>
        <input v-model="submissionMethod" />
        <p>{{ submissionMethod }}</p>
    </section>

    <section>
        <h2>Remboursement / récompense</h2>

        <label>Type de remboursement</label>
        <input v-model="refundType" />
        <p>{{ refundType }}</p>

        <label>Conditions de calcul</label>
        <textarea v-model="refundConditions" rows="3" />
        <p>{{ refundConditions }}</p>

        <label>Délai estimé</label>
        <input v-model="refundDelay" />
        <p>{{ refundDelay }}</p>

        <label>Limites de remboursement</label>
        <textarea v-model="refundLimits" rows="2" />
        <p>{{ refundLimits }}</p>
    </section>

    <section>
        <h2>Contact et service client</h2>

        <label>Adresse postale</label>
        <input v-model="contactAddress" />
        <p>{{ contactAddress }}</p>

        <label>Email de contact</label>
        <input type="email" v-model="contactEmail" />
        <p>{{ contactEmail }}</p>

        <label>Téléphone</label>
        <input v-model="contactPhone" />
        <p>{{ contactPhone }}</p>

        <label>Formulaire de contact (URL)</label>
        <input v-model="contactFormUrl" />
        <p>{{ contactFormUrl }}</p>
    </section>

    <section>
        <h2>Données personnelles / RGPD</h2>

        <label>Email du DPO / RGPD</label>
        <input type="email" v-model="dpoEmail" />
        <p>{{ dpoEmail }}</p>

        <label>URL vers la politique de confidentialité</label>
        <input v-model="privacyPolicyUrl" />
        <p>{{ privacyPolicyUrl }}</p>

        <label>Finalité du traitement</label>
        <textarea v-model="dataPurpose" rows="2" />
        <p>{{ dataPurpose }}</p>

        <label>Durée de conservation des données</label>
        <input v-model="dataRetention" />
        <p>{{ dataRetention }}</p>

        <label>Consentement marketing / newsletter</label>
        <textarea v-model="marketingConsent" rows="2" />
        <p>{{ marketingConsent }}</p>
    </section>

</template>