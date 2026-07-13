interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const translations: Record<string, Record<string, string>> = {
    en: {
      title: 'Case Studies & Project References',
      subtitle: 'Explore our custom industrial steel fabrications delivered to European clients.',
      p1Title: 'Heavy Tool-Machine Base Frame',
      p1Desc: 'CAD 3D modeling and precision welding of a 4.5-ton structural frame for high-speed CNC milling machine in Rhône-Alpes, France.',
      p2Title: 'Galvanized Industrial Access Platform',
      p2Desc: 'Suspended access walkway for logistics packaging line. Built under ISO 14122 and fully hot-dip galvanized for corrosion resistance.',
      p3Title: 'Stainless Steel Tank Access Loop',
      p3Desc: 'High-precision TIG welding of 316L stainless steel access system with pickling and passivation for chemical tank storage in Strasbourg.',
      specGrade: 'Steel Grade',
      specWeight: 'Total Weight',
      specStandard: 'Standard',
      specLocation: 'Location'
    },
    fr: {
      title: 'Études de Cas & Références Projets',
      subtitle: 'Découvrez nos réalisations en structures métalliques industrielles pour nos clients européens.',
      p1Title: 'Châssis Mécano-Soudé pour Machine Outil',
      p1Desc: 'Conception CAO 3D et soudure de précision d\'un bâti de 4,5 tonnes pour le secteur de l\'usinage grande vitesse dans la région Auvergne-Rhône-Alpes.',
      p2Title: 'Passerelle d\'Accès Industrielle Galvanisée',
      p2Desc: 'Structure d\'accès suspendue pour une ligne logistique. Conforme ISO 14122 et entièrement galvanisée à chaud contre la corrosion.',
      p3Title: 'Loop d\'Accès Cuve Inox Chimique',
      p3Desc: 'Soudage TIG de haute précision d\'inox 316L avec décapage-passivation pour une cuve de stockage chimique à Strasbourg.',
      specGrade: 'Grade Acier',
      specWeight: 'Poids Structure',
      specStandard: 'Norme',
      specLocation: 'Lieu d\'intervention'
    },
    de: {
      title: 'Fallstudien & Projektreferenzen',
      subtitle: 'Entdecken Sie unsere maßgeschneiderten Industriestahlkonstruktionen für europäische Kunden.',
      p1Title: 'Schwerer Maschinenbettrahmen',
      p1Desc: 'CAD-3D-Modellierung und Präzisionsschweißen eines 4,5-Tonnen-Tragwerkrahmens für eine CNC-Fräsmaschine in Rhône-Alpes, Frankreich.',
      p2Title: 'Verzinkte industrielle Arbeitsbühne',
      p2Desc: 'Hängender Laufsteg für eine Logistikverpackungslinie. Hergestellt nach ISO 14122 und zum Korrosionsschutz feuerverzinkt.',
      p3Title: 'Edelstahl-Tankzugangsloop',
      p3Desc: 'Hochpräzises WIG-Schweißen von 316L-Edelstahl-Zugangssystemen mit Beizen und Passivieren für chemische Tanklager in Straßburg.',
      specGrade: 'Stahlsorte',
      specWeight: 'Gesamtgewicht',
      specStandard: 'Norm',
      specLocation: 'Einsatzort'
    },
    nl: {
      title: 'Projecten & Referenties',
      subtitle: 'Ontdek onze op maat gemaakte industriële staalconstructies geleverd aan Europese klanten.',
      p1Title: 'Zwaar Machineframe',
      p1Desc: 'CAD 3D-modellering en precisielassen van een 4,5 ton zwaar frame voor een CNC-freesmachine in Rhône-Alpes, Frankrijk.',
      p2Title: 'Gegalvaniseerd Industrieel Platform',
      p2Desc: 'Hangend toegangsbordes voor een logistieke verpakkingslijn. Gebouwd volgens ISO 14122 en thermisch verzinkt tegen corrosie.',
      p3Title: 'RVS Tank Toegangsloop',
      p3Desc: 'Hoge precisie TIG-lassen van RVS 316L toegangssysteem met beitsen en passiveren voor chemische opslagtanks in Straatsburg.',
      specGrade: 'Staalkwaliteit',
      specWeight: 'Totaal Gewicht',
      specStandard: 'Norm',
      specLocation: 'Locatie'
    },
    es: {
      title: 'Casos de Éxito y Referencias',
      subtitle: 'Explore nuestras fabricaciones de acero industrial a medida entregadas a clientes europeos.',
      p1Title: 'Bancada Pesada para Máquina Herramienta',
      p1Desc: 'Modelado CAD 3D y soldadura de precisión de un bastidor de 4,5 toneladas para fresadora CNC de alta velocidad en Ródano-Alpes, Francia.',
      p2Title: 'Pasarela de Acceso Industrial Galvanizada',
      p2Desc: 'Estructura de acceso suspendida para línea de embalaje logístico. Construida según ISO 14122 y galvanizada en caliente.',
      p3Title: 'Acceso Inoxidable para Tanque Químico',
      p3Desc: 'Soldadura TIG de alta precisión en acero inoxidable 316L con decapado y pasivado para tanque de almacenamiento químico en Estrasburgo.',
      specGrade: 'Tipo de Acero',
      specWeight: 'Peso Total',
      specStandard: 'Norma',
      specLocation: 'Ubicación'
    },
    it: {
      title: 'Progetti Costruttivi e Case History',
      subtitle: 'Esplorate le nostre realizzazioni in carpenteria metallica pesante fornite a clienti europei.',
      p1Title: 'Basamento Pesante per Macchina Utensile',
      p1Desc: 'Modellazione 3D CAD e saldatura di precisione di una struttura da 4,5 tonnellate per fresatrice CNC in Rodano-Alpi, Francia.',
      p2Title: 'Pasarella Industriale di Accesso Zincata',
      p2Desc: 'Ballatoio di servizio sospeso per linea di confezionamento logistico. Conforme ISO 14122 e interamente zincato a caldo.',
      p3Title: 'Loop di Accesso Serbatoio in Acciaio Inox',
      p3Desc: 'Saldatura TIG ad alta precisione di acciaio inox 316L con decapaggio e passivazione per serbatoi chimici a Strasburgo.',
      specGrade: 'Grado Acciaio',
      specWeight: 'Peso Totale',
      specStandard: 'Standard',
      specLocation: 'Località'
    },
    no: {
      title: 'Prosjektstudier & Referanser',
      subtitle: 'Utforsk våre skreddersydde industrielle stålkonstruksjoner levert til europeiske kunder.',
      p1Title: 'Tungt Maskinfundament',
      p1Desc: 'CAD 3D-modellering og presisjonssveising av en 4,5-tonns stålramme for CNC-fresmaskin i Rhône-Alpes, Frankrike.',
      p2Title: 'Galvanisert Industriell Adkomstplattform',
      p2Desc: 'Opphengt gangvei for logistikkpakkelinje. Bygget under ISO 14122 og varmgalvanisert for optimal korrosjonsbeskyttelse.',
      p3Title: 'Tankadkomst i Rustfritt Stål',
      p3Desc: 'Høypresisjons TIG-sveising av 316L syrefast stål adkomstloop for kjemisk lagertank i Strasbourg.',
      specGrade: 'Stålkvalitet',
      specWeight: 'Total Vekt',
      specStandard: 'Standard',
      specLocation: 'Sted'
    },
    sv: {
      title: 'Fallstudier & Projektreferenser',
      subtitle: 'Utforska våra skräddarsydda stålkonstruktioner levererade till europeiska kunder.',
      p1Title: 'Tung Maskinbäddsram',
      p1Desc: '3D CAD-modellering och precisionssvetsning av en 4,5-tons stålram för CNC-fräsmaskin i Rhône-Alpes, Frankrike.',
      p2Title: 'Galvaniserad Industriell Gångbana',
      p2Desc: 'Hängande gångbana för logistisk förpackningslinje. Byggd enligt ISO 14122 och varmförzinkad mot korrosion.',
      p3Title: 'Tanktillträde i Rostfritt Stål',
      p3Desc: 'Högprecisions TIG-svetsning av 316L rostfritt stål tillträdesloop för kemisk lagringstank i Strasbourg.',
      specGrade: 'Stålsort',
      specWeight: 'Total Vikt',
      specStandard: 'Standard',
      specLocation: 'Plats'
    },
    pl: {
      title: 'Studia Przypadków i Referencje',
      subtitle: 'Poznaj nasze niestandardowe konstrukcje stalowe dostarczone do europejskich odbiorców.',
      p1Title: 'Ciężka Rama Maszynowa',
      p1Desc: 'Modelowanie 3D CAD i precyzyjne spawanie 4,5-tonowego łoża pod frezarkę CNC w regionie Rodan-Alpy we Francji.',
      p2Title: 'Ocynkowany Pomost Roboczy',
      p2Desc: 'Podwieszana kładka dostępowa dla linii pakowania logistycznego. Zbudowana wg ISO 14122 i w całości ocynkowana ogniowo.',
      p3Title: 'Dostęp do Zbiornika Chemicznego ze Stali Nierdzewnej',
      p3Desc: 'Precyzyjne spawanie TIG stali nierdzewnej 316L z trawieniem i pasywacją dla zbiornika chemikaliów w Strasburgu.',
      specGrade: 'Gatunek Stali',
      specWeight: 'Waga Całkowita',
      specStandard: 'Norma',
      specLocation: 'Lokalizacja'
    }
  };

  const currentLang = translations[lang] ? lang : 'en';
  const t = translations[currentLang];

  const projects = [
    {
      title: t.p1Title,
      desc: t.p1Desc,
      grade: 'S355J2+N',
      weight: '4.5 Tons',
      standard: 'EN 1090-2 EXC2',
      location: 'Lyon (Rhône-Alpes), France',
      techs: ['CAD study', 'MIG welding', 'Stress tempering']
    },
    {
      title: t.p2Title,
      desc: t.p2Desc,
      grade: 'S235JR',
      weight: '1.8 Tons',
      standard: 'ISO 14122 / ISO 1461',
      location: 'Lille (Hauts-de-France), France',
      techs: ['Hot-dip Galvanization', 'Bolted Assembly']
    },
    {
      title: t.p3Title,
      desc: t.p3Desc,
      grade: '316L Stainless (Inox)',
      weight: '0.8 Tons',
      standard: 'EN 1090-3',
      location: 'Strasbourg (Grand Est), France',
      techs: ['TIG Welding', 'Acid Passivation', 'NDT Dye Penetrant']
    }
  ];

  return (
    <div className="cad-grid-bg" style={{ padding: '6rem 0' }}>
      {/* Inject Dynamic B2B JSON-LD Product & Project Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": t.title,
            "description": t.subtitle,
            "brand": {
              "@type": "Brand",
              "name": "SideroHub"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "offerCount": "3"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Steel Grade Specs",
                "value": "S355J2+N / 316L Inox"
              },
              {
                "@type": "PropertyValue",
                "name": "Welding Execution Class",
                "value": "EN 1090-2 EXC2 / EXC3"
              }
            ]
          })
        }}
      />
      
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          {projects.map((p, i) => (
            <div key={i} className="steel-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-steel-border)', paddingBottom: '1rem' }}>
                <span className="badge badge-steel" style={{ marginBottom: '0.5rem' }}>{p.location.split(',')[1] || 'EU'}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', lineHeight: '1.2' }}>{p.title}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>{p.desc}</p>
              
              {/* Project Specs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', borderTop: '1px solid var(--color-steel-border)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <div className="form-label" style={{ fontSize: '0.7rem' }}>{t.specGrade}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{p.grade}</div>
                </div>
                <div>
                  <div className="form-label" style={{ fontSize: '0.7rem' }}>{t.specStandard}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-amber)' }}>{p.standard}</div>
                </div>
                <div>
                  <div className="form-label" style={{ fontSize: '0.7rem' }}>{t.specWeight}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{p.weight}</div>
                </div>
                <div>
                  <div className="form-label" style={{ fontSize: '0.7rem' }}>{t.specLocation}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '500' }}>{p.location.split('(')[0]}</div>
                </div>
              </div>

              {/* Technologies/Processes used */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.techs.map((tech, idx) => (
                  <span key={idx} style={{ 
                    fontSize: '0.75rem', 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--color-steel-border)', 
                    padding: '0.2rem 0.5rem', 
                    borderRadius: '3px',
                    color: 'var(--text-muted)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
