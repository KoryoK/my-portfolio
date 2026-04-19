import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import type { BlogPost } from './data/blog';

interface BlogDetailProps {
  post: BlogPost | null;
  onClose: () => void;
  lang: 'ja' | 'en';
}

export default function BlogDetail({ post, onClose, lang }: BlogDetailProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const isJa = lang === 'ja';

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    if (isJa) {
      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
    return d.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[70] bg-bg-dark/95 backdrop-blur-sm flex items-start justify-center p-4 md:p-16 overflow-y-auto"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative bg-bg-dark-alt border border-text-light/10 max-w-3xl w-full p-8 md:p-16 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              autoFocus
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-text-light/20 flex items-center justify-center hover:border-accent transition-colors"
              aria-label={isJa ? '閉じる' : 'Close'}
            >
              <X size={18} />
            </button>

            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-mono uppercase tracking-widest">
              <span className="text-accent">{isJa ? post.category_ja : post.category}</span>
              <span className="text-text-muted">·</span>
              <span className="text-text-muted">{formatDate(post.date)}</span>
              <span className="text-text-muted">·</span>
              <span className="text-text-muted">
                {isJa ? `${post.readingTime}分` : `${post.readingTime} min read`}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-8">
              {isJa ? post.title_ja : post.title}
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 border-l-2 border-accent pl-5">
              {isJa ? post.excerpt_ja : post.excerpt}
            </p>

            <div className="prose-editorial space-y-6 text-base md:text-lg text-text-light/85 leading-loose">
              {(isJa ? post.body_ja : post.body).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-text-light/10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono border border-text-light/15 text-text-muted px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-text-light/30 px-5 py-3 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
              >
                {isJa
                  ? post.linkLabel_ja ?? '元記事を読む'
                  : post.linkLabel ?? 'Read original'}
                <ArrowUpRight size={16} />
              </a>
            )}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
