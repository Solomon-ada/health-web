import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../data/siteConfig';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Health Education', href: '#education' },
  { label: 'Contact Us', href: '#contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-[#1B4332]/10 shadow-sm'
          : 'bg-[#FAF7F2] border-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4"
        aria-label="Primary Navigation"
      >
        <BrandLogo />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1F2923] hover:text-[#2D6A4F] transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] rounded"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1B4332] hover:text-[#2D6A4F] px-3 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#1B4332] text-[#FAF7F2] text-sm font-semibold hover:bg-[#2D6A4F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B4332]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-[#1B4332] hover:bg-[#E8F0EB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332]"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#FAF7F2] border-t border-[#1B4332]/10 px-4 pt-3 pb-6 space-y-2 shadow-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-[#1F2923] hover:bg-[#E8F0EB] hover:text-[#1B4332] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#1B4332]/10 flex flex-col gap-2">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#1B4332]/20 text-[#1B4332] font-medium"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
