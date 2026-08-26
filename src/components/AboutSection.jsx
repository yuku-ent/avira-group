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
              style={{
                padding: '3rem 2.5rem',
                background: 'linear-gradient(145deg, #0038A9 0%, #001F60 100%)',
                borderRadius: 'var(--radius-lg)',
                color: '#FFFFFF',
                boxShadow: 'var(--shadow-lg)',
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
                  width: '300px',
                  height: '300px',
                  background: 'rgba(254, 97, 2, 0.2)',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  transform: 'rotate(45deg)',
                }}
              />

              <Logo variant="white" size="large" className="mb-6" />

              <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--color-orange-avira)', borderRadius: '2px', margin: '1.5rem 0' }} />

              <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.3 }}>
                Une organisation intégrée pensée pour concrétiser vos ambitions
              </h3>

              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Créé avec l'ambition d'offrir une réponse globale et maîtrisée aux défis des entreprises et collectivités,
                AVIRA GROUP s'est développé autour de 5 pôles d'excellence indépendants mais hautement connectés.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  '5 filiales spécialisées et autonomes',
                  'Une gouvernance unifiée garantissant réactivité et maîtrise des coûts',
                  'Des infrastructures logistiques et techniques de premier plan',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} color="var(--color-orange-avira)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 500 }}>{item}</span>
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
              En réunissant l'Audiovisuel, le BTP, l'Impression Numérique, la Gestion de Véhicules et la Logistique sous une même enseigne,
              AVIRA GROUP supprime la complexité de gestion multi-prestataires pour ses clients.
            </p>

            {/* 4 Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
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
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
