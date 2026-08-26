# AVIRA GROUP — Brand Guideline

## Role

Agis comme un Directeur Artistique Digital senior. Ce document est la
source de vérité visuelle du site AVIRA GROUP. Toute page générée via
`GEMINI.md` doit respecter ces règles — en cas de conflit avec un choix ad
hoc, ce fichier gagne.

## Principe Directeur

**Mobile-first, sans exception.** La majorité des visiteurs arriveront sur
mobile — chaque règle ci-dessous s'applique d'abord à un écran de poche,
le desktop est une extension, pas la référence.

## 1. Identité de Marque

- **Nom** : AVIRA GROUP
- **Logo** : lettre "A" géométrique formée de deux triangles qui se
  chevauchent (bleu à gauche, orange à droite), avec une découpe blanche
  en forme de croix/plus au centre du chevauchement — symbolise la
  rencontre/l'intersection entre les différents métiers du groupe.
- **Secteurs** : Audiovisuel, BTP/Immobilier, Impression Numérique,
  Location & Vente de Véhicules, Transport & Logistique.

## 2. Couleurs — extraites directement du logo (ne pas approximer)

| Rôle | Couleur | Hex | Usage |
|---|---|---|---|
| Primaire | Bleu AVIRA | `#0038A9` | Navbar, fonds de section sombres, titre "AVIRA" |
| Accent | Orange AVIRA | `#FE6102` | CTA principal, mot-clé "GROUP", liens actifs, hover |
| Fond clair | Blanc cassé | `#FAFAFA` | Fond par défaut des sections claires |
| Texte principal | Encre | `#1A1A1A` | Sur fond clair |
| Texte sur bleu | Blanc | `#FFFFFF` | Sur fond primaire |

**Règle stricte** : le bleu et l'orange ne doivent jamais être utilisés à
parts égales sur un même écran — le bleu domine (structure, fonds,
navbar), l'orange ponctue (CTA, accents, hover). C'est le rapport visible
sur le logo lui-même (le bleu occupe visuellement plus d'espace que
l'orange) et il doit se retrouver dans toute l'interface.

Si le Preset B (Multi-Pôle Dynamique) est choisi dans `GEMINI.md` : les
couleurs par pôle (violet, orange brique, cyan, rouge, vert) ne
s'appliquent QUE dans les sections dédiées à chaque pôle. Le bleu et
l'orange AVIRA restent la seule identité visible sur navbar, hero et footer.

## 3. Typographie

- **Titres** : "Plus Jakarta Sans" bold, tracking serré (-0.02em). Le mot
  "AVIRA" peut être en bleu, "GROUP" en orange, comme sur le logo, dans le
  logo texte du header et du footer.
- **Corps de texte** : "Inter" ou "Plus Jakarta Sans" regular, line-height
  1.6 minimum — priorité à la lisibilité sur mobile.
- **Chiffres/données** (si stats du groupe affichées) : "IBM Plex Mono".
- **Taille minimum mobile** : 16px pour le corps de texte (en dessous, le
  texte oblige à zoomer sur mobile — inacceptable), 14px pour les
  mentions légères uniquement.

## 4. Ton des Textes

- Sobre et confiant, jamais survendu. Un groupe qui couvre 5 métiers très
  différents (BTP, audiovisuel, véhicules, logistique, impression) doit
  sembler organisé, pas dispersé.
- On ne mélange jamais deux métiers dans une même phrase marketing — la
  clarté sectorielle prime sur l'effet de style.
- CTA explicites : "Nous contacter", "Demander un devis", "Prendre
  rendez-vous" — jamais un simple "En savoir plus" seul sans contexte sur
  un bouton d'action.

## 5. Logo — Règles d'Usage

- Espace de respiration minimum autour du logo : au moins la hauteur du
  "A" du logo, de chaque côté.
- Ne jamais recolorer le logo autrement qu'en bleu/orange officiels
  ci-dessus, sauf version monochrome blanche sur fond bleu foncé (footer,
  sections sombres) ou monochrome bleu sur fond clair.
- Le logo doit rester lisible en petit (favicon, navbar mobile) : prévoir
  une version simplifiée si besoin (juste le "A" géométrique sans le texte
  "AVIRA GROUP" en dessous) pour les tailles réduites.

## 6. Composants Clés (rappel mobile-first)

### Navbar mobile
Logo compact (le "A" seul si l'espace est serré) à gauche, hamburger à
droite, bouton "Nous contacter" en orange visible même menu fermé.

### Cartes de pôle (section "Nos pôles d'activité")
1 colonne pleine largeur sur mobile, image/icône en haut, titre en bleu,
description courte, lien "En savoir plus" en orange avec flèche.

### Formulaire de contact
Champs empilés verticalement, hauteur tactile généreuse (44px minimum),
sélecteur de pôle en liste déroulante native sur mobile (plus fiable
qu'un composant custom sur petit écran), bouton d'envoi en orange pleine
largeur.

### Footer
Fond bleu AVIRA foncé, logo en version blanche, colonnes qui s'empilent
verticalement sur mobile plutôt que de se compresser illisiblement en
grille.