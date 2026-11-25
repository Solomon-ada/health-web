import React from 'react';
import { CheckCircle2, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F2ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#1B4332]/10 shadow-sm aspect-[4/4.4]">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=950&q=85"
                alt="Healthcare practitioner providing attentive patient-centered consultation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Narrative & Core Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2D6A4F]">
              <Heart className="w-4 h-4" aria-hidden="true" />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] leading-tight">
              Rooted in Family Care, Guided by Medical Responsibility
            </h2>

            <p className="text-base text-[#4A5750] leading-relaxed">
              <strong className="text-[#1F2923] font-semibold">
                {siteConfig.organizationName}
              </strong>{' '}
              was established to provide a welcoming, trustworthy space where individuals and families can receive thoughtful natural wellness guidance and reliable health education.
            </p>

            {/* Philosophy Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border-l-4 border-[#2D6A4F] shadow-xs">
              <h3 className="font-serif text-lg font-semibold text-[#1B4332] mb-1.5">
                Our Philosophy of Healthcare
              </h3>
              <p className="text-sm sm:text-base text-[#4A5750] leading-relaxed">
                {siteConfig.philosophy}
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="pt-2">
              <h3 className="font-serif text-xl font-semibold text-[#1B4332] mb-4">
                Our Core Values &amp; Commitment
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {siteConfig.coreValues.map((value) => (
                  <div
                    key={value.title}
                    className="p-4 rounded-xl bg-[#FAF7F2] border border-[#1B4332]/10"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2
                        className="w-4 h-4 text-[#2D6A4F] shrink-0"
                        aria-hidden="true"
                      />
                      <h4 className="font-sans font-semibold text-sm text-[#1B4332]">
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A5750] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
