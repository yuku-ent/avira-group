import React from 'react';
import { X, CheckCircle, ArrowRight, Phone, FileText, Zap, Award, Building, Sparkles } from 'lucide-react';

export default function PoleModal({ pole, onClose, onSelectPoleForQuote }) {
  if (!pole) return null;

  const Icon = pole.icon;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(0, 24, 75, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'fadeIn 0.2s ease-out forwards',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          border: '1px solid rgba(0, 56, 169, 0.15)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '2rem 2.5rem',
            background: `linear-gradient(135deg, ${pole.color} 0%, #002B82 100%)`,
            color: '#FFFFFF',
            position: 'relative',
          }}
        >
          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.35)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
          >
            <X size={22} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <Icon size={30} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                Pôle d'Activité AVIRA
              </span>
              <h2 style={{ fontSize: '1.9rem', color: '#FFFFFF', margin: 0 }}>{pole.title}</h2>
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, maxWidth: '650px' }}>
            {pole.fullDescription}
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem 2.5rem' }}>
          {/* Prestations détaillées */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--color-blue-dark)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Zap size={22} color="var(--color-orange-avira)" />
              <span>Nos Domaines de Compétences & Prestations</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {pole.services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem 1.2rem',
                    backgroundColor: 'var(--color-bg-light)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--color-blue-avira)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <CheckCircle size={20} color="var(--color-orange-avira)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--color-text-main)', fontFamily: 'var(--font-heading)' }}>
                      {service.name}
                    </strong>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                      {service.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages / Equipment */}
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--color-blue-light)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(0, 56, 169, 0.12)',
              marginBottom: '2rem',
            }}
          >
            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-blue-avira)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} />
              <span>Pourquoi choisir le Pôle {pole.title} d'AVIRA GROUP ?</span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {pole.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-blue-dark)' }}>
                  <span style={{ color: 'var(--color-orange-avira)', fontWeight: 800 }}>•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '1.5rem',
            }}
          >
            <div>
              <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Besoin d'une étude ou d'un devis sur-mesure ?
              </span>
              <strong style={{ fontSize: '1.05rem', color: 'var(--color-blue-dark)', fontFamily: 'var(--font-heading)' }}>
                Réponse sous 24h par un chargé d'affaires dédié.
              </strong>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => {
                  onClose();
                  onSelectPoleForQuote(pole.id);
                }}
                className="btn btn-primary"
                style={{ fontSize: '0.95rem', padding: '0.75rem 1.5rem' }}
              >
                <FileText size={18} />
                <span>Demander un devis pour ce pôle</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
