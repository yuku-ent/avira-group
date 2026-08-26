import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, ArrowUp, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#030E28',
        color: '#FFFFFF',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Top Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Col 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Logo variant="white" size="large" />
            <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.65, maxWidth: '320px' }}>
              AVIRA GROUP est un acteur économique majeur fédérant 5 pôles d'excellence indépendants :
              Audiovisuel, BTP & Immobilier, Impression Numérique, Location de Véhicules et Logistique.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social Link"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-orange-avira)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Nos 5 Pôles */}
          <div>
            <h4
              style={{
                fontSize: '1.1rem',
                fontFamily: 'var(--font-heading)',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                position: 'relative',
              }}
            >
              Nos 5 Pôles Métiers
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: '🎥 Pôle Audiovisuel', href: '#poles' },
                { name: '🏗️ Pôle BTP & Immobilier', href: '#poles' },
                { name: '🖨️ Pôle Impression Numérique', href: '#poles' },
                { name: '🚗 Location & Vente Véhicules', href: '#poles' },
                { name: '🚛 Transport & Logistique', href: '#poles' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-avira)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Institutionnelle */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Groupe & Informations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'À Propos du Groupe', href: '#about' },
                { name: 'Chiffres Clés & Impact', href: '#stats' },
                { name: 'Engagements Qualité & RSE', href: '#commitments' },
                { name: 'Espace Presse & Carrières', href: '#contact' },
                { name: 'Demander un devis', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-avira)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Quick Contact */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Lettre d'Information
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '1rem' }}>
              Restez informé des actualités et opportunités de nos différents pôles.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <input
                type="email"
                placeholder="Votre adresse email"
                style={{
                  flex: 1,
                  padding: '0.65rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                aria-label="S'inscrire"
                style={{
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  backgroundColor: 'var(--color-orange-avira)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.55)',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>AVIRA GROUP</strong>. Tous droits réservés.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit' }}>Mentions Légales</a>
            <a href="#" style={{ color: 'inherit' }}>Politique de Confidentialité</a>
            <a href="#" style={{ color: 'inherit' }}>Gestion des Cookies</a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            style={{
              padding: '0.5rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
            }}
          >
            <span>Haut de page</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
