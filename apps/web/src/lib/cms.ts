/**
 * Headless CMS (Strapi / Directus) Integration Library
 * Provides helper functions to fetch localized contents.
 * Includes a graceful fallback system to static dictionaries when the CMS is offline.
 */

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337';
const CMS_TOKEN = process.env.CMS_API_TOKEN;

// Localized Mock Fallbacks (for robust build and offline local development)
const FALLBACKS: Record<string, Record<string, any>> = {
  en: {
    home: {
      heroTitle: 'Your European Partner for Precision Steel Structures',
      heroSub: 'Agile supply chain management: engineering study center, certified standard raw materials sourcing, and local fabrication by specialized welding workshops in France.',
    },
    services: [
      { id: 'cad', title: '1. Conception & Engineering (CAD Hub)', description: 'Technical studies, 3D modeling, and calculation notes' },
      { id: 'sourcing', title: '2. Certified Materials Sourcing', description: 'Traceable high-quality steel under European Standards' },
      { id: 'welding', title: '3. Fabrication & Welding Networks', description: 'Certified EN 1090 fabrication and local welding' }
    ]
  },
  fr: {
    home: {
      heroTitle: 'Votre Partenaire de Structures Métalliques de Précision',
      heroSub: 'Gestion de chaîne d\'approvisionnement agile : études d\'ingénierie avancées en direct, sourcing matières premières certifiées et fabrication locale par des ateliers de soudure de proximité en France.',
    },
    services: [
      { id: 'cad', title: '1. Conception & Ingénierie (CAD Hub)', description: 'Études techniques, modélisation 3D et notes de calculs' },
      { id: 'sourcing', title: '2. Approvisionnement Standard Européen', description: 'Acier traçable de haute qualité aux normes EN' },
      { id: 'welding', title: '3. Fabrication & Soudure Locale', description: 'Façonnage et soudage certifiés EN 1090' }
    ]
  },
  de: {
    home: {
      heroTitle: 'Ihr europäischer Partner für Präzisionsstahlkonstruktionen',
      heroSub: 'Agiles Supply-Chain-Management: Engineering-Studienzentrum, zertifizierte Standard-Rohstoffbeschaffung und lokale Fertigung durch spezialisierte Schweißwerkstätten in Frankreich.',
    },
    services: [
      { id: 'cad', title: '1. Konstruktion & Konstruktion (CAD Hub)', description: 'Technische Studien, 3D-Modellierung und Berechnungsnotizen' },
      { id: 'sourcing', title: '2. Zertifizierte Materialbeschaffung', description: 'Rückverfolgbare Stahlqualität nach europäischen Normen' },
      { id: 'welding', title: '3. Fertigungs- und Schweißnetzwerke', description: 'Zertifizierte Fertigung nach EN 1090 und lokales Schweißen' }
    ]
  },
  nl: {
    home: {
      heroTitle: 'Uw Europese partner voor precisie staalconstructies',
      heroSub: 'Agile supply chain management: engineering studiecentrum, gecertificeerde standaard grondstoffen sourcing, en lokale fabricage door gespecialiseerde laswerkplaatsen in Frankrijk.',
    },
    services: [
      { id: 'cad', title: '1. Ontwerp & Engineering (CAD Hub)', description: 'Technische studies, 3D-modellering en berekeningsnota\'s' },
      { id: 'sourcing', title: '2. Gecertificeerde inkoop van materialen', description: 'Traceerbaar kwaliteitsstaal volgens Europese normen' },
      { id: 'welding', title: '3. Productie- & lasnetwerken', description: 'Gecertificeerde EN 1090 fabricage en lokaal lassen' }
    ]
  },
  es: {
    home: {
      heroTitle: 'Su socio europeo en estructuras de acero de precisión',
      heroSub: 'Gestión ágil de la cadena de suministro: centro de estudios de ingeniería, abastecimiento de materias primas certificadas y fabricación local por talleres especializados en soldadura en Francia.',
    },
    services: [
      { id: 'cad', title: '1. Diseño e Ingeniería (Centro CAD)', description: 'Estudios técnicos, modelado 3D y notas de cálculo.' },
      { id: 'sourcing', title: '2. Abastecimiento de materiales certificados', description: 'Acero de alta calidad trazable según las normas europeas.' },
      { id: 'welding', title: '3. Redes de Fabricación y Soldadura', description: 'Fabricación certificada EN 1090 y soldadura local.' }
    ]
  },
  it: {
    home: {
      heroTitle: 'Il vostro partner europeo per le strutture in acciaio di precisione',
      heroSub: 'Gestione agile della catena di fornitura: centro studi di ingegneria, approvvigionamento di materie prime certificate e fabbricazione locale da parte di officine di saldatura specializzate in Francia.',
    },
    services: [
      { id: 'cad', title: '1. Progettazione e Ingegneria (Hub CAD)', description: 'Studi tecnici, modellazione 3D e note di calcolo.' },
      { id: 'sourcing', title: '2. Approvvigionamento di materiali certificati', description: 'Acciaio tracciabile di alta qualità secondo gli standard europei.' },
      { id: 'welding', title: '3. Reti di Fabbricazione e Saldatura', description: 'Fabbricazione certificata EN 1090 e saldatura locale.' }
    ]
  },
  no: {
    home: {
      heroTitle: 'Din europeiske partner for presisjonsstålkonstruksjoner',
      heroSub: 'Smidig forsyningskjedeledelse: ingeniørstudiesenter, sertifisert standard råvareinnkjøp og lokal fabrikasjon av spesialiserte sveisesteder i Frankrike.',
    },
    services: [
      { id: 'cad', title: '1. Prosjektering og Engineering (CAD Hub)', description: 'Tekniske studier, 3D-modellering og beregningsnotater' },
      { id: 'sourcing', title: '2. Sertifisert materialinnkjøp', description: 'Sporbart stål av høy kvalitet i henhold til europeiske standarder' },
      { id: 'welding', title: '3. Fabrikasjons- og sveisemetoder', description: 'Sertifisert EN 1090 fabrikasjon og lokal sveising' }
    ]
  },
  sv: {
    home: {
      heroTitle: 'Din europeiska partner för precisionsstålkonstruktioner',
      heroSub: 'Smidig supply chain management: ingenjörsstudiecenter, certifierad standard råmaterialsourcing och lokal tillverkning av specialiserade svetsverkstäder i Frankrike.',
    },
    services: [
      { id: 'cad', title: '1. Konstruktion & Engineering (CAD Hub)', description: 'Tekniska studier, 3D-modellering och beräkningsnoter' },
      { id: 'sourcing', title: '2. Certifierad materialförsörjning', description: 'Spårbart stål av hög kvalitet enligt europeiska standarder' },
      { id: 'welding', title: '3. Tillverknings- och svetsnätverk', description: 'Certifierad EN 1090-tillverkning och lokal svetsning' }
    ]
  },
  pl: {
    home: {
      heroTitle: 'Twój europejski partner w zakresie precyzyjnych konstrukcji stalowych',
      heroSub: 'Zwinne zarządzanie łańcuchem dostaw: centrum badań inżynieryjnych, certyfikowane pozyskiwanie surowców i lokalna produkcja w specjalistycznych warsztatach spawalniczych we Francji.',
    },
    services: [
      { id: 'cad', title: '1. Projektowanie i inżynieria (Hub CAD)', description: 'Analizy techniczne, modelowanie 3D i obliczenia wytrzymałościowe' },
      { id: 'sourcing', title: '2. Certyfikowane zaopatrzenie w materiały', description: 'Identyfikowalna stal wysokiej jakości wg norm europejskich' },
      { id: 'welding', title: '3. Sieci produkcyjno-spawalnicze', description: 'Certyfikowana produkcja wg EN 1090 i lokalne spawanie' }
    ]
  }
};

/**
 * Fetch localized homepage content from Headless CMS
 */
export async function getHomepageData(lang: string) {
  const selectedLang = FALLBACKS[lang] ? lang : 'en';
  
  try {
    const res = await fetch(`${CMS_URL}/api/homepage?locale=${selectedLang}`, {
      headers: {
        Authorization: CMS_TOKEN ? `Bearer ${CMS_TOKEN}` : '',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 } // Revalidate every hour (ISR)
    });

    if (!res.ok) throw new Error('CMS response error');
    
    const json = await res.json();
    return {
      heroTitle: json.data.attributes.heroTitle,
      heroSub: json.data.attributes.heroSub,
    };
  } catch (error) {
    // Graceful fallback to static dictionary
    console.info(`[CMS Fallback] Strapi offline or unconfigured. Loading local fallback for homepage (${selectedLang}).`);
    return FALLBACKS[selectedLang].home;
  }
}

/**
 * Fetch services catalog
 */
export async function getServicesData(lang: string) {
  const selectedLang = FALLBACKS[lang] ? lang : 'en';

  try {
    const res = await fetch(`${CMS_URL}/api/services?locale=${selectedLang}&populate=*`, {
      headers: {
        Authorization: CMS_TOKEN ? `Bearer ${CMS_TOKEN}` : '',
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }
    });

    if (!res.ok) throw new Error('CMS response error');
    
    const json = await res.json();
    return json.data.map((item: any) => ({
      id: item.attributes.slug,
      title: item.attributes.title,
      description: item.attributes.description
    }));
  } catch {
    console.info(`[CMS Fallback] Loading local fallback for services (${selectedLang}).`);
    return FALLBACKS[selectedLang].services;
  }
}

/**
 * Hook simulation: Strapi AI content-translation hook
 * This outlines the code running inside a Strapi custom webhook/controller 
 * to auto-translate metallurgical parameters into French marketing copy.
 */
export async function simulateStrapiAITranslation(englishSpecs: {
  title: string;
  steelGrade: string;
  weldingStandard: string;
  surfaceTreatment: string;
}) {
  const prompt = `
    You are an expert French metallurgical engineer and copywriter.
    Translate and expand the following technical brief into a B2B project description.
    Integrate French industrial search keywords: "châssis mécano-soudé", "soudure certifiée EN 1090", "découpe laser acier".
    
    Technical Brief:
    - Project Title: ${englishSpecs.title}
    - Steel Grade: ${englishSpecs.steelGrade}
    - Welding standard: ${englishSpecs.weldingStandard}
    - Finishing: ${englishSpecs.surfaceTreatment}
    
    Format the output in structured markdown for direct CMS insertion.
  `;

  console.log('[Strapi AI Hub] Sending request to OpenAI API with prompt:', prompt);
  
  // Simulated LLM API response
  return {
    frenchTitle: `Projet : ${englishSpecs.title} sur Mesure`,
    frenchSlug: englishSpecs.title.toLowerCase().replace(/ /g, '-'),
    frenchBody: `
      ## Conception et Fabrication de ${englishSpecs.title}
      Dans le cadre de ce projet, notre bureau d'études a assuré la modélisation 3D et le calcul de structure.
      
      ### Spécifications Métallurgiques :
      * **Grade d'acier** : ${englishSpecs.steelGrade} pour une résilience optimale.
      * **Procédé de soudure** : Soudage industriel qualifié sous la norme **${englishSpecs.weldingStandard}** avec contrôle non destructif (CND).
      * **Finition** : ${englishSpecs.surfaceTreatment} conforme aux normes de traitement de surface de l'UE.
      
      Ce châssis mécano-soudé a été façonné par découpe laser et assemblé par notre atelier de proximité.
    `
  };
}
