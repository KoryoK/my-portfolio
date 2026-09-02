import Link from 'next/link';
import { posts } from '@/data/blog';
import type { Lang } from '@/lib/i18n';
import { pathFor } from '@/lib/site';

const COPY = {
  ja: { title: 'ブログ', lead: '開発記・研修設計・データ分析の実践記録。', count: '記事', min: '分' },
  en: { title: 'Journal', lead: 'Build logs, training design, and analytics in practice.', count: 'posts', min: 'min' },
} as const;

export default function BlogIndexView({ lang }: { lang: Lang }) {
  const isJa = lang === 'ja';
  const c = COPY[lang];

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tighter uppercase leading-none">
        {c.title}
      </h1>
      <p className="mt-4 text-text-muted">{c.lead}</p>
      <p className="mt-2 text-xs font-mono uppercase tracking-widest text-text-muted">
        {posts.length} {c.count}
      </p>

      <div className="mt-14 flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={pathFor(lang, `blog/${post.slug}`)}
            className="group border-t border-text-light/10 last:border-b py-8 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-3 md:gap-8 items-start hover:bg-text-light/[0.02] transition-colors duration-300 px-2 -mx-2"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-text-muted flex flex-col gap-1">
              <span className="text-accent">{isJa ? post.category_ja : post.category}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(isJa ? 'ja-JP' : 'en-GB', {
                  year: 'numeric', month: 'short', day: 'numeric',
                })}
              </time>
              <span>{post.readingTime} {c.min}</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">
                {isJa ? post.title_ja : post.title}
              </h2>
              <p className="mt-3 text-sm text-text-muted leading-relaxed line-clamp-3">
                {isJa ? post.excerpt_ja : post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="text-[11px] font-mono border border-text-light/15 px-2 py-0.5 rounded-full text-text-muted">
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
