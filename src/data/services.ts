export interface Service {
  id: number;
  title: string;
  title_ja: string;
  tagline: string;
  tagline_ja: string;
  description: string;
  description_ja: string;
  deliverables: string[];
  deliverables_ja: string[];
  tags: string[];
  /** Value passed to the contact form's inquiry-type select. Must match a ContactForm option value. */
  inquiryValue: 'mentor' | 'data' | 'automation' | 'other';
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Generative AI Mentor",
    title_ja: "生成AIメンター",
    tagline: "Go from AI-curious to AI-capable — with a working engineer alongside you.",
    tagline_ja: "「気になる」から「使いこなす」へ。現役エンジニアが伴走します。",
    description:
      "1-on-1 and team mentoring for engineers and businesses adopting generative AI. We work through LLM, RAG, and Dify-based workflow automation on your real use cases — not toy examples. Built on mentoring 18 bootcamp graduates to a 100% completion rate and instructing generative-AI webinars for audiences of 100+.",
    description_ja:
      "生成AIを導入したいエンジニア・事業者向けの1on1／チームメンタリング。LLM・RAG・Difyによるワークフロー自動化を、サンプルではなく「あなたの実課題」で一緒に手を動かしながら習得します。生成AIキャンプで卒業生18名を完遂率100%で伴走し、受講者100名以上の生成AIウェビナー講師も務めた実績に基づきます。",
    deliverables: [
      "Weekly 1-on-1 or team sessions (online)",
      "Hands-on guidance on LLM / RAG / Dify workflows",
      "Code & prompt review on your real projects",
      "A roadmap from first prototype to production",
    ],
    deliverables_ja: [
      "週次の1on1／チームセッション（オンライン）",
      "LLM・RAG・Difyワークフローのハンズオン支援",
      "実プロジェクトのコード・プロンプトレビュー",
      "試作から本番運用までのロードマップ作成",
    ],
    tags: ["LLM", "RAG", "Dify", "Mentoring"],
    inquiryValue: "mentor",
    featured: true,
  },
  {
    id: 2,
    title: "Data Analytics Advisory",
    title_ja: "データ分析アドバイザリー",
    tagline: "Stop guessing. Decide on what the data actually shows.",
    tagline_ja: "勘ではなく、データが示す事実で意思決定を。",
    description:
      "Advisory support for turning raw data into decisions leadership can act on. From KPI definition to Tableau / Power BI dashboards, drawing on global data-strategy and BI delivery experience across European markets.",
    description_ja:
      "生データを、経営層が動ける意思決定情報へ。KPI設計からTableau／Power BIダッシュボード構築まで、欧州各国にまたがるグローバルデータ戦略・BI構築の経験をもとにアドバイザーとして支援します。",
    deliverables: [
      "KPI / metric definition aligned to your goals",
      "Tableau / Power BI dashboard design & build",
      "Analysis reviews and decision-support reporting",
      "Upskilling for your in-house analysts",
    ],
    deliverables_ja: [
      "目標に沿ったKPI・指標定義",
      "Tableau／Power BIダッシュボードの設計・構築",
      "分析レビューと意思決定支援レポーティング",
      "社内アナリストの育成支援",
    ],
    tags: ["Tableau", "Power BI", "SQL", "KPI Design"],
    inquiryValue: "data",
  },
  {
    id: 3,
    title: "No-Code / Low-Code Automation",
    title_ja: "ノーコード/ローコード自動化",
    tagline: "Eliminate the repetitive work draining your team's week.",
    tagline_ja: "チームの時間を奪う繰り返し業務を、仕組みで無くす。",
    description:
      "Design and build automation with GAS, Make.com, Notion, and low-code tools to remove repetitive manual work — freeing your team to focus on the decisions that actually need a human.",
    description_ja:
      "GAS・Make.com・Notion・ローコードツールを活用し、繰り返しの手作業を自動化する仕組みを設計・構築します。本当に人の判断が必要な仕事に、チームの時間を取り戻します。",
    deliverables: [
      "Workflow audit to find automation opportunities",
      "GAS / Make.com / low-code build & deployment",
      "Documentation and handover for your team",
      "Post-launch tuning and support",
    ],
    deliverables_ja: [
      "業務フロー診断による自動化ポイントの洗い出し",
      "GAS・Make.com・ローコードでの構築・導入",
      "チーム向けドキュメント作成と引き継ぎ",
      "導入後のチューニング・サポート",
    ],
    tags: ["GAS", "Make.com", "Notion", "Process Automation"],
    inquiryValue: "automation",
  },
];
