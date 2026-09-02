import type { Lang } from './i18n';

export const SITE_URL = 'https://koryo-kakinoki.com';

export const AUTHOR = {
  name: 'Koryo Kakinoki',
  nameJa: '柿木滉亮',
  twitter: '@kkcareer_ds',
  links: {
    linkedin: 'https://www.linkedin.com/in/koryo-kakinoki',
    github: 'https://github.com/KoryoK',
    x: 'https://x.com/kkcareer_ds',
    note: 'https://note.com/brainy_phlox8948',
  },
} as const;

/** Japanese lives at the root; English is prefixed with /en. */
export function pathFor(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const base = lang === 'en' ? '/en' : '';
  return clean ? `${base}/${clean}` : base || '/';
}

export function urlFor(lang: Lang, path = ''): string {
  return `${SITE_URL}${pathFor(lang, path)}`;
}

/**
 * Canonical + hreflang map for one logical page.
 * `lang` is required: each language edition must declare *itself* as canonical,
 * otherwise the English pages tell Google they are duplicates of the Japanese ones
 * and never get indexed.
 */
export function alternatesFor(path: string, lang: Lang) {
  return {
    canonical: urlFor(lang, path),
    languages: {
      ja: urlFor('ja', path),
      en: urlFor('en', path),
      'x-default': urlFor('ja', path),
    },
  };
}
