const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const STRAPI_URL = process.env.NEXT_PUBLIC_CMS_URL || process.env.STRAPI_API_URL || 'http://127.0.0.1:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

const testCities = [
  { city: 'Berlin', slug: 'berlin', country: 'Germany', latitude: 52.5200, longitude: 13.4050 },
  { city: 'Munich', slug: 'munich', country: 'Germany', latitude: 48.1351, longitude: 11.5820 },
  { city: 'Paris', slug: 'paris', country: 'France', latitude: 48.8566, longitude: 2.3522 },
];

const BOILERPLATE_CONTENT = `
<h2>EN 1090 Certified Structural Steel Fabrication</h2>
<p>SideroHub operates under the strictest European standards, guaranteeing compliance with EN 1090 execution classes up to EXC4. Our manufacturing facilities are equipped with state-of-the-art CNC machinery, robotic welding arms, and automated material handling systems. This ensures precision, repeatability, and safety for every structural component we deliver.</p>
<h3>Our Engineering Capabilities</h3>
<ul>
  <li><strong>Heavy Structural Steel:</strong> Manufacturing of heavy-duty beams, columns, and trusses for industrial plants and commercial high-rises.</li>
  <li><strong>Precision Sheet Metal:</strong> Laser cutting, bending, and punching of specialized steel components.</li>
  <li><strong>Welding & Assembly:</strong> ISO 3834 certified welding processes, including MIG/MAG, TIG, and SAW, executed by fully certified welders.</li>
  <li><strong>Surface Treatment:</strong> Sandblasting, galvanization, and multi-layer anti-corrosion painting compliant with ISO 12944 standards.</li>
</ul>
<h3>Hybrid Outsourced Manufacturing Model</h3>
<p>Our unique hybrid model combines local engineering oversight with scalable European manufacturing capacity. We manage the entire supply chain, from raw material procurement to final site delivery. By optimizing production across our network of certified partner facilities, we offer unparalleled flexibility, reducing lead times and optimizing costs without compromising on quality or compliance.</p>
<h3>Quality Assurance & Traceability</h3>
<p>Every steel piece delivered by SideroHub is accompanied by comprehensive documentation, including material certificates (3.1/3.2), dimensional inspection reports, non-destructive testing (NDT) records (UT, MT, PT, RT), and the final Declaration of Performance (DoP) with the CE mark. Our digital portal provides real-time tracking of your production status.</p>
`;

const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateCityContent(cityData) {
  console.log(`Generating content for ${cityData.city}...`);
  
  const prompt = `
  You are an expert B2B industrial copywriter. Write a localized SEO content block (approx. 500 words) for structural steel fabrication in ${cityData.city}, ${cityData.country}.
  Return ONLY a raw JSON object (no markdown formatting, no code blocks) with the following keys:
  - "heroTitle": A catchy, professional H1 title for the city.
  - "dynamicContent": HTML formatted paragraphs focusing on ${cityData.city}'s specific construction industry, infrastructure projects, and local logistics for steel supply. Use <h2> and <p>.
  - "faq": HTML formatted FAQ (3 questions) about steel delivery and regulations in ${cityData.city}. Use <h3> for questions and <p> for answers.
  - "projectsCount": A realistic random integer between 12 and 85 representing delivered projects in the region.
  - "distanceKm": A realistic random integer between 15 and 180 representing distance from the nearest fabrication hub.
  - "metaTitle": SEO meta title (max 60 chars).
  - "metaDescription": SEO meta description (max 155 chars).
  - "keywords": Comma separated SEO keywords.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    });

    const rawText = response.text;
    const cleanJsonStr = rawText.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(cleanJsonStr);
  } catch (error) {
    console.error(`Gemini Connection Failed for ${cityData.city}:`, error.message);
    throw error;
  }
}

async function publishToStrapi(cityData, aiContent) {
  console.log(`Publishing ${cityData.city} to Strapi...`);
  
  const payload = {
    data: {
      city: cityData.city,
      slug: cityData.slug,
      country: cityData.country,
      latitude: cityData.latitude,
      longitude: cityData.longitude,
      heroTitle: aiContent.heroTitle,
      projectsCount: aiContent.projectsCount,
      distanceKm: aiContent.distanceKm,
      contentBody: `${aiContent.dynamicContent}\n\n${BOILERPLATE_CONTENT}`,
      faq: aiContent.faq,
      seo: {
        metaTitle: aiContent.metaTitle,
        metaDescription: aiContent.metaDescription,
        keywords: aiContent.keywords,
        canonicalURL: `https://siderohub.com/en/services/steel-fabrication/${cityData.slug}`
      },
      locale: 'en'
    }
  };

  const headers = { 'Content-Type': 'application/json' };
  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const response = await fetch(`${STRAPI_URL}/api/city-landings`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Strapi API Error: ${response.status} - ${await response.text()}`);
  }

  const result = await response.json();
  console.log(`✅ Successfully published ${cityData.city} (ID: ${result.data.id})`);
}

async function main() {
  if (!process.env.GEMINI_API_KEY) {
    console.error('❌ Error: GEMINI_API_KEY is not set in .env');
    process.exit(1);
  }

  const isValidKey = /^AIzaSy|^AQ\./.test(process.env.GEMINI_API_KEY);
  if (!isValidKey) {
    console.error('❌ Error: GEMINI_API_KEY format is invalid. Must start with AIzaSy or AQ.');
    process.exit(1);
  }

  console.log(`Starting Programmatic SEO Generation for ${testCities.length} test cities using Gemini 1.5 Flash...`);

  for (const city of testCities) {
    try {
      const aiContent = await generateCityContent(city);
      await publishToStrapi(city, aiContent);
      
      // Delay to respect rate limits (15 RPM)
      console.log('Waiting 5 seconds to respect rate limits...');
      await new Promise(resolve => setTimeout(resolve, 5000));
    } catch (error) {
      console.error(`❌ Failed to process ${city.city}:`, error.message);
    }
  }
  
  console.log('🎉 Test generation complete!');
}

main();
