import Link from 'next/link';
import type { Lang } from '@/lib/i18n';
import { pathFor, AUTHOR } from '@/lib/site';

const COPY = {
  ja: { home: 'ホーム', training: '研修', blog: 'ブログ', projects: '開発実績', contact: 'お問い合わせ' },
  en: { home: 'Home', training: 'Training', blog: 'Journal', projects: 'Showcase', contact: 'Contact' },
} as const;

/** Header + footer for sub-pages. Server component — links ship in the static HTML. */
export default function PageChrome({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const c = COPY[lang];
  const other: Lang = lang === 'ja' ? 'en' : 'ja';

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-text-light/10 px-6 md:px-12 py-5 flex items-center justify-between gap-4">
        <Link href={pathFor(lang)} className="font-bold tracking-tighter text-sm md:text-base hover:text-accent transition-colors">
          {lang === 'ja' ? '柿木滉亮' : 'Koryo Kakinoki'}
        </Link>
        <nav className="flex items-center gap-3 md:gap-6 text-xs font-semibold tracking-wide sm:tracking-widest uppercase">
          <Link href={pathFor(lang, 'training')} className="hover:text-accent transition-colors">{c.training}</Link>
          <Link href={pathFor(lang, 'blog')} className="hover:text-accent transition-colors">{c.blog}</Link>
          <Link href={pathFor(lang, 'projects')} className="hover:text-accent transition-colors">{c.projects}</Link>
          <Link href={`${pathFor(lang)}#contact`} className="hidden sm:inline hover:text-accent transition-colors">{c.contact}</Link>
          <Link href={pathFor(other)} hrefLang={other} className="border border-text-light/20 rounded-full px-3 py-1 hover:text-accent transition-colors">
            {other}
          </Link>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-text-light/10 px-6 md:px-12 py-10 text-xs text-text-muted flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {AUTHOR.name}</span>
        <span className="flex gap-4">
          <a href={AUTHOR.links.x} className="hover:text-accent transition-colors" rel="me noopener" target="_blank">X</a>
          <a href={AUTHOR.links.github} className="hover:text-accent transition-colors" rel="me noopener" target="_blank">GitHub</a>
          <a href={AUTHOR.links.linkedin} className="hover:text-accent transition-colors" rel="me noopener" target="_blank">LinkedIn</a>
          <a href={AUTHOR.links.note} className="hover:text-accent transition-colors" rel="me noopener" target="_blank">note</a>
        </span>
      </footer>
    </div>
  );
}
