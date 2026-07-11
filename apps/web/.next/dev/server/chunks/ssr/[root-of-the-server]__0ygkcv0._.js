module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/apps/web/src/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/apps/web/src/app/[lang]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
async function HomePage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang;
    const isFr = lang === 'fr';
    const translations = {
        en: {
            heroTitle: 'Your European Partner for Precision Steel Structures',
            heroSub: 'Agile supply chain management: engineering study center, certified standard raw materials sourcing, and local fabrication by specialized welding workshops in France.',
            ctaRfq: 'Request a Quote (RFQ)',
            ctaProjects: 'Browse Case Studies',
            metric1Lbl: 'Quote Turnaround',
            metric2Lbl: 'Execution Standards',
            metric3Lbl: 'Reinvested Profit Tax (EE)',
            activitiesTitle: 'Our Activities & Sector Expertise',
            activitiesSubtitle: 'Engineering and fabrication solutions tailored to the strict requirements of European infrastructure.',
            act1Title: 'Industrial Chassis & Frames',
            act1Desc: 'Design and fabrication of heavy machine bases and high-precision welded chassis frames.',
            act1Btn: 'Explore More',
            act2Title: 'Steel Bridges & Truss Structures',
            act2Desc: 'Project management of heavy structural framing and steel truss crossing structures.',
            act3Title: 'High-Altitude Access & Industry',
            act3Desc: 'Suspended walkways, complex maintenance platforms, and secure steel access structures.',
            act4Title: 'Engineering & NDT Inspection',
            act4Desc: '3D modeling, Eurocode 3 structural calculations, and technical site inspections.',
            valueTitle: 'Why MetalHub?',
            v1Title: 'Precision Engineering',
            v1Desc: 'Advanced 3D modeling (Tekla/CAD) and structural design calculations processed by our centralized engineering hub.',
            v2Title: 'Certified Materials Sourcing',
            v2Desc: 'Direct procurement of raw sections and sheets (S235JR, S355J2+N with 3.1 certificates) from major European steel mills.',
            v3Title: 'Local Workshop Networks',
            v3Desc: 'Certified ISO 3834 fabrication, laser-cutting, and welding outsourced to local French workshops for minimum transit fees.',
            mapTitle: 'European Logistic Network',
            mapSub: 'Managed under Estonian corporate framework, we coordinate logistics and contracts across Europe with complete regulatory compliance.'
        },
        fr: {
            heroTitle: 'Votre Partenaire Européen de Structures Métalliques',
            heroSub: 'Études d\'ingénierie avancées en direct, sourcing matières premières certifiées et fabrication locale par des ateliers de soudure de proximité en France.',
            ctaRfq: 'Demander un devis (RFQ)',
            ctaProjects: 'Voir nos projets',
            metric1Lbl: 'Délai d\'estimation',
            metric2Lbl: 'Norme d\'Exécution (EXC1-EXC3)',
            metric3Lbl: 'Impôt sur bénéfice réinvesti (Estonie)',
            activitiesTitle: 'Nos Activités & Domaines d\'Intervention',
            activitiesSubtitle: 'Des solutions d\'ingénierie et de fabrication adaptées aux exigences des infrastructures européennes.',
            act1Title: 'Châssis & Bâtis Industriels',
            act1Desc: 'Conception et fabrication de bâtis machines lourds et châssis mécano-soudés de haute précision.',
            act1Btn: 'En savoir +',
            act2Title: 'Ouvrages d\'Art & Ponts',
            act2Desc: 'Gestion de projets de charpentes lourdes et structures de franchissement métallique en treillis.',
            act3Title: 'Accès Industriels Haute Sécurité',
            act3Desc: 'Passerelles suspendues, plateformes de maintenance complexes et structures métalliques d\'accès sécurisé.',
            act4Title: 'Ingénierie & Inspection CND',
            act4Desc: 'Modélisation 3D, calculs de structures Eurocode 3 et inspections techniques sur site.',
            valueTitle: 'Pourquoi choisir MetalHub ?',
            v1Title: 'Ingénierie Rigoureuse',
            v1Desc: 'Modélisation 3D avancée (Tekla/CAD) et notes de calculs structurels exécutées par notre bureau d\'études central.',
            v2Title: 'Sourcing Tracé',
            v2Desc: 'Approvisionnement direct auprès des grands aciéristes européens (aciers S235JR, S355J2+N avec certificats 3.1).',
            v3Title: 'Fabrication Locale',
            v3Desc: 'Découpe laser, pliage et soudage certifiés ISO 3834 confiés à des ateliers locaux en France pour éliminer les frais de transport.',
            mapTitle: 'Réseau Logistique Européen',
            mapSub: 'Grâce à notre siège administratif en Estonie, nous gérons vos projets partout en Europe avec une sécurité juridique et bancaire absolue.'
        },
        de: {
            heroTitle: 'Ihr europäischer Partner für Präzisionsstahlkonstruktionen',
            heroSub: 'Agiles Supply-Chain-Management: Engineering-Zentrum, Beschaffung zertifizierter Rohstoffe und lokale Fertigung durch qualifizierte Schweißwerkstätten.',
            ctaRfq: 'Angebot anfordern (RFQ)',
            ctaProjects: 'Projektbeispiele ansehen',
            metric1Lbl: 'Angebotslaufzeit',
            metric2Lbl: 'Ausführungsstandards (EXC1-EXC3)',
            metric3Lbl: 'Reinvestierte Gewinnsteuer (EE)',
            activitiesTitle: 'Unsere Aktivitäten & Branchenkompetenz',
            activitiesSubtitle: 'Technische Planungen und Fertigungslösungen, die den strengen Anforderungen europäischer Infrastruktur entsprechen.',
            act1Title: 'Industriegestelle & Rahmen',
            act1Desc: 'Planung und Herstellung schwerer Maschinenbetten und hochpräziser schweißtechnischer Rahmen.',
            act1Btn: 'Mehr erfahren',
            act2Title: 'Stahlbrücken & Fachwerke',
            act2Desc: 'Projektmanagement schwerer Rahmenkonstruktionen und Fachwerk-Stahlbrücken.',
            act3Title: 'Industrieller Höhenzugang & Sicherheit',
            act3Desc: 'Hängende Laufstege, komplexe Wartungsplattformen und sichere Zugangssysteme.',
            act4Title: 'Engineering & ZfP-Prüfung',
            act4Desc: '3D-Modellierung, Tragwerksberechnungen nach Eurocode 3 und technische Vor-Ort-Inspektionen.',
            valueTitle: 'Warum MetalHub?',
            v1Title: 'Präzisions-Engineering',
            v1Desc: 'Fortgeschrittene 3D-Modellierung (Tekla/CAD) und Tragwerksberechnungen durch unser Engineering-Zentrum.',
            v2Title: 'Zertifizierter Materialeinkauf',
            v2Desc: 'Direktbezug von Profilstahl und Blechen (S235JR, S355J2+N mit 3.1-Zertifikat) von führenden europäischen Hütten.',
            v3Title: 'Lokale Schweißnetzwerke',
            v3Desc: 'Zertifizierte Fertigung nach ISO 3834, Laserschneiden und Schweißen in regionalen Werkstätten zur Minimierung der Transportkosten.',
            mapTitle: 'Europäisches Logistiknetzwerk',
            mapSub: 'Über unsere estnische Unternehmensstruktur steuern wir Logistik und Verträge in ganz Europa unter Einhaltung aller Rechtsvorschriften.'
        },
        nl: {
            heroTitle: 'Uw Europese partner voor precisie staalconstructies',
            heroSub: 'Agile supply chain management: engineering studiecentrum, gecertificeerde grondstoffen sourcing, en lokale fabricage door gespecialiseerde laswerkplaatsen.',
            ctaRfq: 'Offerte aanvragen (RFQ)',
            ctaProjects: 'Bekijk projecten',
            metric1Lbl: 'Offerte doorlooptijd',
            metric2Lbl: 'Uitvoeringsnormen (EXC1-EXC3)',
            metric3Lbl: 'Belasting op herbelegde winst (EE)',
            activitiesTitle: 'Onze Activiteiten & Sector Expertise',
            activitiesSubtitle: 'Engineering- en fabricage-oplossingen op maat voor de strenge eisen van de Europese infrastructuur.',
            act1Title: 'Industriële Chassis & Frames',
            act1Desc: 'Ontwerp en fabricage van zware machinebedden en hoogwaardig gelaste frameconstructies.',
            act1Btn: 'Meer info',
            act2Title: 'Stalen Bruggen & Vakwerken',
            act2Desc: 'Projectmanagement van zware staalconstructies en vakwerkbruggen.',
            act3Title: 'Industriële Toegang & Veiligheid',
            act3Desc: 'Hangende loopbruggen, complexe onderhoudsplatforms en veilige toegangstrappen.',
            act4Title: 'Engineering & NDT Inspectie',
            act4Desc: '3D-modellering, Eurocode 3 sterkteberekeningen en technische kwaliteitscontroles op locatie.',
            valueTitle: 'Waarom MetalHub?',
            v1Title: 'Nauwkeurige Engineering',
            v1Desc: 'Geavanceerde 3D-modellering (Tekla/CAD) en sterkteberekeningen verzorgd door ons centrale engineering center.',
            v2Title: 'Gecertificeerde Materialen',
            v2Desc: 'Directe inkoop van profielstaal en platen (S235JR, S355J2+N met 3.1 certificaten) bij gerenommeerde Europese staalfabrieken.',
            v3Title: 'Lokale Laswerkplaatsen',
            v3Desc: 'ISO 3834 gecertificeerde fabricage, lasersnijden en laswerk uitbesteed aan lokale werkplaatsen voor minimale transportkosten.',
            mapTitle: 'Europees Logistiek Netwerk',
            mapSub: 'Beheerd onder Ests zakelijk kader, coördineren we logistiek en contracten door heel Europa met volledige naleving van de wet.'
        },
        es: {
            heroTitle: 'Su Socio Europeo en Estructuras de Acero de Precisión',
            heroSub: 'Gestión ágil de la cadena de suministro: ingeniería de diseño, suministro de materias primas certificadas y fabricación local por talleres metalúrgicos calificados.',
            ctaRfq: 'Solicitar Presupuesto (RFQ)',
            ctaProjects: 'Ver Casos de Éxito',
            metric1Lbl: 'Plazo de Cotización',
            metric2Lbl: 'Normas de Ejecución (EXC1-EXC3)',
            metric3Lbl: 'Impuesto sobre beneficios reinvertidos (EE)',
            activitiesTitle: 'Nuestras Actividades y Especialización',
            activitiesSubtitle: 'Soluciones de ingeniería y fabricación adaptadas a los estrictos requisitos de la infraestructura europea.',
            act1Title: 'Bancadas y Chasis Industriales',
            act1Desc: 'Diseño y fabricación de bases de maquinaria pesada y chasis soldados de alta precisión.',
            act1Btn: 'Saber más',
            act2Title: 'Puentes de Acero y Estructuras en Celosía',
            act2Desc: 'Gestión de proyectos de pórticos estructurales pesados y pasarelas metálicas en celosía.',
            act3Title: 'Accesos Industriales de Alta Seguridad',
            act3Desc: 'Pasarelas suspendidas, plataformas complejas de mantenimiento y sistemas seguros de acceso.',
            act4Title: 'Ingeniería e Inspección CND',
            act4Desc: 'Modelado 3D, cálculos estructurales según Eurocódigo 3 e inspecciones técnicas in situ.',
            valueTitle: '¿Por qué MetalHub?',
            v1Title: 'Ingeniería de Precisión',
            v1Desc: 'Modelado 3D avanzado (Tekla/CAD) y cálculos de diseño procesados por nuestro centro técnico de ingeniería.',
            v2Title: 'Materiales Certificados',
            v2Desc: 'Suministro directo de perfiles y chapas laminadas (S235JR, S355J2+N con certificados 3.1) de acererías europeas líderes.',
            v3Title: 'Talleres Locales',
            v3Desc: 'Fabricación certificada ISO 3834, corte por láser y soldadura subcontratados a talleres locales en Francia para ahorrar costes de transporte.',
            mapTitle: 'Red Logística Europea',
            mapSub: 'Gestionado bajo la jurisdicción corporativa de Estonia, coordinamos la logística y los contratos en toda Europa con plena conformidad legal.'
        },
        it: {
            heroTitle: 'Il Vostro Partner Europeo per Strutture in Acciaio di Precisione',
            heroSub: 'Gestione agile della catena di fornitura: centro di ingegneria, approvvigionamento di materie prime certificate e fabbricazione locale da parte di officine specializzate.',
            ctaRfq: 'Richiedi Preventivo (RFQ)',
            ctaProjects: 'Vedi i Progetti',
            metric1Lbl: 'Tempo di Preventivazione',
            metric2Lbl: 'Classi di Esecuzione (EXC1-EXC3)',
            metric3Lbl: 'Tassazione sui profitti reinvestiti (EE)',
            activitiesTitle: 'Le Nostre Attività e Competenza Settoriale',
            activitiesSubtitle: 'Soluzioni di ingegneria e fabbricazione su misura per i severi requisiti delle infrastrutture europee.',
            act1Title: 'Bancali e Telai Industriali',
            act1Desc: 'Progettazione e fabbricazione di basi per macchine pesanti e telai elettrosaldati di alta precisione.',
            act1Btn: 'Scopri di più',
            act2Title: 'Ponti in Acciaio e Strutture Reticolari',
            act2Desc: 'Gestione di progetti di carpenteria pesante e strutture reticolari in acciaio per attraversamenti.',
            act3Title: 'Accessi Industriali ad Alta Sicurezza',
            act3Desc: 'Passerelle sospese, piattaforme di manutenzione complesse e scale metalliche di sicurezza.',
            act4Title: 'Ingegneria e Ispezione PND',
            act4Desc: 'Modellazione 3D, calcoli strutturali Eurocodice 3 e controlli non distruttivi in cantiere.',
            valueTitle: 'Perché scegliere MetalHub?',
            v1Title: 'Ingegneria di Precisione',
            v1Desc: 'Modellazione 3D avanzata (Tekla/CAD) e calcoli strutturali eseguiti dal nostro centro tecnico interno.',
            v2Title: 'Materiali Certificati',
            v2Desc: 'Approvvigionamento diretto di travi e lamiere (S235JR, S355J2+N con certificati 3.1) dalle principali acciaierie europee.',
            v3Title: 'Carpenterie Locali',
            v3Desc: 'Fabbricazione certificata ISO 3834, taglio laser e saldatura affidati a officine locali in Francia per azzerare le spese di trasporto.',
            mapTitle: 'Rete Logistica Europea',
            mapSub: 'Gestito sotto il quadro societario estone, coordiniamo contratti e spedizioni in tutta Europa in totale conformità normativa.'
        },
        no: {
            heroTitle: 'Din Europeiske Partner for Presisjonsstålkonstruksjoner',
            heroSub: 'Smidig forsyningskjede: ingeniøravdeling, innkjøp av sertifiserte råvarer og lokal produksjon av spesialiserte sveisegodkjente verksteder.',
            ctaRfq: 'Be om tilbud (RFQ)',
            ctaProjects: 'Se våre prosjekter',
            metric1Lbl: 'Svartid på tilbud',
            metric2Lbl: 'Utførelsesklasser (EXC1-EXC3)',
            metric3Lbl: 'Gjeninvestert overskuddsskatt (EE)',
            activitiesTitle: 'Våre Aktiviteter & Sektor-Expertise',
            activitiesSubtitle: 'Prosjekterings- og fabrikasjonsløsninger tilpasset de strenge kravene til europeisk infrastruktur.',
            act1Title: 'Industrielle Chassis & Rammer',
            act1Desc: 'Design og produksjon av tunge maskinfundamenter og fintolerert sveisede rammer.',
            act1Btn: 'Les mer',
            act2Title: 'Stålbroer & Fagverkskonstruksjoner',
            act2Desc: 'Prosjektstyring av tunge fagverk og stålkonstruksjoner for kryssinger.',
            act3Title: 'Industrielle Adkomstsystemer',
            act3Desc: 'Hengende gangveier, komplekse plattformer for vedlikehold og sikre ståltrapper.',
            act4Title: 'Ingeniørtjenester & NDT-kontroll',
            act4Desc: '3D-modellering, Eurocode 3 styrkeberegninger og tekniske kontroller på anlegget.',
            valueTitle: 'Hvorfor MetalHub?',
            v1Title: 'Nøyaktig Prosjektering',
            v1Desc: 'Avansert 3D-modellering (Tekla/CAD) og strukturanalyser utført av vår sentraliserte ingeniøravdeling.',
            v2Title: 'Sertifiserte Materialer',
            v2Desc: 'Direkte innkjøp av bjelker og plater (S235JR, S355J2+N med 3.1 sertifikater) fra ledende stålverk i Europa.',
            v3Title: 'Lokale Sveisesteder',
            v3Desc: 'ISO 3834 sertifisert tilvirking, laserskjæring og sveising utført av lokale verksteder for å minimere transportkostnader.',
            mapTitle: 'Europeisk Logistikknettverk',
            mapSub: 'Administrert under estisk selskapsstruktur, koordinerer vi logistikk og kontrakter i hele Europa med full juridisk sikkerhet.'
        },
        sv: {
            heroTitle: 'Din Europeiska Partner för Precisionsstålkonstruktioner',
            heroSub: 'Smidig supply chain management: ingenjörscenter, inköp av certifierat råmaterial och lokal tillverkning av specialiserade svetsverkstäder.',
            ctaRfq: 'Begär offert (RFQ)',
            ctaProjects: 'Visa referensprojekt',
            metric1Lbl: 'Offerttid',
            metric2Lbl: 'Utförandestandarder (EXC1-EXC3)',
            metric3Lbl: 'Reinvesterad vinstskatt (EE)',
            activitiesTitle: 'Våra Aktiviteter & Expertis',
            activitiesSubtitle: 'Konstruktions- och tillverkningslösningar anpassade för europeiska infrastrukturkrav.',
            act1Title: 'Industriella Chassin & Ramar',
            act1Desc: 'Konstruktion och tillverkning av tunga maskinbäddar och finmekaniskt svetsade ramar.',
            act1Btn: 'Läs mer',
            act2Title: 'Stålbroar & Fackverkskonstruktioner',
            act2Desc: 'Projektledning för tunga bärande ramar och fackverksbroar av stål.',
            act3Title: 'Industriella Tillträdessystem',
            act3Desc: 'Hängande gångbroar, komplexa underhållsplattformar och säkra tillträdestrappor av stål.',
            act4Title: 'Konstruktion & NDT-besiktning',
            act4Desc: '3D-modellering, hållfasthetsberäkningar enligt Eurokod 3 och teknisk inspektion på plats.',
            valueTitle: 'Varför MetalHub?',
            v1Title: 'Precisionskonstruktion',
            v1Desc: 'Avancerad 3D-modellering (Tekla/CAD) och konstruktionsberäkningar bearbetade av vårt centrala ingenjörscenter.',
            v2Title: 'Certifierat Material',
            v2Desc: 'Direktinköp av balkar och plåt (S235JR, S355J2+N med 3.1-intyg) från ledande europeiska stålverk.',
            v3Title: 'Lokala Verkstadsnätverk',
            v3Desc: 'ISO 3834-certifierad tillverkning, laserskärning och svetsning hos lokala verkstäder för lägsta transportkostnader.',
            mapTitle: 'Europeiskt Logistiknätverk',
            mapSub: 'Hanterat inom estniskt bolagsramverk samordnar vi logistik och kontrakt över hela Europa med full regelefterlevnad.'
        },
        pl: {
            heroTitle: 'Twój Europejski Partner w Zakresie Precyzyjnych Konstrukcji Stalowych',
            heroSub: 'Zwinne zarządzanie łańcuchem dostaw: biuro inżynieryjne, zaopatrzenie w certyfikowane surowce i lokalna produkcja w wyspecjalizowanych warsztatach.',
            ctaRfq: 'Zapytaj o wycenę (RFQ)',
            ctaProjects: 'Zobacz Projekty',
            metric1Lbl: 'Czas Wyceny',
            metric2Lbl: 'Normy Wykonania (EXC1-EXC3)',
            metric3Lbl: 'Podatek od zysków reinwestowanych (EE)',
            activitiesTitle: 'Nasza Działalność i Specjalizacja Branżowa',
            activitiesSubtitle: 'Rozwiązania inżynieryjne i produkcyjne dostosowane do rygorystycznych wymogów infrastruktury europejskiej.',
            act1Title: 'Bazy Maszyn i Ramy Przemysłowe',
            act1Desc: 'Projektowanie i produkcja ciężkich łoży maszynowych i precyzyjnych ram spawanych.',
            act1Btn: 'Dowiedz się więcej',
            act2Title: 'Mosty Stalowe i Konstrukcje Kratownicowe',
            act2Desc: 'Zarządzanie projektami ciężkich konstrukcji wsporczych i stalowych kładek kratownicowych.',
            act3Title: 'Przemysłowe Prace Wysokościowe i Dostęp',
            act3Desc: 'Podwieszane pomosty robocze, skomplikowane platformy konserwacyjne i bezpieczne schody stalowe.',
            act4Title: 'Projektowanie i Badania NDT',
            act4Desc: 'Modelowanie 3D, obliczenia konstrukcyjne wg Eurokodu 3 oraz badania nieniszczące konstrukcji.',
            valueTitle: 'Dlaczego MetalHub?',
            v1Title: 'Precyzyjna Inżynieria',
            v1Desc: 'Zaawansowane modelowanie 3D (Tekla/CAD) oraz obliczenia wytrzymałościowe realizowane przez nasze centralne biuro inżynieryjne.',
            v2Title: 'Certyfikowane Materiały',
            v2Desc: 'Bezpośrednie zaopatrzenie w kształtowniki i blachy (S235JR, S355J2+N z atestami 3.1) z wiodących hut europejskich.',
            v3Title: 'Lokalne Warsztaty',
            v3Desc: 'Produkcja certyfikowana wg ISO 3834, cięcie laserowe i spawanie powierzone lokalnym warsztatom w celu redukcji kosztów transportu.',
            mapTitle: 'Europejska Sieć Logistyczna',
            mapSub: 'Dzięki rejestracji i zarządowi w Estonii koordynujemy projekty i finanse w całej Europie w pełni legalnie i bezpiecznie.'
        }
    };
    const currentLang = translations[lang] ? lang : 'en';
    const t = translations[currentLang];
    const activities = [
        {
            title: t.act1Title,
            desc: t.act1Desc,
            image: '/assets/images/steel_fabrication.png',
            color: '#ff7a00'
        },
        {
            title: t.act2Title,
            desc: t.act2Desc,
            image: '/assets/images/bridge_assembly.png',
            color: '#10b981'
        },
        {
            title: t.act3Title,
            desc: t.act3Desc,
            image: '/assets/images/industrial_welding.png',
            color: '#ef4444'
        },
        {
            title: t.act4Title,
            desc: t.act4Desc,
            image: '/assets/images/engineering_review.png',
            color: '#3b82f6'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cad-grid-bg",
        style: {
            minHeight: '100vh',
            padding: '4rem 0 0 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container",
                style: {
                    marginBottom: '8rem',
                    paddingTop: '2rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'left'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge badge-standard",
                                    style: {
                                        marginBottom: '1.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em'
                                    },
                                    children: isFr ? 'Hub de Construction Métallique' : 'Industrial Steel Supply Hub'
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: '3.2rem',
                                        lineHeight: '1.1',
                                        marginBottom: '1.5rem',
                                        fontWeight: '800'
                                    },
                                    children: t.heroTitle
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-subtitle",
                                    style: {
                                        fontSize: '1.2rem',
                                        lineHeight: '1.6',
                                        marginBottom: '2.5rem',
                                        margin: '0 0 2.5rem 0',
                                        textAlign: 'left'
                                    },
                                    children: t.heroSub
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '1rem',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${lang}/rfq`,
                                            className: "btn btn-primary",
                                            style: {
                                                padding: '0.9rem 2rem'
                                            },
                                            children: t.ctaRfq
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${lang}/projects`,
                                            className: "btn btn-secondary",
                                            style: {
                                                padding: '0.9rem 2rem'
                                            },
                                            children: t.ctaProjects
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: '-10px',
                                        border: '1px dashed var(--color-steel-border)',
                                        borderRadius: '12px',
                                        pointerEvents: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        border: '1px solid var(--color-steel-border)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                                        backgroundColor: 'var(--color-steel-medium)',
                                        height: '420px',
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/images/steel_fabrication.png",
                                            alt: "Industrial Steel Structure Fabrication",
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: 'linear-gradient(to top, rgba(11, 14, 20, 0.9) 0%, transparent 100%)',
                                                padding: '2rem 1.5rem',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-end'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.7rem',
                                                                color: 'var(--color-amber)',
                                                                textTransform: 'uppercase',
                                                                fontWeight: 'bold',
                                                                letterSpacing: '0.05em'
                                                            },
                                                            children: "Active Workshop"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            style: {
                                                                fontSize: '1.1rem',
                                                                marginTop: '0.2rem'
                                                            },
                                                            children: "Mécano-Soudure EXC2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge badge-steel",
                                                    children: "EN 1090-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container",
                style: {
                    marginBottom: '8rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    },
                    children: [
                        {
                            val: t.metric1Val,
                            lbl: t.metric1Lbl
                        },
                        {
                            val: t.metric2Val,
                            lbl: t.metric2Lbl
                        },
                        {
                            val: t.metric3Val,
                            lbl: t.metric3Lbl
                        }
                    ].map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "steel-card",
                            style: {
                                textAlign: 'center',
                                padding: '2.5rem 1.5rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '3rem',
                                        fontWeight: '800',
                                        color: 'var(--color-amber)',
                                        marginBottom: '0.5rem',
                                        fontFamily: 'var(--font-space-grotesk)'
                                    },
                                    children: m.val
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-label",
                                    style: {
                                        fontSize: '0.85rem'
                                    },
                                    children: m.lbl
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container",
                style: {
                    marginBottom: '8rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title",
                                children: t.activitiesTitle
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-subtitle",
                                children: t.activitiesSubtitle
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '2rem'
                        },
                        children: activities.map((act, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "steel-card",
                                style: {
                                    padding: '0',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    backgroundColor: 'var(--color-steel-medium)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '200px',
                                            overflow: 'hidden',
                                            position: 'relative'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: act.image,
                                            alt: act.title,
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease'
                                            },
                                            className: "activity-card-img"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: '4px',
                                            backgroundColor: act.color,
                                            width: '100%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '2rem 1.5rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flex: '1'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.25rem',
                                                    fontWeight: '700',
                                                    marginBottom: '0.75rem',
                                                    lineHeight: '1.3'
                                                },
                                                children: act.title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'var(--text-muted)',
                                                    fontSize: '0.9rem',
                                                    lineHeight: '1.5',
                                                    marginBottom: '2rem',
                                                    flex: '1'
                                                },
                                                children: act.desc
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${lang}/services`,
                                                className: "btn btn-secondary",
                                                style: {
                                                    marginTop: 'auto',
                                                    alignSelf: 'flex-start',
                                                    fontSize: '0.85rem',
                                                    padding: '0.5rem 1rem',
                                                    borderColor: act.color,
                                                    color: '#ffffff'
                                                },
                                                children: t.act1Btn
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container",
                style: {
                    marginBottom: '8rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: t.valueTitle
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "steel-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--color-cad-blue)',
                                            marginBottom: '1.5rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "36",
                                            height: "36",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18l-5-4-5 4-5-4-5 4z"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 486,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 485,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '1.3rem',
                                            marginBottom: '1rem'
                                        },
                                        children: t.v1Title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'var(--text-muted)',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        },
                                        children: t.v1Desc
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "steel-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--color-cad-blue)',
                                            marginBottom: '1.5rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "36",
                                            height: "36",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21.5 2v6h-6M21.34 15.57a10 10 0 11-.57-8.38l5.67-5.67"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 495,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '1.3rem',
                                            marginBottom: '1rem'
                                        },
                                        children: t.v2Title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'var(--text-muted)',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        },
                                        children: t.v2Desc
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                lineNumber: 494,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "steel-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--color-cad-blue)',
                                            marginBottom: '1.5rem'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "36",
                                            height: "36",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 506,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '1.3rem',
                                            marginBottom: '1rem'
                                        },
                                        children: t.v3Title
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'var(--text-muted)',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        },
                                        children: t.v3Desc
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container",
                style: {
                    paddingBottom: '8rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "steel-card",
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        alignItems: 'center',
                        padding: '4rem 3rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge badge-steel",
                                    style: {
                                        marginBottom: '1rem'
                                    },
                                    children: "E-Residency / Estonia Hub"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: '2rem',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.2'
                                    },
                                    children: t.mapTitle
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'var(--text-muted)',
                                        lineHeight: '1.6',
                                        marginBottom: '1.5rem'
                                    },
                                    children: t.mapSub
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.75rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontSize: '0.9rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 'var(--color-amber)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Contract & Banking operations: Tallinn, Estonia"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontSize: '0.9rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 'var(--color-cad-blue)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Engineering & CAD study: Intellectual Center"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                fontSize: '0.9rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        backgroundColor: '#10b981'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Fabrication & Welder validation: Local EU Workshops"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: '280px',
                                borderRadius: '6px',
                                border: '1px dashed var(--color-steel-border)',
                                position: 'relative',
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                overflow: 'hidden'
                            },
                            className: "flex-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        opacity: 0.15
                                    },
                                    className: "cad-grid-bg"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'var(--color-steel-border)',
                                        fontSize: '0.8rem',
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px'
                                    },
                                    children: "GRID-SCALE: 1:50000"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 400 200",
                                    width: "100%",
                                    height: "80%",
                                    stroke: "var(--color-cad-blue)",
                                    strokeWidth: "1.5",
                                    fill: "none",
                                    style: {
                                        opacity: 0.8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "340",
                                            cy: "40",
                                            r: "6",
                                            fill: "var(--color-cad-blue)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 556,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "310",
                                            y: "30",
                                            fill: "#ffffff",
                                            fontSize: "10",
                                            fontFamily: "var(--font-space-grotesk)",
                                            children: "Tallinn (EE)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 557,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "360",
                                            cy: "180",
                                            r: "6",
                                            fill: "var(--color-amber)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 558,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "280",
                                            y: "185",
                                            fill: "var(--color-amber)",
                                            fontSize: "10",
                                            fontFamily: "var(--font-space-grotesk)",
                                            children: "Engineering Hub"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 559,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "100",
                                            cy: "100",
                                            r: "5",
                                            fill: "#10b981"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "60",
                                            y: "90",
                                            fill: "#ffffff",
                                            fontSize: "9",
                                            children: "Rhône-Alpes"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "80",
                                            cy: "40",
                                            r: "5",
                                            fill: "#10b981"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "50",
                                            y: "35",
                                            fill: "#ffffff",
                                            fontSize: "9",
                                            children: "Lille (FR)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "340",
                                            y1: "40",
                                            x2: "360",
                                            y2: "180",
                                            strokeDasharray: "3,3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "340",
                                            y1: "40",
                                            x2: "100",
                                            y2: "100"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "340",
                                            y1: "40",
                                            x2: "80",
                                            y2: "40"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "360",
                                            y1: "180",
                                            x2: "100",
                                            y2: "100",
                                            strokeDasharray: "3,3",
                                            stroke: "var(--color-amber)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "100",
                                            y1: "100",
                                            x2: "80",
                                            y2: "40",
                                            stroke: "#10b981"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                    lineNumber: 518,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/[lang]/page.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/app/[lang]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/[lang]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ygkcv0._.js.map