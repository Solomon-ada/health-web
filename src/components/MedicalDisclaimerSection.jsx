import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function MedicalDisclaimerSection() {
  return (
    <section
      aria-label="Medical Disclaimer"
      className="py-10 bg-[#FAF7F2] border-y border-[#1B4332]/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#E8F0EB]/75 border border-[#2D6A4F]/25 flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2.5 rounded-xl bg-[#1B4332] text-[#FAF7F2] shrink-0">
            <ShieldAlert className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="space-y-1.5">
            <h2 className="font-serif text-lg font-semibold text-[#1B4332]">
              Responsible Healthcare &amp; Medical Disclaimer
            </h2>
            <p className="text-xs sm:text-sm text-[#1F2923] leading-relaxed">
              {siteConfig.medicalDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
