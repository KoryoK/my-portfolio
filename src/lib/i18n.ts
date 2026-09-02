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
      label: '柿木滉亮｜AIエンジニア・データ分析・PM',
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
    services: {
      title: 'サービス',
      subtitle: '作る・支援する — 開発・分析・自動化・PMで、課題を一緒に形にする。',
      included: '提供内容',
      cta: '相談する →',
    },
    training: {
      title: '生成AI 研修・教育',
      subtitle: '学ぶ・育てる — 生成AIウェビナーから企業研修、個人メンタリングまで。',
      credibility: '受講者100名以上に登壇し、ブートキャンプ卒業生18名を完遂率100%で伴走。',
      audience: '対象',
      format: '形式',
      duration: '時間・規模',
      outcomes: '内容',
    },
    showcase: {
      title: '開発実績',
      subtitle: '自作アプリ・GAS・AIツールのポートフォリオ。',
      viewProject: 'プロジェクトを見る',
    },
    blog: {
      title: 'ブログ',
      subtitle: 'データ・AI・リーダーシップの現場から。',
      readMore: '続きを読む',
      minRead: '分',
      all: '全ての記事',
    },
    contact: {
      title: 'コンタクト',
      body: 'データ戦略、AIエンジニアリング、リーダーシップに関するご相談、受付中。あなたのビジネスに「自分らしさ」と「効率」を。',
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
      label: 'Koryo Kakinoki — AI Engineer · Data · PM',
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
    services: {
      title: 'Services',
      subtitle: 'Build & advisory — engineering, analytics, automation, and delivery.',
      included: "What's included",
      cta: 'Get in touch →',
    },
    training: {
      title: 'Generative AI Training',
      subtitle: 'Learn & grow — from generative AI webinars to corporate training and 1-on-1 mentoring.',
      credibility: 'Taught audiences of 100+ and guided 18 bootcamp graduates to a 100% completion rate.',
      audience: 'For',
      format: 'Format',
      duration: 'Scale',
      outcomes: 'Curriculum',
    },
    showcase: {
      title: 'Dev Showcase',
      subtitle: 'Apps, GAS projects, and AI tools I have built.',
      viewProject: 'View project',
    },
    blog: {
      title: 'Journal',
      subtitle: 'Field notes on data, AI, and leadership.',
      readMore: 'Read more',
      minRead: 'min read',
      all: 'All posts',
    },
    contact: {
      title: 'Connect',
      body: "Open for consulting on data strategy, AI engineering, and leadership. Let's bring uniqueness and efficiency to your business.",
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

export type Translation = (typeof translations)[Lang];

/** Compile-time guard: every Lang must have a translation table. */
const _langCoverage: Record<Lang, Translation> = translations;
void _langCoverage;
