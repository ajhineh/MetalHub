import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const translations: Record<string, Record<string, string>> = {
    en: {
      desc: 'B2B digital contracting platform for custom industrial steel structures. Sourcing raw materials under EN standards and fabricating locally in the EU.',
      services: 'Services',
      cad: 'Engineering & CAD calculations',
      sourcing: 'Standard Sourcing',
      welding: 'Welding & Assembly',
      regions: 'Focus Regions',
      legal: 'Legal',
      terms: 'Terms of Service',
      privacy: 'Privacy (GDPR)',
      rights: 'All rights reserved.',
      estoniaInfo: 'MetalHub OÜ • Registration: 14920831 • VAT: EE102298712 • Rotermanni 6, 10111 Tallinn, Estonia'
    },
    fr: {
      desc: 'Plateforme digitale de sous-traitance industrielle B2B de structures métalliques. Approvisionnement aux normes EN et fabrication locale dans l\'UE.',
      services: 'Services',
      cad: 'Ingénierie & calculs CAO',
      sourcing: 'Approvisionnement Standard',
      welding: 'Soudure & Assemblage',
      regions: 'Régions d\'intervention',
      legal: 'Mentions Légales',
      terms: 'Conditions Générales (CGU)',
      privacy: 'Confidentialité (RGPD)',
      rights: 'Tous droits réservés.',
      estoniaInfo: 'MetalHub OÜ • Immatriculation: 14920831 • TVA: EE102298712 • Rotermanni 6, 10111 Tallinn, Estonie'
    },
    de: {
      desc: 'Digitale B2B-Vertragsplattform für individuelle Industriestahlkonstruktionen. Rohstoffeinkauf nach EN-Normen und lokale Fertigung in der EU.',
      services: 'Dienstleistungen',
      cad: 'Engineering & CAD-Planung',
      sourcing: 'Standardbeschaffung',
      welding: 'Schweißen & Montage',
      regions: 'Schwerpunktregionen',
      legal: 'Rechtliches',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutz (DSGVO)',
      rights: 'Alle Rechte vorbehalten.',
      estoniaInfo: 'MetalHub OÜ • Register: 14920831 • USt-IdNr: EE102298712 • Rotermanni 6, 10111 Tallinn, Estland'
    },
    nl: {
      desc: 'Digitaal B2B-contractplatform voor op maat gemaakte industriële staalconstructies. Inkoop van grondstoffen volgens EN-normen en lokale fabricage in de EU.',
      services: 'Diensten',
      cad: 'Engineering & CAD-berekeningen',
      sourcing: 'Standaard sourcing',
      welding: 'Lassen & Montage',
      regions: 'Focusregio\'s',
      legal: 'Juridisch',
      terms: 'Algemene voorwaarden',
      privacy: 'Privacy (AVG)',
      rights: 'Alle rechten voorbehouden.',
      estoniaInfo: 'MetalHub OÜ • Registratie: 14920831 • BTW: EE102298712 • Rotermanni 6, 10111 Tallinn, Estland'
    },
    es: {
      desc: 'Plataforma de contratación digital B2B para estructuras metálicas industriales personalizadas. Suministro según normas EN y fabricación local en la UE.',
      services: 'Servicios',
      cad: 'Ingeniería y Cálculos CAD',
      sourcing: 'Sourcing Estándar',
      welding: 'Soldadura y Ensamblaje',
      regions: 'Regiones de Interés',
      legal: 'Legal',
      terms: 'Términos del Servicio',
      privacy: 'Privacidad (RGPD)',
      rights: 'Todos los derechos reservados.',
      estoniaInfo: 'MetalHub OÜ • Registro: 14920831 • IVA: EE102298712 • Rotermanni 6, 10111 Tallinn, Estonia'
    },
    it: {
      desc: 'Piattaforma digitale B2B per carpenteria metallica industriale personalizzata. Approvvigionamento secondo norme EN e produzione locale nell\'UE.',
      services: 'Servizi',
      cad: 'Ingegneria e Calcoli CAD',
      sourcing: 'Sourcing Standard',
      welding: 'Saldatura e Assemblaggio',
      regions: 'Aree di Intervento',
      legal: 'Note Legali',
      terms: 'Termini di Servizio',
      privacy: 'Privacy (GDPR)',
      rights: 'Tutti i diritti riservati.',
      estoniaInfo: 'MetalHub OÜ • Registrazione: 14920831 • P.IVA: EE102298712 • Rotermanni 6, 10111 Tallinn, Estonia'
    },
    no: {
      desc: 'Digital B2B-kontraktsplattform for skreddersydde industrielle stålkonstruksjoner. Materialinnkjøp etter EN-standarder og lokal fabrikasjon i EU.',
      services: 'Tjenester',
      cad: 'Ingeniørtjenester & CAD-beregninger',
      sourcing: 'Standard innkjøp',
      welding: 'Sveising & Montering',
      regions: 'Fokusområder',
      legal: 'Juridisk',
      terms: 'Brukervilkår',
      privacy: 'Personvern (GDPR)',
      rights: 'Alle rettigheter forbeholdt.',
      estoniaInfo: 'MetalHub OÜ • Reg: 14920831 • MVA: EE102298712 • Rotermanni 6, 10111 Tallinn, Estland'
    },
    sv: {
      desc: 'Digital B2B-plattform för skräddarsydda industriella stålkonstruktioner. Materialinköp enligt EN-standarder och lokal tillverkning i EU.',
      services: 'Tjänster',
      cad: 'Ingenjörsarbeten & CAD-beräkningar',
      sourcing: 'Standardinköp',
      welding: 'Svetsning & Montering',
      regions: 'Fokusregioner',
      legal: 'Juridisk information',
      terms: 'Användarvillkor',
      privacy: 'Integritetspolicy (GDPR)',
      rights: 'Alla rättigheter förbehållna.',
      estoniaInfo: 'MetalHub OÜ • Reg.nr: 14920831 • VAT: EE102298712 • Rotermanni 6, 10111 Tallinn, Estland'
    },
    pl: {
      desc: 'Cyfrowa platforma kontraktacji B2B dla niestandardowych konstrukcji stalowych. Pozyskiwanie surowców wg norm EN i lokalna produkcja w UE.',
      services: 'Usługi',
      cad: 'Projektowanie i obliczenia CAD',
      sourcing: 'Standardowe zaopatrzenie',
      welding: 'Spawanie i Montaż',
      regions: 'Obszary Działania',
      legal: 'Kwestie Prawne',
      terms: 'Regulamin',
      privacy: 'Prywatność (RODO)',
      rights: 'Wszelkie prawa zastrzeżone.',
      estoniaInfo: 'MetalHub OÜ • Nr rej.: 14920831 • NIP: EE102298712 • Rotermanni 6, 10111 Tallinn, Estonia'
    }
  };

  const currentLang = translations[lang] ? lang : 'en';
  const t = translations[currentLang];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        {/* Company Intro */}
        <div className={styles.colIntro}>
          <div className={styles.logoContainer}>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
              <path d="M3 3h18v18H3z" />
              <path d="M21 3L3 21" />
              <path d="M3 3l18 18" />
            </svg>
            <span className={styles.logoText}>METAL<span className={styles.logoHighlight}>HUB</span></span>
          </div>
          <p className={styles.desc}>{t.desc}</p>
        </div>

        {/* Services column */}
        <div className={styles.col}>
          <h4 className={styles.title}>{t.services}</h4>
          <ul className={styles.links}>
            <li><Link href={`/${lang}/services`}>{t.cad}</Link></li>
            <li><Link href={`/${lang}/services`}>{t.sourcing}</Link></li>
            <li><Link href={`/${lang}/services`}>{t.welding}</Link></li>
          </ul>
        </div>

        {/* Regions column */}
        <div className={styles.col}>
          <h4 className={styles.title}>{t.regions}</h4>
          <ul className={styles.links}>
            <li><span className={styles.regionSpan}>Auvergne-Rhône-Alpes (France)</span></li>
            <li><span className={styles.regionSpan}>Hauts-de-France (Lille)</span></li>
            <li><span className={styles.regionSpan}>Grand Est (Strasbourg)</span></li>
            <li><span className={styles.regionSpan}>Wallonie (Belgique)</span></li>
          </ul>
        </div>

        {/* Legal links */}
        <div className={styles.col}>
          <h4 className={styles.title}>{t.legal}</h4>
          <ul className={styles.links}>
            <li><Link href={`/${lang}/privacy`}>{t.privacy}</Link></li>
            <li><Link href={`/${lang}/terms`}>{t.terms}</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Estonian Legal Registration Row */}
      <div className={styles.bottomBar}>
        <div className="container flex-center" style={{ flexDirection: 'column', gap: '0.5rem', textAlign: 'center' }}>
          <p className={styles.estoniaInfo}>{t.estoniaInfo}</p>
          <p className={styles.copyright}>© {new Date().getFullYear()} MetalHub OÜ. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
