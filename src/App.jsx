import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PolesSection from './components/PolesSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedPoleForQuote, setSelectedPoleForQuote] = useState('all');
  const contactRef = useRef(null);

  const scrollToContact = (poleId = 'all') => {
    setSelectedPoleForQuote(poleId);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPoles = () => {
    const polesElement = document.getElementById('poles');
    if (polesElement) {
      polesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar onOpenQuote={() => scrollToContact('all')} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <HeroSection
          onOpenQuote={() => scrollToContact('all')}
          onExplorePoles={scrollToPoles}
        />

        <PolesSection
          onSelectPoleForQuote={(poleId) => scrollToContact(poleId)}
        />

        <AboutSection
          onOpenQuote={() => scrollToContact('all')}
        />

        <StatsSection />

        <ContactSection
          initialPoleId={selectedPoleForQuote}
          sectionRef={contactRef}
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => scrollToContact('all')} />
    </div>
  );
}
