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
    seoKeywords: ['lame à fente', 'lame de refendage à fente', 'lame slotted', 'lame de découpe à fente', 'lame industrielle à fente', 'lame de refendeuse à fente', 'lame de refendage film', 'lame de refendage papier', 'lame de bobineuse'],
  },
  'injector-slitting': {
    name: 'Lames de Refendage Injector',
    description: 'Lames injector pour découpe de précision',
    seoKeywords: ['lame injector', 'lame de refendage injector', 'lame rasoir injector', 'lame de découpe injector', 'lame de précision injector', 'lame de refendeuse injector', 'lame injector industrielle', 'lame de refendage de précision'],
  },
  'single-edge': {
    name: 'Lames à Tranchant Simple',
    description: 'Lames à tranchant simple pour usage sécurisé',
    seoKeywords: ['lame à tranchant simple', 'lame simple tranchant', 'lame single edge', 'lame rasoir un côté', 'lame de grattoir', 'lame de nettoyage', 'lame à un tranchant', 'lame industrielle simple', 'lame de découpe sécurisée'],
  },
  'trapezoid-blades': {
    name: 'Lames Trapézoïdales',
    description: 'Lames de découpe trapézoïdales multi-usage',
    seoKeywords: ['lame trapézoïdale', 'lame trapèze', 'lame cutter trapézoïdale', 'lame de cutter universel', 'lame Stanley', 'lame de découpe trapèze', 'lame utilitaire trapézoïdale', 'lame de remplacement cutter', 'lame professionnelle trapèze'],
  },
  'hook-blades': {
    name: 'Lames Crochet',
    description: 'Lames crochet pour applications spéciales',
    seoKeywords: ['lame crochet', 'lame à crochet', 'lame hook', 'lame de découpe crochet', 'lame pour moquette', 'lame pour linoléum', 'lame pour revêtement sol', 'lame de découpe tapis', 'lame à bec', 'lame courbée'],
  },
  'craft-blades': {
    name: 'Lames Sécables | Cutter',
    description: 'Pointes de lame cutter de précision',
    seoKeywords: ['lame sécable', 'lame cutter', 'lame de cutter sécable', 'lame snap-off', 'lame 9mm', 'lame 18mm', 'lame de cutter professionnel', 'lame de précision', 'lame à casser', 'lame de découpe cutter'],
  },
  'hobby-blades': {
    name: 'Lames Hobby',
    description: 'Lames pour travaux hobby et artisanat',
    seoKeywords: ['lame hobby', 'lame artisanat', 'lame modélisme', 'lame X-Acto', 'lame de précision hobby', 'lame maquette', 'lame scrapbooking', 'lame de découpe fine', 'lame loisirs créatifs'],
  },
  'scalpel-blades': {
    name: 'Lames Scalpel – Chirurgicales',
    description: 'Lames de scalpel et chirurgicales pour découpe de précision médicale et industrielle',
    seoKeywords: ['lame scalpel', 'lame chirurgicale', 'lame bistouri', 'lame médicale', 'lame de précision chirurgicale', 'lame stérile', 'lame scalpel jetable', 'lame pour dissection', 'lame laboratoire'],
  },
  'chopped-fiber': {
    name: 'Lames Fibre Coupée',
    description: 'Lames spécialement conçues pour la découpe de fibres. Lames haute résistance pour la coupe de fibres de verre, carbone, aramide et fibres techniques dans les machines de coupe.',
    seoKeywords: [
      'lame fibre coupée', 'lame de découpe fibre', 'lame chopper fibre', 'couteau fibre coupée',
      'lame fibre de verre', 'lame fibre de carbone', 'aramide', 'kevlar',
      'lame Mark IV', 'lame Mark V', 'lame Hercule', 'lame Krupp',
      'Mark IV fibre', 'Mark V fibre', 'Hercule chopper', 'Krupp chopper',
      'carbure tungstène fibre', 'lame TiN fibre', 'acier inoxydable fibre',
      'nitrure titane chopper', 'lame carbure chopper',
      'lame fibre 74,5mm', 'lame fibre 117,5mm', 'lame fibre 95mm', 'lame fibre 48mm', 'lame fibre 64mm',
      'lame composite', 'lame fibre dentelée', 'lame fibre lisse',
      'composite automobile', 'fibre aérospatiale', 'éolienne', 'fibre textile',
      'prix lame fibre', 'fournisseur lame chopper', 'fabricant lame fibre'
    ],
  },
  'fiberglass': {
    name: 'Lames Fibre de Verre',
    description: 'Lames haute performance pour la découpe de fibre de verre',
    seoKeywords: ['lame fibre de verre', 'lame fiberglass', 'lame de découpe fibre de verre', 'couteau fibre de verre', 'lame composite verre', 'lame résine', 'lame GRP', 'lame polyester renforcé'],
  },
  'circular-blades': {
    name: 'Lames Circulaires',
    description: 'Lames circulaires pour découpe rotative',
    seoKeywords: ['lame circulaire', 'lame ronde', 'lame de découpe circulaire', 'lame rotative', 'lame de refendage circulaire', 'couteau circulaire', 'lame circulaire industrielle', 'lame de coupe rotative', 'disque de coupe', 'lame circulaire acier'],
  },
  'pentagon-blades': {
    name: 'Lames Pentagone',
    description: 'Lames de découpe pentagone à géométrie spéciale',
    seoKeywords: ['lame pentagone', 'lame pentagonale', 'lame 5 côtés', 'lame de découpe pentagone', 'lame géométrique', 'lame multi-tranchant', 'lame professionnelle pentagone'],
  },
  'lamella-blades': {
    name: 'Lames Lamelles / Feuilles',
    description: 'Lames lamelles pour coupes fines et précises',
    seoKeywords: ['lame lamelle', 'lame feuille', 'lame fine', 'lame de précision', 'lame de découpe fine', 'lame mince', 'lame industrielle fine', 'lame flexible'],
  },
  'microtome-blades': {
    name: 'Lames Histologie / Microtome',
    description: 'Lames microtome pour applications de laboratoire et histologie',
    seoKeywords: ['lame microtome', 'lame histologie', 'lame de laboratoire', 'lame coupe tissus', 'lame pathologie', 'lame de microscopie', 'lame cryostat', 'lame biopsie', 'lame analyse médicale'],
  },
  'microkeratome-blades': {
    name: 'Lames LASIK / Microkératome',
    description: 'Lames microkératome pour chirurgie oculaire et applications médicales',
    seoKeywords: ['lame microkératome', 'lame LASIK', 'lame chirurgie oculaire', 'lame ophtalmologie', 'lame cornéenne', 'lame réfractive', 'lame chirurgie des yeux', 'lame ophtalmique'],
  },
  'glass-scraper': {
    name: 'Grattoir à Verre',
    description: 'Grattoirs pour nettoyage d\'étiquettes et résidus sur surfaces vitrées',
    seoKeywords: ['grattoir verre', 'lame grattoir', 'grattoir vitres', 'lame de nettoyage', 'grattoir étiquettes', 'lame de racloir', 'grattoir professionnel', 'lame de grattoir verre', 'raclette vitres'],
  },
  'classic-blades': {
    name: 'Lames de Rasoir Classiques',
    description: 'Lames de rasoir classiques traditionnelles double tranchant',
    seoKeywords: ['lame rasoir classique', 'lame double tranchant', 'lame rasoir de sûreté', 'lame DE', 'lame rasoir traditionnel', 'lame de barbier', 'lame rasage classique', 'lame rasoir acier inoxydable'],
  },
  'drywall-blades': {
    name: 'Lames Plaque de Plâtre',
    description: 'Lames spéciales pour découpe de plaques de plâtre et panneaux de gypse',
    seoKeywords: ['lame plaque de plâtre', 'lame Placo', 'lame BA13', 'lame gypse', 'lame de découpe plâtre', 'couteau plaquiste', 'lame cloison sèche', 'lame de découpe Placo'],
  },
  'arrow-blades': {
    name: 'Lames Flèche',
    description: 'Lames flèche et rasoirs professionnels',
    seoKeywords: ['lame flèche', 'lame arrow', 'lame pointée', 'lame de précision flèche', 'lame triangulaire', 'lame de découpe flèche', 'rasoir flèche', 'lame industrielle flèche'],
  },

  // --- COUTEAUX DE MACHINE ---
  'advanced-processing': {
    name: 'Couteaux de Traitement Avancé',
    description: 'Couteaux pour applications industrielles de traitement avancé',
    seoKeywords: ['couteau de traitement', 'couteau industriel avancé', 'couteau de transformation', 'lame de traitement', 'couteau usinage', 'couteau process industriel', 'couteau fabrication'],
  },
  'thermoform-vacuum': {
    name: 'Lames Emballage Sous Vide',
    description: 'Lames professionnelles pour machines de thermoformage et emballage sous vide. Compatible avec machines Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac. Poinçons étoile, lames triangle, poinçons de trous d\'air et lames lama.',
    seoKeywords: ['lame thermoformage', 'lame emballage sous vide', 'lame Multivac', 'lame Tiromat', 'poinçon étoile', 'lame triangle', 'lame machine emballage', 'couteau thermoformage', 'lame agroalimentaire', 'lame conditionnement'],
  },
  'circular-slitting': {
    name: 'Couteaux de Refendage Circulaire',
    description: 'Couteaux pour machines de refendage circulaire',
    seoKeywords: ['couteau refendage circulaire', 'couteau circulaire', 'lame de refendeuse circulaire', 'couteau rotatif', 'couteau de bobineuse', 'couteau découpe rotative', 'couteau refendage industriel'],
  },
  'recycling-knives': {
    name: 'Couteaux de Recyclage',
    description: 'Couteaux pour opérations de recyclage',
    seoKeywords: ['couteau recyclage', 'couteau broyeur', 'lame de recyclage', 'couteau déchiqueteur', 'couteau granulateur', 'couteau broyeur plastique', 'lame broyeur', 'couteau recyclage plastique'],
  },
  'corrugated-slitting': {
    name: 'Couteaux de Refendage Carton Ondulé',
    description: 'Couteaux spéciaux pour refendage de carton ondulé',
    seoKeywords: ['couteau carton ondulé', 'couteau refendage carton', 'lame carton', 'couteau emballage carton', 'couteau onduleuse', 'lame de découpe carton', 'couteau découpe emballage'],
  },
  'rotary-cutting': {
    name: 'Couteaux de Découpe Rotative',
    description: 'Couteaux pour machines de découpe rotative',
    seoKeywords: ['couteau découpe rotative', 'couteau rotatif', 'lame rotative industrielle', 'couteau emporte-pièce rotatif', 'couteau de découpe en continu', 'lame circulaire rotative'],
  },
  'serrated-knives': {
    name: 'Couteaux Dentelés',
    description: 'Couteaux de découpe à dents de scie',
    seoKeywords: ['couteau dentelé', 'lame dentelée', 'couteau à dents', 'couteau scie', 'lame de scie', 'couteau dentelé industriel', 'couteau de découpe dentelé', 'lame crantelée'],
  },
  'circular-crusher': {
    name: 'Couteaux Broyeur Circulaire',
    description: 'Pour opérations de broyage et découpe circulaire',
    seoKeywords: ['couteau broyeur circulaire', 'lame broyeur', 'couteau concasseur', 'couteau de broyage', 'lame de broyeur plastique', 'couteau granulateur circulaire', 'lame de déchiquetage'],
  },
  'derinder-knives': {
    name: 'Couteaux Découennage',
    description: 'Couteaux professionnels de traitement de viande et découennage',
    seoKeywords: ['couteau découennage', 'couteau découenneuse', 'lame découenneuse', 'couteau boucherie', 'couteau traitement viande', 'couteau agroalimentaire', 'lame découennage porc', 'couteau abattoir'],
  },
  'logsaw-knives': {
    name: 'Couteaux Log-Saw',
    description: 'Couteaux log-saw pour papier toilette et essuie-tout',
    seoKeywords: ['couteau log-saw', 'couteau papier toilette', 'lame essuie-tout', 'couteau de découpe papier', 'couteau ouate de cellulose', 'lame log saw', 'couteau rouleau papier', 'couteau industrie papetière'],
  },
  'core-cutting': {
    name: 'Couteaux de Découpe Mandrin',
    description: 'Couteaux pour découpe de mandrins et bobines',
    seoKeywords: ['couteau découpe mandrin', 'couteau mandrin', 'lame coupe-mandrin', 'couteau bobine', 'couteau tube carton', 'lame découpe bobine', 'couteau mandrin carton'],
  },
  'case-sealer': {
    name: 'Fermeuse de Caisse - Couteaux à Ruban',
    description: 'Pour machines d\'emballage et fermeture de caisses',
    seoKeywords: ['couteau fermeuse de caisse', 'lame scotcheuse', 'couteau ruban adhésif', 'lame fermeuse carton', 'couteau emballage', 'lame de cerclage', 'couteau machine emballage'],
  },
  'zig-zag-knives': {
    name: 'Couteaux Zig Zag',
    description: 'Couteaux spéciaux pour motifs de découpe en zig zag',
    seoKeywords: ['couteau zig zag', 'lame zig zag', 'couteau crénelage', 'lame de découpe crantelée', 'couteau découpe fantaisie', 'cisaille cranteur', 'couteau festonné'],
  },
  'band-knives': {
    name: 'Couteaux à Ruban',
    description: 'Couteaux à ruban et de découpe',
    seoKeywords: ['couteau à ruban', 'lame à ruban', 'couteau de scie à ruban', 'lame refendeuse à ruban', 'couteau découpe mousse', 'lame de découpe textile', 'couteau cuir', 'lame band knife'],
  },
  'tray-mold': {
    name: 'Couteaux Moule Barquette (Bol)',
    description: 'Couteaux pour découpe de moules à barquettes et bols',
    seoKeywords: ['couteau moule barquette', 'couteau découpe barquette', 'lame barquette alimentaire', 'couteau emballage alimentaire', 'lame moule bol', 'couteau thermoformage barquette', 'couteau agroalimentaire'],
  },
  'sausage-peeling': {
    name: 'Couteaux Épluchage Saucisse',
    description: 'Couteaux d\'\u00e9pluchage pour lignes de production de saucisses',
    seoKeywords: ['couteau épluchage saucisse', 'lame éplucheuse', 'couteau charcuterie', 'lame pelage saucisse', 'couteau découennage saucisse', 'couteau ligne production viande', 'lame agroalimentaire viande'],
  },
  'cnc-knives': {
    name: 'Couteaux CNC',
    description: 'Couteaux de découpe pour machines CNC',
    seoKeywords: ['couteau CNC', 'lame CNC', 'couteau découpe numérique', 'lame machine CNC', 'couteau Zünd', 'couteau Kongsberg', 'couteau Esko', 'lame de table de découpe', 'couteau commande numérique'],
  },
  'plotter-knives': {
    name: 'Couteaux Plotter',
    description: 'Couteaux pour plotters de découpe numérique',
    seoKeywords: ['couteau plotter', 'lame plotter', 'couteau de découpe vinyle', 'lame Roland', 'lame Graphtec', 'couteau Silhouette', 'lame Cricut', 'couteau enseigne', 'lame de découpe adhésif'],
  },

  // --- SÉCURITÉ CUTTERS ---
  'auto-retract': {
    name: 'Cutters de Sécurité Auto-Rétractables',
    description: 'Couteaux de sécurité qui se verrouillent automatiquement après la coupe',
    seoKeywords: ['cutter auto-rétractable', 'couteau rétractable automatique', 'cutter sécurité rétractable', 'cutter anti-coupure', 'couteau lame rétractable', 'cutter logistique sécurité', 'cutter entrepôt sécurisé'],
  },
  'fixed-blade': {
    name: 'Couteaux à Lame Fixe',
    description: 'Cutters de sécurité à lame fixe',
    seoKeywords: ['couteau lame fixe', 'cutter lame fixe', 'couteau sécurité lame fixe', 'cutter professionnel', 'couteau industriel fixe', 'cutter robuste', 'couteau de travail'],
  },
  'safety-cutters': {
    name: 'Cutters de Sécurité',
    description: 'Outils de découpe certifiés sécurité',
    seoKeywords: ['cutter de sécurité', 'couteau de sécurité', 'cutter sécurisé', 'cutter anti-coupure', 'couteau professionnel sécurisé', 'cutter entrepôt', 'cutter logistique', 'outil de découpe sécurisé', 'cutter emballage sécurisé'],
  },
  'utility-knives': {
    name: 'Couteaux Utilitaires',
    description: 'Cutters utilitaires et ouvre-boîtes professionnels',
    seoKeywords: ['couteau utilitaire', 'cutter universel', 'couteau polyvalent', 'cutter professionnel', 'couteau de bricolage', 'cutter multi-usage', 'couteau ouvre-boîte', 'cutter tout usage'],
  },
  'deburring-hobby': {
    name: 'Couteaux Ébavurage & Hobby',
    description: 'Couteaux spéciaux pour travaux détaillés',
    seoKeywords: ['couteau ébavurage', 'lame ébavurage', 'couteau ébarbage', 'outil ébavurer', 'couteau finition', 'lame de précision hobby', 'couteau modélisme', 'couteau maquette'],
  },
  'olfa-rotary': {
    name: 'Cutters Rotatifs OLFA',
    description: 'Lames de découpe rotative marque OLFA',
    seoKeywords: ['cutter rotatif OLFA', 'lame rotative OLFA', 'cutter circulaire OLFA', 'cutter tissu OLFA', 'cutter patchwork', 'lame circulaire couture', 'cutter rotatif 45mm', 'cutter rotatif 28mm'],
  },
  'olfa-craft': {
    name: 'Couteaux Artisanat OLFA',
    description: 'Série artisanat professionnelle OLFA',
    seoKeywords: ['couteau artisanat OLFA', 'cutter OLFA', 'cutter précision OLFA', 'lame OLFA', 'cutter japonais', 'cutter graphisme', 'cutter maquette OLFA', 'cutter scrapbooking'],
  },
  'olfa-safety': {
    name: 'Couteaux de Sécurité OLFA',
    description: 'Produits certifiés sécurité OLFA',
    seoKeywords: ['couteau sécurité OLFA', 'cutter sécurité OLFA', 'cutter OLFA sécurisé', 'cutter anti-coupure OLFA', 'couteau OLFA entrepôt', 'cutter OLFA logistique', 'cutter OLFA professionnel'],
  },
  'blade-disposal': {
    name: 'Conteneurs d\'Élimination de Lames',
    description: 'Conteneurs de stockage pour collecte sécurisée des déchets d\'outils de découpe',
    seoKeywords: ['conteneur lames usagées', 'collecteur lames', 'boîte élimination lames', 'conteneur sécurité lames', 'poubelle lames', 'collecte lames usagées', 'récupérateur lames cutter'],
  },
};
