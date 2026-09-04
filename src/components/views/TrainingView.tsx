import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Lang } from '@/lib/i18n';
import { pathFor } from '@/lib/site';
import { trainingPage } from '@/data/trainingPage';
import { trainingPrograms } from '@/data/training';
import ContactForm from '@/components/ContactForm';

const COPY = {
  ja: { back: '← ホーム', audience: '対象', format: '形式', duration: '時間・規模', outcomes: '内容' },
  en: { back: '← Home', audience: 'For', format: 'Format', duration: 'Scale', outcomes: 'Curriculum' },
} as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">{children}</h2>;
}

/** Server component: the whole page ships as static HTML so answer engines read every fact. */
export default function TrainingView({ lang }: { lang: Lang }) {
  const isJa = lang === 'ja';
  const c = COPY[lang];
  const t = trainingPage;
  const pick = <T,>(ja: T, en: T) => (isJa ? ja : en);

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <Link href={pathFor(lang)} className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-accent transition-colors">
        {c.back}
      </Link>

      {/* 1. Hero */}
      <p className="mt-8 text-xs font-mono uppercase tracking-widest text-accent">{pick(t.eyebrow_ja, t.eyebrow)}</p>
      <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        {pick(t.title_ja, t.title)}
      </h1>
      <p className="mt-6 text-base md:text-lg leading-relaxed">{pick(t.lead_ja, t.lead)}</p>

      <dl className="mt-8 border-t border-text-light/10">
        {t.facts.map((f) => (
          <div key={f.label} className="py-4 border-b border-text-light/10 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6">
            <dt className="text-xs font-mono uppercase tracking-widest text-text-muted">{pick(f.label_ja, f.label)}</dt>
            <dd className="text-sm leading-relaxed">{pick(f.value_ja, f.value)}</dd>
          </div>
        ))}
      </dl>

      {/* 2. Problems */}
      <section className="mt-16">
        <SectionTitle>{pick(t.problemsHeading_ja, t.problemsHeading)}</SectionTitle>
        <ul className="mt-6 flex flex-col gap-4">
          {pick(t.problems_ja, t.problems).map((p) => (
            <li key={p} className="flex gap-4 leading-relaxed">
              <span className="text-accent flex-shrink-0">—</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Programmes */}
      <section className="mt-16">
        <SectionTitle>{pick(t.programsHeading_ja, t.programsHeading)}</SectionTitle>
        <div className="mt-8 flex flex-col gap-8">
          {trainingPrograms.map((p) => (
            <div key={p.id} className="border border-text-light/10 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">{pick(p.title_ja, p.title)}</h3>
              <p className="mt-2 text-accent font-semibold">{pick(p.tagline_ja, p.tagline)}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-light/80">{pick(p.description_ja, p.description)}</p>
              <dl className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {(
                  [
                    [c.audience, pick(p.audience_ja, p.audience)],
                    [c.format, pick(p.format_ja, p.format)],
                    [c.duration, pick(p.duration_ja, p.duration)],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] font-mono uppercase tracking-widest text-text-muted">{label}</dt>
                    <dd className="mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
              <h4 className="mt-5 text-[11px] font-mono uppercase tracking-widest text-text-muted">{c.outcomes}</h4>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm">
                {pick(p.outcomes_ja, p.outcomes).map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="text-accent">—</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process */}
      <section className="mt-16">
        <SectionTitle>{pick(t.processHeading_ja, t.processHeading)}</SectionTitle>
        <ol className="mt-8 flex flex-col gap-8">
          {t.steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
              <span className="text-accent font-mono text-sm pt-1">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight">{pick(s.title_ja, s.title)}</h3>
                <p className="mt-2 leading-relaxed text-text-light/80">{pick(s.body_ja, s.body)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Evidence */}
      <section className="mt-16">
        <SectionTitle>{pick(t.evidenceHeading_ja, t.evidenceHeading)}</SectionTitle>
        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {t.evidence.map((m) => (
            <div key={m.label} className="py-4 border-b border-text-light/10">
              <dt className="text-xs font-mono uppercase tracking-widest text-text-muted">{pick(m.label_ja, m.label)}</dt>
              <dd className="mt-1 text-lg font-bold text-accent">{pick(m.value_ja, m.value)}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href={pathFor(lang, 'case-studies/ai-requirements-training')}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent hover:gap-3 transition-all duration-300"
          >
            {pick(t.caseStudyCta_ja, t.caseStudyCta)}
            <ArrowUpRight size={16} />
          </Link>
          <Link
            href={pathFor(lang, 'blog/ai-requirements-training')}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent hover:gap-3 transition-all duration-300"
          >
            {pick(t.articleCta_ja, t.articleCta)}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* 6. FAQ — plain headings and paragraphs so every answer is in the static HTML */}
      <section className="mt-16">
        <SectionTitle>{pick(t.faqHeading_ja, t.faqHeading)}</SectionTitle>
        <div className="mt-8 flex flex-col gap-8">
          {t.faq.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-bold tracking-tight">{pick(f.q_ja, f.q)}</h3>
              <p className="mt-2 leading-relaxed text-text-light/80">{pick(f.a_ja, f.a)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact */}
      <section id="contact" className="mt-20 border-t border-text-light/10 pt-12">
        <SectionTitle>{pick(t.contactHeading_ja, t.contactHeading)}</SectionTitle>
        <p className="mt-4 leading-relaxed text-text-light/80">{pick(t.contactBody_ja, t.contactBody)}</p>
        <div className="mt-8">
          <ContactForm lang={lang} />
        </div>
      </section>
    </article>
  );
}
