import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../data/siteConfig';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Health Education', href: '#education' },
  { label: 'Contact Us', href: '#contact' },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#1B4332] text-[#E8F0EB] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo light />
            <p className="text-sm text-[#E8F0EB]/85 leading-relaxed max-w-sm">
              {siteConfig.tagline}. Providing respectful, patient-centered natural wellness consultations and family health education.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#E8F0EB]/85 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-base font-semibold text-white">
              Contact &amp; Channels
            </h3>
            <ul className="space-y-2 text-sm text-[#E8F0EB]/85">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  Phone: {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  Email: {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              {siteConfig.contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#E8F0EB]/75">
          <p>
            &copy; {currentYear} {siteConfig.organizationName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="underline underline-offset-4 hover:text-white transition-colors"
            >
              Privacy Notice
            </button>
            <a
              href="#education"
              className="hover:text-white transition-colors"
            >
              Educational Disclaimer
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Notice Modal */}
      {privacyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2923]/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="bg-[#FAF7F2] text-[#1F2923] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-xl border border-[#1B4332]/15 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3
                id="privacy-modal-title"
                className="font-serif text-xl font-bold text-[#1B4332]"
              >
                Privacy Notice
              </h3>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="p-1.5 rounded-lg text-[#4A5750] hover:bg-[#E8F0EB]"
                aria-label="Close privacy notice"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-[#4A5750] leading-relaxed">
              {siteConfig.privacyNotice}
            </p>
            <p className="text-xs text-[#4A5750] leading-relaxed pt-2 border-t border-[#1B4332]/10">
              {siteConfig.medicalDisclaimer}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
