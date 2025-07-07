import { config } from "dotenv";
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

config();

const openai = createOpenAI({
  compatibility: 'strict',
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async function(event, context) {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Méthode non autorisée' }),
      };
    }

const { messages } = JSON.parse(event.body || '{}');

console.log("🟡 Messages reçus :", messages);

const { text } = await generateText({
  model: openai('gpt-4o'),
  messages: [
    {
      role: 'system',
      content:
        `Tu es un assistant de rédaction de modalités de participation à des opérations commerciales ou des jeux concours en France. ` +
        `Donne une version conforme à la législation en France, pour couvrir l'organisateur comme le participant. ` +
        `Le résultat doit respecter un cadre juridique strict, notamment les articles L.441-6 du Code de commerce et les dispositions de la DGCCRF.` +
        `Le texte doit être en markdown et comporter les sauts de lignes qui respectent les # pour une bonne mise en page` +
        `Demande les informations manquantes qui sont nécessaires en fin de document après 2 sauts de ligne`
    },
    ...messages
  ]
});


    console.log("🟢 Réponse générée :", text);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    };

  } catch (err) {
    console.error("🔴 Erreur dans getData.js :", err);

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Erreur serveur',
        details: err.message || String(err),
      }),
    };
  }
};
