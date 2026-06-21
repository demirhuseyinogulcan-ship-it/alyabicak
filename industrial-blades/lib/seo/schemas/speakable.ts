// Speakable Schema.org generator

/**
 * SpeakableSpecification Schema Generator
 * Google Assistant ve sesli asistanlar için
 */
export function generateSpeakableSchema(config: {
  url: string;
  name: string;
  description: string;
  cssSelectors?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.name,
    url: config.url,
    description: config.description,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: config.cssSelectors || [
        'h1',
        '.hero-description',
        'article p:first-of-type',
        '.product-description',
        '.category-description',
      ],
    },
  }
}
