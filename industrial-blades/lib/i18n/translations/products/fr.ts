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
  // RASOIRS INDUSTRIELS - REFENDAGE À FENTE
  // =============================================================================
  'slotted-karbon-celik': {
    name: 'Lame de Refendage à Fente - Acier Carbone',
    subtitle: 'SK5 Acier Carbone — 57x19mm',
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
    seo: {
      title: 'Lame Refendage à Fente Acier Carbone | Lame Industrielle 57x19mm',
      description: 'Lame de refendage à fente en acier carbone pour film BOPP, emballage flexible et découpe industrielle. Acier SK5, angle 22°, durée de vie 3-5x supérieure. Qualité Sheffield.',
      keywords: ['lame à fente', 'lame refendage', 'lame acier carbone', 'lame industrielle', 'lame rasoir industriel', 'lame 57x19', 'lame 57x19mm', 'lame textile', 'lame film', 'lame papier', 'lame emballage', 'lame SK5', 'lame professionnelle', 'lame longue durée', 'lame slitter', 'lame BOPP', 'lame emballage flexible', 'lame convertisseur']
    },
  },
  'slotted-karbon-titanyum': {
    name: 'Lame de Refendage à Fente - Acier Carbone + Revêtement Titane',
    subtitle: 'Revêtement PVD Nitrure de Titane — 57x19mm',
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
    seo: {
      title: 'Lame à Fente Revêtement Titane TiN | Lame Dorée 2300 HV',
      description: 'Lame de refendage à fente avec revêtement titane TiN, dureté 2300 HV. 40% moins de friction, idéale pour ruban adhésif, lamination et films sensibles à la chaleur.',
      keywords: ['lame titane', 'lame revêtement TiN', 'lame dorée', 'lame ruban adhésif', 'lame lamination', 'lame PVD', 'lame faible friction', 'lame film', 'lame étiquettes', 'lame industrielle titane', 'lame professionnelle revêtue']
    },
  },
  'slotted-karbon-seramik': {
    name: 'Lame de Refendage à Fente - Acier Carbone + Revêtement Céramique',
    subtitle: 'Revêtement Céramique Al₂O₃ — 57x19mm',
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
    seo: {
      title: 'Lame à Fente Revêtement Céramique | Dureté 3200 HV Ultra-Résistante',
      description: 'Lame de refendage à fente avec revêtement céramique multicouche, dureté 3200 HV. Idéale pour matériaux abrasifs, fibre de verre, carbone et papier abrasif. Durée de vie 5-7x supérieure.',
      keywords: ['lame céramique', 'lame revêtement céramique', 'lame abrasif', 'lame fibre de verre', 'lame fibre de carbone', 'lame industrielle céramique', 'lame haute dureté', 'lame 3200 HV', 'lame composite', 'lame résistante usure', 'lame refendage céramique']
    },
  },
  'slotted-paslanmaz': {
    name: 'Lame de Refendage à Fente - Acier Inoxydable',
    subtitle: '420HC Acier Inoxydable — 57x19mm',
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
    seo: {
      title: 'Lame à Fente Acier Inoxydable AISI 420 | Lame FDA Hygiénique',
      description: 'Lame de refendage à fente en acier inoxydable AISI 420, approuvée FDA. Résistante à la corrosion, idéale pour industrie alimentaire, pharmaceutique et environnements humides.',
      keywords: ['lame inoxydable', 'lame acier inoxydable', 'lame FDA', 'lame alimentaire', 'lame hygiénique', 'lame AISI 420', 'lame anti-corrosion', 'lame pharmaceutique', 'lame médicale', 'lame humide', 'lame industrie alimentaire']
    },
  },
  'slotted-paslanmaz-titanyum': {
    name: 'Lame de Refendage à Fente - Acier Inoxydable + Revêtement Titane',
    subtitle: 'Acier Inoxydable + Nitrure de Titane — 57x19mm',
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
    seo: {
      title: 'Lame Inoxydable + Titane TiN | Double Protection Corrosion et Usure',
      description: 'Lame de refendage à fente inoxydable avec revêtement titane TiN, dureté 2300 HV. Double protection corrosion et usure pour lamination alimentaire, blister pharmaceutique et emballage stérile.',
      keywords: ['lame inoxydable titane', 'lame double protection', 'lame TiN inoxydable', 'lame blister', 'lame lamination', 'lame stérile', 'lame hygiénique durable', 'lame dorée inoxydable', 'lame pharmaceutique', 'lame emballage médical']
    },
  },
  'slotted-paslanmaz-xcd': {
    name: 'Lame de Refendage à Fente - Acier Inoxydable + Revêtement XCD',
    subtitle: 'Revêtement DLC/XCD Type Diamant — 57x19mm',
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
    seo: {
      title: 'Lame Inoxydable + XCD Carbone Diamant | 5000 HV Ultra Anti-Adhésif',
      description: 'Lame de refendage à fente inoxydable avec revêtement XCD carbone diamant, dureté 5000 HV. Coefficient friction <0,1, idéale pour ruban ultra-adhésif, silicone et étiquettes.',
      keywords: ['lame XCD', 'lame carbone diamant', 'lame DLC', 'lame anti-adhésif', 'lame 5000 HV', 'lame diamant noir', 'lame ruban adhésif', 'lame silicone', 'lame étiquettes', 'lame ultra-résistante', 'lame faible friction']
    },
  },
  'slotted-endurium-seramik': {
    name: 'Lame de Refendage à Fente - Acier Endurium + Revêtement Céramique',
    subtitle: 'Acier Rapide + Céramique — 57x19mm',
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
    seo: {
      title: 'Lame Endurium HSS + Céramique | Résistance 600°C Haute Vitesse',
      description: 'Lame de refendage à fente Endurium HSS avec revêtement céramique 3500 HV. Résiste à 600°C, idéale pour refendage haute vitesse, feuille métallique et production 24/7.',
      keywords: ['lame Endurium', 'lame HSS', 'lame acier rapide', 'lame haute température', 'lame 600°C', 'lame haute vitesse', 'lame céramique HSS', 'lame feuille métallique', 'lame production continue', 'lame industrielle premium']
    },
  },
  'slotted-yekpare-tungsten': {
    name: 'Lame de Refendage à Fente - Carbure de Tungstène Massif',
    subtitle: 'Structure Monolithique WC-Co — 57x19mm',
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
    seo: {
      title: 'Lame Carbure de Tungstène Massif | HRA 92-94 Durée de Vie 50x',
      description: 'Lame de refendage à fente en carbure de tungstène massif WC-Co, dureté HRA 92-94. Durée de vie 20-50x supérieure à l\'acier pour matériaux ultra-abrasifs et électrodes batterie.',
      keywords: ['lame tungstène', 'lame carbure tungstène', 'lame WC-Co', 'lame HRA 92', 'lame ultra-dure', 'lame longue durée', 'lame abrasif extrême', 'lame feuille métallique', 'lame batterie', 'lame monolithique', 'lame métallurgie poudres']
    },
  },
  'slotted-yekpare-seramik': {
    name: 'Lame de Refendage à Fente - Céramique Massif (Zircone)',
    subtitle: 'Céramique Zircone Y-TZP — 57x19mm',
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
    seo: {
      title: 'Lame Céramique Zircone Massive | Biocompatible Sans Métal',
      description: 'Lame de refendage à fente en céramique zircone ZrO2 massive, biocompatible et sans métal. Isolant électrique, résistance chimique totale pour salles blanches, alimentaire et médical.',
      keywords: ['lame zircone', 'lame céramique massive', 'lame ZrO2', 'lame biocompatible', 'lame sans métal', 'lame salle blanche', 'lame alimentaire', 'lame médicale', 'lame isolante', 'lame anti-contamination', 'lame pharmaceutique']
    },
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - REFENDAGE INJECTEUR
  // =============================================================================
  'injektor-karbon-celik': {
    name: 'Lame Injecteur - Acier Carbone, 2 Fentes',
    description: 'Lame injecteur industrielle fabriquée en acier à haute teneur en carbone (0,85-1,00% C). Le système de montage à double fente permet un positionnement stable et sécurisé sur les machines de refendage. Le traitement thermique de précision dans des fours à atmosphère contrôlée produit une microstructure martensitique homogène avec une dureté HRC 58-60. L\'angle de tranchant optimisé de 22° avec meulage de précision assure des coupes nettes et durables. Solution économique offrant un excellent rapport qualité-prix pour applications industrielles standard.',
    features: [
      'Teneur élevée en carbone (0,85-1,00%)',
      'Système de montage à double fente',
      'Microstructure martensitique homogène',
      'Dureté HRC 58-60',
      'Angle de tranchant optimal de 22°',
      'Excellent rapport qualité-prix'
    ],
    applications: ['Refendage de film plastique', 'Découpe de papier', 'Découpe textile', 'Refendage d\'emballage', 'Découpe de ruban adhésif'],
    seo: {
      title: 'Lame Injecteur Acier Carbone 38x8mm | HRC 58-60 Double Fente',
      description: 'Lame injecteur 38x8mm en acier carbone haute teneur (0,85-1,00% C), dureté HRC 58-60. Système double fente pour montage stable. Excellent rapport qualité-prix.',
      keywords: ['lame injecteur', 'lame 38x8', 'lame acier carbone', 'lame refendage', 'lame double fente', 'lame HRC 58-60', 'lame industrielle', 'lame film plastique', 'lame papier', 'lame textile']
    },
  },
  'injektor-paslanmaz': {
    name: 'Lame Injecteur - Acier Inoxydable, 2 Fentes',
    description: 'Lame injecteur fabriquée en acier inoxydable martensitique AISI 420 avec système de montage à double fente. La teneur en chrome de 12-14% assure une excellente résistance à la corrosion tout en maintenant une dureté HRC 54-56. Idéale pour environnements humides, industrie alimentaire et applications nécessitant des standards d\'hygiène élevés. Le système à double fente offre un montage stable et des changements de lame rapides. Approuvée FDA pour surfaces en contact alimentaire.',
    features: [
      'Acier inoxydable AISI 420',
      'Résistance à la corrosion',
      'Système de montage à double fente',
      'Approuvé FDA',
      'Dureté HRC 54-56',
      'Adapté aux environnements humides'
    ],
    applications: ['Découpe d\'emballage alimentaire', 'Applications en environnement humide', 'Production pharmaceutique', 'Lignes de production hygiéniques', 'Emballage médical'],
    seo: {
      title: 'Lame Injecteur Acier Inoxydable 38x8mm | AISI 420 FDA Hygiénique',
      description: 'Lame injecteur 38x8mm en acier inoxydable AISI 420, approuvée FDA. Résistante à la corrosion, idéale pour industrie alimentaire, pharmaceutique et environnements humides.',
      keywords: ['lame injecteur inoxydable', 'lame 38x8', 'lame AISI 420', 'lame FDA', 'lame alimentaire', 'lame hygiénique', 'lame pharmaceutique', 'lame médicale', 'lame anti-corrosion', 'lame double fente']
    },
  },
  'injektor-paslanmaz-ptfe': {
    name: 'Lame Injecteur - Acier Inoxydable + Revêtement PTFE, 2 Fentes',
    description: 'Lame injecteur en acier inoxydable AISI 420 avec revêtement PTFE (polytétrafluoroéthylène) avancé et système de montage à double fente. Le revêtement PTFE offre des propriétés anti-adhésives exceptionnelles avec un coefficient de friction extrêmement bas (<0,04). Cette combinaison empêche l\'accumulation de résidus adhésifs sur le tranchant, maintenant une qualité de coupe constante. Idéale pour le refendage de rubans adhésifs, étiquettes autocollantes et matériaux revêtus qui adhèrent normalement aux lames standard.',
    features: [
      'Revêtement PTFE anti-adhésif',
      'Coefficient de friction <0,04',
      'Empêche l\'accumulation de résidus',
      'Base inoxydable AISI 420',
      'Système à double fente',
      'Qualité de coupe constante'
    ],
    applications: ['Découpe de ruban adhésif', 'Refendage d\'étiquettes autocollantes', 'Découpe de film avec adhésif', 'Matériaux revêtus silicone', 'Production d\'autocollants'],
    seo: {
      title: 'Lame Injecteur PTFE Anti-Adhésif 38x8mm | Friction <0,04',
      description: 'Lame injecteur 38x8mm inoxydable avec revêtement PTFE anti-adhésif, coefficient friction <0,04. Idéale pour ruban adhésif, étiquettes autocollantes et silicone.',
      keywords: ['lame injecteur PTFE', 'lame 38x8', 'lame anti-adhésif', 'lame ruban adhésif', 'lame étiquettes', 'lame silicone', 'lame faible friction', 'lame autocollants', 'lame inoxydable PTFE', 'lame refendage précision']
    },
  },
  'injektor-paslanmaz-seramik': {
    name: 'Lame Injecteur - Acier Inoxydable + Revêtement Céramique, 2 Fentes',
    description: 'Lame injecteur en acier inoxydable avec revêtement céramique multicouche à base de titane et système de montage à double fente. Le revêtement céramique appliqué par technologie hybride CVD/PVD atteint une dureté de surface de 3200 HV. Cette combinaison offre à la fois la résistance à la corrosion de l\'inoxydable et la résistance à l\'usure extrême de la céramique. Performance supérieure pour la découpe de matériaux hautement abrasifs. L\'inertie chimique assure une longue durée de vie même dans des environnements corrosifs.',
    features: [
      'Revêtement céramique multicouche',
      'Dureté de surface 3200 HV',
      'Double protection corrosion + usure',
      'Inertie chimique',
      'Système à double fente',
      'Durée de vie prolongée de 5-7x'
    ],
    applications: ['Découpe de papier abrasif', 'Refendage de fibre de verre', 'Découpe de composite', 'Matériaux techniques abrasifs', 'Applications industrielles exigeantes'],
    seo: {
      title: 'Lame Injecteur Céramique 38x8mm | 3200 HV Double Protection',
      description: 'Lame injecteur 38x8mm inoxydable avec revêtement céramique multicouche, dureté 3200 HV. Double protection corrosion et usure. Durée de vie 5-7x supérieure.',
      keywords: ['lame injecteur céramique', 'lame 38x8', 'lame 3200 HV', 'lame fibre de verre', 'lame composite', 'lame abrasif', 'lame haute dureté', 'lame longue durée', 'lame industrielle', 'lame refendage précision']
    },
  },
  'injektor-paslanmaz-titanyum': {
    name: 'Lame Injecteur - Acier Inoxydable + Revêtement Titane, 2 Fentes',
    description: 'Lame injecteur en acier inoxydable AISI 420 avec revêtement TiN (nitrure de titane) appliqué par PVD et système de montage à double fente. Le revêtement doré atteint une dureté de surface de 2300 HV, réduisant le coefficient de friction de 40%. Cette solution hybride combine la résistance à la corrosion de l\'inoxydable avec la résistance à l\'usure supérieure du titane. La génération de chaleur réduite pendant la coupe protège les matériaux thermosensibles. Idéale pour applications nécessitant hygiène et durabilité.',
    features: [
      'Revêtement PVD TiN (nitrure de titane)',
      'Dureté de surface 2300 HV',
      '40% friction réduite',
      'Apparence dorée',
      'Résistance corrosion + usure',
      'Protection des matériaux thermosensibles'
    ],
    applications: ['Découpe de lamination alimentaire', 'Refendage d\'emballage blister', 'Découpe de film sensible à la chaleur', 'Applications pharmaceutiques', 'Emballage médical stérile'],
    seo: {
      title: 'Lame Injecteur Titane TiN 38x8mm | 2300 HV Dorée Hygiénique',
      description: 'Lame injecteur 38x8mm inoxydable avec revêtement titane TiN, dureté 2300 HV. 40% moins de friction, idéale pour lamination alimentaire, blister et emballage stérile.',
      keywords: ['lame injecteur titane', 'lame 38x8', 'lame TiN', 'lame dorée', 'lame 2300 HV', 'lame blister', 'lame lamination', 'lame pharmaceutique', 'lame stérile', 'lame faible friction']
    },
  },
  'injektor-paslanmaz-titanyum-2-kanalli': {
    name: 'Lame Injecteur - Acier Inoxydable + Revêtement Titane, 2 Fentes Rainurées',
    description: 'Lame injecteur en acier inoxydable avec revêtement titane et système de montage à double fente rainurée (cannelée) avancé. Les fentes rainurées offrent un ancrage mécanique supérieur, empêchant tout glissement ou vibration pendant les opérations de refendage haute vitesse. Le revêtement TiN appliqué par PVD fournit une dureté de 2300 HV avec les mêmes avantages de friction réduite. Conception premium pour applications industrielles professionnelles nécessitant une stabilité et une précision maximales.',
    features: [
      'Système à double fente rainurée',
      'Ancrage mécanique supérieur',
      'Anti-glissement et anti-vibration',
      'Revêtement TiN 2300 HV',
      'Stabilité haute vitesse',
      'Précision professionnelle'
    ],
    applications: ['Refendage haute vitesse', 'Applications haute précision', 'Lignes de production automatisées', 'Découpe de film mince', 'Refendage de feuille de précision'],
    seo: {
      title: 'Lame Injecteur Titane Rainurée 38x8mm | Anti-Vibration Haute Vitesse',
      description: 'Lame injecteur 38x8mm titane avec fentes rainurées anti-glissement. Ancrage mécanique supérieur, 2300 HV. Idéale pour refendage haute vitesse et précision.',
      keywords: ['lame injecteur rainurée', 'lame 38x8', 'lame titane cannelée', 'lame haute vitesse', 'lame anti-vibration', 'lame précision', 'lame automatisée', 'lame film mince', 'lame TiN', 'lame refendage professionnel']
    },
  },
  'injektor-paslanmaz-xcd': {
    name: 'Lame Injecteur - Acier Inoxydable + Revêtement XCD, 2 Fentes',
    description: 'Lame injecteur en acier inoxydable avec revêtement XCD (Xtreme Carbon Diamond) de la famille DLC (Diamond-Like Carbon) et système de montage à double fente. Ce revêtement de carbone diamanté atteint une dureté exceptionnelle de 5000 HV avec un coefficient de friction inférieur à 0,1. L\'apparence diamant noir offre des propriétés anti-adhésives inégalées, empêchant même les matériaux les plus adhésifs de coller. Solution ultime pour les applications de découpe les plus exigeantes.',
    features: [
      'Revêtement XCD carbone diamant',
      'Dureté ultra-élevée 5000 HV',
      'Coefficient de friction <0,1',
      'Propriétés anti-adhésives exceptionnelles',
      'Apparence diamant noir',
      'Pour applications ultra-exigeantes'
    ],
    applications: ['Découpe de ruban ultra-adhésif', 'Refendage de silicone', 'Découpe d\'étiquettes adhésives', 'Tissus imprégnés de résine', 'Rubans adhésifs médicaux'],
    seo: {
      title: 'Lame Injecteur XCD Carbone Diamant 38x8mm | 5000 HV Anti-Adhésif',
      description: 'Lame injecteur 38x8mm avec revêtement XCD carbone diamant, dureté 5000 HV, friction <0,1. Propriétés anti-adhésives ultimes pour silicone et rubans adhésifs.',
      keywords: ['lame injecteur XCD', 'lame 38x8', 'lame carbone diamant', 'lame DLC', 'lame 5000 HV', 'lame anti-adhésif', 'lame diamant noir', 'lame silicone', 'lame adhésif médical', 'lame ultra-résistante']
    },
  },
  'injektor-yekpare-tungsten': {
    name: 'Lame Injecteur - Carbure de Tungstène Massif, Sans Fente',
    description: 'Lame injecteur fabriquée en carbure de tungstène massif (WC-Co) avec conception monolithique sans fente. Cette composition contenant 94% de carbure de tungstène et 6% de liant cobalt atteint une dureté HRA 92-94 (équivalent HRC 75+). La structure produite par métallurgie des poudres offre une intégrité parfaite sans soudure ni brasage. Montage par système de serrage direct. Conçue pour découper des matériaux ultra-abrasifs que les lames en acier conventionnelles ne peuvent pas traiter efficacement.',
    features: [
      'Carbure de tungstène massif 94% WC',
      'Dureté ultra-élevée HRA 92-94',
      'Structure monolithique sans fente',
      'Production métallurgie des poudres',
      'Durée de vie 20-50x supérieure',
      'Pour matériaux extrêmement abrasifs'
    ],
    applications: ['Découpe de papier revêtu céramique', 'Refendage de feuille métallique', 'Découpe de composite abrasif', 'Film nanotube de carbone', 'Matériau électrode de batterie'],
    seo: {
      title: 'Lame Injecteur Carbure Tungstène 38x8mm | HRA 92-94 Massif',
      description: 'Lame injecteur 38x8mm en carbure de tungstène massif WC-Co, dureté HRA 92-94. Durée de vie 20-50x supérieure pour matériaux ultra-abrasifs et électrodes batterie.',
      keywords: ['lame injecteur tungstène', 'lame 38x8', 'lame carbure tungstène', 'lame WC-Co', 'lame HRA 92', 'lame ultra-dure', 'lame monolithique', 'lame batterie', 'lame feuille métallique', 'lame longue durée extrême']
    },
  },
  'injektor-yekpare-seramik-030': {
    name: 'Lame Injecteur - Céramique Massif (Zircone), Sans Fente - 0,30mm',
    description: 'Lame injecteur ultra-mince de 0,30mm d\'épaisseur fabriquée en céramique zircone (ZrO2) massive avec conception sans fente. La structure de zircone polycristalline tétragonale (Y-TZP) maintient une dureté de 1200 HV avec une résistance exceptionnelle aux fissures malgré la faible épaisseur. Cette lame totalement sans métal élimine tout risque de contamination métallique et offre une isolation électrique complète. Idéale pour applications de découpe de précision nécessitant pureté absolue et biocompatibilité.',
    features: [
      'Épaisseur ultra-mince 0,30mm',
      'Céramique zircone Y-TZP',
      'Zéro contamination métallique',
      'Isolation électrique complète',
      'Biocompatible',
      'Résistance chimique totale'
    ],
    applications: ['Découpe d\'emballage alimentaire de précision', 'Applications médicales', 'Découpe de film électronique', 'Salles blanches', 'Production pharmaceutique haute pureté'],
    seo: {
      title: 'Lame Injecteur Céramique Zircone 38x8x0,30mm | Biocompatible Sans Métal',
      description: 'Lame injecteur 38x8mm céramique zircone 0,30mm ultra-mince, biocompatible et sans métal. Isolation électrique, résistance chimique pour salles blanches et médical.',
      keywords: ['lame injecteur céramique', 'lame 38x8', 'lame zircone', 'lame 0,30mm', 'lame biocompatible', 'lame sans métal', 'lame salle blanche', 'lame médicale', 'lame isolante', 'lame pharmaceutique précision']
    },
  },
  'injektor-yekpare-seramik-064': {
    name: 'Lame Injecteur - Céramique Massif (Zircone), Sans Fente - 0,64mm',
    description: 'Lame injecteur robuste de 0,64mm d\'épaisseur fabriquée en céramique zircone (ZrO2) massive avec conception sans fente. L\'épaisseur augmentée offre une rigidité et une durabilité supérieures par rapport à la version 0,30mm, tout en conservant les propriétés uniques de la céramique zircone Y-TZP. Dureté de 1200 HV sans aucune contamination métallique. Conçue pour applications industrielles nécessitant à la fois robustesse et pureté absolue dans des conditions de travail plus exigeantes.',
    features: [
      'Épaisseur robuste 0,64mm',
      'Rigidité et durabilité supérieures',
      'Céramique zircone Y-TZP',
      'Zéro contamination métallique',
      'Isolation électrique',
      'Usage industriel intensif'
    ],
    applications: ['Découpe alimentaire industrielle', 'Applications médicales robustes', 'Découpe de film épais', 'Production pharmaceutique', 'Environnements industriels exigeants'],
    seo: {
      title: 'Lame Injecteur Céramique Zircone 38x8x0,64mm | Robuste Sans Métal',
      description: 'Lame injecteur 38x8mm céramique zircone 0,64mm robuste, sans métal et biocompatible. Rigidité supérieure pour usage industriel intensif, alimentaire et médical.',
      keywords: ['lame injecteur céramique', 'lame 38x8', 'lame zircone robuste', 'lame 0,64mm', 'lame industrielle céramique', 'lame sans métal', 'lame alimentaire', 'lame médicale robuste', 'lame isolante', 'lame usage intensif']
    },
  },
  'injektor-endurium-seramik': {
    name: 'Lame Injecteur - Acier Endurium + Revêtement Céramique',
    description: 'Lame injecteur premium avec substrat Endurium HSS (acier rapide) et revêtement céramique multicouche. L\'acier rapide Endurium contenant 8-10% tungstène, 4-5% molybdène et 4% chrome fournit une dureté de base HRC 64-66. Le revêtement céramique ajoute une dureté de surface de 3500 HV. Cette combinaison résiste aux températures jusqu\'à 600°C sans perte de dureté, idéale pour les coupes interrompues et applications haute vitesse générant de la chaleur. Solution ultime pour les applications industrielles les plus exigeantes.',
    features: [
      'Substrat Endurium HSS haute performance',
      'Dureté de base HRC 64-66',
      'Revêtement céramique 3500 HV',
      'Résistance température 600°C',
      'Résistance au choc thermique',
      'Durée de vie maximale'
    ],
    applications: ['Opérations de refendage haute vitesse', 'Coupe interrompue', 'Refendage de feuille métallique', 'Découpe de composite technique', 'Production industrielle 24/7'],
    seo: {
      title: 'Lame Injecteur Endurium HSS Céramique 38x8mm | 600°C Haute Vitesse',
      description: 'Lame injecteur 38x8mm Endurium HSS avec revêtement céramique 3500 HV. Résiste à 600°C, idéale pour refendage haute vitesse, feuille métallique et production 24/7.',
      keywords: ['lame injecteur Endurium', 'lame 38x8', 'lame HSS céramique', 'lame acier rapide', 'lame 600°C', 'lame haute vitesse', 'lame 3500 HV', 'lame feuille métallique', 'lame production continue', 'lame industrielle premium']
    },
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - TRANCHANT SIMPLE — Série B201
  // =============================================================================
  'single-edge-carbon-2f': {
    name: 'Lame à Tranchant Simple — Acier Carbone 0,23mm 2-Facet',
    subtitle: 'Type standard — Étui aluminium — Crantée',
    description: 'Lame à tranchant simple en acier carbone haute teneur. Épaisseur 0,23mm, affûtage 2-facettes pour un équilibre optimal entre robustesse et tranchant. Pour le grattage de vitres, suppression d\'étiquettes, préparation de surfaces.',
    shortDescription: 'Lame à tranchant simple en acier carbone haute teneur. Affûtage 2-facettes, 0,23mm. Idéale pour le grattage de vitres et la préparation de surfaces industrielles.',
    features: ['Acier carbone haute teneur — dureté supérieure', 'Affûtage 2-facettes — équilibre robustesse/tranchant', 'Étui aluminium — rangement sécurisé', 'Crantée — compatible grattoirs standards', 'Revêtement anticorrosion', 'Dimensions 38×19mm standard'],
    applications: ['Grattage et nettoyage de vitres', 'Suppression d\'étiquettes et de colle', 'Automobile — ébavurage du caoutchouc', 'Enlèvement de peinture et de mastic', 'Préparation de surfaces industrielles'],
    benefits: [
      { title: 'Robustesse et tranchant équilibrés', description: 'L\'affûtage 2-facettes offre la combinaison parfaite de durabilité et de performance de coupe', icon: 'Shield' },
      { title: 'Usage universel', description: 'Du grattage de vitres à l\'enlèvement de peinture — une seule lame pour les tâches les plus variées', icon: 'Box' },
      { title: 'Dureté HRC 58-62', description: 'L\'acier carbone haute teneur maintient un affûtage durable même sur les surfaces les plus exigeantes', icon: 'Zap' },
    ],
    longDescription: `
      <p>B201 001 A01 — lame à tranchant simple classique en <strong>acier carbone haute teneur</strong> avec affûtage <strong>2-facettes</strong>. Le profil de 0,23mm offre un équilibre optimal entre robustesse et précision de coupe pour les applications industrielles quotidiennes.</p>

      <h3>Avantage de l'affûtage 2-facettes</h3>
      <p>Le profil 2-facettes crée une géométrie de coupe qui privilégie la <strong>durabilité</strong>. Par rapport au 3-facettes, il offre :</p>
      <ul>
        <li><strong>Résistance supérieure</strong> — idéal pour le grattage intensif</li>
        <li><strong>Arête plus longue</strong> — performances constantes sur surfaces dures</li>
        <li><strong>Risque réduit d'ébréchure</strong> — sûr pour les applications à haute pression</li>
        <li><strong>Coupe nette</strong> — précision optimale pour le grattage et le nettoyage</li>
      </ul>

      <h3>Domaines d'application</h3>
      <ul>
        <li><strong>Nettoyage de vitres :</strong> Grattage professionnel de résidus de peinture et de colle sur vitrages</li>
        <li><strong>Préparation de surfaces :</strong> Enlèvement de vieilles peintures, mastics, adhésifs</li>
        <li><strong>Automobile :</strong> Ébavurage de caoutchouc, nettoyage de joints et de pare-brise</li>
        <li><strong>Industrie :</strong> Suppression d'étiquettes, nettoyage de lignes de production</li>
      </ul>
    `,
    seo: {
      title: 'Lame Tranchant Simple Acier Carbone 0,23mm B201 | Alya Blade',
      description: 'Lame à tranchant simple en acier carbone haute teneur. 0,23mm, HRC 58-62, 2-facettes. Grattage de vitres, suppression d\'étiquettes, préparation de surfaces industrielles.',
      keywords: ['lame tranchant simple', 'lame grattoir vitre', 'lame acier carbone', 'grattoir industriel', 'lame suppression étiquettes', 'lame B201', 'nettoyage vitre', 'lame grattage peinture', 'lame industrielle simple', 'lame grattoir'],
    },
  },
  'single-edge-carbon-3f': {
    name: 'Lame à Tranchant Simple — Acier Carbone 0,23mm 3-Facet',
    subtitle: 'Découpe de précision — Options avec/sans étui',
    description: 'Lame à tranchant simple avec affûtage 3-facettes ultra-tranchant. Acier carbone haute teneur, 0,23mm. Disponible en étui aluminium, sans étui et boîte de 1000 pièces. Performance supérieure pour le nettoyage de vitres délicat et la découpe fine.',
    shortDescription: 'Lame 3-facettes ultra-tranchante. 0,23mm acier carbone. Idéale pour le nettoyage de vitres délicat et la découpe de films fins. Options avec/sans étui/1000 pcs.',
    features: ['Affûtage 3-facettes — tranchant ultra-fin', 'Options avec et sans étui', 'Crantée — fixation sûre', 'Boîte de 1000 pièces (B201 002 A01)', 'Acier carbone — qualité de coupe constante', 'Dimensions 38×19mm / 38×17mm'],
    applications: ['Nettoyage de vitres délicat', 'Suppression d\'étiquettes fines', 'Découpe de films et feuilles', 'Applications laboratoire et salles blanches', 'Détailing automobile'],
    benefits: [
      { title: 'Précision ultra-tranchante', description: 'L\'affûtage 3-facettes crée le tranchant le plus fin — coupe nette et sans bavure', icon: 'Zap' },
      { title: 'Conditionnement flexible', description: 'Avec étui, sans étui ou boîte de 1000 pièces — adapté à vos besoins', icon: 'Box' },
      { title: 'Qualité constante', description: 'Production Sheffield — chaque lame est contrôlée pour un tranchant identique', icon: 'ShieldCheck' },
    ],
    longDescription: `
      <p>B201 131 A01 — lame à tranchant simple en <strong>acier carbone haute teneur</strong> avec affûtage <strong>3-facettes</strong>. Parmi les 5 variantes de tranchant simple, le 3-facettes offre le tranchant le plus fin pour des opérations de coupe de précision.</p>

      <h3>Avantage de l'affûtage 3-facettes</h3>
      <p>Le profil 3-facettes crée un angle de coupe plus aigu, optimisant la <strong>précision</strong> :</p>
      <ul>
        <li><strong>Tranchant ultra-fin</strong> — coupe nette sans bavure</li>
        <li><strong>Pression minimale</strong> — moins de force requise</li>
        <li><strong>Idéal pour matériaux fragiles</strong> — films, étiquettes fines, surfaces délicates</li>
        <li><strong>Résultat impeccable</strong> — aucune rayure ni dommage sur la surface</li>
      </ul>

      <h3>Options de conditionnement</h3>
      <ul>
        <li><strong>B201 131 A01 :</strong> Avec étui aluminium — changement rapide et rangement sécurisé</li>
        <li><strong>B201 131 A00 :</strong> Sans étui — pour montage direct et coût optimisé</li>
        <li><strong>B201 002 A01 :</strong> Boîte de 1000 pièces — achat en gros pour grand volume</li>
      </ul>

      <h3>Domaines d'application</h3>
      <ul>
        <li><strong>Nettoyage de vitres :</strong> Grattage délicat sans rayure de la surface</li>
        <li><strong>Films et feuilles :</strong> Découpe de films d'emballage et feuilles fines</li>
        <li><strong>Automobile :</strong> Enlèvement de résidus de colle et détailing</li>
        <li><strong>Laboratoire :</strong> Grattage de précision dans les salles blanches</li>
      </ul>
    `,
    seo: {
      title: 'Lame Tranchant Simple 3-Facet Acier Carbone 0,23mm | Alya Blade',
      description: 'Lame 3-facettes ultra-tranchante. 0,23mm acier carbone, HRC 58-62. Nettoyage vitres délicat, suppression étiquettes, découpe films. Avec/sans étui/1000 pcs.',
      keywords: ['lame 3 facettes', 'lame précision tranchant simple', 'grattoir précision', 'nettoyage vitre', 'lame B201 131', 'lame sans étui', 'boîte 1000 pièces', 'lame laboratoire', 'lame salle blanche', 'découpe fine'],
    },
  },
  'single-edge-stainless': {
    name: 'Lame à Tranchant Simple — Acier Inoxydable 0,23mm',
    subtitle: 'Anticorrosion — Affûtage 3-Facet de précision',
    description: 'Lame à tranchant simple en acier inoxydable. Teneur en chrome +13% pour une protection totale contre la corrosion. Idéale pour l\'industrie alimentaire, la pharmacie, les salles blanches et les environnements maritimes.',
    shortDescription: 'Acier inoxydable avec teneur en chrome +13%. 3-Facet, 0,23mm. Pour l\'industrie alimentaire, la pharmacie, les salles blanches et le secteur maritime.',
    features: ['Acier inoxydable — résistance totale à la corrosion', 'Chrome +13% — protection contre rouille et oxydation', 'Affûtage 3-facettes — coupe nette', 'Étui aluminium — rangement sécurisé', 'Résistant à l\'humidité et aux produits chimiques', 'Adapté aux secteurs alimentaire et pharmaceutique'],
    applications: ['Production et préparation alimentaire', 'Industrie pharmaceutique et cosmétique', 'Applications en salles blanches', 'Environnements maritimes haute humidité', 'Nettoyage de surfaces exposées aux produits chimiques'],
    benefits: [
      { title: 'Protection totale contre la corrosion', description: 'Teneur en chrome +13% protège contre l\'humidité, le sel et les produits chimiques — aucun risque de rouille', icon: 'Droplets' },
      { title: 'Sécurité alimentaire', description: 'Construction inoxydable sans risque de contamination — conforme aux environnements FDA/HACCP', icon: 'ShieldCheck' },
      { title: 'Longue durée de conservation', description: 'Reste intacte dans les environnements humides — gestion simplifiée des stocks', icon: 'Clock' },
    ],
    longDescription: `
      <p>B201 801 A01 — lame à tranchant simple spécialisée en <strong>acier inoxydable</strong>. La teneur en chrome +13% assure une résistance totale à la corrosion dans les environnements exposés à l'humidité, l'eau et les produits chimiques.</p>

      <h3>Pourquoi l'acier inoxydable ?</h3>
      <p>Les lames standard en acier carbone rouillent rapidement dans les environnements humides, créant un risque de contamination. La version inoxydable offre :</p>
      <ul>
        <li><strong>Protection totale</strong> contre la rouille et l'oxydation</li>
        <li><strong>Sécurité alimentaire</strong> — aucun risque de contamination</li>
        <li><strong>Résistance chimique</strong> — supporte les solutions de nettoyage</li>
        <li><strong>Longue durée de conservation</strong> — ne se dégrade pas dans les entrepôts humides</li>
      </ul>

      <h3>Domaines d'application</h3>
      <ul>
        <li><strong>Production alimentaire :</strong> Grattage et nettoyage dans les usines de viande, produits laitiers et boissons</li>
        <li><strong>Pharmacie et cosmétique :</strong> Préparation de surfaces sur les lignes propres</li>
        <li><strong>Environnement maritime :</strong> Nettoyage de vitres et surfaces en eau salée</li>
        <li><strong>Salles blanches :</strong> Grattage de précision sans risque de contamination</li>
      </ul>
    `,
    seo: {
      title: 'Lame Tranchant Simple Acier Inoxydable 0,23mm | Alya Blade',
      description: 'Acier inoxydable, lame tranchant simple. Chrome +13%, HRC 55-58, 3-Facet. Industrie alimentaire, pharmacie, salles blanches. Résistance totale à la corrosion.',
      keywords: ['lame acier inoxydable', 'lame anticorrosion', 'lame contact alimentaire', 'grattoir inox', 'lame B201 801', 'lame salle blanche', 'lame maritime', 'lame pharmaceutique', 'lame antirouille', 'industrie alimentaire'],
    },
  },
  'single-edge-stainless-ptfe': {
    name: 'Lame à Tranchant Simple — Acier Inoxydable + Revêtement PTFE 0,23mm',
    subtitle: 'Revêtement PTFE (téflon) — Antiadhésive',
    description: 'Lame en acier inoxydable avec revêtement PTFE (téflon). 0,23mm, 3-facettes. Le revêtement PTFE réduit la friction de 40-60%, empêche l\'accumulation d\'adhésif. Performance supérieure pour la suppression d\'étiquettes et de rubans adhésifs.',
    shortDescription: 'Acier inoxydable avec revêtement PTFE téflon. Réduction de friction 40-60%. Idéale pour la suppression d\'étiquettes, de films et résidus d\'adhésifs.',
    features: ['Revêtement PTFE (téflon) — empêche l\'adhésion', 'Réduction de friction de 40-60%', 'Acier inoxydable — résistance totale à la corrosion', 'Affûtage 3-facettes — coupe nette et contrôlée', 'Deux variantes : crantée et rayée', 'Idéale pour environnements d\'accumulation d\'adhésif'],
    applications: ['Suppression d\'étiquettes et de stickers', 'Retrait de films pour vitres — automobile et bâtiment', 'Nettoyage de résidus de colle', 'Imprimerie — enlèvement d\'encre et de colle', 'Emballage — nettoyage de résidus de ruban adhésif'],
    benefits: [
      { title: '40–60% de friction en moins', description: 'Le revêtement PTFE (Teflon®) assure un glissement optimal — aucune rayure de surface', icon: 'Zap' },
      { title: 'Surface antiadhésive', description: 'Colle, peinture, encre et teinture ne collent pas à la lame — travail propre à chaque utilisation', icon: 'ShieldCheck' },
      { title: 'Variante crantée', description: 'Le modèle B201 901 A01-K avec crantage pour un montage fixe sécurisé dans les grattoirs', icon: 'Settings' },
    ],
    longDescription: `
      <p>B201 901 A01 — lame à tranchant simple spécialisée en <strong>acier inoxydable</strong> avec revêtement <strong>PTFE (Teflon®)</strong>. La réduction de friction de 40 à 60% empêche l'adhésion de colle, peinture et teinture sur la surface de travail.</p>

      <h3>Avantage du revêtement PTFE</h3>
      <p>Le PTFE (polytétrafluoroéthylène) est l'un des matériaux les plus glissants au monde. Le revêtement de la lame offre :</p>
      <ul>
        <li><strong>Réduction de friction</strong> de 40–60% — glissement fluide</li>
        <li><strong>Antiadhésion</strong> — colle, peinture, teinture ne restent pas</li>
        <li><strong>Protection de surface</strong> — moins de rayures sur matériaux délicats</li>
        <li><strong>Usure réduite</strong> — tranchant durable grâce à la friction minimale</li>
      </ul>

      <h3>Variantes</h3>
      <ul>
        <li><strong>B201 901 A01 :</strong> PTFE standard, étui aluminium</li>
        <li><strong>B201 901 A01-K :</strong> PTFE + crantage pour montage fixe dans les grattoirs</li>
      </ul>

      <h3>Domaines d'application</h3>
      <ul>
        <li><strong>Automobile :</strong> Découpe et retrait de films teintés sans rayure du verre</li>
        <li><strong>Imprimerie et publicité :</strong> Nettoyage de rouleaux et plaques d'impression</li>
        <li><strong>Travaux d'adhésifs :</strong> Suppression d'étiquettes et résidus de colle</li>
        <li><strong>Lignes de peinture :</strong> Enlèvement d'excédents de peinture sans endommager le support</li>
      </ul>
    `,
    seo: {
      title: 'Lame Tranchant Simple PTFE Inox 0,23mm | Alya Blade',
      description: 'Acier inoxydable avec revêtement PTFE téflon. Réduction friction 40-60%. Suppression étiquettes, films vitrés, résidus adhésifs. Lame industrielle antiadhésive.',
      keywords: ['lame revêtement PTFE', 'lame téflon', 'lame antiadhésive', 'suppression adhésif', 'lame B201 901', 'film de vitre', 'inox PTFE', 'lame anti-adhérence', 'suppression étiquettes PTFE', 'faible friction'],
    },
  },
  'single-edge-carbon-030': {
    name: 'Lame à Tranchant Simple — Acier Carbone 0,30mm Heavy Duty',
    subtitle: 'Épaisseur renforcée — Usage intensif — Étui aluminium/métal',
    description: 'Lame à tranchant simple en épaisseur renforcée (0,30mm / 0,012"). Acier carbone haute teneur, affûtage 2-facettes. Pour applications intensives — grattage de peinture dure, enlèvement d\'adhésifs épais, préparation de surfaces métalliques et béton.',
    shortDescription: 'Lame Heavy Duty épaisseur 0,30mm (0,012"). Acier carbone, 2-facettes. Grattage de peinture intensive et préparation de surfaces métalliques. Étui aluminium et métal.',
    features: ['Épaisseur 0,30mm — 30% plus robuste que le standard', 'Heavy Duty — pour applications exigeantes', 'Affûtage 2-facettes — robustesse maximale', 'Étui aluminium et métal', 'Acier carbone — longue durée sur surfaces dures', 'Crantée — compatible grattoirs standards'],
    applications: ['Grattage de peinture et vernis durs', 'Enlèvement d\'adhésifs et mastic épais', 'BTP — préparation de surfaces', 'Nettoyage de surfaces métalliques et ébavurage', 'Automobile — enlèvement de joints et mastics'],
    benefits: [
      { title: '30% plus épaisse que le standard', description: 'Le profil de 0,30mm (0,012") offre une rigidité maximale — ne plie pas lors des travaux lourds', icon: 'Shield' },
      { title: 'Deux options d\'étui', description: 'Étui aluminium (B201 501) ou dos métallique (B201 504) — adapté à chaque grattoir', icon: 'Box' },
      { title: 'Tranchant longue durée', description: 'Acier carbone HRC 58-62 conserve l\'affûtage plus longtemps sur surfaces dures', icon: 'Clock' },
    ],
    longDescription: `
      <p>B201 501 / B201 504 — lame à tranchant simple en épaisseur renforcée <strong>0,30mm (0,012")</strong>. 30% plus épaisse que le profil standard de 0,23mm, offrant une rigidité et une durabilité maximales dans les conditions de travail intensif.</p>

      <h3>Avantage de l'épaisseur 0,30mm</h3>
      <p>Les lames standard de 0,23mm peuvent fléchir lors du grattage intensif. Le profil renforcé de 0,30mm offre :</p>
      <ul>
        <li><strong>Rigidité maximale</strong> — ne plie pas sous la pression</li>
        <li><strong>Résistance</strong> aux couches épaisses de peinture et d'adhésif</li>
        <li><strong>Affûtage durable</strong> — 40% d'opérations en plus par lame</li>
        <li><strong>Sécurité</strong> — coupe contrôlée sans flexion inattendue</li>
      </ul>

      <h3>Options d'étui</h3>
      <ul>
        <li><strong>B201 501 :</strong> Étui aluminium — léger et changement rapide</li>
        <li><strong>B201 504 :</strong> Dos métallique — fixation renforcée pour grattoirs industriels</li>
      </ul>

      <h3>Domaines d'application</h3>
      <ul>
        <li><strong>BTP :</strong> Grattage de peinture dure, vernis et mastic sur murs et sols</li>
        <li><strong>Métallurgie :</strong> Nettoyage de surfaces et ébavurage de calamine</li>
        <li><strong>Automobile :</strong> Enlèvement de joints et anciens mastics</li>
        <li><strong>Industrie :</strong> Enlèvement d'adhésifs épais et de composés séchés</li>
      </ul>
    `,
    seo: {
      title: 'Lame Tranchant Simple 0,30mm Heavy Duty | Alya Blade',
      description: 'Lame Heavy Duty 0,30mm (0,012"). HRC 58-62, 2-facettes. Grattage peinture dure, préparation surfaces métalliques, enlèvement joints. Étui aluminium/métal.',
      keywords: ['lame heavy duty', 'lame épaisse tranchant simple', 'lame 0.30mm', 'lame 0.012 pouce', 'grattoir intensif', 'lame B201 501', 'étui métal', 'grattage peinture', 'industriel intensif', 'enlèvement joints'],
    },
  },

  // =============================================================================
  // RASOIRS INDUSTRIELS - LAMES TRAPÉZOÏDALES
  // =============================================================================
  'trapez-bicak-standart': {
    name: 'Lame Trapézoïdale Standard',
    subtitle: 'Lame trapézoïdale multi-usage',
    description: 'Lame de découpe trapézoïdale standard pour cutters utilitaires. Acier Sheffield de haute qualité. Montage universel, double tranchant, économique.',
    shortDescription: 'Lame trapézoïdale standard multi-usage. Montage universel, qualité Sheffield.',
    features: ['Montage universel', 'Double tranchant', 'Économique', 'Qualité Sheffield'],
    applications: ['Découpe de carton', 'Ouverture de colis', 'Usage général', 'Travaux d\'entrepôt'],
    seo: {
      title: 'Lame Trapézoïdale Standard | Alya Blade',
      description: 'Lame trapézoïdale standard multi-usage. Acier Sheffield, montage universel, double tranchant. Distributeur autorisé.',
      keywords: ['lame trapézoïdale standard', 'lame cutter', 'lame universelle', 'lame Sheffield'],
    },
  },

  // =============================================================================
  // SÉCURITÉ CUTTERS
  // =============================================================================
  'h006-001-x01': {
    name: 'H006 001 X01 - RETRO LIGHT KNIFE',
    subtitle: 'Couteau de Sécurité en Métal Moulé',
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
    subtitle: 'Couteau de Sécurité Auto-Rétractable',
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
  // LAMES DE REFENDAGE 3 TROUS
  // =============================================================================
  'b207': {
    name: 'B207 - Lame Trapézoïdale Renforcée',
    subtitle: 'Lame trapézoïdale renforcée 0,63mm',
    description: 'Lame trapézoïdale renforcée professionnelle 0,63mm. Acier carbone, inox et revêtement TiN. Pour entrepôts, sols, construction et emballage. Qualité Sheffield, HRC 58-62.',
    shortDescription: 'Lame trapézoïdale renforcée professionnelle 0,63mm avec 10 variantes : carbone, inox et TiN.',
    features: [
      'Acier haut carbone SK5',
      'Épaisseur 0,63mm / 1,00mm inox',
      '5 tailles de 50 à 100mm',
      'Revêtement TiN (nitrure de titane)',
      'Variante acier inoxydable',
      'Pointe arrondie de sécurité',
      'Affûtage unilatéral'
    ],
    applications: ['Entrepôt et logistique', 'Pose de sols', 'Construction', 'Industrie de l\'emballage', 'Cuir et textile', 'Industrie automobile'],
    seo: {
      title: 'B207 Lame Trapézoïdale Renforcée 0,63mm | Alya Blade',
      description: 'B207 lame trapézoïdale renforcée 0,63mm, acier Sheffield. 10 variantes : carbone, inox, TiN. Distributeur autorisé.',
      keywords: ['lame trapézoïdale', 'B207', 'lame cutter universel', 'lame de construction', 'lame industrielle trapézoïdale', 'lame Sheffield'],
    },
    benefits: [
      { title: 'Résistance Renforcée', description: 'Profil épais de 0,63mm offrant une résistance supérieure à la flexion et à la rupture dans les applications intensives.', icon: 'Shield' },
      { title: '10 Variantes Différentes', description: 'Solutions personnalisées pour chaque application avec différentes tailles, encoches, trous et revêtements.', icon: 'Settings' },
      { title: 'Qualité Sheffield', description: 'Acier haut carbone, traité thermiquement à HRC 58-62 à Sheffield, Angleterre.', icon: 'Award' },
      { title: 'Durée de Vie Prolongée', description: 'La version revêtue TiN (nitrure de titane) dure 3 fois plus longtemps que le carbone standard.', icon: 'Clock' },
    ],
    longDescription: `<p>Les lames trapézoïdales renforcées de la série B207 sont des lames de coupe professionnelles conçues pour un usage industriel en épaisseurs de 0,63mm (standard) et 1,00mm (inox).</p><p>Fabriquées en acier haut carbone, ces lames sont produites selon les normes de qualité Sheffield. Avec des options de longueur de 50mm à 100mm, des configurations à 2 ou 3 encoches et divers motifs de trous, elles offrent une large gamme d'applications.</p><p><strong>Options de matériaux :</strong> Acier carbone (standard), acier inoxydable (résistant à la corrosion), revêtement TiN (durée de vie prolongée). Des alternatives avec pointe arrondie et affûtage unilatéral sont disponibles pour la sécurité au travail.</p><p>Utilisées comme lames de rechange dans les cutters, coupe-sécurité, outils de pose de sols et outils à main professionnels. Performances supérieures pour la coupe de carton, moquette, linoléum, PVC, film d'emballage, cuir et textiles.</p>`,
    availableSizes: [
      '60×19×0.63mm — 2 Encoches, 4 Trous',
      '60×19×0.63mm — 2 Encoches, 4 Trous, Revêtement TiN',
      '53×19×0.63mm — 3 Encoches, 5 Trous',
      '51×19×0.63mm — 3 Encoches, 5 Trous, Revêtement TiN',
      '60×19×0.63mm — 2 Encoches (sans trous)',
      '60×19×1.00mm — 2 Encoches, Inox',
      '58×19×0.63mm — 3 Encoches, 3 Trous',
      '60×19×0.63mm — 2 Encoches, 1 Trou',
      '60×19×0.63mm — 2 Encoches, Affûtage unilatéral',
      '53×19×0.63mm — 3 Encoches, 5 Trous, Pointe arrondie',
    ],
  },
  'b206': {
    name: 'B206 - Lame Trapézoïdale Fine',
    subtitle: 'Lame trapézoïdale fine 0,43mm',
    description: 'Lame trapézoïdale fine de précision 0,43mm. Pour papier, emballage, papier peint et matériaux légers. Affûtage unilatéral pour nettoyage de vitres. Qualité Sheffield.',
    shortDescription: 'Lame trapézoïdale fine de précision 0,43mm pour opérations de coupe légère.',
    features: [
      'Acier haut carbone',
      'Profil fin 0,43mm',
      'Longueur 50 et 59mm',
      '2 encoches',
      'Affûtage unilatéral',
      'Variante avec trous 2×6,4mm'
    ],
    applications: ['Papier et emballage', 'Pose de papier peint', 'Bureau et entrepôt', 'Nettoyage de vitres'],
    seo: {
      title: 'B206 Lame Trapézoïdale Fine 0,43mm | Alya Blade',
      description: 'B206 lame trapézoïdale fine 0,43mm, acier Sheffield. Papier, emballage, papier peint, vitres. Distributeur autorisé.',
      keywords: ['lame trapézoïdale fine', 'B206', 'lame fine cutter', 'lame papier', 'lame papier peint'],
    },
    benefits: [
      { title: 'Coupe de Précision', description: 'Profil fin de 0,43mm pour des coupes nettes avec une pression minimale sur le matériau.', icon: 'Target' },
      { title: 'Légère & Flexible', description: 'La construction fine coupe les matériaux flexibles sans déchirure.', icon: 'Feather' },
      { title: 'Utilisation Économique', description: 'Durée de vie plus longue que les lames renforcées dans les applications de coupe légère.', icon: 'TrendingDown' },
    ],
    longDescription: `<p>Les lames trapézoïdales fines de la série B206 sont conçues pour les applications nécessitant une coupe précise avec une épaisseur de 0,43mm.</p><p>Fabriquées en acier à haute teneur en carbone, ces lames à profil fin sont particulièrement utilisées pour la coupe de papier, film fin, matériau d'emballage, papier peint et plastique léger.</p><p>Compatibles avec divers outils à main grâce à différentes configurations de trous et d'encoches. L'option d'affûtage unilatéral est idéale pour le raclage de verre et de surfaces délicates.</p><p><strong>Les lames trapézoïdales</strong> peuvent être utilisées seules pour la coupe machine, ainsi que comme lames de rechange dans les cutters.</p>`,
    availableSizes: [
      '50×19×0.43mm — Carbone, 2 Encoches',
      '50×19×0.43mm — 2 Encoches, Affûtage unilatéral',
      '59×19×0.43mm — 2×6.4mm Trous',
    ],
  },
  'b082': {
    name: 'B082 - Lame Trapézoïdale Dentée',
    subtitle: 'Lame trapézoïdale à bord denté',
    description: 'Lame trapézoïdale à bord denté pour matériaux fibreux et glissants. 82×25×1,0mm, dentelure unilatérale. Qualité Sheffield.',
    shortDescription: 'Lame trapézoïdale dentée 82×25×1,0mm. Excellente prise sur matériaux fibreux.',
    features: [
      'Bord denté unilatéral',
      '82×25×1,0mm',
      '2 trous de montage',
      'Pour matériaux fibreux',
      'Acier carbone Sheffield'
    ],
    applications: ['Coupe de cordages', 'Composites fibreux', 'Textile et synthétique', 'Agriculture'],
    seo: {
      title: 'B082 Lame Trapézoïdale Dentée | Alya Blade',
      description: 'B082 lame trapézoïdale dentée 82×25×1,0mm, acier Sheffield. Cordages, fibre de verre, Kevlar. Distributeur autorisé.',
      keywords: ['lame trapézoïdale dentée', 'B082', 'lame dentée', 'lame cordage', 'lame fibre de verre'],
    },
    benefits: [
      { title: 'Prise Anti-Glissement', description: 'Le bord dentelé assure une prise dès le premier contact même sur les matériaux glissants.', icon: 'Grip' },
      { title: 'Extra Épaisse', description: '1,0mm d\'épaisseur offrant une résistance à la flexion dans les matériaux fibreux intensifs.', icon: 'Shield' },
      { title: 'Corps Large', description: 'Format 82×25mm offrant une prise solide et une zone de coupe contrôlée.', icon: 'Maximize' },
    ],
    longDescription: `<p>La lame trapézoïdale à bord dentelé B082 est un produit spécialisé conçu pour la coupe de matériaux fibreux, renforcés de fibres et glissants.</p><p>Avec son corps large de 82×25mm et son épaisseur de 1,0mm, elle possède une construction extrêmement résistante. Le design à bord dentelé unilatéral empêche le matériau de glisser sur la lame et assure des coupes nettes dès le premier contact.</p><p>Utilisée de préférence pour les cordes, ficelles, fibres synthétiques, fibre de verre, fibre de carbone, Kevlar et matériaux similaires exigeants.</p>`,
    availableSizes: [
      '82×25×1.0mm — 2 Trous, Bord denté unilatéral',
    ],
  },
  'b208': {
    name: 'Lame Crochet B208 – Pointe Effilée (Standard)',
    subtitle: 'Lame crochet standard à pointe effilée',
    description: 'Lame crochet B208 standard à pointe effilée. 49-52×19×0,6mm, 2-3 encoches, 2-5 trous. Acier carbone, haut carbone et revêtement TiN. Idéale pour emballage, film et ruban adhésif.',
    features: ['Pointe effilée — pénétration facile', 'Profil crochet — découpe sécurisée', 'Options 49/51/52×19mm', 'Variantes carbone, haut carbone, TiN', '2-3 encoches, 2-5 trous', 'Qualité Sheffield Durham Duplex'],
    applications: ['Ouverture d\'emballages', 'Découpe de films', 'Retrait de rubans adhésifs', 'Entrepôts et logistique'],
    seo: {
      title: 'Lame Crochet B208 Pointe Effilée | Lame Crochet | Alya Blade',
      description: 'Lame crochet B208 à pointe effilée. 49-52×19×0,6mm, carbone/haut carbone/TiN. Emballage, film et ruban. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame crochet', 'B208', 'lame crochet pointe effilée', 'lame emballage', 'lame découpe film', 'lame crochet Sheffield'],
    },
    benefits: [
      { title: 'Pénétration Facile', description: 'La pointe effilée permet une entrée sans effort dans le matériau.', icon: 'Zap' },
      { title: 'Découpe Sécurisée', description: 'Le profil crochet coupe sans endommager le matériau sous-jacent.', icon: 'ShieldCheck' },
      { title: 'Nombreuses Variantes', description: 'Options carbone, haut carbone et revêtement TiN.', icon: 'Layers' },
    ],
    longDescription: `<p>La lame crochet B208 à pointe effilée est le modèle standard le plus populaire de la famille des lames crochet. La pointe effilée facilite la pénétration dans le matériau, et le profil crochet permet une découpe sécurisée sans endommager les couches sous-jacentes.</p><p>Disponible en variantes 49×19×0,6mm, 51×19×0,6mm et 52×19×0,6mm, avec 2 ou 3 encoches. Options acier carbone (standard), haut carbone (durée de vie prolongée) et revêtement TiN (résistance à l'usure).</p>`,
    availableSizes: [
      '49×19×0,6mm — 2E-3T, Gélatine 100 pcs',
      '49×19×0,6mm — 2E, Vrac 350 pcs',
      '49×19×0,6mm — 2E-2T, Distributeur 10 pcs',
      '51×19×0,6mm — 2E-2T, Distributeur Bleu 10 pcs',
      '52×19×0,6mm — TiN, 2E-3T, Haut Carbone, 10×8',
    ],
  },
  'b208-tekstil': {
    name: 'Lame Crochet B208 – Pointe Large (Textile)',
    subtitle: 'Lame crochet textile à bras larges',
    description: 'Lame crochet B208 à pointe large, spécialement conçue pour la découpe textile. 52×19×0,6mm, profil à bras larges. Acier DD 1% carbone, HRC 58-62.',
    features: ['Profil à bras larges', 'Conçue pour la découpe textile', 'Acier DD 1% carbone', 'Minimise l\'effilochage', '52×19×0,6mm', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe textile', 'Ouverture de balles', 'Découpe de cuir', 'Découpe de fibres'],
    seo: {
      title: 'Lame Crochet B208 Textile Bras Larges | Lame Textile | Alya Blade',
      description: 'Lame crochet B208 textile à bras larges. 52×19×0,6mm. Acier DD 1% carbone. Distributeur autorisé.',
      keywords: ['lame crochet textile', 'B208 textile', 'lame crochet bras larges', 'lame découpe tissu', 'lame textile'],
    },
    benefits: [
      { title: 'Bras Larges', description: 'Profil à bras larges pour une découpe nette sans endommager le tissu.', icon: 'Maximize' },
      { title: 'Anti-Effilochage', description: 'La pointe large prévient l\'effilochage et la déchirure.', icon: 'ShieldCheck' },
      { title: 'Optimisée Textile', description: 'Acier DD 1% carbone : optimisée pour l\'industrie textile.', icon: 'Target' },
    ],
    longDescription: `<p>La lame crochet B208 à pointe large est une variante spécialement développée pour l'industrie textile. Contrairement à la pointe effilée standard, elle dispose d'un design à bras larges pour une découpe nette des tissus et matériaux textiles.</p><p>Fabriquée en 52×19×0,6mm avec 2 encoches et 2-3 trous. Acier Durham Duplex 1% carbone avec dureté HRC 58-62.</p>`,
  },
  'b209': {
    name: 'Lame Crochet B209 – Unilatérale',
    subtitle: 'Lame crochet unilatérale (un seul côté)',
    description: 'Lame crochet B209 unilatérale. 59×19×0,6mm, 2 encoches, 3 trous. Variantes carbone, TiN et inox. Tranchant unilatéral pour découpe directionnelle contrôlée.',
    features: ['Tranchant unilatéral — direction contrôlée', '59×19×0,6mm', 'Variantes carbone, TiN, inox', '2 encoches, 3 trous', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe contrôlée', 'Emballage de précision', 'Décapage de films', 'Lignes de production'],
    seo: {
      title: 'Lame Crochet B209 Unilatérale 59×19mm | Lame Crochet | Alya Blade',
      description: 'Lame crochet B209 unilatérale. 59×19×0,6mm, carbone/TiN/inox. Découpe directionnelle contrôlée. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame crochet unilatérale', 'B209', 'lame crochet un côté', 'lame découpe contrôlée', 'lame crochet inox'],
    },
    benefits: [
      { title: 'Tranchant Unilatéral', description: 'Contrôle total de la direction de coupe : aucun risque de coupure indésirable.', icon: 'Target' },
      { title: '3 Matériaux', description: 'Carbone, TiN, inox : choisissez selon l\'application.', icon: 'Layers' },
      { title: 'Corps Large', description: '59mm : ligne de coupe plus large que le B208 standard.', icon: 'Maximize' },
    ],
    longDescription: `<p>La lame crochet B209 unilatérale possède un design spécial qui ne coupe que d'un seul côté. Cette construction unilatérale offre un contrôle total de la direction de coupe et élimine le risque de coupures indésirables.</p><p>Fabriquée en 59×19×0,6mm avec 2 encoches et 3 trous. Disponible en acier carbone, revêtement TiN et acier inoxydable.</p>`,
    availableSizes: [
      '59×19×0,6mm — 2E-3T, Carbone, Cellowrap 5 pcs, Boîte 100',
      '59×19×0,6mm — 2E-3T, TiN, Gélatine, Boîte 100',
      '59×19×0,6mm — 2E-3T, TiN, Distributeur 10 pcs',
      '59×19×0,6mm — 2E-3D, Inox, Cellowrap 5 pcs, Boîte 100',
    ],
  },

  // =============================================================================
  // LAMES SPÉCIALES - TYPES DIVERS
  // =============================================================================
  'trapez': {
    name: 'Lame Trapézoïdale - Design Personnalisé',
    subtitle: 'Design personnalisé et grand format',
    description: 'Lames trapézoïdales de dimensions non standard. Grand format 100×19mm disponible. Encoches, trous et matériaux personnalisés sur demande.',
    shortDescription: 'Lames trapézoïdales personnalisées. 100×19mm et dimensions non standard sur demande.',
    features: [
      '100×19×0,63mm grand format',
      'Dimensions personnalisées',
      'Carbone, inox, TiN',
      'Encoches et trous personnalisés',
      'Production OEM'
    ],
    applications: ['Machines spéciales', 'Lignes d\'automatisation', 'Projets industriels', 'Production OEM'],
    seo: {
      title: 'Lame Trapézoïdale Personnalisée 100×19mm | Alya Blade',
      description: 'Lames trapézoïdales personnalisées. 100×19mm + dimensions non standard. Acier Sheffield. OEM. Distributeur autorisé.',
      keywords: ['lame trapézoïdale personnalisée', 'lame sur mesure', '100mm trapézoïdale', 'OEM lame trapézoïdale'],
    },
    benefits: [
      { title: 'Personnalisation Complète', description: 'Taille, matériau, revêtement, encoches et trous : entièrement adapté à vos besoins.', icon: 'Settings' },
      { title: 'Longueur 100mm', description: 'La trapézoïdale la plus longue de notre gamme standard : format 100×19mm.', icon: 'Maximize' },
      { title: 'Production Sheffield', description: 'Toutes les commandes personnalisées fabriquées selon les mêmes normes de qualité Sheffield.', icon: 'Award' },
    ],
    longDescription: `<p>Chez Alya Blade, nous proposons des solutions de lames trapézoïdales personnalisées au-delà des formes standard. Nous pouvons produire des combinaisons de taille, nombre d'encoches, motif de trous, matériau et revêtement personnalisées selon les besoins.</p><p>La lame trapézoïdale grand format 100×19mm est la forme trapézoïdale la plus longue de notre gamme standard. Avec sa configuration de 3 encoches et 1 trou, elle est utilisée dans les machines industrielles et les systèmes d'automatisation.</p><p><strong>Notre processus de commande personnalisée :</strong> Production de lames trapézoïdales sur mesure avec options de taille, matériau, épaisseur, configuration encoches/trous et revêtement. Contactez-nous pour les quantités minimales de commande.</p>`,
    availableSizes: [
      '100×19×0.63mm — 3 Encoches, 1 Trou (standard grande taille)',
      'Dimensions personnalisées — Production sur demande',
    ],
  },
  'sper': {
    name: 'Lame Crochet Super – Longue',
    subtitle: 'Lame crochet longue Super',
    description: 'Lame crochet Super modèle long. 55×19×0,6mm, 2 encoches, 4 trous. Corps plus grand que les lames crochet standard. Pour emballages épais, cordes et films résistants.',
    features: ['55×19×0,6mm — corps plus grand que le standard', 'Système de fixation 4 trous', 'Optimisée pour matériaux épais', 'Acier haut carbone', 'Qualité Sheffield Durham Duplex'],
    applications: ['Emballages épais', 'Découpe de cordes et sangles', 'Films résistants', 'Rubans industriels'],
    seo: {
      title: 'Lame Crochet Super Longue 55×19mm | Lame Crochet Longue | Alya Blade',
      description: 'Lame crochet Super modèle long. 55×19×0,6mm, 4 trous, acier haut carbone. Emballages épais, cordes, films résistants. Distributeur autorisé.',
      keywords: ['lame crochet super', 'lame crochet longue', 'lame crochet 55mm', 'lame emballage épais', 'lame corde', 'lame crochet robuste'],
    },
    benefits: [
      { title: 'Corps Long', description: '55mm : ligne de coupe plus large et meilleur contrôle que les lames crochet standard.', icon: 'Maximize' },
      { title: 'Fixation 4 Trous', description: 'Compatibilité maximale avec différents systèmes de porte-lames.', icon: 'Settings' },
      { title: 'Usage Intensif', description: 'Découpe puissante pour matériaux épais et résistants.', icon: 'Shield' },
    ],
    longDescription: `<p>La Super Hook – Longue est une version plus grande et plus puissante de la lame crochet standard B208. Avec des dimensions de 55×19×0,6mm, elle offre une ligne de coupe plus large. La configuration 4 trous assure la compatibilité avec différents systèmes de porte-lames.</p><p>Plus performante que la lame crochet standard pour la découpe d'emballages épais, de cordes, de films résistants et de rubans industriels. Le corps long offre un meilleur contrôle à l'opérateur.</p>`,
  },
  'if': {
    name: 'Lame Crochet IF – Textile',
    subtitle: 'Lame crochet série IF pour textile',
    description: 'Lame crochet série IF pour textile. IF-1 : 80×13×0,71mm unilatérale, IF-2 : 87×10×0,71mm bilatérale, IF-2R : bilatérale à trous ronds. Conçue pour l\'industrie du tissu et du textile.',
    features: ['IF-1 : 80×13×0,71mm — unilatérale', 'IF-2 : 87×10×0,71mm — bilatérale', 'IF-2R : 87×10×0,71mm — bilatérale, trous ronds', 'Épaisseur 0,71mm — pas de flexion', 'Profil spécial textile', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe de tissus', 'Confection', 'Ouverture de balles', 'Découpe de fils et fibres'],
    seo: {
      title: 'Lame Crochet IF Textile IF-1 IF-2 | Lame Crochet Textile | Alya Blade',
      description: 'Lame crochet série IF textile. IF-1 : 80×13mm unilatérale, IF-2 : 87×10mm bilatérale. Découpe tissu et textile. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame crochet IF', 'lame crochet textile', 'lame découpe tissu', 'lame IF-1', 'lame IF-2', 'lame confection'],
    },
    benefits: [
      { title: '3 Variantes', description: 'IF-1, IF-2, IF-2R : options unilatérale et bilatérale.', icon: 'Layers' },
      { title: 'Spécifique Textile', description: 'Profil long et fin pour une découpe précise sans déchirure du tissu.', icon: 'Target' },
      { title: 'Épaisseur 0,71mm', description: 'Plus épais que le standard 0,6mm : aucune flexion lors de la découpe textile.', icon: 'Shield' },
    ],
    longDescription: `<p>Les lames crochet série IF sont des lames de découpe professionnelles spécialement développées pour l'industrie textile. Contrairement aux lames crochet standard, elles présentent un profil plus fin et plus long, conçu pour une découpe précise et nette des tissus et textiles.</p><p><strong>Variantes :</strong></p><ul><li><strong>IF-1 (Unilatérale) :</strong> 80×13×0,71mm, 1 trou ovale + 1 trou rond. Modèle à découpe sur un seul tranchant.</li><li><strong>IF-2 (Bilatérale) :</strong> 87×10×0,71mm, 1 trou ovale + 1 trou. Découpe possible sur les deux tranchants.</li><li><strong>IF-2R (Bilatérale, Trous Ronds) :</strong> 87×10×0,71mm, 2 trous ronds. Configuration de montage alternative.</li></ul>`,
    availableSizes: [
      'IF-1 : 80×13×0,71mm — Unilatérale, 1 Ovale + 1 Rond',
      'IF-2 : 87×10×0,71mm — Bilatérale, 1 Ovale + 1 Trou',
      'IF-2R : 87×10×0,71mm — Bilatérale, 2 Trous Ronds',
    ],
  },
  'kanca': {
    name: 'Lame Crochet HOB-1 – Grande Taille',
    subtitle: 'Lame crochet série HOB-1 grande taille',
    description: 'Lame crochet HOB-1 grande taille. 90×39,5/20×0,80mm, 1 trou. Corps large et profil épais pour applications textiles lourdes et emballages industriels.',
    features: ['90×39,5/20×0,80mm — le plus grand modèle', 'Épaisseur 0,80mm — usage intensif', 'Fixation simple 1 trou', 'Corps large pour contrôle maximal', 'Qualité Sheffield Durham Duplex'],
    applications: ['Textile lourd', 'Ouverture de balles', 'Découpe de cordes et sangles', 'Opérations industrielles'],
    seo: {
      title: 'Lame Crochet HOB-1 Grande 90×39,5mm | Grande Lame Crochet | Alya Blade',
      description: 'Lame crochet HOB-1 grande taille. 90×39,5/20×0,80mm, usage intensif. Textile, balles, cordes. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame crochet HOB-1', 'grande lame crochet', 'lame crochet 90mm', 'lame crochet robuste', 'lame balle', 'lame crochet textile'],
    },
    benefits: [
      { title: 'Plus Grand Corps', description: '90mm : le plus grand modèle de la famille des lames crochet.', icon: 'Maximize' },
      { title: 'Épaisseur 0,80mm', description: 'Plus épais que le standard 0,6mm : durabilité renforcée.', icon: 'Shield' },
      { title: 'Changement Rapide', description: 'Fixation simple 1 trou : changements de lame rapides.', icon: 'Zap' },
    ],
    longDescription: `<p>Le HOB-1 est le modèle le plus grand et le plus épais de la série standard de lames crochet. Avec des dimensions de 90×39,5/20×0,80mm, il est nettement plus imposant que les autres lames crochet. Le corps large permet une découpe plus profonde et plus puissante.</p><p>Avec une épaisseur de 0,80mm, il est plus dur et plus durable que les lames crochet standard de 0,6mm. La configuration simple à 1 trou permet des changements de lame rapides.</p>`,
  },
  'segmentli': {
    name: 'Lame Segmentée – Snap-Off Blade',
    description: 'Lame segmentée sécable permettant de renouveler le tranchant en cassant les segments usagés. Conception économique offrant plusieurs tranchants neufs sur une seule lame.',
    features: [
      'Segments sécables',
      'Tranchant renouvelable',
      'Économique',
      'Multiple tranchants',
      'Utilisation prolongée'
    ],
    applications: ['Découpe générale', 'Travaux de bureau', 'Artisanat', 'Applications variées nécessitant tranchant frais'],
  },

  // =============================================================================
  // COUTEAUX DE SÉCURITÉ - MARTOR & PROFESSIONNELS
  // =============================================================================
  'ok': {
    name: 'OK - Couteau Professionnel',
    description: 'Couteau de découpe professionnel de qualité Sheffield. Conception robuste pour usage industriel quotidien avec tranchant durable et prise ergonomique.',
    features: [
      'Qualité Sheffield',
      'Longue durée de vie',
      'Prise ergonomique',
      'Usage professionnel',
      'Construction robuste'
    ],
    applications: ['Découpe industrielle', 'Entrepôt & Logistique', 'Emballage', 'Production'],
  },
  'h014-001-x01': {
    name: 'H014 001 X01 - RETRACTABLE TRIM KNIFE – Couteau de Sécurité Rétractable',
    description: 'Couteau de sécurité professionnel en métal moulé sous pression avec lame rétractable. Conception ergonomique conforme aux normes de sécurité au travail avec mécanisme de rétraction fiable.',
    features: [
      'Lame rétractable manuellement',
      'Corps en métal moulé sous pression',
      'Conception ergonomique',
      'Changement de lame sécurisé',
      'Conforme normes de sécurité',
      'Qualité Sheffield'
    ],
    applications: ['Entrepôt & Logistique', 'Lignes de production', 'Emballage', 'Découpe industrielle'],
  },
  'h015-001-z01': {
    name: 'H015 001 Z01 - RETRO HEAVY DUTY – Couteau Robuste à Usage Intensif',
    description: 'Couteau de sécurité robuste en métal moulé sous pression pour travaux lourds. Construction renforcée pour les applications les plus exigeantes avec changement de lame facile.',
    features: [
      'Construction robuste renforcée',
      'Usage intensif',
      'Corps en métal moulé',
      'Changement de lame rapide',
      'Prise antidérapante',
      'Qualité Sheffield'
    ],
    applications: ['Travaux lourds', 'Construction', 'Industrie manufacturière', 'Découpe de matériaux épais'],
  },
  'h016-001-j01': {
    name: 'H016 001 J01 - SAFETY ROLL STRIPPER – Découpeur de Film Sécurisé',
    description: 'Couteau de sécurité spécialisé pour la découpe de films rétractables et emballages. Conception sécurisée empêchant les blessures accidentelles lors de la découpe de palettes.',
    features: [
      'Conception de sécurité intégrée',
      'Protection contre les coupures',
      'Spécial films rétractables',
      'Ergonomique',
      'Lame protégée',
      'Changement de lame sécurisé'
    ],
    applications: ['Décerclage de palettes', 'Films rétractables', 'Emballage plastique', 'Logistique'],
  },
  'h016-101-a03': {
    name: 'H016 101 A03 - SAFETY ROLL STRIPPER PLUS – Découpeur de Film Amélioré',
    description: 'Version améliorée du découpeur de film sécurisé avec mécanisme auto-rétractable. Sécurité maximale avec lame se rétractant automatiquement après utilisation.',
    features: [
      'Lame auto-rétractable',
      'Sécurité maximale',
      'Protection des doigts',
      'Mécanisme amélioré',
      'Conception ergonomique',
      'Usage intensif'
    ],
    applications: ['Décerclage de palettes', 'Films rétractables', 'Entrepôts haute cadence', 'Logistique sécurisée'],
  },
  'h016-201-a03': {
    name: 'H016 201 A03 - ROLL STRIPPER HEAVY DUTY – Découpeur Robuste',
    description: 'Découpeur de film version robuste pour usage intensif. Construction renforcée avec mécanisme auto-rétractable pour les environnements industriels exigeants.',
    features: [
      'Construction robuste',
      'Lame auto-rétractable',
      'Usage intensif',
      'Protection renforcée',
      'Durabilité supérieure',
      'Conforme sécurité au travail'
    ],
    applications: ['Industrie lourde', 'Entrepôts grandes surfaces', 'Découpe intensive', 'Environnements exigeants'],
  },
  'h020-001-s05': {
    name: 'H020 001 S05 - FIXED SLIM KNIFE – Couteau Fin à Lame Fixe',
    description: 'Couteau de sécurité compact à lame fixe avec profil fin. Idéal pour les découpes de précision où une lame stable et fixe est requise.',
    features: [
      'Lame fixe stable',
      'Profil fin et compact',
      'Découpe de précision',
      'Prise confortable',
      'Qualité Sheffield',
      'Usage professionnel'
    ],
    applications: ['Découpe de précision', 'Travaux fins', 'Artisanat professionnel', 'Applications délicates'],
  },
  'h023-002-s05': {
    name: 'H023 002 S05 - RETRACTABLE SLIM KNIFE – Couteau Fin Rétractable',
    description: 'Couteau de sécurité compact avec lame rétractable et profil slim. Corps en métal moulé sous pression offrant durabilité et précision.',
    features: [
      'Lame rétractable',
      'Profil slim compact',
      'Corps métal moulé',
      'Précision de coupe',
      'Sécurité intégrée',
      'Changement de lame facile'
    ],
    applications: ['Découpe de précision', 'Travaux détaillés', 'Emballage', 'Applications de bureau'],
  },
  'h024': {
    name: 'H024 001 S05 - Couteau de Sécurité Compact',
    description: 'Couteau de sécurité compact et polyvalent pour usage quotidien. Conception légère avec fonctionnalités de sécurité intégrées.',
    features: [
      'Conception compacte',
      'Léger et maniable',
      'Sécurité intégrée',
      'Usage polyvalent',
      'Qualité Sheffield'
    ],
    applications: ['Usage quotidien', 'Emballage', 'Bureau', 'Applications légères'],
  },
  'h028-002-x01': {
    name: 'H028 002 X01 - EASY CHANGE KNIFE – Couteau à Changement Rapide',
    description: 'Couteau de sécurité professionnel avec système de changement de lame ultra-rapide. Mécanisme innovant permettant le remplacement sans outil en toute sécurité.',
    features: [
      'Changement de lame sans outil',
      'Mécanisme rapide et sécurisé',
      'Corps métal moulé',
      'Conception ergonomique',
      'Gain de temps',
      'Sécurité maximale'
    ],
    applications: ['Environnements haute cadence', 'Production industrielle', 'Logistique', 'Maintenance'],
  },
  'h030-001-a03': {
    name: 'H030 001 A03 - POLYTRIM – Découpeur de Film de Sécurité',
    description: 'Couteau de sécurité spécialisé pour la découpe de films plastiques avec mécanisme auto-rétractable. Conçu spécifiquement pour les films rétractables et emballages sans endommager le contenu.',
    features: [
      'Lame auto-rétractable',
      'Spécial films plastiques',
      'Protection du contenu',
      'Profondeur de coupe contrôlée',
      'Sécurité maximale',
      'Ergonomique'
    ],
    applications: ['Films rétractables', 'Emballage plastique', 'Protection des produits', 'Logistique sécurisée'],
  },
  'h032-001-a03': {
    name: 'H032 001 A03 - SQUEEZE KNIFE – Couteau à Pression Auto-Rétractable',
    description: 'Couteau de sécurité innovant avec mécanisme de pression. La lame s\'étend uniquement lorsque le couteau est pressé et se rétracte automatiquement une fois relâché.',
    features: [
      'Mécanisme à pression',
      'Rétraction automatique instantanée',
      'Sécurité passive maximale',
      'Impossible de laisser la lame sortie',
      'Conception ergonomique',
      'Prévention des accidents'
    ],
    applications: ['Environnements sécurisés', 'Industries à haut risque', 'Formation', 'Applications sécurité stricte'],
  },
  'h033-001-n03': {
    name: 'H033 001 N03 - YELLOW/BLACK SLITTER – Découpeur à Lame Céramique',
    description: 'Couteau de sécurité avec lame céramique pour une durée de vie exceptionnelle. La lame céramique reste tranchante 10x plus longtemps que l\'acier et ne provoque pas d\'étincelles.',
    features: [
      'Lame céramique ultra-durable',
      '10x plus longue durée de vie',
      'Sans étincelles',
      'Idéal zones ATEX',
      'Sécurité intégrée',
      'Résistant à la corrosion'
    ],
    applications: ['Zones ATEX', 'Environnements explosifs', 'Industrie chimique', 'Applications sans étincelles'],
  },
  'h040': {
    name: 'H040 004 L01 - Couteau de Sécurité Standard',
    description: 'Couteau de sécurité polyvalent pour applications générales. Construction fiable avec fonctionnalités de sécurité essentielles.',
    features: [
      'Construction fiable',
      'Sécurité standard',
      'Usage polyvalent',
      'Qualité Sheffield',
      'Rapport qualité-prix optimal'
    ],
    applications: ['Applications générales', 'Emballage', 'Entrepôt', 'Usage quotidien'],
  },
  'h041-004-a01': {
    name: 'H041 004 A01 - Grattoir à Vitre – Racloir Professionnel',
    description: 'Grattoir professionnel en métal moulé sous pression pour le nettoyage de vitres et surfaces. Lame facilement remplaçable avec mécanisme de sécurité.',
    features: [
      'Grattoir professionnel',
      'Corps métal moulé',
      'Changement de lame sécurisé',
      'Prise ergonomique',
      'Multi-surfaces',
      'Qualité industrielle'
    ],
    applications: ['Nettoyage de vitres', 'Retrait d\'adhésifs', 'Grattage de surfaces', 'Maintenance'],
  },
  'h042': {
    name: 'H042 001 A01 - Couteau de Sécurité Polyvalent',
    description: 'Couteau de sécurité multifonction pour diverses applications de découpe. Conception équilibrée entre sécurité et fonctionnalité.',
    features: [
      'Multifonction',
      'Sécurité intégrée',
      'Polyvalent',
      'Qualité Sheffield',
      'Usage professionnel'
    ],
    applications: ['Découpe générale', 'Emballage', 'Applications variées', 'Environnement industriel'],
  },
  'h050': {
    name: 'H050 002 P02 - Couteau de Sécurité Série H050',
    description: 'Couteau de sécurité de la série H050 avec caractéristiques de sécurité avancées. Conçu pour les environnements de travail exigeant une protection maximale.',
    features: [
      'Sécurité avancée',
      'Construction professionnelle',
      'Ergonomique',
      'Durabilité élevée',
      'Conforme normes sécurité'
    ],
    applications: ['Industrie', 'Logistique', 'Production', 'Environnements sécurisés'],
  },
  'h051': {
    name: 'H051 002 P02 - Couteau de Sécurité Série H051',
    description: 'Couteau de sécurité série H051 offrant un équilibre optimal entre sécurité et efficacité de coupe. Idéal pour usage quotidien intensif.',
    features: [
      'Équilibre sécurité/efficacité',
      'Usage intensif',
      'Construction robuste',
      'Changement de lame facile',
      'Qualité Sheffield'
    ],
    applications: ['Usage quotidien', 'Entrepôt', 'Production', 'Découpe intensive'],
  },
  'h052': {
    name: 'H052 002 P02 - Couteau de Sécurité Série H052',
    description: 'Couteau de sécurité série H052 avec fonctionnalités optimisées pour les applications industrielles. Performance et sécurité garanties.',
    features: [
      'Fonctionnalités optimisées',
      'Performance industrielle',
      'Sécurité garantie',
      'Durabilité',
      'Usage professionnel'
    ],
    applications: ['Applications industrielles', 'Découpe de précision', 'Production', 'Maintenance'],
  },
  'h060': {
    name: 'H060 001 A03 - Couteau de Sécurité Auto-Rétractable H060',
    description: 'Couteau de sécurité avec mécanisme auto-rétractable de la série H060. La lame se rétracte automatiquement pour une sécurité maximale.',
    features: [
      'Lame auto-rétractable',
      'Sécurité passive',
      'Mécanisme fiable',
      'Construction durable',
      'Ergonomique',
      'Qualité Sheffield'
    ],
    applications: ['Environnements à haut risque', 'Industrie', 'Logistique', 'Applications sécurisées'],
  },
  'h063-001-x01': {
    name: 'H063 001 X01 - ORANGE SPRING SAFETY CUTTER – Couteau de Sécurité à Ressort',
    description: 'Couteau de sécurité orange haute visibilité avec mécanisme à ressort. La lame se rétracte automatiquement par ressort dès que la pression est relâchée.',
    features: [
      'Haute visibilité orange',
      'Mécanisme à ressort',
      'Rétraction automatique',
      'Sécurité passive',
      'Facile à localiser',
      'Prévention des pertes'
    ],
    applications: ['Entrepôts', 'Logistique', 'Environnements industriels', 'Applications haute sécurité'],
  },
  'h081': {
    name: 'H081 501 K01 - Couteau Annulaire (Bague) – Orange',
    description: 'Couteau de sécurité innovant en forme d\'anneau qui se porte au doigt. Libère les mains tout en gardant l\'outil de coupe toujours accessible. Couleur orange haute visibilité.',
    features: [
      'Design annulaire/bague',
      'Mains libres',
      'Haute visibilité orange',
      'Lame protégée',
      'Toujours accessible',
      'Prévention des pertes'
    ],
    applications: ['Picking & Packing', 'Préparation de commandes', 'Ouverture de cartons', 'Logistique rapide'],
  },
  'h090': {
    name: 'H090 001 S05 - Couteau de Sécurité Compact H090',
    description: 'Couteau de sécurité compact de la série H090 avec lame de précision. Format réduit idéal pour les travaux détaillés et le port quotidien.',
    features: [
      'Format compact',
      'Lame de précision',
      'Facilement transportable',
      'Sécurité intégrée',
      'Qualité Sheffield'
    ],
    applications: ['Travaux de précision', 'Port quotidien', 'Découpe fine', 'Applications détaillées'],
  },
  'h091': {
    name: 'H091 001 S05 - Couteau de Sécurité Compact H091',
    description: 'Couteau de sécurité compact série H091 offrant précision et sécurité dans un format de poche. Idéal pour les professionnels mobiles.',
    features: [
      'Format de poche',
      'Précision et sécurité',
      'Léger',
      'Clip de ceinture',
      'Qualité Sheffield'
    ],
    applications: ['Professionnels mobiles', 'Travaux légers', 'Port quotidien', 'Applications de précision'],
  },

  // =============================================================================
  // LAMES SÉCABLES - CUTTERS UTILITAIRES
  // =============================================================================
  'b122': {
    name: 'B122 - Lame Sécable Largeur 9mm',
    description: 'Lame cutter sécable de 9mm de largeur pour cutters de précision. Segments sécables permettant de renouveler le tranchant en cassant les segments usagés.',
    features: [
      'Largeur 9mm',
      'Lame segmentée sécable',
      'Tranchant renouvelable',
      'Acier Sheffield haute qualité',
      'Compatibilité universelle',
      'Économique'
    ],
    applications: ['Travaux de précision', 'Artisanat', 'Découpe fine', 'Maquettes'],
  },
  'b124': {
    name: 'B124 - Lame Sans Segment Largeur 9mm',
    description: 'Lame cutter non-segmentée de 9mm de largeur offrant un tranchant continu. Idéale pour les découpes longues nécessitant une lame stable.',
    features: [
      'Largeur 9mm',
      'Sans segment - lame continue',
      'Tranchant stable',
      'Acier Sheffield',
      'Découpe fluide',
      'Usage professionnel'
    ],
    applications: ['Découpes longues', 'Travaux de précision', 'Applications continues', 'Usage professionnel'],
  },
  'b121': {
    name: 'B121 - Lame Sécable Largeur 18mm',
    description: 'Lame cutter sécable standard de 18mm de largeur. Format universel compatible avec la majorité des cutters professionnels.',
    features: [
      'Largeur 18mm standard',
      'Lame segmentée sécable',
      'Compatibilité universelle',
      'Acier Sheffield haute qualité',
      'Tranchant renouvelable',
      'Usage polyvalent'
    ],
    applications: ['Découpe générale', 'Emballage', 'Construction', 'Usage quotidien'],
  },
  'b123': {
    name: 'B123 - Lame Sans Segment Largeur 18mm',
    description: 'Lame cutter non-segmentée de 18mm offrant stabilité et durabilité pour les découpes exigeantes. Tranchant continu sans points de rupture.',
    features: [
      'Largeur 18mm',
      'Sans segment - stabilité maximale',
      'Tranchant continu',
      'Durabilité supérieure',
      'Acier Sheffield',
      'Usage intensif'
    ],
    applications: ['Découpes longues', 'Matériaux épais', 'Applications industrielles', 'Usage intensif'],
  },
  'b096': {
    name: 'B096 - Lame Sans Segment 12mm – Fente Ovale',
    description: 'Lame cutter non-segmentée de 12mm avec système de fixation à fente ovale. Format intermédiaire offrant précision et robustesse.',
    features: [
      'Largeur 12mm',
      'Fente ovale de fixation',
      'Sans segment',
      'Format intermédiaire',
      'Acier Sheffield',
      'Compatibilité spécifique'
    ],
    applications: ['Cutters spécifiques', 'Découpe de précision', 'Applications intermédiaires', 'Usage professionnel'],
  },
  'lwb': {
    name: 'LWB - Lame Sans Segment 18mm – Dentée',
    description: 'Lame cutter sans segment de 18mm avec tranchant denté. Conception spéciale pour la découpe de matériaux fibreux et synthétiques.',
    features: [
      'Largeur 18mm',
      'Tranchant denté',
      'Sans segment',
      'Spécial matériaux fibreux',
      'Acier Sheffield',
      'Coupe sans glissement'
    ],
    applications: ['Matériaux fibreux', 'Sangles synthétiques', 'Cordes', 'Textiles épais'],
  },
  'b126': {
    name: 'B126 - Lame Sécable Largeur 25mm',
    description: 'Lame cutter sécable robuste de 25mm de largeur pour travaux lourds. Format extra-large pour la découpe de matériaux épais.',
    features: [
      'Largeur 25mm extra-large',
      'Lame segmentée sécable',
      'Pour travaux lourds',
      'Acier Sheffield renforcé',
      'Tranchant renouvelable',
      'Usage intensif'
    ],
    applications: ['Travaux lourds', 'Matériaux épais', 'Isolation', 'Construction'],
  },
  'b125': {
    name: 'B125 - Lame Sans Segment Largeur 25mm',
    description: 'Lame cutter non-segmentée de 25mm pour les découpes les plus exigeantes. Tranchant continu extra-robuste pour matériaux très épais.',
    features: [
      'Largeur 25mm',
      'Sans segment - robustesse maximale',
      'Tranchant extra-robuste',
      'Acier Sheffield premium',
      'Durabilité exceptionnelle',
      'Usage industriel intensif'
    ],
    applications: ['Découpe industrielle lourde', 'Isolation épaisse', 'Revêtements de sol', 'Construction'],
  },
  'b092': {
    name: 'B092 - Lame Sans Perforations',
    description: 'Lame professionnelle sans perforations pour applications spécifiques. Surface de lame continue pour montage sur systèmes propriétaires.',
    features: [
      'Sans perforations',
      'Surface continue',
      'Montage spécifique',
      'Acier Sheffield',
      'Usage spécialisé',
      'Qualité professionnelle'
    ],
    applications: ['Systèmes propriétaires', 'Applications spéciales', 'Montages personnalisés', 'Usage industriel'],
  },

  // =============================================================================
  // LAMES DE PRÉCISION - SÉRIE B1XX
  // =============================================================================
  'b111': {
    name: 'B111 - Lame de Précision Trapézoïdale',
    description: 'Lame de précision trapézoïdale pour cutters utilitaires. Géométrie optimisée pour une découpe nette et un changement facile.',
    features: [
      'Forme trapézoïdale',
      'Tranchant de précision',
      'Changement facile',
      'Acier Sheffield',
      'Double extrémité',
      'Économique'
    ],
    applications: ['Découpe générale', 'Carton', 'Emballage', 'Travaux d\'entrepôt'],
  },
  'b112': {
    name: 'B112 - Lame de Précision B112',
    description: 'Lame de précision professionnelle modèle B112. Qualité Sheffield pour découpe de haute précision.',
    features: [
      'Haute précision',
      'Qualité Sheffield',
      'Tranchant durable',
      'Usage professionnel',
      'Finition de qualité'
    ],
    applications: ['Découpe de précision', 'Applications professionnelles', 'Travaux détaillés', 'Usage industriel'],
  },
  'b113': {
    name: 'B113 - Lame de Précision B113',
    description: 'Lame de précision modèle B113 pour applications nécessitant un tranchant fin et durable. Acier Sheffield haute qualité.',
    features: [
      'Tranchant fin',
      'Durabilité élevée',
      'Acier Sheffield',
      'Précision supérieure',
      'Usage professionnel'
    ],
    applications: ['Travaux fins', 'Découpe de précision', 'Artisanat', 'Applications techniques'],
  },
  'b114': {
    name: 'B114 - Lame de Précision B114',
    description: 'Lame de précision B114 offrant un excellent rapport qualité-prix pour usage quotidien. Construction fiable et tranchant constant.',
    features: [
      'Excellent rapport qualité-prix',
      'Usage quotidien',
      'Construction fiable',
      'Tranchant constant',
      'Acier Sheffield'
    ],
    applications: ['Usage quotidien', 'Découpe générale', 'Bureau', 'Applications variées'],
  },
  'b141': {
    name: 'B141 - Lame Utilitaire Standard',
    description: 'Lame utilitaire standard modèle B141 pour cutters universels. Compatibilité large et performance fiable.',
    features: [
      'Standard universel',
      'Compatibilité large',
      'Performance fiable',
      'Acier Sheffield',
      'Qualité constante'
    ],
    applications: ['Cutters universels', 'Découpe générale', 'Applications standard', 'Usage polyvalent'],
  },
  'b142': {
    name: 'B142 - Lame Utilitaire Grande Taille',
    description: 'Lame utilitaire grande taille pour découpe de matériaux épais. Format agrandi pour plus de stabilité et de puissance de coupe.',
    features: [
      'Grande taille',
      'Stabilité accrue',
      'Pour matériaux épais',
      'Acier Sheffield renforcé',
      'Puissance de coupe',
      'Usage intensif'
    ],
    applications: ['Matériaux épais', 'Travaux lourds', 'Découpe industrielle', 'Applications exigeantes'],
  },
  'b143': {
    name: 'B143 - Lame Utilitaire B143',
    description: 'Lame utilitaire professionnelle B143. Qualité Sheffield pour des performances constantes et durables.',
    features: [
      'Qualité professionnelle',
      'Performances constantes',
      'Durabilité',
      'Acier Sheffield',
      'Polyvalence'
    ],
    applications: ['Usage professionnel', 'Découpe quotidienne', 'Applications industrielles', 'Polyvalent'],
  },
  'b144': {
    name: 'B144 - Lame Utilitaire B144',
    description: 'Lame utilitaire modèle B144 pour applications variées. Construction robuste et tranchant durable.',
    features: [
      'Construction robuste',
      'Tranchant durable',
      'Applications variées',
      'Acier Sheffield',
      'Fiabilité'
    ],
    applications: ['Applications variées', 'Découpe générale', 'Entrepôt', 'Production'],
  },
  'b145': {
    name: 'B145 - Lame Utilitaire B145',
    description: 'Lame utilitaire B145 offrant précision et robustesse. Idéale pour les environnements professionnels.',
    features: [
      'Précision et robustesse',
      'Environnement professionnel',
      'Acier Sheffield',
      'Performance fiable',
      'Qualité constante'
    ],
    applications: ['Environnements professionnels', 'Découpe de précision', 'Usage industriel', 'Applications exigeantes'],
  },
  'b146': {
    name: 'B146 - Lame Utilitaire B146',
    description: 'Lame utilitaire professionnelle B146 avec tranchant optimisé. Excellence Sheffield pour performances supérieures.',
    features: [
      'Tranchant optimisé',
      'Performances supérieures',
      'Excellence Sheffield',
      'Durabilité élevée',
      'Usage intensif'
    ],
    applications: ['Performances supérieures', 'Usage intensif', 'Applications professionnelles', 'Industrie'],
  },
  'b147': {
    name: 'B147 - Lame Utilitaire B147',
    description: 'Lame utilitaire B147 polyvalente pour diverses applications de découpe. Qualité Sheffield garantie.',
    features: [
      'Polyvalence',
      'Qualité Sheffield garantie',
      'Multiples applications',
      'Construction fiable',
      'Rapport qualité-prix'
    ],
    applications: ['Diverses applications', 'Polyvalent', 'Usage général', 'Professionnel et particulier'],
  },
  'b148': {
    name: 'B148 - Lame Utilitaire B148',
    description: 'Lame utilitaire B148 pour découpe générale. Fiabilité et durabilité pour un usage quotidien.',
    features: [
      'Découpe générale',
      'Fiabilité',
      'Durabilité',
      'Usage quotidien',
      'Acier Sheffield'
    ],
    applications: ['Découpe générale', 'Usage quotidien', 'Bureau', 'Entrepôt'],
  },
  'b149': {
    name: 'B149 - Lame Utilitaire B149',
    description: 'Lame utilitaire B149 avec performances constantes. Idéale pour les applications standardisées.',
    features: [
      'Performances constantes',
      'Applications standardisées',
      'Qualité uniforme',
      'Acier Sheffield',
      'Fiabilité'
    ],
    applications: ['Applications standardisées', 'Usage régulier', 'Production', 'Logistique'],
  },
  'b150': {
    name: 'B150 - Lame Utilitaire B150',
    description: 'Lame utilitaire B150 offrant un excellent équilibre entre coût et performance. Usage professionnel quotidien.',
    features: [
      'Équilibre coût/performance',
      'Usage quotidien',
      'Professionnel',
      'Acier Sheffield',
      'Économique'
    ],
    applications: ['Usage quotidien professionnel', 'Applications économiques', 'Découpe standard', 'Volume élevé'],
  },
  'b151': {
    name: 'B151 - Lame Utilitaire B151',
    description: 'Lame utilitaire B151 pour applications générales. Qualité Sheffield fiable pour tous types de découpe.',
    features: [
      'Applications générales',
      'Qualité Sheffield fiable',
      'Tous types de découpe',
      'Construction standard',
      'Polyvalence'
    ],
    applications: ['Applications générales', 'Découpe variée', 'Usage polyvalent', 'Professionnel et domestique'],
  },

  // =============================================================================
  // LAMES SUPPLÉMENTAIRES - TYPES DIVERS
  // =============================================================================
  'hswb1': {
    name: 'HSWB1 - Lame Sans Segment 25mm – Dentée',
    description: 'Lame cutter sans segment de 25mm avec tranchant denté pour travaux lourds. Acier Sheffield robuste.',
    features: ['Largeur 25mm', 'Tranchant denté', 'Sans segment', 'Usage intensif', 'Acier Sheffield'],
    applications: ['Travaux lourds', 'Matériaux fibreux épais', 'Sangles industrielles', 'Construction'],
  },
  'kb-5': {
    name: 'KB-5 - Lame de Précision KB-5',
    description: 'Lame de précision professionnelle KB-5 pour applications spécialisées. Qualité Sheffield.',
    features: ['Haute précision', 'Usage spécialisé', 'Qualité Sheffield', 'Tranchant durable'],
    applications: ['Applications spécialisées', 'Découpe de précision', 'Usage professionnel'],
  },
  'kb4-r5': {
    name: 'KB4-R/5 - Lame de Précision KB4-R/5',
    description: 'Lame de précision KB4-R/5 pour cutters professionnels. Construction robuste.',
    features: ['Précision élevée', 'Construction robuste', 'Qualité Sheffield'],
    applications: ['Découpe professionnelle', 'Applications de précision'],
  },
  'kb4-ns3': {
    name: 'KB4-NS/3 - Lame de Précision KB4-NS/3',
    description: 'Lame de précision KB4-NS/3 pour applications industrielles. Qualité Sheffield.',
    features: ['Précision industrielle', 'Qualité Sheffield', 'Usage professionnel'],
    applications: ['Applications industrielles', 'Découpe de précision'],
  },
  'kb4-ws3': {
    name: 'KB4-WS/3 - Lame de Précision KB4-WS/3',
    description: 'Lame de précision KB4-WS/3 pour cutters professionnels.',
    features: ['Précision élevée', 'Qualité Sheffield', 'Usage professionnel'],
    applications: ['Découpe professionnelle', 'Applications techniques'],
  },
  'b581': {
    name: 'B581 - Lame Industrielle B581',
    description: 'Lame industrielle B581 pour applications professionnelles. Acier Sheffield haute qualité.',
    features: ['Usage industriel', 'Qualité Sheffield', 'Durabilité élevée'],
    applications: ['Applications industrielles', 'Découpe professionnelle'],
  },
  'b657': {
    name: 'B657 - Lame Industrielle B657',
    description: 'Lame industrielle B657 pour usage professionnel. Construction robuste.',
    features: ['Usage industriel', 'Qualité Sheffield', 'Construction robuste'],
    applications: ['Applications industrielles', 'Usage professionnel'],
  },
  '2cs1': {
    name: '2CS1 - Lame Industrielle 2CS1',
    description: 'Lame industrielle 2CS1 pour applications spécialisées. Qualité Sheffield.',
    features: ['Usage spécialisé', 'Qualité Sheffield', 'Durabilité'],
    applications: ['Applications spécialisées', 'Usage industriel'],
  },
  'b084075': {
    name: 'B084.075 - Lame de Précision B084.075',
    description: 'Lame de précision B084.075 pour applications techniques. Qualité Sheffield.',
    features: ['Haute précision', 'Qualité Sheffield', 'Usage technique'],
    applications: ['Applications techniques', 'Découpe de précision'],
  },
  'b204': {
    name: 'B204 - Lame Classique',
    description: 'Lame classique B204 pour usage quotidien. Design traditionnel avec qualité Sheffield.',
    features: ['Design classique', 'Usage quotidien', 'Qualité Sheffield'],
    applications: ['Usage quotidien', 'Découpe générale', 'Applications standard'],
  },
  'b207-2': {
    name: 'B207 L - Lame Trapézoïdale Allongée',
    subtitle: 'Lame trapézoïdale allongée',
    description: 'Version allongée de la série B207. Zone de coupe plus large que le trapèze standard. Pour grands matériaux et surfaces larges.',
    features: ['Version allongée du B207', 'Épaisseur 0,63mm', 'Large ligne de coupe', 'Acier carbone Sheffield'],
    applications: ['Grands matériaux', 'Pose de sols', 'Construction'],
    seo: {
      title: 'B207 L Lame Trapézoïdale Allongée | Alya Blade',
      description: 'B207 L lame trapézoïdale allongée. Large zone de coupe. Acier Sheffield, HRC 58-62. Distributeur autorisé.',
      keywords: ['lame trapézoïdale allongée', 'B207 L', 'lame longue cutter', 'trapézoïdale allongée'],
    },
    benefits: [
      { title: 'Large Zone de Coupe', description: 'Longueur de lame supérieure au B207 standard, coupe plus de matériau en un seul passage.', icon: 'Maximize' },
      { title: 'Même Qualité', description: 'Toutes les normes de qualité de la série B207 : acier Sheffield, HRC 58-62.', icon: 'Award' },
    ],
    longDescription: `<p>La lame trapézoïdale B207 L (Longue) est la version allongée de la série B207 standard. Elle offre une ligne de coupe plus large, permettant de couper plus de matériau en un seul passage.</p><p>Particulièrement utilisée pour l'ouverture de grands cartons, la coupe de films d'emballage larges, la pose de moquette sur grandes surfaces et les opérations d'emballage industriel, offrant un travail plus efficace par rapport au format standard.</p>`,
  },
  'b207-3': {
    name: 'B207 XXL - Lame Trapézoïdale Extra Longue',
    subtitle: 'Lame trapézoïdale extra longue',
    description: 'Version extra longue (XXL) de la série B207. Zone de coupe maximale dans la famille trapézoïdale. Pour échelle industrielle.',
    features: ['Version extra longue du B207', 'Épaisseur 0,63mm', 'Ligne de coupe maximale', 'Résistance industrielle', 'Acier carbone Sheffield'],
    applications: ['Coupe industrielle', 'Grand emballage', 'Projets de construction'],
    seo: {
      title: 'B207 XXL Lame Trapézoïdale Extra Longue | Alya Blade',
      description: 'B207 XXL lame trapézoïdale extra longue. Zone de coupe maximale. Acier Sheffield, HRC 58-62. Distributeur autorisé.',
      keywords: ['lame trapézoïdale extra longue', 'B207 XXL', 'lame extra longue', 'trapézoïdale industrielle'],
    },
    benefits: [
      { title: 'Coupe Maximale', description: 'La ligne de coupe la plus large de la famille trapézoïdale : efficacité maximale en un seul passage.', icon: 'Maximize' },
      { title: 'Résistance Industrielle', description: 'Épaisseur 0,63mm + corps allongé : fiable dans les applications intensives.', icon: 'Shield' },
    ],
    longDescription: `<p>La lame trapézoïdale B207 XXL extra longue est le plus grand produit standard de la famille trapézoïdale. Conçue pour offrir une efficacité maximale dans les applications de coupe à échelle industrielle.</p><p>Avec les trapézoïdales 100×19mm, elle figure parmi les produits ayant la ligne de coupe la plus longue. Adaptée à une utilisation intensive continue dans les grands ateliers, usines et installations industrielles.</p>`,
  },
  'b213': {
    name: 'B213 - Lame Trapézoïdale Compacte',
    subtitle: 'Lame trapézoïdale compacte 61×12,5mm',
    description: 'Lame trapézoïdale compacte 61×12,5×0,63mm, 1 trou. Pour espaces restreints, électronique et travaux de précision. Qualité Sheffield.',
    features: ['Taille compacte 61×12,5×0,63mm', '1 trou de montage', 'Compatible outils spéciaux', 'Acier carbone Sheffield'],
    applications: ['Coupe en espaces restreints', 'Électronique', 'Travail de détail', 'Modélisme'],
    seo: {
      title: 'B213 Lame Trapézoïdale Compacte 61×12,5mm | Alya Blade',
      description: 'B213 lame trapézoïdale compacte 61×12,5×0,63mm. Espaces restreints, électronique, coupe de précision. Distributeur autorisé.',
      keywords: ['lame trapézoïdale compacte', 'B213', 'mini lame trapézoïdale', 'lame 61mm', 'lame compacte'],
    },
    benefits: [
      { title: 'Format Compact', description: 'Petite taille 61×12,5mm pour une manœuvrabilité confortable dans les espaces étroits.', icon: 'Minimize' },
      { title: 'Coupe de Précision', description: 'Coupe contrôlée et détaillée avec la petite forme trapézoïdale.', icon: 'Target' },
    ],
    longDescription: `<p>La lame trapézoïdale compacte B213 est une version miniaturisée de la forme trapézoïdale standard. Ses dimensions de 61×12,5mm la rendent adaptée à une utilisation dans les espaces restreints.</p><p>Avec une épaisseur standard de 0,63mm et un design de montage à trou unique, elle est utilisée comme lame de rechange dans les outils à main spéciaux et les cutters compacts. Une forme trapézoïdale spécialisée utilisée pour la coupe de composants électroniques, le dénudage de câbles fins et les travaux de détail.</p>`,
    availableSizes: [
      '61×12.5×0.63mm — 1 Trou',
    ],
  },
  'b218': {
    name: 'B218 - Lame Trapézoïdale Spéciale Moyenne',
    subtitle: 'Taille spéciale 71×17mm',
    description: 'Lame trapézoïdale spéciale 71×17×0,63mm avec trou 1×6mm. Pour outils non standard et machines industrielles.',
    features: ['Taille spéciale 71×17×0,63mm', 'Trou 1×6mm', 'Ligne de coupe étendue', 'Acier carbone Sheffield'],
    applications: ['Machines industrielles', 'Systèmes d\'automatisation', 'Outils spéciaux'],
    seo: {
      title: 'B218 Lame Trapézoïdale Spéciale 71×17mm | Alya Blade',
      description: 'B218 lame trapézoïdale spéciale 71×17×0,63mm. Machines industrielles, automatisation. Distributeur autorisé.',
      keywords: ['lame trapézoïdale spéciale', 'B218', 'lame 71mm', 'lame machines'],
    },
    benefits: [
      { title: 'Ligne de Coupe Étendue', description: 'Longueur de 71mm offrant 18% de zone de coupe supplémentaire par rapport au trapèze standard de 60mm.', icon: 'ArrowRight' },
      { title: 'Compatibilité Spéciale', description: 'Largeur de 17mm pour une adaptation parfaite aux outils de marques spécifiques.', icon: 'Check' },
    ],
    longDescription: `<p>La lame trapézoïdale spéciale B218 possède une largeur de 17mm au lieu des 19mm standard, ce qui en fait un produit de taille intermédiaire. Avec 71mm de longueur, elle offre une ligne de coupe plus longue que les trapèzes standard.</p><p>Son design à trou 1×6mm est adapté à une utilisation dans des supports spéciaux et des machines industrielles. Utilisée comme lame de rechange dans les unités de coupe de cutters de certaines marques et de systèmes d'automatisation.</p>`,
    availableSizes: [
      '71×17×0.63mm — 1×6mm Trou',
    ],
  },
  'b214': {
    name: 'B214 - Micro Lame Trapézoïdale',
    subtitle: 'Micro lame trapézoïdale 27,6×9mm',
    description: 'Micro lame trapézoïdale ultra-compacte 27,6×9×0,43mm avec trous 3×3,5mm. Pour électronique, modélisme, laboratoire.',
    features: ['Taille ultra-compacte 27,6×9×0,43mm', 'Trois trous 3×3,5mm', 'Profil fin 0,43mm', 'Pour porte-lames miniatures'],
    applications: ['Assemblage électronique', 'Modélisme', 'Laboratoire', 'Dispositifs médicaux'],
    seo: {
      title: 'B214 Micro Lame Trapézoïdale 27,6×9mm | Alya Blade',
      description: 'B214 micro lame trapézoïdale 27,6×9×0,43mm. Électronique, modélisme, laboratoire. Distributeur autorisé.',
      keywords: ['micro lame trapézoïdale', 'B214', 'lame miniature', 'lame 27mm', 'lame de précision'],
    },
    benefits: [
      { title: 'Ultra Compacte', description: '27,6×9mm : la plus petite lame trapézoïdale, adaptation parfaite aux outils miniatures.', icon: 'Minimize' },
      { title: 'Contrôle de Précision', description: 'Contrôle de coupe au micron avec petite taille et profil fin.', icon: 'Target' },
    ],
    longDescription: `<p>La micro lame trapézoïdale B214 est le produit le plus petit de la famille trapézoïdale. Ses dimensions de 27,6×9mm sont conçues pour les outils à main miniatures, les dispositifs de coupe de précision et les applications industrielles spécialisées.</p><p>Avec une épaisseur de 0,43mm et une configuration à trois trous de 3×3,5mm, elle se monte sur des systèmes de support spécialisés. Utilisée dans l'assemblage électronique, la fabrication de dispositifs médicaux, le modélisme et les opérations de laboratoire nécessitant une micro-coupe.</p>`,
    availableSizes: [
      '27.6×9×0.43mm — 3×3.5mm Trous',
    ],
  },
  'b226': {
    name: 'B226 - Lame Supaslit',
    description: 'Lame Supaslit B226 pour applications de refendage. Design spécialisé.',
    features: ['Design Supaslit', 'Refendage spécialisé', 'Qualité Sheffield'],
    applications: ['Refendage', 'Découpe spécialisée'],
  },
  'yuvarlatilmi': {
    name: 'Lame Crochet à Pointe Arrondie',
    subtitle: 'Lame crochet sécurisée à pointe arrondie',
    description: 'Lame crochet à pointe arrondie. 52×19×0,6mm, 2 encoches, 3 trous. Pointe arrondie au lieu de pointe effilée : risque minimal d\'endommagement du matériau sous-jacent. Découpe axée sur la sécurité.',
    features: ['Pointe arrondie — sécurité d\'abord', 'Risque minimal d\'endommagement du matériau sous-jacent', '52×19×0,6mm taille standard crochet', '2 encoches, 3 trous', 'Qualité Sheffield Durham Duplex'],
    applications: ['Ouverture sécurisée d\'emballages', 'Opérations de commerce de détail', 'Sécurité en entrepôt', 'Manipulation de produits de valeur'],
    seo: {
      title: 'Lame Crochet Pointe Arrondie 52×19mm | Lame Crochet Sécurisée | Alya Blade',
      description: 'Lame crochet à pointe arrondie. 52×19×0,6mm, ouverture sécurisée d\'emballages. Sans endommagement du matériau. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame crochet pointe arrondie', 'lame crochet sécurisée', 'lame crochet arrondie', 'lame ouverture emballage', 'lame sans dommage'],
    },
    benefits: [
      { title: 'Pointe Arrondie', description: 'Risque minimal d\'endommagement du matériau : conception axée sur la sécurité.', icon: 'ShieldCheck' },
      { title: 'Protection Produit', description: 'Ouvre les emballages de produits de valeur sans rayure ni perforation.', icon: 'Diamond' },
      { title: 'Sécurité Opérateur', description: 'La pointe arrondie réduit le risque d\'accident.', icon: 'Heart' },
    ],
    longDescription: `<p>La lame crochet à pointe arrondie est la version axée sur la sécurité du modèle B208 standard. Au lieu d'une pointe effilée, elle présente un profil à pointe arrondie qui minimise le risque d'endommagement des couches ou produits sous-jacents lors de la découpe.</p><p>Fabriquée en 52×19×0,6mm avec 2 encoches et 3 trous. Idéale pour les opérations d'ouverture sécurisée d'emballages dans les environnements d'entrepôt, de logistique et de commerce de détail.</p>`,
  },

  // =============================================================================
  // COUTEAUX DE SÉCURITÉ - SÉRIE AVANCÉE
  // =============================================================================
  'h101': {
    name: 'H101 - OLFA RTY-1/G Cutter Rotatif 28mm',
    description: 'Cutter rotatif OLFA RTY-1/G avec lame circulaire 28mm. Idéal pour découpe de tissus et matériaux souples.',
    features: ['Lame rotative 28mm', 'Design OLFA', 'Découpe de tissus', 'Prise ergonomique'],
    applications: ['Couture', 'Quilting', 'Découpe de tissus', 'Artisanat'],
  },
  'h102': {
    name: 'H102 - OLFA RTY-2/G Cutter Rotatif 45mm',
    description: 'Cutter rotatif OLFA RTY-2/G avec lame circulaire 45mm. Format standard pour découpe professionnelle.',
    features: ['Lame rotative 45mm', 'Design OLFA', 'Format standard', 'Usage professionnel'],
    applications: ['Couture professionnelle', 'Quilting', 'Découpe de tissus épais'],
  },
  'h501-001-t03': {
    name: 'H501 001 T03 - Cutter à Lame Sécable 18mm',
    description: 'Cutter professionnel à lame sécable 18mm. Design classique avec changement de lame facile.',
    features: ['Lame sécable 18mm', 'Changement facile', 'Design classique', 'Qualité Sheffield'],
    applications: ['Découpe générale', 'Emballage', 'Travaux de bureau'],
  },
  'h502-001-t03': {
    name: 'H502 001 T03 - Cutter à Lame Sécable 18mm Amélioré',
    description: 'Version améliorée du cutter à lame sécable 18mm. Prise ergonomique renforcée.',
    features: ['Lame sécable 18mm', 'Prise ergonomique', 'Version améliorée', 'Qualité Sheffield'],
    applications: ['Découpe générale', 'Usage intensif', 'Applications professionnelles'],
  },
  'h503-001-t03': {
    name: 'H503 001 T03 - Cutter Professionnel',
    description: 'Cutter professionnel pour usage industriel. Construction robuste.',
    features: ['Usage industriel', 'Construction robuste', 'Qualité Sheffield'],
    applications: ['Usage industriel', 'Découpe professionnelle'],
  },
  'h504-001-t03': {
    name: 'H504 001 T03 - Cutter à Lame Sécable Premium',
    description: 'Cutter premium à lame sécable pour usage professionnel intensif.',
    features: ['Qualité premium', 'Usage intensif', 'Lame sécable', 'Qualité Sheffield'],
    applications: ['Usage professionnel', 'Découpe intensive'],
  },
  'h506': {
    name: 'H506 - OLFA ML 18mm Cutter Métal',
    description: 'Cutter OLFA ML en métal moulé avec lame 18mm. Construction durable pour usage intensif.',
    features: ['Corps métal moulé', 'Lame 18mm', 'Design OLFA', 'Usage intensif'],
    applications: ['Usage intensif', 'Construction', 'Applications industrielles'],
  },
  'h507': {
    name: 'H507 - OLFA NL-AL Cutter Aluminium',
    description: 'Cutter OLFA NL-AL en aluminium léger. Design professionnel.',
    features: ['Corps aluminium', 'Léger', 'Design OLFA', 'Usage professionnel'],
    applications: ['Usage professionnel', 'Découpe quotidienne'],
  },
  'h508': {
    name: 'H508 - OLFA L-2 Cutter à Verrouillage',
    description: 'Cutter OLFA L-2 avec mécanisme de verrouillage de lame. Sécurité améliorée.',
    features: ['Verrouillage de lame', 'Sécurité améliorée', 'Design OLFA'],
    applications: ['Usage sécurisé', 'Applications professionnelles'],
  },
  'h512': {
    name: 'H512 001 S04 - Couteau de Sécurité Compact',
    description: 'Couteau de sécurité compact pour applications légères. Format de poche.',
    features: ['Format compact', 'Applications légères', 'Qualité Sheffield'],
    applications: ['Applications légères', 'Usage quotidien'],
  },
  'h525': {
    name: 'H525 001 Z01 - Couteau de Sécurité Robuste',
    description: 'Couteau de sécurité robuste pour usage intensif. Construction renforcée.',
    features: ['Construction robuste', 'Usage intensif', 'Qualité Sheffield'],
    applications: ['Usage intensif', 'Applications industrielles'],
  },
  'h531-001-z01': {
    name: 'H531 001 Z01 - AUTOMATIC TRIMMING KNIFE',
    description: 'Couteau de découpe automatique en métal moulé. Mécanisme de rétraction automatique.',
    features: ['Rétraction automatique', 'Corps métal moulé', 'Découpe automatique', 'Qualité Sheffield'],
    applications: ['Découpe automatique', 'Applications industrielles'],
  },
  'h600-001-t03': {
    name: 'H600 001 T03 - Cutter 9mm Compact',
    description: 'Cutter compact à lame sécable 9mm. Idéal pour travaux de précision.',
    features: ['Lame 9mm', 'Format compact', 'Travaux de précision', 'Qualité Sheffield'],
    applications: ['Travaux de précision', 'Artisanat', 'Bureau'],
  },
  'h603': {
    name: 'H603 - OLFA ML 9mm Cutter Métal',
    description: 'Cutter OLFA ML 9mm en métal moulé. Design professionnel compact.',
    features: ['Corps métal moulé', 'Lame 9mm', 'Design OLFA', 'Compact'],
    applications: ['Travaux de précision', 'Usage professionnel'],
  },
  'h605-001-t03': {
    name: 'H605 001 T03 - Cutter 9mm Professionnel',
    description: 'Cutter professionnel 9mm pour travaux détaillés. Qualité Sheffield.',
    features: ['Lame 9mm', 'Usage professionnel', 'Travaux détaillés', 'Qualité Sheffield'],
    applications: ['Travaux détaillés', 'Applications professionnelles'],
  },
  'h606': {
    name: 'H606 001 S04 - Couteau de Sécurité 9mm',
    description: 'Couteau de sécurité compact avec lame 9mm. Design ergonomique.',
    features: ['Lame 9mm', 'Design ergonomique', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Découpe sécurisée', 'Applications légères'],
  },
  'h907': {
    name: 'H907 003 T03 - Couteau Slitter de Sécurité',
    description: 'Couteau slitter de sécurité pour découpe de films et emballages.',
    features: ['Design slitter', 'Sécurité', 'Découpe de films', 'Qualité Sheffield'],
    applications: ['Découpe de films', 'Emballage', 'Logistique'],
  },
  'h907-003-t03b': {
    name: 'H907 003 T03B - SUPASLIT avec Capot de Protection',
    description: 'Couteau Supaslit avec capot de protection intégré. Sécurité maximale.',
    features: ['Capot de protection', 'Design Supaslit', 'Sécurité maximale', 'Qualité Sheffield'],
    applications: ['Découpe sécurisée', 'Environnements industriels'],
  },
  'h907-012-a03': {
    name: 'H907 012 A03 - POLYSAFE PLUS Film Cutter',
    description: 'Couteau Polysafe Plus pour découpe de films avec sécurité intégrée.',
    features: ['Design Polysafe', 'Découpe de films', 'Sécurité intégrée', 'Qualité Sheffield'],
    applications: ['Découpe de films', 'Emballage', 'Logistique sécurisée'],
  },
  'h909': {
    name: 'H909 - OLFA TK-1 Cutter de Poche',
    description: 'Cutter de poche OLFA TK-1 compact et pratique. Idéal pour usage quotidien.',
    features: ['Format de poche', 'Compact', 'Design OLFA', 'Usage quotidien'],
    applications: ['Usage quotidien', 'Port au travail', 'Applications légères'],
  },
  'h911': {
    name: 'H911 - OLFA MARU Cutter Rotatif',
    description: 'Cutter rotatif OLFA MARU pour découpe circulaire. Design innovant.',
    features: ['Découpe rotative', 'Design innovant', 'Design OLFA'],
    applications: ['Découpe circulaire', 'Artisanat', 'Applications créatives'],
  },
  'h913': {
    name: 'H913 007 S02 - Couteau de Sécurité Polyvalent',
    description: 'Couteau de sécurité polyvalent pour diverses applications.',
    features: ['Polyvalent', 'Sécurité', 'Usage varié', 'Qualité Sheffield'],
    applications: ['Applications variées', 'Usage polyvalent'],
  },
  'h913-008-t03': {
    name: 'H913 008 T03 - POLYSLIT Couteau de Sécurité',
    description: 'Couteau de sécurité Polyslit pour découpe de films et emballages.',
    features: ['Design Polyslit', 'Sécurité', 'Découpe de films', 'Qualité Sheffield'],
    applications: ['Découpe de films', 'Emballage'],
  },
  'h914-001-a03': {
    name: 'H914 001 A03 - SPRINGER KNIFE Main Gauche',
    description: 'Couteau de sécurité Springer pour gauchers. Mécanisme à ressort.',
    features: ['Pour gauchers', 'Mécanisme à ressort', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Utilisateurs gauchers', 'Applications industrielles'],
  },
  'h914-002-a03': {
    name: 'H914 002 A03 - SPRINGER KNIFE Standard',
    description: 'Couteau de sécurité Springer avec mécanisme à ressort. Construction métal.',
    features: ['Mécanisme à ressort', 'Construction métal', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Applications industrielles', 'Usage sécurisé'],
  },
  'h915': {
    name: 'H915 003 A02 - Couteau de Sécurité Ergonomique',
    description: 'Couteau de sécurité ergonomique pour usage prolongé.',
    features: ['Design ergonomique', 'Usage prolongé', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Usage prolongé', 'Applications industrielles'],
  },
  'h917-001-t10': {
    name: 'H917 001 T10 - FISH KNIFE Ouvre-Sac',
    description: 'Couteau Fish Knife pour ouverture de sacs et emballages. Design sécurisé.',
    features: ['Design Fish Knife', 'Ouverture de sacs', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Ouverture de sacs', 'Logistique', 'Entrepôt'],
  },
  'h918-001-t10': {
    name: 'H918 001 T10 - FISH KNIFE Version Améliorée',
    description: 'Version améliorée du Fish Knife pour ouverture de sacs.',
    features: ['Version améliorée', 'Ouverture de sacs', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Ouverture de sacs', 'Logistique'],
  },
  'h941': {
    name: 'H941 - OLFA HOK-1 Cutter Crochet',
    description: 'Cutter crochet OLFA HOK-1 pour découpe de matériaux souples.',
    features: ['Lame crochet', 'Découpe sécurisée', 'Design OLFA'],
    applications: ['Découpe de films', 'Matériaux souples', 'Logistique'],
  },
  'h944-001-t03': {
    name: 'H944 001 T03 - AMBI SAFE SPRING Couteau Ambidextre',
    description: 'Couteau de sécurité ambidextre avec mécanisme à ressort. Usage gauche ou droite.',
    features: ['Ambidextre', 'Mécanisme à ressort', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Usage universel', 'Applications industrielles'],
  },
  'h946-001': {
    name: 'H946 001 - U-CUT Couteau Crochet',
    description: 'Couteau U-CUT avec lame crochet pour découpe sécurisée.',
    features: ['Lame crochet', 'Design U-CUT', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Découpe de films', 'Ouverture d\'emballages'],
  },
  'is-guvenligi-muhafaza-atik-kutusu': {
    name: 'Conteneur d\'Élimination de Lames Usagées',
    description: 'Conteneur de sécurité pour collecte et élimination de lames usagées. Conforme aux normes de sécurité au travail.',
    features: ['Collecte sécurisée', 'Conforme normes sécurité', 'Construction durable', 'Capacité standard'],
    applications: ['Élimination de lames', 'Sécurité au travail', 'Conformité réglementaire'],
  },
  'kk01': {
    name: 'KK01 - Couteau de Sécurité KK01',
    description: 'Couteau de sécurité KK01 pour applications industrielles. Qualité Sheffield.',
    features: ['Sécurité', 'Usage industriel', 'Qualité Sheffield'],
    applications: ['Applications industrielles', 'Usage professionnel'],
  },
  'olfa-sk-12': {
    name: 'OLFA SK-12 - Couteau Inox Certifié NSF',
    description: 'Couteau de sécurité OLFA SK-12 en acier inoxydable certifié NSF pour industrie alimentaire.',
    features: ['Acier inoxydable', 'Certifié NSF', 'Industrie alimentaire', 'Design OLFA'],
    applications: ['Industrie alimentaire', 'Environnements hygiéniques', 'Production certifiée'],
  },
  'olfa-sk-15': {
    name: 'OLFA SK-15 - Couteau de Sécurité Alimentaire',
    description: 'Couteau de sécurité OLFA SK-15 pour industrie alimentaire et environnements sensibles.',
    features: ['Sécurité alimentaire', 'Design OLFA', 'Hygiénique'],
    applications: ['Industrie alimentaire', 'Environnements sensibles'],
  },
  'saka01t': {
    name: 'SAKA01T - Couteau de Sécurité Compact',
    description: 'Couteau de sécurité compact SAKA01T. Design ergonomique.',
    features: ['Compact', 'Ergonomique', 'Sécurité', 'Qualité Sheffield'],
    applications: ['Usage quotidien', 'Applications légères'],
  },
  'sk01': {
    name: 'SK01 - Couteau de Sécurité SK01',
    description: 'Couteau de sécurité SK01 pour applications industrielles.',
    features: ['Sécurité', 'Usage industriel', 'Qualité Sheffield'],
    applications: ['Applications industrielles', 'Usage professionnel'],
  },
  'suka01': {
    name: 'SUKA01 - Couteau à Crochet Coulissant',
    description: 'Couteau à crochet avec mécanisme coulissant pour découpe sécurisée.',
    features: ['Crochet coulissant', 'Découpe sécurisée', 'Qualité Sheffield'],
    applications: ['Découpe de films', 'Ouverture d\'emballages'],
  },
  'suka02': {
    name: 'SUKA02 - Couteau de Sécurité SUKA02',
    description: 'Couteau de sécurité SUKA02 pour applications variées.',
    features: ['Sécurité', 'Polyvalent', 'Qualité Sheffield'],
    applications: ['Applications variées', 'Usage professionnel'],
  },
  'olfa': {
    name: 'OLFA PRC-3/C - Cutter Rotatif Compass',
    description: 'Cutter rotatif compass OLFA PRC-3/C pour découpe circulaire. Design innovant.',
    features: ['Découpe circulaire', 'Design compass', 'Design OLFA'],
    applications: ['Découpe circulaire', 'Artisanat', 'Applications créatives'],
  },
  'olfa-2': {
    name: 'OLFA 12.5mm CS-5 - Lame de Compass',
    description: 'Lame de rechange 12.5mm pour cutter compass OLFA CS-5.',
    features: ['Lame 12.5mm', 'Compatible CS-5', 'Design OLFA'],
    applications: ['Découpe circulaire', 'Artisanat'],
  },
  'olfa-3': {
    name: 'OLFA SK-10 - Couteau de Sécurité Compact',
    description: 'Couteau de sécurité compact OLFA SK-10 pour usage quotidien.',
    features: ['Compact', 'Sécurité', 'Design OLFA', 'Usage quotidien'],
    applications: ['Usage quotidien', 'Applications légères'],
  },

  // =============================================================================
  // LAMES D'ÉBAVURAGE ET HOBBY
  // =============================================================================
  'p1-a': {
    name: 'P1-A - Couteau d\'Ébavurage à Vis Allen',
    description: 'Couteau d\'ébavurage/hobby avec système de fixation à vis Allen. Pour travaux de finition.',
    features: ['Fixation vis Allen', 'Ébavurage', 'Travaux de finition', 'Qualité Sheffield'],
    applications: ['Ébavurage', 'Finition', 'Travaux de précision'],
  },
  'p1-t': {
    name: 'P1-T - Couteau d\'Ébavurage à Vis Rotative',
    description: 'Couteau d\'ébavurage/hobby avec système de fixation à vis rotative.',
    features: ['Fixation vis rotative', 'Ébavurage', 'Changement de lame facile'],
    applications: ['Ébavurage', 'Travaux hobby', 'Finition'],
  },
  'p2-a': {
    name: 'P2-A - Couteau d\'Ébavurage Pro à Vis Allen',
    description: 'Couteau d\'ébavurage professionnel avec fixation à vis Allen.',
    features: ['Version professionnelle', 'Fixation vis Allen', 'Ébavurage', 'Qualité Sheffield'],
    applications: ['Ébavurage professionnel', 'Finition industrielle'],
  },
  'p2-t': {
    name: 'P2-T - Couteau d\'Ébavurage Pro à Vis Rotative',
    description: 'Couteau d\'ébavurage professionnel avec fixation à vis rotative.',
    features: ['Version professionnelle', 'Fixation vis rotative', 'Changement facile'],
    applications: ['Ébavurage professionnel', 'Applications industrielles'],
  },
  'p9-ss': {
    name: 'P9-SS - Couteau d\'Ébavurage à Double Fente',
    description: 'Couteau d\'ébavurage/hobby avec système de fixation à double fente.',
    features: ['Double fente', 'Fixation sécurisée', 'Ébavurage', 'Qualité Sheffield'],
    applications: ['Ébavurage', 'Travaux hobby', 'Applications techniques'],
  },
  'ws-1': {
    name: 'WS-1 - Station de Travail Ébavurage/Hobby',
    description: 'Station de travail complète pour ébavurage et travaux hobby. Kit complet.',
    features: ['Station complète', 'Kit ébavurage', 'Multiple outils', 'Qualité Sheffield'],
    applications: ['Atelier', 'Travaux hobby', 'Ébavurage multi-applications'],
  },
  'f01': {
    name: 'F01 - Lame d\'Ébavurage Universelle',
    description: 'Lame d\'ébavurage universelle type F01. Compatible avec la plupart des manches.',
    features: ['Universelle', 'Compatible multi-manches', 'Ébavurage', 'Qualité Sheffield'],
    applications: ['Ébavurage universel', 'Travaux de finition'],
  },
  'f21': {
    name: 'F21 - Lame d\'Ébavurage Courte',
    description: 'Lame d\'ébavurage courte type F21 pour accès restreints.',
    features: ['Format court', 'Accès restreint', 'Ébavurage', 'Qualité Sheffield'],
    applications: ['Espaces restreints', 'Ébavurage de précision'],
  },
  'f22': {
    name: 'F22 - Lame d\'Ébavurage Robuste',
    description: 'Lame d\'ébavurage robuste type F22 pour matériaux durs.',
    features: ['Construction robuste', 'Matériaux durs', 'Durabilité', 'Qualité Sheffield'],
    applications: ['Matériaux durs', 'Ébavurage intensif'],
  },
  'f03': {
    name: 'F03 - Lame d\'Ébavurage Pointue',
    description: 'Lame d\'ébavurage pointue type F03 pour travaux de précision.',
    features: ['Pointe fine', 'Précision', 'Travaux détaillés', 'Qualité Sheffield'],
    applications: ['Travaux de précision', 'Détails fins'],
  },
  'f04': {
    name: 'F04 - Lame d\'Ébavurage à Bout Rond',
    description: 'Lame d\'ébavurage à bout rond type F04 pour surfaces arrondies.',
    features: ['Bout rond', 'Surfaces arrondies', 'Ébavurage doux', 'Qualité Sheffield'],
    applications: ['Surfaces arrondies', 'Ébavurage doux'],
  },
  'g01': {
    name: 'G01 - Lame d\'Ébavurage G01 Universelle',
    description: 'Lame d\'ébavurage universelle type G01. Polyvalente.',
    features: ['Universelle', 'Polyvalente', 'Ébavurage', 'Qualité Sheffield'],
    applications: ['Ébavurage universel', 'Applications variées'],
  },

  // =============================================================================
  // COUTEAUX DE MACHINE - ROTATIF & DÖNER
  // =============================================================================
  'doner-bicak-100mm': {
    name: 'Lame Rotative 100mm',
    subtitle: 'Lame rotative pour machines de découpe',
    description: 'Lame rotative professionnelle de 100mm de diamètre. Acier inoxydable, HRC 56-58. Conforme FDA et USDA pour l\'industrie alimentaire.',
    shortDescription: 'Lame rotative 100mm en acier inoxydable, qualité alimentaire.',
    features: ['Acier inoxydable', 'Tranchant précis', 'Nettoyage facile', 'Conforme FDA'],
    applications: ['Découpe rotative', 'Découpe de viande', 'Industrie alimentaire'],
    seo: {
      title: 'Lame Rotative 100mm | Alya Blade',
      description: 'Lame rotative 100mm en acier inoxydable, HRC 56-58. Conforme FDA/USDA. Distributeur autorisé.',
      keywords: ['lame rotative 100mm', 'lame döner', 'lame découpe viande', 'lame alimentaire'],
    },
  },

  // =============================================================================
  // COUTEAUX DE MACHINE - THERMOFORMAGE & EMBALLAGE SOUS VIDE
  // =============================================================================
  'vakum-paketleme-bicak': {
    name: 'Lame d\'Emballage Sous Vide',
    subtitle: 'Acier Sheffield — Thermoformage & MAP',
    description: 'Lame professionnelle pour machines d\'emballage sous vide et thermoformage. Acier Sheffield HRC 58-60, finition alimentaire Ra ≤0.4 µm. Compatible Multivac, Tiromat, GEA, Ulma, Sealpac, Webomatic.',
    features: [
      'Acier Sheffield haute teneur en carbone',
      'Dureté HRC 58-60',
      'Finition alimentaire Ra ≤0.4 µm',
      'Conforme HACCP et BRC',
      'Usinage CNC de précision',
      'Compatible 10+ marques de machines'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Emballage MAP (Atmosphère Modifiée)', 'Industrie alimentaire — viande, fromage, plats préparés', 'Emballage dispositifs médicaux'],
    seo: {
      title: 'Lame Emballage Sous Vide | Couteau Thermoformage | Acier Sheffield',
      description: 'Lame professionnelle pour emballage sous vide et thermoformage. Acier Sheffield HRC 58-60, qualité alimentaire Ra ≤0.4 µm. Compatible Multivac, Tiromat, GEA, Ulma, Sealpac. Fabricant certifié ISO 9001.',
      keywords: ['lame emballage sous vide', 'couteau thermoformage', 'lame machine emballage', 'lame Multivac', 'lame Tiromat', 'couteau emballage alimentaire', 'lame MAP', 'lame vacuum packaging', 'couteau machine emballage sous vide', 'lame industrielle emballage'],
    },
    benefits: [
      { title: 'Dureté HRC 58-60', description: 'Tranchant durable et durée de vie 3x grâce au traitement thermique en atmosphère contrôlée', icon: 'Shield' },
      { title: 'Surface Alimentaire', description: 'Rugosité Ra ≤0,4 µm — découpe hygiénique conforme HACCP et BRC', icon: 'CheckCircle' },
      { title: 'Large Compatibilité Machines', description: 'Compatible avec 10+ marques dont Multivac, Tiromat, GEA, Ulma, Sealpac', icon: 'Settings' },
    ],
    longDescription: `<p>Cette lame professionnelle pour machines d'emballage sous vide (MAP — Modified Atmosphere Packaging) est usinée CNC avec précision à partir d'acier Sheffield. La dureté HRC 58-60 Rockwell est obtenue par traitement thermique en four à atmosphère contrôlée.</p>
<p>Offre une qualité de surface conforme aux normes HACCP et BRC pour l'industrie alimentaire. La rugosité Ra ≤0,4 µm empêche l'adhérence des particules alimentaires sur la lame.</p>
<p><strong>Marques de Machines Compatibles :</strong> Multivac, Tiromat, Opack, Betapak, GEA CFS, Alcan, Ulma Packaging, Variovac, Sealpac, Webomatic, Henkelman.</p>
<p>Produit de référence générale pour tous les types de lames thermoformage sous vide : coupe droite, contour, poinçon étoile et poinçon à air. Notre équipe technique assure le meilleur SKU pour votre modèle de machine.</p>`,
  },
  'kontr-biai': {
    name: 'Lame Contour – Thermoformage & Emballage Sous Vide',
    subtitle: 'Découpe Contour — Acier Sheffield HRC 58-62',
    description: 'Lame contour pour machines de thermoformage et emballage sous vide. Compatible Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac.',
    features: [
      'Acier Sheffield longue durée',
      'Compatible industrie alimentaire',
      'Compatible machines thermoformage',
      'Découpe nette et précise',
      'Option revêtement titane'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Industrie alimentaire', 'Emballage viande et fromage'],
    seo: {
      title: 'Lame Contour Thermoformage | Multivac Tiromat Compatible',
      description: 'Lame contour professionnelle pour machines thermoformage et emballage sous vide. Compatible Multivac, Tiromat, Opack, GEA, Ulma. Acier Sheffield qualité alimentaire.',
      keywords: ['lame contour', 'lame thermoformage', 'emballage sous vide', 'Multivac', 'Tiromat', 'Opack', 'Betapak', 'GEA', 'Alcan', 'Ulma', 'Variovac', 'industrie alimentaire', 'lame emballage viande']
    },
    benefits: [
      { title: 'Dureté HRC 58-62', description: 'Qualité de coupe constante et longue durée de vie grâce au traitement thermique de précision', icon: 'Shield' },
      { title: 'Coupe Sans Bavure', description: 'Géométrie de profil contour pour des bords nets et sans bavure', icon: 'Zap' },
      { title: 'Option Revêtement TiN', description: 'Dureté surface 2300 HV, durée de vie 3-5x, anti-adhérence', icon: 'Diamond' },
    ],
    longDescription: `<p>La lame contour est une lame à profil spécial qui découpe les bords de film en suivant le profil dans les machines de thermoformage. Usinée CNC à partir d'acier Sheffield haut carbone, dureté HRC 58-62 par traitement thermique de précision.</p>
<p><strong>Géométrie du Profil :</strong> Le profil contour spécifique à la machine suit précisément la géométrie du bord du film. Découpe sans bavure — aucune trace de coupe sur l'emballage.</p>
<p><strong>Options de Revêtement :</strong></p>
<ul><li>Standard : Surface polie brillante, Ra ≤0,4 µm</li><li>TiN (Nitrure de Titane) PVD : dureté surface 2300 HV, couleur or, durée de vie 3-5x</li></ul>
<p><strong>Machines Compatibles :</strong> Multivac série R (R105, R145, R245, R535), Tiromat 3000/660, GEA PowerPak, Opack, Betapak, Alcan, Ulma série TFS, Variovac.</p>`,
  },
  'yarim': {
    name: 'Poinçon Demi-Étoile – Emballage Sous Vide',
    subtitle: 'Acier à Outils D2 — Demi-Étoile',
    description: 'Poinçon demi-étoile (half star) pour machines d\'emballage sous vide et thermoformage. Acier D2 haute résistance à l\'usure.',
    features: [
      'Géométrie demi-étoile',
      'Acier D2 qualité Sheffield',
      'Option revêtement titane',
      'Poinçonnage de précision',
      'Tranchant longue durée',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Poinçonnage alimentaire'],
    seo: {
      title: 'Poinçon Demi-Étoile Thermoformage | Multivac Tiromat Compatible',
      description: 'Poinçon demi-étoile professionnel pour emballage sous vide et thermoformage. Acier D2 haute résistance, compatible Multivac, Tiromat, Opack, GEA, Ulma.',
      keywords: ['poinçon demi-étoile', 'poinçon thermoformage', 'emballage sous vide', 'Multivac', 'Tiromat', 'Opack', 'Betapak', 'GEA', 'Alcan', 'Ulma', 'Variovac', 'industrie alimentaire', 'acier D2']
    },
    benefits: [
      { title: 'Acier D2', description: '12% chrome, 1,55% carbone — résistance à l\'usure et stabilité dimensionnelle supérieures', icon: 'Shield' },
      { title: 'Option Revêtement TiN', description: 'Surface 2300 HV, réduction friction 40%, durée de vie 3-5x', icon: 'Diamond' },
      { title: 'Géométrie Précise', description: 'Forme triangle avec équilibre optimal entre aération et intégrité de l\'emballage', icon: 'Star' },
    ],
    longDescription: `<p>Les poinçons demi-étoile (half star) sont utilisés pour créer des motifs d'aération sur le film dans l'emballage sous vide. L'acier D2 (1,55% C, 12% Cr, 0,85% Mo, 0,9% V) offre résistance à l'usure et stabilité dimensionnelle grâce à sa teneur élevée en chrome.</p>
<p><strong>Paramètres de Traitement Thermique :</strong> Transformation austénitique 1020-1040°C → trempe à l'huile → revenu 200-250°C. Ce processus en 3 étapes atteint HRC 58-60 avec un équilibre de ténacité adéquat.</p>
<p><strong>Géométrie :</strong> Le motif demi-étoile triangulaire crée une zone d'aération optimale dans le film tout en préservant l'intégrité de l'emballage. Standard matériau équivalent DIN 1.2379.</p>
<p><strong>Revêtement :</strong> Le revêtement PVD TiN (Nitrure de Titane) augmente la dureté de surface à 2300 HV, réduit la friction de 40% et prolonge la durée de vie 3-5x.</p>`,
  },
  'tam': {
    name: 'Poinçon Étoile Complète – Emballage Sous Vide',
    subtitle: 'Acier à Outils D2 — Étoile Complète',
    description: 'Poinçon étoile complète (full star) pour machines d\'emballage sous vide et thermoformage. Compatible Multivac, Tiromat et autres.',
    features: [
      'Géométrie étoile complète',
      'Acier D2 qualité Sheffield',
      'Option revêtement titane',
      'Poinçonnage de précision',
      'Tranchant longue durée',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Poinçonnage industriel'],
    seo: {
      title: 'Poinçon Étoile Complète Thermoformage | Multivac Tiromat Compatible',
      description: 'Poinçon étoile complète professionnel pour emballage sous vide et thermoformage. Acier D2 qualité Sheffield, compatible Multivac, Tiromat, Opack, GEA, Ulma.',
      keywords: ['poinçon étoile', 'poinçon thermoformage', 'emballage sous vide', 'Multivac', 'Tiromat', 'Opack', 'Betapak', 'GEA', 'Alcan', 'Ulma', 'Variovac', 'industrie alimentaire', 'poinçon industriel']
    },
    benefits: [
      { title: 'Aération 2x', description: 'Surface de passage de gaz deux fois plus grande que la demi-étoile', icon: 'Wind' },
      { title: 'Durabilité Acier D2', description: 'DIN 1.2379, 12% chrome pour résistance supérieure à l\'usure et la corrosion', icon: 'Shield' },
      { title: 'Option Revêtement TiN', description: 'Dureté surface 2300 HV, durée de vie 3-5x', icon: 'Diamond' },
    ],
    longDescription: `<p>Les poinçons étoile complète (full star) créent des motifs d'aération 2x plus larges dans l'emballage sous vide par rapport à la demi-étoile. Fabriqués en acier D2 (1,55% C, 12% Cr, 0,85% Mo, 0,9% V).</p>
<p><strong>Avantage :</strong> Dans les applications MAP (Emballage sous Atmosphère Modifiée) nécessitant un échange gazeux rapide, la géométrie étoile complète accélère le transfert de gaz. Largement préféré pour l'emballage de viande, fromage et plats préparés.</p>
<p><strong>Matériau :</strong> DIN 1.2379 / AISI D2 — acier à outils pour travail à froid allié chrome-molybdène-vanadium. Dureté stable HRC 58-60 par effet de durcissement secondaire.</p>
<p><strong>Machines Compatibles :</strong> Multivac, Tiromat, GEA PowerPak, Opack, Betapak, Alcan, Ulma, Variovac, Sealpac.</p>`,
  },
  'dz-biaklar': {
    name: 'Lames Droites (Lama) – Emballage Sous Vide',
    subtitle: 'HSS (M2) Acier Rapide — HRC 62-65',
    description: 'Lames droites (straight/lama) pour machines d\'emballage sous vide et thermoformage. Acier HSS haute vitesse, extrêmement résistant.',
    features: [
      'Géométrie droite',
      'Acier HSS haute vitesse',
      'Extrêmement robuste',
      'Résistant à l\'écrasement',
      'Tranchant longue durée',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Découpe de film', 'Scellage'],
    seo: {
      title: 'Lame Droite Thermoformage | Multivac Tiromat Compatible',
      description: 'Lame droite professionnelle pour machines thermoformage et emballage sous vide. Acier HSS haute vitesse, compatible Multivac, Tiromat, Opack, GEA, Ulma.',
      keywords: ['lame droite', 'lame thermoformage', 'emballage sous vide', 'Multivac', 'Tiromat', 'Opack', 'Betapak', 'GEA', 'Alcan', 'Ulma', 'Variovac', 'industrie alimentaire', 'acier HSS']
    },
    benefits: [
      { title: 'Ultra-Dureté HRC 62-65', description: 'Le durcissement secondaire HSS M2 atteint la valeur la plus élevée parmi les aciers', icon: 'Shield' },
      { title: 'Stabilité Thermique 600°C', description: 'Dureté à rouge — aucune perte de dureté même en coupe haute vitesse', icon: 'Flame' },
      { title: 'Structure Anti-Écrasement', description: 'Micro-structure en carbure de vanadium offrant 5x de résistance à la déformation', icon: 'Zap' },
    ],
    longDescription: `<p>Les lames droites (lama) sont utilisées sur la ligne de coupe de film des machines de thermoformage et d'emballage sous vide. Fabriquées en acier rapide HSS M2 (DIN 1.3343 / AISI M2).</p>
<p><strong>Composition de l'Alliage :</strong> 0,85% C, 6,15% W, 5,0% Mo, 4,15% Cr, 1,85% V — cette composition atteint HRC 62-65 par durcissement secondaire avec stabilité thermique jusqu'à 600°C.</p>
<p><strong>Avantages :</strong></p>
<ul><li>Résistance extraordinaire à l'écrasement — 5x de résistance à la déformation par rapport à l'acier Sheffield</li><li>Dureté à rouge : maintient HRC 60+ même à 600°C</li><li>Micro-structure carbure de vanadium : les carbures MC forment une barrière naturelle contre l'usure</li></ul>
<p><strong>Machines Compatibles :</strong> Multivac, Tiromat, Opack, Betapak, GEA, Alcan, Ulma, Variovac.</p>`,
  },
  'dairesel': {
    name: 'Lames Circulaires – Emballage Sous Vide',
    subtitle: 'Acier Sheffield — Découpe Rotative HRC 58-62',
    description: 'Lames circulaires rotatives pour machines d\'emballage sous vide et thermoformage. Compatible Multivac, Tiromat et autres.',
    features: [
      'Géométrie circulaire',
      'Acier Sheffield',
      'Découpe rotative',
      'Coupe précise',
      'Longue durée',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Découpe rotative'],
    seo: {
      title: 'Lame Circulaire Rotative Thermoformage | Multivac Tiromat Compatible',
      description: 'Lame circulaire rotative pour machines thermoformage et emballage sous vide. Acier Sheffield qualité, compatible Multivac, Tiromat, Opack, GEA, Ulma, Variovac.',
      keywords: ['lame circulaire', 'lame rotative', 'lame thermoformage', 'emballage sous vide', 'Multivac', 'Tiromat', 'Opack', 'Betapak', 'GEA', 'Alcan', 'Ulma', 'Variovac', 'industrie alimentaire']
    },
    benefits: [
      { title: 'Équilibrage Dynamique', description: 'Coupe sans vibration et sans bavure garantie à 3000+ tr/min', icon: 'RotateCw' },
      { title: 'Dureté HRC 58-62', description: 'Tranchant longue durée en acier Sheffield', icon: 'Shield' },
      { title: 'Service de Réaffûtage', description: 'Meulage de précision 18-22° avec service de calibration', icon: 'RefreshCw' },
    ],
    longDescription: `<p>Les lames circulaires fonctionnent avec un système de coupe rotatif dans les machines de thermoformage et d'emballage sous vide. Tournées et rectifiées CNC à partir d'acier Sheffield haut carbone.</p>
<p><strong>Équilibrage Dynamique :</strong> Chaque lame circulaire est équilibrée dynamiquement pour éviter les vibrations en rotation haute vitesse. Coupe sans bavure garantie même à 3000+ tr/min.</p>
<p><strong>Affûtage :</strong> Angle de coupe formé par meulage de précision 18-22°. Service de réaffûtage et calibration disponible.</p>
<p><strong>Machines Compatibles :</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
  },
  'yuvarlak': {
    name: 'Poinçon Rond d\'Aération – Emballage Sous Vide',
    subtitle: '440C Acier Inox Martensitique — Trou de Ventilation',
    description: 'Poinçon rond pour trous d\'aération sur emballages sous vide. Acier inoxydable 440C haute résistance à la corrosion.',
    features: [
      'Géométrie ronde',
      'Acier inoxydable 440C',
      'Haute résistance corrosion',
      'Trou d\'aération',
      'Poinçonnage de précision',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Trous d\'aération'],
    seo: {
      title: 'Poinçon à Air Rond Thermoformage | Multivac Tiromat Compatible',
      description: 'Poinçon rond pour trous d\'aération emballage sous vide et thermoformage. Acier inoxydable 440C, compatible Multivac, Tiromat, Opack, GEA, Ulma.',
      keywords: ['poinçon à air', 'poinçon rond', 'poinçon thermoformage', 'trou aération', 'emballage sous vide', 'Multivac', 'Tiromat', 'Opack', 'Betapak', 'GEA', 'Alcan', 'Ulma', 'Variovac', 'inoxydable 440C']
    },
    benefits: [
      { title: 'Résistance Corrosion 17% Chrome', description: 'Protection complète contre la rouille en environnements alimentaires humides et salés', icon: 'Droplet' },
      { title: 'Surface Conforme HACCP', description: 'Hygiène alimentaire électropolie Ra ≤0,3 µm', icon: 'CheckCircle' },
      { title: 'Dureté HRC 58-60', description: 'Structure martensitique équilibrant tranchant et résistance à la corrosion', icon: 'Shield' },
    ],
    longDescription: `<p>Les poinçons ronds créent des trous d'aération circulaires dans l'emballage sous vide. Fabriqués en acier inoxydable martensitique AISI 440C (1,0% C, 17% Cr).</p>
<p><strong>Résistance à la Corrosion :</strong> La teneur en chrome de 17% offre une résistance supérieure à la rouille et à la corrosion par piqûres en environnements humides. Aucune perte de performance même en environnements salés (emballage produits de la mer).</p>
<p><strong>Traitement de Surface :</strong> Électropolissage Ra ≤0,3 µm, qualité contact alimentaire conforme HACCP et FDA 21 CFR 175.300.</p>
<p><strong>Machines Compatibles :</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
  },
  'oval': {
    name: 'Poinçon Ovale d\'Aération – Emballage Sous Vide',
    subtitle: '440C Acier Inox Martensitique — Trou Ovale',
    description: 'Poinçon ovale (ellipse) pour trous d\'aération sur emballages sous vide. Acier inoxydable 440C.',
    features: [
      'Géométrie ovale',
      'Acier inoxydable 440C',
      'Haute résistance corrosion',
      'Trou d\'aération',
      'Poinçonnage de précision',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Trous d\'aération ovales'],
    seo: {
      title: 'Poinçon à Air Ovale Thermoformage | Multivac Tiromat Compatible',
      description: 'Poinçon ovale pour trous d\'aération emballage sous vide et thermoformage. Acier inoxydable 440C, compatible Multivac, Tiromat, Opack, GEA, Ulma.',
      keywords: ['poinçon à air', 'poinçon ovale', 'poinçon thermoformage', 'trou aération', 'emballage sous vide', 'Multivac', 'Tiromat', 'Opack', 'Betapak', 'GEA', 'Alcan', 'Ulma', 'Variovac', 'inoxydable 440C']
    },
    benefits: [
      { title: '40% Plus de Surface', description: 'Géométrie ovale offrant 40% d\'aération en plus par rapport au rond', icon: 'Wind' },
      { title: 'Résistance Corrosion 440C', description: '17% chrome, protection complète en environnements humides et salés', icon: 'Droplet' },
      { title: 'Surface Conforme HACCP', description: 'Hygiène alimentaire électropolie Ra ≤0,3 µm', icon: 'CheckCircle' },
    ],
    longDescription: `<p>Les poinçons ovales créent des zones d'aération plus larges avec un profil elliptique par rapport aux poinçons ronds. Fabriqués en acier inoxydable martensitique AISI 440C (1,0% C, 17% Cr).</p>
<p><strong>Avantage Ovale :</strong> La géométrie elliptique offre 40% de surface de passage de gaz supplémentaire dans la même zone de film. Cette caractéristique est préférée pour le MAP nécessitant un échange gazeux rapide.</p>
<p><strong>Propriétés 440C :</strong> La composition 1,0% carbone + 17% chrome offre à la fois une dureté HRC 58-60 et une résistance à la corrosion supérieure. Surface alimentaire électropolie Ra ≤0,3 µm.</p>
<p><strong>Machines Compatibles :</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
  },
  'dili': {
    name: 'Lames Dentées – Emballage Sous Vide',
    subtitle: 'Acier Sheffield — Bord Dentelé',
    description: 'Lames dentées (serrated) pour machines d\'emballage sous vide et thermoformage. Idéal pour matériaux durs.',
    features: [
      'Tranchant denté',
      'Acier Sheffield',
      'Idéal matériaux durs',
      'Coupe anti-glissement',
      'Longue durée',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Découpe de films rigides'],
    seo: {
      title: 'Lame Dentelée Thermoformage | Multivac Tiromat Compatible',
      description: 'Lame dentelée professionnelle pour machines thermoformage et emballage sous vide. Acier Sheffield, idéale films rigides, compatible Multivac, Tiromat, Opack, GEA.',
      keywords: ['lame dentelée', 'lame dentée', 'lame thermoformage', 'emballage sous vide', 'Multivac', 'Tiromat', 'Opack', 'Betapak', 'GEA', 'Alcan', 'Ulma', 'Variovac', 'industrie alimentaire', 'films rigides']
    },
    benefits: [
      { title: 'Coupe Anti-Glissement', description: 'Profil micro-dentelé assurant une coupe sûre même sur matériaux glissants', icon: 'Zap' },
      { title: 'Précision ±0,02mm', description: 'Dents usinées CNC avec précision pour une qualité de bord constante', icon: 'Gauge' },
      { title: 'Multi-Matériaux', description: 'Film épais, feuille alu, plastique rigide, film barrière — une seule lame', icon: 'Layers' },
    ],
    longDescription: `<p>Les lames dentelées (serrated/saw-tooth) sont utilisées pour les films épais, les laminages aluminium et les emballages thermoplastiques rigides où les lames droites glisseraient.</p>
<p><strong>Géométrie Dentaire :</strong> Le profil micro-dentelé perce d'abord puis coupe le matériau. Ce mécanisme en deux étapes élimine le risque de glissement et crée un bord net à chaque coupe.</p>
<p><strong>Matériau :</strong> Acier Sheffield haut carbone, dureté HRC 58-62. Dents usinées CNC avec précision, tolérance inter-dents ±0,02mm.</p>
<p><strong>Utilisation Idéale :</strong></p>
<ul><li>Films PE/PP épais (100+ microns)</li><li>Laminages feuille d'aluminium</li><li>Emballages rigides PET/PVC</li><li>Films barrière multicouches</li></ul>
<p><strong>Machines Compatibles :</strong> Multivac, Tiromat, GEA, Opack, Betapak, Alcan, Ulma, Variovac.</p>`,
  },
  'vent-cutter': {
    name: 'Vent Cutter – Lame de Découpe à Ailettes',
    description: 'Lame de découpe à ailettes (vent cutter) pour applications spécialisées. Qualité Sheffield.',
    features: ['Design à ailettes', 'Qualité Sheffield', 'Usage professionnel'],
    applications: ['Découpe industrielle', 'Applications spécialisées'],
  },

  // =============================================================================
  // COUTEAUX DE MACHINE - DÉCOUPE ROTATIVE & INDUSTRIELLE
  // =============================================================================
  'st': {
    name: 'Lame Supérieure "Tabak" – Découpe Rotative',
    description: 'Lame supérieure type "tabak" pour systèmes de découpe rotative. Qualité Sheffield.',
    features: ['Design tabak', 'Découpe rotative', 'Position supérieure', 'Qualité Sheffield'],
    applications: ['Découpe rotative', 'Systèmes de refendage'],
  },
  'alt': {
    name: 'Lame Inférieure – Découpe Rotative',
    description: 'Lame inférieure pour systèmes de découpe rotative. Qualité Sheffield.',
    features: ['Position inférieure', 'Découpe rotative', 'Qualité Sheffield'],
    applications: ['Découpe rotative', 'Systèmes de refendage'],
  },
  'pelet': {
    name: 'Lames de Granulation – Pelletisation',
    description: 'Lames de granulation (pelletisation) pour machines de production de granulés. Qualité Sheffield.',
    features: ['Granulation', 'Pelletisation', 'Qualité Sheffield', 'Durabilité'],
    applications: ['Production de granulés', 'Industrie plastique', 'Recyclage'],
  },
  'taneciklendirici': {
    name: 'Lame de Granulation Fine',
    description: 'Lame de granulation fine pour production de particules fines. Qualité Sheffield.',
    features: ['Granulation fine', 'Particules fines', 'Qualité Sheffield'],
    applications: ['Production de particules fines', 'Industrie chimique'],
  },
  'paralayici': {
    name: 'Lame de Broyeur – Déchiquetage',
    description: 'Lame de broyeur pour déchiquetage de matériaux. Qualité Sheffield robuste.',
    features: ['Déchiquetage', 'Construction robuste', 'Qualité Sheffield'],
    applications: ['Broyage', 'Déchiquetage', 'Recyclage'],
  },
  'oluklu': {
    name: 'Lames de Refendage Carton Ondulé',
    description: 'Lames de refendage pour carton ondulé et matériaux cannelés. Qualité Sheffield.',
    features: ['Carton ondulé', 'Refendage', 'Qualité Sheffield'],
    applications: ['Industrie du carton', 'Emballage', 'Refendage'],
  },
  'disiz': {
    name: 'Lames de Découpe Rotative Sans Dents',
    description: 'Lames de découpe rotative sans dents pour coupe nette. Qualité Sheffield.',
    features: ['Sans dents', 'Coupe nette', 'Découpe rotative', 'Qualité Sheffield'],
    applications: ['Découpe rotative', 'Coupe nette de matériaux'],
  },
  'dili-2': {
    name: 'Lames de Découpe Rotative Dentées',
    description: 'Lames de découpe rotative dentées pour matériaux fibreux. Qualité Sheffield.',
    features: ['Dentées', 'Matériaux fibreux', 'Découpe rotative', 'Qualité Sheffield'],
    applications: ['Découpe rotative', 'Matériaux fibreux', 'Textiles'],
  },
  'dili-3': {
    name: 'Lame Dentée Industrielle',
    description: 'Lame dentée industrielle pour applications lourdes. Qualité Sheffield robuste.',
    features: ['Dentée', 'Usage industriel', 'Construction robuste', 'Qualité Sheffield'],
    applications: ['Applications industrielles lourdes', 'Découpe de matériaux épais'],
  },
  'biak': {
    name: 'Support de Lame – Accessoire',
    description: 'Support de lame (porte-lame) pour montage de lames industrielles. Accessoire professionnel.',
    features: ['Support de lame', 'Montage sécurisé', 'Accessoire professionnel'],
    applications: ['Montage de lames', 'Systèmes de découpe'],
  },
  'dairesel-2': {
    name: 'Lames Circulaires d\'Écrasement',
    description: 'Lames circulaires d\'écrasement pour applications de perforation et découpe. Qualité Sheffield.',
    features: ['Circulaire', 'Écrasement', 'Perforation', 'Qualité Sheffield'],
    applications: ['Perforation', 'Découpe avec écrasement'],
  },
  'et': {
    name: 'Lame de Découennage (Derinder)',
    description: 'Lame de découennage (derinder) pour traitement de viande. Acier alimentaire.',
    features: ['Découennage', 'Traitement viande', 'Acier alimentaire', 'Qualité Sheffield'],
    applications: ['Industrie de la viande', 'Découennage', 'Transformation alimentaire'],
  },
  'log-saw': {
    name: 'Lames Log-Saw – Découpe Papier',
    description: 'Lames log-saw pour découpe de rouleaux de papier toilette et essuie-tout. Qualité Sheffield.',
    features: ['Découpe log-saw', 'Papier toilette', 'Essuie-tout', 'Qualité Sheffield'],
    applications: ['Industrie papetière', 'Découpe de rouleaux', 'Production hygiénique'],
  },
  'masura': {
    name: 'Lames de Découpe Masura',
    description: 'Lames de découpe masura pour applications textiles et papetières. Qualité Sheffield.',
    features: ['Découpe masura', 'Textile', 'Papeterie', 'Qualité Sheffield'],
    applications: ['Industrie textile', 'Papeterie', 'Découpe de bobines'],
  },
  'kutu': {
    name: 'Lames de Fermeture Carton – Ruban Adhésif',
    description: 'Lames de fermeture carton pour machines de scellage au ruban adhésif. Qualité Sheffield.',
    features: ['Fermeture carton', 'Ruban adhésif', 'Machines de scellage', 'Qualité Sheffield'],
    applications: ['Scellage de cartons', 'Emballage', 'Logistique'],
  },
  'erit': {
    name: 'Lames à Ruban (Bande)',
    description: 'Lames à ruban (bande) pour applications de découpe continue. Qualité Sheffield.',
    features: ['Type ruban', 'Découpe continue', 'Qualité Sheffield'],
    applications: ['Découpe continue', 'Industrie alimentaire', 'Transformation'],
  },
  'tray': {
    name: 'Lames de Découpe Barquettes (Tray)',
    description: 'Lames de découpe pour barquettes (tray) et conteneurs moulés. Qualité Sheffield.',
    features: ['Découpe barquettes', 'Conteneurs moulés', 'Qualité Sheffield'],
    applications: ['Production de barquettes', 'Emballage alimentaire'],
  },
  'sosis': {
    name: 'Lames de Décorticage Saucisses',
    description: 'Lames de décorticage pour industrie de la charcuterie. Acier alimentaire.',
    features: ['Décorticage', 'Charcuterie', 'Acier alimentaire', 'Qualité Sheffield'],
    applications: ['Industrie charcutière', 'Décorticage', 'Transformation alimentaire'],
  },

  // =============================================================================
  // LAMES DE REFENDAGE 3 TROUS - SÉRIE COMPLÈTE
  // =============================================================================
  '3dj-karbon-celik': {
    name: 'Lame de Refendage 3 Trous – Acier Carbone',
    description: 'Lame industrielle de refendage à 3 trous en acier à haute teneur en carbone (0,85-1,00% C). Traitement thermique en atmosphère contrôlée pour microstructure martensitique homogène. Angle de tranchant optimisé de 22°.',
    features: [
      'Teneur élevée en carbone (0,85-1,00%)',
      'Microstructure martensitique',
      'Angle de tranchant optimal de 22°',
      'Durée de vie 3-5x supérieure aux rasoirs',
      'Système de fixation 3 trous'
    ],
    applications: ['Découpe textile', 'Refendage de films', 'Découpe de papier', 'Refendage plastique', 'Emballage'],
    seo: {
      title: 'Lame 3 Trous Acier Carbone 43x22mm | Refendage Industriel HRC 58-60',
      description: 'Lame de refendage 3 trous en acier carbone haute teneur (0,85-1,00% C), dureté HRC 58-60. Angle 22°, durée de vie 3-5x supérieure. Pour textile, film et papier.',
      keywords: ['lame 3 trous', 'lame refendage', 'lame acier carbone', 'lame 43x22', 'lame industrielle', 'lame textile', 'lame film', 'lame papier', 'lame emballage', 'lame slitter']
    },
  },
  '3dj-karbon-titanyum': {
    name: 'Lame de Refendage 3 Trous – Acier Carbone + Revêtement Titane',
    description: 'Revêtement TiN (nitrure de titane) sur acier haute teneur en carbone. Le revêtement PVD atteint 2300 HV et réduit la friction de 40%.',
    features: [
      'Revêtement TiN (2300 HV)',
      'Application PVD',
      '40% réduction friction',
      'Résistance thermique accrue',
      '2-3x durée de vie prolongée',
      'Idéal matériaux adhésifs'
    ],
    applications: ['Découpe ruban adhésif', 'Refendage lamination', 'Films thermosensibles', 'Découpe étiquettes'],
    seo: {
      title: 'Lame 3 Trous Revêtement Titane TiN 43x22mm | 2300 HV Faible Friction',
      description: 'Lame de refendage 3 trous avec revêtement titane TiN PVD, dureté 2300 HV. 40% moins de friction, durée de vie 2-3x. Idéale pour ruban adhésif et lamination.',
      keywords: ['lame 3 trous titane', 'lame TiN', 'lame dorée', 'lame 43x22', 'lame 2300 HV', 'lame faible friction', 'lame ruban adhésif', 'lame lamination', 'lame PVD', 'lame refendage']
    },
  },
  '3dj-paslanmaz-titanyum': {
    name: 'Lame de Refendage 3 Trous – Acier Inoxydable + Revêtement Titane',
    description: 'Revêtement TiN sur acier inoxydable. L\'oxyde de chrome améliore l\'adhérence du revêtement de 25-30% par rapport à l\'acier carbone.',
    features: [
      'Adhérence revêtement supérieure',
      'Substrat inoxydable',
      'Résistance à la corrosion',
      'Compatible environnements humides',
      'Sûr pour industrie alimentaire',
      'Revêtement longue durée'
    ],
    applications: ['Emballage alimentaire', 'Environnements humides', 'Découpe hygiénique', 'Lamination', 'Refendage de films'],
    seo: {
      title: 'Lame 3 Trous Inoxydable + Titane 43x22mm | Double Protection Corrosion',
      description: 'Lame de refendage 3 trous inoxydable avec revêtement titane TiN. Adhérence supérieure 25-30%, résistance corrosion. Pour emballage alimentaire et environnements humides.',
      keywords: ['lame 3 trous inoxydable', 'lame titane inox', 'lame 43x22', 'lame anti-corrosion', 'lame alimentaire', 'lame hygiénique', 'lame TiN inoxydable', 'lame refendage', 'lame double protection']
    },
  },
  '3dj-paslanmaz-titanyum-cizikli': {
    name: 'Lame de Refendage 3 Trous – Inox + Titane, Rainurée',
    description: 'Lame inoxydable + TiN avec ligne de rupture centrale. Peut être divisée en deux demi-lames pour utilisation flexible.',
    features: [
      'Design divisible',
      'Ligne de rupture laser',
      'Utilisation demi-lame possible',
      'Revêtement inox + TiN',
      'Usage économique',
      'Compatible double machine'
    ],
    applications: ['Machines textiles demi-lame', 'Découpe étroite', 'Systèmes multi-stations', 'Machines d\'emballage'],
    seo: {
      title: 'Lame 3 Trous Inox + Titane Incisée 43x22mm | Sécable en Demi-Lame',
      description: 'Lame de refendage 3 trous inoxydable + TiN avec ligne de rupture laser. Divisible en deux demi-lames 21,5mm. Usage flexible et économique pour multi-stations.',
      keywords: ['lame 3 trous incisée', 'lame sécable', 'lame divisible', 'lame 43x22', 'lame demi-lame', 'lame inox titane', 'lame textile', 'lame multi-stations', 'lame économique', 'lame refendage']
    },
  },
  '3dj-karbon-seramik': {
    name: 'Lame de Refendage 3 Trous – Acier Carbone + Revêtement Céramique',
    description: 'Revêtement céramique avancé à base de titane sur acier carbone. Résistance jusqu\'à 800°C avec 50-60% de réduction de friction.',
    features: [
      'Revêtement céramique (3200+ HV)',
      'Résistance température 800°C',
      '50-60% réduction friction',
      'Compatible haute vitesse',
      'Résistance à l\'oxydation',
      'Performance supérieure au TiN'
    ],
    applications: ['Refendage haute vitesse', 'Matériaux thermosensibles', 'Applications friction critique', 'Découpe matériaux abrasifs'],
    seo: {
      title: 'Lame 3 Trous Revêtement Céramique 43x22mm | 3200 HV Haute Température',
      description: 'Lame de refendage 3 trous avec revêtement céramique 3200+ HV, résiste à 800°C. 50-60% moins de friction. Pour refendage haute vitesse et matériaux abrasifs.',
      keywords: ['lame 3 trous céramique', 'lame 3200 HV', 'lame 43x22', 'lame haute température', 'lame 800°C', 'lame haute vitesse', 'lame faible friction', 'lame abrasif', 'lame refendage', 'lame industrielle']
    },
  },
  '3dj-yekpare-tungsten': {
    name: 'Lame de Refendage 3 Trous – Carbure de Tungstène Massif',
    description: 'Lame monolithique en carbure de tungstène (WC-Co). Dureté HRA 89-92 avec durée de vie 10-50x supérieure à l\'acier.',
    features: [
      'Carbure de tungstène massif',
      'Dureté HRA 89-92',
      '10-50x durée de vie',
      'Résistance abrasion extrême',
      'Structure grain fin',
      'Qualité premium'
    ],
    applications: ['Découpe matériaux abrasifs', 'Fibre de verre', 'Fibre de carbone', 'Papier abrasif', 'Matériaux revêtus céramique'],
    seo: {
      title: 'Lame 3 Trous Carbure de Tungstène Massif 43x22mm | HRA 89-92',
      description: 'Lame de refendage 3 trous en carbure de tungstène massif WC-Co, dureté HRA 89-92. Durée de vie 10-50x supérieure pour fibre de verre, carbone et abrasifs.',
      keywords: ['lame 3 trous tungstène', 'lame carbure tungstène', 'lame WC-Co', 'lame 43x22', 'lame HRA 92', 'lame ultra-dure', 'lame fibre de verre', 'lame fibre carbone', 'lame abrasif', 'lame longue durée']
    },
  },
  '3dj-yekpare-seramik': {
    name: 'Lame de Refendage 3 Trous – Céramique Massif',
    description: 'Lame monolithique en céramique (oxyde de zirconium). Friction proche de zéro et génération de chaleur minimale.',
    features: [
      'Structure céramique massive',
      'Friction proche de zéro',
      'Génération chaleur minimale',
      'Chimiquement inerte',
      'Dureté HV 1200-1400',
      'Aucune contamination métallique'
    ],
    applications: ['Films ultrasensibles à la chaleur', 'Industrie alimentaire (compatible détecteur métaux)', 'Matériaux chimiques réactifs', 'Salles blanches', 'Composants électroniques'],
    seo: {
      title: 'Lame 3 Trous Céramique Zircone Massif 43x22mm | Sans Métal Biocompatible',
      description: 'Lame de refendage 3 trous en céramique zircone massive, dureté HV 1200-1400. Sans contamination métallique, compatible détecteur métaux. Pour alimentaire et salles blanches.',
      keywords: ['lame 3 trous céramique', 'lame zircone', 'lame 43x22', 'lame sans métal', 'lame biocompatible', 'lame salle blanche', 'lame alimentaire', 'lame détecteur métaux', 'lame chimiquement inerte', 'lame électronique']
    },
  },
  '3dj-karbon-yuvarlak-kenar': {
    name: 'Lame de Refendage 3 Trous – Acier Carbone, Bord Arrondi',
    description: 'Lame acier carbone avec profil de bord arrondi style rasoir. Ergonomie familière pour transition depuis rasoirs.',
    features: [
      'Facteur de forme rasoir',
      'Profil bord arrondi',
      'Durabilité industrielle',
      'Idéal transition utilisateurs',
      'Design ergonomique',
      'Acier haute teneur carbone'
    ],
    applications: ['Transition depuis rasoirs', 'Découpe textile', 'Refendage de films', 'Usage général'],
    seo: {
      title: 'Lame 3 Trous Acier Carbone Bord Arrondi 43x22mm | Style Rasoir',
      description: 'Lame de refendage 3 trous acier carbone avec bord arrondi style rasoir. Ergonomie familière avec durabilité industrielle. Pour transition depuis rasoirs standard.',
      keywords: ['lame 3 trous bord arrondi', 'lame carbone arrondi', 'lame 43x22', 'lame style rasoir', 'lame ergonomique', 'lame textile', 'lame refendage film', 'lame transition', 'lame industrielle']
    },
  },
  '3dj-paslanmaz-titanyum-yuvarlak': {
    name: 'Lame de Refendage 3 Trous – Inox + Titane, Bord Arrondi',
    description: 'Lame inoxydable + TiN avec bord arrondi style rasoir. Combine ergonomie familière avec performance premium.',
    features: [
      'Bord arrondi + revêtement TiN',
      'Substrat inoxydable',
      'Résistance corrosion',
      'Faible friction',
      'Ergonomie rasoir',
      'Combinaison premium'
    ],
    applications: ['Environnements humides', 'Transition industrie alimentaire', 'Découpe matériaux adhésifs', 'Entreprises priorité ergonomie'],
    seo: {
      title: 'Lame 3 Trous Inox + Titane Bord Arrondi 43x22mm | Ergonomique Premium',
      description: 'Lame de refendage 3 trous inoxydable + TiN avec bord arrondi ergonomique. Résistance corrosion et faible friction. Pour environnements humides et alimentaire.',
      keywords: ['lame 3 trous bord arrondi', 'lame inox titane arrondi', 'lame 43x22', 'lame ergonomique premium', 'lame anti-corrosion', 'lame alimentaire', 'lame humide', 'lame adhésif', 'lame TiN', 'lame refendage']
    },
  },
  '3dj-karbon-seramik-yuvarlak': {
    name: 'Lame de Refendage 3 Trous – Carbone + Céramique, Bord Arrondi',
    description: 'Lame revêtement céramique avec bord arrondi style rasoir. Résistance haute température avec ergonomie familière.',
    features: [
      'Bord arrondi + revêtement céramique',
      'Résistance température 800°C',
      'Faible friction',
      'Ergonomie rasoir',
      'Résistance oxydation',
      'Compatible haute vitesse'
    ],
    applications: ['Découpe haute vitesse ergonomique', 'Matériaux thermosensibles', 'Transition utilisateurs segment premium'],
    seo: {
      title: 'Lame 3 Trous Carbone + Céramique Bord Arrondi 43x22mm | 800°C',
      description: 'Lame de refendage 3 trous carbone + céramique avec bord arrondi. Résiste à 800°C avec ergonomie familière. Pour découpe haute vitesse et thermosensibles.',
      keywords: ['lame 3 trous céramique arrondi', 'lame carbone céramique', 'lame 43x22', 'lame ergonomique', 'lame haute température', 'lame 800°C', 'lame haute vitesse', 'lame faible friction', 'lame thermosensible', 'lame premium']
    },
  },
  '3dj-paslanmaz-titanyum-60x22': {
    name: 'Lame de Refendage 3 Trous – Inox + Titane, 60x22mm',
    description: 'Format large 60x22mm avec revêtement inoxydable + TiN. Ligne de coupe plus longue pour bobines larges. Épaisseurs disponibles : 0,15mm, 0,20mm, 0,30mm.',
    features: [
      'Format large 60x22mm',
      'Ligne de coupe étendue',
      'Revêtement inox + TiN',
      'Pour machines haute capacité',
      'Moins de changements lame',
      'Compatible bobines larges'
    ],
    applications: ['Refendage bobines larges', 'Opérations multi-bandes', 'Machines refendage haute capacité', 'Production échelle industrielle'],
    seo: {
      title: 'Lame 3 Trous Inox + Titane 60x22mm | Grand Format Bobines Larges',
      description: 'Lame de refendage 3 trous grand format 60x22mm inoxydable + TiN. Ligne de coupe étendue pour bobines larges et machines haute capacité. Moins de changements lame.',
      keywords: ['lame 3 trous 60x22', 'lame grand format', 'lame inox titane', 'lame bobines larges', 'lame haute capacité', 'lame multi-bandes', 'lame TiN', 'lame production industrielle', 'lame refendage', 'lame longue']
    },
  },
  '3dj-paslanmaz-titanyum-cizikli-60x22': {
    name: 'Lame de Refendage 3 Trous – Inox + Titane, Rainurée, 60x22mm',
    description: 'Format large 60x22mm avec rainure divisible. Se divise en deux demi-lames de 30mm pour utilisation flexible. Épaisseurs disponibles : 0,15mm, 0,20mm, 0,30mm.',
    features: [
      'Format large 60x22mm',
      'Divisible en 2x 30mm',
      'Inox + revêtement TiN',
      'Utilisation flexible',
      'Gestion stock économique'
    ],
    applications: ['Systèmes multi-machines', 'Stations différentes', 'Entreprises économiques', 'Lignes production flexibles'],
    seo: {
      title: 'Lame 3 Trous Inox + Titane Incisée 60x22mm | Sécable 2x 30mm',
      description: 'Lame de refendage 3 trous grand format 60x22mm inoxydable + TiN avec rainure divisible. Se sépare en deux demi-lames 30mm. Usage flexible et économique.',
      keywords: ['lame 3 trous 60x22', 'lame incisée', 'lame sécable', 'lame divisible', 'lame 2x 30mm', 'lame inox titane', 'lame flexible', 'lame économique', 'lame multi-machines', 'lame grand format']
    },
  },
};
