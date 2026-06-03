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
  inquiryValue: 'genai' | 'data' | 'automation' | 'project' | 'other';
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 1,
    title: "GenAI Engineering",
    title_ja: "生成AI開発・実装",
    tagline: "From prototype to production — generative AI built into your real workflows.",
    tagline_ja: "試作から本番へ。生成AIを、実業務の中に組み込む。",
    description:
      "Hands-on engineering and advisory for businesses adopting generative AI. I build LLM, RAG, and Dify-based workflow automation around your real use cases — from first prototype through to production deployment, not slideware.",
    description_ja:
      "生成AIを導入する事業者向けのハンズオン開発・導入支援。LLM・RAG・Difyによるワークフロー自動化を、サンプルではなく「あなたの実業務」に合わせて構築します。要件相談から試作、本番運用までを一気通貫で伴走します。",
    deliverables: [
      "LLM / RAG / Dify solution design & build",
      "Workflow automation around your real use cases",
      "Prototype-to-production deployment",
      "Prompt & pipeline review and tuning",
    ],
    deliverables_ja: [
      "LLM・RAG・Difyソリューションの設計・構築",
      "実業務に合わせたワークフロー自動化",
      "試作から本番運用までの実装・デプロイ",
      "プロンプト・パイプラインのレビューとチューニング",
    ],
    tags: ["LLM", "RAG", "Dify", "Automation"],
    inquiryValue: "genai",
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
  {
    id: 4,
    title: "Project Management & App Development",
    title_ja: "プロジェクトマネジメント & アプリ開発",
    tagline: "Own delivery end to end — from requirements to a shipped product.",
    tagline_ja: "要件定義から納品まで。「作って届ける」を一気通貫で。",
    description:
      "End-to-end ownership of your project: requirements, planning, hands-on development, and delivery. Drawing on leading a data-modernisation program across six European countries and shipping my own apps to the App Store and beyond.",
    description_ja:
      "要件定義・計画から実装・納品まで、プロジェクトを一気通貫で推進します。欧州6カ国のデータ近代化プログラムをリードした経験と、自作アプリをApp Storeまでリリースした開発実績をもとに支援します。",
    deliverables: [
      "Project planning, scoping & stakeholder alignment",
      "Hands-on application design & development",
      "Agile delivery and progress management",
      "Release, handover, and post-launch support",
    ],
    deliverables_ja: [
      "計画立案・スコープ設計・関係者調整",
      "アプリケーションの設計・開発",
      "アジャイルでの推進・進捗管理",
      "リリース・引き継ぎ・公開後サポート",
    ],
    tags: ["Project Mgmt", "App Dev", "Agile", "Delivery"],
    inquiryValue: "project",
  },
];
