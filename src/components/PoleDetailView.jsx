import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, FileText, PhoneCall, ShieldCheck, Zap, Award, Sparkles, ChevronRight } from 'lucide-react';

export default function PoleDetailView({ pole, onBack, onSelectPoleForQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pole]);

  if (!pole) return null;

  const Icon = pole.icon;

  // Custom CTA content per pole
  const getCtaContent = (poleId) => {
    switch (poleId) {
      case 'audiovisuel':
        return {
          badge: 'Ingénierie Audiovisuelle & Événementielle',
          title: 'Un projet de captation, vidéo corporate ou direct 4K ?',
          subtitle: 'Nos techniciens et réalisateurs conçoivent votre production audiovisuelle sur-mesure avec matériel de pointe.',
          buttonText: 'Obtenir une cotation audiovisuelle',
        };
      case 'btp':
        return {
          badge: 'Gros Œuvre & Promotion Immobilière',
          title: 'Une étude de chantier, rénovation ou construction BTP ?',
          subtitle: 'Nos ingénieurs et conducteurs de travaux étudient vos plans et garantissent le respect des normes HQE et délais.',
          buttonText: 'Demander une étude technique BTP',
        };
      case 'impression':
        return {
          badge: 'Impression Grand Format & Covering',
          title: 'Un besoin en signalétique, bâches ou habillage de flotte ?',
          subtitle: 'Bénéficiez de notre atelier de façonnage numérique haute définition et d\'un contrôle qualité rigoureux.',
          buttonText: 'Demander un devis Impression',
        };
      case 'vehicules':
        return {
          badge: 'Gestion de Flotte & Location LLD / LCD',
          title: 'Besoin de véhicules utilitaires, berlines ou engins de chantier ?',
          subtitle: 'Bénéficiez de contrats de location flexibles avec maintenance préventive et véhicule de remplacement 24/7.',
          buttonText: 'Réserver une flotte ou devis LLD',
        };
      case 'logistique':
        return {
          badge: 'Transport Routier & Entreposage Sécurisé',
          title: 'Un acheminement de marchandises ou prestation logistique ?',
          subtitle: 'Sécurisez votre chaîne d\'approvisionnement avec notre flotte décarbonée et suivi GPS en temps réel.',
          buttonText: 'Calculer un devis Transport & Fret',
        };
      default:
        return {
          badge: 'Expertise Sectorielle AVIRA',
          title: 'Besoin d\'une étude ou d\'un devis personnalisé ?',
          subtitle: 'Un chargé d\'affaires dédié étudie vos besoins et vous répond sous 24h ouvrées.',
          buttonText: 'Demander mon devis personnalisé',
        };
    }
  };

  const cta = getCtaContent(pole.id);

  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
      {/* Sticky Navigation Sub-Bar */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--color-border)',
          padding: '1rem 0',
          position: 'sticky',
          top: '60px',
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <button
            onClick={onBack}
            className="btn btn-outline-blue"
            style={{
              fontSize: '0.88rem',
              padding: '0.45rem 1rem',
              minHeight: '38px',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <ArrowLeft size={16} />
            <span>Retour aux 5 services</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-muted)' }}>
            <span style={{ cursor: 'pointer' }} onClick={onBack}>Accueil</span>
            <ChevronRight size={14} />
            <span style={{ cursor: 'pointer' }} onClick={onBack}>Services</span>
            <ChevronRight size={14} />
            <strong style={{ color: 'var(--color-blue-avira)' }}>Pôle {pole.title}</strong>
          </div>
        </div>
      </div>

      {/* Main Structured Page Content */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        {/* Pôle Hero Banner */}
        <div
          style={{
            background: `linear-gradient(135deg, ${pole.color} 0%, #00287A 100%)`,
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '3rem',
          }}
        >
          {/* Subtle Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '400px',
              height: '400px',
              background: 'rgba(255, 255, 255, 0.08)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              transform: 'rotate(25deg)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '850px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              <Icon size={16} />
              <span>{cta.badge}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
              Pôle {pole.title}
            </h1>

            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500, lineHeight: 1.5, marginBottom: '1.5rem' }}>
              {pole.subtitle}
            </p>

            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, maxWidth: '750px', marginBottom: '2rem' }}>
              {pole.fullDescription}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onSelectPoleForQuote(pole.id)}
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.75rem', minHeight: '48px' }}
              >
                <FileText size={18} />
                <span>{cta.buttonText}</span>
              </button>

              <a
                href="tel:+221784354817"
                className="btn btn-outline-light"
                style={{ fontSize: '1rem', padding: '0.85rem 1.75rem', minHeight: '48px' }}
              >
                <PhoneCall size={18} />
                <span>Contacter un expert pôle</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 1: Prestations & Domaines d'Intervention (Structured Grid) */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span className="section-tag">
              <Zap size={16} />
              <span>Domaines de Compétences</span>
            </span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Nos Prestations & Solutions <span className="text-avira-orange">Sur-Mesure</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {pole.services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  border: '1px solid var(--color-border)',
                  borderTop: `4px solid ${pole.color}`,
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(0, 56, 169, 0.08)',
                    color: 'var(--color-blue-avira)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <CheckCircle2 size={22} color="var(--color-orange-avira)" />
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-blue-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                  {service.name}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Standards Techniques, Équipements & Garanties */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-blue-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-blue-avira)',
              }}
            >
              <Award size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-blue-dark)', margin: 0 }}>
                Pourquoi choisir le Pôle {pole.title} d'AVIRA GROUP ?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Garanties de service, équipements et méthodologie rigoureuse.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {pole.highlights.map((highlight, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem',
                  padding: '1.1rem 1.25rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--color-orange-avira)',
                }}
              >
                <ShieldCheck size={20} color="var(--color-blue-avira)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', fontWeight: 500, lineHeight: 1.5 }}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Custom Dedicated CTA Block for this Pole */}
        <div
          style={{
            background: 'linear-gradient(135deg, #00287A 0%, #0038A9 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2.5rem',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-orange-avira)',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={16} />
              <span>Devis Personnalisé Pôle {pole.title}</span>
            </span>

            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem' }}>
              {cta.title}
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6, marginBottom: '2rem' }}>
              {cta.subtitle}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onSelectPoleForQuote(pole.id)}
                className="btn btn-primary"
                style={{ fontSize: '1.05rem', padding: '0.95rem 2rem', minHeight: '52px' }}
              >
                <FileText size={20} />
                <span>{cta.buttonText}</span>
              </button>

              <button
                onClick={onBack}
                className="btn btn-outline-light"
                style={{ fontSize: '1.05rem', padding: '0.95rem 2rem', minHeight: '52px' }}
              >
                <span>Découvrir les autres pôles</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
