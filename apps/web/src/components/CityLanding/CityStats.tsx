import React from 'react';

interface CityStatsProps {
  projectsCount: number;
  distanceKm: number;
  cityName: string;
}

export function CityStats({ projectsCount, distanceKm, cityName }: CityStatsProps) {
  return (
    <section className="py-16 bg-zinc-950 border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          
          <div className="px-6 py-4">
            <div className="text-5xl font-extrabold text-orange-500 mb-2">
              {projectsCount}+
            </div>
            <div className="text-lg font-medium text-white mb-1">Delivered Projects</div>
            <p className="text-zinc-400 text-sm">Successfully completed industrial structures in and around {cityName}.</p>
          </div>

          <div className="px-6 py-4">
            <div className="text-5xl font-extrabold text-orange-500 mb-2">
              EN 1090
            </div>
            <div className="text-lg font-medium text-white mb-1">European Standard</div>
            <p className="text-zinc-400 text-sm">EXC3 and EXC4 certified manufacturing guaranteeing absolute safety for {cityName}.</p>
          </div>

          <div className="px-6 py-4">
            <div className="text-5xl font-extrabold text-orange-500 mb-2">
              &lt; {distanceKm}km
            </div>
            <div className="text-lg font-medium text-white mb-1">Logistics Radius</div>
            <p className="text-zinc-400 text-sm">Optimized supply chain delivery from our nearest fabrication facilities to {cityName}.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
