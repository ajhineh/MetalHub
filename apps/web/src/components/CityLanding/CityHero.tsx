import React from 'react';

interface CityHeroProps {
  heroTitle: string;
  cityName: string;
}

export function CityHero({ heroTitle, cityName }: CityHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Overlay - we could use a specific city image or a generic industrial one */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {heroTitle}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
          Premium structural steel manufacturing and engineering delivered directly to {cityName}. EN 1090 certified quality for your most demanding projects.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors shadow-lg">
            Request a Quote for {cityName}
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-colors border border-white/20">
            View Our Certifications
          </button>
        </div>
      </div>
    </section>
  );
}
