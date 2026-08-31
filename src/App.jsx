import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PolesSection from './components/PolesSection';
import PoleDetailView from './components/PoleDetailView';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedPoleForQuote, setSelectedPoleForQuote] = useState('all');
  const [selectedPoleDetail, setSelectedPoleDetail] = useState(null);
  const contactRef = useRef(null);

  const scrollToContact = (poleId = 'all') => {
    setSelectedPoleForQuote(poleId);
    if (selectedPoleDetail) {
      setSelectedPoleDetail(null);
    }
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const scrollToPoles = () => {
    if (selectedPoleDetail) {
      setSelectedPoleDetail(null);
    }
    setTimeout(() => {
      const polesElement = document.getElementById('poles');
      if (polesElement) {
        polesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigateHome = (hash = '#hero') => {
    setSelectedPoleDetail(null);
    setTimeout(() => {
      if (hash === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar
        onOpenQuote={() => scrollToContact('all')}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {selectedPoleDetail ? (
          <PoleDetailView
            pole={selectedPoleDetail}
            onBack={() => handleNavigateHome('#poles')}
            onSelectPoleForQuote={(poleId) => scrollToContact(poleId)}
          />
        ) : (
          <>
            <HeroSection
              onOpenQuote={() => scrollToContact('all')}
              onExplorePoles={scrollToPoles}
            />

            <PolesSection
              onSelectPoleForQuote={(poleId) => scrollToContact(poleId)}
              onSelectPoleDetail={(pole) => setSelectedPoleDetail(pole)}
            />

            <AboutSection
              onOpenQuote={() => scrollToContact('all')}
            />

            <StatsSection />

            <ContactSection
              initialPoleId={selectedPoleForQuote}
              sectionRef={contactRef}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => scrollToContact('all')} />
    </div>
  );
}
