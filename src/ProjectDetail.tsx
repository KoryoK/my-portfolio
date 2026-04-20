import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from './data/projects';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
  lang: 'ja' | 'en';
}

const typeLabel: Record<Project['type'], { en: string; ja: string }> = {
  webapp:    { en: 'Web App',    ja: 'Webアプリ' },
  gas:       { en: 'GAS',       ja: 'GAS' },
  ai:        { en: 'AI',        ja: 'AI' },
  dashboard: { en: 'Dashboard', ja: 'ダッシュボード' },
  mobile:    { en: 'Mobile',    ja: 'モバイル' },
};

export default function ProjectDetail({ project, onClose, lang }: ProjectDetailProps) {
  const isJa = lang === 'ja';
  const [activeIndex, setActiveIndex] = useState(0);

  const images = project?.images ?? [];
  const total = images.length;

  const next = () => setActiveIndex(i => (i + 1) % total);
  const prev = () => setActiveIndex(i => (i - 1 + total) % total);

  // Reset when project changes
  useEffect(() => { setActiveIndex(0); }, [project?.id]);

  // ESC + arrow keys
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, total]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[80] bg-bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-16"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="relative bg-bg-dark-alt border border-text-light/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              autoFocus
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full border border-text-light/20 flex items-center justify-center hover:border-accent transition-colors"
            >
              <X size={16} />
            </button>

            {/* Image gallery — CSS transform slider, no scroll */}
            {total > 0 && (
              <div
                className="relative overflow-hidden"
                style={{
                  height: '360px',
                  background: '#0a0a0a',
                  backgroundImage: 'radial-gradient(circle, #1e1e1e 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              >
                {/* Outer clip */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Track */}
                  <div
                    className="flex h-full"
                    style={{
                      width: `${total * 100}%`,
                      transform: `translateX(-${activeIndex * (100 / total)}%)`,
                      transition: 'transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
                    }}
                  >
                    {images.map((src, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 flex items-center justify-center h-full"
                        style={{ width: `${100 / total}%` }}
                      >
                        <img
                          src={src}
                          alt={`${project.title} screenshot ${i + 1}`}
                          style={{ maxWidth: '90%', maxHeight: '330px', objectFit: 'contain' }}
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev / Next buttons */}
                {total > 1 && (
                  <>
                    <button
                      onClick={e => { e.stopPropagation(); prev(); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-bg-dark/80 border border-text-light/30 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); next(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-bg-dark/80 border border-text-light/30 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={e => { e.stopPropagation(); setActiveIndex(i); }}
                          style={{ width: i === activeIndex ? '1rem' : '0.375rem' }}
                          className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-accent' : 'bg-text-light/40'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-12">
              <span className="text-xs font-mono text-accent uppercase tracking-widest border border-accent/30 px-2 py-0.5 mb-4 inline-block">
                {isJa ? typeLabel[project.type].ja : typeLabel[project.type].en}
              </span>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                {project.title}
              </h2>

              <p className="text-text-muted leading-relaxed mb-8">
                {isJa ? project.description_ja : project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-text-muted border border-text-light/10 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {(project.link || project.appLink) && (
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-text-light/30 px-5 py-3 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                    >
                      {isJa
                        ? project.linkLabel_ja ?? 'プロジェクトを見る'
                        : project.linkLabel ?? 'View project'}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.appLink && (
                    <a
                      href={project.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border border-accent bg-accent text-white px-5 py-3 rounded-full hover:bg-transparent hover:text-accent transition-all duration-300"
                    >
                      {isJa
                        ? project.appLinkLabel_ja ?? 'アプリを試す'
                        : project.appLinkLabel ?? 'Try the app'}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
