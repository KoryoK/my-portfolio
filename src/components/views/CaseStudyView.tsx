import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '@/data/casestudies';
import type { Lang } from '@/lib/i18n';
import { pathFor } from '@/lib/site';
import ProcessDiagram from '@/components/ProcessDiagram';

const COPY = {
  ja: {
    overview: '概要',
    client: 'クライアント',
    role: '役割',
    period: '期間',
    scale: '規模',
    stack: '使用技術',
    process: '3日間の設計',
    numbers: '規模感の指標',
    results: '成果',
    disclaimer:
      '本ケーススタディは、守秘義務に配慮しクライアント名・固有情報を伏せ、設計手法とプロセスに限定して記載しています。数値は概数です。',
    related: '関連サービス：企業向け生成AI研修',
    back: '← ホーム',
  },
  en: {
    overview: 'Overview',
    client: 'Client',
    role: 'Role',
    period: 'Period',
    scale: 'Scale',
    stack: 'Stack',
    process: 'The three-day design',
    numbers: 'By the numbers',
    results: 'Results',
    disclaimer:
      'This case study omits the client name and identifying details out of confidentiality, and is limited to design method and process. Figures are approximate.',
    related: 'Related service: corporate GenAI training',
    back: '← Home',
  },
} as const;

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-4 border-b border-text-light/10 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6">
      <dt className="text-xs font-mono uppercase tracking-widest text-text-muted">{label}</dt>
      <dd className="text-sm leading-relaxed">{value}</dd>
    </div>
  );
}

export default function CaseStudyView({ study, lang }: { study: CaseStudy; lang: Lang }) {
  const isJa = lang === 'ja';
  const c = COPY[lang];
  const pick = <T,>(ja: T, en: T) => (isJa ? ja : en);

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <Link href={pathFor(lang)} className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-accent transition-colors">
        {c.back}
      </Link>

      {/* 1. Hero */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span
          className={`text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
            study.status === 'completed'
              ? 'bg-text-light/10 text-text-light'
              : 'bg-accent/15 text-accent'
          }`}
        >
          {pick(study.statusLabel_ja, study.statusLabel)}
        </span>
        {pick(study.tags_ja, study.tags).map((t) => (
          <span key={t} className="text-[11px] font-mono text-text-muted">{t}</span>
        ))}
      </div>

      <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        {pick(study.title_ja, study.title)}
      </h1>
      <p className="mt-5 text-lg md:text-xl text-accent font-semibold tracking-tight">
        {pick(study.subtitle_ja, study.subtitle)}
      </p>

      {/* 2. Overview */}
      <h2 className="mt-14 text-xs font-mono uppercase tracking-widest text-text-muted">{c.overview}</h2>
      <dl className="mt-4 border-t border-text-light/10">
        <Meta label={c.client} value={pick(study.client_ja, study.client)} />
        <Meta label={c.role} value={pick(study.role_ja, study.role).join(' · ')} />
        <Meta label={c.period} value={pick(study.periodLabel_ja, study.periodLabel)} />
        <Meta label={c.scale} value={pick(study.scale_ja, study.scale)} />
        <Meta label={c.stack} value={study.stack.join(' · ')} />
      </dl>

      {/* 3. Challenge */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
          {pick(study.challenge.heading_ja, study.challenge.heading)}
        </h2>
        <div className="mt-6 flex flex-col gap-5 leading-relaxed">
          {pick(study.challenge.body_ja, study.challenge.body).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 4. Approach */}
      <section className="mt-16 flex flex-col gap-12">
        {study.approach.map((a, i) => (
          <div key={i}>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              {pick(a.heading_ja, a.heading)}
            </h2>
            <div className="mt-5 flex flex-col gap-5 leading-relaxed">
              {pick(a.body_ja, a.body).map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 5. Process */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">{c.process}</h2>
        <ProcessDiagram lang={lang} />
      </section>

      {/* 6. Numbers */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">{c.numbers}</h2>
        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {study.metrics.map((m) => (
            <div key={m.label} className="py-4 border-b border-text-light/10">
              <dt className="text-xs font-mono uppercase tracking-widest text-text-muted">
                {pick(m.label_ja, m.label)}
              </dt>
              <dd className="mt-1 text-xl font-bold text-accent">{pick(m.value_ja, m.value)}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 7. Results — renders only once `results` is populated */}
      {study.results && (
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">{c.results}</h2>
          <p className="mt-6 leading-relaxed">{pick(study.results.summary_ja, study.results.summary)}</p>
          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {study.results.metrics.map((m) => (
              <div key={m.label} className="py-4 border-b border-text-light/10">
                <dt className="text-xs font-mono uppercase tracking-widest text-text-muted">
                  {pick(m.label_ja, m.label)}
                </dt>
                <dd className="mt-1 text-xl font-bold text-accent">{pick(m.value_ja, m.value)}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* 8. Learnings */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
          {pick(study.learnings.heading_ja, study.learnings.heading)}
        </h2>
        <div className="mt-6 flex flex-col gap-5 leading-relaxed">
          {pick(study.learnings.body_ja, study.learnings.body).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 9. Disclaimer + related */}
      {study.confidential && (
        <p className="mt-16 border-l-2 border-text-light/20 pl-5 text-xs leading-relaxed text-text-muted">
          {c.disclaimer}
        </p>
      )}

      <div className="mt-8">
        <Link
          href={`${pathFor(lang)}#training`}
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent hover:gap-3 transition-all duration-300"
        >
          {c.related}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
