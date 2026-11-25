import React from 'react';
import {
  Stethoscope,
  BookOpenCheck,
  HeartHandshake,
  Apple,
  Users,
  Check,
  Info,
} from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Stethoscope,
  BookOpenCheck,
  HeartHandshake,
  Apple,
  Users,
};

export function ServicesSection() {
  const featuredService = services.find((s) => s.featured) || services[0];
  const otherServices = services.filter((s) => s.id !== featuredService.id);
  const FeaturedIcon = iconMap[featuredService.icon] || Stethoscope;

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Left-aligned for editorial variety) */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2D6A4F] mb-2">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] leading-tight">
            Thoughtful Wellness &amp; Educational Support
          </h2>
          <p className="mt-3 text-base text-[#4A5750] leading-relaxed">
            Our services focus on everyday wellness, preventive health education, and respectful guidance—designed to support your family alongside professional medical care.
          </p>
        </div>

        {/* Asymmetric Layout: 1 Flagship Service + 2x2 Supporting Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Flagship Service Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#1B4332] text-[#FAF7F2] shadow-md">
            <div className="space-y-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FAF7F2]/15 text-[#A3C9A8]">
                <FeaturedIcon className="w-6 h-6" aria-hidden="true" />
              </div>

              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#A3C9A8] mb-2">
                  Core Consultation
                </span>
                <h3 className="font-serif text-2xl font-semibold text-white leading-snug">
                  {featuredService.title}
                </h3>
              </div>

              <p className="text-[#E8F0EB] text-sm sm:text-base leading-relaxed">
                {featuredService.summary}
              </p>

              <ul className="space-y-2.5 pt-2">
                {featuredService.details.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#E8F0EB]">
                    <Check
                      className="w-4 h-4 text-[#A3C9A8] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-white/15">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#FAF7F2] text-[#1B4332] font-semibold text-sm hover:bg-[#E8F0EB] transition-colors"
              >
                Inquire About a Consultation
              </a>
            </div>
          </div>

          {/* Supporting Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherServices.map((service) => {
              const IconComponent = iconMap[service.icon] || HeartHandshake;
              return (
                <article
                  key={service.id}
                  className="p-6 rounded-2xl bg-white border border-[#1B4332]/10 hover:border-[#2D6A4F]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#E8F0EB] text-[#1B4332] mb-4">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#1B4332] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4A5750] leading-relaxed mb-4">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-3 border-t border-[#1B4332]/10">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-xs text-[#4A5750]"
                      >
                        <Check
                          className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        {/* Scope of Care Notice */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#E8F0EB]/70 border border-[#2D6A4F]/20 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#1B4332] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-[#1F2923] leading-relaxed">
            <strong>Scope of Services:</strong> Our consultations and educational programs focus on supportive wellness, nutrition, and preventive habits. We do not offer emergency medical treatment, clinical diagnostics, or unverified disease cures.
          </p>
        </div>
      </div>
    </section>
  );
}
