import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Layers, Award, Sparkles, Building2, Truck, Video, Printer, Car, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection({ onOpenQuote, onExplorePoles }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: '/images/service_audiovisuel.jpg', title: 'Audiovisuel', tag: 'Production Vidéo 4K' },
    { image: '/images/service_btp.jpg', title: 'BTP & Immobilier', tag: 'Gros Œuvre & Génie Civil' },
    { image: '/images/service_impression.jpg', title: 'Impression Numérique', tag: 'Grand Format & Signalétique' },
    { image: '/images/service_vehicules.jpg', title: 'Location Véhicules', tag: 'Flottes & Utilitaires' },
    { image: '/images/service_logistique.jpg', title: 'Transport & Logistique', tag: 'Fret & Entreposage' },
    { image: '/images/service_express.jpg', title: 'Livraison Express', tag: 'Coursier 24/7' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const polesSummary = [
    { icon: Video, label: 'Audiovisuel' },
    { icon: Building2, label: 'BTP & Immobilier' },
    { icon: Printer, label: 'Impression Numérique' },
    { icon: Car, label: 'Location & Véhicules' },
    { icon: Truck, label: 'Transport & Logistique' },
    { icon: Zap, label: 'Livraison Express' },
  ];

  const stats = [
    { value: '06', label: "Pôles d'Activité" },
    { value: '+150', label: 'Collaborateurs Experts' },
    { value: '+500', label: 'Projets Réalisés' },
    { value: '98.4%', label: 'Taux de Satisfaction' },
  ];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '5.5rem',
        paddingBottom: '5rem',
        backgroundColor: '#041235',
        color: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Background Photo Diaporama Slideshow with Smooth Crossfade */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out',
                pointerEvents: 'none',
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: isActive ? 'scale(1.05)' : 'scale(1.0)',
                  transition: 'transform 6s ease-out',
                }}
              />
            </div>
          );
        })}

        {/* Translucent Gradient Overlay for Clear Background Photos & High Text Contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(4, 18, 53, 0.55) 0%, rgba(0, 31, 96, 0.42) 50%, rgba(4, 18, 53, 0.68) 100%)',
            zIndex: 2,
          }}
        />
      </div>

      {/* Dynamic Background Geometric Triangles */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(254, 97, 2, 0.2) 0%, rgba(0, 56, 169, 0) 70%)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: 'rotate(15deg)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
        className="animate-float"
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Pill Badge with Active Slide Tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.88rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Sparkles size={16} color="var(--color-orange-avira)" />
          <span>Groupe Multi-Sectoriel Leader</span>
          <span style={{ color: 'var(--color-orange-avira)', fontWeight: 800 }}>
            • {slides[currentSlide].tag}
          </span>
        </div>

        {/* Main Headline */}
        <div style={{ maxWidth: '920px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            L'Excellence & La Synergie <br />
            <span style={{ color: 'var(--color-orange-avira)' }}>Multi-Sectorielle</span> au Service de Vos Projets
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.65,
              maxWidth: '720px',
              marginBottom: '2.75rem',
              fontWeight: 400,
            }}
          >
            AVIRA GROUP réunit 6 domaines d'expertise complémentaires : Audiovisuel, BTP, Impression Numérique,
            Location de Véhicules, Transport Logistique et Livraison Express 24/7 pour concrétiser tous vos projets.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              alignItems: 'center',
              marginBottom: '2.75rem',
            }}
          >
            <button
              onClick={onExplorePoles}
              className="btn btn-primary"
              style={{
                fontSize: '1rem',
                padding: '0.85rem 1.75rem',
                minHeight: '48px',
              }}
            >
              <span>Explorer nos 6 pôles</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onOpenQuote}
              className="btn btn-outline-light"
              style={{
                fontSize: '1rem',
                padding: '0.85rem 1.75rem',
                minHeight: '48px',
              }}
            >
              <span>Demander un devis rapide</span>
            </button>
          </div>

          {/* Centered Diaporama Photo Slide Indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem',
              marginBottom: '2.5rem',
              width: '100%',
            }}
          >
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: idx === currentSlide ? '32px' : '9px',
                  height: '9px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: idx === currentSlide ? 'var(--color-orange-avira)' : 'rgba(255, 255, 255, 0.45)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.35)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Quick Sector Tags Ticker Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.75rem',
            padding: 'clamp(0.85rem, 2.5vw, 1.25rem)',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '2.5rem',
          }}
        >
          {polesSummary.map((pole, idx) => {
            const Icon = pole.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.4rem 0.6rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(254, 97, 2, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-orange-avira)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    color: '#FFFFFF',
                  }}
                >
                  {pole.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Hero Key Stats Grid (Pristine Equal-Height Cards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '2rem',
          }}
          className="hero-stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1.15rem 0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-md)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 700,
                  color: 'var(--color-orange-avira)',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 600,
                  lineHeight: 1.25,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
