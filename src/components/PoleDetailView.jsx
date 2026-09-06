import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
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
  HelpCircle,
  Check
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

  // Detailed editorial descriptions per pole for richer text content
  const getDetailedEditorialText = (poleId) => {
    switch (poleId) {
      case 'audiovisuel':
        return {
          intro: "Notre Pôle Audiovisuel conçoit et réalise des productions vidéo à forte valeur ajoutée visuelle et narrative. Nous combinons des équipements de captation 4K/6K de niveau cinématographique, des régies mobiles nomades et des studios spécialisés pour répondre à l'ensemble des besoins de communication des entreprises, institutions et médias.",
          details: "Nos équipes de réalisation et techniciens expérimentés maîtrisent l'intégralité de la chaîne de production : du cadrage stratégique au storyboarding, de la prise de vue multi-caméras au streaming en direct sécurisé, jusqu'à la post-production avancée (étalonnage couleur DaVinci Resolve, motion design 2D/3D et mixage audio professionnel Dante).",
          commitments: [
            "Équipements cinématographiques 4K/6K et régies autonomes",
            "Télépilotes de drone certifiés DGAC pour prises de vue aériennes",
            "Multi-restreaming en direct haute définition vers plateformes et web"
          ]
        };
      case 'btp':
        return {
          intro: "Le Pôle BTP & Immobilier rassemble l'ensemble des compétences d'ingénierie structurelle, de gros œuvre, de génie civil et de gérance immobilière indispensables au succès des projets de construction et de réhabilitation d'envergure.",
          details: "Qu'il s'agisse d'édifier des complexes tertiaires, des bâtiments industriels ou d'effectuer la rénovation énergétique globale de parcs immobiliers, nos conducteurs de travaux et ingénieurs métreurs veillent au respect strict des normes environnementales (RE2020, label HQE) et au contrôle rigoureux des délais. Grâce à la modélisation BIM 3D, nous assurons une gestion fluide et transparente à chaque étape du chantier.",
          commitments: [
            "Garantie décennale et biennale sur l'ensemble des corps d'état",
            "Maîtrise d'œuvre intégrée de la phase terrassement à la livraison finale",
            "Conception et suivi de projet sur maquette numérique BIM 3D"
          ]
        };
      case 'impression':
        return {
          intro: "Spécialisé dans la fabrication sur-mesure de supports de communication visuelle grand format et de signalétique d'entreprise, le Pôle Impression Numérique dispose d'un atelier hautement équipé en traceurs UV et encres écologiques Latex.",
          details: "De la vérification technique de vos fichiers graphiques jusqu'au façonnage de précision (découpe numérique Zünd, lamination anti-UV, pose d'œillets) et à l'installation sur site par nos équipes de poseurs qualifiés et cordistes certifiés, nous vous garantissons une restitution colorimétrique irréprochable et une résistance optimale aux intempéries.",
          commitments: [
            "Encres écologiques 100% certifiées Greenguard Gold sans solvants",
            "Impression haute précision sur supports souples et matériaux rigides",
            "Service de tirage et de pose express sous 24h pour les urgences"
          ]
        };
      case 'vehicules':
        return {
          intro: "Pour garantir la mobilité et l'efficacité opérationnelle des entreprises et professionnels, notre Pôle Location & Vente de Véhicules met à disposition un parc récent, entretenu et modulable selon vos exigences d'activité.",
          details: "Nous proposons des formules souples de Location Longue Durée (LLD) ou Court Terme (LCD) adaptées à tous les profils : véhicules utilitaires légers, berlines de fonction, camions bennes et engins de chantier spécialisés (nacelles, mini-pelles). L'ensemble de notre flotte est équipé de systèmes de géolocalisation et télégestion et bénéficie d'une assistance 24/7 avec véhicule de remplacement livré en moins de 2 heures.",
          commitments: [
            "Contrats de location flexibles LLD/LCD avec entretien et assurance inclus",
            "Véhicule de remplacement équivalent livré sous 2 heures en cas d'aléa",
            "Options de personnalisation et flottaison adhésive en interne"
          ]
        };
      case 'logistique':
        return {
          intro: "Le Pôle Transport & Logistique orchestre l'acheminement et la gestion globale des flux de marchandises à l'échelle nationale et internationale avec une traçabilité totale.",
          details: "S'appuyant sur des plateformes logistiques sécurisées et une flotte routière normée Euro 6 et décarbonée, nous assurons le transport de fret routier en lots complets ou partiels, le transport frigorifique sous température contrôlée (-20°C à +20°C), l'entreposage sous-douane et la préparation de commandes e-commerce. Notre portail connecté TMS/WMS garantit un suivi GPS en temps réel.",
          commitments: [
            "Suivi GPS et sonde de température en temps réel accessible via portail client",
            "Plateformes de stockage 10 000m² sécurisées sous gardiennage 24/7",
            "Flotte de véhicules engagée dans la réduction des émissions de CO2"
          ]
        };
      case 'express':
        return {
          intro: "Conçu pour répondre aux impératifs d'immédiateté et d'urgence absolue, le Pôle Livraison Express déploie des coursiers dédiés et des véhicules ultra-réactifs sur simple demande 24h/24 et 7j/7.",
          details: "Nous prenons en charge l'enlèvement en moins de 30 minutes de vos plis confidentiels, colis prioritaires, pièces détachées stratégiques et livraisons urbaines dernier kilomètre. Sans rupture de charge ni transit intermédiaire en centre de tri, votre expédition est acheminée en liaison directe avec preuve de livraison électronique immédiate.",
          commitments: [
            "Intervention et enlèvement garanti en moins de 30 minutes",
            "Liaison directe point à point sans intermédiaire pour une rapidité maximale",
            "Géolocalisation GPS en direct et confirmation de réception immédiate"
          ]
        };
      default:
        return {
          intro: pole.fullDescription,
          details: pole.description,
          commitments: pole.highlights
        };
    }
  };

  const getCtaContent = (poleId) => {
    switch (poleId) {
      case 'audiovisuel':
        return {
          title: 'Un projet de captation, vidéo corporate ou direct 4K ?',
          subtitle: 'Nos techniciens et réalisateurs conçoivent votre production audiovisuelle sur-mesure.',
          buttonText: 'Obtenir un devis Audiovisuel',
        };
      case 'btp':
        return {
          title: 'Une étude de chantier, rénovation ou construction BTP ?',
          subtitle: 'Nos ingénieurs et conducteurs de travaux étudient vos plans et chiffrages.',
          buttonText: 'Demander une étude BTP',
        };
      case 'impression':
        return {
          title: 'Un besoin en signalétique, bâches ou habillage de flotte ?',
          subtitle: 'Obtenez une cotation personnalisée par notre atelier d\'impression haute définition.',
          buttonText: 'Demander un devis Impression',
        };
      case 'vehicules':
        return {
          title: 'Besoin de véhicules utilitaires, berlines ou engins de chantier ?',
          subtitle: 'Bénéficiez de contrats de location flexibles LLD / LCD avec assistance 24/7.',
          buttonText: 'Consulter l\'offre Flotte & LLD',
        };
      case 'logistique':
        return {
          title: 'Un acheminement de marchandises ou prestation logistique ?',
          subtitle: 'Sécurisez votre chaîne d\'approvisionnement avec notre flotte et suivi GPS.',
          buttonText: 'Calculer un devis Transport',
        };
      case 'express':
        return {
          title: 'Un pli confidentiel, colis urgent ou livraison H+1 ?',
          subtitle: 'Nos coursiers dédiés interviennent en moins de 30 minutes avec suivi GPS.',
          buttonText: 'Commander une livraison express',
        };
      default:
        return {
          title: 'Besoin d\'une étude ou d\'un devis personnalisé ?',
          subtitle: 'Un chargé d\'affaires dédié vous répond sous 24h ouvrées.',
          buttonText: 'Demander mon devis',
        };
    }
  };

  const editorial = getDetailedEditorialText(pole.id);
  const cta = getCtaContent(pole.id);

  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
      {/* Navigation Sub-Bar */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--color-border)',
          padding: '0.85rem 0',
          position: 'sticky',
          top: '60px',
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
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
            <span>Retour à la liste des services</span>
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

      <div className="container" style={{ marginTop: '2.5rem' }}>
        {/* Editorial Hero Banner */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '3rem',
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {pole.image && (
            <img
              src={pole.image}
              alt={pole.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, rgba(0, 24, 75, 0.94) 0%, rgba(0, 31, 96, 0.88) 60%, ${pole.color}CC 100%)`,
            }}
          />

          <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '900px', color: '#FFFFFF' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--color-orange-avira)',
                marginBottom: '0.75rem',
              }}
            >
              Domaine d'Excellence • AVIRA GROUP
            </span>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
              Pôle {pole.title}
            </h1>

            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500, lineHeight: 1.5, marginBottom: '2rem', maxWidth: '800px' }}>
              {pole.subtitle}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onSelectPoleForQuote(pole.id)}
                className="btn btn-primary"
                style={{ fontSize: '0.98rem', padding: '0.8rem 1.6rem', minHeight: '46px' }}
              >
                <FileText size={18} />
                <span>{cta.buttonText}</span>
              </button>

              <a
                href="tel:+221784354817"
                className="btn btn-outline-light"
                style={{ fontSize: '0.98rem', padding: '0.8rem 1.6rem', minHeight: '46px' }}
              >
                <PhoneCall size={18} />
                <span>Contacter le pôle</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 1: Presentation Edito & Explications Détaillées (Rich Text, Clean Layout, No Pill Clutter) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '3rem',
          }}
        >
          <div style={{ maxWidth: '900px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-orange-avira)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
              Présentation & Vision Générale
            </span>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-blue-dark)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.25 }}>
              L'Expertise du Pôle {pole.title} en Détail
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 400 }}>
              {editorial.intro}
            </p>

            <p style={{ fontSize: '1.02rem', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              {editorial.details}
            </p>

            {/* Key Editorial Commitments */}
            <div style={{ backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', padding: '1.75rem', borderLeft: '4px solid var(--color-blue-avira)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-blue-dark)', fontWeight: 700, marginBottom: '1rem' }}>
                Garanties et Principes Directeurs
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {editorial.commitments.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check size={18} color="var(--color-orange-avira)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.98rem', color: 'var(--color-text-main)', lineHeight: 1.5, fontWeight: 500 }}>
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Les Prestations du Pôle (Clean Editorial Article Layout - Zero Bubbles, Zero Box Cards) */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-orange-avira)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
              Nos Prestations & Domaines d'Intervention
            </span>
            <h2 style={{ fontSize: '1.85rem', color: 'var(--color-blue-dark)', fontWeight: 800 }}>
              Services et Expertises Spécialisées
            </h2>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem 2.5rem' }}>
              {pole.services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    borderLeft: '3px solid var(--color-orange-avira)',
                    paddingLeft: '1.25rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      color: 'var(--color-blue-dark)',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.35,
                    }}
                  >
                    {service.name}
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3: Parc Matériel & Moyens Techniques (Clean Typography List) */}
        {pole.equipment && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '3rem',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-blue-dark)', fontWeight: 800, marginBottom: '0.5rem' }}>
              Moyens Techniques & Équipements
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
              Des ressources matérielles de pointe régulièrement révisées et renouvelées.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {pole.equipment.map((eq, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--color-bg-light)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '3px solid var(--color-blue-avira)',
                  }}
                >
                  <span style={{ fontSize: '0.94rem', color: 'var(--color-text-main)', lineHeight: 1.5, fontWeight: 500 }}>
                    {eq}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 4: Méthodologie en 4 Étapes */}
        {pole.methodology && (
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-orange-avira)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                Organisation & Déroulement
              </span>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--color-blue-dark)', fontWeight: 800 }}>
                Le Processus en 4 Étapes
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
              {pole.methodology.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.75rem',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-orange-avira)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                    {m.step}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-blue-dark)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 5: FAQ Clean Accordion */}
        {pole.faq && (
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--color-blue-dark)', fontWeight: 800, marginBottom: '1.5rem' }}>
              Questions Fréquentes sur le Pôle {pole.title}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: '100%',
                        padding: '1.15rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <strong style={{ fontSize: '1.02rem', color: 'var(--color-blue-dark)', fontFamily: 'var(--font-heading)' }}>
                        {item.q}
                      </strong>
                      <ChevronDown
                        size={18}
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
                          fontSize: '0.95rem',
                          lineHeight: 1.7,
                          borderTop: '1px solid rgba(0,0,0,0.05)',
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

        {/* SECTION 6: Simple & Clean CTA */}
        <div
          style={{
            background: 'linear-gradient(135deg, #00287A 0%, #0038A9 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }}>
              {cta.title}
            </h2>

            <p style={{ fontSize: '1.02rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, marginBottom: '2rem' }}>
              {cta.subtitle}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onSelectPoleForQuote(pole.id)}
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.8rem', minHeight: '48px' }}
              >
                <FileText size={18} />
                <span>{cta.buttonText}</span>
              </button>

              <button
                onClick={onBack}
                className="btn btn-outline-light"
                style={{ fontSize: '1rem', padding: '0.85rem 1.8rem', minHeight: '48px' }}
              >
                <span>Retour aux services</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
