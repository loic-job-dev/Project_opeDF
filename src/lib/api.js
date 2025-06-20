const token = import.meta.env.VITE_SIRENE_API_TOKEN



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


//Requête qui fonctionne en console : curl --location 'https://api.insee.fr/api-sirene/3.11/siret/32929709700035' --header 'X-INSEE-Api-Key-Integration: 265f3f8e-9f3e-4fea-9f3f-8e9f3e0fea59'