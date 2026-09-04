import type { Metadata } from 'next';
import { SITE_URL, AUTHOR, alternatesFor } from './site';
import type { Lang } from './i18n';

const COPY = {
  ja: {
    title: '柿木滉亮｜Koryo Kakinoki — 生成AIエンジニア・データ分析・研修',
    template: '%s｜柿木滉亮',
    description:
      '柿木滉亮（Koryo Kakinoki）｜神奈川県拠点のフリーランス生成AIエンジニア・データアナリスト・PM。LLM/RAG/Difyの開発実装、Tableau/Power BIによるデータ分析、業務自動化、PM・アプリ開発、企業向け生成AI研修・個人メンタリングを日英で提供。ロンドンの政府系銀行・大手SIer出身。',
  },
  en: {
    title: 'Koryo Kakinoki — GenAI Engineer, Data Analyst & Trainer',
    template: '%s | Koryo Kakinoki',
    description:
      'Koryo Kakinoki — freelance generative-AI engineer, data analyst and project manager based in Kanagawa, Japan. LLM/RAG/Dify builds, Tableau/Power BI analytics, workflow automation, and corporate GenAI training in Japanese and English. Ex-credit analyst in London; data modernisation PM across six European countries.',
  },
} as const;

/** Shared metadata for both language roots. Page-level metadata extends this. */
export function baseMetadata(lang: Lang): Metadata {
  const c = COPY[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: c.title, template: c.template },
    description: c.description,
    authors: [{ name: AUTHOR.name, url: SITE_URL }],
    creator: AUTHOR.name,
    alternates: alternatesFor('', lang),
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: AUTHOR.name,
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      alternateLocale: lang === 'ja' ? 'en_US' : 'ja_JP',
      title: c.title,
      description: c.description,
      url: SITE_URL + (lang === 'en' ? '/en' : '/'),
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      site: AUTHOR.twitter,
      creator: AUTHOR.twitter,
      title: c.title,
      description: c.description,
      images: ['/og-image.png'],
    },
    icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  };
}

// ── Page-level metadata ───────────────────────────────────────────────────────

import { posts } from '@/data/blog';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/casestudies';

export function articleMetadata(slug: string, lang: Lang): Metadata {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const isJa = lang === 'ja';
  const title = isJa ? post.title_ja : post.title;
  const description = isJa ? post.excerpt_ja : post.excerpt;
  return {
    title,
    description,
    keywords: post.tags,
    alternates: alternatesFor(`blog/${post.slug}`, lang),
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${SITE_URL}${lang === 'en' ? '/en' : ''}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [AUTHOR.name],
      tags: post.tags,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export function projectMetadata(slug: string, lang: Lang): Metadata {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const isJa = lang === 'ja';
  const description = isJa ? project.description_ja : project.description;
  return {
    title: project.title,
    description,
    keywords: project.tags,
    alternates: alternatesFor(`projects/${project.slug}`, lang),
    openGraph: {
      type: 'article',
      title: project.title,
      description,
      url: `${SITE_URL}${lang === 'en' ? '/en' : ''}/projects/${project.slug}`,
      images: project.images.length ? [project.images[0]] : undefined,
    },
    twitter: { card: 'summary_large_image', title: project.title, description },
  };
}

const TRAINING_COPY = {
  ja: {
    title: '企業向け生成AI研修・ウェビナー・メンタリング｜日本語・英語対応',
    description:
      '柿木滉亮（Koryo Kakinoki）が神奈川県を拠点に提供する企業向け生成AI研修。受講者100名以上のウェビナー、半日のハンズオン基礎研修、自社ユースケースで設計するカスタム企業研修、1on1メンタリング。対面・オンライン・ハイブリッド、日本語・英語対応。直近はエンジニア約70名・3日間の要件定義研修を設計。',
  },
  en: {
    title: 'Corporate Generative AI Training in Japan — Bilingual (JA/EN)',
    description:
      'Corporate generative-AI training in Japanese and English by Koryo Kakinoki, a freelance GenAI engineer and trainer based in Kanagawa, Japan. Webinars for 100+, a half-day hands-on workshop, custom programmes built on your use cases, and 1-on-1 mentoring — on-site, online or hybrid. Latest engagement: a 3-day programme for ~70 engineers.',
  },
} as const;

export function trainingMetadata(lang: Lang): Metadata {
  const c = TRAINING_COPY[lang];
  return {
    title: c.title,
    description: c.description,
    keywords: lang === 'ja'
      ? ['生成AI研修', '企業研修', '生成AI 講師', '生成AI ウェビナー', 'AI研修 英語', '要件定義 研修', 'メンタリング']
      : ['corporate GenAI training', 'generative AI training Japan', 'bilingual AI trainer', 'AI workshop Tokyo', 'GenAI mentoring'],
    alternates: alternatesFor('training', lang),
    openGraph: {
      type: 'website',
      title: c.title,
      description: c.description,
      url: `${SITE_URL}${lang === 'en' ? '/en' : ''}/training`,
      images: ['/og-image.png'],
    },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description },
  };
}

export function caseStudyMetadata(slug: string, lang: Lang): Metadata {
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  const isJa = lang === 'ja';
  // The anonymisation rule applies to metadata too — no client name in title, description or OG.
  const title = isJa ? study.title_ja : study.title;
  const description = isJa
    ? `${study.subtitle_ja} ${study.scale_ja}の生成AI研修を、事前アンケートの定量分析からカリキュラム設計、教材制作パイプラインまで一貫して設計したケーススタディ。`
    : `${study.subtitle} A case study on designing a ${study.scale} generative-AI programme end to end — pre-survey analysis, curriculum, and the materials build pipeline.`;
  return {
    title,
    description,
    keywords: isJa ? study.tags_ja : study.tags,
    alternates: alternatesFor(`case-studies/${study.slug}`, lang),
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${SITE_URL}${lang === 'en' ? '/en' : ''}/case-studies/${study.slug}`,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}
