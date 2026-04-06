import siteConfig from '../../site.config.json';

// Type-safe config access with bilingual support
export const config = siteConfig;

// Helper to get bilingual field based on language
export function ct(lang: 'ar' | 'en', ar: string, en: string): string {
  return lang === 'ar' ? ar : en;
}

// Quick accessors
export const biz = config.business;
export const wa = (text?: string) => {
  const base = `https://wa.me/${biz.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};
export const tel = () => `tel:${biz.phone}`;
