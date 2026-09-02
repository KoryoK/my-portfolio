export interface Project {
  id: number;
  /** URL segment for /projects/<slug>. Never change once published. */
  slug: string;
  title: string;
  description: string;
  description_ja: string;
  images: string[]; // first image used as card thumbnail
  tags: string[];
  /**
   * Long-form write-up shown on /projects/<slug>. Plain paragraphs, no markdown.
   * Optional: projects backed by a full blog post can rely on that instead.
   */
  body?: string[];
  body_ja?: string[];
  link?: string;
  linkLabel?: string;
  linkLabel_ja?: string;
  appLink?: string;
  appLinkLabel?: string;
  appLinkLabel_ja?: string;
  type: 'webapp' | 'gas' | 'ai' | 'dashboard' | 'mobile' | 'automation';
}

export const projects: Project[] = [
  {
    id: 8,
    slug: "tourney-app",
    title: "tourney-app",
    description: "Multi-tenant SaaS for running volleyball tournaments. Organisers self-serve a tournament via Stripe checkout, then run it live — score entry, standings, brackets, schedules and a public spectator view, all on path-based tenancy.",
    description_ja: "バレーボール大会運営のマルチテナントSaaS。主催者はStripe決済で大会を自分で立ち上げ、そのまま当日運営まで完結。スコア入力・順位表・対戦表・スケジュールと観戦者向け公開ページを、パスベースのテナント分離で提供。",
    images: [
      "/screenshots/tourney-1.png",
      "/screenshots/tourney-2.png",
      "/screenshots/tourney-3.png",
      "/screenshots/tourney-4.png",
      "/screenshots/tourney-5.png",
    ],
    tags: ["Next.js 16", "React 19", "Supabase", "Stripe", "TypeScript", "Tailwind 4", "shadcn/ui", "Playwright"],
    appLink: "https://tourney-app-seven.vercel.app",
    appLinkLabel: "Open the live app",
    appLinkLabel_ja: "公開中のアプリを見る",
    body: [
      "tourney-app runs amateur volleyball tournaments end to end: an organiser signs up, pays through Stripe checkout, and gets a tournament they can operate the same day — team registration, match schedule, live score entry, standings and bracket, plus a public page spectators can follow without an account.",
      "The structural decision was tenancy. Rather than one deployment per club, tenants are path-based (/t/<slug>), so a single instance serves every tournament and a new one costs nothing to stand up. Old single-tournament URLs 301 to their tenant path for six months before returning 410, so early links do not rot silently.",
      "Billing is a weekly pass rather than a subscription, because a tournament is an event, not an ongoing service — nobody wants to remember to cancel. Tenants created but never paid for are removed by a Vercel cron job after seven days, which keeps the slug namespace clean without anyone policing it manually.",
      "The landing page deliberately borrows a dark HUD aesthetic that is off-genre for amateur sport, while every operational screen keeps a plain, high-legibility theme. Admins type scores fast in a noisy gym and spectators check results on phones; mood belongs on the front door, not in the scoreboard. Playwright end-to-end tests cover the auth, billing and scoring paths, and the commerce disclosures Japanese law requires ship as first-class pages rather than a footer afterthought.",
    ],
    body_ja: [
      "tourney-app はアマチュアのバレーボール大会運営を最初から最後まで回すためのSaaS。主催者が登録してStripeで決済すると、その日のうちに運営を始められる状態になる——チーム登録、試合スケジュール、当日のスコア入力、順位表と決勝トーナメント表。観戦者はアカウント無しで公開ページから結果を追える。",
      "構造上の要はテナント分離だった。団体ごとに環境を立てるのではなく、パスベース（/t/<slug>）で1インスタンスが全大会を捌く設計にした。新しい大会を立ち上げるコストがゼロになる。旧URLは6ヶ月間301でテナントパスへ転送し、その後410を返す。初期に共有されたリンクが黙って壊れないようにしている。",
      "課金はサブスクではなく1週間の利用権にした。大会は継続サービスではなくイベントで、解約を覚えておきたい人はいないからだ。作られたまま決済されなかったテナントは、7日後にVercelのcronが物理削除する。slug名前空間を人手で見張らなくても綺麗に保てる。",
      "ランディングページはアマチュアスポーツにはあえて似合わない暗色のHUD調にし、運営画面はすべて素直な高可読テーマのままにした。管理者は騒がしい体育館で急いでスコアを打ち、観戦者はスマホで結果を見る。雰囲気は玄関に置くもので、スコアボードに持ち込むものではない。認証・課金・スコア入力の経路はPlaywrightのE2Eで押さえ、特定商取引法まわりの表記はフッターの付け足しではなく独立ページとして用意している。",
    ],
    type: "webapp",
  },
  {
    id: 7,
    slug: "voice-notion-ai-classifier",
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
    slug: "personal-cashflow-app",
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
    slug: "volleyball-event-manager",
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
    slug: "aporix",
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
    slug: "life-bug-solver",
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
    slug: "unbias-jd",
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
    slug: "kpi-management-dashboard",
    title: "KPI Management Dashboard",
    description: "Production-ready KPI dashboard that dynamically visualizes weekly and monthly business metrics using Google Sheets as a database.",
    description_ja: "スプレッドシートをDBとして活用し、GASで週次・月次の経営指標を動的に可視化する「実戦型KPIダッシュボード」。",
    images: ["/screenshots/kpi-1.png"],
    tags: ["Google Apps Script", "Google Sheets", "HTML5", "CSS3", "JavaScript ES6+"],
    type: "dashboard",
  },
  {
    id: 9,
    slug: "scheduled-web-automation-pipeline",
    title: "Scheduled Web Automation Pipeline",
    description: "Python pipeline that drives a legacy web portal with no public API. A Playwright headless browser handles session login, DOM scraping and form submission; runs are triggered either by a Japanese-holiday-aware scheduler or on demand via an HMAC-verified LINE webhook. Every run reports to LINE and email, and captures a screenshot on failure.",
    description_ja: "公開APIを持たないレガシーWebポータルを自動操作するPythonパイプライン。Playwrightのヘッドレスブラウザでログイン・DOMスクレイピング・フォーム送信を行い、日本の祝日を考慮したスケジューラ、またはHMAC検証付きLINE Webhook経由のチャットコマンドで起動。実行結果はLINEとメールに通知し、失敗時はスクリーンショットを証跡として保存。",
    images: ["/screenshots/web-automation-1.png"],
    tags: ["Python", "Playwright", "Web Scraping", "LINE Messaging API", "Flask", "Scheduling"],
    body: [
      "Some systems worth automating have no API at all. This one drives a legacy public web portal the only way available — a real browser, driven headlessly by Playwright: session login, DOM scraping to read current state, then filling and submitting the form.",
      "Two things trigger a run. A scheduler that understands the Japanese calendar, so it skips weekends and public holidays instead of firing pointlessly; and a chat command, handled by a small Flask webhook that verifies the LINE signature via HMAC before it will execute anything. An endpoint that runs a browser on request is exactly the kind of thing that must not accept unsigned input.",
      "Every run reports to two channels — LINE push with per-target routing, and an SMTP email — because a silent automation is indistinguishable from a broken one. On failure the browser captures a screenshot before exiting, so the log says not just that the run failed but what the page actually looked like at that moment. That single habit turned most debugging from guesswork into reading.",
      "Roughly 5,700 lines of Python. Nothing about it is clever; it is mostly the unglamorous work of making a brittle integration observable and safe to leave running unattended.",
    ],
    body_ja: [
      "自動化する価値のあるシステムが、APIを一切持っていないことがある。これはそういうレガシーなWebポータルを、唯一可能な方法——Playwrightで動かすヘッドレスの実ブラウザ——で操作するパイプライン。セッションログイン、DOMスクレイピングで現在の状態を読み、フォームを埋めて送信する。",
      "起動のトリガーは2つ。日本の暦を理解するスケジューラで、土日祝は空振りせずスキップする。もう1つはチャットコマンドで、小さなFlaskのWebhookがLINEの署名をHMACで検証してから初めて実行する。リクエストでブラウザを起動するエンドポイントは、署名の無い入力を絶対に受け付けてはいけない類のものだ。",
      "実行結果は必ず2系統に通知する——宛先別ルーティング付きのLINEプッシュと、SMTPのメール。黙っている自動化は、壊れている自動化と見分けがつかないからだ。失敗時はブラウザが終了前にスクリーンショットを撮る。ログに残るのが「失敗した」だけでなく「その瞬間ページがどう見えていたか」になる。この習慣ひとつで、デバッグの大半が推測から読解に変わった。",
      "Pythonで約5,700行。技巧的なところは何もない。壊れやすい連携を観測可能にし、放っておいても安全に回る状態にするための、地味な作業がほとんどを占めている。",
    ],
    type: "automation",
  },
];
