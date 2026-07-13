import Script from 'next/script';

interface LocalBusinessSchemaProps {
  city: string;
  citySlug: string;
  latitude: number;
  longitude: number;
  locale: string;
}

export function LocalBusinessSchema({ city, citySlug, latitude, longitude, locale }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Fabrication de Structures Métalliques - SideroHub ${city}`,
    "description": `Premium EN 1090 certified structural steel fabrication, manufacturing, and technical engineering solutions tailored for projects in ${city}.`,
    "url": `https://siderohub.com/${locale}/services/steel-fabrication/${citySlug}`,
    "provider": {
      "@type": "Organization",
      "name": "SideroHub",
      "url": "https://siderohub.com",
      "telephone": "+33 1 23 45 67 89"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": latitude.toString(),
        "longitude": longitude.toString()
      },
      "geoRadius": "150000"
    },
    "serviceType": "Steel Fabrication & Manufacturing",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `SideroHub Steel Structures ${city}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Industrial Steel Structures ${city}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EN 1090 Certified Steel Cutting and Welding"
          }
        }
      ]
    }
  };

  return (
    <Script
      id={`local-business-schema-${citySlug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
