/**
 * Categories - French Translations
 * 
 * Traductions françaises pour les catégories principales et sous-catégories.
 * Les valeurs ID sont en anglais, conformément à la structure normalisée.
 */

import type { CategoryTranslations, SubcategoryTranslations } from './tr';

// =============================================================================
// CATÉGORIES PRINCIPALES
// =============================================================================

export const categoriesFr: CategoryTranslations = {
  'industrial-blades': {
    name: 'Rasoirs Industriels',
    description: 'Lames de rasoir industrielles professionnelles et outils de découpe pour usage industriel',
  },
  'machine-knives': {
    name: 'Couteaux de Machine',
    description: 'Couteaux et systèmes de découpe fabriqués sur mesure pour machines industrielles',
  },
  'safety-knives': {
    name: 'Sécurité & Cutters Manuels',
    description: 'Couteaux manuels professionnels et outils de découpe conformes aux normes de sécurité',
  },
};

// =============================================================================
// SOUS-CATÉGORIES
// =============================================================================

export const subcategoriesFr: SubcategoryTranslations = {
  // --- RASOIRS INDUSTRIELS ---
  '3-hole-slitting': {
    name: 'Lames de Refendage 3 Trous',
    description: 'Lames de refendage professionnelles à 3 trous pour la découpe de films, feuilles, papier et emballages. Fabrication en acier à haute teneur en carbone avec options de revêtement pour une performance de coupe durable.',
    seoKeywords: ['lame 3 trous', 'lame de refendage trois trous', 'lame de refendage industrielle', 'lame de refendeuse', 'lame de refendage de film', 'lame rasoir refendage', 'lame de refendage papier', 'lame emballage', 'lame rebobineuse', 'lame revêtue', 'rasoir refendage'],
  },
  'slotted-slitting': {
    name: 'Lames de Refendage à Fente',
    description: 'Lames à fente haute performance',
  },
  'injector-slitting': {
    name: 'Lames de Refendage Injector',
    description: 'Lames injector pour découpe de précision',
  },
  'single-edge': {
    name: 'Lames à Tranchant Simple',
    description: 'Lames à tranchant simple pour usage sécurisé',
  },
  'trapezoid-blades': {
    name: 'Lames Trapézoïdales',
    description: 'Lames de découpe trapézoïdales multi-usage',
  },
  'hook-blades': {
    name: 'Lames Crochet',
    description: 'Lames crochet pour applications spéciales',
  },
  'craft-blades': {
    name: 'Lames Sécables | Cutter',
    description: 'Pointes de lame cutter de précision',
  },
  'hobby-blades': {
    name: 'Lames Hobby',
    description: 'Lames pour travaux hobby et artisanat',
  },
  'scalpel-blades': {
    name: 'Lames Scalpel – Chirurgicales',
    description: 'Lames de scalpel et chirurgicales pour découpe de précision médicale et industrielle',
  },
  'chopped-fiber': {
    name: 'Lames Fibre Coupée',
    description: 'Lames spécialement conçues pour la découpe de fibres',
  },
  'fiberglass': {
    name: 'Lames Fibre de Verre',
    description: 'Lames haute performance pour la découpe de fibre de verre',
  },
  'circular-blades': {
    name: 'Lames Circulaires',
    description: 'Lames circulaires pour découpe rotative',
  },
  'pentagon-blades': {
    name: 'Lames Pentagone',
    description: 'Lames de découpe pentagone à géométrie spéciale',
  },
  'lamella-blades': {
    name: 'Lames Lamelles / Feuilles',
    description: 'Lames lamelles pour coupes fines et précises',
  },
  'microtome-blades': {
    name: 'Lames Histologie / Microtome',
    description: 'Lames microtome pour applications de laboratoire et histologie',
  },
  'microkeratome-blades': {
    name: 'Lames LASIK / Microkératome',
    description: 'Lames microkératome pour chirurgie oculaire et applications médicales',
  },
  'glass-scraper': {
    name: 'Grattoir à Verre',
    description: 'Grattoirs pour nettoyage d\'étiquettes et résidus sur surfaces vitrées',
  },
  'classic-blades': {
    name: 'Lames de Rasoir Classiques',
    description: 'Lames de rasoir classiques traditionnelles double tranchant',
  },
  'drywall-blades': {
    name: 'Lames Plaque de Plâtre',
    description: 'Lames spéciales pour découpe de plaques de plâtre et panneaux de gypse',
  },
  'arrow-blades': {
    name: 'Lames Flèche',
    description: 'Lames flèche et rasoirs professionnels',
  },

  // --- COUTEAUX DE MACHINE ---
  'advanced-processing': {
    name: 'Couteaux de Traitement Avancé',
    description: 'Couteaux pour applications industrielles de traitement avancé',
  },
  'thermoform-vacuum': {
    name: 'Lames Emballage Sous Vide',
    description: 'Lames professionnelles pour machines de thermoformage et emballage sous vide. Compatible avec machines Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Poinçons étoile, lames triangle, poinçons de trous d\'air et lames lama.',
  },
  'circular-slitting': {
    name: 'Couteaux de Refendage Circulaire',
    description: 'Couteaux pour machines de refendage circulaire',
  },
  'recycling-knives': {
    name: 'Couteaux de Recyclage',
    description: 'Couteaux pour opérations de recyclage',
  },
  'corrugated-slitting': {
    name: 'Couteaux de Refendage Carton Ondulé',
    description: 'Couteaux spéciaux pour refendage de carton ondulé',
  },
  'rotary-cutting': {
    name: 'Couteaux de Découpe Rotative',
    description: 'Couteaux pour machines de découpe rotative',
  },
  'serrated-knives': {
    name: 'Couteaux Dentelés',
    description: 'Couteaux de découpe à dents de scie',
  },
  'circular-crusher': {
    name: 'Couteaux Broyeur Circulaire',
    description: 'Pour opérations de broyage et découpe circulaire',
  },
  'derinder-knives': {
    name: 'Couteaux Découennage',
    description: 'Couteaux professionnels de traitement de viande et découennage',
  },
  'logsaw-knives': {
    name: 'Couteaux Log-Saw',
    description: 'Couteaux log-saw pour papier toilette et essuie-tout',
  },
  'core-cutting': {
    name: 'Couteaux de Découpe Mandrin',
    description: 'Couteaux pour découpe de mandrins et bobines',
  },
  'case-sealer': {
    name: 'Fermeuse de Caisse - Couteaux à Ruban',
    description: 'Pour machines d\'emballage et fermeture de caisses',
  },
  'zig-zag-knives': {
    name: 'Couteaux Zig Zag',
    description: 'Couteaux spéciaux pour motifs de découpe en zig zag',
  },
  'band-knives': {
    name: 'Couteaux à Ruban',
    description: 'Couteaux à ruban et de découpe',
  },
  'tray-mold': {
    name: 'Couteaux Moule Barquette (Bol)',
    description: 'Couteaux pour découpe de moules à barquettes et bols',
  },
  'sausage-peeling': {
    name: 'Couteaux Épluchage Saucisse',
    description: 'Couteaux d\'épluchage pour lignes de production de saucisses',
  },
  'cnc-knives': {
    name: 'Couteaux CNC',
    description: 'Couteaux de découpe pour machines CNC',
  },
  'plotter-knives': {
    name: 'Couteaux Plotter',
    description: 'Couteaux pour plotters de découpe numérique',
  },

  // --- SÉCURITÉ CUTTERS ---
  'auto-retract': {
    name: 'Cutters de Sécurité Auto-Rétractables',
    description: 'Couteaux de sécurité qui se verrouillent automatiquement après la coupe',
  },
  'fixed-blade': {
    name: 'Couteaux à Lame Fixe',
    description: 'Cutters de sécurité à lame fixe',
  },
  'safety-cutters': {
    name: 'Cutters de Sécurité',
    description: 'Outils de découpe certifiés sécurité',
  },
  'utility-knives': {
    name: 'Couteaux Utilitaires',
    description: 'Cutters utilitaires et ouvre-boîtes professionnels',
  },
  'deburring-hobby': {
    name: 'Couteaux Ébavurage & Hobby',
    description: 'Couteaux spéciaux pour travaux détaillés',
  },
  'olfa-rotary': {
    name: 'Cutters Rotatifs OLFA',
    description: 'Lames de découpe rotative marque OLFA',
  },
  'olfa-craft': {
    name: 'Couteaux Artisanat OLFA',
    description: 'Série artisanat professionnelle OLFA',
  },
  'olfa-safety': {
    name: 'Couteaux de Sécurité OLFA',
    description: 'Produits certifiés sécurité OLFA',
  },
  'blade-disposal': {
    name: 'Conteneurs d\'Élimination de Lames',
    description: 'Conteneurs de stockage pour collecte sécurisée des déchets d\'outils de découpe',
  },
};
