const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const STRAPI_URL = process.env.NEXT_PUBLIC_CMS_URL || process.env.STRAPI_API_URL || 'http://127.0.0.1:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

const cities = [
  { city: 'Berlin', slug: 'berlin', country: 'Germany', latitude: 52.5200, longitude: 13.4050 },
  { city: 'Munich', slug: 'munich', country: 'Germany', latitude: 48.1351, longitude: 11.5820 },
  { city: 'Hamburg', slug: 'hamburg', country: 'Germany', latitude: 53.5511, longitude: 9.9937 },
  { city: 'Frankfurt', slug: 'frankfurt', country: 'Germany', latitude: 50.1109, longitude: 8.6821 },
  { city: 'Cologne', slug: 'cologne', country: 'Germany', latitude: 50.9375, longitude: 6.9603 },
  { city: 'Stuttgart', slug: 'stuttgart', country: 'Germany', latitude: 48.7758, longitude: 9.1829 },
  { city: 'Düsseldorf', slug: 'dusseldorf', country: 'Germany', latitude: 51.2277, longitude: 6.7735 },
  { city: 'Dortmund', slug: 'dortmund', country: 'Germany', latitude: 51.5136, longitude: 7.4653 },
  { city: 'Essen', slug: 'essen', country: 'Germany', latitude: 51.4556, longitude: 7.0116 },
  { city: 'Leipzig', slug: 'leipzig', country: 'Germany', latitude: 51.3397, longitude: 12.3731 },
  { city: 'Paris', slug: 'paris', country: 'France', latitude: 48.8566, longitude: 2.3522 },
  { city: 'Lyon', slug: 'lyon', country: 'France', latitude: 45.7640, longitude: 4.8357 },
  { city: 'Marseille', slug: 'marseille', country: 'France', latitude: 43.2965, longitude: 5.3698 },
  { city: 'Toulouse', slug: 'toulouse', country: 'France', latitude: 43.6047, longitude: 1.4442 },
  { city: 'Nice', slug: 'nice', country: 'France', latitude: 43.7102, longitude: 7.2620 },
  { city: 'Lille', slug: 'lille', country: 'France', latitude: 50.6292, longitude: 3.0573 },
  { city: 'Bordeaux', slug: 'bordeaux', country: 'France', latitude: 44.8378, longitude: -0.5792 },
  { city: 'Nantes', slug: 'nantes', country: 'France', latitude: 47.2184, longitude: -1.5536 },
  { city: 'Strasbourg', slug: 'strasbourg', country: 'France', latitude: 48.5734, longitude: 7.7521 },
  { city: 'Montpellier', slug: 'montpellier', country: 'France', latitude: 43.6108, longitude: 3.8767 },
  { city: 'Rome', slug: 'rome', country: 'Italy', latitude: 41.9028, longitude: 12.4964 },
  { city: 'Milan', slug: 'milan', country: 'Italy', latitude: 45.4642, longitude: 9.1900 },
  { city: 'Naples', slug: 'naples', country: 'Italy', latitude: 40.8518, longitude: 14.2681 },
  { city: 'Turin', slug: 'turin', country: 'Italy', latitude: 45.0703, longitude: 7.6869 },
  { city: 'Palermo', slug: 'palermo', country: 'Italy', latitude: 38.1157, longitude: 13.3615 },
  { city: 'Genoa', slug: 'genoa', country: 'Italy', latitude: 44.4056, longitude: 8.9463 },
  { city: 'Bologna', slug: 'bologna', country: 'Italy', latitude: 44.4949, longitude: 11.3426 },
  { city: 'Florence', slug: 'florence', country: 'Italy', latitude: 43.7696, longitude: 11.2558 },
  { city: 'Bari', slug: 'bari', country: 'Italy', latitude: 41.1171, longitude: 16.8719 },
  { city: 'Catania', slug: 'catania', country: 'Italy', latitude: 37.5079, longitude: 15.0830 },
  { city: 'Madrid', slug: 'madrid', country: 'Spain', latitude: 40.4168, longitude: -3.7038 },
  { city: 'Barcelona', slug: 'barcelona', country: 'Spain', latitude: 41.3874, longitude: 2.1686 },
  { city: 'Valencia', slug: 'valencia', country: 'Spain', latitude: 39.4699, longitude: -0.3774 },
  { city: 'Seville', slug: 'seville', country: 'Spain', latitude: 37.3891, longitude: -5.9845 },
  { city: 'Zaragoza', slug: 'zaragoza', country: 'Spain', latitude: 41.6488, longitude: -0.8891 },
  { city: 'Málaga', slug: 'malaga', country: 'Spain', latitude: 36.7213, longitude: -4.4214 },
  { city: 'Murcia', slug: 'murcia', country: 'Spain', latitude: 37.9922, longitude: -1.1307 },
  { city: 'Palma', slug: 'palma', country: 'Spain', latitude: 39.5696, longitude: 2.6502 },
  { city: 'Las Palmas', slug: 'las-palmas', country: 'Spain', latitude: 28.1235, longitude: -15.4363 },
  { city: 'Bilbao', slug: 'bilbao', country: 'Spain', latitude: 43.2630, longitude: -2.9350 },
  { city: 'Amsterdam', slug: 'amsterdam', country: 'Netherlands', latitude: 52.3676, longitude: 4.9041 },
  { city: 'Rotterdam', slug: 'rotterdam', country: 'Netherlands', latitude: 51.9244, longitude: 4.4777 },
  { city: 'The Hague', slug: 'the-hague', country: 'Netherlands', latitude: 52.0705, longitude: 4.3007 },
  { city: 'Utrecht', slug: 'utrecht', country: 'Netherlands', latitude: 52.0907, longitude: 5.1214 },
  { city: 'Eindhoven', slug: 'eindhoven', country: 'Netherlands', latitude: 51.4416, longitude: 5.4697 },
  { city: 'Groningen', slug: 'groningen', country: 'Netherlands', latitude: 53.2194, longitude: 6.5665 },
  { city: 'Tilburg', slug: 'tilburg', country: 'Netherlands', latitude: 51.5555, longitude: 5.0913 },
  { city: 'Almere', slug: 'almere', country: 'Netherlands', latitude: 52.3702, longitude: 5.2141 },
  { city: 'Brussels', slug: 'brussels', country: 'Belgium', latitude: 50.8503, longitude: 4.3517 },
  { city: 'Antwerp', slug: 'antwerp', country: 'Belgium', latitude: 51.2194, longitude: 4.4025 },
  { city: 'Ghent', slug: 'ghent', country: 'Belgium', latitude: 51.0500, longitude: 3.7303 },
  { city: 'Charleroi', slug: 'charleroi', country: 'Belgium', latitude: 50.4114, longitude: 4.4445 },
  { city: 'Liège', slug: 'liege', country: 'Belgium', latitude: 50.6326, longitude: 5.5797 },
  { city: 'Bruges', slug: 'bruges', country: 'Belgium', latitude: 51.2093, longitude: 3.2247 },
  { city: 'Warsaw', slug: 'warsaw', country: 'Poland', latitude: 52.2297, longitude: 21.0122 },
  { city: 'Kraków', slug: 'krakow', country: 'Poland', latitude: 50.0647, longitude: 19.9450 },
  { city: 'Łódź', slug: 'lodz', country: 'Poland', latitude: 51.7592, longitude: 19.4560 },
  { city: 'Wrocław', slug: 'wroclaw', country: 'Poland', latitude: 51.1079, longitude: 17.0385 },
  { city: 'Poznań', slug: 'poznan', country: 'Poland', latitude: 52.4064, longitude: 16.9252 },
  { city: 'Gdańsk', slug: 'gdansk', country: 'Poland', latitude: 54.3520, longitude: 18.6466 },
  { city: 'Szczecin', slug: 'szczecin', country: 'Poland', latitude: 53.4285, longitude: 14.5528 },
  { city: 'Bydgoszcz', slug: 'bydgoszcz', country: 'Poland', latitude: 53.1235, longitude: 18.0084 },
  { city: 'Stockholm', slug: 'stockholm', country: 'Sweden', latitude: 59.3293, longitude: 18.0686 },
  { city: 'Gothenburg', slug: 'gothenburg', country: 'Sweden', latitude: 57.7089, longitude: 11.9746 },
  { city: 'Malmö', slug: 'malmo', country: 'Sweden', latitude: 55.6049, longitude: 13.0038 },
  { city: 'Uppsala', slug: 'uppsala', country: 'Sweden', latitude: 59.8586, longitude: 17.6389 },
  { city: 'Linköping', slug: 'linkoping', country: 'Sweden', latitude: 58.4108, longitude: 15.6214 },
  { city: 'Västerås', slug: 'vasteras', country: 'Sweden', latitude: 59.6110, longitude: 16.5448 },
  { city: 'Copenhagen', slug: 'copenhagen', country: 'Denmark', latitude: 55.6761, longitude: 12.5683 },
  { city: 'Aarhus', slug: 'aarhus', country: 'Denmark', latitude: 56.1539, longitude: 10.2058 },
  { city: 'Odense', slug: 'odense', country: 'Denmark', latitude: 55.3959, longitude: 10.3883 },
  { city: 'Aalborg', slug: 'aalborg', country: 'Denmark', latitude: 57.0488, longitude: 9.9217 },
  { city: 'Esbjerg', slug: 'esbjerg', country: 'Denmark', latitude: 55.4667, longitude: 8.4500 },
  { city: 'Oslo', slug: 'oslo', country: 'Norway', latitude: 59.9139, longitude: 10.7522 },
  { city: 'Bergen', slug: 'bergen', country: 'Norway', latitude: 60.3913, longitude: 5.3221 },
  { city: 'Trondheim', slug: 'trondheim', country: 'Norway', latitude: 63.4305, longitude: 10.3951 },
  { city: 'Stavanger', slug: 'stavanger', country: 'Norway', latitude: 58.9690, longitude: 5.7331 },
  { city: 'Drammen', slug: 'drammen', country: 'Norway', latitude: 59.7439, longitude: 10.2045 },
  { city: 'Helsinki', slug: 'helsinki', country: 'Finland', latitude: 60.1695, longitude: 24.9354 },
  { city: 'Espoo', slug: 'espoo', country: 'Finland', latitude: 60.2055, longitude: 24.6559 },
  { city: 'Tampere', slug: 'tampere', country: 'Finland', latitude: 61.4978, longitude: 23.7610 },
  { city: 'Vantaa', slug: 'vantaa', country: 'Finland', latitude: 60.2934, longitude: 25.0378 },
  { city: 'Oulu', slug: 'oulu', country: 'Finland', latitude: 65.0121, longitude: 25.4651 },
  { city: 'Vienna', slug: 'vienna', country: 'Austria', latitude: 48.2082, longitude: 16.3738 },
  { city: 'Graz', slug: 'graz', country: 'Austria', latitude: 47.0707, longitude: 15.4395 },
  { city: 'Linz', slug: 'linz', country: 'Austria', latitude: 48.3069, longitude: 14.2858 },
  { city: 'Salzburg', slug: 'salzburg', country: 'Austria', latitude: 47.8095, longitude: 13.0550 },
  { city: 'Innsbruck', slug: 'innsbruck', country: 'Austria', latitude: 47.2692, longitude: 11.4041 },
  { city: 'Zurich', slug: 'zurich', country: 'Switzerland', latitude: 47.3769, longitude: 8.5417 },
  { city: 'Geneva', slug: 'geneva', country: 'Switzerland', latitude: 46.2044, longitude: 6.1432 },
  { city: 'Basel', slug: 'basel', country: 'Switzerland', latitude: 47.5596, longitude: 7.5886 },
  { city: 'Bern', slug: 'bern', country: 'Switzerland', latitude: 46.9480, longitude: 7.4474 },
  { city: 'Lausanne', slug: 'lausanne', country: 'Switzerland', latitude: 46.5197, longitude: 6.6323 },
  { city: 'Prague', slug: 'prague', country: 'Czech Republic', latitude: 50.0755, longitude: 14.4378 },
  { city: 'Brno', slug: 'brno', country: 'Czech Republic', latitude: 49.1951, longitude: 16.6068 },
  { city: 'Ostrava', slug: 'ostrava', country: 'Czech Republic', latitude: 49.8209, longitude: 18.2625 },
  { city: 'Plzeň', slug: 'plzen', country: 'Czech Republic', latitude: 49.7384, longitude: 13.3736 },
  { city: 'Budapest', slug: 'budapest', country: 'Hungary', latitude: 47.4979, longitude: 19.0402 },
  { city: 'Debrecen', slug: 'debrecen', country: 'Hungary', latitude: 47.5316, longitude: 21.6273 },
  { city: 'Szeged', slug: 'szeged', country: 'Hungary', latitude: 46.2530, longitude: 20.1414 },
  { city: 'Miskolc', slug: 'miskolc', country: 'Hungary', latitude: 48.1035, longitude: 20.7784 },
  { city: 'Bucharest', slug: 'bucharest', country: 'Romania', latitude: 44.4268, longitude: 26.1025 },
  { city: 'Cluj-Napoca', slug: 'cluj-napoca', country: 'Romania', latitude: 46.7712, longitude: 23.6236 },
  { city: 'Timișoara', slug: 'timisoara', country: 'Romania', latitude: 45.7489, longitude: 21.2087 },
  { city: 'Iași', slug: 'iasi', country: 'Romania', latitude: 47.1585, longitude: 27.6014 },
  { city: 'Lisbon', slug: 'lisbon', country: 'Portugal', latitude: 38.7223, longitude: -9.1393 },
  { city: 'Porto', slug: 'porto', country: 'Portugal', latitude: 41.1579, longitude: -8.6291 },
  { city: 'Braga', slug: 'braga', country: 'Portugal', latitude: 41.5454, longitude: -8.4265 },
  { city: 'Coimbra', slug: 'coimbra', country: 'Portugal', latitude: 40.2056, longitude: -8.4195 },
  { city: 'Dublin', slug: 'dublin', country: 'Ireland', latitude: 53.3498, longitude: -6.2603 },
  { city: 'Cork', slug: 'cork', country: 'Ireland', latitude: 51.8985, longitude: -8.4756 },
  { city: 'Limerick', slug: 'limerick', country: 'Ireland', latitude: 52.6638, longitude: -8.6267 },
  { city: 'Galway', slug: 'galway', country: 'Ireland', latitude: 53.2707, longitude: -9.0568 },
  { city: 'Athens', slug: 'athens', country: 'Greece', latitude: 37.9838, longitude: 23.7275 },
  { city: 'Thessaloniki', slug: 'thessaloniki', country: 'Greece', latitude: 40.6401, longitude: 22.9444 },
  { city: 'Patras', slug: 'patras', country: 'Greece', latitude: 38.2466, longitude: 21.7346 },
  { city: 'Heraklion', slug: 'heraklion', country: 'Greece', latitude: 35.3387, longitude: 25.1442 },
  { city: 'Sofia', slug: 'sofia', country: 'Bulgaria', latitude: 42.6977, longitude: 23.3219 },
  { city: 'Plovdiv', slug: 'plovdiv', country: 'Bulgaria', latitude: 42.1354, longitude: 24.7453 },
  { city: 'Varna', slug: 'varna', country: 'Bulgaria', latitude: 43.2141, longitude: 27.9147 }
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

const { OpenAI } = require('openai');

const openai = new OpenAI({
  baseURL: 'http://127.0.0.1:1234/v1', // Using localhost since script runs on the local Windows machine directly
  apiKey: 'lm-studio-bypass',
  timeout: 5 * 60 * 1000,
});

// Since the array has 121 cities and the first 3 were already done, let's filter out the ones already done if needed, but it's okay to overwrite or just start from index 3
const citiesToProcess = cities.slice(3); // Skip Berlin, Munich, Paris

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
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'google/gemma-4-12b-qat',
      messages: [
        { role: 'user', content: prompt }
      ]
    });
    
    const rawText = response.choices[0].message.content;
    const cleanJsonStr = rawText.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(cleanJsonStr);
  } catch (error) {
    console.error(`LM Studio Connection Failed for ${cityData.city}:`, error.message);
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
  console.log(`Starting Programmatic SEO Generation for ${citiesToProcess.length} remaining cities using Local Gemma-4-12B...`);

  for (const city of citiesToProcess) {
    try {
      const aiContent = await generateCityContent(city);
      await publishToStrapi(city, aiContent);
      // Removed the 3-second delay here!
    } catch (err) {
      console.error(`❌ Failed to process ${city.city}:`, err.message);
    }
  }

  console.log('🎉 Generation complete!');
}

main();
