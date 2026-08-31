import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  PhoneCall,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Wrench,
  Layers,
  Clock,
  HelpCircle,
  BarChart3
} from 'lucide-react';

export default function PoleDetailView({ pole, onBack, onSelectPoleForQuote }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenFaqIndex(null);
  }, [pole]);

  if (!pole) return null;

  const Icon = pole.icon;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
          padding: '0.85rem 0',
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
      <div className="container" style={{ marginTop: '2rem' }}>
        {/* Pôle Hero Banner */}
        <div
          style={{
            background: `linear-gradient(135deg, ${pole.color} 0%, #001F60 100%)`,
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
              width: '450px',
              height: '450px',
              background: 'rgba(255, 255, 255, 0.06)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              transform: 'rotate(25deg)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>
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

            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.75, maxWidth: '800px', marginBottom: '2.5rem' }}>
              {pole.fullDescription}
            </p>

            {/* Pôle Key Metrics Bar */}
            {pole.stats && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  marginBottom: '2.5rem',
                }}
              >
                {pole.stats.map((stat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-orange-avira)' }}>
                      {stat.value}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

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
                <span>Parler à un chargé d'affaires</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 1: Prestations & Domaines d'Intervention (Comprehensive Grid) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span className="section-tag">
              <Zap size={16} />
              <span>Domaines de Compétences</span>
            </span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              Nos Prestations & Solutions <span className="text-avira-orange">Sur-Mesure</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', maxWidth: '700px' }}>
              Découvrez la diversité et la précision des prestations délivrées par nos équipes spécialisées du pôle {pole.title}.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
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
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
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
                <div>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(0, 56, 169, 0.08)',
                      color: 'var(--color-blue-avira)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <CheckCircle2 size={24} color="var(--color-orange-avira)" />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-blue-dark)', marginBottom: '0.6rem', fontFamily: 'var(--font-heading)' }}>
                    {service.name}
                  </h3>

                  <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                    {service.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-blue-avira)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Service Certifié AVIRA
                  </span>
                  <button
                    onClick={() => onSelectPoleForQuote(pole.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-orange-avira)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <span>Devis</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Parc Équipement & Moyens Techniques */}
        {pole.equipment && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '4rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-blue-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-blue-avira)',
                }}
              >
                <Wrench size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-blue-dark)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                  Parc Matériel & Moyens Techniques du Pôle
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  Déploiement d'équipements de pointe récents et révisés pour une exécution sans faille.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {pole.equipment.map((eq, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'var(--color-bg-light)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-orange-avira)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.94rem', color: 'var(--color-text-main)', fontWeight: 500 }}>
                    {eq}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Notre Processus d'Intervention en 4 Étapes */}
        {pole.methodology && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-tag">
                <Layers size={16} />
                <span>Méthodologie Opérationnelle</span>
              </span>
              <h2 className="section-title">
                Notre Processus d'Intervention en <span className="text-avira-orange">4 Étapes</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Un déroulement rigoureux garantissant la maîtrise des coûts, la sécurité et le respect des délais.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {pole.methodology.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem 1.5rem',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '2.2rem',
                      fontWeight: 800,
                      color: 'rgba(0, 56, 169, 0.12)',
                      position: 'absolute',
                      top: '1rem',
                      right: '1.25rem',
                    }}
                  >
                    {m.step}
                  </span>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-blue-dark)', marginBottom: '0.6rem', fontFamily: 'var(--font-heading)' }}>
                    {m.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Engagements de Service & Garanties */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '4rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
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
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-blue-dark)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                Engagements de Qualité Pôle {pole.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Certifications, sécurité au travail et rigueur contractuelle.
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

        {/* Section 5: Foire Aux Questions (FAQ Dédiée par Pôle) */}
        {pole.faq && (
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-tag">
                <HelpCircle size={16} />
                <span>Foire Aux Questions</span>
              </span>
              <h2 className="section-title">
                Questions Fréquentes — <span className="text-avira-orange">Pôle {pole.title}</span>
              </h2>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {pole.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <strong style={{ fontSize: '1.05rem', color: 'var(--color-blue-dark)', fontFamily: 'var(--font-heading)' }}>
                        {item.q}
                      </strong>
                      <ChevronDown
                        size={20}
                        color="var(--color-orange-avira)"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          flexShrink: 0,
                          marginLeft: '1rem',
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 1.5rem 1.25rem 1.5rem',
                          color: 'var(--color-text-muted)',
                          fontSize: '0.96rem',
                          lineHeight: 1.65,
                          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                          paddingTop: '1rem',
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 6: Custom Dedicated CTA Block for this Pole */}
        <div
          style={{
            background: 'linear-gradient(135deg, #00287A 0%, #0038A9 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem 2.5rem',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
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
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={16} />
              <span>Devis Sur-Mesure Pôle {pole.title}</span>
            </span>

            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem' }}>
              {cta.title}
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.65, marginBottom: '2.5rem' }}>
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
