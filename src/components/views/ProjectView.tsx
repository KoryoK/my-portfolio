import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import type { Lang } from '@/lib/i18n';
import { pathFor } from '@/lib/site';

const TYPE_LABEL: Record<Project['type'], { en: string; ja: string }> = {
  webapp: { en: 'Web App', ja: 'Webアプリ' },
  gas: { en: 'GAS', ja: 'GAS' },
  ai: { en: 'AI', ja: 'AI' },
  dashboard: { en: 'Dashboard', ja: 'ダッシュボード' },
  mobile: { en: 'Mobile', ja: 'モバイル' },
  automation: { en: 'Automation', ja: '自動化' },
};

const COPY = {
  ja: { back: '← 開発実績一覧', stack: '技術スタック' },
  en: { back: '← All projects', stack: 'Stack' },
} as const;

export default function ProjectView({ project, lang }: { project: Project; lang: Lang }) {
  const isJa = lang === 'ja';
  const c = COPY[lang];
  const body = isJa ? project.body_ja : project.body;

  return (
    <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <Link href={pathFor(lang, 'projects')} className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-accent transition-colors">
        {c.back}
      </Link>

      <span className="mt-8 block text-xs font-mono uppercase tracking-widest text-accent">
        {isJa ? TYPE_LABEL[project.type].ja : TYPE_LABEL[project.type].en}
      </span>
      <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        {project.title}
      </h1>
      <p className="mt-6 text-text-muted leading-relaxed max-w-2xl">
        {isJa ? project.description_ja : project.description}
      </p>

      {body && (
        <div className="mt-10 flex flex-col gap-6 leading-relaxed max-w-2xl">
          {body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      <h2 className="mt-12 text-xs font-mono uppercase tracking-widest text-text-muted">{c.stack}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs border border-text-light/20 px-2.5 py-1 rounded-full text-text-muted">
            {tag}
          </span>
        ))}
      </div>

      {(project.link || project.appLink) && (
        <div className="mt-10 flex flex-wrap gap-3">
          {project.appLink && (
            <a href={project.appLink} target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-accent bg-accent text-white px-5 py-3 rounded-full hover:bg-transparent hover:text-accent transition-all duration-300">
              {isJa ? project.appLinkLabel_ja ?? 'アプリを見る' : project.appLinkLabel ?? 'Open the app'}
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-text-light/30 px-5 py-3 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
              {isJa ? project.linkLabel_ja ?? '詳しく見る' : project.linkLabel ?? 'Read more'}
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      )}

      <div className="mt-14 flex flex-col gap-6">
        {project.images.map((src, i) => (
          <div
            key={src}
            className="relative w-full overflow-hidden border border-text-light/10"
            style={{
              background: '#0a0a0a',
              backgroundImage: 'radial-gradient(circle, #1e1e1e 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            <Image
              src={src}
              alt={`${project.title} — ${isJa ? 'スクリーンショット' : 'screenshot'} ${i + 1}`}
              width={1600}
              height={1000}
              sizes="(max-width: 896px) 100vw, 896px"
              className="w-full h-auto object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
