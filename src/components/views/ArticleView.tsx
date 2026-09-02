import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '@/data/blog';
import type { Lang } from '@/lib/i18n';
import { pathFor } from '@/lib/site';

const COPY = {
  ja: { back: '← 記事一覧', min: '分', related: '関連サービス' },
  en: { back: '← All posts', min: 'min read', related: 'Related service' },
} as const;

/** Full article, rendered on the server so the body text is in the static HTML. */
export default function ArticleView({ post, lang }: { post: BlogPost; lang: Lang }) {
  const isJa = lang === 'ja';
  const c = COPY[lang];
  const body = isJa ? post.body_ja : post.body;

  return (
    <article className="max-w-2xl mx-auto px-6 md:px-0 py-16 md:py-24">
      <Link href={pathFor(lang, 'blog')} className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-accent transition-colors">
        {c.back}
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono uppercase tracking-widest text-text-muted">
        <span className="text-accent">{isJa ? post.category_ja : post.category}</span>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString(isJa ? 'ja-JP' : 'en-GB', {
            year: 'numeric', month: 'short', day: 'numeric',
          })}
        </time>
        <span aria-hidden>·</span>
        <span>{post.readingTime} {c.min}</span>
      </div>

      <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        {isJa ? post.title_ja : post.title}
      </h1>

      <p className="mt-6 border-l-2 border-accent pl-5 text-text-muted leading-relaxed">
        {isJa ? post.excerpt_ja : post.excerpt}
      </p>

      <div className="mt-12 flex flex-col gap-6 leading-relaxed">
        {body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs font-mono border border-text-light/20 px-2.5 py-1 rounded-full text-text-muted">
            {tag}
          </span>
        ))}
      </div>

      {(post.link || post.appLink) && (
        <div className="mt-10 flex flex-wrap gap-3">
          {post.link && (
            <a href={post.link} target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-text-light/30 px-5 py-3 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
              {isJa ? post.linkLabel_ja ?? 'noteで読む' : post.linkLabel ?? 'Read on note'}
              <ArrowUpRight size={16} />
            </a>
          )}
          {post.appLink && (
            <a href={post.appLink} target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-accent bg-accent text-white px-5 py-3 rounded-full hover:bg-transparent hover:text-accent transition-all duration-300">
              {isJa ? post.appLinkLabel_ja ?? 'アプリを見る' : post.appLinkLabel ?? 'Open the app'}
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      )}

      {post.relatedAnchor && (
        <div className="mt-10">
          <Link href={`${pathFor(lang)}${post.relatedAnchor}`}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-accent hover:gap-3 transition-all duration-300">
            {isJa ? post.relatedLabel_ja ?? c.related : post.relatedLabel ?? c.related}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </article>
  );
}
