import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export const handler = async () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key not found" })
    };
  }

  try {
    const response = await fetch(`https://api.example.com/data?key=${apiKey}`);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API call failed", detail: (error as Error).message })
    };
  }
};
