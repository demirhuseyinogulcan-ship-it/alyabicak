/**
 * Product Translations - French
 * 
 * Toutes les traductions de produits dans ce fichier.
 * Si la traduction n'existe pas, la valeur originale (turque) est utilisée.
 * 
 * CONFIGURATION:
 * Minimum 'name' requis pour chaque produit.
 * 'description', 'features', 'applications' optionnels.
 * 
 * AJOUTER UNE NOUVELLE TRADUCTION DE PRODUIT:
 * 1. Trouvez l'ID du produit (scraped-products.json ou products.ts)
 * 2. Ajoutez la traduction à ce fichier
 * 3. Apparaît automatiquement sur toutes les pages
 */

import type { ProductTranslation } from './tr';

export const productsFr: Record<string, ProductTranslation> = {
  // =============================================================================
  // RASOIRS INDUSTRIELS - REFENDAGE 3 TROUS
  // =============================================================================
  '43': {
    name: 'Lame à Angle Droit 43 x 22 – Sécable B202S-K',
    description: 'Lame industrielle de refendage à angle droit avec conception sécable au centre. Lame de découpe professionnelle de qualité Sheffield.',
    features: ['Longue durée de vie', 'Qualité Sheffield', 'Usage professionnel', 'Conception sécable'],
    applications: ['Découpe industrielle', 'Refendage de films', 'Découpe de papier'],
  },
  '60': {
    name: 'Lame à Angle Droit 60 x 22 – Sécable B205S-K',
    description: 'Lame de refendage grand format à angle droit avec conception sécable au centre. Lame de découpe professionnelle de qualité Sheffield.',
    features: ['Longue durée de vie', 'Qualité Sheffield', 'Usage professionnel', 'Conception sécable'],
    applications: ['Découpe industrielle', 'Refendage de film large', 'Découpe de carton'],
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - REFENDAGE À FENTE
  // =============================================================================
  'slotted-karbon-celik': {
    name: 'Lame de Refendage à Fente - Acier Carbone',
    description: 'Lame industrielle de refendage à fente en acier à haute teneur en carbone. Contrairement aux lames de rasoir ordinaires, fabriquée à partir d\'alliage d\'acier spécial à haute teneur en carbone (0,85-1,00% C). Le traitement thermique dans des fours à atmosphère contrôlée (austénitisation + trempe + revenu) obtient une microstructure martensitique homogène. La conception à fente permet un montage rapide et sécurisé sur machine par la fente centrale. Angle de tranchant optimisé de 22° avec meulage de précision.',
    features: [
      'Teneur élevée en carbone (0,85-1,00%)',
      'Microstructure martensitique',
      'Angle de tranchant optimal de 22°',
      'Processus de traitement thermique de précision',
      'Commodité de montage à fente',
      'Durée de vie 3-5x supérieure aux lames de rasoir'
    ],
    applications: ['Découpe textile', 'Refendage de films et feuilles', 'Découpe de papier', 'Refendage de plastique', 'Découpe d\'emballage'],
  },
  'slotted-karbon-titanyum': {
    name: 'Lame de Refendage à Fente - Acier Carbone + Revêtement Titane',
    description: 'Revêtement TiN (nitrure de titane) sur corps en acier à haute teneur en carbone. Le revêtement de nitrure de titane appliqué par PVD (dépôt physique en phase vapeur) atteint une dureté de surface de 2300 HV. Ce revêtement doré réduit le coefficient de friction de 40%, minimisant la génération de chaleur pendant la coupe. La conception à fente centrale permet un montage machine en un seul mouvement. La résistance à l\'usure augmente de 2-3x par rapport à la version non revêtue.',
    features: [
      'Revêtement PVD TiN (nitrure de titane)',
      '2300 HV dureté de surface',
      '40% coefficient de friction inférieur',
      'Apparence dorée',
      'Résistance à l\'usure augmentée de 2-3x',
      'Idéal pour matériaux sensibles à la chaleur'
    ],
    applications: ['Découpe de ruban adhésif', 'Refendage de lamination', 'Découpe de film sensible à la chaleur', 'Refendage de feuille de précision', 'Découpe d\'étiquettes'],
  },
  'slotted-karbon-seramik': {
    name: 'Lame de Refendage à Fente - Acier Carbone + Revêtement Céramique',
    description: 'Revêtement céramique avancé (à base de titane) sur substrat en acier à haute teneur en carbone. Le revêtement céramique multicouche appliqué par technologie hybride CVD/PVD fournit une dureté de surface allant jusqu\'à 3200 HV. Ce système de revêtement offre des performances supérieures dans la découpe de matériaux extrêmement abrasifs. Utilisation pratique avec système de montage à fente. L\'inertie chimique assure une longue durée de vie même dans des environnements corrosifs.',
    features: [
      'Technologie de revêtement céramique avancée',
      '3200 HV dureté de surface ultra-élevée',
      'Idéal pour matériaux abrasifs',
      'Inertie chimique',
      'Résistance à la corrosion',
      'Durée de vie prolongée de 5-7x'
    ],
    applications: ['Découpe de papier abrasif', 'Refendage de composite en fibre de verre', 'Découpe de fibre de carbone', 'Refendage de papier de verre', 'Découpe de textile technique'],
  },
  'slotted-paslanmaz': {
    name: 'Lame de Refendage à Fente - Acier Inoxydable',
    description: 'Lame de refendage à fente fabriquée en acier inoxydable martensitique AISI 420. La teneur en chrome de 12-14% fournit une résistance à la corrosion tandis que la structure martensitique atteint une dureté HRC 54-56. Préférée comme alternative à l\'acier au carbone dans les environnements humides, l\'industrie alimentaire et les applications nécessitant de l\'hygiène. La conception à fente offre un montage machine pratique. Approuvée FDA pour surfaces en contact alimentaire.',
    features: [
      'Acier inoxydable (AISI 420)',
      'Teneur en chrome 12-14%',
      'Résistance à la corrosion',
      'Usage hygiénique',
      'Approuvé FDA',
      'Adapté aux environnements humides'
    ],
    applications: ['Découpe d\'emballage alimentaire', 'Applications en environnement humide', 'Lignes de production hygiéniques', 'Emballage pharmaceutique', 'Découpe d\'emballage médical'],
  },
  'slotted-paslanmaz-titanyum': {
    name: 'Lame de Refendage à Fente - Acier Inoxydable + Revêtement Titane',
    description: 'Revêtement TiN (nitrure de titane) sur acier inoxydable martensitique AISI 420. Solution hybride combinant la résistance à la corrosion de l\'acier inoxydable avec la résistance à l\'usure du revêtement titane. Le revêtement TiN appliqué par PVD augmente la dureté du tranchant à 2300 HV. Le système à fente permet des changements de lame rapides. Fournit une double protection dans les environnements à la fois humides et abrasifs.',
    features: [
      'Double protection inoxydable + titane',
      'Résistance corrosion + usure',
      '2300 HV dureté de surface',
      'Hygiénique et durable',
      'Inoxydable doré',
      'Idéal pour environnements exigeants'
    ],
    applications: ['Découpe de lamination alimentaire', 'Refendage d\'emballage blister pharmaceutique', 'Découpe de ruban adhésif humide', 'Production d\'emballage stérile', 'Refendage de feuille médicale'],
  },
  'slotted-paslanmaz-xcd': {
    name: 'Lame de Refendage à Fente - Acier Inoxydable + Revêtement XCD',
    description: 'Technologie de revêtement XCD (Xtreme Carbon Diamond) sur acier inoxydable AISI 420. Ce revêtement de la famille DLC (Diamond-Like Carbon) offre des valeurs de dureté jusqu\'à 5000 HV grâce à une structure de carbone diamant. Le coefficient de friction tombe en dessous de 0,1, offrant d\'excellentes propriétés de glissement. Usage professionnel avec système de montage à fente. Empêche même les matériaux les plus adhésifs de coller au tranchant de coupe.',
    features: [
      'Revêtement carbone diamant XCD',
      '5000 HV dureté ultra-élevée',
      '<0,1 coefficient de friction',
      'Excellentes propriétés anti-adhésives',
      'Apparence diamant noir',
      'Pour applications les plus exigeantes'
    ],
    applications: ['Découpe de ruban ultra-adhésif', 'Refendage de matériau revêtu silicone', 'Découpe d\'étiquette adhésive', 'Refendage de tissu imprégné résine', 'Rubans adhésifs médicaux'],
  },
  'slotted-endurium-seramik': {
    name: 'Lame de Refendage à Fente - Acier Endurium + Revêtement Céramique',
    description: 'Revêtement céramique multicouche sur substrat Endurium HSS (acier rapide). Solution premium combinant la résistance à haute température du HSS (8-10% tungstène, 4-5% molybdène, 4% chrome) avec la dureté extrême de la céramique. Pas de perte de dureté jusqu\'à 600°C, résistant au choc thermique dans les coupes interrompues et applications haute vitesse. Conception à fente compatible avec machines professionnelles. Conçue pour applications industrielles les plus exigeantes.',
    features: [
      'Acier rapide Endurium HSS',
      'HRC 64-66 dureté substrat',
      '3500 HV revêtement céramique',
      '600°C résistance température',
      'Résistance choc thermique',
      'Lame à fente longue durée maximale'
    ],
    applications: ['Opérations de refendage haute vitesse', 'Applications de coupe interrompue', 'Refendage de feuille métallique', 'Découpe de matériau composite', 'Lignes de production 24/7'],
  },
  'slotted-yekpare-tungsten': {
    name: 'Lame de Refendage à Fente - Carbure de Tungstène Massif',
    description: 'Lame de refendage à fente fabriquée en composition carbure de tungstène massif (WC-Co). Ce matériau fritté contenant 94% de carbure de tungstène et 6% de liant cobalt atteint une dureté HRA 92-94 (équivalent HRC 75+). La structure monolithique produite par métallurgie des poudres fournit une intégrité sans soudure ni brasage. La fente centrale permet un montage machine sécurisé. Utilisée pour découper des matériaux ultra-abrasifs que les lames en acier ne peuvent pas couper.',
    features: [
      'Construction carbure de tungstène massif',
      'HRA 92-94 dureté ultra-élevée',
      'Intégrité monolithique',
      'Production métallurgie poudres',
      'Durée de vie 20-50x supérieure à l\'acier',
      'Pour matériaux extrêmement abrasifs'
    ],
    applications: ['Découpe de papier revêtu céramique', 'Refendage de feuille métallique', 'Découpe de composite abrasif', 'Refendage de film nanotube carbone', 'Découpe de matériau électrode batterie'],
  },
  'slotted-yekpare-seramik': {
    name: 'Lame de Refendage à Fente - Céramique Massif (Zircone)',
    description: 'Lame de refendage à fente fabriquée en céramique zircone (ZrO2) massive. La structure de zircone polycristalline tétragonale (Y-TZP) fournit une résistance extraordinaire aux fissures tout en maintenant une dureté de 1200 HV. Cette lame totalement sans métal est conçue pour applications où la conductivité électrique n\'est pas souhaitée ou la contamination métallique est inacceptable. Conception à fente compatible avec machines standard. Préférée dans applications médicales et alimentaires nécessitant une biocompatibilité.',
    features: [
      'Céramique zircone massive',
      'Pas de contamination métallique',
      'Isolant électrique',
      'Matériau biocompatible',
      'Résistance chimique totale',
      'Lame la plus propre'
    ],
    applications: ['Découpe d\'emballage alimentaire', 'Refendage d\'implant médical', 'Découpe de film électronique', 'Applications salles blanches', 'Production pharmaceutique sans métal'],
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - REFENDAGE INJECTOR
  // =============================================================================
  'injector-carbon-steel': {
    name: 'Lame de Refendage Injector - Acier Carbone',
    description: 'Lame de refendage injector en acier à haute teneur en carbone',
    features: ['Haute teneur en carbone', 'Montage injector', 'Longue durée de vie'],
    applications: ['Refendage industriel', 'Découpe de film', 'Découpe de papier'],
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - TRANCHANT SIMPLE
  // =============================================================================
  'single-edge-carbon': {
    name: 'Lame à Tranchant Simple - Acier Carbone',
    description: 'Lame professionnelle à tranchant simple pour usage sécurisé',
    features: ['Tranchant simple', 'Usage sécurisé', 'Acier carbone haute qualité'],
    applications: ['Découpe générale', 'Grattage', 'Nettoyage de surface'],
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - LAMES TRAPÉZOÏDALES
  // =============================================================================
  'trapezoid-standard': {
    name: 'Lame Trapézoïdale Standard',
    description: 'Lame de découpe trapézoïdale multi-usage pour cutters utilitaires',
    features: ['Forme trapézoïdale', 'Multi-usage', 'Montage standard'],
    applications: ['Découpe de carton', 'Ouverture de colis', 'Découpe générale'],
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - LAMES CROCHET
  // =============================================================================
  'hook-blade-standard': {
    name: 'Lame Crochet Standard',
    description: 'Lame crochet pour découpe sécurisée de matériaux d\'emballage',
    features: ['Conception crochet', 'Coupe sécurisée', 'Idéale pour film étirable'],
    applications: ['Ouverture de colis', 'Découpe de film étirable', 'Découpe d\'emballage'],
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - LAMES SÉCABLES
  // =============================================================================
  'snap-off-9mm': {
    name: 'Lame Sécable 9mm',
    description: 'Lame cutter de précision 9mm pour travaux détaillés',
    features: ['Largeur 9mm', 'Lame sécable', 'Haute précision'],
    applications: ['Travaux de précision', 'Artisanat', 'Découpe de maquettes'],
  },
  'snap-off-18mm': {
    name: 'Lame Sécable 18mm',
    description: 'Lame cutter standard 18mm pour usage général',
    features: ['Largeur 18mm', 'Usage polyvalent', 'Lame sécable'],
    applications: ['Découpe générale', 'Travaux de construction', 'Emballage'],
  },
  'snap-off-25mm': {
    name: 'Lame Sécable 25mm',
    description: 'Lame cutter robuste 25mm pour travaux lourds',
    features: ['Largeur 25mm', 'Usage intensif', 'Extra robuste'],
    applications: ['Travaux lourds', 'Découpe de matériaux épais', 'Construction'],
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - LAMES SCALPEL
  // =============================================================================
  'scalpel-10': {
    name: 'Lame Scalpel #10',
    description: 'Lame de scalpel chirurgicale pour découpe de précision médicale',
    features: ['Acier chirurgical', 'Stérile', 'Usage unique'],
    applications: ['Chirurgie', 'Découpe de précision', 'Applications de laboratoire'],
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - LAMES CIRCULAIRES
  // =============================================================================
  'circular-blade-60mm': {
    name: 'Lame Circulaire 60mm',
    description: 'Lame de découpe rotative 60mm pour cutters rotatifs',
    features: ['Diamètre 60mm', 'Découpe rotative', 'Tranchant durable'],
    applications: ['Découpe de tissu', 'Artisanat', 'Quilting'],
  },

  // =============================================================================
  // COUTEAUX DE MACHINE - EMBALLAGE SOUS VIDE
  // =============================================================================
  'star-punch-5-point': {
    name: 'Poinçon Étoile 5 Points',
    description: 'Poinçon professionnel étoile à 5 points pour machines d\'emballage sous vide',
    features: ['Conception 5 points', 'Acier haute qualité', 'Longue durée de vie'],
    applications: ['Emballage sous vide', 'Thermoformage', 'Machines Multivac'],
  },
  'triangle-blade': {
    name: 'Lame Triangle',
    description: 'Lame triangle pour machines de thermoformage',
    features: ['Forme triangulaire', 'Découpe précise', 'Compatible machines standard'],
    applications: ['Thermoformage', 'Emballage sous vide', 'Découpe d\'emballage'],
  },

  // =============================================================================
  // COUTEAUX DE MACHINE - DÉCOUENNAGE
  // =============================================================================
  'derinder-blade': {
    name: 'Lame de Découennage',
    description: 'Lame professionnelle de découennage pour traitement de viande',
    features: ['Acier inoxydable', 'Approuvé FDA', 'Tranchant durable'],
    applications: ['Traitement de viande', 'Découennage', 'Industrie alimentaire'],
  },

  // =============================================================================
  // COUTEAUX DE MACHINE - LOG-SAW
  // =============================================================================
  'logsaw-blade-standard': {
    name: 'Lame Log-Saw Standard',
    description: 'Lame log-saw pour découpe de papier toilette et essuie-tout',
    features: ['Acier haute qualité', 'Découpe nette', 'Longue durée de vie'],
    applications: ['Papier toilette', 'Essuie-tout', 'Découpe de papier'],
  },

  // =============================================================================
  // SÉCURITÉ CUTTERS - AUTO-RÉTRACTABLES
  // =============================================================================
  'h006-001-x01': {
    name: 'H006 001 X01 - RETRO LIGHT KNIFE',
    description: 'Cutter manuel professionnel en métal moulé sous pression conforme aux normes de sécurité au travail. Performance durable avec tranchant de coupe produit en acier Sheffield.',
    features: [
      'Corps en métal moulé sous pression',
      'Conception ergonomique',
      'Changement de lame facile et sécurisé',
      'Tranchant produit en acier Sheffield',
      'Conforme normes de sécurité'
    ],
    applications: ['Entrepôt & Logistique', 'Lignes de production', 'Emballage'],
  },
  'h008-001-a03': {
    name: 'H008 001 A03 - AUTO RETRACT',
    description: 'Cutter manuel professionnel à mécanisme auto-rétractable pour sécurité maximale. La lame se rétracte automatiquement lorsque relâchée.',
    features: [
      'Mécanisme auto-rétractable',
      'Verrou de sécurité',
      'Prise ergonomique',
      'Conception légère'
    ],
    applications: ['Logistique', 'Production', 'Entrepôt'],
  },

  // =============================================================================
  // SÉCURITÉ CUTTERS - LAME FIXE
  // =============================================================================
  'fixed-blade-safety': {
    name: 'Cutter de Sécurité à Lame Fixe',
    description: 'Cutter de sécurité professionnel à lame fixe avec protection de lame',
    features: ['Lame fixe', 'Protection de sécurité', 'Prise confortable'],
    applications: ['Découpe générale', 'Emballage', 'Applications de sécurité'],
  },

  // =============================================================================
  // CONTENEURS D'ÉLIMINATION
  // =============================================================================
  'blade-disposal-container': {
    name: 'Conteneur d\'Élimination de Lames',
    description: 'Conteneur de stockage pour collecte sécurisée de lames usagées et déchets d\'outils de découpe',
    features: ['Stockage sécurisé', 'Marques de capacité', 'Construction durable'],
    applications: ['Élimination de lames', 'Gestion de sécurité', 'Conformité au travail'],
  },
};
