import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, PhoneCall, ChevronRight, FileText } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nos Pôles', href: '#poles' },
    { name: 'À Propos', href: '#about' },
    { name: 'Chiffres Clés', href: '#stats' },
    { name: 'Engagements', href: '#commitments' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.96)'
            : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(0, 56, 169, 0.12)'
            : '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 56, 169, 0.08)' : 'none',
          padding: isScrolled ? '0.35rem 0' : '0.5rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo - Sleek horizontal logo in navbar */}
          <a href="#" aria-label="AVIRA GROUP Accueil" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo variant="horizontal" size="small" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--color-text-main)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-avira)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-main)')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Contact / Quote Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onOpenQuote}
              className="btn btn-primary"
              style={{
                fontSize: '0.85rem',
                padding: '0.45rem 1.1rem',
                minHeight: '38px',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <FileText size={16} />
              <span>Demander un devis</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.35rem',
                color: 'var(--color-blue-avira)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0, 24, 75, 0.96)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6rem 2rem 3rem 2rem',
            animation: 'fadeIn 0.25s ease-out forwards',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Logo variant="white" size="large" />
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-orange-avira)', borderRadius: '2px', margin: '0.5rem 0 1.5rem 0' }} />

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={20} color="var(--color-orange-avira)" />
                </a>
              ))}
            </nav>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', minHeight: '52px', fontSize: '1.05rem' }}
            >
              <FileText size={20} />
              <span>Demander un devis personnalisé</span>
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'center' }}>
              <a
                href="tel:+221784354817"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                }}
              >
                <PhoneCall size={16} color="var(--color-orange-avira)" />
                <span>+221 78 435 48 17</span>
              </a>
              <a
                href="tel:+221784424479"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                }}
              >
                <PhoneCall size={16} color="var(--color-orange-avira)" />
                <span>+221 78 442 44 79</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .hidden-mobile {
            display: none !important;
          }
          .visible-mobile {
            display: block !important;
          }
        }
        @media (min-width: 992px) {
          .hidden-mobile {
            display: block !important;
          }
          .visible-mobile {
            display: none !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
