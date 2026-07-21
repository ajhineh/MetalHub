"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Network,
  ShoppingBag,
  Clock,
  ShieldCheck,
  TrendingUp,
  Route,
  Info,
  AlertTriangle,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function PerfectIndustrialLandingPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const [hoveredPanel, setHoveredPanel] = useState<'left' | 'right' | null>(null);

  // Parallax Background Scroll effect
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '15%']);

  // Active Orders Bar Chart values
  const activeOrdersBars = [15, 28, 42, 20, 55, 38, 70, 62, 50, 78, 65, 58, 85, 45, 60, 75, 40, 90, 52, 80];

  // Lead Times Bar Chart values
  const leadTimesBars = [22, 22, 22, 60, 32, 48, 60, 70, 48, 68];

  const lang = resolvedParams?.lang || 'en';

  const translations: Record<string, Record<string, string>> = {
    en: {
      title: 'Industrial Intelligence & Engineering Systems',
      subtitle: 'Connecting verified European steel suppliers to elevate product quality, engineering standards, and enterprise management.',
      getStarted: 'Get Started',
      activeSupplyChains: 'ACTIVE SUPPLY CHAINS',
      guidanceEngine: 'GUIDANCE ENGINE',
      realTimeNetwork: 'Real-time Network',
      suppliersVal: '342 Suppliers',
      activeOrders: 'Active Orders',
      tonsVal: '1,150 tons',
      leadTimes: 'Lead Times',
      leadTimesVal: 'Avg. 14 Days',
      qualityCompliance: 'Quality Compliance',
      qualityVal: '99.8% Certified',
      demandForecasting: 'Demand Forecasting',
      accuracyVal: '94% Accuracy',
      routeOptimization: 'Route Optimization',
      savingsVal: '18% Savings',
      regulatorySupport: 'Regulatory Support',
      regulationVal: 'EU EN 10025',
      riskAssessment: 'Risk Assessment',
      riskVal: 'Low Dispute Rate',
      regulationLabel: 'Regulation',
      savingsLabel: 'Savings',
      regionLabel: 'Europe',
      engineLabel: 'Engine'
    },
    fr: {
      title: 'Systèmes d\'Ingénierie & Intelligence Industrielle',
      subtitle: 'Connecter les fournisseurs d\'acier européens certifiés pour élever la qualité des produits, les normes d\'ingénierie et la gestion d\'entreprise.',
      getStarted: 'Commencer',
      activeSupplyChains: 'CHAÎNES D\'APPROVISIONNEMENT',
      guidanceEngine: 'MOTEUR DE GUIDAGE',
      realTimeNetwork: 'Réseau en temps réel',
      suppliersVal: '342 Fournisseurs',
      activeOrders: 'Commandes Actives',
      tonsVal: '1 150 tonnes',
      leadTimes: 'Délais de livraison',
      leadTimesVal: 'Moy. 14 Jours',
      qualityCompliance: 'Conformité Qualité',
      qualityVal: 'Certifié à 99.8%',
      demandForecasting: 'Prévisions de Demande',
      accuracyVal: 'Précision de 94%',
      routeOptimization: 'Optimisation d\'Itinéraire',
      savingsVal: '18% d\'Économies',
      regulatorySupport: 'Support Réglementaire',
      regulationVal: 'UE EN 10025',
      riskAssessment: 'Évaluation des Risques',
      riskVal: 'Faible taux de litige',
      regulationLabel: 'Réglementation',
      savingsLabel: 'Économies',
      regionLabel: 'Europe',
      engineLabel: 'Moteur'
    },
    de: {
      title: 'Industrielle Intelligenz & Engineering-Systeme',
      subtitle: 'Verbindung verifizierter europäischer Stahllieferanten zur Steigerung der Produktqualität, der Engineering-Standards und der Unternehmensführung.',
      getStarted: 'Loslegen',
      activeSupplyChains: 'AKTIVE LIEFERKETTEN',
      guidanceEngine: 'LEIT-ENGINE',
      realTimeNetwork: 'Echtzeit-Netzwerk',
      suppliersVal: '342 Lieferanten',
      activeOrders: 'Aktive Aufträge',
      tonsVal: '1.150 Tonnen',
      leadTimes: 'Lieferzeiten',
      leadTimesVal: 'Durchschn. 14 Tage',
      qualityCompliance: 'Qualitätskonformität',
      qualityVal: '99.8% Zertifiziert',
      demandForecasting: 'Nachfrageprognose',
      accuracyVal: '94% Genauigkeit',
      routeOptimization: 'Routenoptimierung',
      savingsVal: '18% Ersparnis',
      regulatorySupport: 'Regulatorische Hilfe',
      regulationVal: 'EU EN 10025',
      riskAssessment: 'Risikobewertung',
      riskVal: 'Geringe Streitquote',
      regulationLabel: 'Regulierung',
      savingsLabel: 'Ersparnis',
      regionLabel: 'Europa',
      engineLabel: 'Engine'
    },
    nl: {
      title: 'Industriële Intelligentie & Engineering Systemen',
      subtitle: 'Verbinden van geverifieerde Europese staalleveranciers om productkwaliteit, engineeringnormen en bedrijfsbeheer te verhogen.',
      getStarted: 'Aan de slag',
      activeSupplyChains: 'ACTIEVE TOELEVERINGSKETENS',
      guidanceEngine: 'BEGELEIDINGSMOTOR',
      realTimeNetwork: 'Realtime Netwerk',
      suppliersVal: '342 Leveranciers',
      activeOrders: 'Actieve Bestellingen',
      tonsVal: '1.150 ton',
      leadTimes: 'Doorlooptijden',
      leadTimesVal: 'Gem. 14 Dagen',
      qualityCompliance: 'Kwaliteitsnaleving',
      qualityVal: '99.8% Gecertificeerd',
      demandForecasting: 'Vraagvoorspelling',
      accuracyVal: '94% Nauwkeurigheid',
      routeOptimization: 'Routeoptimalisatie',
      savingsVal: '18% Besparing',
      regulatorySupport: 'Regelgevingsondersteuning',
      regulationVal: 'EU EN 10025',
      riskAssessment: 'Risicobeoordeling',
      riskVal: 'Laag Geschilpercentage',
      regulationLabel: 'Regelgeving',
      savingsLabel: 'Besparing',
      regionLabel: 'Europa',
      engineLabel: 'Motor'
    },
    es: {
      title: 'Inteligencia Industrial y Sistemas de Ingeniería',
      subtitle: 'Conectando proveedores de acero europeos verificados para elevar la calidad del producto, los estándares de ingeniería y la gestión empresarial.',
      getStarted: 'Comenzar',
      activeSupplyChains: 'CADENAS DE SUMINISTRO ACTIVAS',
      guidanceEngine: 'MOTOR DE ORIENTACIÓN',
      realTimeNetwork: 'Red en Tiempo Real',
      suppliersVal: '342 Proveedores',
      activeOrders: 'Pedidos Activos',
      tonsVal: '1,150 toneladas',
      leadTimes: 'Plazos de Entrega',
      leadTimesVal: 'Prom. 14 Días',
      qualityCompliance: 'Cumplimiento de Calidad',
      qualityVal: '99.8% Certificado',
      demandForecasting: 'Previsión de la Demanda',
      accuracyVal: '94% de Precisión',
      routeOptimization: 'Optimización de Rutas',
      savingsVal: '18% de Ahorro',
      regulatorySupport: 'Soporte Regulatorio',
      regulationVal: 'UE EN 10025',
      riskAssessment: 'Evaluación de Riesgos',
      riskVal: 'Baja Tasa de Disputas',
      regulationLabel: 'Regulación',
      savingsLabel: 'Ahorro',
      regionLabel: 'Europa',
      engineLabel: 'Motor'
    },
    it: {
      title: 'Intelligenza Industriale & Sistemi di Ingegneria',
      subtitle: 'Collegamento di fornitori di acciaio europei verificati per elevare la qualità del prodotto, gli standard di ingegneria e la gestione aziendale.',
      getStarted: 'Inizia Ora',
      activeSupplyChains: 'CATENE DI FORNITURA ATTIVE',
      guidanceEngine: 'MOTORE DI GUIDA',
      realTimeNetwork: 'Rete in Tempo Reale',
      suppliersVal: '342 Fornitori',
      activeOrders: 'Ordini Attivi',
      tonsVal: '1.150 tonnellate',
      leadTimes: 'Tempi di Consegna',
      leadTimesVal: 'Media 14 Giorni',
      qualityCompliance: 'Conformità Qualità',
      qualityVal: 'Certificato al 99.8%',
      demandForecasting: 'Previsione della Domanda',
      accuracyVal: 'Precisione al 94%',
      routeOptimization: 'Ottimizzazione Percorsi',
      savingsVal: 'Risparmio del 18%',
      regulatorySupport: 'Supporto normativo',
      regulationVal: 'UE EN 10025',
      riskAssessment: 'Valutazione dei Rischi',
      riskVal: 'Basso tasso di controversie',
      regulationLabel: 'Regolamento',
      savingsLabel: 'Risparmio',
      regionLabel: 'Motore'
    },
    no: {
      title: 'Industriell Intelligens & Ingeniørsystemer',
      subtitle: 'Kopler verifserte europeiske stålprodusenter for å øke produktkvalitet, ingeniørstandarder og virksomhetsstyring.',
      getStarted: 'Kom i gang',
      activeSupplyChains: 'AKTIVE FORSYNINGSKJEDER',
      guidanceEngine: 'VEILEDNINGSMOTOR',
      realTimeNetwork: 'Sanntidsnettverk',
      suppliersVal: '342 Leverandører',
      activeOrders: 'Aktive Bestillinger',
      tonsVal: '1 150 tonn',
      leadTimes: 'Leveringstider',
      leadTimesVal: 'Snitt 14 Dager',
      qualityCompliance: 'Kvalitetssertifisering',
      qualityVal: '99.8% Sertifisert',
      demandForecasting: 'Etterspørselsvarsling',
      accuracyVal: '94% Nøyaktighet',
      routeOptimization: 'Ruteoptimalisering',
      savingsVal: '18% Besparing',
      regulatorySupport: 'Regulatorisk Støtte',
      regulationVal: 'EU EN 10025',
      riskAssessment: 'Risikovurdering',
      riskVal: 'Lav tvisterate',
      regulationLabel: 'Regulering',
      savingsLabel: 'Besparing',
      regionLabel: 'Europa',
      engineLabel: 'Motor'
    },
    sv: {
      title: 'Industriell Intelligens & Engineering-system',
      subtitle: 'Kopplar samman verifierade europeiska stålleverantörer för att höja produktkvalitet, tekniska standarder och företagsledning.',
      getStarted: 'Kom igång',
      activeSupplyChains: 'AKTIVA FÖRSÖRJNINGSKEDJOR',
      guidanceEngine: 'GUIDNINGSMOTOR',
      realTimeNetwork: 'Realtidsnätverk',
      suppliersVal: '342 Leverantörer',
      activeOrders: 'Aktiva Order',
      tonsVal: '1 150 ton',
      leadTimes: 'Ledtider',
      leadTimesVal: 'Snitt 14 Dagar',
      qualityCompliance: 'Kvalitetsefterlevnad',
      qualityVal: '99.8% Certifierad',
      demandForecasting: 'Prognos av efterfrågan',
      accuracyVal: '94% Noggrannhet',
      routeOptimization: 'Ruttoptimering',
      savingsVal: '18% Besparing',
      regulatorySupport: 'Tillsynsstöd',
      regulationVal: 'EU EN 10025',
      riskAssessment: 'Riskbedömning',
      riskVal: 'Låg tvistfrekvens',
      regulationLabel: 'Reglering',
      savingsLabel: 'Besparing',
      regionLabel: 'Europa',
      engineLabel: 'Motor'
    },
    pl: {
      title: 'Inteligencja Przemysłowa & Systemy Inżynieryjne',
      subtitle: 'Łączenie zweryfikowanych europejskich dostawców stali w celu podniesienia jakości produktów, standardów inżynieryjnych i zarządzania przedsiębiorstwem.',
      getStarted: 'Rozpocznij',
      activeSupplyChains: 'AKTYWNE ŁAŃCUCHY DOSTAW',
      guidanceEngine: 'SILNIK DORADCZY',
      realTimeNetwork: 'Sieć w Czasie Rzeczywistym',
      suppliersVal: '342 Dostawców',
      activeOrders: 'Aktywne Zamówienia',
      tonsVal: '1 150 ton',
      leadTimes: 'Czas Realizacji',
      leadTimesVal: 'Śr. 14 Dni',
      qualityCompliance: 'Zgodność Jakości',
      qualityVal: 'Certyfikowane 99.8%',
      demandForecasting: 'Prognozowanie Popytu',
      accuracyVal: 'Dokładność 94%',
      routeOptimization: 'Optymalizacja Tras',
      savingsVal: '18% Oszczędności',
      regulatorySupport: 'Wsparcie Regulacyjne',
      regulationVal: 'UE EN 10025',
      riskAssessment: 'Ocena Ryzyka',
      riskVal: 'Niska stopa sporów',
      regulationLabel: 'Regulacja',
      savingsLabel: 'Oszczędności',
      regionLabel: 'Europa',
      engineLabel: 'Silnik'
    }
  };

  const currentLang = translations[lang] ? lang : 'en';
  const t = translations[currentLang] || translations.en;

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">

      {/* 1. Crisp, Un-faded Cement Factory Background with Parallax Scroll */}
      <motion.div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/bg-cement-factory.webp')",
          y: backgroundY
        }}
      />

      {/* Dark diagonal gradient overlay starting from bottom-left and fading out towards top-right */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, rgba(10, 16, 29, 0.96) 0%, rgba(10, 16, 29, 0.65) 45%, rgba(10, 16, 29, 0) 100%)',
        }}
      />

      {/* 2. Connected Star Constellation Network with glows/halos */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-65">
          <defs>
            <linearGradient id="cyan-glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
            </linearGradient>
            <filter id="star-halo" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left Margin Star Network */}
          <line x1="3%" y1="18%" x2="12%" y2="30%" stroke="url(#cyan-glow-line)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="12%" y1="30%" x2="6%" y2="48%" stroke="url(#cyan-glow-line)" strokeWidth="1.5" />
          <line x1="6%" y1="48%" x2="14%" y2="68%" stroke="url(#cyan-glow-line)" strokeWidth="1.5" />
          <line x1="14%" y1="68%" x2="4%" y2="85%" stroke="url(#cyan-glow-line)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="12%" y1="30%" x2="22%" y2="22%" stroke="url(#cyan-glow-line)" strokeWidth="1.5" />

          {/* Glowing Halos underneath main stars */}
          <circle cx="3%" cy="18%" r="12" fill="#06b6d4" opacity="0.3" filter="url(#star-halo)" />
          <circle cx="12%" cy="30%" r="14" fill="#22d3ee" opacity="0.35" filter="url(#star-halo)" />
          <circle cx="6%" cy="48%" r="16" fill="#38bdf8" opacity="0.35" filter="url(#star-halo)" />
          <circle cx="14%" cy="68%" r="14" fill="#06b6d4" opacity="0.3" filter="url(#star-halo)" />
          <circle cx="4%" cy="85%" r="12" fill="#06b6d4" opacity="0.3" filter="url(#star-halo)" />
          <circle cx="22%" cy="22%" r="12" fill="#38bdf8" opacity="0.25" filter="url(#star-halo)" />

          {/* Star Cores */}
          <circle cx="3%" cy="18%" r="4" className="fill-cyan-400 animate-pulse" />
          <circle cx="12%" cy="30%" r="5.5" className="fill-cyan-200" />
          <circle cx="6%" cy="48%" r="6.5" className="fill-blue-300" />
          <circle cx="14%" cy="68%" r="5.5" className="fill-cyan-200 animate-pulse" />
          <circle cx="4%" cy="85%" r="4.5" className="fill-cyan-400" />
          <circle cx="22%" cy="22%" r="4.5" className="fill-cyan-100" />

          {/* Right Side Star Network */}
          <line x1="78%" y1="15%" x2="88%" y2="28%" stroke="url(#cyan-glow-line)" strokeWidth="1.5" />
          <line x1="88%" y1="28%" x2="95%" y2="45%" stroke="url(#cyan-glow-line)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="88%" y1="28%" x2="82%" y2="58%" stroke="url(#cyan-glow-line)" strokeWidth="1.5" />

          {/* Glowing Halos underneath main stars */}
          <circle cx="78%" cy="15%" r="12" fill="#22d3ee" opacity="0.3" filter="url(#star-halo)" />
          <circle cx="88%" cy="28%" r="16" fill="#06b6d4" opacity="0.4" filter="url(#star-halo)" />
          <circle cx="95%" cy="45%" r="14" fill="#38bdf8" opacity="0.3" filter="url(#star-halo)" />
          <circle cx="82%" cy="58%" r="12" fill="#22d3ee" opacity="0.3" filter="url(#star-halo)" />

          {/* Star Cores */}
          <circle cx="78%" cy="15%" r="4.5" className="fill-cyan-200" />
          <circle cx="88%" cy="28%" r="6" className="fill-cyan-100 animate-pulse" />
          <circle cx="95%" cy="45%" r="5" className="fill-blue-300" />
          <circle cx="82%" cy="58%" r="4.5" className="fill-cyan-200" />
        </svg>
      </div>

      {/* Main Content Container (positioned explicitly at z-10 above the background with guaranteed 100% width) */}
      <main className="relative z-10 w-full mx-auto px-6 py-16 flex flex-col justify-center min-h-[calc(100vh-80px)]" style={{ width: '100%' }}>

        {/* Core Layout Wrapper limiting width to 835px to align text and cards with smaller sizes */}
        <div style={{ maxWidth: '835px', width: '100%', margin: '0 auto' }}>

          {/* Dynamic Section Header - Left Aligned and matching left boundary of Card 1 */}
          <div className="section-header text-left mb-12" style={{ position: 'relative', zIndex: 20, textAlign: 'left', marginBottom: '1rem' }}>
            <h1
              className="section-title tracking-tight text-white mb-5"
              style={{
                margin: '0 0 0rem 0',
                fontSize: '3rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '600',
                lineHeight: '1.05'
              }}
            >
              Industrial Intelligence &<br />
              Engineering Systems
            </h1>
            <p className="section-subtitle text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed" style={{ margin: '0 0 0.75rem 0' }}>
              {t.subtitle}
            </p>
            <button
              className="hover:bg-cyan-300 text-slate-950 text-base tracking-wide transition-all transform hover:scale-105 active:scale-95"
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#22d3ee',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 30px rgba(6,182,212,0.6)'
              }}
            >
              {t.getStarted}
            </button>
          </div>

          {/* 3. Portfolio Panels - Sized 10% smaller (maxWidth: 410px) and centered with 15px gap (half spacing) */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
            zIndex: 20,
            marginBottom: '3rem'
          }}>

            {/* Card 1: ACTIVE SUPPLY CHAINS */}
            <motion.div
              onMouseEnter={() => setHoveredPanel('left')}
              onMouseLeave={() => setHoveredPanel(null)}
              className="steel-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '410px',
                height: '246px',
                background: 'rgba(10, 16, 29, 0.5)',
                backdropFilter: 'blur(5px)',
                border: '1px solid var(--color-steel-border)',
                borderRadius: '12px',
                padding: '1rem 1rem'
              }}
            >
              {/* Header Section from Template */}
              <div style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-steel-border)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', lineHeight: '1.2' }}>{t.activeSupplyChains}</h3>
                </div>
                <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white transition-colors" />
              </div>

              {/* Split layout inside the steel-card */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', flex: 1 }}>

                {/* Left Column - Stats Pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', justifyContent: 'space-between' }}>

                  {/* Item 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="rounded-xl text-cyan-400 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', width: '34px', height: '34px', flexShrink: 0 }}>
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#ffffff', lineHeight: '1' }}>{t.realTimeNetwork}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>({t.suppliersVal})</div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="rounded-xl text-cyan-400 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', width: '34px', height: '34px', flexShrink: 0 }}>
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#ffffff', lineHeight: '1' }}>{t.activeOrders}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>({t.tonsVal})</div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="rounded-xl text-cyan-400 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', width: '34px', height: '34px', flexShrink: 0 }}>
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#ffffff', lineHeight: '1' }}>{t.leadTimes}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>({t.leadTimesVal})</div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="rounded-xl text-emerald-400 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', width: '34px', height: '34px', flexShrink: 0 }}>
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#ffffff', lineHeight: '1' }}>{t.qualityCompliance}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-amber)', marginTop: '0.15rem' }}>({t.qualityVal})</div>
                    </div>
                  </div>

                </div>

                {/* Right Column - Charts */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', justifyContent: 'space-between' }}>

                  {/* Active Orders Chart Card */}
                  <div style={{ padding: '0.2rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '80px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: '600', color: 'var(--text-muted)' }}>{t.activeOrders}</span>
                      <ChevronRight className="w-3 h-3 text-cyan-400 cursor-pointer" />
                    </div>
                    <div className="flex items-end justify-between gap-0.5 h-8 pt-0.5">
                      {activeOrdersBars.slice(0, 14).map((val, idx) => (
                        <motion.div
                          key={idx}
                          className="w-1 rounded-t bg-cyan-400"
                          style={{ height: `${val * 0.7}%` }}
                          animate={hoveredPanel === 'left' ? {
                            height: [`${val * 0.7}%`, `${Math.min(100, val * 0.7 + (idx % 2 === 0 ? 15 : -10))}%`, `${val * 0.7}%`]
                          } : { height: `${val * 0.7}%` }}
                          transition={{
                            repeat: hoveredPanel === 'left' ? Infinity : 0,
                            duration: 1.2,
                            delay: idx * 0.03,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Lead Times Chart Card */}
                  <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: '600', color: 'var(--text-muted)' }}>{t.leadTimes}</span>
                      <ChevronRight className="w-3 h-3 text-cyan-400 cursor-pointer" />
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col justify-between text-[7px] text-slate-500 h-8 pr-1 font-mono leading-none">
                        <span>100</span>
                        <span>0</span>
                      </div>
                      <div className="flex-1 flex items-end justify-around h-8 border-l border-b border-white/10 pl-1.5">
                        {leadTimesBars.map((val, idx) => (
                          <motion.div
                            key={idx}
                            className="w-1 rounded-t bg-cyan-400"
                            style={{ height: `${val * 0.7}%` }}
                            animate={hoveredPanel === 'left' ? {
                              height: [`${val * 0.7}%`, `${Math.min(95, val * 0.7 + (idx % 3 === 0 ? 20 : -10))}%`, `${val * 0.7}%`]
                            } : { height: `${val * 0.7}%` }}
                            transition={{
                              repeat: hoveredPanel === 'left' ? Infinity : 0,
                              duration: 1.4,
                              delay: idx * 0.06,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

            {/* Card 2: GUIDANCE ENGINE */}
            <motion.div
              onMouseEnter={() => setHoveredPanel('right')}
              onMouseLeave={() => setHoveredPanel(null)}
              className="steel-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '410px',
                height: '246px',
                background: 'rgba(10, 16, 29, 0.5)',
                backdropFilter: 'blur(5px)',
                border: '1px solid var(--color-steel-border)',
                borderRadius: '12px',
                padding: '1rem 1rem'
              }}
            >
              {/* Header Section from Template */}
              <div style={{ marginBottom: '1rem', borderBottom: '1px solid var(--color-steel-border)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '700', lineHeight: '1.2' }}>{t.guidanceEngine}</h3>
                </div>
                <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white transition-colors" />
              </div>

              {/* Split layout inside the steel-card */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', flex: 1 }}>

                {/* Left Column - Stats Pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', justifyContent: 'space-between' }}>

                  {/* Item 1 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="rounded-xl text-cyan-400 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', width: '34px', height: '34px', flexShrink: 0 }}>
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#ffffff', lineHeight: '1' }}>{t.demandForecasting}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>({t.accuracyVal})</div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="rounded-xl text-cyan-400 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', width: '34px', height: '34px', flexShrink: 0 }}>
                      <Route className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#ffffff', lineHeight: '1' }}>{t.routeOptimization}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>({t.savingsVal})</div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="rounded-xl text-cyan-400 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', width: '34px', height: '34px', flexShrink: 0 }}>
                      <Info className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#ffffff', lineHeight: '1' }}>{t.regulatorySupport}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>({t.regulationVal})</div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="rounded-xl text-amber-400 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', width: '34px', height: '34px', flexShrink: 0 }}>
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#ffffff', lineHeight: '1' }}>{t.riskAssessment}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-amber)', marginTop: '0.15rem' }}>({t.riskVal})</div>
                    </div>
                  </div>

                </div>

                {/* Right Column - Charts */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'space-between' }}>

                  {/* Regulation Chart Card */}
                  <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: '600', color: 'var(--text-muted)' }}>{t.regulationLabel}</span>
                      <ChevronRight className="w-3 h-3 text-cyan-400 cursor-pointer" />
                    </div>
                    <div className="relative h-8 w-full pt-0.5">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 120 40">
                        <line x1="0" y1="35" x2="120" y2="35" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                        <line x1="0" y1="20" x2="120" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                        <motion.path
                          d="M0,30 C20,35 35,22 55,25 C75,28 85,8 100,12 C110,15 115,8 120,5"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="2"
                          animate={hoveredPanel === 'right' ? {
                            d: [
                              "M0,30 C20,35 35,22 55,25 C75,28 85,8 100,12 C110,15 115,8 120,5",
                              "M0,22 C20,15 35,30 55,10 C75,18 85,25 100,8 C110,10 115,22 120,15",
                              "M0,30 C20,35 35,22 55,25 C75,28 85,8 100,12 C110,15 115,8 120,5"
                            ]
                          } : {}}
                          transition={{ repeat: hoveredPanel === 'right' ? Infinity : 0, duration: 2.5, ease: "easeInOut" }}
                        />
                        <circle cx="85" cy="8" r="2.5" fill="#ffffff" />
                      </svg>
                    </div>
                  </div>

                  {/* Risk Assessment Gauge Card */}
                  <div style={{ padding: '0.5rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: '600', color: 'var(--text-muted)' }}>{t.riskAssessment}</span>
                      <ChevronRight className="w-3 h-3 text-cyan-400 cursor-pointer" />
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="relative w-12 h-8 flex items-end justify-center">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
                          <path
                            d="M10,45 A40,40 0 0,1 90,45"
                            fill="none"
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          <motion.path
                            d="M10,45 A40,40 0 0,1 90,45"
                            fill="none"
                            stroke="url(#arc-gradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray="125"
                            strokeDashoffset="12"
                            animate={hoveredPanel === 'right' ? { strokeDashoffset: [125, 12] } : { strokeDashoffset: 12 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                          />
                          <defs>
                            <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#38bdf8" />
                              <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="absolute bottom-0.5 font-bold text-[9px] text-white">94%</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-extrabold text-cyan-400">18%</div>
                        <div className="text-[8px] text-slate-400 font-medium leading-none">{t.savingsLabel}</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* 4. Verified EU Suppliers Partner Footer */}
        <div className="pt-16 flex flex-col items-center gap-3" style={{ position: 'relative', zIndex: 20 }}>
          <span className="text-[10px] font-bold tracking-[0.3em] text-slate-300 uppercase">
            VERIFIED EU SUPPLIERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-85 transition-all">
            <span className="font-bold text-sm tracking-tight text-slate-200">ArcelorMittal</span>
            <span className="font-semibold text-xs text-slate-200">thyssenkrupp</span>
            <span className="font-semibold text-xs text-slate-200">Salzgitter AG</span>
            <span className="font-bold text-sm tracking-widest text-slate-200">SSAB</span>
            <span className="font-semibold text-xs text-slate-200">voestalpine</span>
          </div>
        </div>

      </main>
    </div>
  );
}
