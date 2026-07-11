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
"[project]/apps/web/src/app/[lang]/services/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
async function ServicesPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang;
    const translations = {
        en: {
            title: 'Our B2B Industrial Services',
            subtitle: 'From initial CAD engineering calculation to final assembly on your European construction site.',
            s1Title: '1. Conception & Engineering (CAD Hub)',
            s1Sub: 'Technical studies, 3D modeling, and calculation notes',
            s1Desc1: 'Our centralized engineering center processes raw measurements into detailed fabrication drawings and interactive Tekla models.',
            s1Desc2: 'We conduct Finite Element Analysis (FEA) stress tests and design structures fully compliant with Eurocodes (Eurocode 3 for steel).',
            s2Title: '2. Certified Materials Sourcing',
            s2Sub: 'Traceable high-quality steel under European Standards',
            s2Desc1: 'We procure raw steel profiles (IPE/HEA/HEB beams, structural tubes, plates) directly from leading European suppliers like Prolians.',
            s2Desc2: 'Every delivery is accompanied by EN 10204 3.1 mill test certificates, guaranteeing heat traceability and grade resilience (S235JR, S355J2+N).',
            s3Title: '3. Fabrication & Welding Networks',
            s3Sub: 'Certified EN 1090 fabrication and local welding',
            s3Desc1: 'To eliminate heavy cross-border transport fees, cutting (fiber laser, CNC punching) and assembly are executed by local certified workshops near your site.',
            s3Desc2: 'Our partner workshops operate under ISO 3834 and execute welding according to EN 1090-2 (Execution Classes EXC1 to EXC3), with ISO 9606 qualified welding operators.',
            ctaText: 'Send your DXF/PDF drawings for estimation',
            ctaBtn: 'Go to RFQ Portal'
        },
        fr: {
            title: 'Nos Prestations Industrielles B2B',
            subtitle: 'De l\'étude d\'ingénierie CAO initiale à l\'assemblage final sur votre chantier en Europe.',
            s1Title: '1. Conception & Ingénierie (CAD Hub)',
            s1Sub: 'Études techniques, modélisation 3D et notes de calculs',
            s1Desc1: 'Notre bureau d\'études centralisé traite vos données brutes pour en faire des plans d\'exécution détaillés et des modèles Tekla interactifs.',
            s1Desc2: 'Nous réalisons les analyses de contraintes par éléments finis (FEA) et calculons les structures selon les Eurocodes (Eurocode 3 pour l\'acier).',
            s2Title: '2. Approvisionnement Standard Européen',
            s2Sub: 'Acier traçable de haute qualité aux normes EN',
            s2Desc1: 'Nous achetons la matière première (poutrelles IPE/HEA/HEB, tubes structurels, tôles d\'acier) directement auprès des leaders européens comme Prolians.',
            s2Desc2: 'Chaque livraison est accompagnée de certificats d\'usine EN 10204 3.1 garantissant la traçabilité des coulées et la résilience (grades S235JR, S355J2+N).',
            s3Title: '3. Fabrication & Soudure Locale',
            s3Sub: 'Façonnage et soudage certifiés EN 1090',
            s3Desc1: 'Pour éliminer les frais de transport transfrontaliers, le façonnage (découpe laser, pliage CNC) et l\'assemblage sont confiés à des ateliers de soudure locaux dans le pays du projet.',
            s3Desc2: 'Nos ateliers partenaires travaillent sous certification ISO 3834 et exécutent le soudage selon la norme EN 1090-2 (classes EXC1 à EXC3), avec des soudeurs qualifiés ISO 9606.',
            ctaText: 'Envoyer vos plans DXF/PDF pour chiffrage',
            ctaBtn: 'Accéder au portail RFQ'
        },
        de: {
            title: 'Unsere industriellen B2B-Dienstleistungen',
            subtitle: 'Von der ersten CAD-Konstruktionsberechnung bis zur Endmontage auf Ihrer europäischen Baustelle.',
            s1Title: '1. Konstruktion & Engineering (CAD Hub)',
            s1Sub: 'Technische Studien, 3D-Modellierung und Berechnungsberichte',
            s1Desc1: 'Unser zentrales Konstruktionsbüro verarbeitet Ihre Rohdaten zu detaillierten Werkstattzeichnungen und interaktiven Tekla-Modellen.',
            s1Desc2: 'Wir führen Finite-Elemente-Analysen (FEA) durch und berechnen Tragwerke nach den Eurocodes (Eurocode 3 für Stahl).',
            s2Title: '2. Zertifizierter Materialeinkauf',
            s2Sub: 'Rückverfolgbarer Qualitätsstahl nach europäischen Normen',
            s2Desc1: 'Wir beziehen Vormaterial (IPE/HEA/HEB-Träger, Hohlprofile, Bleche) direkt von führenden europäischen Anbietern wie Prolians.',
            s2Desc2: 'Jeder Lieferung liegen EN 10204 3.1 Werkszeugnisse bei, die die Schmelzenrückverfolgbarkeit und Zähigkeit (S235JR, S355J2+N) garantieren.',
            s3Title: '3. Regionale Schweißnetzwerke',
            s3Sub: 'Zertifizierte Fertigung nach EN 1090 und lokales Schweißen',
            s3Desc1: 'Um hohe Transportkosten zu vermeiden, werden Zuschnitt (Faserlaser, CNC-Stanzen) und Zusammenbau von zertifizierten Werkstätten in Projektnaehe ausgeführt.',
            s3Desc2: 'Unsere Partnerwerkstätten arbeiten nach ISO 3834 und schweißen nach EN 1090-2 (Ausführungsklassen EXC1 bis EXC3) mit geprüften Schweißern nach ISO 9606.',
            ctaText: 'Senden Sie Ihre DXF/PDF-Zeichnungen zur Kalkulation',
            ctaBtn: 'Zum RFQ-Portal'
        },
        nl: {
            title: 'Onze B2B Industriële Diensten',
            subtitle: 'Van de eerste CAD-engineeringberekening tot de eindmontage op uw Europese bouwplaats.',
            s1Title: '1. Ontwerp & Engineering (CAD Hub)',
            s1Sub: 'Technische studies, 3D-modellering en sterkteberekeningen',
            s1Desc1: 'Ons centrale engineering center verwerkt ruwe metingen tot gedetailleerde productietekeningen en interactieve Tekla-modellen.',
            s1Desc2: 'Wij voeren Eindige Elementen Analyses (FEA) uit en ontwerpen constructies conform Eurocodes (Eurocode 3 voor staal).',
            s2Title: '2. Gecertificeerde inkoop van materialen',
            s2Sub: 'Traceerbaar kwaliteitsstaal volgens Europese normen',
            s2Desc1: 'Wij kopen profielstaal (IPE/HEA/HEB-balken, buizen en platen) rechtstreeks in bij toonaangevende Europese leveranciers zoals Prolians.',
            s2Desc2: 'Elke levering is voorzien van EN 10204 3.1 materiaalcertificaten, ter garantie van smelthistorie en taaiheid (S235JR, S355J2+N).',
            s3Title: '3. Productie- & lasnetwerken',
            s3Sub: 'Gecertificeerde EN 1090 fabricage en lokaal lassen',
            s3Desc1: 'Om zware transportkosten te vermijden, worden lasersnijden, zetten en montage uitgevoerd door gecertificeerde werkplaatsen in de regio.',
            s3Desc2: 'Onze partnerwerkplaatsen werken onder ISO 3834 en lassen conform EN 1090-2 (uitvoeringsklassen EXC1 tot EXC3) met gecertificeerde lassers (ISO 9606).',
            ctaText: 'Stuur uw DXF/PDF-tekeningen voor een prijsopgave',
            ctaBtn: 'Naar het RFQ-portal'
        },
        es: {
            title: 'Nuestros Servicios Industriales B2B',
            subtitle: 'Desde el cálculo inicial de ingeniería CAD hasta el montaje final en su obra en Europa.',
            s1Title: '1. Diseño e Ingeniería (Centro CAD)',
            s1Sub: 'Estudios técnicos, modelado 3D y notas de cálculo',
            s1Desc1: 'Nuestro centro de ingeniería centralizado procesa las mediciones en dibujos detallados de fabricación y modelos interactivos de Tekla.',
            s1Desc2: 'Realizamos análisis de elementos finitos (FEA) y diseñamos estructuras de total conformidad con los Eurocódigos (Eurocódigo 3 para acero).',
            s2Title: '2. Suministro de Materiales Certificados',
            s2Sub: 'Acero trazable de alta calidad bajo normas europeas',
            s2Desc1: 'Adquirimos perfiles de acero (vigas IPE/HEA/HEB, tubos estructurales, chapas) directamente de proveedores europeos líderes como Prolians.',
            s2Desc2: 'Cada entrega se acompaña de certificados de ensayo EN 10204 3.1, garantizando la trazabilidad de colada y resiliencia (S235JR, S355J2+N).',
            s3Title: '3. Redes de Fabricación y Soldadura',
            s3Sub: 'Fabricación certificada EN 1090 y soldadura local',
            s3Desc1: 'Para eliminar los costes de transporte transfronterizo, el corte (láser de fibra, punzonado CNC) y el premontaje se realizan en talleres certificados locales.',
            s3Desc2: 'Nuestros talleres asociados operan bajo la norma ISO 3834 y sueldan según EN 1090-2 (clases EXC1 a EXC3) con soldadores cualificados ISO 9606.',
            ctaText: 'Envíe sus planos DXF/PDF para valoración',
            ctaBtn: 'Ir al Portal RFQ'
        },
        it: {
            title: 'I Nostri Servizi Industriali B2B',
            subtitle: 'Dal calcolo ingegneristico CAD iniziale al montaggio finale nel vostro cantiere in Europa.',
            s1Title: '1. Progettazione e Ingegneria (Hub CAD)',
            s1Sub: 'Studi tecnici, modellazione 3D e note di calcolo strutturale',
            s1Desc1: 'Il nostro centro ingegneristico centralizzato elabora i rilievi in disegni costruttivi dettagliati e modelli Tekla interattivi.',
            s1Desc2: 'Eseguiamo analisi agli elementi finiti (FEA) e calcoli strutturali in piena conformità agli Eurocodici (Eurocodice 3 per l\'acciaio).',
            s2Title: '2. Approvvigionamento di Materiali Certificati',
            s2Sub: 'Acciaio tracciabile di alta qualità secondo gli standard europei',
            s2Desc1: 'Acquistiamo profilati in acciaio (travi IPE/HEA/HEB, tubolari, lamiere) direttamente dai leader della distribuzione europea come Prolians.',
            s2Desc2: 'Ogni fornitura è corredata da certificati di collaudo EN 10204 3.1, che garantiscono la tracciabilità della colata e la resilienza (S235JR, S355J2+N).',
            s3Title: '3. Officine di Carpenteria e Saldatura Locali',
            s3Sub: 'Fabbricazione certificata EN 1090 e saldatura qualificata',
            s3Desc1: 'Per eliminare i pesanti costi di trasporto, le lavorazioni (taglio laser, piegatura) e l\'assemblaggio sono affidati a officine certificate locali.',
            s3Desc2: 'I nostri partner operano in regime ISO 3834 ed eseguono saldature secondo EN 1090-2 (classi EXC1 e EXC3) con saldatori qualificati ISO 9606.',
            ctaText: 'Inviate i vostri disegni DXF/PDF per un preventivo',
            ctaBtn: 'Vai al Portale RFQ'
        },
        no: {
            title: 'Våre B2B Industrielle Tjenester',
            subtitle: 'Fra innledende CAD-prosjektering til sluttmontering på din byggeplass i Europa.',
            s1Title: '1. Prosjektering & Konstruksjon (CAD Hub)',
            s1Sub: 'Tekniske studier, 3D-modellering og beregninger',
            s1Desc1: 'Vårt sentraliserte ingeniørkontor gjør råmål om til detaljerte produksjonstegninger og interaktive Tekla-modeller.',
            s1Desc2: 'Vi utfører FEA-analyser (Finite Element Analysis) og beregner konstruksjoner i samsvar med Eurocode 3.',
            s2Title: '2. Sertifisert Materialinnkjøp',
            s2Sub: 'Sporbart stål av høy kvalitet under europeiske standarder',
            s2Desc1: 'Vi kjøper råstål (IPE/HEA/HEB-bjelker, rør og plater) direkte fra ledende europeiske grossister som Prolians.',
            s2Desc2: 'Alle leveranser leveres med EN 10204 3.1 materialsertifikater som garanterer sporbarhet og fasthet (S235JR, S355J2+N).',
            s3Title: '3. Fabrikasjon og Lokal Sveising',
            s3Sub: 'Sertifisert EN 1090-fabrikasjon og lokal sveising',
            s3Desc1: 'For å unngå høye transportkostnader blir skjæring (fiberlaser, CNC-stansing) og montering utført hos lokale sertifiserte verksteder nær anlegget.',
            s3Desc2: 'Våre partnerverksteder er ISO 3834-sertifiserte og utfører sveising i henhold til EN 1090-2 (EXC1 til EXC3) med sveisere sertifisert under ISO 9606.',
            ctaText: 'Send dine DXF/PDF-tegninger for prisestimat',
            ctaBtn: 'Gå til RFQ-portalen'
        },
        sv: {
            title: 'Våra B2B Industritjänster',
            subtitle: 'Från inledande CAD-konstruktion till slutmontering på din europeiska byggarbetsplats.',
            s1Title: '1. Konstruktion & Projektering (CAD Hub)',
            s1Sub: 'Tekniska studier, 3D-modellering och beräkningar',
            s1Desc1: 'Vårt centraliserade ingenjörscenter omvandlar råmått till detaljerade tillverkningsritningar och interaktiva Tekla-modeller.',
            s1Desc2: 'Vi utför finita element-analyser (FEA) och beräknar bärverk enligt gällande Eurokoder (Eurokod 3 för stål).',
            s2Title: '2. Certifierad Råvaruförsörjning',
            s2Sub: 'Spårbart stål av hög kvalitet enligt europeisk standard',
            s2Desc1: 'Vi köper råstålsprofiler (IPE/HEA/HEB-balkar, rör, plåt) direkt från ledande europeiska stålgrossister som Prolians.',
            s2Desc2: 'Varje leverans åtföljs av EN 10204 3.1 materialcertifikat som garanterar smältspårbarhet och seghet (S235JR, S355J2+N).',
            s3Title: '3. Tillverkning & Lokalt Svetsnätverk',
            s3Sub: 'Certifierad tillverkning enligt EN 1090 och lokalt svetsarbete',
            s3Desc1: 'För att undvika dyra transportkostnader utförs skärning (fiberlaser, stansning) och hopsättning av certifierade verkstäder nära din byggplats.',
            s3Desc2: 'Våra partnerverkstäder arbetar enligt ISO 3834 och utför svetsning enligt EN 1090-2 (utförandeklass EXC1 till EXC3) med ISO 9606-kvalificerade svetsare.',
            ctaText: 'Skicka dina DXF/PDF-ritningar för kalkyl',
            ctaBtn: 'Gå till RFQ-portalen'
        },
        pl: {
            title: 'Nasze Usługi Przemysłowe B2B',
            subtitle: 'Od początkowych obliczeń inżynieryjnych CAD do montażu końcowego na budowie w Europie.',
            s1Title: '1. Projektowanie i Inżynieria (Hub CAD)',
            s1Sub: 'Analizy techniczne, modelowanie 3D i obliczenia wytrzymałościowe',
            s1Desc1: 'Nasze centralne biuro projektowe opracowuje rysunki wykonawcze i interaktywne modele Tekla na podstawie danych klienta.',
            s1Desc2: 'Przeprowadzamy obliczenia metodą elementów skończonych (MES) i projektujemy konstrukcje zgodnie z Eurokodami (Eurokod 3 dla stali).',
            s2Title: '2. Certyfikowane Zaopatrzenie Materiałowe',
            s2Sub: 'Identyfikowalna stal wysokiej jakości wg norm europejskich',
            s2Desc1: 'Pozyskujemy materiał (dwuteowniki HEA/HEB/IPE, profile zamknięte, blachy) u czołowych europejskich dostawców jak Prolians.',
            s2Desc2: 'Każda dostawa posiada atest hutniczy EN 10204 3.1 gwarantujący identyfikowalność wytopu i parametry plastyczności (S235JR, S355J2+N).',
            s3Title: '3. Produkcja i Lokalne Spawalnictwo',
            s3Sub: 'Certyfikowane wykonanie wg EN 1090 i lokalny montaż spawany',
            s3Desc1: 'Aby wyeliminować wysokie koszty transportu międzynarodowego, obróbka (cięcie laserem, gięcie CNC) i spawanie są zlecane lokalnym certyfikowanym warsztatom.',
            s3Desc2: 'Nasze partnerskie zakłady działają zgodnie z ISO 3834 i spawają wg EN 1090-2 (klasy wykonania EXC1-EXC3) przy zatrudnieniu spawaczy z uprawnieniami ISO 9606.',
            ctaText: 'Prześlij swoje rysunki DXF/PDF do wyceny',
            ctaBtn: 'Idź do portalu RFQ'
        }
    };
    const currentLang = translations[lang] ? lang : 'en';
    const t = translations[currentLang];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cad-grid-bg",
        style: {
            padding: '6rem 0'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "section-title",
                            children: t.title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-subtitle",
                            children: t.subtitle
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "steel-card",
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '3rem',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "badge badge-steel",
                                            style: {
                                                marginBottom: '1rem'
                                            },
                                            children: "CAD & FEA Calculations"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '1.8rem',
                                                marginBottom: '0.75rem'
                                            },
                                            children: t.s1Title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                color: 'var(--color-amber)',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                marginBottom: '1.5rem',
                                                fontFamily: 'var(--font-space-grotesk)'
                                            },
                                            children: t.s1Sub
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--text-muted)',
                                                lineHeight: '1.6',
                                                marginBottom: '1rem'
                                            },
                                            children: t.s1Desc1
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--text-muted)',
                                                lineHeight: '1.6'
                                            },
                                            children: t.s1Desc2
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '2rem',
                                        border: '1px solid var(--color-steel-border)',
                                        borderRadius: '6px',
                                        backgroundColor: 'rgba(0,0,0,0.2)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'monospace',
                                            fontSize: '0.8rem',
                                            color: 'var(--text-muted)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--color-cad-blue)'
                                                },
                                                children: "// Calculations Report"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 95
                                            }, this),
                                            "> Eurocode 3: Design of Steel Structures",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 60
                                            }, this),
                                            "> Deflection Limit Check: L/300 satisfied",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 61
                                            }, this),
                                            "> Material: Steel Grade S355J2+N",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 52
                                            }, this),
                                            "> Safety factor: Gamma M0 = 1.0, Gamma M1 = 1.25",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 68
                                            }, this),
                                            "> Welded joints efficiency: 0.85"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "steel-card",
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '3rem',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '2rem',
                                        border: '1px solid var(--color-steel-border)',
                                        borderRadius: '6px',
                                        backgroundColor: 'rgba(0,0,0,0.2)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    borderBottom: '1px solid var(--color-steel-border)',
                                                    paddingBottom: '0.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Profile Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--color-amber)'
                                                        },
                                                        children: "Grade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: '0.9rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "HEA 200 / HEB 240"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 'bold'
                                                        },
                                                        children: "S355J2+N"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: '0.9rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "IPE 300 / IPE 400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 'bold'
                                                        },
                                                        children: "S235JR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: '0.9rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Plates 15mm - 40mm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 'bold'
                                                        },
                                                        children: "S355K2+N"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "badge badge-standard",
                                            style: {
                                                marginBottom: '1rem'
                                            },
                                            children: "EN 10204 3.1 Traceability"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '1.8rem',
                                                marginBottom: '0.75rem'
                                            },
                                            children: t.s2Title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                color: 'var(--color-amber)',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                marginBottom: '1.5rem',
                                                fontFamily: 'var(--font-space-grotesk)'
                                            },
                                            children: t.s2Sub
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--text-muted)',
                                                lineHeight: '1.6',
                                                marginBottom: '1rem'
                                            },
                                            children: t.s2Desc1
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--text-muted)',
                                                lineHeight: '1.6'
                                            },
                                            children: t.s2Desc2
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "steel-card",
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '3rem',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "badge badge-steel",
                                            style: {
                                                marginBottom: '1rem'
                                            },
                                            children: "EN 1090 Execution EXC2"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '1.8rem',
                                                marginBottom: '0.75rem'
                                            },
                                            children: t.s3Title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                color: 'var(--color-amber)',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                marginBottom: '1.5rem',
                                                fontFamily: 'var(--font-space-grotesk)'
                                            },
                                            children: t.s3Sub
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--text-muted)',
                                                lineHeight: '1.6',
                                                marginBottom: '1rem'
                                            },
                                            children: t.s3Desc1
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--text-muted)',
                                                lineHeight: '1.6'
                                            },
                                            children: t.s3Desc2
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '2rem',
                                        border: '1px solid var(--color-steel-border)',
                                        borderRadius: '6px',
                                        backgroundColor: 'rgba(0,0,0,0.2)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'monospace',
                                            fontSize: '0.8rem',
                                            color: 'var(--text-muted)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--color-cad-blue)'
                                                },
                                                children: "// Welding Qualification Schema"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 104
                                            }, this),
                                            "> Standard: EN ISO 15614-1 (WPQR)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 53
                                            }, this),
                                            "> Operator Cert: EN ISO 9606-1 (Welder)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 59
                                            }, this),
                                            "> Process: 135 (MAG Metal Active Gas)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 57
                                            }, this),
                                            "> Non-Destructive Testing: NDT UT/MT 10%",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 60
                                            }, this),
                                            "> CE Marking: Declaration of Performance (DoP)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "steel-card",
                    style: {
                        marginTop: '6rem',
                        textAlign: 'center',
                        background: 'var(--gradient-steel)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '1.8rem',
                                marginBottom: '1rem'
                            },
                            children: t.ctaText
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${resolvedParams.lang}/rfq`,
                            className: "btn btn-primary",
                            style: {
                                padding: '1rem 2rem',
                                fontSize: '1rem',
                                marginTop: '1rem'
                            },
                            children: t.ctaBtn
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
            lineNumber: 183,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/[lang]/services/page.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/app/[lang]/services/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/[lang]/services/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1m-0kw3._.js.map