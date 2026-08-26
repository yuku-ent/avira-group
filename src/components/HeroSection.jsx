import React from 'react';
import { ArrowRight, ShieldCheck, Layers, Award, Sparkles, Building2, Truck, Video, Printer, Car } from 'lucide-react';

export default function HeroSection({ onOpenQuote, onExplorePoles }) {
  const polesSummary = [
    { icon: Video, label: 'Audiovisuel' },
    { icon: Building2, label: 'BTP & Immobilier' },
    { icon: Printer, label: 'Impression Numérique' },
    { icon: Car, label: 'Location & Véhicules' },
    { icon: Truck, label: 'Transport & Logistique' },
  ];

  const stats = [
    { value: '05', label: "Pôles d'Activité" },
    { value: '+150', label: 'Collaborateurs Experts' },
    { value: '+500', label: 'Projets Réalisés' },
    { value: '98.4%', label: 'Taux de Satisfaction' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        background: 'radial-gradient(circle at 85% 15%, #00287A 0%, #0038A9 45%, #041235 100%)',
        color: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Dynamic Background Geometric Triangles (Mirroring Logo shape) */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(254, 97, 2, 0.15) 0%, rgba(0, 56, 169, 0) 70%)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: 'rotate(15deg)',
          pointerEvents: 'none',
        }}
        className="animate-float"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '600px',
          height: '600px',
          background: 'linear-gradient(45deg, rgba(0, 56, 169, 0.3) 0%, rgba(254, 97, 2, 0.1) 100%)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: 'rotate(-25deg)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.88rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Sparkles size={16} color="var(--color-orange-avira)" />
          <span>Groupe Multi-Sectoriel Leader</span>
          <span style={{ color: 'var(--color-orange-avira)', fontWeight: 800 }}>• 5 Pôles Métiers</span>
        </div>

        {/* Main Headline */}
        <div style={{ maxWidth: '920px' }}>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            L'Excellence & La Synergie <br />
            <span style={{ color: 'var(--color-orange-avira)' }}>Multi-Sectorielle</span> au Service de Vos Projets
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.88)',
              lineHeight: 1.65,
              maxWidth: '750px',
              marginBottom: '2.5rem',
              fontWeight: 400,
            }}
          >
            AVIRA GROUP réunit et orchestre 5 domaines d'expertise complémentaires.
            De la production audiovisuelle au transport logistique, en passant par le BTP,
            l'impression numérique et la location de véhicules : nous transformons vos besoins complexes en réussites fluides.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              alignItems: 'center',
              marginBottom: '3.5rem',
            }}
          >
            <button
              onClick={onExplorePoles}
              className="btn btn-primary"
              style={{
                fontSize: '1.05rem',
                padding: '0.95rem 2rem',
                minHeight: '52px',
              }}
            >
              <span>Explorer nos 5 pôles</span>
              <ArrowRight size={20} />
            </button>

            <button
              onClick={onOpenQuote}
              className="btn btn-outline-light"
              style={{
                fontSize: '1.05rem',
                padding: '0.95rem 2rem',
                minHeight: '52px',
              }}
            >
              <span>Demander un devis rapide</span>
            </button>
          </div>
        </div>

        {/* Quick Sector Tags Ticker Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '4rem',
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
                  gap: '0.85rem',
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(254, 97, 2, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-orange-avira)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    color: '#FFFFFF',
                  }}
                >
                  {pole.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Hero Key Stats (Using IBM Plex Mono per brand guidelines) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '2.5rem',
          }}
          className="hero-stats-grid"
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                  fontWeight: 700,
                  color: 'var(--color-orange-avira)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontWeight: 500,
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
