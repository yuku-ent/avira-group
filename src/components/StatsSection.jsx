import React from 'react';
import { Award, ShieldCheck, Leaf, Clock, Users, CheckCircle } from 'lucide-react';

export default function StatsSection() {
  const metrics = [
    { value: '5', suffix: '', label: 'Pôles Spécialisés', desc: 'Audiovisuel, BTP, Print, Véhicules, Logistique' },
    { value: '500', suffix: '+', label: 'Projets Menés à Bien', desc: 'Pour entreprises, collectivités et institutionnels' },
    { value: '150', suffix: '+', label: 'Experts Dédiés', desc: 'Ingénieurs, techniciens, chauffeurs et artisans qualifiés' },
    { value: '98.4', suffix: '%', label: 'Satisfaction Client', desc: 'Basée sur les évaluations d’audit de fin de mission' },
  ];

  const commitments = [
    {
      icon: Leaf,
      title: 'Responsabilité Écologique',
      desc: 'Encres éco-conçues pour l’impression, flotte décarbonée (Euro 6 & Électrique) et chantiers BTP à faible empreinte carbone.'
    },
    {
      icon: ShieldCheck,
      title: 'Sécurité & Conformité',
      desc: 'Respect strict des normes de sécurité au travail, habillement des équipes terrain et certifications qualité mises à jour annuellement.'
    },
    {
      icon: Clock,
      title: 'Réactivité 24/7',
      desc: 'Assistance dédiée, permanence technique et astreinte logistique pour parer à toutes les urgences opérationnelles.'
    }
  ];

  return (
    <section
      id="stats"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #002570 0%, #0038A9 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span
            className="section-tag"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <Award size={16} color="var(--color-orange-avira)" />
            <span>Chiffres Clés & Engagements</span>
          </span>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            Une Solidité Opérationnelle <br />
            <span style={{ color: 'var(--color-orange-avira)' }}>Prouvée Par les Faits</span>
          </h2>
        </div>

        {/* Metrics Grid (IBM Plex Mono typography) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                padding: '2rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '3.2rem',
                  fontWeight: 700,
                  color: 'var(--color-orange-avira)',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                {m.value}
                <span style={{ fontSize: '2.2rem', color: '#FFFFFF' }}>{m.suffix}</span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.4rem' }}>
                {m.label}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Engagements Sub-section */}
        <div id="commitments" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '4rem' }}>
          <h3 style={{ textAlign: 'center', color: '#FFFFFF', fontSize: '1.8rem', marginBottom: '3rem' }}>
            Nos Engagements Qualité & RSE
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(254, 97, 2, 0.15)',
                      color: 'var(--color-orange-avira)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '0.5rem' }}>{c.title}</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
