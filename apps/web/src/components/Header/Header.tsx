'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';

interface HeaderProps {
  lang: string;
}

export default function Header({ lang }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Dynamic localization content
  const translations: Record<string, { services: string; projects: string; rfq: string; logoSub: string }> = {
    en: {
      services: 'Services',
      projects: 'Projects & Case Studies',
      rfq: 'Get a Quote (RFQ)',
      logoSub: 'EU Steel Contracting'
    },
    fr: {
      services: 'Services',
      projects: 'Projets & Références',
      rfq: 'Demander un Devis (RFQ)',
      logoSub: 'Ingénierie & Sourcing Acier'
    },
    de: {
      services: 'Dienstleistungen',
      projects: 'Projekte & Referenzen',
      rfq: 'Angebot anfordern (RFQ)',
      logoSub: 'Stahlkonstruktion & Sourcing'
    },
    nl: {
      services: 'Diensten',
      projects: 'Projecten & Referenties',
      rfq: 'Offerte aanvragen (RFQ)',
      logoSub: 'Staalbouw & Sourcing'
    },
    es: {
      services: 'Servicios',
      projects: 'Proyectos y Referencias',
      rfq: 'Solicitar Presupuesto (RFQ)',
      logoSub: 'Estructuras de Acero B2B'
    },
    it: {
      services: 'Servizi',
      projects: 'Progetti e Case History',
      rfq: 'Richiedi Preventivo (RFQ)',
      logoSub: 'Carpenteria Metallica B2B'
    },
    no: {
      services: 'Tjenester',
      projects: 'Prosjekter & Referanser',
      rfq: 'Be om tilbud (RFQ)',
      logoSub: 'Stålkonstruksjon & Sourcing'
    },
    sv: {
      services: 'Tjänster',
      projects: 'Projekt & Referenser',
      rfq: 'Begär offert (RFQ)',
      logoSub: 'Stålkonstruktion B2B'
    },
    pl: {
      services: 'Usługi',
      projects: 'Projekty i Referencje',
      rfq: 'Zapytaj o wycenę (RFQ)',
      logoSub: 'Konstrukcje Stalowe B2B'
    }
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentLang = translations[lang] ? lang : 'en';
  const t = translations[currentLang];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetLang = e.target.value;
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = targetLang;
    const newPathname = segments.join('/') || `/${targetLang}`;
    window.location.href = newPathname;
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        {/* Logo */}
        <Link href={`/${lang}`} className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none">
              <path d="M3 3h18v18H3z" />
              <path d="M21 3L3 21" />
              <path d="M3 3l18 18" />
            </svg>
          </div>
          <div>
            <span className={styles.logoText}>METAL<span className={styles.logoHighlight}>HUB</span></span>
            <span className={styles.logoSubtext}>{t.logoSub}</span>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleActive : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <Link 
            href={`/${lang}/services`} 
            className={pathname?.includes('/services') ? styles.activeLink : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.services}
          </Link>
          <Link 
            href={`/${lang}/projects`} 
            className={pathname?.includes('/projects') ? styles.activeLink : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.projects}
          </Link>
          <Link 
            href={`/${lang}/rfq`} 
            className={`${styles.rfqBtn} btn btn-primary`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>{t.rfq}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          
          {/* Language Selector Dropdown */}
          <div className={styles.langWrapper}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginRight: '6px', color: 'var(--text-muted)' }}>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10M12 2a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10" />
              </svg>
              <select 
                value={lang} 
                onChange={handleLanguageChange}
                className={styles.langSelect}
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="de">DE</option>
                <option value="nl">NL</option>
                <option value="es">ES</option>
                <option value="it">IT</option>
                <option value="no">NO</option>
                <option value="sv">SV</option>
                <option value="pl">PL</option>
              </select>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
