import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

export default function ContactSection({ initialPoleId = 'all', sectionRef }) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    poleId: initialPoleId || 'all',
    requestType: 'devis',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialPoleId) {
      setFormData((prev) => ({ ...prev, poleId: initialPoleId }));
    }
  }, [initialPoleId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName || !formData.email || !formData.message) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires (Nom, Email, Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulate fast server response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" ref={sectionRef} className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">
            <Mail size={16} />
            <span>Contact & Demande de Devis</span>
          </span>
          <h2 className="section-title">
            Parlons de Votre Projet <br />
            <span className="text-avira-orange">Une Réponse Sous 24 Heures</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Sélectionnez le pôle concerné ou faites une demande globale.
            Nos chargés d'affaires spécialisés reviennent vers vous avec une étude chiffrée sans engagement.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Side: Direct Contact Details & Info */}
          <div
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-blue-dark)', marginBottom: '1rem' }}>
              Siège Social & Coordonnées
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Retrouvez nos équipes centrales au siège d'AVIRA GROUP ou contactez directement nos bureaux d'études.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-blue-light)',
                    color: 'var(--color-blue-avira)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} color="var(--color-blue-avira)" />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-blue-dark)', fontFamily: 'var(--font-heading)' }}>
                    Adresse du Siège
                  </strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Ouest Foire, Dakar, Sénégal
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-blue-light)',
                    color: 'var(--color-blue-avira)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={22} color="var(--color-blue-avira)" />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-blue-dark)', fontFamily: 'var(--font-heading)' }}>
                    Téléphones Directs
                  </strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <a href="tel:+221784354817" style={{ fontSize: '0.95rem', color: 'var(--color-orange-avira)', fontWeight: 600 }}>
                      +221 78 435 48 17
                    </a>
                    <a href="tel:+221784424479" style={{ fontSize: '0.95rem', color: 'var(--color-orange-avira)', fontWeight: 600 }}>
                      +221 78 442 44 79
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-blue-light)',
                    color: 'var(--color-blue-avira)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} color="var(--color-blue-avira)" />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-blue-dark)', fontFamily: 'var(--font-heading)' }}>
                    Courriel Général
                  </strong>
                  <a href="mailto:aviragroup78@gmail.com" style={{ fontSize: '0.95rem', color: 'var(--color-blue-avira)', fontWeight: 600 }}>
                    aviragroup78@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Badge */}
            <div
              style={{
                padding: '1.2rem',
                backgroundColor: 'var(--color-blue-light)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                border: '1px solid rgba(0, 56, 169, 0.15)',
              }}
            >
              <Clock size={28} color="var(--color-blue-avira)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-blue-avira)', fontFamily: 'var(--font-heading)' }}>
                  Engagement Réactivité
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  Devis chiffré transmis sous 24h ouvrées.
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form (Strict Brand Guidelines compliant - native mobile select, 44px touch height, orange send button) */}
          <div
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 1.5rem',
                  animation: 'fadeIn 0.3s ease-out forwards',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                  }}
                >
                  <CheckCircle2 size={42} />
                </div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-blue-dark)', marginBottom: '0.75rem' }}>
                  Demande Transmise avec Succès !
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '450px', margin: '0 auto 2rem auto' }}>
                  Merci <strong>{formData.fullName}</strong>. Votre demande a bien été enregistrée pour le pôle sélectionné.
                  Un chargé d'affaires d'AVIRA GROUP vous recontactera d'ici 24 heures.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      company: '',
                      email: '',
                      phone: '',
                      poleId: 'all',
                      requestType: 'devis',
                      message: '',
                    });
                  }}
                  className="btn btn-outline-blue"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-blue-dark)', marginBottom: '0.5rem' }}>
                  Formulaire de Demande
                </h3>

                {errorMessage && (
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      backgroundColor: '#FEE2E2',
                      color: '#991B1B',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Grid Inputs for Name & Company */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Jean Dupont"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Société SAS"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jean.dupont@entreprise.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                      Numéro de Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Native Sector / Pole Selector Dropdown (per brand guidelines: native select for mobile reliability) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                    Pôle d'activité concerné *
                  </label>
                  <select
                    name="poleId"
                    value={formData.poleId}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="all">Demande Globale / Plusieurs Pôles</option>
                    <option value="audiovisuel">Pôle 🎥 Audiovisuel</option>
                    <option value="btp">Pôle 🏗️ BTP & Immobilier</option>
                    <option value="impression">Pôle 🖨️ Impression Numérique</option>
                    <option value="vehicules">Pôle 🚗 Location & Vente de Véhicules</option>
                    <option value="logistique">Pôle 🚛 Transport & Logistique</option>
                  </select>
                </div>

                {/* Request Type */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                    Objet de la demande
                  </label>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {[
                      { id: 'devis', label: 'Demande de Devis' },
                      { id: 'partenariat', label: 'Partenariat' },
                      { id: 'information', label: 'Information Générale' },
                    ].map((type) => (
                      <label key={type.id} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                        <input
                          type="radio"
                          name="requestType"
                          value={type.id}
                          checked={formData.requestType === type.id}
                          onChange={handleChange}
                          style={{ accentColor: 'var(--color-orange-avira)' }}
                        />
                        <span>{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                    Description de votre besoin *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Précisez votre projet, les délais souhaités, les volumes ou la localisation..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button (Full Width Orange Button per Brand Guidelines) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    minHeight: '52px',
                    fontSize: '1.05rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.3fr !important;
          }
        }
      `}</style>
    </section>
  );
}
