export interface Project {
  id: number;
  title: string;
  description: string;
  description_ja: string;
  images: string[]; // first image used as card thumbnail
  tags: string[];
  link?: string;
  linkLabel?: string;
  linkLabel_ja?: string;
  appLink?: string;
  appLinkLabel?: string;
  appLinkLabel_ja?: string;
  type: 'webapp' | 'gas' | 'ai' | 'dashboard' | 'mobile';
}

export const projects: Project[] = [
  {
    id: 7,
    title: "Voice → Notion → AI Classifier",
    description: "Soundcore Work × Notion × Claude automation pipeline. Voice recordings are auto-classified into Diary, Ideas, and To-dos, with monthly summaries generated on top. Idempotent design via a Processed Log DB prevents duplicates.",
    description_ja: "Soundcore Work × Notion × Claudeの自動化パイプライン。音声録音を「日記／アイデア／To-do」に自動仕分けし、月次サマリーまで生成。Processed Log DBによる冪等性設計で重複登録を防止。",
    images: [
      "/screenshots/soundcore-ai-1.png",
      "/screenshots/soundcore-ai-2.png",
      "/screenshots/soundcore-ai-3.png",
    ],
    tags: ["Make.com", "Notion", "Claude API", "Soundcore Work", "No-code"],
    link: "https://note.com/brainy_phlox8948/n/ne29425e9b50f",
    linkLabel: "Read article on note",
    linkLabel_ja: "noteで記事を読む",
    appLink: "https://eu1.make.com/public/shared-scenario/4oPg7ud7jQI/notion-page-categorise",
    appLinkLabel: "Copy Make.com scenario",
    appLinkLabel_ja: "Make.comシナリオをコピー",
    type: "ai",
  },
  {
    id: 1,
    title: "Personal Cashflow App",
    description: "Asset management dashboard — from current balance to future wealth. Eliminates financial anxiety with an intuitive UI.",
    description_ja: "『今の残高』から『未来の資産』まで。直感的なUIで将来の資金不安をなくす資産管理ダッシュボード。",
    images: ["/screenshots/cashflow-1.png"],
    tags: ["Google Apps Script", "GAS", "Google Sheets", "Dashboard"],
    link: "https://coconala.com/contents_market/pictures/cmibso9bx01lx3n0hz0rbtrgp",
    type: "dashboard",
  },
  {
    id: 2,
    title: "Volleyball Event Manager",
    description: "Full-stack web app covering event management, attendance, group chat, and push notifications — everything a team needs.",
    description_ja: "イベント管理・出欠確認・チャット・プッシュ通知まで、チーム運営に必要な機能をフルスタックで実装したWebアプリ。",
    images: [
      "/screenshots/volleyball-1.png",
      "/screenshots/volleyball-2.png",
      "/screenshots/volleyball-3.png",
      "/screenshots/volleyball-4.png",
      "/screenshots/volleyball-5.png",
      "/screenshots/volleyball-6.png",
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "PWA", "JWT", "Google Calendar API", "OpenAI"],
    type: "webapp",
  },
  {
    id: 3,
    title: "Aporix",
    description: "Platform connecting idea owners with developers, with built-in market validation. Visualises empathy count as a demand score. Now available on the App Store.",
    description_ja: "アイデアオーナーと開発者をつなぎ、実装前の市場検証もできるプラットフォーム。共感数を需要スコアとして可視化。App Storeで公開中。",
    images: [
      "/screenshots/aporix-1.png",
      "/screenshots/aporix-2.png",
    ],
    tags: ["React Native", "Expo", "Next.js", "TypeScript", "Supabase", "Turborepo", "RevenueCat"],
    appLink: "https://apps.apple.com/app/aporix/id6760210339",
    appLinkLabel: "Download on the App Store",
    appLinkLabel_ja: "App Storeでダウンロード",
    type: "mobile",
  },
  {
    id: 4,
    title: "Life Bug Solver",
    description: "AI-powered web app that instantly articulates daily frustrations and converts them into actionable steps within 5 minutes.",
    description_ja: "日常の「モヤモヤ」を生成AIが即座に言語化し、5分で実行可能なアクションへと変換する課題解決型Webアプリ。",
    images: [
      "/screenshots/lifebugsolver-1.png",
      "/screenshots/lifebugsolver-2.png",
      "/screenshots/lifebugsolver-3.png",
    ],
    tags: ["Google Apps Script", "Gemini API", "HTML/CSS", "Tailwind CSS", "Vanilla JS"],
    type: "ai",
  },
  {
    id: 6,
    title: "Unbias JD",
    description: "Web app that scans job adverts for biased or exclusionary language and suggests neutral rewrites. Combines a lexicon scan with a contextual LLM pass via Vercel AI Gateway. English and Japanese, stateless.",
    description_ja: "求人票の偏った・排他的な表現を検出し、中立的な言い換えを提案するWebアプリ。辞書ベースのスキャンと、Vercel AI Gatewayを通した文脈解析LLMを組み合わせ。英語・日本語対応、データは保存しない設計。",
    images: [
      "/screenshots/unbias-cv-1.png",
      "/screenshots/unbias-cv-2.png",
      "/screenshots/unbias-cv-3.png",
    ],
    tags: ["Next.js 16", "React 19", "AI SDK 6", "Vercel AI Gateway", "BotID", "Tailwind 4", "shadcn/ui", "TypeScript"],
    link: "https://unbias-cv.vercel.app/",
    type: "ai",
  },
  {
    id: 5,
    title: "KPI Management Dashboard",
    description: "Production-ready KPI dashboard that dynamically visualizes weekly and monthly business metrics using Google Sheets as a database.",
    description_ja: "スプレッドシートをDBとして活用し、GASで週次・月次の経営指標を動的に可視化する「実戦型KPIダッシュボード」。",
    images: ["/screenshots/kpi-1.png"],
    tags: ["Google Apps Script", "Google Sheets", "HTML5", "CSS3", "JavaScript ES6+"],
    type: "dashboard",
  },
];
