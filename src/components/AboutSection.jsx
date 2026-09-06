import React from 'react';
import Logo from './Logo';
import { Target, Layers, ShieldCheck, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenQuote }) {
  const pillars = [
    {
      icon: Layers,
      title: 'Synergie Inter-Métiers',
      desc: 'Un interlocuteur unique orchestre vos demandes nécessitant plusieurs compétences (ex. Logistique + BTP + Signalétique).'
    },
    {
      icon: ShieldCheck,
      title: 'Rigueur & Sécurité',
      desc: 'Respect absolu des normes réglementaires, environnementales (HQE, Euro 6) et des protocoles de sécurité sur le terrain.'
    },
    {
      icon: Compass,
      title: 'Agilité & Proximité',
      desc: 'Réactivité et souplesse d’exécution pour vous accompagner avec rapidité sur tous vos projets en France et à l’international.'
    },
    {
      icon: Target,
      title: 'Innovation Continue',
      desc: 'Investissement constant dans des équipements de dernière génération (caméras 4K, traceurs éco-responsables, flottes hybrides).'
    }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="about-grid">
          {/* Visual Side / Card Showcase */}
          <div style={{ position: 'relative' }}>
            <div
              className="about-blue-card"
              style={{
                padding: '2.5rem 2.25rem',
                background: 'linear-gradient(145deg, #0038A9 0%, #001F60 100%)',
                borderRadius: 'var(--radius-lg)',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background Geometry */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-10%',
                  width: '240px',
                  height: '240px',
                  background: 'rgba(254, 97, 2, 0.2)',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  transform: 'rotate(45deg)',
                }}
              />

              <Logo variant="white" size="medium" />

              <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--color-orange-avira)', borderRadius: '2px', margin: '1rem 0' }} />

              <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                Une organisation intégrée pensée pour vos ambitions
              </h3>

              <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                AVIRA GROUP orchestre 6 pôles d'excellence indépendants mais hautement connectés pour offrir une réponse globale et maîtrisée aux entreprises.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  '6 pôles spécialisés et autonomes',
                  'Gouvernance unifiée & maîtrise des coûts',
                  'Infrastructures logistiques & techniques de pointe',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="var(--color-orange-avira)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content & Pillars */}
          <div>
            <span className="section-tag">
              <Compass size={16} />
              <span>À Propos du Groupe</span>
            </span>

            <h2 className="section-title">
              L'Union de la Polyvalence & de <span className="text-avira-orange">l'Expertise Sectorielle</span>
            </h2>

            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
              En réunissant l'Audiovisuel, le BTP, l'Impression Numérique, la Gestion de Véhicules, la Logistique et la Livraison Express sous une même enseigne,
              AVIRA GROUP supprime la complexité de gestion multi-prestataires pour ses clients.
            </p>

            {/* 4 Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-blue-light)',
                        color: 'var(--color-blue-avira)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.85rem',
                      }}
                    >
                      <Icon size={22} color="var(--color-blue-avira)" />
                    </div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-blue-dark)', marginBottom: '0.4rem' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <button onClick={onOpenQuote} className="btn btn-primary">
              <span>Échanger sur votre projet</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .about-blue-card {
            padding: 1.25rem 1rem !important;
          }
          .about-blue-card h3 {
            font-size: 1.15rem !important;
          }
          .about-blue-card p {
            font-size: 0.85rem !important;
            margin-bottom: 0.85rem !important;
          }
        }
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
