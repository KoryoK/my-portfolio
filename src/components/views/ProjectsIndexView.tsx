import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import type { Lang } from '@/lib/i18n';
import { pathFor } from '@/lib/site';

const COPY = {
  ja: { title: '開発実績', lead: '自作アプリ・ツール・自動化パイプライン。設計判断まで含めて公開しています。' },
  en: { title: 'Showcase', lead: 'Apps, tools, and automation pipelines I have built — including the design decisions behind them.' },
} as const;

export default function ProjectsIndexView({ lang }: { lang: Lang }) {
  const isJa = lang === 'ja';
  const c = COPY[lang];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tighter uppercase leading-none">
        {c.title}
      </h1>
      <p className="mt-4 text-text-muted max-w-2xl">{c.lead}</p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={pathFor(lang, `projects/${project.slug}`)}
            className="group block border border-text-light/10 hover:border-accent transition-colors duration-500"
          >
            <div
              className="relative overflow-hidden aspect-video"
              style={{
                background: '#0a0a0a',
                backgroundImage: 'radial-gradient(circle, #1e1e1e 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <span className="absolute top-4 left-4 text-xs font-mono uppercase tracking-widest bg-bg-dark/80 text-accent px-3 py-1">
                {project.type}
              </span>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {isJa ? project.description_ja : project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs border border-text-light/20 px-2.5 py-1 rounded-full text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
