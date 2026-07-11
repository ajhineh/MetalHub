const { Worker } = require('bullmq');
const axios = require('axios');

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379');
const STRAPI_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';
const NEXT_URL = process.env.NEXT_FRONTEND_URL || 'http://localhost:3000';

console.log(`[BullMQ Worker] Initializing translation queue listener on ${REDIS_HOST}:${REDIS_PORT}...`);

const worker = new Worker('translation-jobs', async (job) => {
  const { id, data } = job.data;
  console.log(`[Worker] Picking up translation job for project ID: ${id}`);

  // List of target locales defined in the B2B mandate
  const targetLocales = ['fr', 'de', 'nl', 'es', 'it'];

  for (const locale of targetLocales) {
    try {
      console.log(`[Worker] Generating AI translation for locale: ${locale}`);
      
      const translatedText = await callLLMTranslation(data, locale);

      // Save localization using Strapi's localization endpoints
      const response = await axios.post(
        `${STRAPI_URL}/api/projects/${id}/localizations`,
        {
          locale: locale,
          title: `${data.title} (${locale.toUpperCase()})`,
          description: translatedText,
          steel_grade: data.steel_grade,
          execution_standard: data.execution_standard,
          weight_tons: data.weight_tons
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log(`[Worker] Localization saved: Project ${id} -> [${locale}] (Response: ${response.status})`);

    } catch (err) {
      console.error(`[Worker Error] Failed translation for locale [${locale}] on project ${id}:`, err.message);
    }
  }

  // Trigger On-Demand ISR Revalidation in Next.js
  try {
    const revalRes = await axios.post(`${NEXT_URL}/api/revalidate`, {
      secret: process.env.REVALIDATION_SECRET || 'SECURE_REVALIDATION_TOKEN',
      tag: 'projects'
    });
    console.log(`[Worker] Revalidation webhook completed. Status: ${revalRes.status}`);
  } catch (err) {
    console.error('[Worker Error] Next.js ISR revalidation trigger failed:', err.message);
  }

}, {
  connection: { host: REDIS_HOST, port: REDIS_PORT }
});

async function callLLMTranslation(data, targetLocale) {
  const geminiKey = process.env.GEMINI_API_KEY;
  const openAiKey = process.env.OPENAI_API_KEY;

  if (!geminiKey && !openAiKey) {
    throw new Error('Translation failed: Both GEMINI_API_KEY and OPENAI_API_KEY are missing from environment.');
  }

  const systemPrompt = `You are an expert industrial B2B copywriter specialized in steel structures and metal fabrication for the European market. Translate the following technical specification from English to ${targetLocale} (native level). Maintain absolute technical accuracy, use a professional engineering tone, optimize for local B2B SEO, and highlight benefits for industrial contractors.`;
  const userPrompt = `Specs:\n- Title: ${data.title}\n- Steel Grade: ${data.steel_grade}\n- Execution Class: ${data.execution_standard}\n- Weight: ${data.weight_tons} tons\n- Notes: ${data.description || 'N/A'}`;

  // 1. Try Gemini first if the key exists (prioritized)
  if (geminiKey) {
    try {
      console.log(`[Translation] Attempting Gemini translation (model: gemini-3.5-flash)...`);
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${geminiKey}`,
        {
          contents: [
            {
              role: 'user',
              parts: [{ text: userPrompt }]
            }
          ],
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          }
        },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000 // 10 seconds timeout for latency fallback
        }
      );

      const translatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (translatedText) {
        console.log(`[Translation] Gemini translation completed successfully.`);
        return translatedText;
      }
      throw new Error('Gemini returned an empty response candidate.');
    } catch (err) {
      console.warn(`[Translation Warning] Gemini translation failed (Error: ${err.message}).`);
      if (openAiKey) {
        console.log(`[Translation] Falling back to OpenAI (model: gpt-4o-mini)...`);
      } else {
        throw new Error(`Gemini translation failed and no OpenAI key is available. Error: ${err.message}`);
      }
    }
  }

  // 2. Call OpenAI as fallback or if Gemini key is missing
  if (openAiKey) {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userPrompt
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${openAiKey}`,
          'Content-Type': 'application/json'
        },
        timeout: 15000 // 15 seconds timeout
      }
    );

    const translatedText = response.data?.choices?.[0]?.message?.content;
    if (translatedText) {
      console.log(`[Translation] OpenAI translation completed successfully.`);
      return translatedText;
    }
    throw new Error('OpenAI returned an empty response choice.');
  }
}

// Global failed event listener to handle job errors and logging cleanly
worker.on('failed', (job, err) => {
  console.error(`[BullMQ Worker Error] Job ${job ? job.id : 'unknown'} failed with exception:`, err.message);
});

module.exports = worker;
