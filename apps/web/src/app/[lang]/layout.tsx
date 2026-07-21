import type { Metadata } from 'next';
import '../globals.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Script from 'next/script';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const titles: Record<string, { title: string; desc: string }> = {
    en: {
      title: 'B2B Industrial Steel Structures supply in Europe | SideroHub',
      desc: 'Custom engineering, material sourcing, and localized European fabrication of heavy steel frames. Get a quote within 48h.'
    },
    fr: {
      title: 'Sous-traitance de Structures Métalliques en Europe | SideroHub',
      desc: 'Conception, approvisionnement et fabrication de structures métalliques (châssis, passerelles) aux normes EN 1090. Devis gratuit sous 48h.'
    },
    de: {
      title: 'B2B Industrielle Stahlkonstruktionen in Europa | SideroHub',
      desc: 'Maßgeschneidertes Engineering, Materialbeschaffung und lokale europäische Fertigung von schweren Stahlrahmen. Angebot anfordern.'
    },
    nl: {
      title: 'B2B Industriële Staalconstructies in Europa | SideroHub',
      desc: 'Engineering op maat, inkoop van gecertificeerde materialen en lokale Europese productie van zware frames.'
    },
    es: {
      title: 'Suministro B2B de Estructuras Metálicas en Europa | SideroHub',
      desc: 'Diseño estructural, suministro de acero certificado y fabricación local en Europa. Presupuesto en 48 horas.'
    },
    it: {
      title: 'Carpenteria Metallica Industriale B2B in Europa | SideroHub',
      desc: 'Progettazione su misura, sourcing certificato e fabbricazione locale di carpenteria pesante. Preventivo rapido.'
    },
    no: {
      title: 'B2B Industrielle Stålkonstruksjoner i Europa | SideroHub',
      desc: 'Sertifisert prosjektering, materialinnkjøp og lokal fabrikasjon av tunge stålrammer i Europa.'
    },
    sv: {
      title: 'B2B Industriella Stålkonstruktioner i Europa | SideroHub',
      desc: 'Anpassad konstruktion, materialförsörjning och lokal tillverkning av tunga stålramar i Europa.'
    },
    pl: {
      title: 'Konstrukcje Stalowe B2B w Europie | SideroHub',
      desc: 'Projektowanie, certyfikowane zaopatrzenie i lokalna produkcja ciężkich ram stalowych. Zapytaj o wycenę.'
    }
  };

  const selected = titles[lang] || titles.en;
  return {
    title: selected.title,
    description: selected.desc
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const currentLang = resolvedParams.lang;
  const supportedLocales = ['en', 'fr', 'de', 'nl', 'es', 'it', 'no', 'sv', 'pl'];
  const langTag = supportedLocales.includes(currentLang) ? currentLang : 'en';

  return (
    <html lang={langTag}>
      <head>
        {/* Load Google Fonts standardly without next/font/google to bypass SWC dependency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Declare fallback variables for styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-inter: 'Inter', sans-serif;
            --font-space-grotesk: 'Space Grotesk', sans-serif;
          }
        `}} />

        {/* Client-Side IP Geolocation Fallback */}
        <Script id="geoip-redirect" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
          (function() {
            var locales = ['en', 'fr', 'de', 'nl', 'es', 'it', 'no', 'sv', 'pl'];
            
            function getCookie(name) {
              var value = "; " + document.cookie;
              var parts = value.split("; " + name + "=");
              if (parts.length == 2) return parts.pop().split(";").shift();
            }

            var hasGeolocated = getCookie('NEXT_LOCALE_GEOLOCATED');
            var nextLocale = getCookie('NEXT_LOCALE');

            if (!hasGeolocated && !nextLocale) {
              document.cookie = "NEXT_LOCALE_GEOLOCATED=true;path=/;max-age=31536000;SameSite=Lax";
              
              fetch('https://ipapi.co/json/')
                .then(function(res) { return res.json(); })
                .then(function(data) {
                  var country = (data.country_code || '').toUpperCase();
                  var countryMap = {
                    DE: 'de', AT: 'de', CH: 'de',
                    FR: 'fr',
                    NL: 'nl', BE: 'nl',
                    ES: 'es',
                    IT: 'it',
                    NO: 'no',
                    SE: 'sv',
                    PL: 'pl'
                  };
                  var targetLang = countryMap[country] || 'en';
                  
                  // Save matching locale in cookie
                  document.cookie = "NEXT_LOCALE=" + targetLang + ";path=/;max-age=31536000;SameSite=Lax";
                  
                  var pathname = window.location.pathname;
                  var segments = pathname.split('/');
                  var currentPrefix = segments[1];
                  
                  if (locales.indexOf(currentPrefix) !== -1 && currentPrefix !== targetLang) {
                    segments[1] = targetLang;
                    window.location.href = segments.join('/') || '/' + targetLang;
                  }
                })
                .catch(function(err) {
                  console.error("GeoIP lookup failed: ", err);
                });
            }
          })();
        `}} />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header lang={langTag} />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer lang={langTag} />
        <ScrollToTop />
      </body>
    </html>
  );
}
