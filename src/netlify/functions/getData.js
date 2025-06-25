//Ce fichier sert à consommer l'API d'OpenAI via SDK à travers une fonction netlify
//Ainsi la clé API reste dans le back et n'apparait pas dans le front
//Fichier en .js volontairement : les .ts peuvent créer des soucis dans le cadre des fonctions netlify

import { config } from "dotenv";
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

config();

const openai = createOpenAI({
  compatibility: 'strict',
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req) {
  try {
    // Vérifie que la méthode est bien POST
    if (req.method && req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Méthode non autorisée' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { prompt } = await req.json();

    console.log("🟡 Reçu prompt :", prompt);

    const { text } = await generateText({
      model: openai('gpt-4o'),
      system:
        `Tu es un assistant de rédaction de modalités de participation à des opérations commerciales ou des jeux concours en France. ` +
        `Donne une version conforme à la législation en France, pour couvrir l'organisateur comme le participant. `,
      prompt,
    });

    console.log("🟢 Réponse générée :", text);

    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error("🔴 Erreur dans getData.js :", err);

    return new Response(JSON.stringify({
      error: 'Erreur serveur',
      details: err.message || String(err),
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}