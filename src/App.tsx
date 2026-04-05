/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X as CloseIcon, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { works } from './data/works';
import type { Work } from './data/works';
import { projects } from './data/projects';
import type { Project } from './data/projects';
import WorkDetail from './WorkDetail';
import ProjectDetail from './ProjectDetail';
import ContactForm from './ContactForm';

// ── Translations ──────────────────────────────────────────────────────────────
const translations = {
  ja: {
    nav: {
      cta: 'お問い合わせ →',
      menu: 'メニュー',
      home: 'ホーム',
      works: '実績',
      showcase: '開発実績',
      about: 'プロフィール',
      contact: 'コンタクト',
    },
    hero: {
      label: 'データ × AI × リーダーシップ',
      bio: 'データを分析し、AIを実装し、グローバルチームを率いる。複雑な課題をシンプルな意思決定へ。',
      quote: '「データは道を照らす。最後に決めるのは、人間の情理。」',
      experience: '経験領域',
      domains: ['システムインテグレーター', '外資金融', '生成AI', 'PM', 'データ分析', 'プロセス改善', 'UI/UX'],
    },
    works: {
      title: '実績',
      subtitle: 'グローバルなデータ利活用から、生成AIの社会実装まで。',
    },
    about: {
      title: 'プロフィール',
      tagline: 'データが戦略を導く。\nAIが実行を加速する。\nリーダーシップが実現させる。\n意思決定は、いつも人間の情理。',
      p1: '外資金融、大手システムインテグレーター、そして生成AIエンジニア。テクノロジーとビジネスの架け橋となるプロジェクトを一貫して推進。',
      p2: 'ロンドンでのクレジットアナリスト経験、欧州5カ国を跨ぐグローバルプロジェクトのマネジメント。多様な文化と業界を横断した、多角的な視点。',
      p3: '現在はフリーランスとして、AIエンジニアメンターおよびデータ分析アドバイザーとして活動。データは強力な道具。しかし最後に決めるのは人間——論理と感性、情理のバランスを大切にしたクライアント支援。',
      coreSkills: 'コアスキル',
      location: '拠点',
    },
    capabilities: {
      title: 'ケイパビリティ',
    },
    showcase: {
      title: '開発実績',
      subtitle: '自作アプリ・GAS・AIツールのポートフォリオ。',
      viewProject: 'プロジェクトを見る',
    },
    contact: {
      title: 'コンタクト',
      body: 'データ戦略、AIエンジニアリング、リーダーシップに関するご相談、受付中。あなたのビジネスに「自分らしさ」と「効率」を。',
      reply: '24時間以内にご返信します。',
      cta: 'お問い合わせはこちら →',
    },
    footer: { career: '実績', showcase: '開発実績', profile: 'プロフィール' },
  },
  en: {
    nav: {
      cta: "Let's work →",
      menu: 'Menu',
      home: 'Home',
      works: 'Works',
      showcase: 'Showcase',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      label: 'Strategist. Engineer. Leader.',
      bio: 'I analyse data, engineer AI solutions, and lead global teams — turning complexity into decisions that move organisations forward.',
      quote: '"Data lights the way. The final decision always belongs to people."',
      experience: 'Experience',
      domains: ['System Integrator', 'Finance', 'GenAI', 'PM', 'Data Analytics', 'Process Opt.', 'UI/UX'],
    },
    works: {
      title: 'Career Highlights',
      subtitle: 'From global data modernisation to deploying generative AI at scale.',
    },
    about: {
      title: 'Profile',
      tagline: "Data informs strategy.\nAI accelerates execution.\nLeadership makes it real.\nThe final decision always belongs to people.",
      p1: 'Through experience in international finance, major system integrators, and generative AI engineering, I have driven projects that bridge technology and business.',
      p2: 'My time as a credit analyst in London and managing global projects across five European countries has shaped my cross-cultural perspective.',
      p3: 'Now freelancing as an AI engineer mentor and data analytics advisor, I believe data is a powerful tool — but the final decision always belongs to people. I help clients act on insight with both rigour and human judgement.',
      coreSkills: 'Core Skills',
      location: 'Location',
    },
    capabilities: {
      title: 'Capabilities',
    },
    showcase: {
      title: 'Dev Showcase',
      subtitle: 'Apps, GAS projects, and AI tools I have built.',
      viewProject: 'View project',
    },
    contact: {
      title: 'Connect',
      body: "Open for consulting on data strategy, AI engineering, and leadership. Let's bring uniqueness and efficiency to your business.",
      reply: 'I reply within 24 hours.',
      cta: 'Start a conversation →',
    },
    footer: { career: 'Career', showcase: 'Showcase', profile: 'Profile' },
  },
} as const;

type Lang = keyof typeof translations;

// ── Skills data (bilingual) ───────────────────────────────────────────────────
const skills = [
  {
    name: "Python / SQL",
    level: "Expert", level_ja: "エキスパート",
    description: "Automating analysis that used to take your team days",
    description_ja: "チームが数日かけていた分析を自動化します",
  },
  {
    name: "GenAI / LLM / RAG",
    level: "Lead", level_ja: "リード",
    description: "Building AI products that actually work in production",
    description_ja: "本番環境で実際に動くAIプロダクトを構築します",
  },
  {
    name: "Tableau / Power BI",
    level: "Expert", level_ja: "エキスパート",
    description: "Turning raw data into decisions leadership can act on",
    description_ja: "生データを経営層が動ける意思決定情報へ変換します",
  },
  {
    name: "Project Management",
    level: "Senior", level_ja: "シニア",
    description: "Shipping complex cross-functional work on time",
    description_ja: "複雑なクロスファンクショナルプロジェクトを期日通りに完遂します",
  },
  {
    name: "GAS / Automation",
    level: "Advanced", level_ja: "アドバンスト",
    description: "Eliminating repetitive work across your org",
    description_ja: "組織全体の繰り返し業務を排除します",
  },
  {
    name: "UI/UX Direction",
    level: "Senior", level_ja: "シニア",
    description: "Making tools people actually want to use",
    description_ja: "人が本当に使いたいと思えるツールを設計します",
  },
];


// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>('ja');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const t = translations[lang];
  const isJa = lang === 'ja';


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    if (!isMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#work-')) {
      const id = parseInt(hash.replace('#work-', ''), 10);
      const work = works.find(w => w.id === id) ?? null;
      if (work) setSelectedWork(work);
    }
    const handlePop = () => {
      if (!window.location.hash.startsWith('#work-')) setSelectedWork(null);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const menuLinks = [
    ['home', '#home'],
    ['works', '#works'],
    ['showcase', '#showcase'],
    ['about', '#about'],
    ['contact', '#contact'],
  ] as [keyof typeof t.nav, string][];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-8 flex justify-between items-center ${
        scrolled ? 'bg-bg-dark/80 backdrop-blur-md py-4 md:py-6' : 'bg-transparent'
      }`}>
        <div className="text-sm md:text-xl font-bold tracking-tighter mix-blend-difference uppercase whitespace-nowrap">
          {isJa ? (
            <>分析<span className="text-accent"> / </span>実装<span className="text-accent"> / </span>リーダーシップ</>
          ) : (
            <>STRATEGIST<span className="text-accent"> / </span>ENGINEER<span className="text-accent"> / </span>LEADER</>
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Language tab */}
          <div className="flex items-center border border-text-light/20 rounded-full text-xs font-semibold tracking-widest">
            {(['ja', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 uppercase transition-colors duration-200 rounded-full ${
                  lang === l ? 'bg-accent text-white' : 'hover:text-accent'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:block text-xs font-semibold tracking-widest uppercase border border-text-light/30 px-4 py-2 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="group flex items-center gap-4 text-sm font-semibold tracking-widest uppercase"
          >
            <span className="hidden md:inline group-hover:text-accent transition-colors">{t.nav.menu}</span>
            <div className="w-10 h-10 rounded-full border border-text-light/20 flex items-center justify-center group-hover:border-accent transition-colors">
              <Menu size={18} />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[60] bg-bg-dark-alt"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Scrollable inner wrapper */}
          <div
            className="flex flex-col h-full overflow-y-auto p-6 md:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-10 md:mb-14 flex-shrink-0">
              <div className="text-xl font-bold tracking-tighter uppercase">
                {isJa
                  ? <>分析<span className="text-accent"> / </span>実装<span className="text-accent"> / </span>リーダーシップ</>
                  : <>STRATEGIST<span className="text-accent"> / </span>ENGINEER<span className="text-accent"> / </span>LEADER</>}
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-text-light/20 flex items-center justify-center hover:border-accent transition-colors"
              >
                <CloseIcon size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-3 md:gap-6">
              {menuLinks.map(([key, href], i) => (
                <motion.a
                  key={key}
                  href={href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[clamp(1.8rem,7vw,5.5rem)] font-bold tracking-tighter hover:text-accent transition-colors leading-tight"
                >
                  {t.nav[key]}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto flex flex-col md:flex-row justify-between gap-6 border-t border-text-light/10 pt-10 flex-shrink-0">
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/koryo-kakinoki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Linkedin size={16} />LinkedIn</a>
                <a href="https://github.com/KoryoK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Github size={16} />GitHub</a>
                <a href="https://x.com/kkcareer_ds" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Twitter size={16} />X</a>
              </div>
              <div className="text-text-muted uppercase tracking-widest text-xs">Kanagawa / Global</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center px-6 md:px-12 overflow-hidden pt-20 md:pt-0">
        <div className="max-w-7xl w-full grid md:grid-cols-[3fr_2fr] gap-0 items-center">

          {/* Left: Identity */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-accent font-semibold tracking-[0.3em] uppercase mb-6 block">{t.hero.label}</span>
              <h1 className={`text-[clamp(3rem,7vw,6.5rem)] font-extrabold mb-10 ${isJa ? 'leading-[1.1]' : 'leading-[0.85]'}`}>
                {isJa ? (
                  <>
                    分析<br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-text-light)' }}>実装</span><br />
                    リーダーシップ
                  </>
                ) : (
                  <>
                    DATA<br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-text-light)' }}>DRIVEN</span><br />
                    STRATEGY
                  </>
                )}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="max-w-sm"
            >
              <p className="text-base md:text-lg text-text-muted leading-relaxed mb-5">
                {t.hero.bio}
              </p>
              <p className="text-accent font-bold italic text-sm">{t.hero.quote}</p>
            </motion.div>
          </div>

          {/* Right: Experience domains */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="hidden md:flex flex-col justify-center pl-16 border-l border-text-light/10 self-stretch"
          >
            <span className="text-xs font-mono text-text-muted uppercase tracking-widest mb-8">{t.hero.experience}</span>
            <div className="flex flex-col gap-5">
              {t.hero.domains.map((d, i) => (
                <div key={d} className="flex items-baseline gap-4 group">
                  <span className="text-accent text-[10px] font-mono opacity-40 w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-text-light/80 group-hover:text-accent transition-colors duration-200">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        <div className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-accent/5 -z-10 blur-3xl rounded-full"></div>
      </section>

      {/* Works Section — Vertical Timeline */}
      <section id="works" className="bg-bg-dark-alt py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold tracking-tighter uppercase leading-none mb-4">
              {t.works.title}
            </h2>
            <p className="text-text-muted text-sm uppercase tracking-widest">{t.works.subtitle}</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line — fixed at left-5 */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-text-light/10" />

            <div className="flex flex-col gap-0">
              {works.map((work, i) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedWork(work)}
                >
                  {/* Dot — centered on the line (left-5 = 20px, dot w-2.5 = 10px → left: 15px) */}
                  <div className="absolute left-[15px] top-10 w-2.5 h-2.5 rounded-full border-2 border-accent bg-bg-dark-alt group-hover:bg-accent transition-colors duration-300 z-10" />

                  {/* Content — padded to clear the line */}
                  <div className="pl-12 pt-8 pb-10 border-b border-text-light/5 group-hover:bg-text-light/[0.02] transition-colors duration-300">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <p className="text-xs font-mono text-text-muted uppercase tracking-widest">
                            {isJa
                              ? work.category_ja.split(' / ')[0]
                              : work.category.split(' / ')[0]}
                          </p>
                          {work.current && (
                            <span className="text-[10px] font-mono bg-accent/15 text-accent px-2 py-0.5 rounded-full uppercase tracking-widest">
                              {isJa ? '現在' : 'Now'}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tighter group-hover:text-accent transition-colors duration-300">
                          {isJa ? work.title_ja : work.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="flex-shrink-0 mt-1 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0"
                      />
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mt-3 max-w-xl">
                      {isJa ? work.tagline_ja : work.tagline}
                    </p>
                    {/* Key metric preview */}
                    <p className="text-xs font-mono text-accent/70 mt-3">
                      — {isJa ? work.metrics_ja[0] : work.metrics[0]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Overlay */}
      <WorkDetail work={selectedWork} onClose={() => setSelectedWork(null)} lang={lang} />

      {/* Project Detail Overlay */}
      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} lang={lang} />

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-bg-light text-text-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter mb-12 uppercase">{t.about.title}</h2>
              <div className="w-24 h-1 bg-accent mb-12"></div>
              <p className="text-xl md:text-2xl leading-relaxed font-light whitespace-pre-line">
                {t.about.tagline}
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl leading-loose text-text-muted space-y-8"
            >
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-text-dark/10">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-accent font-bold mb-4">{t.about.coreSkills}</h4>
                <ul className="space-y-2 text-sm font-medium">
                  {isJa ? (
                    <>
                      <li>データ分析</li>
                      <li>プロジェクトマネジメント</li>
                      <li>AI導入</li>
                      <li>プロセス最適化</li>
                    </>
                  ) : (
                    <>
                      <li>Data Analysis</li>
                      <li>Project Management</li>
                      <li>AI Implementation</li>
                      <li>Process Optimisation</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-accent font-bold mb-4">{t.about.location}</h4>
                <ul className="space-y-2 text-sm font-medium">
                  {isJa ? (
                    <>
                      <li>神奈川県、日本</li>
                      <li>グローバルリモート</li>
                    </>
                  ) : (
                    <>
                      <li>Kanagawa, Japan</li>
                      <li>Global Remote</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 px-6 md:px-12 bg-bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tighter mb-24 text-center md:text-left uppercase">
            {t.capabilities.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-text-light/10 hover:border-accent transition-all duration-500 group"
              >
                <span className="text-xs font-mono text-accent mb-4 block">
                  {isJa ? skill.level_ja : skill.level}
                </span>
                <h3 className="text-3xl font-bold group-hover:text-accent transition-colors">{skill.name}</h3>
                <p className="text-sm text-text-muted mt-3 mb-6 leading-relaxed">
                  {isJa ? skill.description_ja : skill.description}
                </p>
                <div className="overflow-hidden h-px bg-text-light/10 relative">
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 bg-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-32 px-6 md:px-12 bg-bg-dark-alt">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold tracking-tighter uppercase leading-none mb-4">
              {t.showcase.title}
            </h2>
            <p className="text-text-muted text-sm uppercase tracking-widest">{t.showcase.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-text-light/10 hover:border-accent transition-colors duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Screenshot thumbnail */}
                <div
                  className="relative overflow-hidden aspect-video"
                  style={{
                    background: '#0a0a0a',
                    backgroundImage: 'radial-gradient(circle, #1e1e1e 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 p-3"
                  />
                  {/* Type badge */}
                  <span className="absolute top-4 left-4 text-xs font-mono uppercase tracking-widest bg-bg-dark/80 text-accent px-3 py-1">
                    {project.type}
                  </span>
                  {/* Multi-image indicator */}
                  {project.images.length > 1 && (
                    <span className="absolute bottom-4 right-4 text-xs font-mono bg-bg-dark/80 text-text-muted px-2 py-1">
                      1 / {project.images.length}
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5">
                    {isJa ? project.description_ja : project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs border border-text-light/20 px-2.5 py-1 rounded-full text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-accent text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-16 md:gap-24 items-start"
          >
            {/* Left: heading + info */}
            <div className="md:w-2/5 flex-shrink-0">
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-tighter mb-8 uppercase">
                {t.contact.title}
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-6">{t.contact.body}</p>
              <p className="text-sm opacity-60 tracking-widest uppercase mb-8">{t.contact.reply}</p>
              <div className="flex flex-wrap gap-2">
                {(isJa
                  ? ['データ戦略', 'AI導入', 'プロセス自動化']
                  : ['Data Strategy', 'AI Implementation', 'Process Optimisation']
                ).map((area) => (
                  <span key={area} className="text-xs font-semibold tracking-widest uppercase border border-white/40 px-3 py-1.5 rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <ContactForm lang={lang} />
          </motion.div>

          <div className="mt-20 flex flex-wrap gap-4 justify-center">
            {[
              { href: 'https://github.com/KoryoK',                          icon: <Github size={18} />,   label: 'GitHub',   color: 'bg-[#24292e] hover:bg-[#3a3f44] text-white border-[#24292e]' },
              { href: 'https://x.com/kkcareer_ds',                          icon: <Twitter size={18} />,  label: 'X',        color: 'bg-black hover:bg-neutral-900 text-white border-black' },
              { href: 'https://www.linkedin.com/in/koryo-kakinoki',         icon: <Linkedin size={18} />, label: 'LinkedIn', color: 'bg-[#0A66C2] hover:bg-[#0958a8] text-white border-[#0A66C2]' },
            ].map(({ href, icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 border px-5 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${color}`}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-text-light/10 bg-bg-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-bold tracking-tighter uppercase">
            {isJa ? '分析 / 実装 / リーダーシップ' : 'Strategist / Engineer / Leader'}
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-text-muted">
            <a href="#works" className="hover:text-text-light transition-colors">{t.footer.career}</a>
            <a href="#showcase" className="hover:text-text-light transition-colors">{t.footer.showcase}</a>
            <a href="#about" className="hover:text-text-light transition-colors">{t.footer.profile}</a>
          </div>
          <div className="text-xs text-text-muted uppercase">© {new Date().getFullYear()}. SEIZE THE CHANCE.</div>
        </div>
      </footer>
    </div>
  );
}
