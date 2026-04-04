import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import type { Work } from './data/works';

interface WorkDetailProps {
  work: Work | null;
  onClose: () => void;
  lang: 'ja' | 'en';
}

export default function WorkDetail({ work, onClose, lang }: WorkDetailProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const isJa = lang === 'ja';

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[70] bg-bg-dark/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative bg-bg-dark-alt border border-text-light/10 max-w-2xl w-full p-10 md:p-16 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              autoFocus
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-text-light/20 flex items-center justify-center hover:border-accent transition-colors"
            >
              <X size={18} />
            </button>

            {/* Period */}
            <span className="text-xs font-mono text-accent mb-2 block uppercase tracking-widest">
              {isJa ? work.period_ja : work.period}
            </span>

            {/* Category / Org */}
            <span className="text-xs font-mono text-text-muted mb-4 block uppercase tracking-widest">
              {isJa ? work.category_ja : work.category}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              {isJa ? work.title_ja : work.title}
            </h2>

            <p className="text-text-muted text-lg leading-relaxed mb-10">
              {isJa ? work.tagline_ja : work.tagline}
            </p>

            {/* Metrics */}
            <ul className="space-y-3 mb-10">
              {(isJa ? work.metrics_ja : work.metrics).map((m, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-accent mt-1 flex-shrink-0">—</span>
                  <span className="text-text-muted">{m}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {work.skills.map(s => (
                <span key={s} className="text-xs font-mono border border-text-light/15 text-text-muted px-2.5 py-1">
                  {s}
                </span>
              ))}
            </div>

            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors"
              >
                {isJa ? 'ケーススタディを見る' : 'View full case study'}
                <ArrowUpRight size={16} />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
