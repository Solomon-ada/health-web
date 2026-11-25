import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Leaf } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const slogans = [
  'Patient-Centered Natural Wellness & Responsible Health Education',
  'Supporting Families With Compassionate, Balanced Lifestyle Guidance',
  'Rooted in Family Care, Guided by Medical Responsibility',
];

export function HeroSection() {
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#1B4332] text-[#FAF7F2] min-h-[560px] sm:min-h-[620px] flex items-center py-16 sm:py-24"
    >
      {/* Full-bleed Background Image */}
      <img
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
        alt="Calm, hygienic natural wellness and care environment in soft daylight"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* High-contrast Natural Green Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/82 to-[#1B4332]/50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6 animate-fade-up">
          {/* Organization Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/15 backdrop-blur-xs border border-[#FAF7F2]/20 text-[#FAF7F2] text-xs sm:text-sm font-semibold tracking-wide">
            <Leaf className="w-4 h-4 text-[#A3C9A8]" aria-hidden="true" />
            <span>{siteConfig.organizationName}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-serif font-bold text-white leading-[1.15] tracking-tight">
            {siteConfig.heroHeadline}
          </h1>

          {/* Animated Slogan */}
          <div className="min-h-[2.25rem] flex items-center" aria-live="polite">
            <p
              key={sloganIndex}
              className="animate-slogan text-base sm:text-xl font-serif italic text-[#D8F3DC] font-medium"
            >
              “{slogans[sloganIndex]}”
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#E8F0EB] leading-relaxed max-w-2xl">
            {siteConfig.heroDescription}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF7F2] text-[#1B4332] font-semibold text-base hover:bg-[#E8F0EB] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FAF7F2]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1B4332]/60 text-[#FAF7F2] border border-[#FAF7F2]/40 font-semibold text-base hover:bg-[#FAF7F2]/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FAF7F2]"
            >
              <span>Contact Us</span>
            </a>
          </div>

          {/* Responsible Healthcare Note */}
          <div className="pt-5 border-t border-white/15 flex items-start gap-3 text-sm text-[#E8F0EB] max-w-2xl">
            <ShieldCheck
              className="w-5 h-5 text-[#A3C9A8] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p>
              <strong className="font-semibold text-white">
                Responsible, Patient-Centered Care:
              </strong>{' '}
              We provide educational wellness guidance that complements—never replaces—licensed medical diagnosis and prescribed treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
