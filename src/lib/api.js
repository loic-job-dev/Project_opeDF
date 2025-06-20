//token personnel Siren stocké en variable d'environnement
const token = import.meta.env.VITE_SIRENE_API_TOKEN


//Consommation de l'API Sirene pour récupérer les données sur les sociétés en focntion du Siret
export async function getCompanyBySiret(siret) {
  const res = await fetch(`https://api.insee.fr/api-sirene/3.11/siret/${siret}`, {
            headers: {
          'X-INSEE-Api-Key-Integration': token
        }
  })

  if (!res.ok) {
    console.error('Erreur API Sirene :', res.status)
    throw new Error(`Erreur API Sirene - ${res.status}`)
  }

  const data = await res.json()
  return data.etablissement
}


//Requête qui fonctionne en console : curl --location 'https://api.insee.fr/api-sirene/3.11/siret/32929709700035' --header 'X-INSEE-Api-Key-Integration: token'