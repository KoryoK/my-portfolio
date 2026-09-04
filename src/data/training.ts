export interface TrainingProgram {
  id: number;
  title: string;
  title_ja: string;
  tagline: string;
  tagline_ja: string;
  description: string;
  description_ja: string;
  /** Who the program is for — shown in the card meta row. */
  audience: string;
  audience_ja: string;
  /** Delivery format & scale — shown in the card meta row. */
  format: string;
  format_ja: string;
  /** Time commitment — shown in the card meta row. */
  duration: string;
  duration_ja: string;
  outcomes: string[];
  outcomes_ja: string[];
  tags: string[];
  /** Per-card CTA wording, tailored to each program. */
  cta: string;
  cta_ja: string;
  /** Value passed to the contact form's inquiry-type select. Must match a ContactForm option value. */
  inquiryValue: 'training';
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 1,
    title: "Generative AI Webinars",
    title_ja: "生成AIウェビナー",
    tagline: "Built on webinars for 100+ attendees — get your whole team fluent in what AI can and can't do.",
    tagline_ja: "受講者100名以上の登壇実績をもとに、生成AIの「今できること・できないこと」をチームの共通言語に。",
    description:
      "Live online sessions that bring a whole team or community up to speed on generative AI. Built on instructing webinars for audiences of 100+, with real working demos instead of abstract theory.",
    description_ja:
      "チームやコミュニティ全体を一気に生成AIの“今”に追いつかせる、生成AIウェビナー（オンラインセミナー）。受講者100名以上の登壇実績をベースに、抽象論ではなく実務デモで伝えます。",
    audience: "Teams & communities taking their first step",
    audience_ja: "最初の一歩を踏み出す組織・コミュニティ",
    format: "Online live · recording optional",
    format_ja: "オンラインライブ・録画提供可",
    duration: "60–90 min · large groups",
    duration_ja: "60〜90分・大人数可",
    outcomes: [
      "A clear map of what GenAI can and can't do today",
      "Live demos of real business use cases",
      "Open Q&A tailored to your audience",
      "Slides and a curated link pack to keep",
    ],
    outcomes_ja: [
      "生成AIの“今できること・できないこと”の整理",
      "業務ユースケースのライブデモ",
      "参加者に合わせた質疑応答",
      "当日スライド・参考リンク集の共有",
    ],
    tags: ["Webinar", "Live Demo", "100+ audience"],
    cta: "Book a webinar →",
    cta_ja: "登壇を相談する →",
    inquiryValue: "training",
  },
  {
    id: 2,
    title: "GenAI Foundations Workshop",
    title_ja: "生成AI 使い方 基礎研修",
    tagline: "A half-day hands-on workshop that turns “I tried ChatGPT” into “we get results with it.”",
    tagline_ja: "半日のハンズオン研修で、「触ってみた」を「成果が出る」に変える。",
    description:
      "A hands-on workshop that gets a working team producing real results with generative AI — using your own tasks as the material, not toy examples.",
    description_ja:
      "生成AIの使い方を、実際に成果を出せるところまで定着させるハンズオン研修（ワークショップ）。サンプルではなく、あなたの実業務を題材に手を動かします。",
    audience: "Hands-on teams already using AI",
    audience_ja: "AIを触り始めた実務チーム",
    format: "Online or onsite · hands-on",
    format_ja: "オンライン／対面・ハンズオン",
    duration: "Half day (~3h) · small–mid groups",
    duration_ja: "半日（約3時間）・少〜中人数",
    outcomes: [
      "Prompt-design patterns that hold up at work",
      "Exercises built on your own tasks",
      "Safe-use and data-handling essentials",
      "A prompt and template kit to take away",
    ],
    outcomes_ja: [
      "実務で効くプロンプト設計の型",
      "自分の業務を題材にした演習",
      "安全な使い方・情報の取り扱いの勘所",
      "持ち帰れるプロンプト・テンプレ集",
    ],
    tags: ["Workshop", "Prompting", "Hands-on"],
    cta: "Request a workshop →",
    cta_ja: "研修を相談する →",
    inquiryValue: "training",
  },
  {
    id: 3,
    title: "Custom Corporate Training",
    title_ja: "企業研修（カスタム）",
    tagline: "Corporate GenAI training designed around your business, tools and policies — in Japanese or English.",
    tagline_ja: "御社の業務・ツール・規程に合わせて設計する、生成AIの企業研修プログラム。日英対応。",
    description:
      "A corporate generative-AI training program designed around your business, tools, and policies — from goal-setting through follow-up. Drawing on leading a data-modernisation program across six European countries, delivered in Japanese or English.",
    description_ja:
      "御社の業務・ツール・規程に合わせて設計する、生成AIの企業研修（法人向け研修）プログラム。到達目標の設計からフォローアップまで。欧州6カ国のデータ近代化プログラムをリードする現場感をもとに、日英どちらでも対応します。",
    audience: "Enterprises rolling out AI org-wide",
    audience_ja: "全社にAIを展開したい企業",
    format: "Onsite / online / hybrid · series",
    format_ja: "対面／オンライン／ハイブリッド・複数回可",
    duration: "Scoped per engagement",
    duration_ja: "要見積（単発〜シリーズ）",
    outcomes: [
      "Discovery and goal design with your team",
      "Curriculum built on your own use cases",
      "Role-based practical exercises",
      "Post-training follow-up and adoption support",
    ],
    outcomes_ja: [
      "事前ヒアリングと到達目標の設計",
      "自社ユースケースに合わせたカリキュラム",
      "部門・役割別の実践演習",
      "研修後のフォローアップ・定着支援",
    ],
    tags: ["Corporate", "Bilingual (JA/EN)", "Custom"],
    cta: "Discuss a program →",
    cta_ja: "カスタム研修を相談する →",
    inquiryValue: "training",
  },
  {
    id: 4,
    title: "1-on-1 Mentoring",
    title_ja: "個人メンタリング（1on1）",
    tagline: "1-on-1 mentoring with a working AI engineer — 18 bootcamp graduates guided to a 100% completion rate.",
    tagline_ja: "卒業生18名・完遂率100%の伴走実績をもとにした、現役エンジニアとの1on1メンタリング。",
    description:
      "Personal one-on-one training shaped around where you are now and where you want to go. Built on guiding 18 bootcamp graduates to a 100% completion rate — nobody left behind.",
    description_ja:
      "今の現在地と目標に合わせて組む、完全マンツーマンの研修。生成AIキャンプで卒業生18名を完遂率100%で伴走した“脱落させない”進め方で支援します。",
    audience: "Individuals learning seriously",
    audience_ja: "本気で学びたい個人",
    format: "Online · 1-on-1",
    format_ja: "オンライン・1on1",
    duration: "Single or multi-session",
    duration_ja: "単発〜複数回",
    outcomes: [
      "A curriculum built around your level",
      "One-on-one practical sessions",
      "Question support between sessions",
      "A roadmap to your next step",
    ],
    outcomes_ja: [
      "現在地に合わせた個別カリキュラム",
      "マンツーマンの実習セッション",
      "学習中の質問サポート",
      "次のステップへのロードマップ",
    ],
    tags: ["1-on-1", "18 grads · 100%", "Mentoring"],
    cta: "Start with a free intro →",
    cta_ja: "無料相談から始める →",
    inquiryValue: "training",
  },
];
