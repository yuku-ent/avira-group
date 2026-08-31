import React, { useState } from 'react';
import { Video, Building2, Printer, Car, Truck, ArrowRight, Check, Sparkles } from 'lucide-react';

export const polesDataList = [
  {
    id: 'audiovisuel',
    title: 'Audiovisuel',
    category: 'medias',
    icon: Video,
    color: '#8B5CF6',
    subtitle: 'Production Vidéo, Événementiel & Studio Multi-Caméras',
    description: 'Conception, réalisation et diffusion de contenus audiovisuels haute définition pour entreprises, événements et médias.',
    fullDescription: "Le Pôle Audiovisuel d'AVIRA GROUP déploie une ingénierie créative et technique de pointe : régie mobile 4K, captation en direct, studios équipés et production vidéo institutionnelle sur mesure.",
    services: [
      { name: 'Captation & Live Streaming', desc: 'Diffusion en direct multi-caméras 4K pour conférences et événements.' },
      { name: 'Production Vidéo Corporate', desc: 'Films d’entreprise, spots publicitaires et vidéos de marque.' },
      { name: 'Studio & Post-Production', desc: 'Montage, étalonnage, motion design et mixage son professionnel.' },
      { name: 'Couverture Événementielle', desc: 'Prise de vue aérienne (drone) et reportages terrain.' }
    ],
    highlights: [
      'Régie technique mobile UHD/4K tout terrain',
      'Équipe technique qualifiée disponible 7j/7',
      'Livraison rapide et formats optimisés multi-plateformes'
    ]
  },
  {
    id: 'btp',
    title: 'BTP & Immobilier',
    category: 'construction',
    icon: Building2,
    color: '#D97706',
    subtitle: 'Gros Œuvre, Rénovation & Promotion Immobilière',
    description: "Construction de bâtiments industriels et commerciaux, gérance immobilière et programmes de rénovation énergétique d'envergure.",
    fullDescription: "De l'étude de faisabilité architecturale jusqu'à la remise des clés, notre Pôle BTP & Immobilier allie rigueur de construction, normes environnementales et gestion du patrimoine immobilier.",
    services: [
      { name: 'Construction & Gros Œuvre', desc: 'Bâtiments tertiaires, industriels et logements résidentiels.' },
      { name: 'Rénovation Énergétique', desc: 'Audit, isolation thermique et réhabilitation globale.' },
      { name: 'Promotion & Aménagement', desc: 'Développement de programmes et gestion de projets immobiliers.' },
      { name: 'Gestion de Patrimoine', desc: 'Gérance locative et maintenance des infrastructures.' }
    ],
    highlights: [
      'Certifications HQE et conformité normes RE2020',
      'Supervision globale de chantier et respect des délais',
      'Interlocuteur unique pour maîtres d’ouvrage'
    ]
  },
  {
    id: 'impression',
    title: 'Impression Numérique',
    category: 'medias',
    icon: Printer,
    color: '#06B6D4',
    subtitle: 'Grand Format, Signalétique & Habillage Publicitaire',
    description: "Impression numérique haute définition sur tous supports, création de signalétique d'entreprise et habillage de véhicules.",
    fullDescription: "Équipé de traceurs et presses numériques de dernière génération, ce pôle fabrique vos supports de communication visuelle avec une restitution chromatique parfaite et une durabilité éprouvée.",
    services: [
      { name: 'Impression Grand Format', desc: 'Bâches, bannières, affiches et panneaux publicitaires.' },
      { name: 'Signalétique d’Entreprise', desc: 'Enseignes lumineuses, totems, plaques et marquage au sol.' },
      { name: 'Total Covering & Véhicules', desc: 'Flocage et habillage adhésif haute résistance de flottes.' },
      { name: 'Print & Packaging Sur-Mesure', desc: 'Brochures d’art, coffrets et catalogues haut de gamme.' }
    ],
    highlights: [
      'Encres écologiques et résistant aux UV / intempéries',
      'Atelier de façonnage et pose sur site incluse',
      'Contrôle qualité rigoureux avant livraison'
    ]
  },
  {
    id: 'vehicules',
    title: 'Location & Vente de Véhicules',
    category: 'mobilite',
    icon: Car,
    color: '#EF4444',
    subtitle: 'Gestion de Flottes, Utilitaires & Engins de Chantier',
    description: "Solutions souples de location courte et longue durée de véhicules utilitaires, berlines et engins spécialisés pour professionnels.",
    fullDescription: "AVIRA GROUP garantit la mobilité des entreprises grâce à une flotte moderne de véhicules régulièrement révisés et adaptés aux besoins logistiques, de chantier ou de transport de personnel.",
    services: [
      { name: 'Location Longue Durée (LLD)', desc: 'Flottes d’entreprises sur-mesure avec entretien inclus.' },
      { name: 'Location Court & Moyen Terme', desc: 'Utilitaires, camions bennes et véhicules de remplacement.' },
      { name: 'Engins Spécialisés BTP', desc: 'Nacelles, mini-pelles et engins de manutention.' },
      { name: 'Vente & Reprise de Véhicules', desc: 'Véhicules récents avec garantie constructeur.' }
    ],
    highlights: [
      'Assistance 24/7 et véhicule de remplacement immédiat',
      'Maintenance préventive intégrée',
      'Contrats flexibles modulables selon vos pics d’activité'
    ]
  },
  {
    id: 'logistique',
    title: 'Transport & Logistique',
    category: 'mobilite',
    icon: Truck,
    color: '#10B981',
    subtitle: 'Fret Routier, Stockage Sécurisé & Livraison Express',
    description: "Acheminement national et international de marchandises, entreposage sous sous-douane et logistique du dernier kilomètre.",
    fullDescription: "Fort d'un réseau structuré et de plateformes logistiques sécurisées, le Pôle Transport & Logistique d'AVIRA GROUP sécurise votre chaîne d'approvisionnement avec une traçabilité GPS en temps réel.",
    services: [
      { name: 'Transport Routier de Fret', desc: 'Lots complets et partiels en France et à l’international.' },
      { name: 'Entreposage & Stockage', desc: 'Plateformes logistiques sécurisées et sous température contrôlée.' },
      { name: 'Livraison Express', desc: 'Acheminement urgent 24h/48h avec suivi GPS en direct.' },
      { name: 'Logistique e-Commerce', desc: 'Préparation de commandes, cross-docking et gestion des retours.' }
    ],
    highlights: [
      'Suivi des expéditions en temps réel via portail client',
      'Respect strict de la chaîne du froid et des délais',
      'Flotte de transport décarbonée (Norme Euro 6 / Électrique)'
    ]
  }
];

export default function PolesSection({ onSelectPoleForQuote, onSelectPoleDetail }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const polesData = [
    {
      id: 'audiovisuel',
      title: 'Audiovisuel',
      category: 'medias',
      icon: Video,
      color: '#8B5CF6',
      subtitle: 'Production Vidéo, Événementiel & Studio Multi-Caméras',
      description: 'Conception, réalisation et diffusion de contenus audiovisuels haute définition pour entreprises, événements et médias.',
      fullDescription: "Le Pôle Audiovisuel d'AVIRA GROUP déploie une ingénierie créative et technique de pointe : régie mobile 4K, captation en direct, studios équipés et production vidéo institutionnelle sur mesure.",
      services: [
        { name: 'Captation & Live Streaming', desc: 'Diffusion en direct multi-caméras 4K pour conférences et événements.' },
        { name: 'Production Vidéo Corporate', desc: 'Films d’entreprise, spots publicitaires et vidéos de marque.' },
        { name: 'Studio & Post-Production', desc: 'Montage, étalonnage, motion design et mixage son professionnel.' },
        { name: 'Couverture Événementielle', desc: 'Prise de vue aérienne (drone) et reportages terrain.' }
      ],
      highlights: [
        'Régie technique mobile UHD/4K tout terrain',
        'Équipe technique qualifiée disponible 7j/7',
        'Livraison rapide et formats optimisés multi-plateformes'
      ]
    },
    {
      id: 'btp',
      title: 'BTP & Immobilier',
      category: 'construction',
      icon: Building2,
      color: '#D97706',
      subtitle: 'Gros Œuvre, Rénovation & Promotion Immobilière',
      description: "Construction de bâtiments industriels et commerciaux, gérance immobilière et programmes de rénovation énergétique d'envergure.",
      fullDescription: "De l'étude de faisabilité architecturale jusqu'à la remise des clés, notre Pôle BTP & Immobilier allie rigueur de construction, normes environnementales et gestion du patrimoine immobilier.",
      services: [
        { name: 'Construction & Gros Œuvre', desc: 'Bâtiments tertiaires, industriels et logements résidentiels.' },
        { name: 'Rénovation Énergétique', desc: 'Audit, isolation thermique et réhabilitation globale.' },
        { name: 'Promotion & Aménagement', desc: 'Développement de programmes et gestion de projets immobiliers.' },
        { name: 'Gestion de Patrimoine', desc: 'Gérance locative et maintenance des infrastructures.' }
      ],
      highlights: [
        'Certifications HQE et conformité normes RE2020',
        'Supervision globale de chantier et respect des délais',
        'Interlocuteur unique pour maîtres d’ouvrage'
      ]
    },
    {
      id: 'impression',
      title: 'Impression Numérique',
      category: 'medias',
      icon: Printer,
      color: '#06B6D4',
      subtitle: 'Grand Format, Signalétique & Habillage Publicitaire',
      description: "Impression numérique haute définition sur tous supports, création de signalétique d'entreprise et habillage de véhicules.",
      fullDescription: "Équipé de traceurs et presses numériques de dernière génération, ce pôle fabrique vos supports de communication visuelle avec une restitution chromatique parfaite et une durabilité éprouvée.",
      services: [
        { name: 'Impression Grand Format', desc: 'Bâches, bannières, affiches et panneaux publicitaires.' },
        { name: 'Signalétique d’Entreprise', desc: 'Enseignes lumineuses, totems, plaques et marquage au sol.' },
        { name: 'Total Covering & Véhicules', desc: 'Flocage et habillage adhésif haute résistance de flottes.' },
        { name: 'Print & Packaging Sur-Mesure', desc: 'Brochures d’art, coffrets et catalogues haut de gamme.' }
      ],
      highlights: [
        'Encres écologiques et résistant aux UV / intempéries',
        'Atelier de façonnage et pose sur site incluse',
        'Contrôle qualité rigoureux avant livraison'
      ]
    },
    {
      id: 'vehicules',
      title: 'Location & Vente de Véhicules',
      category: 'mobilite',
      icon: Car,
      color: '#EF4444',
      subtitle: 'Gestion de Flottes, Utilitaires & Engins de Chantier',
      description: "Solutions souples de location courte et longue durée de véhicules utilitaires, berlines et engins spécialisés pour professionnels.",
      fullDescription: "AVIRA GROUP garantit la mobilité des entreprises grâce à une flotte moderne de véhicules régulièrement révisés et adaptés aux besoins logistiques, de chantier ou de transport de personnel.",
      services: [
        { name: 'Location Longue Durée (LLD)', desc: 'Flottes d’entreprises sur-mesure avec entretien inclus.' },
        { name: 'Location Court & Moyen Terme', desc: 'Utilitaires, camions bennes et véhicules de remplacement.' },
        { name: 'Engins Spécialisés BTP', desc: 'Nacelles, mini-pelles et engins de manutention.' },
        { name: 'Vente & Reprise de Véhicules', desc: 'Véhicules récents avec garantie constructeur.' }
      ],
      highlights: [
        'Assistance 24/7 et véhicule de remplacement immédiat',
        'Maintenance préventive intégrée',
        'Contrats flexibles modulables selon vos pics d’activité'
      ]
    },
    {
      id: 'logistique',
      title: 'Transport & Logistique',
      category: 'mobilite',
      icon: Truck,
      color: '#10B981',
      subtitle: 'Fret Routier, Stockage Sécurisé & Livraison Express',
      description: "Acheminement national et international de marchandises, entreposage sous sous-douane et logistique du dernier kilomètre.",
      fullDescription: "Fort d'un réseau structuré et de plateformes logistiques sécurisées, le Pôle Transport & Logistique d'AVIRA GROUP sécurise votre chaîne d'approvisionnement avec une traçabilité GPS en temps réel.",
      services: [
        { name: 'Transport Routier de Fret', desc: 'Lots complets et partiels en France et à l’international.' },
        { name: 'Entreposage & Stockage', desc: 'Plateformes logistiques sécurisées et sous température contrôlée.' },
        { name: 'Livraison Express', desc: 'Acheminement urgent 24h/48h avec suivi GPS en direct.' },
        { name: 'Logistique e-Commerce', desc: 'Préparation de commandes, cross-docking et gestion des retours.' }
      ],
      highlights: [
        'Suivi des expéditions en temps réel via portail client',
        'Respect strict de la chaîne du froid et des délais',
        'Flotte de transport décarbonée (Norme Euro 6 / Électrique)'
      ]
    }
  ];

  const filteredPoles = activeFilter === 'all'
    ? polesData
    : polesData.filter(p => p.category === activeFilter);

  return (
    <section id="poles" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">
            <Sparkles size={16} />
            <span>Nos Domaines d'Expertise</span>
          </span>
          <h2 className="section-title">
            5 Pôles d'Activité Spécialisés, <br />
            <span className="text-avira-orange">Une Seule Exigence de Qualité</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Chaque pôle dispose de ses propres équipes d'experts et d'équipements de pointe,
            tout en bénéficiant de la puissance d'organisation et de la synergie du groupe AVIRA.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '2rem',
              padding: '0.35rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--color-border)',
            }}
          >
            {[
              { id: 'all', label: 'Tous les 5 Pôles' },
              { id: 'medias', label: 'Médias & Communication' },
              { id: 'construction', label: 'BTP & Immobilier' },
              { id: 'mobilite', label: 'Mobilité & Logistique' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: activeFilter === tab.id ? 'var(--color-blue-avira)' : 'transparent',
                  color: activeFilter === tab.id ? '#FFFFFF' : 'var(--color-text-muted)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Pole Cards Balanced Grid Layout */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {filteredPoles.map((pole) => {
            const Icon = pole.icon;
            return (
              <div
                key={pole.id}
                className="glass-card"
                style={{
                  flex: '1 1 320px',
                  maxWidth: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  borderTop: `4px solid ${pole.color}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <div>
                  {/* Icon & Category */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-blue-light)',
                        color: 'var(--color-blue-avira)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={28} color="var(--color-blue-avira)" />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        backgroundColor: 'rgba(0, 56, 169, 0.06)',
                        color: 'var(--color-blue-avira)',
                        borderRadius: 'var(--radius-sm)',
                        textTransform: 'uppercase',
                      }}
                    >
                      Pôle #{pole.id}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      color: 'var(--color-blue-avira)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {pole.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--color-orange-avira)',
                      marginBottom: '1rem',
                    }}
                  >
                    {pole.subtitle}
                  </p>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {pole.description}
                  </p>

                  {/* Prestations Preview List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {pole.services.slice(0, 3).map((s, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.88rem',
                          color: 'var(--color-text-main)',
                        }}
                      >
                        <Check size={16} color="var(--color-orange-avira)" style={{ flexShrink: 0 }} />
                        <span>{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link to Detail Page */}
                <div
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    onClick={() => onSelectPoleDetail && onSelectPoleDetail(pole)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-orange-avira)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: 0,
                    }}
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
