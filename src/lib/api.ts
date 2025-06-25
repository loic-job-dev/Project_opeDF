//token personnel Siren stocké en variable d'environnement
const token = import.meta.env.VITE_SIRENE_API_TOKEN


export interface CompanyData {
  uniteLegale: {
    denominationUniteLegale?: string
    categorieJuridiqueUniteLegale?: string
  }
  adresseEtablissement: {
    numeroVoieEtablissement?: string
    typeVoieEtablissement?: string
    libelleVoieEtablissement?: string
    codePostalEtablissement?: string
    libelleCommuneEtablissement?: string
  }
  siren?: string
}

export interface OperationData {
  title: string
  date_debut?: string
  date_fin?: string
  date_fin_achat?: string
}

//Consommation de l'API Sirene pour récupérer les données sur les sociétés en focntion du Siret
export async function getCompanyBySiret(siret: string): Promise<CompanyData> {
  const res = await fetch(`https://api.insee.fr/api-sirene/3.11/siret/${siret}`, {
            headers: {
          'X-INSEE-Api-Key-Integration': token
        }
  })

  if (!res.ok) {
    console.error('Erreur API Sirene :', res.status)
    throw new Error(`Erreur API Sirene - ${res.status}`)
  }

  const fullData = await res.json()
  const etablissement = fullData.etablissement as CompanyData
  return etablissement
}
//Requête qui fonctionne en console : curl --location 'https://api.insee.fr/api-sirene/3.11/siret/32929709700035' --header 'X-INSEE-Api-Key-Integration: token'


//Consommation de l'API venant de Houston 
export async function getOperationElements(): Promise<OperationData> {
  const res = await fetch('https://api-gabarit.promo.dev/api/v2/formdata/680a536657000c7ade07bc64')

  if (!res.ok) {
    console.error('Erreur API Gabarit :', res.status)
    throw new Error(`Erreur API Gabarit - ${res.status}`)
  }

  const data: OperationData = await res.json()
  return data
}


//Consommation de l'API OpenAI via une function netlify
export async function getCompletion(prompt: string) {
  const res = await fetch("/.netlify/functions/getData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
  const err = await res.json();
  throw new Error(err.details || 'Erreur inconnue');
}

  const data = await res.json();
  console.log(data)
  return data.text; // contient la réponse générée
}