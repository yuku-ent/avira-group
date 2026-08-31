import React, { useState } from 'react';
import { Video, Building2, Printer, Car, Truck, ArrowRight, Check, Sparkles } from 'lucide-react';

export const polesDataList = [
  {
    id: 'audiovisuel',
    title: 'Audiovisuel',
    category: 'medias',
    icon: Video,
    color: '#8B5CF6',
    subtitle: 'Production Vidéo 4K, Live Streaming, Événementiel & Studios Multi-Caméras',
    description: 'Ingénierie créative et technique complète : régie mobile 4K UHD, captation direct, films d’entreprise et studios entièrement équipés.',
    fullDescription: "Le Pôle Audiovisuel d'AVIRA GROUP orchestre des productions audiovisuelles d'envergure institutionnelle, commerciale et événementielle. Grâce à nos équipements cinématographiques 4K/6K, nos drones certifiés et nos régies nomades autonomes, nous transformons votre image de marque en récits visuels percutants et diffusions directes sans faille.",
    stats: [
      { label: 'Projets Vidéo & Live', value: '+250' },
      { label: 'Résolution Captation', value: '4K / 6K UHD' },
      { label: 'Déploiement Régie', value: '< 2 Heures' },
      { label: 'Disponibilité Équipes', value: '7j / 7' }
    ],
    services: [
      { name: 'Captation & Live Streaming 4K', desc: 'Diffusion en direct multi-caméras sur YouTube, LinkedIn et canaux privés avec régie mobile autonome ATEM 4K.' },
      { name: 'Production Vidéo Corporate & Publicité', desc: 'Films institutionnels, spots de marque, interviews et contenus promotionnels à forte valeur esthétique.' },
      { name: 'Studio Virtuel & Post-Production', desc: 'Montage sur DaVinci Resolve/Premiere, étalonnage couleur, motion design 2D/3D et mixage audio Dante.' },
      { name: 'Prise de Vue Aérienne (Drone DGAC)', desc: 'Reportages aériens HD/4K par télépilotes certifiés pour le suivi de chantiers, immobilier et événements.' },
      { name: 'Sonorisation & Éclairage Événementiel', desc: 'Déploiement complet de scènes, projecteurs LED robotisés et sonorisation numérique pour congrès.' },
      { name: 'Reportage Photographique Média', desc: 'Couverture photo d’actualités, trombinoscopes d’entreprise et banque d’images personnalisée.' }
    ],
    equipment: [
      'Caméras Cinéma Sony FX6, Sony FX3 & RED Komodo 6K',
      'Régie mobile 4K Blackmagic ATEM Constellation avec retour casques',
      'Drones DJI Inspire 3 & Mavic 3 Cine certifiés DGAC',
      'Parc microphones HF Sennheiser & Console numérique Dante',
      'Studio fond vert 150m² & Cabine insonorisée pour voix-off'
    ],
    methodology: [
      { step: '01', title: 'Briefing & Storyboarding', desc: 'Analyse du cahier des charges, cadrage artistique et écriture du scénario.' },
      { step: '02', title: 'Repérages & Tournage 4K', desc: 'Déploiement de l’équipe technique et captation haute définition sur site.' },
      { step: '03', title: 'Post-Production & Étalonnage', desc: 'Montage, habillage graphique, motion design et mixage son professionnel.' },
      { step: '04', title: 'Validation & Master Multi-Formats', desc: 'Livraison des masters optimisés pour TV, web et réseaux sociaux.' }
    ],
    highlights: [
      'Régie technique mobile UHD/4K tout terrain utilisable sans alimentation externe',
      'Équipe de réalisateurs, cadreurs, ingénieurs du son et monteurs seniors',
      'Gestion complète des autorisations de tournage et de vol drone',
      'Serveurs de streaming cryptés à très faible latence'
    ],
    faq: [
      {
        q: 'En combien de temps pouvez-vous déployer une régie de direct sur un événement ?',
        a: 'Nos régies mobiles compactes permettent une installation et des tests complets en moins de 2 heures sur n’importe quel site.'
      },
      {
        q: 'Proposez-vous la diffusion simultanée sur plusieurs plateformes (YouTube, LinkedIn, TV) ?',
        a: 'Oui, nous gérons le multi-restreaming en direct haute définition vers plusieurs destinations web et flux satellite.'
      },
      {
        q: 'Prenez-vous en charge les autorisations pour les prises de vue par drone ?',
        a: 'Absolument. Nos télépilotes sont certifiés et notre service juridique gère toutes les demandes préfectorales et aéronautiques.'
      },
      {
        q: 'Quels sont les délais de livraison pour un film d’entreprise ?',
        a: 'Une première version de montage est généralement livrée sous 5 à 7 jours ouvrés après la fin du tournage.'
      }
    ]
  },
  {
    id: 'btp',
    title: 'BTP & Immobilier',
    category: 'construction',
    icon: Building2,
    color: '#D97706',
    subtitle: 'Gros Œuvre, Génie Civil, Rénovation Énergétique & Promotion Immobilière',
    description: "Conception, construction et gestion de patrimoine : bâtiments tertiaires, industriels, logements et réhabilitations HQE.",
    fullDescription: "Du premier coup de pioche jusqu'à la remise des clés, le Pôle BTP & Immobilier d'AVIRA GROUP garantit la réussite de vos ouvrages d'envergure. Nous conjuguons ingénierie structurelle, équipements lourds de pointe et normes environnementales rigoureuses pour livrer des bâtiments durables.",
    stats: [
      { label: 'Surfaces Construites', value: '+120 000 m²' },
      { label: 'Garantie Ouvrage', value: 'Décennale' },
      { label: 'Normes Environnement', value: 'RE2020 / HQE' },
      { label: 'Taux Respect Délais', value: '99.2%' }
    ],
    services: [
      { name: 'Construction & Gros Œuvre', desc: 'Réalisation de bâtiments industriels, tertiaires, complexes commerciaux et logements collectifs.' },
      { name: 'Rénovation Énergétique & Réhabilitation', desc: 'Audits thermiques, isolation extérieure, réfection de toitures et modernisation des réseaux.' },
      { name: 'Promotion & Aménagement Foncier', desc: 'Développement de programmes immobiliers neufs, de l’acquisition foncière à la commercialisation.' },
      { name: 'Génie Civil & Fondations Spéciales', desc: 'Terrassement, pieux, voiles en béton armé et ouvrages d’art pour infrastructures complexes.' },
      { name: 'Modélisation BIM 3D & Ingénierie', desc: 'Conception numérique du bâtiment (BIM) pour une précision millimétrique et une gestion fluide.' },
      { name: 'Gérance Immobilière & Asset Management', desc: 'Gestion locative, maintenance prédictive et valorisation du patrimoine immobilier.' }
    ],
    equipment: [
      'Engins de chantier lourds Caterpillar (Pelles 20T, Télescopiques, Compacteurs)',
      'Pompes à béton haute pression et centrales à béton certifiées',
      'Scanners laser 3D Leica & logiciels Autodesk Revit / BIM 360',
      'Échafaudages multidirectionnels de sécurité et grues à tour Liebherr',
      'Systèmes de tri sélectif et valorisation des déchets de chantier'
    ],
    methodology: [
      { step: '01', title: 'Étude de Faisabilité & Métré BIM', desc: 'Analyse géotechnique, métrés numériques et plans architecturaux.' },
      { step: '02', title: 'Préparation & Sécurisation Chantier', desc: 'Installation de chantier, balisage, tri des déchets et sécurisation des accès.' },
      { step: '03', title: 'Gros Œuvre & Suivi d’Étape', desc: 'Élévation des structures, coulage béton armé et contrôles qualité réguliers.' },
      { step: '04', title: 'Réception & Garanties', desc: 'Livraison de l’ouvrage, levée des réserves et activation des garanties décennales.' }
    ],
    highlights: [
      'Conformité stricte avec les normes environnementales RE2020 et label HQE',
      'Garantie décennale et biennale sur l’ensemble des corps d’état',
      'Conducteurs de travaux dédiés assurant un suivi de chantier hebdomadaire',
      'Maîtrise complète de la chaîne de valeur : du terrassement à la finition'
    ],
    faq: [
      {
        q: 'Quelles garanties offrez-vous sur vos travaux de construction ?',
        a: 'Toutes nos constructions couvrent la garantie décennale, biennale, et la garantie de parfait achèvement avec assurance SMABTP.'
      },
      {
        q: 'Intervenez-vous sur des chantiers en milieu occupé (rénovation d’offices) ?',
        a: 'Oui, nos équipes adaptent les horaires et isolent phoniquement les zones de travaux pour maintenir votre activité sans nuisance.'
      },
      {
        q: 'Quel est le délai pour obtenir une étude technique ou un chiffrage ?',
        a: 'Nos ingénieurs métreurs délivrent une étude budgétaire complète sous 48h à 72h après réception de vos éléments.'
      },
      {
        q: 'Intégrez-vous la démarche BIM dans la gestion de projets ?',
        a: 'Absolument, nous travaillons sur des maquettes numériques BIM 3D partagées avec tous les intervenants du chantier.'
      }
    ]
  },
  {
    id: 'impression',
    title: 'Impression Numérique',
    category: 'medias',
    icon: Printer,
    color: '#06B6D4',
    subtitle: 'Grand Format, Signalétique d’Entreprise, Total Covering & Packaging',
    description: "Atelier numérique haute définition : traceurs écologiques Latex/UV, tables de découpe Zünd et équipes de pose sur site.",
    fullDescription: "Le Pôle Impression Numérique d'AVIRA GROUP donne vie à votre identité visuelle sur tous les supports. Équipé d'une chaîne graphique de dernière génération et d'encres éco-responsables, notre atelier produit bâches, enseignes, panneaux et marquages de véhicules avec une fidélité chromatique irréprochable et une durabilité éprouvée.",
    stats: [
      { label: 'Production Mensuelle', value: '+35 000 m²' },
      { label: 'Précision Découpe', value: '0.1 mm' },
      { label: 'Garantie UV Extérieur', value: 'Jusqu’à 10 Ans' },
      { label: 'Délai Express', value: '24 Heures' }
    ],
    services: [
      { name: 'Impression Grand Format & Bâches', desc: 'Bâches PVC/mesh micro-perforées, affiches géantes, calicots et bannières événementielles.' },
      { name: 'Signalétique & Enseignes Lumineuses', desc: 'Totems, caissons LED, lettres découpées en relief, plaques professionnelles et marquage au sol.' },
      { name: 'Total Covering & Flocage de Flottes', desc: 'Habillage adhésif thermo-formable haute résistance pour utilitaires, bus et berlines.' },
      { name: 'Découpe Numérique Sur-Mesure', desc: 'Usinage et découpe de précision sur Aluminium Dibond, Plexiglas, Bois et PVC expansé.' },
      { name: 'Print Petit Format & Packaging', desc: 'Brochures d’art, catalogues reliés, coffrets rigides et cartes de visite haut de gamme.' },
      { name: 'Pose & Installation sur Site', desc: 'Déploiement par nos équipes de poseurs qualifiés et cordistes certifiés pour travaux en hauteur.' }
    ],
    equipment: [
      'Traceurs grand format HP Latex 3200 (Impression écologique sans COV)',
      'Table d’impression à plat UV Mimaki JFX500 3.20m x 2.00m',
      'Table de découpe numérique haute vitesse Zünd G3',
      'Laminateur à chaud 1.60m et soudeuse automatique de bâches Miller',
      'Encres certifiées Greenguard Gold résistant aux intempéries et rayons UV'
    ],
    methodology: [
      { step: '01', title: 'Contrôle Fichiers & BAT', desc: 'Vérification colorimétrique, résolution et validation du Bon À Tirer (BAT).' },
      { step: '02', title: 'Impression HD Eco-Responsable', desc: 'Lancement sur presses numériques avec suivi du profil ICC.' },
      { step: '03', title: 'Façonnage & Plastification', desc: 'Découpe numérique, pose d’œillets, plastification anti-UV ou lamination.' },
      { step: '04', title: 'Conditionnement & Pose', desc: 'Livraison sécurisée ou pose sur site par nos techniciens qualifiés.' }
    ],
    highlights: [
      'Encres 100% écologiques certifiées Greenguard Gold (sans odeur ni solvants nocifs)',
      'Service de pose rapide en hauteur avec nacelles et techniciens habilités',
      'Système de contrôle qualité spectrométrique garantissant la fidélité des couleurs',
      'Gestion des urgences avec service de tirage express sous 24h'
    ],
    faq: [
      {
        q: 'Quelle est la durée de vie de vos impressions extérieures face au soleil ?',
        a: 'Grâce aux encres UV/Latex et à la lamination anti-UV, nos bannières et adhésifs conservent leur éclat entre 5 et 10 ans.'
      },
      {
        q: 'Prenez-vous en charge la pose d’enseignes lumineuses et bâches en hauteur ?',
        a: 'Oui, nous disposons de nacelles propres et de cordistes certifiés pour réaliser les installations en toute sécurité.'
      },
      {
        q: 'Proposez-vous un Bon À Tirer (BAT) avant de lancer l’impression finale ?',
        a: 'Absolument. Chaque commande fait l’objet d’un BAT numérique ou physique validé par vos soins avant production.'
      },
      {
        q: 'Est-il possible d’imprimer sur des matériaux rigides comme l’Aluminium ou le Bois ?',
        a: 'Oui, notre table à plat UV permet d’imprimer directement sur des plaques jusqu’à 50mm d’épaisseur.'
      }
    ]
  },
  {
    id: 'vehicules',
    title: 'Location & Vente de Véhicules',
    category: 'mobilite',
    icon: Car,
    color: '#EF4444',
    subtitle: 'Gestion de Flottes, Utilitaires, Berlines & Engins Spécialisés BTP',
    description: "Solutions souples en LLD, LCD et vente : flottes d'entreprise révisées, berlines de fonction et engins de chantier avec assistance 24/7.",
    fullDescription: "Garantissez la mobilité et la productivité de vos équipes grâce au Pôle Location & Vente de Véhicules d'AVIRA GROUP. Nous proposons un parc moderne de véhicules régulièrement révisés et personnalisables selon vos contraintes d'activité (logistique, chantier, transports d'affaires).",
    stats: [
      { label: 'Véhicules en Flotte', value: '+300' },
      { label: 'Assistance Routière', value: '24h / 7j' },
      { label: 'Âge Moyen Flotte', value: '< 24 Mois' },
      { label: 'Délai Remplacement', value: '< 2 Heures' }
    ],
    services: [
      { name: 'Location Longue Durée (LLD)', desc: 'Contrats de 12 à 60 mois sur-mesure pour entreprises avec entretien, assurance et assistance inclus.' },
      { name: 'Location Court & Moyen Terme (LCD)', desc: 'Mise à disposition rapide d’utilitaires, bennes et fourgons pour faire face aux pics d’activité.' },
      { name: 'Engins Spécialisés BTP & Manutention', desc: 'Location de nacelles, minipelles, télescopiques et compacteurs récents pour vos chantiers.' },
      { name: 'Berlines de Fonction & Transport VIP', desc: 'Flotte de berlines et SUV haut de gamme pour cadres dirigeants et déplacements institutionnels.' },
      { name: 'Vente, Reprise & Renouvellement', desc: 'Revente de véhicules récents issus de notre flotte avec garanties constructeur maintenues.' },
      { name: 'Télégestion & Suivi de Flotte GPS', desc: 'Plateforme télématique embarquée pour suivre les consommations, kilométrages et entretiens.' }
    ],
    equipment: [
      'Parc de berlines, SUV et citadines (Peugeot, Renault, Mercedes-Benz, Toyota)',
      'Fourgons grand volume, camions bennes 3.5T et Pick-up 4x4 tout-terrain',
      'Nacelles élévatrices Haulotte 16m à 28m et Minipelles Takeuchi 2.5T à 8T',
      'Système télématique Coyote Fleet embarqué sur l’ensemble des véhicules',
      'Atelier de maintenance mécanique propre avec banc de diagnostic électronique'
    ],
    methodology: [
      { step: '01', title: 'Analyse des Besoins Flotte', desc: 'Évaluation des kilométrages, types d’usage et contraintes budgétaires.' },
      { step: '02', title: 'Contrat Flexible & Préparation', desc: 'Choix de la formule (LLD/LCD), équipement sur-mesure et révision mécanique.' },
      { step: '03', title: 'Mise à Disposition / Livraison', desc: 'Remise des clés sur vos sites d’exploitation avec briefing utilisateur.' },
      { step: '04', title: 'Suivi, Entretien & Remplacement', desc: 'Gestion des entretiens périodiques et assistance 24/7 en cas d’aléa.' }
    ],
    highlights: [
      'Garantie d’un véhicule de remplacement livré sur votre site sous 2 heures en cas de panne',
      'Formules LLD flexibles réajustables en cours de contrat selon vos variations de kilométrage',
      'Maintenance préventive assurée par nos ateliers agréés sans coût supplémentaire',
      'Option de flocage et habillage adhésif aux couleurs de votre entreprise en interne'
    ],
    faq: [
      {
        q: 'Que comprend le tarif d’une Location Longue Durée (LLD) chez AVIRA ?',
        a: 'Nos loyers LLD intègrent la mise à disposition, l’assurance tous risques, l’entretien, les pneumatiques et l’assistance 24/7.'
      },
      {
        q: 'Que se passe-t-il si un utilitaire tombe en panne sur un chantier ?',
        a: 'Notre assistance intervient immédiatement et nous vous livrons un utilitaire équivalent sous 2 heures.'
      },
      {
        q: 'Peut-on personnaliser les véhicules de location aux couleurs de notre marque ?',
        a: 'Oui ! Notre Pôle Impression Numérique gère le covering adhésif complet de vos véhicules avant livraison.'
      },
      {
        q: 'Proposez-vous des engins de chantier avec ou sans chauffeur ?',
        a: 'Nous proposons les deux formules : location nue ou avec un opérateur qualifié certifié CACES.'
      }
    ]
  },
  {
    id: 'logistique',
    title: 'Transport & Logistique',
    category: 'mobilite',
    icon: Truck,
    color: '#10B981',
    subtitle: 'Fret Routier, Transport Frigorifique, Entreposage Sécurisé & Cross-Docking',
    description: "Maîtrise globale de la supply chain : transport de marchandises national/international, stockage sous-douane et suivi GPS 24/7.",
    fullDescription: "Le Pôle Transport & Logistique d'AVIRA GROUP sécurise l'acheminement de vos flux de marchandises. Grâce à une flotte de camions Euro 6 / décarbonés, des entrepôts sécurisés et des outils TMS/WMS connectés, nous assurons une traçabilité totale et le respect strict de vos délais de livraison.",
    stats: [
      { label: 'Flux Annuel Fret', value: '+85 000 T' },
      { label: 'Entrepôts Sécurisés', value: '10 000 m²' },
      { label: 'Suivi GPS Temp Réel', value: '100% Flotte' },
      { label: 'Conformité Température', value: '-20°C à +20°C' }
    ],
    services: [
      { name: 'Transport Routier de Fret (FTL / LTL)', desc: 'Acheminement de lots complets et partiels en France, Afrique de l’Ouest et à l’International.' },
      { name: 'Transport Frigorifique (Chaîne du Froid)', desc: 'Transport sous température contrôlée (-20°C à +20°C) pour produits pharmaceutiques et alimentaires.' },
      { name: 'Entreposage, Stockage & Sous-Douane', desc: 'Plateformes logistiques sécurisées sous gardiennage 24/7 avec gestion des formalités douanières.' },
      { name: 'Livraison Express Dernier Kilomètre', desc: 'Distribution urbaine réactive pour colis urgents avec flotte utilitaire électrique/hybride.' },
      { name: 'Logistique e-Commerce & Fulfillment', desc: 'Préparation de commandes, conditionnement, étiquetage et gestion des retours (reverse logistics).' },
      { name: 'Manutention Lourde & Levage Industriel', desc: 'Chargement/déchargement de conteneurs, machines industrielles et fardeaux volumineux.' }
    ],
    equipment: [
      'Tracteurs routiers Volvo FH & Scania normés Euro 6 et motorisations hybrides',
      'Semi-remorques frigorifiques Chereau avec enregistreurs de température certifiés ATP',
      'Plateformes logistiques de 10 000m² équipées de caméras thermiques et gardiennage 24/7',
      'Logiciels TMS / WMS SAP connectables en API aux ERP de nos clients',
      'Chariots élévateurs Fenwick électriques et transpalettes haute capacité'
    ],
    methodology: [
      { step: '01', title: 'Prise en Charge & Étiquetage', desc: 'Scan code-barres, pesée et enregistrement dans le logiciel TMS.' },
      { step: '02', title: 'Planification & Optimisation', desc: 'Calcul de la meilleure tournée et affectation des camions adaptés.' },
      { step: '03', title: 'Transport & Suivi GPS', desc: 'Acheminement sécurisé avec géolocalisation et suivi température en temps réel.' },
      { step: '04', title: 'Livraison & Émargement POD', desc: 'Remise au destinataire avec preuve de livraison électronique instantanée.' }
    ],
    highlights: [
      'Portail client permettant le suivi GPS en temps réel de la position et de la température du camion',
      'Entrepôts agréés douane et normes de sécurité incendie / vol maximales',
      'Flotte routière engagée dans la réduction des émissions de CO2 (Euro 6 & Électrique)',
      'Gestion des urgences avec départs de camions 24h/24 et 7j/7'
    ],
    faq: [
      {
        q: 'Comment puis-je suivre l’avancement de ma marchandise en transit ?',
        a: 'Dès le départ du camion, vous recevez un lien de géolocalisation GPS en temps réel ainsi que l’ETA recalculé.'
      },
      {
        q: 'Disposez-vous d’entrepôts pour du stockage sous-douane ou frigorifique ?',
        a: 'Oui, nos plateformes intègrent des zones sous température contrôlée (-20°C / +4°C) et des espaces sous-douane.'
      },
      {
        q: 'Quels sont vos engagements en matière de sécurité et d’assurance marchandise ?',
        a: 'Toutes les expéditions sont couvertes par notre assurance Ad Valorem et suivies en permanence par notre PC sécurité.'
      },
      {
        q: 'Pouvez-vous prendre en charge la logistique complète de nos commandes e-commerce ?',
        a: 'Oui, de la réception de vos stocks à l’emballage personnalisé et l’expédition dernier kilomètre.'
      }
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
