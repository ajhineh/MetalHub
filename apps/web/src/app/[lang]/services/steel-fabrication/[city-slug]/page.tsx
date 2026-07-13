import { notFound } from 'next/navigation';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { CityHero } from '@/components/CityLanding/CityHero';
import { CityStats } from '@/components/CityLanding/CityStats';
import { LocalBusinessSchema } from '@/components/SEO/LocalBusinessSchema';
import { Metadata } from 'next';
import { primaryCities } from '@/data/cities';

export const revalidate = 86400; // ISR: 24 hours

interface CityLandingProps {
  params: Promise<{
    lang: string;
    'city-slug': string;
  }>;
}

async function getCityLanding(slug: string, locale: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/city-landings?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching city landing:', error);
    return null;
  }
}

export async function generateMetadata(props: CityLandingProps): Promise<Metadata> {
  const params = await props.params;
  const data = await getCityLanding(params['city-slug'], params.lang);
  
  if (!data) {
    return {
      title: 'Not Found',
    };
  }

  const { heroTitle, seo, city } = data;
  
  // Use SEO plugin metadata if available, otherwise fallback
  return {
    title: seo?.metaTitle || heroTitle || `Steel Fabrication in ${city}`,
    description: seo?.metaDescription || `Premium structural steel manufacturing and engineering solutions delivered to ${city}.`,
    keywords: seo?.keywords || `steel fabrication ${city}, industrial steel ${city}, structural engineering`,
    alternates: {
      canonical: seo?.canonicalURL || undefined,
    }
  };
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/city-landings?locale=all&fields[0]=slug&fields[1]=locale`, {
      next: { revalidate: 86400 }
    });
    
    if (!res.ok) return [];
    
    const data = await res.json();
    
    if (!data?.data || data.data.length === 0) {
      return []; // Generate on-demand if no data
    }

    return data.data.map((item: any) => ({
      lang: item.locale,
      'city-slug': item.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for city landings:', error);
    return []; // Generate on-demand if Strapi is unreachable
  }
}

export default async function CityLandingPage(props: CityLandingProps) {
  const params = await props.params;
  const data = await getCityLanding(params['city-slug'], params.lang);

  if (!data) {
    notFound();
  }

  const { city, country, heroTitle, contentBody, projectsCount, distanceKm, latitude, longitude, faq } = data;
  const mapQuery = encodeURIComponent(`${city}, ${country}`);

  return (
    <main className="min-h-screen bg-black">
      <LocalBusinessSchema
        city={city}
        citySlug={params['city-slug']}
        latitude={latitude}
        longitude={longitude}
        locale={params.lang}
      />
      
      <CityHero heroTitle={heroTitle} cityName={city} />
      
      <CityStats projectsCount={projectsCount} distanceKm={distanceKm} cityName={city} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose prose-invert prose-orange max-w-none">
            {/* Strapi Blocks Renderer for the rich content (1200-1800 words) */}
            {contentBody ? (
              <div dangerouslySetInnerHTML={{ __html: contentBody }} />
            ) : (
              <p>Content is currently being updated for {city}.</p>
            )}
            
            {faq && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions in {city}</h2>
                <div dangerouslySetInnerHTML={{ __html: faq }} />
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1 space-y-12">
            <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
              <div className="p-6 border-b border-zinc-800 bg-zinc-950">
                <h3 className="text-xl font-semibold text-white">Coverage Area: {city}</h3>
              </div>
              {/* Google Maps Embed - 100% Free API without Key */}
              <iframe
                title={`Map of ${city}, ${country}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
              />
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-zinc-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Request Quote for {city}</h3>
              <p className="text-zinc-400 mb-6 text-sm">Our logistics team ensures swift delivery to {city} and surrounding areas.</p>
              
              {/* Note: In a real implementation, we would import the full RFQ form component here */}
              <button className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
                Start RFQ Process
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
