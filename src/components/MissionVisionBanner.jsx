import React from 'react';
import { Compass, Eye } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function MissionVisionBanner() {
  return (
    <section
      aria-label="Mission and Vision"
      className="bg-[#1B4332] text-[#FAF7F2] py-14 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#23533E]/70 border border-white/10">
            <div className="p-3 rounded-xl bg-[#FAF7F2]/10 text-[#A3C9A8] shrink-0">
              <Compass className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-white mb-2">
                Our Mission
              </h2>
              <p className="text-[#E8F0EB] text-sm sm:text-base leading-relaxed">
                {siteConfig.mission}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#23533E]/70 border border-white/10">
            <div className="p-3 rounded-xl bg-[#FAF7F2]/10 text-[#A3C9A8] shrink-0">
              <Eye className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-white mb-2">
                Our Vision
              </h2>
              <p className="text-[#E8F0EB] text-sm sm:text-base leading-relaxed">
                {siteConfig.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
