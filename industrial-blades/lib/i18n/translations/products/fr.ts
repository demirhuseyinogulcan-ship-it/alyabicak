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
    benefits: [
      { title: 'Solution Économique', description: 'Performances en acier carbone au meilleur rapport qualité-prix pour applications standard.', icon: 'DollarSign' },
      { title: 'Montage Facile', description: 'Adaptation instantanée aux machines standard grâce à la fente centrale slotted.', icon: 'Settings' },
      { title: 'Dureté HRC 59-61', description: 'Qualité de coupe constante grâce à un traitement thermique de précision.', icon: 'Shield' },
    ],
    longDescription: `
      <p>Lame de dilme slotted fabriquée en acier à haute teneur en carbone SK5 (C85). Format standard 57x19mm avec fente centrale pour montage sécurisé sur machines.</p>

      <h3>Caractéristiques Techniques</h3>
      <ul>
        <li>Matériau : Acier à haute teneur en carbone SK5 / C85 (0,85-1,00% C)</li>
        <li>Dureté : HRC 59-61</li>
        <li>Dimensions standard : 57x19mm</li>
        <li>Épaisseurs disponibles : 0,25mm, 0,36mm, 0,38mm, 0,43mm, 0,63mm</li>
        <li>Angle d'affûtage : 22°</li>
      </ul>

      <h3>Domaines d'Application</h3>
      <p>Solution économique standard pour le refendage de papier, carton, film plastique, matériaux d'emballage et textiles. Performances fiables sur les machines de refendage slotted à haute vitesse.</p>
    `,
    seo: {
      title: 'Lame Refendage à Fente Acier Carbone | Alya Blade',
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
    benefits: [
      { title: 'Durée de vie 3-5x', description: 'Le revêtement TiN 2300 HV prolonge considérablement la durée de vie par rapport à l\'acier carbone standard.', icon: 'Clock' },
      { title: '40% Moins de Friction', description: 'La surface TiN empêche l\'accumulation d\'adhésif sur les substrats collants.', icon: 'Zap' },
      { title: 'Indicateur Visuel', description: 'Le revêtement doré permet un contrôle visuel facile de l\'état du revêtement.', icon: 'Eye' },
    ],
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
    benefits: [
      { title: 'Dureté 3200+ HV', description: 'Le revêtement céramique atteint une surface 40% plus dure que le TiN.', icon: 'Shield' },
      { title: 'Résistance 800°C', description: 'Aucune perte de performance dans les environnements à haute température.', icon: 'Flame' },
      { title: 'Ultra Résistance à l\'Usure', description: 'Durée de vie extraordinaire sur substrats abrasifs.', icon: 'Clock' },
    ],
    seo: {
      title: 'Lame à Fente Revêtement Céramique | Alya Blade',
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
    benefits: [
      { title: 'Résistance à la Corrosion', description: 'La teneur en chrome de 13% élimine la rouille en environnements humides.', icon: 'Shield' },
      { title: 'Qualité Alimentaire', description: 'Approuvé FDA pour les applications de refendage dans l\'industrie alimentaire.', icon: 'Check' },
      { title: 'Surface Hygiénique', description: 'Surface facile à nettoyer avec faible adhésion bactérienne.', icon: 'Sparkles' },
    ],
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
    benefits: [
      { title: 'Double Protection', description: 'Substrat inoxydable + revêtement TiN pour résistance à la corrosion et à l\'usure.', icon: 'Shield' },
      { title: 'Anti-Adhésion', description: 'Le revêtement TiN empêche l\'accumulation de matière adhésive sur le tranchant.', icon: 'Zap' },
      { title: 'Performance Premium', description: 'Durabilité de premier ordre pour environnements exigeants.', icon: 'Award' },
    ],
    seo: {
      title: 'Lame Inoxydable + Titane TiN | Alya Blade',
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
    benefits: [
      { title: 'Dureté Ultra 5000 HV', description: '2x plus dur que le TiN, 1,5x plus dur que le revêtement céramique.', icon: 'Diamond' },
      { title: '60% de Friction en Moins', description: 'Adhérence quasi nulle même sur les substrats les plus collants.', icon: 'Zap' },
      { title: 'Durée de Vie Maximale', description: 'La plus longue durée de service parmi toutes les options de revêtement.', icon: 'Clock' },
    ],
    seo: {
      title: 'Lame Inoxydable + XCD Carbone Diamant | Alya Blade',
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
    benefits: [
      { title: 'Substrat HRC 64-66', description: 'Le substrat HSS Endurium est 10% plus dur que l\'acier carbone standard.', icon: 'Shield' },
      { title: 'Résistance 600°C', description: 'Performances fiables dans les environnements à haute température.', icon: 'Flame' },
      { title: 'Coupe Premium', description: 'Lame slotted haut de gamme pour les applications les plus exigeantes.', icon: 'Award' },
    ],
    seo: {
      title: 'Lame Endurium HSS + Céramique | Alya Blade',
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
    benefits: [
      { title: 'Durée de Vie 20-50x', description: 'Atteint une dureté et une durée de vie impossibles avec les lames en acier.', icon: 'Clock' },
      { title: 'Structure Monolithique', description: 'Aucune soudure ni brasage — production monolithique par métallurgie des poudres.', icon: 'Box' },
      { title: 'HRA 92-94 Ultra Dur', description: 'Coupe même les matériaux les plus abrasifs avec facilité.', icon: 'Diamond' },
    ],
    seo: {
      title: 'Lame Carbure de Tungstène Massif | Alya Blade',
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
    benefits: [
      { title: 'Zéro Contamination Métallique', description: 'Structure entièrement sans métal — idéale pour alimentaire et électronique.', icon: 'Check' },
      { title: 'Isolant Électrique', description: 'Coupe sécurisée là où la conductivité électrique n\'est pas souhaitée.', icon: 'Zap' },
      { title: 'Biocompatible', description: 'Matériau adapté aux applications médicales et au contact alimentaire.', icon: 'Heart' },
    ],
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
      title: 'Lame Injecteur Acier Inoxydable 38x8mm | Alya Blade',
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
      title: 'Lame Injecteur Titane Rainurée 38x8mm | Alya Blade',
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
      title: 'Lame Injecteur XCD Carbone Diamant 38x8mm | Alya Blade',
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
      title: 'Lame Injecteur Céramique Zircone 38x8x0,30mm | Alya Blade',
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
      title: 'Lame Injecteur Céramique Zircone 38x8x0,64mm | Alya Blade',
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
      title: 'Lame Injecteur Endurium HSS Céramique 38x8mm | Alya Blade',
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
      title: 'Lame Tranchant Simple 3-Facet Acier Carbone | Alya Blade',
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
    benefits: [
      { title: 'Longue Durée de Vie', description: 'Performance de coupe supérieure aux couteaux standard grâce à l\'acier Sheffield.', icon: 'Clock' },
      { title: 'Utilisation Sécurisée', description: 'Conception à pointe fixe pour une coupe contrôlée et sûre.', icon: 'Shield' },
      { title: 'Design Ergonomique', description: 'Prise en main sans fatigue lors d\'une utilisation prolongée.', icon: 'Zap' },
    ],
    longDescription: `
      <p>RETRO LIGHT KNIFE est un couteau manuel premium conçu pour un usage industriel. Son corps en métal moulé sous pression assure la durabilité même lors d'une utilisation intensive.</p>

      <h3>Caractéristiques Principales</h3>
      <ul>
        <li>Tranchant fabriqué en acier Sheffield</li>
        <li>Corps en métal moulé sous pression pour une durabilité maximale</li>
        <li>Design ergonomique — aucune fatigue lors d'une utilisation prolongée</li>
        <li>Mécanisme de changement de lame facile et sécurisé</li>
      </ul>

      <h3>Recommandations d'Utilisation</h3>
      <p>Idéal pour les entrepôts, la logistique, les lignes de production et les travaux de coupe généraux. Haute performance pour la découpe de carton, film plastique, matériaux d'emballage et similaires.</p>
    `,
    seo: {
      title: 'RETRO LIGHT KNIFE | Couteau Manuel Métal Moulé | Alya Blade',
      description: 'Couteau manuel RETRO LIGHT KNIFE en acier Sheffield avec corps en métal moulé. Conforme aux normes de sécurité au travail, durable et ergonomique.',
      keywords: ['couteau manuel', 'couteau métal moulé', 'couteau sécurité', 'acier Sheffield', 'Durham Duplex', 'couteau industriel', 'couteau ergonomique'],
    },
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
  '3-delikli-jilet-020': {
    name: 'Lame de Refendage 3 Trous',
    subtitle: 'Revêtement Titane — 0,20mm',
    description: 'Lame de refendage 3 trous haute performance en acier Sheffield avec revêtement titane. Jilet industriel haute performance pour la découpe de textiles, papier et films.',
    features: [
      'Revêtement titane',
      'Acier Sheffield',
      'Dureté HRC 60-62',
      'Montage 3 trous',
      'Différentes options d\'épaisseur',
      'Longue durée de vie',
    ],
    applications: ['Découpe textile', 'Traitement de papier', 'Découpe de film'],
    benefits: [
      { title: 'Revêtement Titane', description: 'Durée de vie 3x supérieure aux lames standard grâce au revêtement titane.', icon: 'Shield' },
      { title: 'Coupe de Précision', description: 'Qualité de coupe nette et précise grâce à la haute dureté.', icon: 'Target' },
      { title: 'Montage Compatible', description: 'Changement facile avec le système de montage standard 3 trous.', icon: 'Settings' },
    ],
    longDescription: `
      <p>La Lame de Refendage 3 Trous est une lame de coupe haute performance spécialement conçue pour les machines de refendage industrielles. Le revêtement titane assure une longue durée de vie et une résistance à l'usure.</p>

      <h3>Caractéristiques Principales</h3>
      <ul>
        <li>Fabriquée en acier Sheffield</li>
        <li>Résistance supplémentaire grâce au revêtement titane</li>
        <li>Dureté HRC 60-62</li>
        <li>Système de montage standard 3 trous</li>
        <li>Différentes options d'épaisseur : 0,20mm, 0,25mm, 0,30mm</li>
      </ul>

      <h3>Domaines d'Application</h3>
      <p>Utilisée pour le refendage de précision de textiles, papier, film plastique, matériaux d'emballage et matériaux fins similaires. Offre des performances supérieures notamment sur les machines de refendage à haute vitesse.</p>
    `,
    seo: {
      title: 'Lame de Refendage 3 Trous 0,20mm | Alya Blade',
      description: 'Lame de refendage 3 trous avec revêtement titane en acier Sheffield. Haute performance pour la découpe de textiles, papier et films. Distributeur autorisé.',
      keywords: ['lame 3 trous', 'lame de refendage', 'revêtement titane', 'acier Sheffield', 'lame industrielle'],
    },
  },
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
      title: 'Lame Crochet B208 Textile Bras Larges | Alya Blade',
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
      title: 'Lame Crochet B209 Unilatérale 59×19mm | Alya Blade',
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
      title: 'Lame Crochet Super Longue 55×19mm | Alya Blade',
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
      title: 'Lame Crochet IF Textile IF-1 IF-2 | Alya Blade',
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
      title: 'Lame Crochet HOB-1 Grande 90×39,5mm | Alya Blade',
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
  'olfa-mtb': {
    name: 'OLFA-MTB - Lame Sécable 12,5mm',
    subtitle: 'Lame de rechange compatible OLFA MTB/FWB',
    description: 'Lame sécable segmentée de 12,5mm en acier SK5 haut carbone. Compatible avec les porte-lames OLFA séries MTB et FWB. Version standard 0,45mm et ultra-tranchante 0,25mm.',
    shortDescription: 'Lame sécable 12,5mm compatible OLFA MTB-10 et FWB-10. Acier SK5, versions standard et ultra-tranchante.',
    features: ['Acier SK5 haut carbone', 'Compatible OLFA MTB-10 et FWB-10', 'Segments sécables', 'Épaisseur 0,45mm standard / 0,25mm ultra-fine', 'Largeur 12,5mm pour cutters OLFA moyens', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Cutters OLFA série MTB', 'Cutters OLFA série FWB', 'Design graphique et découpe de précision', 'Application de vinyle et films'],
    seo: {
      title: 'OLFA-MTB Lame Sécable 12,5mm | Alya Blade',
      description: 'Lame sécable 12,5mm compatible OLFA MTB-10 et FWB-10. Acier SK5, épaisseur 0,45mm standard et 0,25mm ultra-tranchante. Qualité Sheffield, HRC 58-62.',
      keywords: ['lame OLFA MTB', 'lame sécable 12,5mm', 'OLFA MTB-10', 'OLFA FWB-10', 'lame de rechange OLFA', 'lame cutter 12,5mm'],
    },
    benefits: [
      { title: 'Compatibilité OLFA totale', description: 'Compatible avec les porte-lames OLFA séries MTB et FWB.', icon: 'CheckCircle' },
      { title: 'Option ultra-tranchante', description: 'Version FWB-10 en 0,25mm pour une découpe de précision exceptionnelle.', icon: 'Target' },
    ],
    longDescription: '<p>La lame sécable OLFA-MTB de 12,5mm est fabriquée en acier SK5 haut carbone, dureté HRC 58-62. Entièrement compatible avec les porte-lames OLFA séries MTB et FWB.</p><p>Disponible en deux versions : MTB-10 standard (83,3×12,5×0,45mm) et FWB-10 ultra-tranchante (85×12,5×0,25mm). La version ultra-fine de 0,25mm offre une précision de découpe exceptionnelle pour les matériaux fins et les films.</p>',
    availableSizes: ['83,3×12,5×0,45mm — OLFA MTB-10 Standard', '85×12,5×0,25mm — OLFA FWB-10 Ultra-tranchante'],
  },

  // =============================================================================
  // COUTEAUX DE SÉCURITÉ - MARTOR & PROFESSIONNELS
  // =============================================================================
  'ok': {
    name: 'OK Lame — Lame Flèche',
    subtitle: '30,4×25,0×0,50mm',
    description: 'Lame OK (Arrow Blade). 30,4×25,0×0,50mm, acier carbone, double tranchant (deux bords affûtés), 2 fentes ouvertes + 1 trou. Machines de coupe industrielles de précision, décollage d\'étiquettes/câbles, coupe de rubans, ouverture d\'emballages, systèmes de coupe automatiques.',
    shortDescription: 'Lame flèche OK. 30,4×25,0×0,50mm, acier carbone, double tranchant, 2 fentes + 1 trou. Décollage d\'étiquettes, coupe de rubans, systèmes automatiques.',
    features: [
      '30,4×25,0×0,50mm taille compacte',
      'Affûtage double tranchant — deux bords affûtés',
      '2 fentes ouvertes + 1 trou — options de montage multiples',
      'Acier carbone — grand tranchant, facile à réaffûter',
      'Épaisseur 0,50mm — coupe fine et précise',
      'Dureté HRC 58-62 — tranchant durable',
      'Structure réaffûtable — réutilisable',
    ],
    applications: [
      'Décollage d\'étiquettes / câbles',
      'Coupe de rubans',
      'Ouverture d\'emballages',
      'Systèmes de coupe automatiques',
      'Électronique',
      'Plastique / film / feuille',
      'Textile',
    ],
    seo: {
      title: 'OK Lame Flèche 30,4×25mm | Alya Blade',
      description: 'Lame flèche OK, 30,4×25,0×0,50mm, acier carbone, double tranchant, 2 fentes + 1 trou. Étiquettes, câbles, rubans, coupe automatique, électronique. Distributeur autorisé.',
      keywords: ['lame flèche', 'lame OK', 'lame double tranchant', 'lame industrielle', 'acier carbone', 'coupe étiquettes', 'décapage câbles'],
    },
    benefits: [
      { title: 'Double Tranchant — 2× Durée', description: 'Les deux bords sont affûtés : quand un bord s\'émousse, utilisez l\'autre côté, doublant la durée de vie.', icon: 'RotateCcw' },
      { title: 'Taille Compacte — Coupe Précise', description: '30,4×25,0mm idéal pour espaces restreints, logements de machines automatiques et positionnement précis.', icon: 'Target' },
      { title: 'Acier Carbone — Réaffûtage Facile', description: 'L\'acier carbone offre un grand tranchant et une structure réaffûtable pour un usage durable et économique.', icon: 'Layers' },
      { title: '2 Fentes + 1 Trou — Montage Multiple', description: 'Fentes ouvertes et trou central compatibles avec supports manuels, machines automatiques et fixations spéciales.', icon: 'Link' },
    ],
    longDescription: `<p><strong>Lame OK (Arrow Blade)</strong> est une lame industrielle compacte à double tranchant en acier carbone de 30,4×25,0×0,50mm. Sa conception avec 2 fentes ouvertes et 1 trou assure un montage sécurisé dans divers supports et systèmes de machines.</p>
      <h3>Pourquoi la lame flèche OK ?</h3>
      <p>Plus petite que les lames utilitaires à simple tranchant, la lame OK est idéale pour les applications nécessitant une <strong>coupe précise et contrôlée</strong>. Sa structure compacte permet une utilisation facile dans les espaces restreints et les logements de machines automatiques.</p>
      <h3>Affûtage double tranchant — deux bords affûtés</h3>
      <p>Les deux bords sont affûtés. Quand un bord s'émousse, utilisez l'autre côté — doublant la durée de vie. La structure en acier carbone permet également le réaffûtage pour une utilisation prolongée.</p>
      <h3>2 fentes ouvertes + 1 trou — montage multiple</h3>
      <p>Les 2 fentes ouvertes permettent à la lame de coulisser dans divers supports. Le trou central permet la fixation par vis ou le verrouillage par goupille de machine automatique.</p>`,
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
    name: 'B122 - Lame Sécable 9mm',
    subtitle: 'Lame cutter sécable 9mm — Acier SK5',
    description: 'Lame cutter sécable de 9mm en acier SK5 haut carbone. 13 points de rupture pour renouveler le tranchant. Compatible OLFA AB-10, ABB-50 et SAB-10. Versions standard, inox, TiN et angle 30°.',
    shortDescription: 'Lame sécable 9mm, acier SK5, 9 variantes : standard, inox SUS420J2, revêtement TiN, angle 30°. Compatible OLFA.',
    features: ['Acier SK5 haut carbone — HRC 58-62', '13 segments sécables pour renouveler le tranchant', 'Épaisseur 0,40mm (Sheffield) / 0,38mm (compatible OLFA)', 'Option revêtement TiN (nitrure de titane) — durée de vie 3× plus longue', 'Alternative inox SUS420J2 — résistance à la corrosion', 'Version angle 30° — découpe précise vinyle et films', 'Compatible OLFA AB-10, ABB-50, SAB-10', 'Fabrication Sheffield, Angleterre conforme ISO 9001'],
    applications: ['Emballage et ouverture de cartons', 'Découpe de vinyle, films et revêtements', 'Pose de papier peint', 'Design graphique et finition d\'impression', 'Revêtements de sol PVC et vinyle', 'Opérations logistiques et entrepôt', 'Bureau et papeterie'],
    seo: {
      title: 'B122 Lame Cutter Sécable 9mm | Lame de Cutter | Alya Blade',
      description: 'Lame B122 sécable 9mm en acier SK5. 9 variantes : standard, inox, TiN, angle 30°. Compatible OLFA AB-10. Qualité Sheffield HRC 58-62.',
      keywords: ['lame cutter 9mm', 'B122', 'lame sécable 9mm', 'lame OLFA AB-10', 'lame cutter TiN', 'lame sécable segmentée'],
    },
    benefits: [
      { title: '9 variantes', description: 'Options standard, inox, TiN et angle 30° pour chaque application.', icon: 'Settings' },
      { title: 'Revêtement TiN', description: 'Le nitrure de titane offre une durée de vie 3× supérieure au carbone standard.', icon: 'Clock' },
      { title: 'Qualité Sheffield', description: 'Acier haut carbone traité thermiquement à HRC 58-62 à Sheffield, Angleterre.', icon: 'Award' },
    ],
    longDescription: '<p>Les lames B122 sécables de 9mm sont fabriquées en acier SK5 haut carbone, dureté HRC 58-62. Avec 13 points de rupture, chaque cassure révèle un tranchant neuf d\'usine.</p><p>Disponibles en 9 variantes : carbone standard, inox SUS420J2 anticorrosion, revêtement TiN (nitrure de titane) durée 3×, angle 30° pour vinyle et films, et versions compatibles OLFA AB-10, AB-10S, ABB-50 et SAB-10.</p><p><strong>Options matériau :</strong> Carbone standard (SK5), inox (SUS420J2), revêtement TiN. Compatible avec tous les cutters standard 9mm dont OLFA, Stanley et Martor.</p>',
    availableSizes: ['80×9×0,40mm — Standard', '80×9×0,40mm — Inox', '80×9×0,40mm — Revêtement TiN', '72×9×0,40mm — Angle 30°', '72×9×0,40mm — Angle 30° + TiN', '80×9×0,38mm — Compatible OLFA AB-10', '80×9×0,38mm — OLFA AB-10S Inox', '80×9×0,38mm — OLFA ABB-50 Extra-tranchante', '74×9×0,38mm — OLFA SAB-10 Angle 30°'],
  },
  'b124': {
    name: 'B124 - Lame Non-Segmentée 9mm',
    subtitle: 'Lame cutter non-segmentée 9mm — Tranchant continu',
    description: 'Lame cutter non-segmentée de 9mm en acier SK5 haut carbone. Tranchant continu sans points de rupture pour une découpe droite sans vibration. Compatible avec tous les cutters standard 9mm.',
    shortDescription: 'Lame non-segmentée 9mm, acier SK5, tranchant continu sans vibration. 80×9×0,40mm.',
    features: ['Acier SK5 haut carbone', 'Tranchant continu non-segmenté — découpe sans vibration', 'Épaisseur 0,40mm', 'Structure monobloc sans points de rupture — applications lourdes', 'Compatible tous cutters standard 9mm', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Découpes droites de précision', 'Design graphique et maquettisme', 'Découpe de films et revêtements fins', 'Bureau et papeterie'],
    seo: {
      title: 'B124 Lame Cutter Non-Segmentée 9mm | Alya Blade',
      description: 'Lame B124 non-segmentée 9mm, acier SK5, tranchant continu. 80×9×0,40mm. Découpe droite sans vibration. Qualité Sheffield.',
      keywords: ['lame non-segmentée 9mm', 'B124', 'lame continue 9mm', 'lame cutter sans segment'],
    },
    benefits: [
      { title: 'Découpe sans vibration', description: 'Tranchant continu sans point de rupture pour une coupe droite et précise.', icon: 'Target' },
      { title: 'Robustesse supérieure', description: 'Structure monobloc résistant à la flexion sous charges lourdes.', icon: 'Shield' },
    ],
    longDescription: '<p>La lame B124 non-segmentée de 9mm en acier SK5 haut carbone. Le tranchant continu sans points de rupture assure une découpe droite sans aucune vibration.</p><p>Idéale pour les lignes de coupe droites longues et les applications nécessitant une stabilité totale de la lame. Compatible avec tous les cutters standard 9mm.</p>',
    availableSizes: ['80×9×0,40mm — Non-segmentée standard'],
  },
  'b121': {
    name: 'B121 - Lame Sécable Industrielle 18mm',
    subtitle: 'Lame cutter sécable industrielle 18mm — Acier SK5',
    description: 'Lame cutter sécable de 18mm en acier SK5 haut carbone. 8 points de rupture, épaisseur 0,50mm. Compatible OLFA LB, LBB, LBD, LWB. Versions standard, TiN, extra-tranchante et 15 segments.',
    shortDescription: 'Lame sécable industrielle 18mm, SK5, 7 variantes : standard, fine 0,43mm, TiN, OLFA LB-10/LBB-50/LBD-50.',
    features: ['Acier SK5 haut carbone — HRC 58-62', '8 segments sécables pour renouveler le tranchant', 'Épaisseur 0,50mm — applications industrielles lourdes', 'Version fine 0,43mm — découpe de précision', 'Option revêtement TiN — durée 3× plus longue', 'Version OLFA LBD à 15 segments — usage plus économique', 'Compatible OLFA LB-10, LBB-50, LBD-50, LWB-3B', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Découpe de carton et ondulé', 'Revêtements de sol PVC et vinyle', 'Construction et rénovation', 'Emballage et ouverture de cartons', 'Découpe de cuir et textile', 'Pose de papier peint', 'Opérations logistiques et entrepôt'],
    seo: {
      title: 'B121 Lame Cutter Sécable 18mm | Alya Blade',
      description: 'Lame B121 sécable 18mm, acier SK5. 7 variantes : standard 0,50mm, fine 0,43mm, TiN. Compatible OLFA LB-10. Qualité Sheffield.',
      keywords: ['lame cutter 18mm', 'B121', 'lame sécable 18mm', 'lame OLFA LB-10', 'lame industrielle 18mm', 'lame cutter TiN'],
    },
    benefits: [
      { title: '7 variantes pro', description: 'Standard, fine, TiN, extra-tranchante, 15 segments et dentelée — pour chaque usage.', icon: 'Settings' },
      { title: 'Résistance industrielle', description: 'Épaisseur 0,50mm pour une résistance supérieure à la flexion.', icon: 'Shield' },
      { title: 'Compatibilité OLFA', description: 'Compatible avec les séries OLFA LB, LBB, LBD et LWB.', icon: 'CheckCircle' },
    ],
    longDescription: '<p>Les lames B121 sécables de 18mm sont fabriquées en acier SK5 haut carbone, dureté HRC 58-62. Épaisseur de 0,50mm pour les applications industrielles et 0,43mm pour la découpe de précision.</p><p>Disponibles en 7 variantes dont le revêtement TiN (durée 3×), OLFA LBD-50 à 15 segments pour un usage économique, et LWB-3B à tranchant dentelé pour l\'isolation et la fibre de verre.</p>',
    availableSizes: ['100×18×0,50mm — Standard 8 segments', '100×18×0,43mm — Version fine', '100×18×0,50mm — Revêtement TiN', '100×18×0,50mm — Compatible OLFA LB-10', '100×18×0,50mm — OLFA LBB-50 Extra-tranchante', '100×18×0,50mm — OLFA LBD-50 15 segments', '100×18×0,50mm — OLFA LWB-3B Dentelée'],
  },
  'b123': {
    name: 'B123 - Lame Non-Segmentée 18mm',
    subtitle: 'Lame cutter non-segmentée 18mm — Résistance à la flexion',
    description: 'Lame cutter non-segmentée de 18mm en acier SK5 haut carbone. Tranchant continu réduisant le risque de flexion et rupture sous charges lourdes. Versions TiN et OLFA LSOL-10.',
    shortDescription: 'Lame non-segmentée 18mm, SK5, 4 variantes : standard 0,50mm, fine 0,43mm, TiN, OLFA LSOL-10.',
    features: ['Acier SK5 haut carbone', 'Tranchant continu non-segmenté — résistance à la flexion/rupture', 'Épaisseur standard 0,50mm / fine 0,43mm', 'Option revêtement TiN (nitrure de titane)', 'Compatible OLFA LSOL-10', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Découpe continue sous charges lourdes', 'Carton et ondulé', 'Revêtements de sol PVC et vinyle', 'Cuir et textiles épais', 'Industrie de l\'emballage'],
    seo: {
      title: 'B123 Lame Non-Segmentée 18mm | Alya Blade',
      description: 'Lame B123 non-segmentée 18mm, acier SK5. 4 variantes : standard, fine, TiN. Compatible OLFA LSOL-10. Qualité Sheffield.',
      keywords: ['lame non-segmentée 18mm', 'B123', 'lame industrielle robuste', 'lame OLFA LSOL-10', 'lame cutter continue'],
    },
    benefits: [
      { title: 'Résistance à la flexion', description: 'Tranchant continu sans point de rupture résistant à la flexion sous charges lourdes.', icon: 'Shield' },
      { title: 'Revêtement TiN', description: 'Option nitrure de titane pour une durée de vie prolongée.', icon: 'Clock' },
    ],
    longDescription: '<p>La lame B123 non-segmentée de 18mm en acier SK5 haut carbone. Le tranchant continu sans points de rupture réduit le risque de flexion et de cassure sous charges lourdes.</p><p>Disponible en 4 variantes : standard (0,50mm), fine (0,43mm), revêtement TiN et compatible OLFA LSOL-10.</p>',
    availableSizes: ['100×18×0,50mm — Non-segmentée standard', '100×18×0,43mm — Non-segmentée fine', '100×18×0,50mm — Revêtement TiN', '100×18×0,50mm — Compatible OLFA LSOL-10'],
  },
  'b123-018': {
    name: 'B123 018 - Lame Non-Segmentée 18mm – Courte',
    subtitle: 'Lame cutter courte compacte 60mm',
    description: 'Lame cutter non-segmentée courte de 18mm en acier SK5 haut carbone. Longueur compacte de 60mm pour manœuvrer dans les espaces restreints. Tranchant continu non-segmenté.',
    shortDescription: 'Lame courte non-segmentée 60×18×0,50mm. Acier SK5 pour espaces restreints.',
    features: ['Acier SK5 haut carbone', 'Longueur compacte 60mm — découpe en espace restreint', 'Tranchant continu non-segmenté', 'Épaisseur 0,50mm', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Espaces restreints et confinés', 'Opérations de découpe de précision', 'Maquettisme et modélisme', 'Découpe de goulottes de câbles'],
    seo: {
      title: 'B123 018 Lame Cutter Courte 18mm | Alya Blade',
      description: 'Lame B123 018 courte non-segmentée, 60×18×0,50mm. Acier SK5, design compact pour espaces restreints. Qualité Sheffield.',
      keywords: ['lame cutter courte', 'B123-018', 'lame compacte 18mm', 'lame 60mm'],
    },
    benefits: [
      { title: 'Design compact', description: 'Longueur 60mm offrant une excellente manœuvrabilité en espace restreint.', icon: 'Minimize' },
    ],
    longDescription: '<p>La lame B123 018 courte non-segmentée de 60×18×0,50mm. La longueur compacte de 60mm offre une manœuvrabilité supérieure dans les espaces restreints et confinés.</p>',
    availableSizes: ['60×18×0,50mm — Non-segmentée courte'],
  },
  'b096': {
    name: 'B096 - Lame Non-Segmentée 12mm – Fente Ovale',
    subtitle: 'Lame cutter 12mm à fente de fixation ovale',
    description: 'Lame cutter non-segmentée de 12mm en acier SK5 haut carbone. Fente de fixation ovale compatible avec les cutters à mécanisme spécial. 89mm de long, 0,50mm d\'épaisseur. Tranchant continu monobloc.',
    shortDescription: 'Lame non-segmentée 89×12×0,50mm à fente ovale. Acier SK5.',
    features: ['Acier SK5 haut carbone', 'Fente de fixation ovale — compatible porte-lames spéciaux', 'Tranchant continu monobloc', '89mm de long, 12mm de large', 'Épaisseur 0,50mm', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Cutters à fente ovale', 'Découpe industrielle de précision', 'Découpe de carton et emballage'],
    seo: {
      title: 'B096 Lame Cutter 12mm Ovale | Lame Fente Ovale | Alya Blade',
      description: 'Lame B096 non-segmentée 12mm à fente ovale, 89×12×0,50mm. Acier SK5. Qualité Sheffield.',
      keywords: ['lame 12mm ovale', 'B096', 'lame fente ovale', 'lame cutter 12mm'],
    },
    benefits: [
      { title: 'Fente ovale', description: 'Design spécial compatible avec les porte-lames à fente ovale.', icon: 'CheckCircle' },
    ],
    longDescription: '<p>La lame B096 non-segmentée de 12mm avec fente de fixation ovale unique. Dimensions 89×12×0,50mm en acier SK5 haut carbone. Conçue spécialement pour les cutters à mécanisme de fixation à fente ovale.</p>',
    availableSizes: ['89×12×0,50mm — Fente ovale unique'],
  },
  'lwb': {
    name: 'LWB - Lame Dentelée 18mm',
    subtitle: 'Lame cutter dentelée 18mm — Isolation et fibres',
    description: 'Lame cutter dentelée (denture scie) non-segmentée de 18mm en acier SK5 haut carbone. Performance supérieure pour la laine de verre, laine de roche, fibre de verre, polystyrène et matériaux d\'isolation. Compatible OLFA LWB-3B.',
    shortDescription: 'Lame dentelée 100×18×0,50mm. Pour laine de verre, fibre de verre et isolation. Compatible OLFA LWB-3B.',
    features: ['Acier SK5 haut carbone', 'Tranchant dentelé (denture scie) — anti-glissement', 'Non-segmentée — aucun risque de rupture', 'Découpe fluide des matériaux fibreux et poreux', 'Compatible OLFA LWB-3B', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Découpe laine de verre et de roche', 'Panneaux de fibre de verre', 'Découpe polystyrène EPS/XPS', 'Matériaux d\'isolation thermique', 'Construction et rénovation'],
    seo: {
      title: 'LWB Lame Dentelée 18mm | Lame Isolation | Alya Blade',
      description: 'Lame LWB dentelée 18mm, 100×18×0,50mm. Pour laine de verre, fibre de verre, isolation. OLFA LWB-3B. Acier SK5 Sheffield.',
      keywords: ['lame dentelée 18mm', 'LWB', 'lame isolation', 'lame laine de verre', 'OLFA LWB-3B', 'lame cutter denture scie'],
    },
    benefits: [
      { title: 'Tranchant dentelé spécialisé', description: 'La denture scie empêche le glissement des matériaux fibreux lors de la découpe.', icon: 'Grip' },
      { title: 'Anti-rupture', description: 'Structure non-segmentée éliminant tout risque de cassure.', icon: 'Shield' },
    ],
    longDescription: '<p>La lame LWB dentelée de 18mm est spécialement conçue pour la découpe de matériaux fibreux et poreux. Le tranchant dentelé empêche le glissement du matériau et assure une coupe nette dès le premier contact.</p><p>Idéale pour la laine de verre, laine de roche, fibre de verre, polystyrène (EPS/XPS) et matériaux d\'isolation. Compatible OLFA LWB-3B.</p>',
    availableSizes: ['100×18×0,50mm — Tranchant dentelé (denture scie)'],
  },
  'b126': {
    name: 'B126 - Lame Sécable Extra-Large 25mm',
    subtitle: 'Lame cutter industrielle sécable 25mm — Épaisseur 0,70mm',
    description: 'Lame cutter sécable extra-large de 25mm en acier SK5 haut carbone. Épaisseur 0,70mm pour une résistance maximale à la flexion. Applications industrielles lourdes. Compatible OLFA HB-20 et HBB-5B.',
    shortDescription: 'Lame sécable 25mm, SK5, épaisseur 0,70mm. 3 variantes : standard, OLFA HB-20, OLFA HBB-5B extra-tranchante.',
    features: ['Acier SK5 haut carbone — HRC 58-62', '25mm extra-large — profondeur de coupe maximale', 'Épaisseur 0,70mm — résistance industrielle à la flexion', 'Structure segmentée sécable', 'Alternative extra-tranchante (Black Blade)', 'Compatible OLFA HB-20 et HBB-5B', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Carton ondulé épais', 'Découpe de plaques de plâtre (drywall)', 'Moquette et revêtements de sol lourds', 'Cuir et textiles épais', 'Construction et rénovation', 'Emballage industriel'],
    seo: {
      title: 'B126 Lame Sécable 25mm | Alya Blade',
      description: 'Lame B126 sécable 25mm, épaisseur 0,70mm, acier SK5. Compatible OLFA HB-20. Qualité Sheffield HRC 58-62.',
      keywords: ['lame cutter 25mm', 'B126', 'lame sécable extra-large', 'lame OLFA HB-20', 'lame industrielle 25mm', 'lame 0,70mm'],
    },
    benefits: [
      { title: 'Épaisseur industrielle', description: '0,70mm offre une résistance supérieure à la flexion pour les découpes lourdes.', icon: 'Shield' },
      { title: 'Profondeur maximale', description: '25mm de largeur pour couper les matériaux les plus épais.', icon: 'Maximize' },
      { title: 'Compatibilité OLFA', description: 'Compatible avec les séries OLFA HB-20 et HBB-5B.', icon: 'CheckCircle' },
    ],
    longDescription: '<p>Les lames B126 sécables de 25mm extra-larges sont fabriquées en acier SK5, épaisseur 0,70mm pour une résistance maximale à la flexion. Conçues pour les applications industrielles les plus exigeantes.</p><p>Disponibles en 3 variantes : standard (127×25×0,70mm), compatible OLFA HB-20 et extra-tranchante OLFA HBB-5B (Black Blade).</p>',
    availableSizes: ['127×25×0,70mm — Standard', '126×25×0,70mm — Compatible OLFA HB-20', '126×25×0,70mm — OLFA HBB-5B Extra-tranchante'],
  },
  'b125': {
    name: 'B125 - Lame Non-Segmentée Extra-Large 25mm',
    subtitle: 'Lame cutter non-segmentée 25mm — Résistance industrielle',
    description: 'Lame cutter non-segmentée extra-large de 25mm en acier SK5 haut carbone. Épaisseur 0,70mm. Tranchant continu pour résistance à la flexion et rupture dans les applications industrielles lourdes.',
    shortDescription: 'Lame non-segmentée 127×25×0,70mm. Acier SK5, tranchant continu industriel.',
    features: ['Acier SK5 haut carbone — HRC 58-62', '25mm extra-large — profondeur de coupe maximale', 'Épaisseur 0,70mm — résistance industrielle à la flexion', 'Tranchant continu non-segmenté — aucun risque de rupture', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Applications industrielles lourdes', 'Carton ondulé épais', 'Moquette et revêtements de sol', 'Cuir et textiles épais'],
    seo: {
      title: 'B125 Lame Non-Segmentée 25mm | Alya Blade',
      description: 'Lame B125 non-segmentée 25mm, épaisseur 0,70mm, acier SK5. Tranchant continu industriel. Qualité Sheffield.',
      keywords: ['lame non-segmentée 25mm', 'B125', 'lame industrielle extra-large', 'lame cutter robuste 25mm'],
    },
    benefits: [
      { title: 'Robustesse maximale', description: 'Tranchant continu en 0,70mm résistant à la flexion dans les conditions les plus difficiles.', icon: 'Shield' },
    ],
    longDescription: '<p>La lame B125 non-segmentée de 25mm, épaisseur 0,70mm, offre une résistance maximale à la flexion et à la rupture. Le tranchant continu sans points de rupture est idéal pour les applications industrielles continues.</p>',
    availableSizes: ['127×25×0,70mm — Non-segmentée standard'],
  },
  'b092': {
    name: 'B092 - Lame Monobloc Sans Perforations',
    subtitle: 'Lame céramique monobloc sans trous de fixation',
    description: 'Lame monobloc à corps céramique sans perforations de fixation. Dimensions 92×8,2×0,43mm. Conçue pour les cutters à mécanisme de fixation spécial sans trou de montage. Tranchant continu non-segmenté.',
    shortDescription: 'Lame céramique monobloc 92×8,2×0,43mm sans perforations. Pour cutters à fixation spéciale.',
    features: ['Corps céramique monobloc', 'Sans perforations — pour cutters à fixation spéciale', '92mm de long, 8,2mm de large, 0,43mm d\'épaisseur', 'Tranchant continu non-segmenté', 'Format compact — compatible cutters étroits', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Cutters à fixation sans trou', 'Découpe industrielle de précision', 'Maquettisme et modélisme', 'Applications de design graphique'],
    seo: {
      title: 'B092 Lame Monobloc Sans Perforations | Alya Blade',
      description: 'Lame B092 céramique monobloc sans perforations, 92×8,2×0,43mm. Pour cutters à fixation spéciale. Qualité Sheffield, HRC 58-62.',
      keywords: ['lame sans perforations', 'B092', 'lame céramique monobloc', 'lame cutter spéciale', 'lame 8,2mm'],
    },
    benefits: [
      { title: 'Design unique', description: 'Corps céramique monobloc sans perforations pour cutters à fixation spéciale.', icon: 'Star' },
      { title: 'Format compact', description: '92×8,2mm pour le travail dans les espaces restreints.', icon: 'Minimize' },
    ],
    longDescription: '<p>La lame B092 est unique avec son corps céramique monobloc et son design sans perforations de fixation. Dimensions 92×8,2×0,43mm, conçue spécialement pour les cutters à mécanisme de fixation sans trou de montage.</p><p>Le tranchant continu non-segmenté offre une ligne de coupe nette et stable. Idéale pour les applications de précision et le modélisme.</p>',
    availableSizes: ['92×8,2×0,43mm — Céramique monobloc sans perforations'],
  },

  // =============================================================================
  // LAMES D'ARTISANAT / LAMES DE HOBBY / LAMES DE COUTEAUX D'ART
  // =============================================================================
  'b111': {
    name: 'B111 - Lame d\'Artisanat de Précision N°11',
    description: 'Lame d\'artisanat/hobby de précision type N°11. 55,5×10,3×0,53mm. La lame de hobby la plus populaire au monde. Disponible en pointe aiguë et arrondie. Compatible X-Acto et OLFA. Pour modélisme, arts graphiques, architecture, électronique et laboratoire.',
    features: ['Géométrie N°11 — la lame de hobby la plus populaire au monde', '55,5×10,3×0,53mm', 'Pointe aiguë et arrondie', 'Compatible X-Acto et OLFA', 'Découpe de précision pour les détails'],
    applications: ['Modélisme et miniatures', 'Arts graphiques et illustration', 'Maquettes d\'architecture', 'Ébavurage de circuits électroniques', 'Dissection et préparation en laboratoire'],
    seo: {
      title: 'B111 Lame Hobby N°11 | Lame d\'Artisanat de Précision | Alya Blade',
      description: 'B111 lame hobby de précision. 55,5×10,3×0,53mm, N°11. Pointe aiguë et arrondie. Modélisme, graphisme, architecture, électronique. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame hobby N°11', 'lame artisanat précision', 'B111', 'lame modélisme', 'lame scalpel', 'lame hobby', 'arts graphiques'],
    },
    benefits: [
      { title: 'Géométrie N°11', description: 'Profil N°11 standard mondial — le type de lame hobby le plus populaire.', icon: 'Star' },
      { title: '2 Variantes', description: 'Options pointe aiguë (détail) et pointe arrondie (sécurité).', icon: 'Layers' },
      { title: 'Compatibilité Universelle', description: 'Entièrement compatible avec X-Acto, OLFA et manches standard similaires.', icon: 'Link' },
    ],
    longDescription: `<p>La B111 est une série de lames professionnelles dotées de la <strong>géométrie N°11</strong>, le type de lame hobby/précision le plus populaire au monde. En 55,5×10,3×0,53mm, elle est entièrement compatible avec les manches standard X-Acto, OLFA et similaires.</p><p>Deux variantes sont proposées : <strong>Pointe Aiguë</strong> — pour les détails fins et coupes précises ; <strong>Pointe Arrondie</strong> — pour une manipulation plus sûre et des coupes linéaires régulières.</p><p><strong>Applications :</strong> Modélisme, arts graphiques, maquettes d'architecture, nettoyage de circuits électroniques, dissection en laboratoire, découpe de vinyle, arts du papier et post-traitement d'impression 3D.</p>`,
    availableSizes: [
      '55,5×10,3×0,53mm — Pointe Aiguë',
      '55,5×10,3×0,53mm — Pointe Arrondie',
    ],
  },
  'b112': {
    name: 'B112 - Lame d\'Artisanat Compacte N°12',
    description: 'Lame de précision compacte type N°12. 42,6×9×0,53mm. Plus petite et agile que la N°11 pour espaces étroits et découpe courbe. Pour design graphique, maroquinerie et arts du papier.',
    features: ['Géométrie compacte N°12', '42,6×9×0,53mm', 'Taille réduite pour espaces étroits', 'Idéale pour découpes courbes et détaillées', 'Qualité Sheffield Durham Duplex'],
    applications: ['Design graphique', 'Modélisme de précision', 'Maroquinerie', 'Arts du papier'],
    seo: {
      title: 'B112 Lame Hobby N°12 | Alya Blade',
      description: 'B112 lame hobby compacte. 42,6×9×0,53mm, N°12. Design graphique, maroquinerie, modélisme fin. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame hobby N°12', 'lame artisanat compacte', 'B112', 'lame détail fin', 'lame hobby précision'],
    },
    benefits: [
      { title: 'Profil Compact', description: 'Type N°12 — maniabilité supérieure dans les espaces étroits.', icon: 'Minimize' },
      { title: 'Découpe Courbe', description: 'Performance de précision sur les petits rayons de courbure.', icon: 'CircleDot' },
      { title: 'Qualité Sheffield', description: 'Acier Sheffield britannique — tranchant de longue durée.', icon: 'Shield' },
    ],
    longDescription: `<p>La B112 est une lame hobby de précision avec la <strong>géométrie compacte N°12</strong>. En 42,6×9×0,53mm, son profil est plus petit et plus agile que la lame N°11 standard.</p><p>Idéale pour les découpes courbes fines dans les espaces étroits et difficiles d'accès. Sa taille compacte offre une maniabilité supérieure pour les travaux de détail.</p><p><strong>Applications :</strong> Design graphique, modélisme fin, maroquinerie, arts du papier, préparation de peinture miniature et découpes de détail de précision.</p>`,
  },
  'b113': {
    name: 'B113 - Lame d\'Artisanat Longue N°13',
    description: 'Lame de précision longue type N°13. 52,7×9×0,60mm. Ligne de coupe étendue pour coupes droites longues. Épaisseur 0,60mm pour plus de rigidité. Pour modélisme, découpe d\'enseignes et vinyle.',
    features: ['Géométrie longue N°13', '52,7×9×0,60mm', 'Épaisseur 0,60mm — rigidité et stabilité supplémentaires', 'Pour coupes droites longues', 'Qualité Sheffield Durham Duplex'],
    applications: ['Modélisme', 'Découpe d\'enseignes', 'Application de vinyle', 'Découpe industrielle de précision'],
    seo: {
      title: 'B113 Lame Hobby N°13 | Lame Longue de Précision | Alya Blade',
      description: 'B113 lame hobby longue. 52,7×9×0,60mm, N°13. Modélisme, enseignes, vinyle. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame hobby N°13', 'lame artisanat longue', 'B113', 'lame enseignes', 'lame hobby précision'],
    },
    benefits: [
      { title: 'Profil Long', description: 'Géométrie N°13 — performance remarquable sur les coupes droites longues.', icon: 'ArrowRight' },
      { title: 'Extra Épaisse', description: 'Épaisseur 0,60mm — durabilité et stabilité supplémentaires.', icon: 'Shield' },
      { title: 'Refendage de Précision', description: 'Pointe fine pour une entrée précise, corps long pour une coupe régulière.', icon: 'Target' },
    ],
    longDescription: `<p>La B113 est une lame hobby de précision avec la <strong>géométrie longue N°13</strong>. En 52,7×9×0,60mm, elle offre une performance remarquable sur les coupes droites longues.</p><p>L'épaisseur de 0,60mm apporte une durabilité supplémentaire par rapport aux lames hobby standard de 0,53mm. Préférée en modélisme et découpe d'enseignes grâce à sa ligne de coupe étendue.</p><p><strong>Applications :</strong> Modélisme, découpe d'enseignes, application de vinyle, découpe industrielle de précision et opérations de refendage longues.</p>`,
  },
  'b114': {
    name: 'B114 - Lame d\'Artisanat N°14 — Titane et Carbone',
    description: 'Lame de précision N°14 en deux options : revêtement TiN (nitrure de titane) et acier carbone. 50,3×9×0,60mm. Le revêtement titane offre une durée de vie jusqu\'à 3× plus longue. Tranchant large biseauté pour coupe puissante et contrôlée.',
    features: ['Géométrie N°14 à tranchant large biseauté', '50,3×9×0,60mm', 'Revêtement TiN — durée de vie jusqu\'à 3× plus longue', 'Acier carbone — tranchant classique', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe de vinyle et films', 'Artisanat professionnel', 'Modélisme intensif', 'Découpe industrielle de précision'],
    seo: {
      title: 'B114 Lame Hobby N°14 TiN & Carbone | Alya Blade',
      description: 'B114 lame hobby de précision. 50,3×9×0,60mm, N°14. Revêtement TiN & carbone. Vinyle, modélisme, artisanat. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame hobby N°14', 'lame revêtement TiN', 'B114', 'lame nitrure de titane', 'lame artisanat précision'],
    },
    benefits: [
      { title: 'Revêtement TiN', description: 'Nitrure de Titane — durée de vie du tranchant jusqu\'\u00e0 3× plus longue.', icon: 'Sparkles' },
      { title: 'Double Variante', description: 'Revêtement TiN et acier carbone — choix selon l\'application.', icon: 'Layers' },
      { title: 'Géométrie N°14', description: 'Angle de coupe large — coupes contrôlées et puissantes.', icon: 'Target' },
    ],
    longDescription: `<p>La B114 est une lame hobby professionnelle à double variante avec la <strong>géométrie N°14</strong>. En 50,3×9×0,60mm, elle est disponible en version revêtement TiN (Nitrure de Titane) et acier carbone.</p><p>La variante <strong>TiN</strong> offre une durée de vie du tranchant jusqu\'\u00e0 3× plus longue que l'acier carbone standard. La variante <strong>Carbone</strong> offre un tranchant classique à un prix économique.</p><p><strong>Applications :</strong> Découpe de vinyle, artisanat professionnel, modélisme, découpe industrielle de précision et applications intensives.</p>`,
    availableSizes: [
      '50,3×9×0,60mm — Revêtement TiN',
      '50,3×9×0,60mm — Carbone',
    ],
  },
  'b141': {
    name: 'B141 - Lame de Précision Compacte à Pointe Biseautée',
    description: 'Lame d\'artisanat compacte à pointe biseautée. 36,8×8,4×0,53mm. Maniabilité supérieure dans les espaces étroits. Pour nettoyage de circuits électroniques, modélisme miniature et ébavurage de précision.',
    features: ['Design compact à pointe biseautée', '36,8×8,4×0,53mm', 'Idéal pour espaces étroits', 'Ébavurage et nettoyage de précision', 'Qualité Sheffield Durham Duplex'],
    applications: ['Modélisme miniature', 'Nettoyage de circuits électroniques', 'Travaux de détails fins'],
    seo: {
      title: 'B141 Lame Hobby Compacte | Alya Blade',
      description: 'B141 lame hobby compacte. 36,8×8,4×0,53mm, pointe biseautée. Miniatures, électronique, modélisme fin. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B141 lame hobby', 'lame artisanat compacte', 'lame miniature', 'lame précision', 'électronique découpe'],
    },
    benefits: [
      { title: 'Compacte', description: '36,8mm — maniabilité supérieure dans les espaces étroits.', icon: 'Minimize' },
      { title: 'Pointe Biseautée', description: 'Profil de coupe angulaire — contrôle aux angles difficiles.', icon: 'CornerRightDown' },
      { title: 'Précision', description: 'Épaisseur 0,53mm — pour travaux de détail fin.', icon: 'Target' },
    ],
    longDescription: `<p>La B141 est une lame hobby compacte à pointe biseautée en 36,8×8,4×0,53mm. Sa petite taille offre une maniabilité supérieure dans les espaces étroits et difficiles d'accès.</p><p><strong>Applications :</strong> Nettoyage de circuits électroniques, modélisme miniature, correction de prototypes PCB, modélisme fin et découpe de détail de précision.</p>`,
  },
  'b142': {
    name: 'B142 - Lame de Précision Large Grand Format',
    description: 'Lame d\'artisanat large grand format. 47×11,3×0,63mm. Épaisseur 0,63mm pour usage intensif. Idéale pour découpe sur grandes surfaces et raclage. Pour modélisme, carton et prototypage industriel.',
    features: ['Design large grand format', '47×11,3×0,63mm', 'Épaisseur 0,63mm — usage intensif', 'Découpe, raclage et nettoyage en une seule lame', 'Qualité Sheffield Durham Duplex'],
    applications: ['Grand modélisme', 'Raclage et nettoyage de surfaces', 'Prototypage industriel', 'Découpe de carton'],
    seo: {
      title: 'B142 Grande Lame Hobby 47×11,3mm | Lame Large | Alya Blade',
      description: 'B142 Grande lame hobby. 47×11,3×0,63mm profil large. Modélisme, raclage, prototypage. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B142 grande', 'lame profil large', 'grande lame artisanat', 'lame raclage', 'lame hobby'],
    },
    benefits: [
      { title: 'Profil Large', description: '47×11,3mm — découpe efficace sur grandes surfaces.', icon: 'Maximize' },
      { title: 'Usage Intensif', description: 'Épaisseur 0,63mm — conçue pour utilisation intensive.', icon: 'Shield' },
      { title: 'Polyvalente', description: 'Découpe, raclage et nettoyage en une seule lame.', icon: 'Layers' },
    ],
    longDescription: `<p>La B142 Grande est une lame hobby à profil large en 47×11,3×0,63mm. L'épaisseur de 0,63mm offre une durabilité pour usage intensif.</p><p>Le design à pointe biseautée large facilite la découpe, le raclage et le nettoyage sur de grandes surfaces.</p><p><strong>Applications :</strong> Modélisme, découpe de carton, prototypage industriel, opérations de raclage et de nettoyage.</p>`,
  },
  'b142k': {
    name: 'B142 Petit - Lame de Précision Compacte — Compatible OLFA KB4-S/5',
    description: 'Version compacte de la famille B142. Deux options de taille : 40×9×0,53mm standard et 40,5×8×0,50mm compatible OLFA KB4-S/5. Pour modélisme miniature, assemblage électronique et découpe de précision avec couteaux OLFA AK-4.',
    features: ['Deux options de taille', 'Standard 40×9×0,53mm', 'Compatible OLFA KB4-S/5 en 40,5×8×0,50mm', 'Design compact pour espaces étroits', 'Qualité Sheffield Durham Duplex'],
    applications: ['Modélisme miniature', 'Assemblage électronique', 'Découpe de détails de précision'],
    seo: {
      title: 'B142 Petite Lame Hobby Compatible OLFA | Alya Blade',
      description: 'B142 Petite lame hobby. 40×9mm & OLFA KB4-S/5 compatible 40,5×8mm. Miniatures, électronique, détail. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B142 petite', 'OLFA KB4-S/5 compatible', 'lame artisanat compacte', 'lame miniature', 'lame hobby'],
    },
    benefits: [
      { title: 'Compatible OLFA', description: 'Variante KB4-S/5 — compatibilité totale avec la série OLFA AK-4.', icon: 'Link' },
      { title: 'Double Taille', description: '40×9mm et 40,5×8mm — choix selon l\'application.', icon: 'Layers' },
      { title: 'Compacte', description: 'Petite taille — maniabilité supérieure dans les espaces étroits.', icon: 'Minimize' },
    ],
    longDescription: `<p>La B142 Petite est la version compacte de la famille B142. Disponible en deux variantes de taille : standard 40×9×0,53mm et OLFA KB4-S/5 compatible 40,5×8×0,50mm.</p><p>Le design compact à pointe biseautée offre une performance remarquable pour la découpe de précision et les travaux de détail dans les espaces étroits.</p><p><strong>Applications :</strong> Modélisme miniature, assemblage électronique, découpes de détail fins et lame de remplacement pour couteaux d'art OLFA AK-4.</p>`,
    availableSizes: [
      '40×9×0,53mm — Standard',
      '(OLFA KB4-S/5) 40,5×8×0,50mm — Compatible OLFA',
    ],
  },
  'b143': {
    name: 'B143 - Lame de Précision en Forme de Crochet',
    description: 'Lame d\'artisanat compacte en forme de crochet. 37×10×0,53mm. La forme courbe excelle dans le raclage, l\'ébavurage et la découpe courbe. Pour maroquinerie, arts du papier et ébavurage industriel.',
    features: ['Design crochet compact', '37×10×0,53mm', 'Raclage de précision et ébavurage', 'Forme de découpe courbe', 'Qualité Sheffield Durham Duplex'],
    applications: ['Maroquinerie', 'Arts du papier et ornementation', 'Ébavurage et finition'],
    seo: {
      title: 'B143 Lame Hobby Crochet | Alya Blade',
      description: 'B143 lame hobby forme crochet. 37×10×0,53mm. Maroquinerie, arts du papier, ébavurage. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B143 lame hobby', 'lame forme crochet', 'lame raclage', 'ébavurage', 'lame crochet artisanat'],
    },
    benefits: [
      { title: 'Forme Crochet', description: 'Profil courbe — excelle en raclage et découpe courbe.', icon: 'Anchor' },
      { title: 'Compacte', description: '37mm — efficace dans les zones difficiles d\'accès.', icon: 'Minimize' },
      { title: 'Multifonction', description: 'Découpe, raclage et ébavurage en une seule lame.', icon: 'Layers' },
    ],
    longDescription: `<p>La B143 est une lame hobby compacte en forme de crochet en 37×10×0,53mm. Son profil courbe excelle dans les opérations de raclage, d'ébavurage et de découpe courbe.</p><p><strong>Applications :</strong> Maroquinerie, arts du papier, ébavurage, découpe de détail fin et raclage décoratif.</p>`,
  },
  'b144': {
    name: 'B144 - Lame de Précision à Tranchant Plat (Ciseau)',
    description: 'Lame d\'artisanat à tranchant plat (ciseau). 40×10×0,53mm. Ligne de coupe droite pour découpe linéaire, raclage de surface et pochoirs. Pour préparation d\'impression, découpe de pochoirs et nettoyage industriel.',
    features: ['Design tranchant plat (ciseau)', '40×10×0,53mm', 'Découpe linéaire et raclage de surfaces', 'Découpe de pochoirs et gabarits', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe de pochoirs et gabarits', 'Raclage et nettoyage de surfaces', 'Préparation d\'impression'],
    seo: {
      title: 'B144 Lame Hobby Ciseau | Lame Tranchant Plat | Alya Blade',
      description: 'B144 lame hobby tranchant plat (ciseau). 40×10×0,53mm. Pochoirs, raclage, préparation impression. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B144 lame hobby', 'lame ciseau', 'lame tranchant plat', 'lame pochoir', 'lame ciseau artisanat'],
    },
    benefits: [
      { title: 'Tranchant Plat', description: 'Profil ciseau — rectitude parfaite sur les coupes linéaires.', icon: 'Minus' },
      { title: 'Multifonction', description: 'Découpe, raclage et nettoyage — une seule lame.', icon: 'Layers' },
      { title: 'Efficace', description: 'Tranchant large de 40mm — travail efficace sur grandes surfaces.', icon: 'Maximize' },
    ],
    longDescription: `<p>La B144 est une lame hobby à design ciseau (tranchant plat) en 40×10×0,53mm. Sa ligne de coupe droite offre une performance remarquable pour les coupes linéaires, le raclage et les travaux de pochoirs.</p><p><strong>Applications :</strong> Découpe de pochoirs et gabarits, préparation d\'impression, raclage et nettoyage de surfaces, et applications de nettoyage industriel.</p>`,
  },
  'b145': {
    name: 'B145 - Lame de Précision Multi-Tailles — Compatible OLFA KB4-F/5',
    description: 'Lame à tranchant plat multi-tailles. 4 tailles : 45×12, 45×16, 45×20mm et 35,5×8×0,55mm compatible OLFA KB4-F/5. Pour modélisme professionnel, arts graphiques et découpe de gabarits larges.',
    features: ['4 options de taille différentes', 'Tailles standard 45×12/16/20mm', 'Compatible OLFA KB4-F/5 en 35,5×8×0,55mm', 'Design tranchant plat pour découpe large', 'Qualité Sheffield Durham Duplex'],
    applications: ['Modélisme professionnel', 'Arts graphiques et design', 'Découpe de gabarits et pochoirs', 'Raclage de grandes surfaces'],
    seo: {
      title: 'B145 Lame Hobby Multi-Tailles | Alya Blade',
      description: 'B145 lame hobby multi-tailles. 45×12/16/20mm & OLFA KB4-F/5. Modélisme, graphisme, pochoirs. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B145 multi-tailles', 'lame artisanat multi-format', 'OLFA KB4-F/5', 'lame tranchant plat', 'set lames hobby'],
    },
    benefits: [
      { title: '4 Tailles', description: '12mm, 16mm, 20mm et 35,5mm — une taille pour chaque besoin.', icon: 'Layers' },
      { title: 'Compatible OLFA', description: 'Variante KB4-F/5 — compatibilité totale avec la série OLFA AK-4.', icon: 'Link' },
      { title: 'Polyvalente', description: 'De la découpe étroite au raclage large — une seule famille de produits.', icon: 'ArrowLeftRight' },
    ],
    longDescription: `<p>La B145 est une lame hobby polyvalente à tranchant plat proposée en <strong>4 tailles différentes</strong>. Outre les tailles standard 45×12mm, 45×16mm et 45×20mm, une variante OLFA KB4-F/5 compatible 35,5×8×0,55mm est également disponible.</p><p>Les différentes largeurs de tranchant plat offrent une solution unique pour une large gamme de besoins de découpe — de la découpe étroite au raclage de grandes surfaces.</p><p><strong>Applications :</strong> Modélisme professionnel, travaux graphiques, découpe de gabarits, raclage de grandes surfaces, préparation d'impression et lame de remplacement pour OLFA AK-4.</p>`,
    availableSizes: [
      '45×12×0,63mm',
      '45×16×0,63mm',
      '45×20×0,63mm',
      '(OLFA KB4-F/5) 35,5×8×0,55mm',
    ],
  },
  'b146': {
    name: 'B146 - Lame de Précision Large Biseautée',
    description: 'Lame d\'artisanat large biseautée. 39×11,7×0,63mm. La forme biseautée offre un contrôle supérieur pour les découpes courbes et les travaux de moulage.',
    features: ['Design large biseauté', '39×11,7×0,63mm', 'Épaisseur 0,63mm — robuste', 'Idéal pour découpes courbes', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe courbe', 'Finition de moules', 'Applications hobby industrielles'],
    seo: {
      title: 'B146 Lame Hobby 39×11,7mm | Lame Biseautée | Alya Blade',
      description: 'B146 lame hobby profil biseauté. 39×11,7×0,63mm. Découpe courbe, moules, modélisme. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B146 lame hobby', 'lame profil biseauté', 'lame artisanat angulaire', 'lame découpe courbe'],
    },
    benefits: [
      { title: 'Profil Biseauté', description: 'Contrôle superbe sur les découpes courbes.', icon: 'TrendingUp' },
      { title: 'Corps Large', description: 'Largeur 11,7mm — découpe forte et stable.', icon: 'Maximize' },
      { title: 'Robuste', description: 'Épaisseur 0,63mm — conçue pour utilisation intensive.', icon: 'Shield' },
    ],
    longDescription: `<p>La B146 est une lame hobby à profil large biseauté en 39×11,7×0,63mm. L'épaisseur de 0,63mm offre une performance durable, et le profil biseauté assure un contrôle superbe sur les découpes courbes.</p><p><strong>Applications :</strong> Découpe courbe, finition de moules, modélisme grande échelle, hobby industriel et prototypage.</p>`,
  },
  'b147': {
    name: 'B147 - Lame de Précision Pointue Large',
    description: 'Lame d\'artisanat pointue à corps large. 45×10×0,63mm. Pointe acérée pour des points d\'entrée précis et corps large pour une coupe stable et puissante. Pour maquettes d\'architecture, découpe d\'enseignes et graphisme professionnel.',
    features: ['Design pointu à corps large', '45×10×0,63mm', 'Épaisseur 0,63mm — usage intensif', 'Découpe de précision à grande échelle', 'Qualité Sheffield Durham Duplex'],
    applications: ['Maquettes d\'architecture', 'Découpe d\'enseignes', 'Graphisme professionnel'],
    seo: {
      title: 'B147 Lame Hobby 45×10mm | Lame Pointue Large | Alya Blade',
      description: 'B147 lame hobby pointue à corps large. 45×10×0,63mm. Maquettes d\'architecture, enseignes, graphisme. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B147 lame hobby', 'lame pointue artisanat', 'lame maquette architecture', 'lame enseignes', 'lame précision pointue'],
    },
    benefits: [
      { title: 'Pointe Aiguë', description: 'Points d\'entrée précis — contrôle de détail fin.', icon: 'Crosshair' },
      { title: 'Corps Large', description: '45×10mm — performance de coupe forte et stable.', icon: 'Maximize' },
      { title: 'Usage Intensif', description: 'Épaisseur 0,63mm — résistante sur matériaux épais.', icon: 'Shield' },
    ],
    longDescription: `<p>La B147 est une lame hobby pointue à corps large en 45×10×0,63mm. La pointe acrée crée des points d'entrée précis tandis que le corps large offre des coupes fortes et stables.</p><p><strong>Applications :</strong> Maquettes d'architecture, découpe d'enseignes, graphisme professionnel, panneaux publicitaires et découpes de détail grande échelle.</p>`,
  },
  'b148': {
    name: 'B148 - Lame de Précision Profilée Courbe',
    description: 'Lame d\'artisanat à profil courbe. 45,4×10,3×0,63mm. La ligne de coupe courbe excelle dans la découpe de contours et de courbes. Pour maroquinerie, découpe de vinyle et finition décorative.',
    features: ['Design de coupe courbe', '45,4×10,3×0,63mm', 'Épaisseur 0,63mm', 'Excellent pour contours et courbes', 'Qualité Sheffield Durham Duplex'],
    applications: ['Maroquinerie', 'Découpe de vinyle', 'Découpe décorative et finition'],
    seo: {
      title: 'B148 Lame Hobby Courbe 45,4×10,3mm | Alya Blade',
      description: 'B148 lame hobby profil courbe. 45,4×10,3×0,63mm. Maroquinerie, vinyle, découpe décorative. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B148 lame hobby', 'lame artisanat courbe', 'lame précision courbe', 'lame maroquinerie', 'lame contours'],
    },
    benefits: [
      { title: 'Profil Courbe', description: 'Ligne de coupe courbe — suivi de contours remarquable.', icon: 'CircleDot' },
      { title: 'Corps Large', description: '45,4×10,3mm — découpe stable et contrôlée.', icon: 'Maximize' },
      { title: 'Robuste', description: 'Épaisseur 0,63mm — performance de longue durée.', icon: 'Shield' },
    ],
    longDescription: `<p>La B148 est une lame hobby à profil courbe en 45,4×10,3×0,63mm. Sa ligne de coupe courbe offre une performance remarquable sur les découpes de contours et courbes.</p><p><strong>Applications :</strong> Maroquinerie, arts du papier, découpe de vinyle, applications décoratives et découpes de détail courbes.</p>`,
  },
  'b149': {
    name: 'B149 - Lame de Précision Compacte Large',
    description: 'Lame d\'artisanat compacte large. 39,4×11×0,63mm. Pour raclage de précision et nivellement. Idéale pour post-traitement d\'impression 3D (retrait de supports), miniatures et finition de prototypes.',
    features: ['Design compact large', '39,4×11×0,63mm', 'Épaisseur 0,63mm', 'Post-traitement impression 3D', 'Qualité Sheffield Durham Duplex'],
    applications: ['Nettoyage impression 3D et retrait de supports', 'Fabrication de miniatures', 'Raclage de précision et nivellement'],
    seo: {
      title: 'B149 Lame Hobby 39,4×11mm | Lame Compacte Large | Alya Blade',
      description: 'B149 lame hobby compacte large. 39,4×11×0,63mm. Nettoyage impression 3D, miniatures, raclage. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B149 lame hobby', 'lame compacte large', 'lame nettoyage impression 3D', 'lame miniature', 'lame artisanat'],
    },
    benefits: [
      { title: 'Compacte & Large', description: '39,4×11mm — couverture large avec maniabilité compacte.', icon: 'Maximize' },
      { title: 'Impression 3D', description: 'Idéale pour le retrait de supports et le post-traitement.', icon: 'Printer' },
      { title: 'Robuste', description: 'Épaisseur 0,63mm — durabilité usage intensif.', icon: 'Shield' },
    ],
    longDescription: `<p>La B149 est une lame hobby compacte à profil large en 39,4×11×0,63mm. Son profil large offre une performance remarquable pour le raclage et le nivellement de précision.</p><p><strong>Applications :</strong> Post-traitement d'impression 3D (retrait de supports), modélisme miniature, correction de prototypes électroniques et opérations de raclage de précision.</p>`,
  },
  'b150': {
    name: 'B150 - Lame de Hobby N°25 Usage Intensif',
    description: 'Lame de hobby N°25 à corps large pour usage intensif. Beaucoup plus large que la N°11 standard. Compatible X-Acto N°25. Pour carton épais, balsa, plastique et matériaux composites.',
    features: ['Géométrie large N°25', 'Type lame de hobby usage intensif', 'Forme large pour matériaux épais', 'Compatible X-Acto N°25', 'Qualité Sheffield Durham Duplex'],
    applications: ['Modélisme en balsa', 'Découpe de carton épais', 'Découpe de plastique et composites', 'Prototypage industriel'],
    seo: {
      title: 'B150 Lame Hobby N°25 Usage Intensif | Alya Blade',
      description: 'B150 lame hobby N°25 usage intensif. Corps large. Balsa, plastique, carton, composites. Compatible X-Acto. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame hobby N°25', 'B150', 'lame artisanat usage intensif', 'X-Acto N°25 compatible', 'lame balsa', 'lame corps large'],
    },
    benefits: [
      { title: 'Géométrie N°25', description: 'Corps large — découpes puissantes sur matériaux épais.', icon: 'Maximize' },
      { title: 'Compatible X-Acto', description: 'Série N°25 — compatibilité universelle avec les manches.', icon: 'Link' },
      { title: 'Usage Intensif', description: 'Conçue pour carton épais, plastique et composites.', icon: 'Shield' },
    ],
    longDescription: `<p>La B150 est une lame hobby <strong>N°25 à corps large</strong> pour usage intensif. Avec un profil beaucoup plus large que la N°11 standard, elle est conçue pour la découpe de matériaux épais.</p><p>Compatible avec la série X-Acto N°25, cette lame de remplacement est préférée pour la découpe de balsa, carton épais, feuilles plastiques et matériaux composites.</p><p><strong>Applications :</strong> Découpe hobby usage intensif, modélisme en balsa et plastique, découpe de carton épais, traitement de composites et prototypage industriel.</p>`,
  },
  'b151': {
    name: 'B151 - Lame Pointue Large Professionnelle',
    description: 'Lame de précision professionnelle pointue à corps large. 45×11×0,63mm. Pointe acérée avec corps large et épaisseur 0,63mm pour une coupe puissante et contrôlée. Pour découpe d\'enseignes, modélisme professionnel et mise en forme industrielle.',
    features: ['Design pointu à corps large', '45×11×0,63mm', 'Épaisseur 0,63mm — usage intensif', 'Mise en forme et découpe à grande échelle', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe d\'enseignes', 'Modélisme professionnel', 'Découpe et mise en forme industrielle'],
    seo: {
      title: 'B151 Lame Hobby Professionnelle 45×11mm | Alya Blade',
      description: 'B151 lame hobby professionnelle. 45×11×0,63mm pointue corps large. Enseignes, modélisme, découpe industrielle. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['B151 lame hobby', 'lame artisanat professionnelle', 'lame enseignes', 'lame hobby précision'],
    },
    benefits: [
      { title: 'Pointe Aiguë', description: 'Entrée précise — contrôle de détail fin.', icon: 'Crosshair' },
      { title: 'Corps Large', description: '45×11mm — performance de coupe puissante.', icon: 'Maximize' },
      { title: 'Professionnelle', description: 'Épaisseur 0,63mm — pour applications professionnelles.', icon: 'Award' },
    ],
    longDescription: `<p>La B151 est une lame de précision professionnelle pointue à corps large en 45×11×0,63mm. La pointe acrée crée des points d'entrée précis tandis que le corps large et l'épaisseur de 0,63mm offrent des coupes fortes et contrôlées.</p><p><strong>Applications :</strong> Modélisme professionnel, découpe d'enseignes, panneaux publicitaires, découpe industrielle et opérations de mise en forme grande échelle.</p>`,
  },

  // =============================================================================
  // LAMES SUPPLÉMENTAIRES - TYPES DIVERS
  // =============================================================================
  'hswb1': {
    name: 'HSWB1 - Lame Dentelée Extra-Large 25mm',
    subtitle: 'Lame cutter dentelée 25mm — Isolation épaisse et fibres',
    description: 'Lame cutter dentelée non-segmentée extra-large de 25mm en acier SK5 haut carbone. Performance supérieure pour la découpe de matériaux d\'isolation épais, laine de verre et panneaux fibreux. Compatible OLFA HSWB-1.',
    shortDescription: 'Lame dentelée 106×25×0,50mm. Pour isolation épaisse et fibres. Compatible OLFA HSWB-1.',
    features: ['Acier SK5 haut carbone — HRC 58-62', '25mm extra-large', 'Tranchant dentelé (denture scie)', 'Non-segmentée — aucun risque de rupture', 'Matériaux fibreux épais — sans blocage', 'Compatible OLFA HSWB-1', 'Fabrication Sheffield conforme ISO 9001'],
    applications: ['Laine de verre et de roche épaisse', 'Panneaux de fibre de verre épais', 'Panneaux d\'isolation XPS et EPS', 'Travaux d\'isolation construction', 'Découpe industrielle lourde'],
    seo: {
      title: 'HSWB1 Lame Dentelée 25mm | Alya Blade',
      description: 'Lame HSWB1 dentelée 25mm, 106×25×0,50mm. Pour isolation épaisse et fibres. OLFA HSWB-1. Acier SK5 Sheffield.',
      keywords: ['lame dentelée 25mm', 'HSWB1', 'lame isolation épaisse', 'OLFA HSWB-1', 'lame cutter denture scie 25mm'],
    },
    benefits: [
      { title: '25mm dentelée', description: 'La plus large lame dentelée pour découper les matériaux d\'isolation et fibres les plus épais.', icon: 'Maximize' },
      { title: 'Compatibilité OLFA', description: 'Compatible avec le porte-lame OLFA HSWB-1.', icon: 'CheckCircle' },
    ],
    longDescription: '<p>La lame HSWB1 dentelée de 25mm extra-large est conçue pour découper les matériaux d\'isolation et fibres les plus épais. Le tranchant dentelé empêche le glissement des matériaux fibreux et assure une coupe nette.</p><p>Dimensions 106×25×0,50mm, compatible OLFA HSWB-1. Idéale pour les travaux d\'isolation lourds en construction.</p>',
    availableSizes: ['106×25×0,50mm — Dentelée OLFA HSWB-1'],
  },
  // =============================================================================
  // SÉRIE KB — LAMES DE COUTEAUX D'ART COMPATIBLES OLFA
  // =============================================================================
  'kb': {
    name: 'KB - Lame de Couteau d\'Art (Compatible OLFA KB)',
    description: 'Lame de couteau d\'art compatible OLFA KB. 40,5×6×0,45mm, 1 encoche pour montage facile. Épaisseur ultra-fine de 0,45mm. Pour arts du papier, calligraphie, pochoirs et scrapbooking. Compatible couteaux OLFA AK.',
    features: ['Lame de remplacement compatible OLFA KB', '40,5×6×0,45mm', '1 encoche pour montage facile et sûr', 'Épaisseur 0,45mm — découpe de précision', 'Qualité Sheffield Durham Duplex'],
    applications: ['Arts du papier et scrapbooking', 'Calligraphie', 'Découpe de pochoirs et gabarits', 'Travaux de détails ultra-fins'],
    seo: {
      title: 'KB Lame Couteau d\'Art Compatible OLFA | Alya Blade',
      description: 'KB lame couteau d\'art de précision. OLFA KB compatible 40,5×6×0,45mm, 1 encoche. Arts du papier, calligraphie, pochoirs. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame OLFA KB', 'lame couteau d\'art', 'KB lame hobby', 'lame arts du papier', 'lame calligraphie'],
    },
    benefits: [
      { title: 'Compatible OLFA', description: 'Série OLFA AK — compatibilité standard mondial couteau d\'art.', icon: 'Link' },
      { title: 'Ultra Fine', description: 'Épaisseur 0,45mm — découpe ultra-précise du papier.', icon: 'Minimize' },
      { title: 'Changement Facile', description: '1 encoche de montage — changement de lame rapide et sûr.', icon: 'Zap' },
    ],
    longDescription: `<p>La KB est une lame de couteau d'art de précision <strong>compatible OLFA KB</strong>. En 40,5×6×0,45mm, elle est entièrement compatible avec les couteaux d'art OLFA série AK. Le système de montage à 1 encoche permet un changement de lame facile et sûr.</p><p>L'épaisseur ultra-fine de 0,45mm offre une performance de coupe remarquable pour les arts du papier, la calligraphie, les pochoirs et les travaux de détail fin.</p><p><strong>Applications :</strong> Arts du papier, découpe de maquettes fines, pochoirs, calligraphie, scrapbooking, vinyle décoratif et travaux de détail de précision.</p>`,
  },
  'kb-5': {
    name: 'KB-5 - Lame de Couteau d\'Art Ultra-Compacte',
    description: 'Lame de couteau d\'art ultra-compacte et ultra-fine. 25×4×0,38mm — la plus petite et la plus fine de toute la série. Épaisseur 0,38mm. Compatible série OLFA AK. Pour arts du papier, calligraphie et travaux miniatures ultra-précis.',
    features: ['Design ultra-fin et ultra-compact', '25×4×0,38mm — la plus petite lame de hobby de la gamme', 'Épaisseur 0,38mm — précision extrême', 'Compatible série OLFA AK', 'Qualité Sheffield Durham Duplex'],
    applications: ['Arts du papier', 'Calligraphie', 'Travaux miniatures ultra-précis'],
    seo: {
      title: 'KB-5 Lame Hobby Ultra-Compacte 25×4mm | Lame Couteau d\'Art | Alya Blade',
      description: 'KB-5 lame hobby ultra-compacte. 25×4×0,38mm, modèle le plus fin. Arts du papier, calligraphie, miniatures. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['KB-5 lame hobby', 'lame ultra-compacte', 'lame arts du papier', 'lame couteau d\'art', 'mini lame artisanat'],
    },
    benefits: [
      { title: 'La Plus Petite', description: '25×4mm — le modèle le plus compact de la gamme.', icon: 'Minimize' },
      { title: 'La Plus Fine', description: '0,38mm — découpes fines ultra-précises.', icon: 'ArrowDown' },
      { title: 'Compatible OLFA', description: 'Série AK — compatibilité universelle couteau d\'art.', icon: 'Link' },
    ],
    longDescription: `<p>La KB-5 est le modèle <strong>le plus petit et le plus fin</strong> de la gamme de lames hobby. En 25×4×0,38mm, elle offre un design ultra-compact avec 0,38mm — la lame la plus fine de la série.</p><p>Entièrement compatible avec les couteaux d'art OLFA série AK, la KB-5 est préférée pour les travaux fins de papier, la calligraphie et les tâches de détail ultra-précises.</p><p><strong>Applications :</strong> Arts du papier, calligraphie, philatélie, travaux miniatures, découpe fine de vinyle et tâches de détail ultra-précises.</p>`,
  },
  'kb4-r5': {
    name: 'KB4-R/5 - Lame de Couteau d\'Art Courbe (Compatible OLFA)',
    description: 'Lame de couteau d\'art courbe compatible OLFA KB4-R/5. 38,5×6×0,45mm. La forme courbe offre un contrôle supérieur pour découpes arrondies et pochoirs. Compatible couteaux OLFA AK-4.',
    features: ['Lame de remplacement compatible OLFA KB4-R/5', '38,5×6×0,45mm', 'Forme de découpe courbe pour arcs et contours', 'Épaisseur 0,45mm — découpe de précision', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe courbe et de contours', 'Travaux de pochoirs et gabarits', 'Applications artistiques professionnelles'],
    seo: {
      title: 'KB4-R/5 Lame Hobby Courbe OLFA | Alya Blade',
      description: 'KB4-R/5 lame hobby compatible OLFA. 38,5×6×0,45mm profil courbe. Pochoirs, art, découpe précision. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['KB4-R/5 lame', 'OLFA KB4-R compatible', 'couteau d\'art courbe', 'lame pochoir', 'lame art courbe'],
    },
    benefits: [
      { title: 'Compatible OLFA KB4-R', description: 'Série AK-4 — compatibilité couteau d\'art professionnel.', icon: 'Link' },
      { title: 'Profil Courbe', description: 'Contrôle supérieur sur les découpes courbes.', icon: 'CircleDot' },
      { title: 'Précision', description: 'Épaisseur 0,45mm — ligne de coupe propre.', icon: 'Target' },
    ],
    longDescription: `<p>La KB4-R/5 est une lame de couteau d'art à profil courbe <strong>compatible OLFA KB4-R/5</strong>. En 38,5×6×0,45mm, elle est entièrement compatible avec les couteaux d'art OLFA série AK-4.</p><p>Le profil courbe offre un contrôle supérieur sur les découpes courbes et les travaux de pochoirs. L'épaisseur de 0,45mm assure une ligne de coupe précise et propre.</p><p><strong>Applications :</strong> Découpe courbe de précision, travaux de pochoirs, applications artistiques professionnelles, arts du papier et projets hobby.</p>`,
  },
  'kb4-ns3': {
    name: 'KB4-NS/3 - Lame d\'Art Dentelée Étroite',
    description: 'Lame de couteau d\'art dentelée étroite compatible OLFA KB4-NS/3. 64×11/6×0,35mm. Le tranchant dentelé coupe la mousse, l\'éponge et le polystyrène sans déchirement. Épaisseur ultra-fine 0,35mm. Compatible OLFA AK-4.',
    features: ['Design dentelé étroit', '64×11/6×0,35mm', 'Épaisseur ultra-fine 0,35mm', 'Coupe mousse et matériaux tendres sans déchirement', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe de mousse', 'Modélisme en polystyrène', 'Découpe d\'éponge et matériaux tendres'],
    seo: {
      title: 'KB4-NS/3 Lame Hobby Dentelée Compatible OLFA | Alya Blade',
      description: 'KB4-NS/3 lame hobby dentelée étroite. OLFA KB4-NS/3, 64×11/6×0,35mm. Mousse, éponge, polystyrène. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['KB4-NS/3 lame dentelée', 'OLFA lame dentelée', 'lame découpe mousse', 'dentelure étroite', 'lame éponge'],
    },
    benefits: [
      { title: 'Dentelure Étroite', description: 'Tranchant dentelé étroit — coupe les matériaux tendres sans déchirement.', icon: 'BarChart3' },
      { title: 'Ultra Fine', description: '0,35mm — la lame dentelée la plus fine de la série.', icon: 'Minimize' },
      { title: 'OLFA AK-4', description: 'Compatible série AK-4 — qualité professionnelle.', icon: 'Link' },
    ],
    longDescription: `<p>La KB4-NS/3 est une lame de couteau d'art <strong>compatible OLFA KB4-NS/3 à dentelure étroite (narrow serrated)</strong>. En 64×11/6×0,35mm, c'est l'un des modèles les plus longs de la série.</p><p>Le profil dentelé offre une performance nettement supérieure aux lames à tranchant lisse pour la découpe de mousse, éponge, polystyrène et matériaux tendres. La structure dentelée coupe sans déchirer.</p><p><strong>Applications :</strong> Découpe de mousse, façonnage d'éponge, modélisme en polystyrène, découpe de détail de matériaux tendres et lame de remplacement pour OLFA AK-4.</p>`,
  },
  'kb4-ws3': {
    name: 'KB4-WS/3 - Lame d\'Art Dentelée Large',
    description: 'Lame de couteau d\'art dentelée large compatible OLFA KB4-WS/3. 66,5×11/6×0,35mm — la plus longue de la série. Denture large pour mousse épaisse, balsa et matériaux tendres denses sans déchirement. Compatible OLFA AK-4.',
    features: ['Design dentelé large', '66,5×11/6×0,35mm — la plus longue de la série', 'Épaisseur ultra-fine 0,35mm', 'Coupe mousse épaisse et balsa sans déchirement', 'Qualité Sheffield Durham Duplex'],
    applications: ['Découpe de mousse épaisse', 'Modélisme en balsa', 'Maquettes d\'architecture en mousse'],
    seo: {
      title: 'KB4-WS/3 Lame Hobby Dentelée Large | Alya Blade',
      description: 'KB4-WS/3 lame hobby dentelée large. OLFA KB4-WS/3, 66,5×11/6×0,35mm. Mousse épaisse, balsa, polystyrène. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['KB4-WS/3 dentelée large', 'OLFA dentelée large', 'lame mousse épaisse', 'lame balsa', 'lame dentelure large'],
    },
    benefits: [
      { title: 'Dentelure Large', description: 'Tranchant dentelé large — coupe les matériaux tendres épais sans déchirement.', icon: 'BarChart3' },
      { title: 'La Plus Longue', description: '66,5mm — la lame dentelée la plus longue de la série.', icon: 'Maximize' },
      { title: 'OLFA AK-4', description: 'Compatible série AK-4 — qualité professionnelle.', icon: 'Link' },
    ],
    longDescription: `<p>La KB4-WS/3 est une lame de couteau d'art <strong>compatible OLFA KB4-WS/3 à dentelure large (wide serrated)</strong>. En 66,5×11/6×0,35mm, c'est la lame la plus longue de la série.</p><p>La dentelure large offre une performance supérieure à la version KB4-NS/3 à dentelure étroite pour la découpe de mousse épaisse et de balsa. L'espacement plus large des dents permet des coupes propres dans les matériaux tendres épais sans déchirement.</p><p><strong>Applications :</strong> Découpe de mousse épaisse, modélisme en balsa, façonnage d'éponge, maquettes d'architecture en polystyrène et lame de remplacement pour OLFA AK-4.</p>`,
  },
  // --- LAMES HACHOIR FIBRE DE VERRE ---
  'b581': {
    name: 'B581 – Lame Hachoir Fibre de Verre – Carbure de Tungstène',
    subtitle: 'Pointe en carbure de tungstène — 120×7,94×0,71 mm',
    shortDescription: 'Lame hachoir B581 en carbure de tungstène pour fibre de verre, 120×7,94×0,71 mm. Affûtage double face 30°. Haute résistance à l\'usure pour lignes de production GRP/FRP.',
    description: 'Lame hachoir fibre de verre B581 en carbure de tungstène pour lignes de coupe de roving. 120×7,94×0,71 mm, double biseau 30°, dureté HRC 68-72. Disponible en 100 mm, 108,8 mm et 120 mm.',
    features: [
      'Acier spécial avec pointe en carbure de tungstène',
      'Dureté HRC 68-72',
      'Géométrie d\'affûtage double biseau 30°',
      'Conçue spécialement pour les lignes de coupe de fibre de verre',
      'Précision dimensionnelle ±0,02 mm',
      'Conditionnement par lots de 25 lames',
      '3 options de longueur : 100 mm, 108,8 mm, 120 mm',
    ],
    applications: [
      'Coupe de roving fibre de verre',
      'Lignes de production GRP/FRP',
      'Découpe de matériaux composites',
      'Fabrication de composites automobiles',
      'Production de pales d\'éoliennes',
    ],
    benefits: [
      { title: 'Résistance Supérieure à l\'Usure', description: 'L\'alliage de carbure de tungstène offre une durée de vie 5 à 8 fois supérieure aux lames en acier standard', icon: 'Shield' },
      { title: 'Coupe Précise', description: 'Le double biseau 30° assure une longueur de fibre uniforme et une faible génération de poussière', icon: 'Target' },
      { title: 'Coût Total Réduit', description: 'Durée de vie prolongée et moins d\'arrêts réduisent les coûts de production', icon: 'TrendingDown' },
      { title: 'Changement Rapide', description: 'Conditionnées par lots de 25 pour un remplacement groupé rapide', icon: 'RefreshCw' },
    ],
    availableSizes: [
      '100 × 7,94 × 0,71 mm',
      '108,8 × 7,94 × 0,71 mm',
      '120 × 7,94 × 0,71 mm',
    ],
    longDescription: `<p>Les lames hachoir fibre de verre de la série B581 sont fabriquées en <strong>acier spécial avec pointe en carbure de tungstène</strong>, conçues pour les lignes de coupe de roving en fibre de verre. Avec une dureté HRC 68-72, elles offrent une résistance exceptionnelle contre les brins de fibre de verre abrasifs.</p><h3>Détails Techniques</h3><ul><li><strong>Double biseau 30° :</strong> Distribution uniforme de l'usure et durée de vie prolongée</li><li><strong>Alliage de carbure de tungstène :</strong> Performance de coupe 5 à 8 fois supérieure à l'acier standard</li><li><strong>Tolérance de précision :</strong> Précision dimensionnelle ±0,02 mm pour un ajustement parfait à la machine</li><li><strong>Lots de 25 :</strong> Gestion facile des stocks et changement groupé rapide</li></ul><h3>Applications</h3><p>Utilisées dans les lignes de production GRP et FRP, les machines de coupe de roving en fibre de verre. Essentielles pour les composites : pièces automobiles, coques de bateaux, pales d'éoliennes, fabrication de tuyaux et réservoirs.</p>`,
    seo: {
      title: 'B581 Lame Hachoir Fibre de Verre 120mm | Alya Blade',
      description: 'Lame hachoir B581 en carbure de tungstène pour fibre de verre, 120×7,94×0,71mm. Affûtage double face 30°. Haute résistance à l\'usure pour lignes GRP/FRP.',
      keywords: ['lame hachoir fibre de verre', 'lame coupe fibre de verre', 'carbure de tungstène', 'lame GRP', 'B581', 'lame FRP', 'lame fiberglass'],
    },
  },
  'b657': {
    name: 'B657 – Lames Circulaires Rotatives – Compatible OLFA',
    subtitle: 'Compatible OLFA — 18 mm / 28 mm / 45 mm / 60 mm',
    shortDescription: 'Lames circulaires rotatives série B657 compatibles OLFA. Disponibles en diamètres 18 mm, 28 mm, 45 mm et 60 mm en acier inoxydable et acier au carbone. Lames rotatives de haute qualité pour la coupe textile, cuir, papier et loisirs.',
    description: 'Lames circulaires rotatives B657 compatibles OLFA en diamètres 18 mm, 28 mm, 45 mm et 60 mm. Acier inoxydable et acier à haute teneur en carbone.',
    features: [
      'Entièrement compatibles avec les cutters rotatifs OLFA',
      'Modèles en acier inoxydable (RB18, PRB18) — résistants à la corrosion',
      'Modèles en acier à haute teneur en carbone (RB28, RB45, RB60) — tranchant supérieur',
      'Diamètres disponibles : 18 mm, 28 mm, 45 mm et 60 mm',
      'Options de montage : trou hexagonal et 3 encoches',
      'PRB18 : modèle de coupe perforée à 8 canaux',
      'Dureté HRC 58-62',
    ],
    applications: [
      'Coupe de textiles et tissus',
      'Travail du cuir',
      'Coupe de papier et carton',
      'Loisirs créatifs et artisanat',
      'Patchwork et quilting',
    ],
    benefits: [
      { title: 'Compatibilité totale OLFA', description: 'Montage direct sur les manches de cutters rotatifs OLFA sans adaptateur', icon: 'CheckCircle' },
      { title: 'Large gamme de diamètres', description: 'Quatre tailles différentes, de la coupe de détail 18 mm à la grande coupe 60 mm', icon: 'Maximize' },
      { title: 'Choix de matériaux', description: 'Acier inoxydable et acier à haute teneur en carbone pour chaque application', icon: 'Layers' },
      { title: 'Option de coupe perforée', description: 'Le modèle PRB18 avec 8 canaux de perforation crée des lignes de coupe perforées', icon: 'MoreHorizontal' },
    ],
    availableSizes: [
      '18 × 7/5 × 0,30 mm (RB18)',
      '28 × 7/5 × 0,30 mm (RB28)',
      '45 × 10,2/8,3 × 0,30 mm (RB45)',
      '60 × 13/10 × 0,35 mm (RB60)',
      '18 × 7/5 × 0,30 mm (PRB18 Perforant)',
    ],
    longDescription: `<p>Les lames circulaires rotatives de la série B657 sont fabriquées pour être <strong>entièrement compatibles avec les cutters rotatifs OLFA</strong>, offrant une performance de coupe professionnelle. Disponibles en acier à haute teneur en carbone et en acier inoxydable.</p><h3>Options de modèles</h3><ul><li><strong>RB18-2 (18 mm, inoxydable) :</strong> Montage hexagonal, idéal pour la coupe de détail. En acier inoxydable.</li><li><strong>RB28-10 (28 mm) :</strong> Système de montage à 3 encoches, adapté aux travaux de coupe moyens.</li><li><strong>RB45-10 (45 mm) :</strong> 3 encoches, le diamètre le plus couramment utilisé. Choix standard pour la coupe de tissu et de cuir.</li><li><strong>RB60-1 (60 mm) :</strong> 3 encoches, conçu pour les coupes de grand diamètre et les matériaux épais.</li><li><strong>PRB18-2 (18 mm, perforant, inoxydable) :</strong> 8 canaux de perforation pour créer des lignes de coupe perforées. En acier inoxydable.</li></ul><h3>Applications</h3><p>Largement utilisé dans les ateliers textiles et de confection, l'industrie du cuir, la découpe de papier et carton, et les loisirs créatifs comme le patchwork, le quilting et le scrapbooking.</p>`,
    seo: {
      title: 'B657 Lames Circulaires Rotatives Compatible | Alya Blade',
      description: 'Lames circulaires rotatives B657 compatibles OLFA. Diamètres 18 mm, 28 mm, 45 mm, 60 mm en acier inoxydable et carbone. Lames rotatives professionnelles pour textile, cuir et papier.',
      keywords: ['lame circulaire rotative', 'lame compatible OLFA', 'lame cutter rotatif', 'lame coupe tissu', 'lame coupe cuir', 'RB45', 'RB28', 'RB60', 'RB18', 'PRB18', 'B657', 'lame OLFA'],
    },
  },
  '2cs1': {
    name: '2CS1 – Lame Pentagonale – Carbure de Tungstène & Céramique',
    subtitle: 'Tungstène et Céramique Monobloc — 66/63/40×0,54 mm',
    shortDescription: 'Lames pentagonales 2CS1 en carbure de tungstène monobloc et céramique, 66/63/40×0,54 mm. Lame de coupe industrielle à géométrie spéciale pour lignes de production de sacs, big bags et tissus PP.',
    description: 'Lames pentagonales 2CS1 en carbure de tungstène monobloc et céramique pour lignes de coupe de sacs, big bags FIBC et tissus PP.',
    features: [
      'Lame de coupe à géométrie pentagonale spéciale',
      'Carbure de tungstène monobloc — dureté ultra HRC 90+',
      'Céramique blanche monobloc (Oxyde de zirconium) — HV 1600+',
      'Céramique grise monobloc (Carbure de silicium) — HV 1600+',
      'Dimensions 66/63/40×0,54 mm, trous de montage 2×4 mm',
      'Conçu spécialement pour les lignes de production de sacs et big bags (FIBC)',
      'Performance optimale dans la coupe de tissus PP',
    ],
    applications: [
      'Lignes de coupe pour production de sacs',
      'Machines de production de big bags FIBC',
      'Coupe de tissus PP',
      'Coupe industrielle dans le secteur de l\'emballage',
      'Coupe de géotextile et bâches agricoles',
    ],
    benefits: [
      { title: 'Résistance à l\'usure ultra-élevée', description: 'Carbure de tungstène monobloc HRC 90+ offrant jusqu\'à 20 fois la durée de vie de l\'acier standard', icon: 'Shield' },
      { title: 'Option lame céramique', description: 'Structure céramique chimiquement inerte avec résistance à la corrosion et compatibilité contact alimentaire', icon: 'Zap' },
      { title: 'Avantage de la géométrie pentagonale', description: 'Design spécial à 5 arêtes avec angle de coupe optimisé et durée de vie prolongée', icon: 'Pentagon' },
      { title: 'Coût de production réduit', description: 'Durée de vie prolongée signifie moins d\'arrêts et un coût de coupe unitaire inférieur', icon: 'TrendingDown' },
    ],
    availableSizes: [
      '66/63/40 × 0,54 mm (Carbure de Tungstène Monobloc)',
      '66/63/40 × 0,54 mm (Céramique Monobloc – Blanche)',
      '66/63/40 × 0,54 mm (Céramique Monobloc – Grise)',
    ],
    longDescription: `<p>Les lames pentagonales de la série 2CS1 sont des lames de coupe industrielles à géométrie spéciale fabriquées en <strong>carbure de tungstène monobloc</strong> et <strong>céramique monobloc</strong>. Avec des dimensions de 66/63/40×0,54 mm et des trous de montage de 2×4 mm, elles sont conçues pour une compatibilité directe avec les machines de production de sacs et big bags.</p><h3>Options de matériaux</h3><ul><li><strong>Carbure de tungstène monobloc :</strong> Dureté HRC 90+ avec la plus haute résistance à l'usure. Durée de vie prolongée sur les lignes de production intensives.</li><li><strong>Céramique monobloc – Blanche (Oxyde de zirconium) :</strong> Microdureté HV 1600+ avec structure chimiquement inerte. Idéale pour les applications approuvées au contact alimentaire.</li><li><strong>Céramique monobloc – Grise (Carbure de silicium) :</strong> Microdureté HV 1600+ avec haute résistance thermique.</li></ul><h3>Applications</h3><p>Utilisé dans les lignes de production de sacs en PP, les machines de big bags FIBC, les lignes de coupe de géotextile et bâches agricoles.</p>`,
    seo: {
      title: '2CS1 Lame Pentagonale 66 mm | Alya Blade',
      description: 'Lame pentagonale 2CS1 en carbure de tungstène monobloc et céramique, 66/63/40×0,54 mm. Lame de coupe industrielle ultra-résistante pour production de sacs, big bags et tissus PP.',
      keywords: ['lame pentagonale', 'lame carbure de tungstène', 'lame céramique', 'lame coupe sacs', 'lame big bag', 'lame FIBC', '2CS1', 'coupe pentagonale'],
    },
  },
  'b084075': {
    name: 'B084.075 – Lame Lamelle (Feuille) – Céramique & Carbure de Tungstène',
    subtitle: 'Céramique monobloc & Carbure de tungstène monobloc',
    shortDescription: 'Lame lamelle (feuille) B084.075 en céramique monobloc et carbure de tungstène monobloc, 84/80×7,5×1,0 mm. Lame de coupe industrielle ultra-longue durée pour lignes de refente de film, feuille, étiquettes, emballage et conversion de papier.',
    description: 'Lame lamelle B084.075 en céramique monobloc et carbure de tungstène pour lignes de refente de film, feuille, étiquettes et papier. 84/80×7,5×1,0 mm.',
    features: [
      'Géométrie de coupe spéciale forme lamelle (feuille)',
      'Céramique blanche monobloc (ZrO₂) — HV 1200+, surface anti-adhérente',
      'Carbure de tungstène monobloc — HRC 90+, résistance ultra à l\'usure',
      'Dimensions 84/80×7,5×1,0 mm, compatible slitter compact',
      'Conçue pour les lignes de coupe de film, feuille, étiquettes et papier',
      'Chimiquement inerte — compatible emballage alimentaire (céramique)',
      'Performance de coupe sans vibration et sans bavure',
    ],
    applications: [
      'Lignes de refente de film et feuille',
      'Machines de coupe d\'étiquettes et rubans',
      'Lignes de conversion de papier et carton',
      'Unités de coupe de machines d\'emballage',
      'Lignes de coupe de feuille d\'aluminium',
    ],
    benefits: [
      { title: 'Surface Céramique Anti-Adhérente', description: 'La structure céramique en oxyde de zirconium offre des coupes nettes sur les films et étiquettes adhésifs sans résidu', icon: 'Sparkles' },
      { title: 'Durée de Vie Ultra-Longue', description: 'La dureté HRC 90+ du carbure de tungstène offre une durée de vie 15 à 20 fois supérieure aux lames en acier standard', icon: 'Shield' },
      { title: 'Coupe Précise Sans Bavure', description: 'La géométrie lamelle et l\'épaisseur de 1,0 mm offrent des lignes de coupe sans bavure sur les films et feuilles', icon: 'Target' },
      { title: 'Faible Coût de Maintenance', description: 'La durée de vie prolongée signifie moins de changements, moins de temps d\'arrêt et un coût total inférieur', icon: 'TrendingDown' },
    ],
    availableSizes: [
      '84/80 × 7,5 × 1,0 mm (Céramique monobloc – Blanche)',
      '84/80 × 7,5 × 1,0 mm (Carbure de tungstène monobloc)',
    ],
    longDescription: `<p>Les lames lamelles (feuilles) de la série B084.075 sont des lames industrielles à géométrie spéciale fabriquées en options <strong>céramique monobloc</strong> et <strong>carbure de tungstène monobloc</strong>. Avec des dimensions de 84/80×7,5×1,0 mm, elles sont conçues pour la compatibilité avec les machines de refente et de coupe.</p><h3>Options de Matériaux</h3><ul><li><strong>Céramique monobloc – Blanche (Oxyde de zirconium / ZrO₂) :</strong> Microdureté HV 1200+ avec une structure chimiquement inerte et anti-adhérente. Ne laisse aucun résidu adhésif sur les coupes de film et feuille. Sûr pour les lignes de coupe d'emballage alimentaire.</li><li><strong>Carbure de tungstène monobloc :</strong> Dureté HRC 90+ offrant la plus haute résistance à l'usure. Performance supérieure sur les matériaux abrasifs et les lignes de production à haute vitesse.</li></ul><h3>Applications</h3><p>Largement utilisé dans les lignes de refente de film et feuille PE/PP/PET/PVC, les machines de conversion d'étiquettes et rubans, les lignes de conversion de papier et carton, les unités de coupe de machines d'emballage, les lignes de refente de feuille d'aluminium et les machines de lamination.</p><h3>Détails Techniques</h3><p>La forme lamelle (feuille) présente une géométrie optimisée pour les coupes fines et précises. L'épaisseur de 1,0 mm assure une coupe sans vibration et sans bavure. Longueur totale de 84 mm avec une longueur de coupe effective de 80 mm pour la compatibilité avec les unités de refente compactes.</p>`,
    seo: {
      title: 'B084.075 Lame Lamelle Feuille 84 mm | Alya Blade',
      description: 'Lame lamelle (feuille) B084.075 en céramique monobloc et carbure de tungstène monobloc, 84/80×7,5×1,0 mm. Lame de coupe industrielle ultra-longue durée pour lignes de refente de film, feuille, étiquettes et papier.',
      keywords: ['lame lamelle', 'lame feuille', 'lame coupe film', 'lame coupe feuille', 'lame coupe étiquettes', 'lame slitter', 'lame céramique', 'lame tungstène', 'B084.075'],
    },
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
    name: 'B207 XXL (LONG) — Lame pour Plaques de Plâtre',
    subtitle: '170×19×0,80mm',
    description: 'B207 XXL lame pour plaques de plâtre. 170×19×0,80mm, acier à haute teneur en carbone, 2 encoches, 4 trous. Lame professionnelle à corps allongé pour la coupe de plaques de plâtre et cloisons sèches. Secteur construction et rénovation.',
    shortDescription: 'B207 XXL lame pour plaques de plâtre. 170×19×0,80mm, acier à haute teneur en carbone, 2 encoches, 4 trous. Coupe professionnelle de plaques de plâtre.',
    features: [
      '170×19×0,80mm — corps allongé optimal pour les plaques de plâtre',
      'Épaisseur 0,80mm — structure rigide et inflexible',
      '2 encoches — verrouillage sécurisé dans le support',
      '4 trous — options de montage multiples',
      'Acier à haute teneur en carbone — dureté HRC 58-62',
      'Ligne de coupe longue et droite en un seul passage',
      'Qualité Sheffield Durham Duplex',
    ],
    applications: [
      'Installation de plaques de plâtre',
      'Découpe de corniches',
      'Rénovation / Réhabilitation',
      'Isolation',
      'Construction professionnelle',
    ],
    seo: {
      title: 'B207 XXL Lame Plaques de Plâtre 170×19mm | Alya Blade',
      description: 'B207 XXL lame pour plaques de plâtre, 170×19×0,80mm, acier haute teneur carbone, 2 encoches, 4 trous. Coupe placo, cloison sèche. Qualité Sheffield. Distributeur autorisé.',
      keywords: ['lame plaques de plâtre', 'lame placo', 'B207 XXL', 'lame cloison sèche', 'lame coupe placo', '170mm lame', 'lame construction'],
    },
    benefits: [
      { title: 'Corps allongé 170mm — passage unique', description: 'Coupes droites et longues sur panneaux larges en un seul passage. Moins de passages, moins d\'irrégularités.', icon: 'Maximize' },
      { title: 'Rigidité 0,80mm — sans déviation', description: 'L\'épaisseur de 0,80mm confère de la rigidité — avance droit sans dévier le long du panneau.', icon: 'Shield' },
      { title: '2 encoches + 4 trous — montage sécurisé', description: 'Les encoches empêchent le glissement, les 4 trous assurent la compatibilité avec différents types de supports.', icon: 'Lock' },
      { title: 'HRC 58-62 — longue durée', description: 'La dureté de l\'acier haute teneur en carbone maintient le tranchant pendant des centaines de coupes.', icon: 'Shield' },
    ],
    longDescription: `<p><strong>B207 XXL — Lame pour plaques de plâtre</strong> est une lame professionnelle en acier à haute teneur en carbone de 170×19×0,80mm avec 2 encoches et 4 trous. Conçue pour les équipes spécialisées dans l'installation et la rénovation de plaques de plâtre et cloisons sèches.</p>
      <h3>Pourquoi un corps allongé de 170mm ?</h3>
      <p>Alors que les lames standard mesurent 60-100mm, le <strong>corps de 170mm</strong> du B207 XXL permet des coupes droites et longues en un seul passage sur les panneaux larges (feuille standard 1200×2400mm).</p>
      <h3>Épaisseur 0,80mm — structure rigide</h3>
      <p>Les lames fines fléchissent lors de la coupe des plaques de plâtre et dévient de la ligne de coupe. L'épaisseur de <strong>0,80mm</strong> confère rigidité — la lame avance droit sans dévier. Avantage critique pour les plaques de 12,5mm et 15mm d'épaisseur.</p>
      <h3>2 encoches + 4 trous</h3>
      <p><strong>2 encoches</strong> empêchent le glissement dans le support. <strong>4 trous</strong> assurent la compatibilité avec différents types de supports et offrent plusieurs options de montage.</p>`,
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
    description: 'Lame Supaslit industrielle pour le refendage. 44/26×9×0,40mm, deux trous Ø3mm. Conditionnement tube de 12 pièces. Pour machines de refendage de films et papiers de précision. Qualité Sheffield Durham Duplex.',
    features: ['Design Supaslit — refendage de précision', '44/26×9×0,40mm', 'Configuration 2×Ø3mm trous', 'Conditionnement tube de 12 pièces', 'Pour machines de refendage industrielles'],
    applications: ['Refendage de films', 'Refendage de papier', 'Machines de refendage de précision'],
    seo: {
      title: 'B226 Lame Supaslit 44/26×9mm | Alya Blade',
      description: 'B226 lame Supaslit industrielle. 44/26×9×0,40mm, 2×Ø3mm, tube de 12. Films et papier. Sheffield Durham Duplex. Distributeur autorisé.',
      keywords: ['lame supaslit', 'lame refendage', 'B226', 'lame film refendage', 'lame refendage industrielle', 'refendage précision'],
    },
    benefits: [
      { title: 'Ultra Fine', description: 'Épaisseur 0,40mm — bords de refendage lisses et propres.', icon: 'Minimize' },
      { title: 'Montage Double Trou', description: '2×Ø3mm — montage précis et stable sur machine.', icon: 'Target' },
      { title: 'Pack Économique', description: 'Tube de 12 pièces — économique pour utilisation en volume.', icon: 'Package' },
    ],
    longDescription: `<p>La lame Supaslit B226 est une lame de coupe à profil spécial conçue pour les machines de refendage industrielles. Ses dimensions de 44/26×9×0,40mm et sa configuration 2×Ø3mm assurent un montage précis sur machine.</p><p>L'épaisseur ultra-fine de 0,40mm crée des bords de refendage propres et sans bavure. Livrée en conditionnement économique de 12 pièces en tube.</p><p><strong>Applications :</strong> Refendage de films, refendage de papier, machines de refendage de matériaux fins et opérations de refendage industriel de précision.</p>`,
  },
  'yuvarlatilmi': {
    name: 'Lame Crochet à Pointe Arrondie',
    subtitle: 'Lame crochet sécurisée à pointe arrondie',
    description: 'Lame crochet à pointe arrondie. 52×19×0,6mm, 2 encoches, 3 trous. Pointe arrondie au lieu de pointe effilée : risque minimal d\'endommagement du matériau sous-jacent. Découpe axée sur la sécurité.',
    features: ['Pointe arrondie — sécurité d\'abord', 'Risque minimal d\'endommagement du matériau sous-jacent', '52×19×0,6mm taille standard crochet', '2 encoches, 3 trous', 'Qualité Sheffield Durham Duplex'],
    applications: ['Ouverture sécurisée d\'emballages', 'Opérations de commerce de détail', 'Sécurité en entrepôt', 'Manipulation de produits de valeur'],
    seo: {
      title: 'Lame Crochet Pointe Arrondie 52×19mm | Alya Blade',
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
    subtitle: 'Acier Haute Qualité — Thermoformage & MAP',
    description: 'Lame professionnelle pour machines d\'emballage sous vide et thermoformage. Acier haute qualité HRC 58-60, finition alimentaire Ra ≤0.4 µm. Compatible avec toutes les principales machines de thermoformage et d\'emballage sous vide.',
    features: [
      'Acier haut carbone',
      'Dureté HRC 58-60',
      'Finition alimentaire Ra ≤0.4 µm',
      'Conforme HACCP et BRC',
      'Usinage CNC de précision',
      'Large compatibilité machines'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Emballage MAP (Atmosphère Modifiée)', 'Industrie alimentaire — viande, fromage, plats préparés', 'Emballage dispositifs médicaux'],
    seo: {
      title: 'Lame Emballage Sous Vide | Alya Blade',
      description: 'Lame professionnelle pour emballage sous vide et thermoformage. Acier haute qualité HRC 58-60, qualité alimentaire Ra ≤0.4 µm. Compatible avec toutes les principales machines de thermoformage. Fabricant certifié ISO 9001.',
      keywords: ['lame emballage sous vide', 'couteau thermoformage', 'lame machine emballage', 'lame industrielle', 'couteau emballage alimentaire', 'lame MAP', 'lame vacuum packaging', 'couteau machine emballage sous vide', 'lame industrielle emballage'],
    },
    benefits: [
      { title: 'Dureté HRC 58-60', description: 'Tranchant durable et durée de vie 3x grâce au traitement thermique en atmosphère contrôlée', icon: 'Shield' },
      { title: 'Surface Alimentaire', description: 'Rugosité Ra ≤0,4 µm — découpe hygiénique conforme HACCP et BRC', icon: 'CheckCircle' },
      { title: 'Large Compatibilité Machines', description: 'Compatible avec toutes les principales machines de thermoformage et d\'emballage sous vide', icon: 'Settings' },
    ],
    longDescription: `<p>Cette lame professionnelle pour machines d'emballage sous vide (MAP — Modified Atmosphere Packaging) est usinée CNC avec précision à partir d'acier haute qualité. La dureté HRC 58-60 Rockwell est obtenue par traitement thermique en four à atmosphère contrôlée.</p>
<p>Offre une qualité de surface conforme aux normes HACCP et BRC pour l'industrie alimentaire. La rugosité Ra ≤0,4 µm empêche l'adhérence des particules alimentaires sur la lame.</p>
<p>Produit de référence générale pour tous les types de lames thermoformage sous vide : coupe droite, contour, poinçon étoile et poinçon à air. Notre équipe technique assure le meilleur SKU pour votre modèle de machine.</p>`,
  },
  'kontr-biai': {
    name: 'Lame Contour – Thermoformage & Emballage Sous Vide',
    subtitle: 'Découpe Contour — Acier Haute Qualité HRC 58-62',
    description: 'Lame contour pour machines de thermoformage et emballage sous vide. Acier haute qualité, qualité alimentaire.',
    features: [
      'Acier haut carbone longue durée',
      'Compatible industrie alimentaire',
      'Compatible machines thermoformage',
      'Découpe nette et précise',
      'Option revêtement titane'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Industrie alimentaire', 'Emballage viande et fromage'],
    seo: {
      title: 'Lame Contour Thermoformage | Acier Haute Qualité',
      description: 'Lame contour professionnelle pour machines thermoformage et emballage sous vide. Acier haute qualité alimentaire.',
      keywords: ['lame contour', 'lame thermoformage', 'emballage sous vide', 'industrie alimentaire', 'lame emballage viande', 'lame contour emballage']
    },
    benefits: [
      { title: 'Dureté HRC 58-62', description: 'Qualité de coupe constante et longue durée de vie grâce au traitement thermique de précision', icon: 'Shield' },
      { title: 'Coupe Sans Bavure', description: 'Géométrie de profil contour pour des bords nets et sans bavure', icon: 'Zap' },
      { title: 'Option Revêtement TiN', description: 'Dureté surface considérablement améliorée, durée de vie 3-5x, anti-adhérence', icon: 'Diamond' },
    ],
    longDescription: `<p>La lame contour est une lame à profil spécial qui découpe les bords de film en suivant le profil dans les machines de thermoformage. Usinée CNC à partir d'acier haut carbone, dureté HRC 58-62 par traitement thermique de précision.</p>
<p><strong>Géométrie du Profil :</strong> Le profil contour spécifique à la machine suit précisément la géométrie du bord du film. Découpe sans bavure — aucune trace de coupe sur l'emballage.</p>
<p><strong>Options de Revêtement :</strong></p>
<ul><li>Standard : Surface polie brillante, Ra ≤0,4 µm</li><li>TiN (Nitrure de Titane) PVD : dureté surface améliorée, couleur or, durée de vie 3-5x</li></ul>
<p>Compatible avec toutes les principales machines de thermoformage et d'emballage sous vide.</p>`,
  },
  'yarim': {
    name: 'Poinçon Demi-Étoile – Emballage Sous Vide',
    subtitle: 'Acier à Outils D2 — Demi-Étoile',
    description: 'Poinçon demi-étoile (half star) pour machines d\'emballage sous vide et thermoformage. Acier D2 haute résistance à l\'usure.',
    features: [
      'Géométrie demi-étoile',
      'Acier D2 haute résistance',
      'Option revêtement titane',
      'Poinçonnage de précision',
      'Tranchant longue durée',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Poinçonnage alimentaire'],
    seo: {
      title: 'Poinçon Demi-Étoile Thermoformage | Alya Blade',
      description: 'Poinçon demi-étoile professionnel pour emballage sous vide et thermoformage. Acier D2 haute résistance.',
      keywords: ['poinçon demi-étoile', 'poinçon thermoformage', 'emballage sous vide', 'acier D2', 'industrie alimentaire', 'poinçon aération']
    },
    benefits: [
      { title: 'Acier D2', description: 'Résistance à l\'usure et stabilité dimensionnelle supérieures', icon: 'Shield' },
      { title: 'Option Revêtement TiN', description: 'Dureté surface considérablement améliorée, réduction friction 40%, durée de vie 3-5x', icon: 'Diamond' },
      { title: 'Géométrie Précise', description: 'Forme triangle avec équilibre optimal entre aération et intégrité de l\'emballage', icon: 'Star' },
    ],
    longDescription: `<p>Les poinçons demi-étoile (half star) sont utilisés pour créer des motifs d'aération sur le film dans l'emballage sous vide. L'acier D2 offre résistance à l'usure et stabilité dimensionnelle grâce à sa teneur élevée en chrome.</p>
<p><strong>Traitement Thermique :</strong> Processus spécial de traitement thermique atteignant HRC 58-60 avec équilibre de ténacité adéquat.</p>
<p><strong>Géométrie :</strong> Le motif demi-étoile triangulaire crée une zone d'aération optimale dans le film tout en préservant l'intégrité de l'emballage.</p>
<p><strong>Revêtement :</strong> Le revêtement PVD TiN (Nitrure de Titane) améliore considérablement la dureté de surface, réduit la friction de 40% et prolonge la durée de vie 3-5x.</p>`,
  },
  'tam': {
    name: 'Poinçon Étoile Complète – Emballage Sous Vide',
    subtitle: 'Acier à Outils D2 — Étoile Complète',
    description: 'Poinçon étoile complète (full star) pour machines d\'emballage sous vide et thermoformage. Acier D2 haute résistance.',
    features: [
      'Géométrie étoile complète',
      'Acier D2 haute résistance',
      'Option revêtement titane',
      'Poinçonnage de précision',
      'Tranchant longue durée',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Poinçonnage industriel'],
    seo: {
      title: 'Poinçon Étoile Complète Thermoformage | Alya Blade',
      description: 'Poinçon étoile complète professionnel pour emballage sous vide et thermoformage. Acier D2 haute résistance.',
      keywords: ['poinçon étoile', 'poinçon thermoformage', 'emballage sous vide', 'acier D2', 'industrie alimentaire', 'poinçon industriel']
    },
    benefits: [
      { title: 'Aération 2x', description: 'Surface de passage de gaz deux fois plus grande que la demi-étoile', icon: 'Wind' },
      { title: 'Durabilité Acier D2', description: 'Résistance supérieure à l\'usure et la corrosion', icon: 'Shield' },
      { title: 'Option Revêtement TiN', description: 'Dureté surface considérablement améliorée, durée de vie 3-5x', icon: 'Diamond' },
    ],
    longDescription: `<p>Les poinçons étoile complète (full star) créent des motifs d'aération 2x plus larges dans l'emballage sous vide par rapport à la demi-étoile. Fabriqués en acier D2.</p>
<p><strong>Avantage :</strong> Dans les applications MAP (Emballage sous Atmosphère Modifiée) nécessitant un échange gazeux rapide, la géométrie étoile complète accélère le transfert de gaz. Largement préféré pour l'emballage de viande, fromage et plats préparés.</p>
<p><strong>Matériau :</strong> Acier à outils D2 pour travail à froid. Dureté stable HRC 58-60.</p>
<p>Compatible avec toutes les principales machines de thermoformage et d'emballage sous vide.</p>`,
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
      title: 'Lame Droite Thermoformage | HSS Haute Vitesse',
      description: 'Lame droite professionnelle pour machines thermoformage et emballage sous vide. Acier HSS haute vitesse.',
      keywords: ['lame droite', 'lame thermoformage', 'emballage sous vide', 'industrie alimentaire', 'acier HSS', 'lame emballage']
    },
    benefits: [
      { title: 'Ultra-Dureté HRC 62-65', description: 'Le durcissement secondaire HSS M2 atteint la valeur la plus élevée parmi les aciers', icon: 'Shield' },
      { title: 'Stabilité Thermique 600°C', description: 'Dureté à rouge — aucune perte de dureté même en coupe haute vitesse', icon: 'Flame' },
      { title: 'Structure Anti-Écrasement', description: 'Micro-structure en carbure de vanadium offrant 5x de résistance à la déformation', icon: 'Zap' },
    ],
    longDescription: `<p>Les lames droites (lama) sont utilisées sur la ligne de coupe de film des machines de thermoformage et d'emballage sous vide. Fabriquées en acier rapide HSS M2.</p>
<p><strong>Propriétés :</strong> Atteint HRC 62-65 par durcissement secondaire avec stabilité thermique jusqu'à 600°C.</p>
<p><strong>Avantages :</strong></p>
<ul><li>Résistance extraordinaire à l'écrasement — 5x de résistance à la déformation par rapport à l'acier standard</li><li>Dureté à rouge : maintient HRC 60+ même à 600°C</li><li>Micro-structure carbure de vanadium : les carbures MC forment une barrière naturelle contre l'usure</li></ul>
<p>Compatible avec toutes les principales machines de thermoformage et d'emballage sous vide.</p>`,
  },
  'dairesel': {
    name: 'Lames Circulaires – Emballage Sous Vide',
    subtitle: 'Acier Haute Qualité — Découpe Rotative HRC 58-62',
    description: 'Lames circulaires rotatives pour machines d\'emballage sous vide et thermoformage. Acier haute qualité.',
    features: [
      'Géométrie circulaire',
      'Acier haut carbone',
      'Découpe rotative',
      'Coupe précise',
      'Longue durée',
      'Compatible industrie alimentaire'
    ],
    applications: ['Emballage sous vide', 'Thermoformage', 'Découpe rotative'],
    seo: {
      title: 'Lame Circulaire Rotative Thermoformage | Alya Blade',
      description: 'Lame circulaire rotative pour machines thermoformage et emballage sous vide. Acier haute qualité.',
      keywords: ['lame circulaire', 'lame rotative', 'lame thermoformage', 'emballage sous vide', 'industrie alimentaire', 'lame rotative emballage']
    },
    benefits: [
      { title: 'Équilibrage Dynamique', description: 'Coupe sans vibration et sans bavure garantie à 3000+ tr/min', icon: 'RotateCw' },
      { title: 'Dureté HRC 58-62', description: 'Tranchant longue durée', icon: 'Shield' },
      { title: 'Service de Réaffûtage', description: 'Meulage de précision 18-22° avec service de calibration', icon: 'RefreshCw' },
    ],
    longDescription: `<p>Les lames circulaires fonctionnent avec un système de coupe rotatif dans les machines de thermoformage et d'emballage sous vide. Tournées et rectifiées CNC à partir d'acier haut carbone.</p>
<p><strong>Équilibrage Dynamique :</strong> Chaque lame circulaire est équilibrée dynamiquement pour éviter les vibrations en rotation haute vitesse. Coupe sans bavure garantie même à 3000+ tr/min.</p>
<p><strong>Affûtage :</strong> Angle de coupe formé par meulage de précision 18-22°. Service de réaffûtage et calibration disponible.</p>
<p>Compatible avec toutes les principales machines de thermoformage et d'emballage sous vide.</p>`,
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
      title: 'Poinçon à Air Rond Thermoformage | Alya Blade',
      description: 'Poinçon rond pour trous d\'aération emballage sous vide et thermoformage. Acier inoxydable 440C.',
      keywords: ['poinçon à air', 'poinçon rond', 'poinçon thermoformage', 'trou aération', 'emballage sous vide', 'inoxydable 440C', 'industrie alimentaire']
    },
    benefits: [
      { title: 'Résistance Corrosion', description: 'Protection complète contre la rouille en environnements alimentaires humides et salés', icon: 'Droplet' },
      { title: 'Surface Conforme HACCP', description: 'Hygiène alimentaire électropolie Ra ≤0,3 µm', icon: 'CheckCircle' },
      { title: 'Dureté HRC 58-60', description: 'Structure martensitique équilibrant tranchant et résistance à la corrosion', icon: 'Shield' },
    ],
    longDescription: `<p>Les poinçons ronds créent des trous d'aération circulaires dans l'emballage sous vide. Fabriqués en acier inoxydable martensitique AISI 440C.</p>
<p><strong>Résistance à la Corrosion :</strong> La teneur élevée en chrome offre une résistance supérieure à la rouille et à la corrosion par piqûres en environnements humides. Aucune perte de performance même en environnements salés (emballage produits de la mer).</p>
<p><strong>Traitement de Surface :</strong> Électropolissage Ra ≤0,3 µm, qualité contact alimentaire conforme HACCP et FDA 21 CFR 175.300.</p>
<p>Compatible avec toutes les principales machines de thermoformage et d'emballage sous vide.</p>`,
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
      title: 'Poinçon à Air Ovale Thermoformage | Alya Blade',
      description: 'Poinçon ovale pour trous d\'aération emballage sous vide et thermoformage. Acier inoxydable 440C.',
      keywords: ['poinçon à air', 'poinçon ovale', 'poinçon thermoformage', 'trou aération', 'emballage sous vide', 'inoxydable 440C', 'industrie alimentaire']
    },
    benefits: [
      { title: '40% Plus de Surface', description: 'Géométrie ovale offrant 40% d\'aération en plus par rapport au rond', icon: 'Wind' },
      { title: 'Résistance Corrosion 440C', description: 'Protection complète en environnements humides et salés', icon: 'Droplet' },
      { title: 'Surface Conforme HACCP', description: 'Hygiène alimentaire électropolie Ra ≤0,3 µm', icon: 'CheckCircle' },
    ],
    longDescription: `<p>Les poinçons ovales créent des zones d'aération plus larges avec un profil elliptique par rapport aux poinçons ronds. Fabriqués en acier inoxydable martensitique AISI 440C.</p>
<p><strong>Avantage Ovale :</strong> La géométrie elliptique offre 40% de surface de passage de gaz supplémentaire dans la même zone de film. Cette caractéristique est préférée pour le MAP nécessitant un échange gazeux rapide.</p>
<p><strong>Propriétés 440C :</strong> La structure martensitique offre à la fois une dureté HRC 58-60 et une résistance à la corrosion supérieure. Surface alimentaire électropolie Ra ≤0,3 µm.</p>
<p>Compatible avec toutes les principales machines de thermoformage et d'emballage sous vide.</p>`,
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
      title: 'Lame Dentelée Thermoformage | Haute Qualité',
      description: 'Lame dentelée professionnelle pour machines thermoformage et emballage sous vide. Acier haute qualité, idéale films rigides.',
      keywords: ['lame dentelée', 'lame dentée', 'lame thermoformage', 'emballage sous vide', 'industrie alimentaire', 'films rigides', 'lame emballage']
    },
    benefits: [
      { title: 'Coupe Anti-Glissement', description: 'Profil micro-dentelé assurant une coupe sûre même sur matériaux glissants', icon: 'Zap' },
      { title: 'Précision ±0,02mm', description: 'Dents usinées CNC avec précision pour une qualité de bord constante', icon: 'Gauge' },
      { title: 'Multi-Matériaux', description: 'Film épais, feuille alu, plastique rigide, film barrière — une seule lame', icon: 'Layers' },
    ],
    longDescription: `<p>Les lames dentelées (serrated/saw-tooth) sont utilisées pour les films épais, les laminages aluminium et les emballages thermoplastiques rigides où les lames droites glisseraient.</p>
<p><strong>Géométrie Dentaire :</strong> Le profil micro-dentelé perce d'abord puis coupe le matériau. Ce mécanisme en deux étapes élimine le risque de glissement et crée un bord net à chaque coupe.</p>
<p><strong>Matériau :</strong> Acier haut carbone, dureté HRC 58-62. Dents usinées CNC avec précision, tolérance inter-dents ±0,02mm.</p>
<p><strong>Utilisation Idéale :</strong></p>
<ul><li>Films PE/PP épais (100+ microns)</li><li>Laminages feuille d'aluminium</li><li>Emballages rigides PET/PVC</li><li>Films barrière multicouches</li></ul>
<p>Compatible avec toutes les principales machines de thermoformage et d'emballage sous vide.</p>`,
  },
  'vent-cutter': {
    name: 'Vent Cutter – Lame d\'Éviscération de Volaille',
    subtitle: 'Lame Circulaire Cylindrique — Acier Inoxydable, Qualité Alimentaire',
    description: 'Lames de vent cutter professionnelles pour lignes d\'éviscération automatisées de volaille. Acier inoxydable, finition polie alimentaire. Adaptée au poulet, à la dinde, au canard et à l\'oie.',
    shortDescription: 'Lame vent cutter en acier inoxydable pour le traitement de la volaille.',
    features: [
      'Acier inoxydable — résistance à la corrosion alimentaire',
      'Tranchant longue durée',
      'Surface polie — hygiène maximale',
      'Conception lame circulaire cylindrique — coupe uniforme à 360°',
      'Compatibilité système d\'aspiration sous vide',
      'Certification CE hygiène alimentaire',
      'Adaptée au poulet, à la dinde, au canard et à l\'oie',
    ],
    applications: [
      'Lignes d\'éviscération automatisées de volaille',
      'Traitement semi-automatique de volaille',
      'Découpe circulaire de la zone cloacale',
      'Traitement du poulet, de la dinde, du canard et de l\'oie',
      'Systèmes d\'éviscération haute cadence',
      'Installations agroalimentaires conformes HACCP',
    ],
    benefits: [
      {
        title: 'Hygiène Alimentaire',
        description: 'Acier inoxydable avec finition polie garantissant une hygiène maximale et un nettoyage facile en environnement HACCP.',
        icon: 'shield',
      },
      {
        title: 'Traitement Haute Cadence',
        description: 'Conçue pour les lignes automatisées sans perte de qualité de coupe.',
        icon: 'zap',
      },
      {
        title: 'Large Compatibilité Machine',
        description: 'Compatible avec les systèmes d\'éviscération leaders. Contactez-nous pour votre modèle de machine.',
        icon: 'settings',
      },
      {
        title: 'Durée de Vie Prolongée',
        description: 'Acier inoxydable de qualité supérieure pour des coupes régulières et moins d\'arrêts machine.',
        icon: 'clock',
      },
    ],
    longDescription: `<h3>Vent Cutter — Lame Professionnelle d'Éviscération de Volaille</h3>
<p>Le vent cutter est une lame circulaire cylindrique spécialement conçue pour l'étape d'éviscération des lignes automatisées de traitement de volaille. Elle découpe précisément la zone cloacale pour permettre un retrait propre des organes sans contamination de la carcasse.</p>

<h3>Matériau et Qualité de Surface</h3>
<p>Fabriquée en acier inoxydable, assurant une résistance exceptionnelle à la corrosion dans les environnements humides de transformation de volaille. La finition de surface polie alimentaire empêche l'adhésion bactérienne et facilite les cycles de nettoyage CIP.</p>

<h3>Technologie de Découpe Circulaire de Précision</h3>
<p>La conception de lame circulaire cylindrique assure une coupe uniforme à 360° autour de la zone cloacale. Le système d'extraction sous vide fonctionne en tandem avec la lame pour éliminer instantanément les matières découpées.</p>

<h3>Compatibilité Machines</h3>
<p>Nos lames sont compatibles avec les machines d'éviscération leaders du marché. Contactez notre équipe technique pour votre modèle spécifique et les dimensions adaptées.</p>

<h3>Polyvalence</h3>
<p>Adaptée au traitement du poulet, de la dinde, du canard et de l'oie. La géométrie de la lame est optimisée pour différentes tailles de carcasses tout en maintenant une qualité de coupe uniforme.</p>

<h3>Certifications et Assurance Qualité</h3>
<p>Toutes les lames vent cutter portent la certification CE hygiène alimentaire et sont fabriquées conformément aux réglementations européennes sur les matériaux en contact alimentaire. Adaptées aux usines certifiées HACCP, BRC et IFS.</p>`,
    availableSizes: ['Dimensions spécifiques à la machine — contactez-nous pour votre modèle'],
    seo: {
      title: 'Vent Cutter Lame Éviscération Volaille | Alya Blades',
      description: 'Lames vent cutter professionnelles pour l\'éviscération automatisée de volaille. Acier inoxydable, qualité alimentaire.',
      keywords: [
        'lame vent cutter',
        'lame éviscération volaille',
        'vent cutter traitement volaille',
        'couteau éviscération',
        'lame traitement volaille',
        'lame circulaire éviscération',
        'lame découpe cloacale',
        'traitement automatisé volaille',
        'lame de découpe alimentaire',
        'équipement abattoir volaille',
        'lame ligne éviscération',
        'lame traitement poulet',
        'lame traitement dinde',
      ],
    },
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
      title: 'Lame 3 Trous Acier Carbone 43x22mm | Alya Blade',
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
      title: 'Lame 3 Trous Revêtement Titane TiN 43x22mm | Alya Blade',
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
      title: 'Lame 3 Trous Inoxydable + Titane 43x22mm | Alya Blade',
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
      title: 'Lame 3 Trous Inox + Titane Incisée 43x22mm | Alya Blade',
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
      title: 'Lame 3 Trous Revêtement Céramique 43x22mm | Alya Blade',
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
      title: 'Lame 3 Trous Céramique Zircone Massif 43x22mm | Alya Blade',
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
      title: 'Lame 3 Trous Acier Carbone Bord Arrondi 43x22mm | Alya Blade',
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
      title: 'Lame 3 Trous Inox + Titane Bord Arrondi 43x22mm | Alya Blade',
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
      title: 'Lame 3 Trous Carbone + Céramique Bord | Alya Blade',
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
      title: 'Lame 3 Trous Inox + Titane 60x22mm | Alya Blade',
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

  // =============================================================================
  // LAMES DE SCALPEL / BISTOURI — SCALPEL BLADES
  // =============================================================================
  'b301': {
    name: 'B301 - Lame de Scalpel N°10',
    subtitle: 'Lame Chirurgicale Acier Carbone N°10 — 41×8,3×0,40mm',
    description: 'Lame de scalpel N°10 — 41×8,3×0,40mm. Bord de coupe incurvé avec dos non affûté. Le profil de lame chirurgicale le plus utilisé pour la chirurgie générale, les opérations abdominales et les incisions cutanées/musculaires. Compatible manche #3 (fixation Bard-Parker). Acier carbone, affûtage de précision, qualité industrielle non stérile. 100 pcs/boîte (20×5 bandes). Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°10, 41×8,3×0,40mm. Bord incurvé. Manche #3. 100 pcs/boîte.',
    features: [
      'N°10 — le profil de lame chirurgicale le plus utilisé',
      'Dimensions 41×8,3×0,40mm',
      'Bord de coupe incurvé, dos non affûté',
      'Compatible manche #3 (fixation Bard-Parker)',
      'Acier carbone, affûtage de précision',
      'Qualité industrielle non stérile',
      '100 pcs/boîte (emballage 20×5 bandes)',
    ],
    applications: ['Chirurgie générale', 'Laboratoire d\'histologie', 'Pathologie', 'Autopsie', 'Découpe industrielle de précision'],
    benefits: [
      { title: 'Standard Universel N°10', description: 'La lame de scalpel la plus utilisée au monde — bord incurvé pour incisions générales selon BS 2982 & ISO 7740.', icon: 'Award' },
      { title: 'Compatible Manche #3', description: 'Fixation Bard-Parker #3 assure une compatibilité universelle avec les manches chirurgicaux standard.', icon: 'Link' },
      { title: 'Affûtage de Précision', description: 'Corps en acier carbone traité thermiquement à HRC 55-58, affûtage de précision pour performance constante.', icon: 'Target' },
    ],
    longDescription: `<p>Le B301 est une <strong>lame de scalpel N°10</strong> de 41×8,3×0,40mm, le profil de lame chirurgicale le plus universellement utilisé au monde. Le bord de coupe incurvé avec dos non affûté est conçu pour les incisions cutanées et musculaires.</p><h3>Spécifications Techniques</h3><ul><li>Numéro de lame : N°10</li><li>Dimensions : 41×8,3×0,40mm</li><li>Matériau : Acier carbone, HRC 55-58</li><li>Manche : Compatible #3 (fixation Bard-Parker)</li><li>Conditionnement : 100 pcs/boîte (20×5 bandes), non stérile</li><li>Normes : BS 2982, ISO 7740</li></ul>`,
    seo: {
      title: 'Lame Scalpel N°10 (B301) 41×8,3mm Acier Carbone | Alya Blade',
      description: 'Lame scalpel N°10 41×8,3×0,40mm acier carbone, compatible manche #3. BS 2982, ISO 7740. 100 pcs/boîte. Chirurgie, histologie, pathologie. Compatible Swann Morton.',
      keywords: ['lame scalpel n°10', 'lame chirurgicale n°10', 'scalpel acier carbone', 'lame bistouri 10', 'scalpel manche #3', 'BS 2982', 'ISO 7740', 'compatible Swann Morton', 'lame histologie', 'lame pathologie', 'lame autopsie', 'scalpel non stérile', 'B301 scalpel', 'lame chirurgicale fournisseur'],
    },
  },
  'b302': {
    name: 'B302 - Lame de Scalpel N°10A',
    subtitle: 'Lame Chirurgicale Acier Carbone N°10A — 40×7,8×0,40mm',
    description: 'Lame de scalpel N°10A — 40×7,8×0,40mm. Profil plat à ventre large — version droite du N°10. Privilégiée en dermatologie, chirurgie plastique et découpe de tissus. Compatible manche #3. Acier carbone, non stérile. 100 pcs/boîte (20×5 bandes). Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°10A, 40×7,8×0,40mm. Profil plat à ventre large. Manche #3. 100 pcs/boîte.',
    features: ['N°10A — profil plat à ventre large', '40×7,8×0,40mm', 'Version droite du N°10', 'Compatible manche #3 (fixation Bard-Parker)', 'Acier carbone, affûtage de précision', 'Non stérile, 100 pcs/boîte'],
    applications: ['Dermatologie', 'Chirurgie plastique', 'Découpe de tissus', 'Laboratoire', 'Découpe industrielle'],
    benefits: [
      { title: 'Profil Plat Large', description: 'Version droite du N°10 — idéale pour incisions planes en dermatologie.', icon: 'Maximize' },
      { title: 'Compatible Manche #3', description: 'Fixation Bard-Parker #3, compatibilité universelle manches standards.', icon: 'Link' },
      { title: 'Grade Industriel', description: '100 pcs/boîte — conditionnement volume pour laboratoire et industrie.', icon: 'Package' },
    ],
    longDescription: `<p>Le B302 est une <strong>lame de scalpel N°10A</strong> de 40×7,8×0,40mm. Le profil plat à ventre large est la version droite du classique N°10.</p><h3>Spécifications</h3><ul><li>N°10A — 40×7,8×0,40mm</li><li>Acier carbone, HRC 55-58</li><li>Manche #3 (Bard-Parker)</li><li>100 pcs/boîte, non stérile</li><li>Normes : BS 2982, ISO 7740</li></ul>`,
    seo: {
      title: 'Lame Scalpel N°10A (B302) 40×7,8mm | Lame Plate Chirurgicale',
      description: 'Lame scalpel N°10A 40×7,8×0,40mm, profil plat large. Acier carbone, manche #3. Dermatologie, chirurgie plastique. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°10A', 'lame chirurgicale 10A', 'lame plate scalpel', 'scalpel dermatologie', 'lame bistouri 10A', 'Swann Morton 10A', 'B302 scalpel'],
    },
  },
  'b303': {
    name: 'B303 - Lame de Scalpel N°11',
    subtitle: 'Lame Chirurgicale Acier Carbone N°11 — 41×6,5×0,40mm',
    description: 'Lame de scalpel N°11 — 41×6,5×0,40mm. Profil triangulaire à pointe aiguë, bord de coupe droit parallèle au manche. Pour incisions de précision, ponctions et découpe de pochoirs. Compatible manche #3. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°11, 41×6,5×0,40mm. Triangulaire, pointe aiguë. Manche #3. 100 pcs/boîte.',
    features: ['N°11 — profil triangulaire, pointe aiguë', '41×6,5×0,40mm', 'Bord de coupe droit parallèle au manche', 'Compatible manche #3 (Bard-Parker)', 'Acier carbone, affûtage de précision', 'Non stérile, 100 pcs/boîte'],
    applications: ['Incisions de ponction', 'Découpe de pochoirs', 'Laboratoire', 'Composants électroniques', 'Découpe de précision'],
    benefits: [
      { title: 'Pointe Triangulaire', description: 'Géométrie triangulaire de précision pour ponctions et incisions fines selon ISO 7740.', icon: 'Target' },
      { title: 'Profil Polyvalent', description: 'Utilisé en chirurgie (ponctions) et industrie (pochoirs, électronique).', icon: 'Layers' },
      { title: 'Compatible Manche #3', description: 'Fixation Bard-Parker #3, compatibilité universelle.', icon: 'Link' },
    ],
    longDescription: `<p>Le B303 est une <strong>lame de scalpel N°11</strong> de 41×6,5×0,40mm. Le profil triangulaire à pointe aiguë avec bord de coupe parallèle au manche est idéal pour les ponctions et incisions de précision.</p><h3>Spécifications</h3><ul><li>N°11 — 41×6,5×0,40mm</li><li>Acier carbone, HRC 55-58</li><li>Manche #3 (Bard-Parker)</li><li>100 pcs/boîte, non stérile</li><li>BS 2982, ISO 7740</li></ul>`,
    seo: {
      title: 'Lame Scalpel N°11 (B303) 41×6,5mm | Alya Blade',
      description: 'Lame scalpel N°11 41×6,5×0,40mm, triangulaire pointe aiguë. Acier carbone, manche #3. Ponctions, pochoirs, laboratoire. 100 pcs/boîte. BS 2982, ISO 7740.',
      keywords: ['lame scalpel n°11', 'lame chirurgicale 11', 'scalpel triangulaire', 'lame pointue', 'scalpel ponction', 'lame pochoir', 'Swann Morton 11', 'B303 scalpel'],
    },
  },
  'b304': {
    name: 'B304 - Lame de Scalpel N°12',
    subtitle: 'Lame Chirurgicale Acier Carbone N°12 — 37×11×0,40mm',
    description: 'Lame de scalpel N°12 — 37×11×0,40mm. Petite lame en croissant/crochet, affûtée sur le bord intérieur de la courbe. Utilisée en ophtalmologie, ORL et chirurgie dentaire. Compatible manche #3. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°12, 37×11×0,40mm. Forme croissant/crochet. Manche #3. 100 pcs/boîte.',
    features: ['N°12 — forme croissant/crochet, bord intérieur affûté', '37×11×0,40mm', 'Profil de coupe incurvé intérieur', 'Compatible manche #3 (Bard-Parker)', 'Acier carbone, affûtage de précision', 'Non stérile, 100 pcs/boîte'],
    applications: ['Ophtalmologie', 'ORL', 'Chirurgie dentaire', 'Laboratoire', 'Découpe détail'],
    benefits: [
      { title: 'Profil Croissant', description: 'Géométrie en crochet affûté intérieur pour incisions courbes en chirurgie délicate.', icon: 'Disc' },
      { title: 'Format Compact 37mm', description: '37mm avec 11mm de large — contrôle maximal en zones chirurgicales restreintes.', icon: 'Minimize' },
      { title: 'Compatible Manche #3', description: 'Fixation Bard-Parker #3, compatibilité universelle.', icon: 'Link' },
    ],
    longDescription: `<p>Le B304 est une <strong>lame de scalpel N°12</strong> de 37×11×0,40mm en forme de croissant/crochet affûtée sur le bord intérieur.</p><h3>Spécifications</h3><ul><li>N°12 — 37×11×0,40mm</li><li>Acier carbone, HRC 55-58</li><li>Manche #3 (Bard-Parker)</li><li>100 pcs/boîte, non stérile</li><li>BS 2982, ISO 7740</li></ul>`,
    seo: {
      title: 'Lame Scalpel N°12 (B304) 37×11mm | Lame Crochet Chirurgicale',
      description: 'Lame scalpel N°12 37×11×0,40mm, forme croissant/crochet. Acier carbone, manche #3. Ophtalmologie, ORL, dentaire. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°12', 'lame chirurgicale 12', 'scalpel crochet', 'lame croissant', 'scalpel ophtalmologie', 'lame ORL', 'Swann Morton 12', 'B304 scalpel'],
    },
  },
  'b305': {
    name: 'B305 - Lame de Scalpel N°15',
    subtitle: 'Lame Chirurgicale Acier Carbone N°15 — 37×6×0,40mm',
    description: 'Lame de scalpel N°15 — 37×6×0,40mm. Version réduite du N°10 — la lame la plus populaire pour la dissection fine. Dermatologie, microchirurgie, histologie. Compatible manche #3. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°15, 37×6×0,40mm. Dissection fine, la plus populaire. Manche #3. 100 pcs/boîte.',
    features: ['N°15 — la lame la plus populaire pour dissection fine', '37×6×0,40mm — format compact', 'Version réduite du N°10', 'Compatible manche #3 (Bard-Parker)', 'Acier carbone, affûtage de précision', 'Non stérile, 100 pcs/boîte'],
    applications: ['Dissection fine', 'Dermatologie', 'Microchirurgie', 'Histologie', 'Laboratoire de pathologie'],
    benefits: [
      { title: 'Référence Dissection Fine', description: 'La lame de scalpel la plus populaire pour travaux délicats — format compact 37×6mm.', icon: 'Target' },
      { title: 'Micro Contrôle', description: 'Taille compacte offrant un contrôle supérieur en dermatologie et microchirurgie.', icon: 'Minimize' },
      { title: 'Compatible Manche #3', description: 'Fixation Bard-Parker #3, compatibilité universelle.', icon: 'Link' },
    ],
    longDescription: `<p>Le B305 est une <strong>lame de scalpel N°15</strong> de 37×6×0,40mm, la lame de dissection fine la plus populaire au monde.</p><h3>Spécifications</h3><ul><li>N°15 — 37×6×0,40mm</li><li>Acier carbone, HRC 55-58</li><li>Manche #3 (Bard-Parker)</li><li>100 pcs/boîte, non stérile</li><li>BS 2982, ISO 7740</li></ul>`,
    seo: {
      title: 'Lame Scalpel N°15 (B305) 37×6mm | Lame Dissection Fine',
      description: 'Lame scalpel N°15 37×6×0,40mm — la plus populaire pour dissection fine. Acier carbone, manche #3. Dermatologie, microchirurgie, histologie. 100 pcs/boîte.',
      keywords: ['lame scalpel n°15', 'lame chirurgicale 15', 'scalpel dissection fine', 'lame dermatologie', 'lame microchirurgie', 'lame histologie', 'Swann Morton 15', 'B305 scalpel'],
    },
  },
  'b306': {
    name: 'B306 - Lame de Scalpel N°20',
    subtitle: 'Lame Chirurgicale Acier Carbone N°20 — 45×9×0,40mm',
    description: 'Lame de scalpel N°20 — 45×9×0,40mm. Version agrandie du N°10 avec bord incurvé. Chirurgie générale et orthopédique sur zones tissulaires larges. Compatible manche #4. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°20, 45×9×0,40mm. Grand format incurvé. Manche #4. 100 pcs/boîte.',
    features: ['N°20 — version agrandie du N°10 pour manche #4', '45×9×0,40mm', 'Bord incurvé, dos non affûté', 'Compatible manche #4 (grand Bard-Parker)', 'Acier carbone, affûtage de précision', 'Non stérile, 100 pcs/boîte'],
    applications: ['Chirurgie générale', 'Orthopédie', 'Incision tissulaire large', 'Médecine vétérinaire', 'Découpe industrielle'],
    benefits: [
      { title: 'Grand Format Manche #4', description: 'Version agrandie du N°10 sur manche #4 — surface de coupe élargie pour chirurgie orthopédique.', icon: 'Maximize' },
      { title: 'Bord Incurvé Classique', description: 'Profil incurvé classique pour incisions avec mouvement de balancement contrôlé.', icon: 'Activity' },
      { title: 'Usage Multi-Secteur', description: 'Chirurgie, vétérinaire et industrie — découpe de précision standardisée.', icon: 'Layers' },
    ],
    longDescription: `<p>Le B306 est une <strong>lame de scalpel N°20</strong> de 45×9×0,40mm, version agrandie du N°10 pour manche #4.</p><h3>Spécifications</h3><ul><li>N°20 — 45×9×0,40mm</li><li>Acier carbone, HRC 55-58</li><li>Manche #4 (grand Bard-Parker)</li><li>100 pcs/boîte, non stérile</li><li>BS 2982, ISO 7740</li></ul>`,
    seo: {
      title: 'Lame Scalpel N°20 (B306) 45×9mm | Alya Blade',
      description: 'Lame scalpel N°20 45×9×0,40mm, grand bord incurvé. Acier carbone, manche #4. Chirurgie générale, orthopédie, vétérinaire. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°20', 'lame chirurgicale 20', 'scalpel grand format', 'lame manche #4', 'scalpel orthopédie', 'Swann Morton 20', 'B306 scalpel'],
    },
  },
  'b307': {
    name: 'B307 - Lame de Scalpel N°21',
    subtitle: 'Lame Chirurgicale Acier Carbone N°21 — 53×10×0,40mm',
    description: 'Lame de scalpel N°21 — 53×10×0,40mm. Grand profil triangulaire à large surface de coupe. Chirurgie sur grandes zones et incisions tissulaires étendues. Compatible manche #4. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°21, 53×10×0,40mm. Grand triangulaire. Manche #4. 100 pcs/boîte.',
    features: ['N°21 — grand profil triangulaire', '53×10×0,40mm', 'Géométrie de coupe large type N°10', 'Compatible manche #4 (grand Bard-Parker)', 'Acier carbone', 'Non stérile, 100 pcs/boîte'],
    applications: ['Chirurgie zone étendue', 'Incision tissulaire large', 'Médecine vétérinaire', 'Autopsie', 'Découpe industrielle'],
    seo: {
      title: 'Lame Scalpel N°21 (B307) 53×10mm | Grande Lame Triangulaire',
      description: 'Lame scalpel N°21 53×10×0,40mm, grand profil triangulaire. Acier carbone, manche #4. Chirurgie, autopsie, vétérinaire. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°21', 'lame chirurgicale 21', 'scalpel triangulaire grand', 'lame manche #4', 'lame autopsie', 'Swann Morton 21', 'B307 scalpel'],
    },
  },
  'b308': {
    name: 'B308 - Lame de Scalpel N°22',
    subtitle: 'Lame Chirurgicale Acier Carbone N°22 — 58×11,4×0,40mm',
    description: 'Lame de scalpel N°22 — 58×11,4×0,40mm. Version légèrement plus grande du N°20 avec bord incurvé. Utilisée pour incisions cutanées en chirurgie cardiaque et thoracique. Compatible manche #4. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°22, 58×11,4×0,40mm. Chirurgie cardiaque/thoracique. Manche #4. 100 pcs/boîte.',
    features: ['N°22 — chirurgie cardiaque et thoracique', '58×11,4×0,40mm', 'Version agrandie du N°20', 'Compatible manche #4 (grand Bard-Parker)', 'Acier carbone', 'Non stérile, 100 pcs/boîte'],
    applications: ['Chirurgie cardiaque', 'Chirurgie thoracique', 'Chirurgie générale', 'Médecine vétérinaire', 'Découpe industrielle'],
    seo: {
      title: 'Lame Scalpel N°22 (B308) 58×11,4mm | Alya Blade',
      description: 'Lame scalpel N°22 58×11,4×0,40mm, chirurgie cardiaque et thoracique. Acier carbone, manche #4. Résection pulmonaire. 100 pcs/boîte. BS 2982, ISO 7740.',
      keywords: ['lame scalpel n°22', 'lame chirurgicale 22', 'scalpel cardiaque', 'scalpel thoracique', 'lame résection pulmonaire', 'Swann Morton 22', 'B308 scalpel'],
    },
  },
  'b309': {
    name: 'B309 - Lame de Scalpel N°23',
    subtitle: 'Lame Chirurgicale Acier Carbone N°23 — 51,5×10×4×0,40mm',
    description: 'Lame de scalpel N°23 — 51,5×10×4×0,40mm. Profil en forme de feuille pour incisions longues. Compatible manche #4. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°23, 51,5×10×4×0,40mm. Forme feuille. Manche #4. 100 pcs/boîte.',
    features: ['N°23 — profil en forme de feuille', '51,5×10×4×0,40mm', 'Pour incisions longues continues', 'Compatible manche #4 (grand Bard-Parker)', 'Acier carbone', 'Non stérile, 100 pcs/boîte'],
    applications: ['Incisions longues', 'Chirurgie générale', 'Chirurgie plastique', 'Médecine vétérinaire', 'Découpe industrielle'],
    seo: {
      title: 'Lame Scalpel N°23 (B309) 51,5×10mm | Alya Blade',
      description: 'Lame scalpel N°23 51,5×10×4×0,40mm, forme feuille pour incisions longues. Acier carbone, manche #4. Chirurgie générale, plastique. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°23', 'lame chirurgicale 23', 'scalpel feuille', 'incisions longues', 'Swann Morton 23', 'B309 scalpel'],
    },
  },
  'b310': {
    name: 'B310 - Lame de Scalpel N°24',
    subtitle: 'Lame Chirurgicale Acier Carbone N°24 — 56×11,5×0,40mm',
    description: 'Lame de scalpel N°24 — 56×11,5×0,40mm. Lame large et plate à bord de coupe angulé. Coupes d\'angle, ébavurage, pelage et découpe de joints/tapis. Compatible manche #4. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°24, 56×11,5×0,40mm. Bord angulé large. Manche #4. 100 pcs/boîte.',
    features: ['N°24 — lame large plate à bord angulé', '56×11,5×0,40mm', 'Coupes d\'angle, ébavurage, pelage', 'Compatible manche #4 (grand Bard-Parker)', 'Acier carbone', 'Non stérile, 100 pcs/boîte'],
    applications: ['Coupes d\'angle', 'Ébavurage et pelage', 'Découpe de joints', 'Découpe de tapis', 'Industrie'],
    seo: {
      title: 'Lame Scalpel N°24 (B310) 56×11,5mm | Lame Angulée Ébavurage',
      description: 'Lame scalpel N°24 56×11,5×0,40mm, bord angulé large. Acier carbone, manche #4. Coupes d\'angle, joints, tapis. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°24', 'lame chirurgicale 24', 'scalpel angulé', 'lame ébavurage', 'découpe joints', 'Swann Morton 24', 'B310 scalpel'],
    },
  },
  'b311': {
    name: 'B311 - Lame de Scalpel N°25',
    subtitle: 'Lame Chirurgicale Acier Carbone N°25 — 56×11,5×0,40mm',
    description: 'Lame de scalpel N°25 — 56×11,5×0,40mm. Lame droite face avant avec dos plat. Usage général chirurgie et laboratoire. Compatible manche #4. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°25, 56×11,5×0,40mm. Droite face avant. Manche #4. 100 pcs/boîte.',
    features: ['N°25 — lame droite face avant, dos plat', '56×11,5×0,40mm', 'Usage général chirurgie et laboratoire', 'Compatible manche #4 (grand Bard-Parker)', 'Acier carbone', 'Non stérile, 100 pcs/boîte'],
    applications: ['Chirurgie générale', 'Laboratoire', 'Histologie', 'Pathologie', 'Découpe industrielle'],
    seo: {
      title: 'Lame Scalpel N°25 (B311) 56×11,5mm | Lame Droite Polyvalente',
      description: 'Lame scalpel N°25 56×11,5×0,40mm, droite face avant. Acier carbone, manche #4. Chirurgie générale, histologie, laboratoire. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°25', 'lame chirurgicale 25', 'scalpel droit', 'lame polyvalente', 'lame histologie', 'Swann Morton 25', 'B311 scalpel'],
    },
  },
  'b312': {
    name: 'B312 - Lame de Scalpel N°26',
    subtitle: 'Lame Chirurgicale Acier Carbone N°26 — 57×10×0,40mm',
    description: 'Lame de scalpel N°26 — 57×10×0,40mm. Lame droite triangulaire à dos prenant un angle descendant. Ébarbage et travaux de détail fin. Compatible manche #4. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°26, 57×10×0,40mm. Triangulaire descendante. Manche #4. 100 pcs/boîte.',
    features: ['N°26 — triangulaire droite, dos angulé descendant', '57×10×0,40mm', 'Ébarbage et travaux de détail', 'Compatible manche #4 (grand Bard-Parker)', 'Acier carbone', 'Non stérile, 100 pcs/boîte'],
    applications: ['Ébarbage', 'Découpe de détail fin', 'Laboratoire', 'Histopathologie', 'Découpe industrielle'],
    seo: {
      title: 'Lame Scalpel N°26 (B312) 57×10mm | Lame Détail Ébarbage',
      description: 'Lame scalpel N°26 57×10×0,40mm, profil triangulaire descendant. Acier carbone, manche #4. Ébarbage, histopathologie, détail. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°26', 'lame chirurgicale 26', 'scalpel triangulaire', 'lame ébarbage', 'lame détail', 'Swann Morton 26', 'B312 scalpel'],
    },
  },
  'b313': {
    name: 'B313 - Lame de Scalpel N°27',
    subtitle: 'Lame Chirurgicale Acier Carbone N°27 — 60×13,3×0,40mm',
    description: 'Lame de scalpel N°27 — 60×13,3×0,40mm. Profil large — la lame la plus large de la série. Utilisée en chirurgie générale, histologie et coupes de grands tissus. Compatible manche #4. Acier carbone, non stérile. 100 pcs/boîte. Compatible Swann Morton.',
    shortDescription: 'Lame de scalpel N°27, 60×13,3×0,40mm. La plus large de la série. Manche #4. 100 pcs/boîte.',
    features: ['N°27 — la lame la plus large de la série', '60×13,3×0,40mm', 'Profil large pour coupes de grands tissus', 'Compatible manche #4 (grand Bard-Parker)', 'Acier carbone', 'Non stérile, 100 pcs/boîte'],
    applications: ['Chirurgie générale', 'Histologie', 'Coupes de grands tissus', 'Médecine vétérinaire', 'Découpe industrielle'],
    seo: {
      title: 'Lame Scalpel N°27 (B313) 60×13,3mm | Lame la Plus Large',
      description: 'Lame scalpel N°27 60×13,3×0,40mm — la plus large de la série. Acier carbone, manche #4. Histologie, chirurgie générale. 100 pcs/boîte. BS 2982.',
      keywords: ['lame scalpel n°27', 'lame chirurgicale 27', 'scalpel large', 'lame histologie 27', 'lame grands tissus', 'Swann Morton 27', 'B313 scalpel'],
    },
  },

  // =============================================
  // LAMES POUR FIBRES COUPÉES — B644 (MARK IV)
  // =============================================

  'b644-paslanmaz': {
    name: 'Lame pour Fibres (Mark IV) – Acier Inoxydable',
    subtitle: 'Acier Inoxydable — 74,5×15,6×0,88mm',
    description: 'Lame en acier inoxydable pour machines de coupe de fibres Mark IV. 74,5×15,6×0,88mm, haute performance sur les lignes de production de fibres coupées. Construction résistante à la corrosion, longue durée de vie.',
    shortDescription: 'Lame pour fibres Mark IV. 74,5×15,6×0,88mm, acier inoxydable, résistant à la corrosion.',
    features: ['Entièrement compatible avec les machines Mark IV', '74,5×15,6×0,88mm dimensions précises', 'Acier inoxydable — résistant à la corrosion', 'Arête de coupe optimisée pour fibres coupées', 'Longue durée de vie'],
    applications: ['Production de fibres coupées', 'Coupe de fibres synthétiques', 'Coupe de fibres textiles', 'Transformation industrielle des fibres'],
    benefits: [
      { title: 'Résistance à la Corrosion', description: 'La construction en acier inoxydable résiste aux environnements humides et chimiques des lignes de fibres.', icon: 'Shield' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 74,5×15,6×0,88mm usinées avec précision pour un ajustement parfait sur les machines Mark IV.', icon: 'Settings' },
      { title: 'Rapport Qualité-Prix Optimal', description: 'Combine résistance à la corrosion et longue durée de vie pour un coût par coupe réduit.', icon: 'DollarSign' },
    ],
    longDescription: '<p>Notre lame pour fibres Mark IV en acier inoxydable offre des performances fiables sur les lignes de production de fibres coupées. Spécialement conçue avec des dimensions de 74,5×15,6×0,88mm pour une compatibilité parfaite avec les machines Mark IV.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 74,5×15,6×0,88mm</li><li>Matériau : Acier inoxydable anticorrosion</li><li>Arête optimisée pour fibres synthétiques et textiles</li></ul><h3>Applications</h3><ul><li>Lignes de production de fibres coupées</li><li>Fibres synthétiques (polyester, nylon, polypropylène)</li><li>Fibres textiles et industrielles</li></ul>',
    seo: {
      title: 'Lame Mark IV Acier Inoxydable 74,5×15,6mm | Alya Blade',
      description: 'Lame acier inoxydable pour machines Mark IV. 74,5×15,6×0,88mm. Résistant à la corrosion. Production de fibres coupées.',
      keywords: ['lame fibre mark iv', 'lame fibres coupées', 'lame fibre acier inoxydable', 'mark iv lame 74,5mm', 'lame coupe fibre mark iv', 'lame acier inoxydable fibres', 'mark iv 74,5×15,6mm', 'lame industrielle fibres coupées', 'couteau fibre mark iv', 'lame fibre polyester', 'lame fibre synthétique', 'b644 lame fibre'],
    },
  },
  'b644-tin-kaplama': {
    name: 'Lame pour Fibres (Mark IV) – Acier Inoxydable + Revêtement TiN',
    subtitle: 'Acier Inoxydable + Revêtement TiN — 74,5×15,6×0,88mm',
    description: 'Lame revêtue TiN (nitrure de titane) pour machines Mark IV. 74,5×15,6×0,88mm. Le revêtement TiN augmente la dureté de surface et prolonge la durée de vie de 2 à 3 fois.',
    shortDescription: 'Lame revêtue TiN pour Mark IV. 74,5×15,6×0,88mm, durée de vie 2-3 fois plus longue.',
    features: ['Compatible machines Mark IV', '74,5×15,6×0,88mm', 'Revêtement TiN — durée de vie 2-3x', 'Performance supérieure sur fibres abrasives', 'Haute dureté de surface'],
    applications: ['Production de fibres coupées', 'Coupe de fibres abrasives', 'Coupe de fibres de verre', 'Lignes haute production'],
    benefits: [
      { title: 'Revêtement TiN Haute Dureté', description: 'Le nitrure de titane atteint ~2300 HV, offrant une résistance à l\'usure exceptionnelle sur fibres abrasives.', icon: 'Award' },
      { title: 'Friction Réduite', description: 'La surface TiN réduit le coefficient de friction, permettant des coupes plus nettes et moins d\'échauffement.', icon: 'Zap' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 74,5×15,6×0,88mm pour un ajustement parfait sur les machines Mark IV.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Mark IV revêtue TiN (nitrure de titane) prolonge la durée de vie de 2 à 3 fois par rapport à l\'acier inoxydable standard. Idéale pour les fibres abrasives comme le verre et le carbone.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 74,5×15,6×0,88mm</li><li>Revêtement : TiN — dureté ~2300 HV</li><li>Durée de vie : 2-3x plus longue que l\'acier standard</li></ul><h3>Applications</h3><ul><li>Fibres de verre — résistance à l\'abrasion</li><li>Fibres synthétiques haute production</li><li>Lignes de production nécessitant moins d\'arrêts</li></ul>',
    seo: {
      title: 'Lame Mark IV Revêtement TiN 74,5×15,6mm | Alya Blade',
      description: 'Lame revêtue TiN pour Mark IV. 74,5×15,6×0,88mm. Durée de vie 2-3 fois plus longue. Fibres de verre et abrasives.',
      keywords: ['lame fibre tin', 'revêtement tin lame', 'mark iv lame tin', 'nitrure titane lame fibre', 'lame tin mark iv 74,5mm', 'lame fibres verre tin', 'lame tin coupe fibre', 'revêtement nitrure titane', 'lame longue durée fibre', 'b644 tin lame', 'lame abrasive tin mark iv', 'mark iv tin 74,5×15,6mm'],
    },
  },
  'b644-yekpare-tungsten': {
    name: 'Lame pour Fibres (Mark IV) – Carbure de Tungstène Monobloc',
    subtitle: 'Carbure de Tungstène Monobloc — 74,5×15,5×0,90mm',
    description: 'Lame en carbure de tungstène monobloc pour machines Mark IV. 74,5×15,5×0,90mm. Dureté et résistance à l\'usure supérieures pour les applications les plus exigeantes.',
    shortDescription: 'Lame carbure de tungstène pour Mark IV. 74,5×15,5×0,90mm, résistance à l\'usure maximale.',
    features: ['Compatible machines Mark IV', '74,5×15,5×0,90mm', 'Carbure de tungstène — résistance maximale', 'Durée de vie 3-4x vs acier', 'Idéale fibres de verre et carbone'],
    applications: ['Coupe de fibres de verre', 'Coupe de fibres de carbone', 'Fibres synthétiques abrasives', 'Lignes à forte usure'],
    benefits: [
      { title: 'Résistance à l\'Usure Maximale', description: 'Le carbure de tungstène monobloc offre une dureté de ~1500 HV, idéal pour les fibres les plus abrasives.', icon: 'Shield' },
      { title: 'Rétention d\'Arête Supérieure', description: 'Maintient le tranchant 3-4 fois plus longtemps que l\'acier, réduisant les arrêts de production.', icon: 'Target' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 74,5×15,5×0,90mm usinées avec précision pour un ajustement parfait sur les machines Mark IV.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Mark IV en carbure de tungstène monobloc est la solution ultime pour les applications les plus exigeantes. Avec une dureté de ~1500 HV, elle offre une résistance à l\'usure inégalée.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 74,5×15,5×0,90mm</li><li>Matériau : Carbure de tungstène monobloc — ~1500 HV</li><li>Durée de vie : 3-4x plus longue que l\'acier</li></ul><h3>Applications</h3><ul><li>Fibres de verre — résistance à l\'abrasion extrême</li><li>Fibres de carbone — coupe de haute précision</li><li>Lignes de production à forte usure</li></ul>',
    seo: {
      title: 'Lame Mark IV Carbure Tungstène 74,5×15,5mm | Alya Blade',
      description: 'Lame carbure de tungstène monobloc pour Mark IV. 74,5×15,5×0,90mm. Résistance maximale. Fibres de verre, carbone.',
      keywords: ['carbure tungstène lame mark iv', 'lame tungstène fibre', 'mark iv tungstène', 'lame monobloc tungstène mark iv', 'lame carbure coupe fibre', 'tungstène 74,5×15,5mm', 'lame fibre verre tungstène', 'lame fibre carbone', 'b644 tungstène', 'lame haute résistance fibre', 'lame tungstène monobloc industrielle', 'mark iv carbure tungstène'],
    },
  },

  'b645-paslanmaz': {
    name: 'Lame pour Fibres (Mark V) – Acier Inoxydable',
    subtitle: 'Acier Inoxydable — 117,5×15,6×0,88mm',
    description: 'Lame en acier inoxydable pour machines Mark V. 117,5×15,6×0,88mm, corps allongé offrant une plus grande surface de coupe.',
    shortDescription: 'Lame pour fibres Mark V. 117,5×15,6×0,88mm, acier inoxydable, surface de coupe plus large.',
    features: ['Compatible machines Mark V', '117,5×15,6×0,88mm — corps allongé', 'Acier inoxydable — résistant à la corrosion', 'Surface de coupe plus large', 'Longue durée de vie'],
    applications: ['Production de fibres coupées', 'Coupe de fibres synthétiques', 'Coupe de fibres textiles', 'Transformation industrielle des fibres'],
    benefits: [
      { title: 'Résistance à la Corrosion', description: 'L\'acier inoxydable résiste aux environnements humides et chimiques des lignes de fibres.', icon: 'Shield' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 117,5×15,6×0,88mm — corps allongé pour machines Mark V.', icon: 'Settings' },
      { title: 'Surface de Coupe Élargie', description: 'Le corps allongé de 117,5mm offre une surface de coupe plus grande pour une productivité accrue.', icon: 'Maximize' },
    ],
    longDescription: '<p>La lame Mark V en acier inoxydable offre une surface de coupe plus large grâce à son corps allongé de 117,5mm. Conçue pour les machines Mark V avec une résistance à la corrosion optimale.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 117,5×15,6×0,88mm — corps allongé</li><li>Matériau : Acier inoxydable anticorrosion</li><li>Surface de coupe plus large que le Mark IV</li></ul><h3>Applications</h3><ul><li>Lignes de production de fibres coupées haute capacité</li><li>Fibres synthétiques (polyester, nylon, polypropylène)</li><li>Fibres textiles et industrielles</li></ul>',
    seo: {
      title: 'Lame Mark V Acier Inoxydable 117,5×15,6mm | Alya Blade',
      description: 'Lame acier inoxydable pour Mark V. 117,5×15,6×0,88mm. Surface de coupe plus large. Fibres coupées.',
      keywords: ['lame fibre mark v', 'lame fibres coupées mark v', 'lame fibre 117mm', 'mark v lame acier inoxydable', 'lame coupe fibre mark v', 'mark v 117,5×15,6mm', 'lame industrielle mark v', 'couteau fibre mark v', 'lame fibre polyester mark v', 'b645 lame fibre', 'lame longue mark v', 'lame fibre synthétique mark v'],
    },
  },
  'b645-tin-kaplama': {
    name: 'Lame pour Fibres (Mark V) – Acier Inoxydable + Revêtement TiN',
    subtitle: 'Acier Inoxydable + Revêtement TiN — 117,5×15,6×0,88mm',
    description: 'Lame revêtue TiN pour machines Mark V. 117,5×15,6×0,88mm. Le revêtement TiN prolonge la durée de vie de 2 à 3 fois. Corps allongé.',
    shortDescription: 'Lame revêtue TiN pour Mark V. 117,5×15,6×0,88mm, durée de vie 2-3x.',
    features: ['Compatible machines Mark V', '117,5×15,6×0,88mm', 'Revêtement TiN — durée de vie 2-3x', 'Performance fibres abrasives', 'Haute dureté'],
    applications: ['Production de fibres coupées', 'Fibres abrasives', 'Fibres de verre', 'Lignes haute production'],
    benefits: [
      { title: 'Revêtement TiN Haute Dureté', description: 'Le nitrure de titane atteint ~2300 HV sur le corps allongé de 117,5mm pour une résistance maximale.', icon: 'Award' },
      { title: 'Friction Réduite', description: 'La surface TiN réduit le coefficient de friction, permettant des coupes plus nettes sur fibres abrasives.', icon: 'Zap' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 117,5×15,6×0,88mm pour un ajustement parfait sur les machines Mark V.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Mark V revêtue TiN combine le corps allongé de 117,5mm avec le revêtement nitrure de titane pour une durée de vie 2-3 fois plus longue. Idéale pour les fibres abrasives à haute production.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 117,5×15,6×0,88mm — corps allongé</li><li>Revêtement : TiN — dureté ~2300 HV</li><li>Durée de vie : 2-3x plus longue que l\'acier standard</li></ul><h3>Applications</h3><ul><li>Fibres de verre et abrasives</li><li>Lignes haute production nécessitant moins d\'arrêts</li><li>Fibres synthétiques haute résistance</li></ul>',
    seo: {
      title: 'Lame Mark V Revêtement TiN 117,5×15,6mm | Alya Blade',
      description: 'Lame revêtue TiN pour Mark V. 117,5×15,6×0,88mm. Durée de vie 2-3x plus longue.',
      keywords: ['mark v lame tin', 'lame fibre tin 117mm', 'revêtement tin mark v', 'lame tin coupe fibre mark v', 'nitrure titane mark v', 'lame longue durée mark v', 'mark v tin 117,5×15,6mm', 'lame abrasive tin mark v', 'b645 tin lame', 'lame fibres verre tin mark v', 'lame tin haute production', 'couteau tin mark v'],
    },
  },
  'b645-yekpare-tungsten-centikli': {
    name: 'Lame pour Fibres (Mark V) – Carbure de Tungstène Monobloc (Dentelée)',
    subtitle: 'Carbure de Tungstène Monobloc, Arête Dentelée',
    description: 'Lame dentelée en carbure de tungstène monobloc pour machines Mark V. 117,5×15,6×0,89mm. L\'arête dentelée saisit les fibres pour une coupe plus contrôlée.',
    shortDescription: 'Lame tungstène dentelée pour Mark V. 117,5×15,6×0,89mm.',
    features: ['Compatible machines Mark V', '117,5×15,6×0,89mm', 'Carbure de tungstène monobloc', 'Arête dentelée — coupe contrôlée', 'Fibres de verre et carbone'],
    applications: ['Coupe de fibres de verre', 'Coupe de fibres de carbone', 'Fibres abrasives', 'Lignes à forte usure'],
    benefits: [
      { title: 'Résistance à l\'Usure Maximale', description: 'Le carbure de tungstène monobloc offre ~1500 HV — résistance inégalée pour les fibres les plus abrasives.', icon: 'Shield' },
      { title: 'Arête Dentelée Contrôlée', description: 'L\'arête dentelée saisit les fibres pour une coupe plus contrôlée et régulière, même sur matériaux difficiles.', icon: 'Target' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 117,5×15,6×0,89mm pour un ajustement parfait sur les machines Mark V.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Mark V en carbure de tungstène monobloc avec arête dentelée combine la résistance maximale du tungstène avec un design d\'arête qui saisit les fibres. Idéale pour les fibres de verre et de carbone nécessitant une coupe contrôlée.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 117,5×15,6×0,89mm — corps allongé</li><li>Matériau : Carbure de tungstène monobloc — ~1500 HV</li><li>Arête dentelée pour coupe contrôlée</li></ul><h3>Applications</h3><ul><li>Fibres de verre — coupe contrôlée abrasive</li><li>Fibres de carbone — précision avec agrippement</li><li>Lignes de production à forte usure</li></ul>',
    seo: {
      title: 'Lame Mark V Tungstène Dentelée 117,5×15,6mm | Alya Blade',
      description: 'Lame tungstène dentelée pour Mark V. 117,5×15,6×0,89mm. Coupe contrôlée. Fibres de verre, carbone.',
      keywords: ['lame tungstène dentelée', 'mark v tungstène dentelée', 'lame fibre dentelée', 'lame dentelée coupe fibre', 'tungstène dentelée mark v', 'lame carbure dentelée 117mm', 'b645 tungstène dentelée', 'lame fibre verre dentelée', 'lame fibre carbone dentelée', 'couteau tungstène dentelé mark v', 'lame monobloc dentelée', 'mark v tungstène 117,5mm'],
    },
  },
  'b645-yekpare-tungsten-duz': {
    name: 'Lame pour Fibres (Mark V) – Carbure de Tungstène Monobloc (Lisse)',
    subtitle: 'Carbure de Tungstène Monobloc, Arête Lisse',
    description: 'Lame lisse en carbure de tungstène monobloc pour machines Mark V. 117,5×15,6×0,91mm. L\'arête lisse offre une coupe nette sans bavures.',
    shortDescription: 'Lame tungstène lisse pour Mark V. 117,5×15,6×0,91mm.',
    features: ['Compatible machines Mark V', '117,5×15,6×0,91mm', 'Carbure de tungstène monobloc', 'Arête lisse — coupe nette', 'Fibres de verre et carbone'],
    applications: ['Coupe de fibres de verre', 'Coupe de fibres de carbone', 'Coupe de précision', 'Lignes à forte usure'],
    benefits: [
      { title: 'Résistance à l\'Usure Maximale', description: 'Le carbure de tungstène monobloc offre ~1500 HV pour les fibres les plus abrasives.', icon: 'Shield' },
      { title: 'Arête Lisse — Coupe Nette', description: 'L\'arête lisse offre une coupe nette sans bavures, idéale pour les fibres nécessitant une finition propre.', icon: 'Target' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 117,5×15,6×0,91mm pour un ajustement parfait sur les machines Mark V.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Mark V en carbure de tungstène monobloc avec arête lisse offre une coupe nette et sans bavures. La dureté de ~1500 HV garantit une durée de vie exceptionnelle sur les fibres les plus abrasives.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 117,5×15,6×0,91mm — corps allongé</li><li>Matériau : Carbure de tungstène monobloc — ~1500 HV</li><li>Arête lisse pour coupe nette</li></ul><h3>Applications</h3><ul><li>Fibres de verre — coupe lisse abrasive</li><li>Fibres de carbone — précision sans bavures</li><li>Coupe de précision sur lignes à forte usure</li></ul>',
    seo: {
      title: 'Lame Mark V Tungstène Lisse 117,5×15,6mm | Alya Blade',
      description: 'Lame tungstène lisse pour Mark V. 117,5×15,6×0,91mm. Coupe nette. Fibres de verre, carbone.',
      keywords: ['lame tungstène lisse', 'mark v tungstène lisse', 'lame fibre lisse', 'lame lisse coupe fibre', 'tungstène lisse mark v', 'lame carbure lisse 117mm', 'b645 tungstène lisse', 'lame fibre verre lisse', 'lame fibre carbone lisse', 'couteau tungstène lisse mark v', 'lame monobloc lisse', 'mark v tungstène lisse 117,5mm'],
    },
  },

  'b573-paslanmaz': {
    name: 'Lame pour Fibres (Hercule Court) – Acier Inoxydable',
    subtitle: 'Acier Inoxydable — 95×19×0,88mm',
    description: 'Lame courte en acier inoxydable pour machines de coupe Hercule. 95×19×0,88mm.',
    shortDescription: 'Lame courte pour machines Hercule. 95×19×0,88mm, acier inoxydable.',
    features: ['Compatible machines Hercule', '95×19×0,88mm — type court', 'Acier inoxydable', 'Optimisée pour fibres coupées', 'Longue durée de vie'],
    applications: ['Production de fibres coupées', 'Coupe de fibres synthétiques', 'Coupe de fibres textiles', 'Transformation des fibres'],
    benefits: [
      { title: 'Résistance à la Corrosion', description: 'La construction en acier inoxydable résiste aux environnements humides et chimiques des lignes de fibres.', icon: 'Shield' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 95×19×0,88mm pour un ajustement parfait sur les machines Hercule — type court.', icon: 'Settings' },
      { title: 'Rapport Qualité-Prix Optimal', description: 'Le format court optimise le coût par coupe tout en offrant une durée de vie fiable.', icon: 'DollarSign' },
    ],
    longDescription: '<p>La lame courte Hercule en acier inoxydable offre des performances fiables sur les machines de coupe de fibres Hercule. Dimensions 95×19×0,88mm optimisées pour le type court.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 95×19×0,88mm — type court</li><li>Matériau : Acier inoxydable anticorrosion</li><li>Optimisée pour fibres synthétiques et textiles</li></ul><h3>Applications</h3><ul><li>Lignes de production de fibres coupées</li><li>Fibres synthétiques (polyester, nylon, polypropylène)</li><li>Fibres textiles industrielles</li></ul>',
    seo: {
      title: 'Lame Hercule Court Acier Inoxydable 95×19mm | Alya Blade',
      description: 'Lame courte acier inoxydable pour machines Hercule. 95×19×0,88mm. Fibres coupées.',
      keywords: ['lame hercule', 'lame fibre hercule court', 'lame fibre 95mm', 'hercule lame acier inoxydable', 'lame coupe fibre hercule', 'hercule 95×19mm', 'lame industrielle hercule', 'couteau fibre hercule', 'b573 lame fibre', 'lame fibre synthétique hercule', 'lame hercule courte', 'lame fibres coupées hercule'],
    },
  },
  'b573-tin-kaplama': {
    name: 'Lame pour Fibres (Hercule Court) – Acier Inoxydable + Revêtement TiN',
    subtitle: 'Acier Inoxydable + Revêtement TiN — 95×19×0,88mm',
    description: 'Lame courte revêtue TiN pour machines Hercule. 95×19×0,88mm. Revêtement TiN prolonge la durée de vie de 2 à 3 fois.',
    shortDescription: 'Lame TiN pour Hercule court. 95×19×0,88mm, durée de vie 2-3x.',
    features: ['Compatible machines Hercule', '95×19×0,88mm', 'Revêtement TiN — durée de vie 2-3x', 'Fibres abrasives', 'Haute dureté'],
    applications: ['Production de fibres coupées', 'Fibres abrasives', 'Fibres de verre', 'Lignes haute production'],
    benefits: [
      { title: 'Revêtement TiN Haute Dureté', description: 'Le nitrure de titane atteint ~2300 HV pour une résistance à l\'usure exceptionnelle sur fibres abrasives.', icon: 'Award' },
      { title: 'Friction Réduite', description: 'La surface TiN réduit la friction, permettant des coupes plus nettes sur fibres de verre.', icon: 'Zap' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 95×19×0,88mm pour un ajustement parfait sur les machines Hercule — type court.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame courte Hercule revêtue TiN prolonge la durée de vie de 2 à 3 fois. Le format court 95×19×0,88mm avec revêtement nitrure de titane est idéal pour les fibres abrasives.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 95×19×0,88mm — type court</li><li>Revêtement : TiN — dureté ~2300 HV</li><li>Durée de vie : 2-3x plus longue que l\'acier standard</li></ul><h3>Applications</h3><ul><li>Fibres de verre et abrasives</li><li>Lignes haute production Hercule</li><li>Fibres synthétiques haute résistance</li></ul>',
    seo: {
      title: 'Lame Hercule Court TiN 95×19mm | Lame Fibres Coupées',
      description: 'Lame TiN pour Hercule court. 95×19×0,88mm. Durée de vie 2-3x.',
      keywords: ['hercule lame tin', 'lame fibre tin hercule', 'revêtement tin hercule', 'lame tin coupe fibre hercule', 'nitrure titane hercule', 'hercule tin 95×19mm', 'lame longue durée hercule', 'b573 tin lame', 'lame abrasive tin hercule', 'lame fibres verre tin hercule', 'couteau tin hercule', 'lame tin haute production hercule'],
    },
  },
  'b574-paslanmaz': {
    name: 'Lame pour Fibres (Hercule Long) – Acier Inoxydable',
    subtitle: 'Acier Inoxydable — 114×19×0,88mm',
    description: 'Lame longue en acier inoxydable pour machines Hercule. 114×19×0,88mm, surface de coupe plus large que le type court.',
    shortDescription: 'Lame longue pour Hercule. 114×19×0,88mm, acier inoxydable, surface de coupe plus large.',
    features: ['Compatible machines Hercule', '114×19×0,88mm — type long', 'Acier inoxydable', 'Surface de coupe plus large', 'Longue durée de vie'],
    applications: ['Production de fibres coupées', 'Coupe de fibres synthétiques', 'Coupe de fibres textiles', 'Transformation des fibres'],
    benefits: [
      { title: 'Résistance à la Corrosion', description: 'L\'acier inoxydable résiste aux environnements humides et chimiques des lignes de fibres.', icon: 'Shield' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 114×19×0,88mm — type long pour machines Hercule.', icon: 'Settings' },
      { title: 'Surface de Coupe Élargie', description: 'Le type long 114mm offre une surface de coupe 20% plus grande que le type court 95mm.', icon: 'Maximize' },
    ],
    longDescription: '<p>La lame longue Hercule en acier inoxydable offre une surface de coupe plus large grâce à son corps de 114mm. Conçue pour les machines Hercule avec une résistance à la corrosion optimale.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 114×19×0,88mm — type long</li><li>Matériau : Acier inoxydable anticorrosion</li><li>Surface de coupe 20% plus large que le type court</li></ul><h3>Applications</h3><ul><li>Lignes de production de fibres coupées haute capacité</li><li>Fibres synthétiques (polyester, nylon, polypropylène)</li><li>Fibres textiles industrielles</li></ul>',
    seo: {
      title: 'Lame Hercule Long Acier Inoxydable 114×19mm | Alya Blade',
      description: 'Lame longue acier inoxydable pour Hercule. 114×19×0,88mm. Surface de coupe plus large.',
      keywords: ['hercule lame longue', 'lame fibre 114mm', 'fibres coupées hercule', 'hercule long acier inoxydable', 'lame coupe fibre hercule long', 'hercule 114×19mm', 'lame industrielle hercule long', 'couteau fibre hercule long', 'b574 lame fibre', 'lame fibre synthétique hercule', 'lame hercule longue surface', 'lame fibres textiles hercule'],
    },
  },
  'b574-tin-kaplama': {
    name: 'Lame pour Fibres (Hercule Long) – Acier Inoxydable + Revêtement TiN',
    subtitle: 'Acier Inoxydable + Revêtement TiN — 114×19×0,88mm',
    description: 'Lame longue revêtue TiN pour machines Hercule. 114×19×0,88mm. Revêtement TiN prolonge la durée de vie de 2 à 3 fois. Surface de coupe plus large.',
    shortDescription: 'Lame TiN longue pour Hercule. 114×19×0,88mm, durée de vie 2-3x.',
    features: ['Compatible machines Hercule', '114×19×0,88mm — type long', 'Revêtement TiN — durée de vie 2-3x', 'Fibres abrasives', 'Surface de coupe plus large'],
    applications: ['Production de fibres coupées', 'Fibres abrasives', 'Fibres de verre', 'Lignes haute production'],
    benefits: [
      { title: 'Revêtement TiN Haute Dureté', description: 'Le nitrure de titane ~2300 HV sur le type long 114mm pour une résistance maximale sur fibres abrasives.', icon: 'Award' },
      { title: 'Friction Réduite', description: 'Surface TiN à faible friction pour des coupes nettes avec moins d\'échauffement.', icon: 'Zap' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 114×19×0,88mm pour un ajustement parfait sur les machines Hercule — type long.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame longue Hercule revêtue TiN combine la surface de coupe élargie de 114mm avec le revêtement nitrure de titane pour une durée de vie 2-3 fois plus longue. Idéale pour les fibres abrasives à haute production.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 114×19×0,88mm — type long</li><li>Revêtement : TiN — dureté ~2300 HV</li><li>Durée de vie : 2-3x plus longue que l\'acier standard</li></ul><h3>Applications</h3><ul><li>Fibres de verre et abrasives</li><li>Lignes haute production Hercule</li><li>Fibres synthétiques haute résistance</li></ul>',
    seo: {
      title: 'Lame Hercule Long TiN 114×19mm | Lame Fibres Coupées',
      description: 'Lame TiN pour Hercule long. 114×19×0,88mm. Durée de vie 2-3x.',
      keywords: ['hercule lame longue tin', 'lame fibre tin 114mm', 'revêtement tin hercule long', 'lame tin coupe fibre hercule long', 'nitrure titane hercule long', 'hercule long tin 114×19mm', 'lame longue durée hercule long', 'b574 tin lame', 'lame abrasive tin hercule', 'lame fibres verre tin hercule', 'couteau tin hercule long', 'lame tin surface élargie'],
    },
  },

  'b048-paslanmaz': {
    name: 'Lame pour Fibres (Krupp) 48mm – Acier Inoxydable',
    subtitle: 'Acier Inoxydable — 48×7,9×0,88mm',
    description: 'Lame compacte en acier inoxydable pour machines Krupp. 48×7,9×0,88mm.',
    shortDescription: 'Lame compacte pour Krupp. 48×7,9×0,88mm, acier inoxydable.',
    features: ['Compatible machines Krupp', '48×7,9×0,88mm — taille compacte', 'Acier inoxydable', 'Pour fibres coupées', 'Longue durée de vie'],
    applications: ['Production de fibres coupées', 'Coupe de fibres synthétiques', 'Coupe de fibres textiles', 'Transformation des fibres'],
    benefits: [
      { title: 'Résistance à la Corrosion', description: 'La construction en acier inoxydable résiste aux environnements humides et chimiques des lignes de fibres.', icon: 'Shield' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions compactes 48×7,9×0,88mm pour un ajustement parfait sur les machines Krupp.', icon: 'Settings' },
      { title: 'Format Compact Économique', description: 'La taille compacte 48mm optimise le coût par coupe pour les machines Krupp.', icon: 'DollarSign' },
    ],
    longDescription: '<p>La lame compacte Krupp en acier inoxydable offre des performances fiables pour les machines de coupe de fibres Krupp. Les dimensions 48×7,9×0,88mm sont optimisées pour un ajustement précis.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 48×7,9×0,88mm — format compact</li><li>Matériau : Acier inoxydable anticorrosion</li><li>Optimisée pour fibres synthétiques et textiles</li></ul><h3>Applications</h3><ul><li>Lignes de production de fibres coupées</li><li>Fibres synthétiques (polyester, nylon, polypropylène)</li><li>Fibres textiles industrielles</li></ul>',
    seo: {
      title: 'Lame Krupp 48mm Acier Inoxydable 48×7,9mm | Alya Blade',
      description: 'Lame acier inoxydable pour Krupp. 48×7,9×0,88mm. Fibres coupées.',
      keywords: ['lame krupp', 'krupp lame 48mm', 'lame fibres coupées krupp', 'krupp acier inoxydable 48mm', 'lame coupe fibre krupp', 'krupp 48×7,9mm', 'lame industrielle krupp', 'couteau fibre krupp', 'b048 lame fibre', 'lame fibre synthétique krupp', 'lame compacte krupp', 'lame krupp acier'],
    },
  },
  'b048-tin-kaplama': {
    name: 'Lame pour Fibres (Krupp) 48mm – Acier Inoxydable + Revêtement TiN',
    subtitle: 'Acier Inoxydable + Revêtement TiN — 48×7,9×0,88mm',
    description: 'Lame revêtue TiN pour machines Krupp. 48×7,9×0,88mm. Revêtement TiN prolonge la durée de vie de 2 à 3 fois.',
    shortDescription: 'Lame TiN pour Krupp 48mm. 48×7,9×0,88mm, durée de vie 2-3x.',
    features: ['Compatible machines Krupp', '48×7,9×0,88mm', 'Revêtement TiN — durée de vie 2-3x', 'Fibres abrasives', 'Haute dureté'],
    applications: ['Production de fibres coupées', 'Fibres abrasives', 'Fibres de verre', 'Lignes haute production'],
    benefits: [
      { title: 'Revêtement TiN Haute Dureté', description: 'Le nitrure de titane atteint ~2300 HV pour une résistance à l\'usure exceptionnelle même sur le format compact.', icon: 'Award' },
      { title: 'Friction Réduite', description: 'Surface TiN à faible friction pour des coupes nettes sur fibres de verre et abrasives.', icon: 'Zap' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 48×7,9×0,88mm pour un ajustement parfait sur les machines Krupp.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Krupp 48mm revêtue TiN prolonge la durée de vie de 2 à 3 fois. Le format compact avec revêtement nitrure de titane est idéal pour les fibres abrasives sur machines Krupp.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 48×7,9×0,88mm — format compact</li><li>Revêtement : TiN — dureté ~2300 HV</li><li>Durée de vie : 2-3x plus longue que l\'acier standard</li></ul><h3>Applications</h3><ul><li>Fibres de verre et abrasives</li><li>Lignes haute production Krupp</li><li>Fibres synthétiques haute résistance</li></ul>',
    seo: {
      title: 'Lame Krupp 48mm TiN 48×7,9mm | Lame Fibres Coupées',
      description: 'Lame TiN pour Krupp. 48×7,9×0,88mm. Durée de vie 2-3x.',
      keywords: ['krupp tin 48mm', 'lame tin krupp', 'revêtement tin krupp 48mm', 'lame tin coupe fibre krupp', 'nitrure titane krupp', 'krupp tin 48×7,9mm', 'lame longue durée krupp', 'b048 tin lame', 'lame abrasive tin krupp', 'lame fibres verre tin krupp', 'couteau tin krupp 48mm', 'lame tin compacte krupp'],
    },
  },
  'b048-yekpare-tungsten': {
    name: 'Lame pour Fibres (Krupp) 48mm – Carbure de Tungstène Monobloc',
    subtitle: 'Carbure de Tungstène Monobloc — 48×7,9×0,88mm',
    description: 'Lame en carbure de tungstène monobloc pour machines Krupp. 48×7,9×0,88mm. Durée de vie exceptionnelle.',
    shortDescription: 'Lame tungstène pour Krupp 48mm. 48×7,9×0,88mm, résistance maximale.',
    features: ['Compatible machines Krupp', '48×7,9×0,88mm', 'Carbure de tungstène — résistance maximale', 'Durée de vie 3-4x vs acier', 'Fibres de verre et carbone'],
    applications: ['Coupe de fibres de verre', 'Coupe de fibres de carbone', 'Fibres abrasives', 'Lignes à forte usure'],
    benefits: [
      { title: 'Résistance à l\'Usure Maximale', description: 'Le carbure de tungstène monobloc offre ~1500 HV — résistance inégalée même sur le format compact 48mm.', icon: 'Shield' },
      { title: 'Rétention d\'Arête Supérieure', description: 'Maintient le tranchant 3-4 fois plus longtemps que l\'acier, réduisant les arrêts de production.', icon: 'Target' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 48×7,9×0,88mm pour un ajustement parfait sur les machines Krupp.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Krupp 48mm en carbure de tungstène monobloc est la solution ultime pour les fibres les plus abrasives. Avec une dureté de ~1500 HV, elle offre une résistance à l\'usure inégalée dans un format compact.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 48×7,9×0,88mm — format compact</li><li>Matériau : Carbure de tungstène monobloc — ~1500 HV</li><li>Durée de vie : 3-4x plus longue que l\'acier</li></ul><h3>Applications</h3><ul><li>Fibres de verre — résistance à l\'abrasion extrême</li><li>Fibres de carbone — coupe de haute précision</li><li>Lignes Krupp à forte usure</li></ul>',
    seo: {
      title: 'Lame Krupp 48mm Tungstène 48×7,9mm | Lame Fibres Coupées',
      description: 'Lame tungstène monobloc pour Krupp. 48×7,9×0,88mm. Résistance maximale.',
      keywords: ['krupp tungstène 48mm', 'lame tungstène krupp', 'lame monobloc tungstène krupp', 'lame carbure coupe fibre krupp', 'tungstène 48×7,9mm', 'lame fibre verre tungstène krupp', 'lame fibre carbone krupp', 'b048 tungstène', 'lame haute résistance krupp', 'krupp carbure tungstène', 'lame tungstène compacte', 'couteau tungstène krupp 48mm'],
    },
  },
  'b064-paslanmaz': {
    name: 'Lame pour Fibres (Krupp) 64mm – Acier Inoxydable',
    subtitle: 'Acier Inoxydable — 64×7,9×0,88mm',
    description: 'Lame en acier inoxydable pour machines Krupp. 64×7,9×0,88mm, plus long que la version 48mm.',
    shortDescription: 'Lame pour Krupp 64mm. 64×7,9×0,88mm, acier inoxydable, surface de coupe plus large.',
    features: ['Compatible machines Krupp', '64×7,9×0,88mm — plus long que 48mm', 'Acier inoxydable', 'Surface de coupe plus large', 'Longue durée de vie'],
    applications: ['Production de fibres coupées', 'Coupe de fibres synthétiques', 'Coupe de fibres textiles', 'Transformation des fibres'],
    benefits: [
      { title: 'Résistance à la Corrosion', description: 'L\'acier inoxydable résiste aux environnements humides et chimiques des lignes de fibres.', icon: 'Shield' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 64×7,9×0,88mm pour un ajustement parfait sur les machines Krupp — plus long que le 48mm.', icon: 'Settings' },
      { title: 'Surface de Coupe Élargie', description: 'Le format 64mm offre une surface de coupe plus large que la version 48mm pour une productivité accrue.', icon: 'Maximize' },
    ],
    longDescription: '<p>La lame Krupp 64mm en acier inoxydable offre une surface de coupe plus large que la version 48mm. Conçue pour les machines Krupp avec une résistance à la corrosion optimale.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 64×7,9×0,88mm — plus long que le 48mm</li><li>Matériau : Acier inoxydable anticorrosion</li><li>Surface de coupe élargie</li></ul><h3>Applications</h3><ul><li>Lignes de production de fibres coupées</li><li>Fibres synthétiques (polyester, nylon, polypropylène)</li><li>Fibres textiles industrielles</li></ul>',
    seo: {
      title: 'Lame Krupp 64mm Acier Inoxydable 64×7,9mm | Alya Blade',
      description: 'Lame acier inoxydable pour Krupp. 64×7,9×0,88mm. Surface de coupe plus large.',
      keywords: ['krupp lame 64mm', 'lame fibres coupées krupp 64', 'krupp acier inoxydable 64mm', 'lame coupe fibre krupp 64', 'krupp 64×7,9mm', 'lame industrielle krupp 64', 'couteau fibre krupp 64mm', 'b064 lame fibre', 'lame fibre synthétique krupp', 'lame krupp longue', 'lame krupp acier 64', 'fibres textiles krupp 64mm'],
    },
  },
  'b064-tin-kaplama': {
    name: 'Lame pour Fibres (Krupp) 64mm – Acier Inoxydable + Revêtement TiN',
    subtitle: 'Acier Inoxydable + Revêtement TiN — 64×7,9×0,88mm',
    description: 'Lame revêtue TiN pour machines Krupp. 64×7,9×0,88mm. Revêtement TiN prolonge la durée de vie de 2 à 3 fois.',
    shortDescription: 'Lame TiN pour Krupp 64mm. 64×7,9×0,88mm, durée de vie 2-3x.',
    features: ['Compatible machines Krupp', '64×7,9×0,88mm', 'Revêtement TiN — durée de vie 2-3x', 'Fibres abrasives', 'Haute dureté'],
    applications: ['Production de fibres coupées', 'Fibres abrasives', 'Fibres de verre', 'Lignes haute production'],
    benefits: [
      { title: 'Revêtement TiN Haute Dureté', description: 'Le nitrure de titane atteint ~2300 HV pour une résistance à l\'usure sur le format 64mm.', icon: 'Award' },
      { title: 'Friction Réduite', description: 'Surface TiN à faible friction pour des coupes nettes sur fibres de verre et abrasives.', icon: 'Zap' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 64×7,9×0,88mm pour un ajustement parfait sur les machines Krupp.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Krupp 64mm revêtue TiN combine la surface de coupe élargie avec le revêtement nitrure de titane pour une durée de vie 2-3 fois plus longue. Idéale pour les fibres abrasives à haute production.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 64×7,9×0,88mm</li><li>Revêtement : TiN — dureté ~2300 HV</li><li>Durée de vie : 2-3x plus longue que l\'acier standard</li></ul><h3>Applications</h3><ul><li>Fibres de verre et abrasives</li><li>Lignes haute production Krupp</li><li>Fibres synthétiques haute résistance</li></ul>',
    seo: {
      title: 'Lame Krupp 64mm TiN 64×7,9mm | Lame Fibres Coupées',
      description: 'Lame TiN pour Krupp 64mm. 64×7,9×0,88mm. Durée de vie 2-3x.',
      keywords: ['krupp tin 64mm', 'lame tin krupp 64', 'revêtement tin krupp 64mm', 'lame tin coupe fibre krupp 64', 'nitrure titane krupp 64', 'krupp tin 64×7,9mm', 'lame longue durée krupp 64', 'b064 tin lame', 'lame abrasive tin krupp 64', 'lame fibres verre tin krupp 64', 'couteau tin krupp 64mm', 'lame tin surface élargie krupp'],
    },
  },
  'b064-yekpare-tungsten': {
    name: 'Lame pour Fibres (Krupp) 64mm – Carbure de Tungstène Monobloc',
    subtitle: 'Carbure de Tungstène Monobloc — 64×7,9×0,88mm',
    description: 'Lame en carbure de tungstène monobloc pour machines Krupp. 64×7,9×0,88mm. Durée de vie exceptionnelle.',
    shortDescription: 'Lame tungstène pour Krupp 64mm. 64×7,9×0,88mm, résistance maximale.',
    features: ['Compatible machines Krupp', '64×7,9×0,88mm', 'Carbure de tungstène — résistance maximale', 'Durée de vie 3-4x', 'Fibres de verre et carbone'],
    applications: ['Coupe de fibres de verre', 'Coupe de fibres de carbone', 'Fibres abrasives', 'Lignes à forte usure'],
    benefits: [
      { title: 'Résistance à l\'Usure Maximale', description: 'Le carbure de tungstène monobloc offre ~1500 HV — résistance inégalée pour les fibres les plus abrasives.', icon: 'Shield' },
      { title: 'Rétention d\'Arête Supérieure', description: 'Maintient le tranchant 3-4 fois plus longtemps que l\'acier, réduisant les arrêts machine.', icon: 'Target' },
      { title: 'Compatibilité Machine Parfaite', description: 'Dimensions 64×7,9×0,88mm pour un ajustement parfait sur les machines Krupp.', icon: 'Settings' },
    ],
    longDescription: '<p>La lame Krupp 64mm en carbure de tungstène monobloc offre la résistance à l\'usure la plus élevée de la gamme Krupp. Avec ~1500 HV de dureté et une surface de coupe élargie, elle est idéale pour les fibres les plus exigeantes.</p><h3>Caractéristiques Techniques</h3><ul><li>Dimensions : 64×7,9×0,88mm</li><li>Matériau : Carbure de tungstène monobloc — ~1500 HV</li><li>Durée de vie : 3-4x plus longue que l\'acier</li></ul><h3>Applications</h3><ul><li>Fibres de verre — résistance à l\'abrasion extrême</li><li>Fibres de carbone — coupe de haute précision</li><li>Lignes Krupp à forte usure</li></ul>',
    seo: {
      title: 'Lame Krupp 64mm Tungstène 64×7,9mm | Lame Fibres Coupées',
      description: 'Lame tungstène monobloc pour Krupp 64mm. 64×7,9×0,88mm. Résistance maximale.',
      keywords: ['krupp tungstène 64mm', 'lame tungstène krupp 64', 'lame monobloc tungstène krupp 64', 'lame carbure coupe fibre krupp 64', 'tungstène 64×7,9mm', 'lame fibre verre tungstène krupp', 'lame fibre carbone krupp 64', 'b064 tungstène', 'lame haute résistance krupp 64', 'krupp carbure tungstène 64', 'couteau tungstène krupp 64mm', 'lame tungstène surface élargie'],
    },
  },

  // --- LAMES MICROTOME / HISTOLOGIE ---

  'b575': {
    name: 'B575 LAME MICROTOME – PROFIL BAS',
    subtitle: 'Lame microtome jetable pour laboratoires d\'histologie',
    description: 'Lame microtome B575 profil bas. 80,01×8,13×0,25mm, affûtage triple facette, acier inoxydable + revêtement. Lame jetable haute précision pour coupes de routine de tissus en paraffine dans les laboratoires d\'histologie et de pathologie. Compatible avec microtomes Leica, Thermo, Sakura.',
    shortDescription: 'Lame microtome B575 profil bas. 80,01×8,13×0,25mm, affûtage triple facette. Pour coupes de routine en paraffine. Compatible Leica, Thermo, Sakura.',
    features: [
      'Dimensions profil bas 80,01×8,13×0,25mm',
      'Affûtage triple facette pour coupes ultra-lisses',
      'Acier inoxydable + revêtement spécial',
      'Capacité de coupe 1–50 microns',
      'Design hygiénique jetable',
      'Compatible avec microtomes Leica, Thermo, Sakura, SLEE',
      'Options de revêtement PTFE / platine-chrome',
      'Qualité Sheffield Durham Duplex',
    ],
    applications: [
      'Histopathologie',
      'Laboratoire de pathologie',
      'Laboratoire de recherche',
      'Coupes en paraffine',
      'Pathologie vétérinaire',
      'Enseignement médical',
    ],
    benefits: [
      {
        title: 'Haute précision',
        description: 'L\'affûtage triple facette produit des coupes lisses dans la plage de 1 à 50 microns.',
        icon: 'Target',
      },
      {
        title: 'Faible friction',
        description: 'Le revêtement spécial empêche l\'adhérence des tissus, assurant une qualité constante entre les coupes.',
        icon: 'Sparkles',
      },
      {
        title: 'Large compatibilité',
        description: 'Design profil bas compatible avec tous les microtomes rotatifs standard Leica, Thermo, Sakura et SLEE.',
        icon: 'Link',
      },
    ],
    longDescription: `<p>La <strong>lame microtome B575 profil bas</strong> est un instrument de coupe haute précision conçu pour préparer des coupes de tissus ultra-fines adaptées à l'examen microscopique dans les laboratoires d'histopathologie et de recherche. Dimensions : 80,01×8,13×0,25mm.</p>
<h3>Spécifications techniques</h3>
<ul><li><strong>Dimensions :</strong> 80,01 × 8,13 × 0,25mm</li><li><strong>Profil :</strong> Profil bas (Low Profile)</li><li><strong>Affûtage :</strong> Triple facette</li><li><strong>Matériau :</strong> Acier inoxydable + revêtement</li><li><strong>Épaisseur de coupe :</strong> 1–50 microns</li></ul>
<h3>Applications</h3>
<ul><li><strong>Histopathologie :</strong> Examen de routine des tissus et diagnostic</li><li><strong>Laboratoires de pathologie :</strong> Coupes au micron de biopsies et d'échantillons chirurgicaux</li><li><strong>Laboratoires de recherche :</strong> Préparations d'immunohistochimie (IHC) et hybridation in situ</li><li><strong>Pathologie vétérinaire :</strong> Examen histologique de tissus animaux</li></ul>
<h3>Pourquoi le profil bas ?</h3>
<p>Les lames profil bas offrent un positionnement stable dans les porte-lames grâce à leur structure étroite. L'épaisseur de 0,25mm assure une vibration minimale et garantit une surface de coupe lisse. Idéal pour les blocs de paraffine tendres et de dureté moyenne.</p>`,
    seo: {
      title: 'Lame Microtome B575 Profil Bas 80mm | Alya Blade',
      description: 'Lame microtome B575 profil bas 80,01×8,13×0,25mm. Affûtage triple facette, acier inoxydable. Pour histopathologie, coupes en paraffine. Compatible Leica, Thermo, Sakura. Qualité Sheffield.',
      keywords: [
        'lame microtome', 'lame microtome profil bas', 'lame histologie', 'lame pathologie',
        'B575 microtome', 'coupe paraffine', 'lame jetable microtome', 'lame laboratoire',
        'Leica microtome', 'Thermo microtome', 'Sakura microtome',
        'prix lame microtome', 'fournisseur lame microtome', 'lame 80mm',
        'consommables laboratoire', 'histopathologie', 'cryostat',
        'alternative Feather S35', 'alternative Leica 819',
      ],
    },
  },

  // --- LAMES LASIK / MICROKÉRATOME ---

  'b723-001': {
    name: 'B723 001 LAME LASIK / MICROKÉRATOME – 2 ENCOCHES',
    subtitle: 'Lame microkératome jetable pour chirurgie oculaire',
    description: 'Lame LASIK B723 001 à 2 encoches. 38,1×7,94×0,25mm, affûtage triple facette, acier inoxydable, dégraissée. Lame chirurgicale jetable pour la création du volet cornéen. Compatible Moria, Hansatome, Zyoptix.',
    shortDescription: 'Lame LASIK B723 001 à 2 encoches. 38,1×7,94×0,25mm. Pour création du volet cornéen. Compatible Moria, Hansatome.',
    features: [
      'Dimensions de précision 38,1×7,94×0,25mm',
      'Système de montage à 2 encoches',
      'Affûtage triple facette pour surface optiquement plane',
      'Acier inoxydable',
      'Surface dégraissée (sans huile)',
      'Emballage stérile individuel',
      'Compatible avec microkératomes Moria, Hansatome, Zyoptix',
      'Qualité Sheffield Durham Duplex',
    ],
    applications: ['Chirurgie LASIK', 'Chirurgie réfractive', 'Greffe de cornée', 'Chirurgie du ptérygion', 'Recherche ophtalmique'],
    benefits: [
      { title: 'Coupe ultra-précise', description: 'Affûtage triple facette offrant une surface optiquement plane — dommage cornéen minimal.', icon: 'Target' },
      { title: 'Sécurité double verrouillage', description: 'Montage 2 encoches empêche le glissement lors de l\'oscillation haute vitesse.', icon: 'Shield' },
      { title: 'Surface biocompatible', description: 'Surface dégraissée et sans contaminant pour une cicatrisation optimale.', icon: 'Sparkles' },
    ],
    longDescription: `<p>La <strong>lame LASIK B723 001 (2 encoches)</strong> est une lame chirurgicale ultra-précise jetable pour la création du volet cornéen en chirurgie LASIK. Dimensions : 38,1×7,94×0,25mm.</p><h3>Spécifications</h3><ul><li>Dimensions : 38,1×7,94×0,25mm</li><li>Montage : 2 encoches</li><li>Affûtage : Triple facette</li><li>Matériau : Acier inoxydable, dégraissé</li></ul><h3>Applications</h3><ul><li>Chirurgie LASIK — création du volet cornéen</li><li>Chirurgie réfractive — correction myopie et hypermétropie</li><li>Greffe de cornée — préparation de greffons lamellaires</li></ul>`,
    seo: {
      title: 'Lame LASIK B723 001 2 Encoches 38mm | Alya Blade',
      description: 'Lame LASIK B723 001 à 2 encoches 38,1×7,94×0,25mm. Pour LASIK, chirurgie réfractive. Compatible Moria, Hansatome.',
      keywords: ['lame LASIK', 'lame microkératome', 'chirurgie oculaire', 'volet cornéen', 'B723 001', 'Moria', 'Hansatome', 'lame ophtalmique', 'chirurgie réfractive', 'prix lame LASIK'],
    },
  },

  'b723-501': {
    name: 'B723 501 LAME LASIK / MICROKÉRATOME – 1 ENCOCHE',
    subtitle: 'Lame microkératome à encoche unique pour chirurgie oculaire',
    description: 'Lame LASIK B723 501 à 1 encoche. 38,1×7,94×0,25mm, affûtage triple facette, acier inoxydable, dégraissée. Compatible Amadeus, Carriazo-Barraquer, Schwind.',
    shortDescription: 'Lame LASIK B723 501 à 1 encoche. 38,1×7,94×0,25mm. Compatible Amadeus, Carriazo-Barraquer.',
    features: [
      'Dimensions de précision 38,1×7,94×0,25mm',
      'Système de montage à 1 encoche',
      'Affûtage triple facette',
      'Acier inoxydable',
      'Surface dégraissée',
      'Emballage stérile individuel',
      'Compatible avec Amadeus, Carriazo-Barraquer, Schwind',
      'Qualité Sheffield Durham Duplex',
    ],
    applications: ['Chirurgie LASIK', 'Chirurgie réfractive', 'Procédure ALK', 'Greffe de cornée', 'Recherche ophtalmique'],
    benefits: [
      { title: 'Fixation centrale', description: 'Montage 1 encoche offre un positionnement équilibré pour une profondeur uniforme.', icon: 'Target' },
      { title: 'Pureté chirurgicale', description: 'Surface dégraissée et emballage stérile individuel.', icon: 'ShieldCheck' },
      { title: 'Large compatibilité', description: 'Compatible Amadeus, Carriazo-Barraquer, Schwind.', icon: 'Link' },
    ],
    longDescription: `<p>La <strong>lame LASIK B723 501 (1 encoche)</strong> est une lame chirurgicale jetable ultra-précise. 38,1×7,94×0,25mm avec montage 1 encoche.</p><h3>Spécifications</h3><ul><li>Dimensions : 38,1×7,94×0,25mm</li><li>Montage : 1 encoche</li><li>Affûtage : Triple facette</li><li>Matériau : Acier inoxydable, dégraissé</li></ul><h3>Applications</h3><ul><li>Chirurgie LASIK — création du volet cornéen</li><li>ALK — Kératoplastie lamellaire automatisée</li><li>Greffe de cornée</li></ul>`,
    seo: {
      title: 'Lame LASIK B723 501 1 Encoche 38mm | Alya Blade',
      description: 'Lame LASIK B723 501 à 1 encoche 38,1×7,94×0,25mm. Compatible Amadeus, Carriazo-Barraquer.',
      keywords: ['lame LASIK', 'lame microkératome', 'chirurgie oculaire', 'B723 501', '1 encoche', 'Amadeus', 'Carriazo-Barraquer', 'Schwind', 'lame ophtalmique', 'prix lame LASIK'],
    },
  },

  'b724': {
    name: 'B724 LAME MICROTOME – PROFIL HAUT',
    subtitle: 'Lame microtome profil haut pour coupes de tissus durs',
    description: 'Lame microtome B724 profil haut. 80,01×13,97×0,30mm, affûtage triple facette, acier inoxydable + revêtement. Design profil haut pour une stabilité maximale lors de la coupe de tissus durs, calcifiés et de grands blocs de paraffine. Compatible avec microtomes Leica, Thermo, Sakura.',
    shortDescription: 'Lame microtome B724 profil haut. 80,01×13,97×0,30mm. Pour tissus durs et grands blocs. Compatible Leica, Thermo, Sakura.',
    features: [
      'Dimensions profil haut 80,01×13,97×0,30mm',
      'Affûtage triple facette pour coupes ultra-lisses',
      'Acier inoxydable + revêtement spécial',
      'Capacité de coupe 1–50 microns',
      'Optimisée pour tissus durs et calcifiés',
      'Design hygiénique jetable',
      'Compatible avec microtomes Leica, Thermo, Sakura, SLEE',
      'Options de revêtement PTFE / platine-chrome / céramique',
      'Qualité Sheffield Durham Duplex',
    ],
    applications: [
      'Pathologie des tissus durs',
      'Pathologie osseuse',
      'Neuropathologie',
      'Cryostat / coupes congelées',
      'Dermatologie',
      'Coupe de grands blocs',
    ],
    benefits: [
      {
        title: 'Stabilité maximale',
        description: 'Corps large de 13,97mm et épaisseur de 0,30mm offrent des coupes lisses sans vibration dans les tissus durs.',
        icon: 'Shield',
      },
      {
        title: 'Performance tissus durs',
        description: 'Optimisée pour la coupe sécurisée des os calcifiés, biopsies dermiques épaisses et grands blocs de paraffine.',
        icon: 'Target',
      },
      {
        title: 'Durée de vie prolongée',
        description: 'La technologie de revêtement avancée prolonge la durée de vie même dans les tissus durs, offrant un avantage économique.',
        icon: 'Clock',
      },
    ],
    longDescription: `<p>La <strong>lame microtome B724 profil haut</strong> est une lame microtome premium conçue pour des performances supérieures dans la coupe de tissus durs en laboratoires d'histopathologie. Dimensions : 80,01×13,97×0,30mm.</p>
<h3>Spécifications techniques</h3>
<ul><li><strong>Dimensions :</strong> 80,01 × 13,97 × 0,30mm</li><li><strong>Profil :</strong> Profil haut (High Profile)</li><li><strong>Affûtage :</strong> Triple facette</li><li><strong>Matériau :</strong> Acier inoxydable + revêtement</li><li><strong>Épaisseur de coupe :</strong> 1–50 microns</li></ul>
<h3>Applications</h3>
<ul><li><strong>Pathologie des tissus durs :</strong> Coupes d'échantillons tissulaires calcifiés</li><li><strong>Pathologie osseuse :</strong> Examen histologique d'échantillons osseux décalcifiés</li><li><strong>Neuropathologie :</strong> Coupes de grands échantillons tels que le tissu cérébral</li><li><strong>Cryostat :</strong> Coupes de tissus congelés (frozen sections)</li><li><strong>Dermatologie :</strong> Coupes de biopsies cutanées épaisses</li></ul>
<h3>Pourquoi le profil haut ?</h3>
<p>Les lames profil haut avec leur corps large de 13,97mm offrent une stabilité maximale dans le porte-lame. Cette stabilité minimise les vibrations lors de la coupe des tissus durs, permettant des coupes lisses et parallèles. L'épaisseur de 0,30mm augmente la rigidité pour une coupe sécurisée des grands blocs.</p>`,
    seo: {
      title: 'Lame Microtome B724 Profil Haut 80mm | Alya Blade',
      description: 'Lame microtome B724 profil haut 80,01×13,97×0,30mm. Pour tissus durs, os calcifiés, cryostat. Compatible Leica, Thermo, Sakura. Qualité Sheffield.',
      keywords: [
        'lame microtome', 'lame microtome profil haut', 'lame tissus durs', 'lame pathologie',
        'B724 microtome', 'tissus calcifiés', 'cryostat', 'coupes congelées',
        'Leica microtome', 'Thermo microtome', 'Sakura microtome',
        'prix lame microtome', 'fournisseur lame microtome', 'pathologie osseuse',
        'neuropathologie', 'dermatologie biopsie', 'coupe grands blocs',
        'consommables laboratoire', 'histologie',
        'alternative Leica 818', 'lame haute stabilité',
      ],
    },
  },

  // --- LAMES GRATTOIR À VITRE ---

  'b621': {
    name: 'B621 LAME GRATTOIR À VITRE',
    subtitle: 'Lame de grattage professionnelle en acier inoxydable',
    description: 'Série de lames grattoir B621. 3 trous, laquée, acier inoxydable (Rostfrei). Largeurs 60mm, 80mm, 100mm, 150mm. Gratte en toute sécurité les résidus de colle, silicone, ruban adhésif, étiquettes et films des surfaces vitrées sans rayer.',
    shortDescription: 'Lame grattoir B621 en acier inoxydable, 3 trous, laquée. 60–150mm. Gratte sans rayer. Retrait PPF, films de fenêtre, detailing auto.',
    features: [
      'Acier inoxydable (Rostfrei) — pas de corrosion, pas de flexion',
      'Angle d\'affûtage uniforme au micron — ne raye pas le verre',
      'Montage universel 3 trous — compatible tous supports grattoir',
      'Surface laquée — glisse douce, friction minimale',
      'Épaisseur 0,20mm — précise et résistante',
      '4 largeurs : 60mm, 80mm, 100mm, 150mm',
      'Fonctionne sur surfaces humides et sèches',
      'Qualité Sheffield Durham Duplex',
    ],
    applications: ['Nettoyage de vitres', 'Retrait PPF/vinyle', 'Detailing auto', 'Retrait de film de fenêtre', 'Habillage de façade', 'Retrait d\'enseignes et vinyle', 'Nettoyage céramique'],
    benefits: [
      { title: 'Sans rayure — qualité inox', description: 'Acier Rostfrei et angle d\'affûtage uniforme au micron garantissent zéro rayure.', icon: 'ShieldCheck' },
      { title: 'Pas de flexion — métal rigide', description: 'L\'acier inoxydable empêche la flexion et assure un grattage plat et contrôlé.', icon: 'Shield' },
      { title: '4 options de largeur', description: 'De 60mm pour les coins étroits à 150mm pour les grands panneaux vitrés.', icon: 'Maximize' },
      { title: 'Prêt pour les professionnels', description: 'Choix des entreprises de nettoyage de vitres, detailing auto et retrait d\'enseignes.', icon: 'Award' },
    ],
    longDescription: `<p>La série <strong>lames grattoir B621</strong> est fabriquée en acier inoxydable (Rostfrei) pour retirer en toute sécurité les résidus de colle, silicone, ruban et étiquettes des surfaces vitrées.</p>
<h3>Dimensions</h3><ul><li>60×22×0,20mm : Zones étroites</li><li>80×22×0,20mm : Grattage standard</li><li>100×22×0,20mm : Surfaces larges</li><li>150×22×0,20mm : Grands panneaux</li></ul>
<h3>Applications</h3><ul><li>Nettoyage de vitres après construction</li><li>Retrait PPF et vinyle automobile</li><li>Detailing auto</li><li>Retrait de film de fenêtre</li><li>Nettoyage de façades et enseignes</li></ul>`,
    seo: {
      title: 'Lame Grattoir B621 Acier Inoxydable 60–150mm | Alya Blade',
      description: 'Lame grattoir B621, acier inoxydable, 3 trous, laquée. 60mm–150mm. Gratte sans rayer. Retrait PPF, films, detailing auto. Qualité Sheffield.',
      keywords: ['lame grattoir vitre', 'grattoir à vitre', 'lame de grattage', 'B621', 'retrait colle', 'nettoyage vitres', 'retrait PPF', 'detailing auto', 'retrait film fenêtre', 'grattoir professionnel'],
    },
  },

  // ─── B204 LAME CLASSIQUE — INDUSTRIELLE ───────────────────────────────────────
  'b204': {
    name: 'B204 LAME CLASSIQUE — INDUSTRIELLE',
    subtitle: 'Acier Inoxydable Simple Tranchant',
    description: 'Lame classique industrielle B204. 43×22×0,10mm (bord de coupe 37mm), acier inoxydable, simple tranchant. 3 variantes : Inox/Huilée, Inox+PTFE/Huilée, Inox+PTFE/Sans huile. Coupe et grattage professionnels pour papier, emballage, impression, retrait d\'étiquettes, grattage de peinture, découpe de films plastiques et textile.',
    shortDescription: 'Lame classique industrielle B204. 43×22×0,10mm, acier inoxydable, simple tranchant. Options PTFE et sans huile pour découpe papier, retrait d\'étiquettes, grattage peinture.',
    features: [
      'Acier inoxydable — résistance à la corrosion et hygiène',
      'Variante revêtement PTFE — réduit la friction de 40-50%',
      'Empêche l\'accumulation d\'adhésif — pas de pauses nettoyage',
      'Version sans huile — conformité alimentaire et médicale',
      '0,10mm ultra-fin — coupe de précision',
      '43×22mm taille standard — compatible avec les supports de grattoir courants',
      'Bord de coupe actif 37mm — large zone de travail',
      'Options d\'emballage 250 et 2000 pièces',
    ],
    applications: [
      'Découpe papier/emballage — machines de découpe papier, carton, film étirable, ruban',
      'Impression — grattage d\'encre, nettoyage de cylindres, ébavurage de bords de papier',
      'Retrait d\'étiquettes — étiquettes, codes-barres, prix sur verre, métal, plastique',
      'Grattage de peinture — éclaboussures de peinture, vernis sur surfaces vitrées',
      'Retrait d\'adhésif — résidus de ruban, colle, adhésif',
      'Automobile — retrait de joints, décalcomanies, nettoyage de vitres',
      'Découpe plastique/film — machines de découpe de films fins, feuilles, lamination',
      'Emballage alimentaire — coupe hygiénique en ligne (version sans huile)',
      'Textile — ébavurage de bords de tissu, coupe de fils',
    ],
    benefits: [
      { title: 'Inoxydable — Résistant à la Corrosion', description: 'L\'acier inoxydable maintient la qualité de la lame en milieu humide, au contact alimentaire et avec des matériaux corrosifs.', icon: 'ShieldCheck' },
      { title: 'Revêtement PTFE — Coupe Sans Friction', description: 'Le revêtement PTFE réduit la friction de 40-50%, empêche l\'accumulation d\'adhésif et prolonge la durée de vie 2-3x.', icon: 'Sparkles' },
      { title: 'Option Sans Huile — Usage Hygiénique', description: 'La version sans huile fonctionne sans risque de contamination pour l\'emballage alimentaire et les environnements hygiéniques.', icon: 'Droplets' },
      { title: '0,10mm Ultra-Fin — Précision', description: '0,10mm d\'épaisseur pour des coupes nettes sans déchirure dans les films fins, le papier et les matériaux délicats.', icon: 'Ruler' },
    ],
    longDescription: `<p>La <strong>lame classique industrielle B204</strong> mesure 43×22×0,10mm (bord de coupe actif 37mm), acier inoxydable à simple tranchant. Elle assure une coupe et un grattage professionnels : papier, emballage, impression, retrait d'étiquettes, grattage de peinture et découpe de films plastiques.</p>
<h3>Pourquoi une lame classique ?</h3><p>Contrairement aux lames à segments qui changent de géométrie à chaque cassure, les lames classiques offrent une <strong>structure métallique monobloc</strong> sans risque de flexion ou de rupture.</p>
<h3>Avantage du PTFE</h3><ul><li><strong>Réduit la friction de 40-50%</strong></li><li><strong>Empêche l'accumulation d'adhésif</strong></li><li><strong>Prolonge la durée de vie 2-3x</strong></li><li><strong>Coupe plus lisse</strong> — réduit le risque de déchirure</li></ul>
<h3>Variantes</h3><table><tr><th>Code</th><th>Caractéristique</th><th>Emballage</th><th>Usage idéal</th></tr><tr><td>B204 003</td><td>Inox, Huilée</td><td>Boîte 250 pcs</td><td>Usage industriel général</td></tr><tr><td>B204 004</td><td>Inox + PTFE, Huilée</td><td>Boîte bâton 2000 pcs</td><td>Grattage adhésif/étiquettes, gros volume</td></tr><tr><td>B204 007</td><td>Inox + PTFE, Sans huile</td><td>Boîte bâton 2000 pcs</td><td>Emballage alimentaire, hygiénique</td></tr></table>`,
    seo: {
      title: 'Lame Classique B204 Inox PTFE 43×22mm | Alya Blade',
      description: 'Lame classique industrielle B204, 43×22×0,10mm, acier inoxydable, simple tranchant. Options PTFE et sans huile. Découpe papier, retrait étiquettes, grattage peinture.',
      keywords: ['lame classique', 'lame simple tranchant', 'B204', 'lame PTFE', 'lame grattoir', 'retrait étiquettes', 'grattage peinture', 'lame découpe', 'lame industrielle', 'sans huile'],
    },
  },

  // ─── B684/B685 LAME CLASSIQUE — MÉDICALE ──────────────────────────────────────
  'b684-b685': {
    name: 'B684/B685 LAME CLASSIQUE — MÉDICALE',
    subtitle: 'Acier Inoxydable, Affûtage Triple Facette',
    description: 'Lame classique médicale B684/B685. 38×19×0,10mm, acier inoxydable, affûtage triple facette, revêtue. Pour histologie, pathologie, dermatologie et laboratoire. B684 : 100 pcs/boîte, B685 : 250 pcs/boîte.',
    shortDescription: 'Lame classique médicale B684/B685. 38×19×0,10mm, acier inoxydable, triple facette. Laboratoires d\'histologie, pathologie, dermatologie.',
    features: [
      'Acier inoxydable — résistance à la corrosion et sécurité médicale',
      'Affûtage triple facette — bord de coupe ultra-tranchant',
      'Surface revêtue — faible friction et coupe lisse',
      '38×19mm format compact — compatible supports de grattoir standards',
      '0,10mm ultra-fin',
      'Options 100 pcs (B684) et 250 pcs (B685)',
      'Compatible laboratoires histologie, pathologie, dermatologie',
    ],
    applications: [
      'Histologie — coupes fines de blocs tissulaires enrobés de paraffine',
      'Pathologie — préparation de biopsies, dissection macroscopique',
      'Dermatologie — grattage cutané pour préparation KOH, prélèvement fongique',
      'Laboratoire général — grattage de précision, préparation, montage de lames',
      'Industriel de précision — nettoyage de lentilles optiques, grattage de circuits',
    ],
    benefits: [
      { title: 'Triple Facette — Bord Ultra-Tranchant', description: 'La géométrie triple facette minimise les dommages tissulaires, prolonge la durée de vie et offre une surface de coupe plus lisse.', icon: 'Triangle' },
      { title: 'Acier Inoxydable — Sécurité Médicale', description: 'Maintient l\'intégrité en milieu humide de laboratoire, contact chimique et processus de stérilisation.', icon: 'ShieldCheck' },
      { title: 'Surface Revêtue — Faible Friction', description: 'Le revêtement assure un contact minimal avec les tissus et matériaux, préservant l\'intégrité cellulaire.', icon: 'Sparkles' },
      { title: '2 Formats — B684 / B685', description: 'B684 : 100 pcs/boîte (petit labo), B685 : 250 pcs/boîte (gros volume).', icon: 'Package' },
    ],
    longDescription: `<p>La <strong>lame classique médicale B684/B685</strong> mesure 38×19×0,10mm, acier inoxydable avec affûtage triple facette — conçue pour les laboratoires d'histologie, pathologie et dermatologie.</p>
<h3>Pourquoi le triple facette ?</h3><ul><li><strong>Dommages tissulaires minimaux</strong> — pas d'artéfacts histologiques</li><li><strong>Durée de vie prolongée</strong> — répartition de la charge sur trois niveaux</li><li><strong>Surface de coupe plus lisse</strong> — préserve l'intégrité cellulaire</li></ul>
<h3>Applications</h3><ul><li><strong>Histologie :</strong> Coupes fines de blocs de paraffine</li><li><strong>Pathologie :</strong> Préparation de biopsies</li><li><strong>Dermatologie :</strong> Grattage cutané pour KOH</li><li><strong>Laboratoire :</strong> Grattage de précision, montage de lames</li></ul>`,
    seo: {
      title: 'Lame Classique Médicale B684/B685 Triple | Alya Blade',
      description: 'Lame classique médicale B684/B685, 38×19×0,10mm, acier inoxydable, triple facette. Histologie, pathologie, dermatologie. 100 et 250 pièces.',
      keywords: ['lame médicale', 'lame classique médicale', 'B684', 'B685', 'triple facette', 'lame histologie', 'lame pathologie', 'lame dermatologie', 'grattage cutané', 'lame laboratoire'],
    },
  },

  // ========================================================================
  // COUTEAUX DE REFENTE CIRCULAIRE
  // ========================================================================
  'ust-tabak': {
    name: 'Couteaux Supérieurs Dish — Lame Supérieure de Refente Circulaire',
    subtitle: 'Acier O1 & D2 — Affûtage Simple, Double et Concave',
    description: 'Couteaux supérieurs dish (bombés) en acier O1 et D2. Diamètre extérieur de 62 à 250 mm. Disponibles en affûtage simple face, double face et concave. Utilisés dans les machines de refente de papier, film, feuille et textile.',
    features: ['Acier O1 et D2', 'Affûtage simple / double / concave', 'Diamètre 62-250 mm', 'Épaisseurs 0,6-3,0 mm', 'Compatible refendeuse', 'Fabrication sur mesure'],
    benefits: [
      { title: 'Choix Acier O1 & D2', description: 'Sélection optimale par application', icon: 'Shield' },
      { title: '3 Profils d\'Affûtage', description: 'Simple, double et concave pour chaque type de matériau', icon: 'Target' },
      { title: '19 Tailles Standard', description: 'Large gamme de 62 à 250 mm', icon: 'Ruler' },
      { title: 'Fabrication Sur Mesure', description: 'Production de tailles non standard sur demande', icon: 'Settings' },
    ],
    applications: ['Refente de papier', 'Refente de films et feuilles', 'Découpe d\'emballage', 'Refente textile'],
    longDescription: `<p>Les couteaux supérieurs (dish) fonctionnent avec les couteaux inférieurs dans les systèmes de refente circulaire par cisaillement. Le profil bombé guide le matériau à la ligne de coupe et assure une séparation nette.</p>
<h3>Types d'Affûtage</h3><ul><li><strong>Simple face :</strong> Affûtage unilatéral, coupe de précision pour matériaux fins.</li><li><strong>Double face :</strong> Affûtage bilatéral, force de coupe équilibrée pour matériaux épais.</li><li><strong>Concave :</strong> Profil concave pour applications de refente spéciales.</li></ul>
<h3>Types d'Acier</h3><ul><li><strong>Acier O1 :</strong> Acier à froid trempé à l'huile. Bonne résistance à l'usure, réaffûtage facile.</li><li><strong>Acier D2 :</strong> Acier à froid haute teneur en chrome. Résistance supérieure, durée de vie prolongée.</li></ul>`,
    seo: {
      title: 'Couteaux Supérieurs Dish — Acier O1 D2 | 62-250mm | Alya Blade',
      description: 'Couteaux supérieurs dish en acier O1 & D2. 62-250 mm, épaisseur 0,6-3,0 mm. Affûtage simple, double et concave. 19 tailles standard + fabrication sur mesure.',
      keywords: ['couteau supérieur dish', 'couteau de refente circulaire', 'lame supérieure', 'couteau refendeuse', 'acier O1', 'acier D2', 'couteau papier', 'couteau film'],
    },
  },
  'alt-bicak': {
    name: 'Couteaux Inférieurs — Lame Inférieure de Refente Circulaire',
    subtitle: 'Acier O1 & D2 & HSS — Types Libre et Auto-bloquant',
    description: 'Couteaux inférieurs de refente en acier O1, D2 et HSS. Diamètre extérieur de 46 à 150 mm. Disponibles en montage libre et auto-bloquant. Utilisés dans les machines de refente de papier, film et emballage.',
    features: ['Acier O1, D2 et HSS', 'Montage libre et auto-bloquant', 'Diamètre 46-150 mm', '4 paramètres dimensionnels', 'Compatible refendeuse', 'Fabrication sur mesure'],
    benefits: [
      { title: 'Deux Types de Montage', description: 'Libre et auto-bloquant selon l\'application', icon: 'Settings' },
      { title: 'Acier O1 / D2 / HSS', description: 'Trois nuances pour chaque besoin', icon: 'Shield' },
      { title: '31 Tailles Standard', description: 'Large gamme de 46 à 150 mm', icon: 'Ruler' },
      { title: 'Fabrication Sur Mesure', description: 'Pour tailles et diamètres d\'arbre non standard', icon: 'Target' },
    ],
    applications: ['Refente de papier', 'Refente de films et feuilles', 'Découpe d\'emballage', 'Lignes de transformation'],
    longDescription: `<p>Les couteaux inférieurs fonctionnent en paire avec les couteaux supérieurs dish dans les systèmes de refente circulaire par cisaillement. Deux types de montage fondamentaux :</p>
<h3>Types de Montage</h3><ul><li><strong>Libre :</strong> Rotation libre sur l'arbre. Entraîné par le matériau. Pour applications faible couple et matériaux fins.</li><li><strong>Auto-bloquant :</strong> Montage verrouillé sur l'arbre. Tourne avec l'arbre. Pour applications fort couple et matériaux épais.</li></ul>
<h3>Types d'Acier</h3><ul><li><strong>Acier O1 :</strong> Équilibre optimal coût-performance pour applications standard.</li><li><strong>Acier D2 :</strong> Performance supérieure pour matériaux abrasifs et longues séries.</li><li><strong>HSS :</strong> Résistance maximale à l'usure et stabilité thermique.</li></ul>`,
    seo: {
      title: 'Couteaux Inférieurs de Refente — Acier O1 D2 | 46-150mm | Alya Blade',
      description: 'Couteaux inférieurs de refente en acier O1, D2 et HSS. 46-150 mm, montage libre et auto-bloquant. 31 tailles standard + fabrication sur mesure.',
      keywords: ['couteau inférieur', 'couteau de refente inférieur', 'lame inférieure', 'couteau refendeuse', 'acier O1', 'acier D2', 'acier HSS', 'montage libre', 'auto-bloquant'],
    },
  },
};
