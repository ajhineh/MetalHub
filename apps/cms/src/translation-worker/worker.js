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
  const openAiKey = process.env.OPENAI_API_KEY;
  if (!openAiKey) {
    throw new Error('OPENAI_API_KEY is not configured in process environment.');
  }

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are an expert metallurgy copywriter and B2B industrial contracting engineer. 
          Translate the given technical parameters into a professional B2B marketing description in ${targetLocale} language.
          Use precise local metalwork and steel construction terms (such as steel grades, EXC classes, ISO standards).
          Format response in clean structured markdown.`
        },
        {
          role: 'user',
          content: `Specs:\n- Title: ${data.title}\n- Steel Grade: ${data.steel_grade}\n- Execution Class: ${data.execution_standard}\n- Weight: ${data.weight_tons} tons\n- Notes: ${data.description || 'N/A'}`
        }
      ]
    },
    {
      headers: {
        'Authorization': `Bearer ${openAiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.choices[0].message.content;
}

module.exports = worker;
