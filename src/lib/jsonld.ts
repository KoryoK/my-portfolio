import { SITE_URL, AUTHOR, urlFor } from './site';
import type { Lang } from './i18n';
import { services } from '@/data/services';
import { trainingPrograms } from '@/data/training';
import type { BlogPost } from '@/data/blog';
import type { Project } from '@/data/projects';
import type { CaseStudy } from '@/data/casestudies';

const PERSON_ID = `${SITE_URL}/#person`;

export function personGraph(lang: Lang) {
  const isJa = lang === 'ja';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: AUTHOR.name,
        alternateName: AUTHOR.nameJa,
        url: urlFor(lang),
        image: `${SITE_URL}/og-image.png`,
        jobTitle: isJa
          ? '生成AIエンジニア／データアナリスト／研修講師'
          : 'GenAI Engineer, Data Analyst & Trainer',
        description: isJa
          ? 'フリーランスの生成AIエンジニア・データアナリスト。ロンドンの外資系金融でクレジットアナリスト、大手SIerで欧州6カ国のデータ近代化プログラムPMを経て、現在は生成AIの開発実装と企業研修・メンタリングに従事。'
          : 'Freelance generative-AI engineer and data analyst. Former credit analyst in London and data modernisation PM across six European countries; now builds GenAI systems and runs corporate training.',
        address: { '@type': 'PostalAddress', addressRegion: 'Kanagawa', addressCountry: 'JP' },
        knowsLanguage: ['ja', 'en'],
        knowsAbout: [
          'Generative AI', 'Large Language Models', 'RAG', 'Dify',
          'Data Strategy', 'Business Intelligence', 'Tableau', 'Power BI',
          'Process Improvement', 'No-Code Automation', 'Google Apps Script', 'Make.com',
          'Project Management', 'Application Development',
          'AI Training', 'Corporate Training', 'Instructional Design', 'Technical Mentoring',
        ],
        sameAs: [AUTHOR.links.linkedin, AUTHOR.links.github, AUTHOR.links.x, AUTHOR.links.note],
        makesOffer: [
          ...services.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: isJa ? s.title_ja : s.title,
              description: isJa ? s.tagline_ja : s.tagline,
            },
          })),
          ...trainingPrograms.map((p) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: isJa ? p.title_ja : p.title,
              description: isJa ? p.tagline_ja : p.tagline,
            },
          })),
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: urlFor(lang),
        name: isJa ? `${AUTHOR.nameJa}｜ポートフォリオ` : `${AUTHOR.name} | Portfolio`,
        inLanguage: lang,
        publisher: { '@id': PERSON_ID },
      },
    ],
  };
}

export function articleGraph(post: BlogPost, lang: Lang) {
  const isJa = lang === 'ja';
  const url = urlFor(lang, `blog/${post.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: isJa ? post.title_ja : post.title,
    description: isJa ? post.excerpt_ja : post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: lang,
    keywords: post.tags.join(', '),
    wordCount: (isJa ? post.body_ja : post.body).join('').length,
    timeRequired: `PT${post.readingTime}M`,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${SITE_URL}/og-image.png`,
  };
}

export function projectGraph(project: Project, lang: Lang) {
  const isJa = lang === 'ja';
  const url = urlFor(lang, `projects/${project.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${url}#project`,
    name: project.title,
    description: isJa ? project.description_ja : project.description,
    applicationCategory: 'DeveloperApplication',
    inLanguage: lang,
    author: { '@id': PERSON_ID },
    keywords: project.tags.join(', '),
    ...(project.images[0] ? { image: `${SITE_URL}${project.images[0]}` } : {}),
    ...(project.appLink ? { url: project.appLink } : {}),
  };
}

export function breadcrumb(lang: Lang, trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: urlFor(lang, t.path),
    })),
  };
}

export function caseStudyGraph(study: CaseStudy, lang: Lang) {
  const isJa = lang === 'ja';
  const url = urlFor(lang, `case-studies/${study.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#casestudy`,
    headline: isJa ? study.title_ja : study.title,
    alternativeHeadline: isJa ? study.subtitle_ja : study.subtitle,
    description: isJa ? study.client_ja : study.client,
    inLanguage: lang,
    keywords: (isJa ? study.tags_ja : study.tags).join(', '),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: (isJa ? study.tags_ja : study.tags).map((t) => ({ '@type': 'Thing', name: t })),
  };
}
