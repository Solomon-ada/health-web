import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MissionVisionBanner } from './components/MissionVisionBanner';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { HealthEducationSection } from './components/HealthEducationSection';
import { MedicalDisclaimerSection } from './components/MedicalDisclaimerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F2923]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#1B4332] focus:text-white focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <MissionVisionBanner />
        <AboutSection />
        <ServicesSection />
        <HealthEducationSection />
        <MedicalDisclaimerSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
