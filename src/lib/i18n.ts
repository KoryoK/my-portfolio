export type Lang = 'ja' | 'en';

export const LANGS: Lang[] = ['ja', 'en'];

/** UI copy. Every key must exist in both languages. */
export const translations = {
  ja: {
    nav: {
      cta: 'お問い合わせ →',
      menu: 'メニュー',
      home: 'ホーム',
      works: '実績',
      services: 'サービス',
      training: '研修',
      showcase: '開発実績',
      blog: 'ブログ',
      about: 'プロフィール',
      contact: 'コンタクト',
    },
    hero: {
      label: '柿木滉亮｜生成AIエンジニア・データアナリスト・PM',
      bio: '神奈川県を拠点とするフリーランスの生成AIエンジニア・データアナリスト・PM。LLM／RAG／Difyの開発、Tableau／Power BIによるデータ分析、企業向け生成AI研修を、日本語と英語で提供しています。',
      quote: '「データは道を照らす。最後に決めるのは、人間の情理。」',
      experience: '経験領域',
      domains: ['システムインテグレーター', '外資金融', '生成AI', 'PM', 'データ分析', 'プロセス改善', 'UI/UX'],
    },
    works: {
      title: '実績',
      subtitle: '英国の政府系銀行でのクレジット分析から、欧州6カ国のデータ近代化PM、エンジニア約70名規模の生成AI研修設計まで。',
    },
    about: {
      title: 'プロフィール',
      tagline: 'データが戦略を導く。\nAIが実行を加速する。\nリーダーシップが実現させる。\n意思決定は、いつも人間の情理。',
      p1: '柿木滉亮（Koryo Kakinoki）は、神奈川県を拠点とするフリーランスの生成AIエンジニア・データアナリスト・プロジェクトマネージャーです。ロンドンの政府系銀行でクレジットアナリスト、大手システムインテグレーターでグローバルプロジェクトのPMを経て、現在は生成AIの開発実装と企業研修を専門としています。',
      p2: '欧州6カ国・約100名体制のデータ近代化プログラムをPMとしてリードし、Tableau／Power BIによるBI基盤の構築、GASによる業務自動化（作業時間4時間→3分）を実現。2026年には、エンジニア約70名・3日間の生成AI要件定義研修を、事前アンケートの定量分析からカリキュラム設計・教材制作まで一貫して設計しました。',
      p3: '現在はフリーランスとして、LLM・RAG・Difyを用いた生成AIシステムの開発、データ分析アドバイザリー、企業向け生成AI研修と個人メンタリング（ブートキャンプ卒業生18名を完遂率100%で伴走）を、日本語と英語で提供しています。データは強力な道具。しかし最後に決めるのは人間——論理と感性、情理のバランスを大切にしたクライアント支援を行います。',
      coreSkills: 'コアスキル',
      location: '拠点',
    },
    capabilities: {
      title: 'ケイパビリティ',
    },
    services: {
      title: 'サービス',
      subtitle: '生成AI開発、データ分析、ノーコード自動化、PM・アプリ開発の4領域を、フリーランスとして直接提供。',
      included: '提供内容',
      cta: '相談する →',
    },
    training: {
      title: '生成AI 研修・教育',
      subtitle: '生成AIウェビナー、基礎研修、企業向けカスタム研修、1on1メンタリングの4形式。日本語・英語どちらでも対応。',
      credibility: '受講者100名以上のウェビナーに登壇、エンジニア約70名・3日間の企業研修を設計、ブートキャンプ卒業生18名を完遂率100%で伴走。',
      audience: '対象',
      format: '形式',
      duration: '時間・規模',
      outcomes: '内容',
    },
    showcase: {
      title: '開発実績',
      subtitle: 'Next.js／React Native、GAS、Python、LLMで自作したアプリ・自動化ツール。設計判断の解説付き。',
      viewProject: 'プロジェクトを見る',
    },
    blog: {
      title: 'ブログ',
      subtitle: '生成AI研修の設計、データ分析、グローバルPMの現場からの実践記録。',
      readMore: '続きを読む',
      minRead: '分',
      all: '全ての記事',
    },
    contact: {
      title: 'コンタクト',
      body: '生成AI開発、データ分析、業務自動化、企業向け生成AI研修のご相談を受け付けています。日本語・英語対応、神奈川県拠点、国内外リモート可。',
      reply: '24時間以内にご返信します。',
      cta: 'お問い合わせはこちら →',
    },
    footer: { career: '実績', services: 'サービス', showcase: '開発実績', blog: 'ブログ', profile: 'プロフィール' },
  },
  en: {
    nav: {
      cta: "Let's work →",
      menu: 'Menu',
      home: 'Home',
      works: 'Works',
      services: 'Services',
      training: 'Training',
      showcase: 'Showcase',
      blog: 'Journal',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      label: 'Koryo Kakinoki — GenAI Engineer · Data Analyst · PM',
      bio: 'Freelance generative-AI engineer, data analyst and project manager based in Kanagawa, Japan. I build LLM / RAG / Dify systems, deliver Tableau / Power BI analytics, and run corporate GenAI training in Japanese and English.',
      quote: '"Data lights the way. The final decision always belongs to people."',
      experience: 'Experience',
      domains: ['System Integrator', 'Finance', 'GenAI', 'PM', 'Data Analytics', 'Process Opt.', 'UI/UX'],
    },
    works: {
      title: 'Career Highlights',
      subtitle: 'From credit analysis at a UK state-backed bank to leading data modernisation across six European countries and designing GenAI training for ~70 engineers.',
    },
    about: {
      title: 'Profile',
      tagline: "Data informs strategy.\nAI accelerates execution.\nLeadership makes it real.\nThe final decision always belongs to people.",
      p1: 'Koryo Kakinoki is a freelance generative-AI engineer, data analyst and project manager based in Kanagawa, Japan. After working as a credit analyst at a UK government-backed bank in London and as a global project manager at a major Japanese system integrator, I now specialise in building generative-AI systems and delivering corporate training.',
      p2: 'I led a data modernisation programme across six European countries with a team of around 100, built BI foundations on Tableau and Power BI, and automated a four-hour manual task down to three minutes with Google Apps Script. In 2026 I designed a three-day "Requirements Definition with GenAI" programme for about 70 engineers, from pre-survey analysis to curriculum and materials.',
      p3: 'Today I work freelance: building LLM, RAG and Dify systems, advising on data analytics, and running corporate GenAI training and one-on-one mentoring (18 bootcamp graduates, 100% completion), in Japanese and English. Data is a powerful tool — but the final decision always belongs to people, and I help clients act with both rigour and human judgement.',
      coreSkills: 'Core Skills',
      location: 'Location',
    },
    capabilities: {
      title: 'Capabilities',
    },
    services: {
      title: 'Services',
      subtitle: 'Four services delivered directly, freelance: GenAI engineering, data analytics, no-code automation, and PM & app development.',
      included: "What's included",
      cta: 'Get in touch →',
    },
    training: {
      title: 'Generative AI Training',
      subtitle: 'Four formats — GenAI webinars, a foundations workshop, custom corporate training, and 1-on-1 mentoring — in Japanese or English.',
      credibility: 'Webinar instructor for audiences of 100+, designer of a 3-day corporate programme for ~70 engineers, and mentor to 18 bootcamp graduates at a 100% completion rate.',
      audience: 'For',
      format: 'Format',
      duration: 'Scale',
      outcomes: 'Curriculum',
    },
    showcase: {
      title: 'Dev Showcase',
      subtitle: 'Apps and automation tools built with Next.js / React Native, GAS, Python and LLMs — with the design decisions explained.',
      viewProject: 'View project',
    },
    blog: {
      title: 'Journal',
      subtitle: 'Field notes from GenAI training design, data analytics and global project management.',
      readMore: 'Read more',
      minRead: 'min read',
      all: 'All posts',
    },
    contact: {
      title: 'Connect',
      body: 'Open for GenAI engineering, data analytics, workflow automation and corporate GenAI training. Japanese and English, based in Kanagawa, Japan, remote worldwide.',
      reply: 'I reply within 24 hours.',
      cta: 'Start a conversation →',
    },
    footer: { career: 'Career', services: 'Services', showcase: 'Showcase', blog: 'Journal', profile: 'Profile' },
  },
} as const;


// ── Skills data (bilingual) ───────────────────────────────────────────────────

export const skills = [
  {
    name: "Python / SQL",
    level: "Expert", level_ja: "エキスパート",
    description: "Automating multi-day analysis and reporting with Python (pandas) and SQL — including a four-hour manual task cut to three minutes.",
    description_ja: "Python（pandas）とSQLで、数日かかっていた集計・レポート作成を自動化。GASと組み合わせ、4時間の作業を3分に短縮した実績。",
  },
  {
    name: "GenAI / LLM / RAG",
    level: "Lead", level_ja: "リード",
    description: "Building LLM, RAG and Dify workflows that run in production — carried from prototype into real business processes.",
    description_ja: "LLM・RAG・Difyで本番稼働する生成AIワークフローを構築。試作で終わらせず、実業務への組み込みまで担当。",
  },
  {
    name: "Tableau / Power BI",
    level: "Expert", level_ja: "エキスパート",
    description: "Designing KPI dashboards in Tableau and Power BI — eight dashboards and eight KPI definitions on a single retail analytics engagement.",
    description_ja: "Tableau／Power BIでKPIダッシュボードを設計・構築。小売データ分析ではダッシュボード8件・KPI8件を定義。",
  },
  {
    name: "Project Management",
    level: "Senior", level_ja: "シニア",
    description: "Led a data modernisation programme across six European countries with ~100 people — shipping cross-functional work on time, from requirements to delivery.",
    description_ja: "欧州6カ国・約100名体制のデータ近代化プログラムをリード。要件定義から納品まで、クロスファンクショナルな案件を期日通りに完遂。",
  },
  {
    name: "GAS / Automation",
    level: "Advanced", level_ja: "アドバンスト",
    description: "Automating repetitive work with GAS, Make.com and Notion — 12+ efficiency projects delivered for an EdTech company.",
    description_ja: "GAS・Make.com・Notionで繰り返し業務を自動化。EdTech企業で12件超の効率化プロジェクトを完遂。",
  },
  {
    name: "UI/UX Direction",
    level: "Senior", level_ja: "シニア",
    description: "Designing tools people keep using — shipped my own app to the App Store and proposed 16 UI/UX improvements in-house.",
    description_ja: "自作アプリをApp Storeまでリリースした経験をもとに、人が使い続けたくなるツールを設計。UI/UX改善提案16件。",
  },
];


// ── App ───────────────────────────────────────────────────────────────────────

export type Translation = (typeof translations)[Lang];

/** Compile-time guard: every Lang must have a translation table. */
const _langCoverage: Record<Lang, Translation> = translations;
void _langCoverage;
