export interface Work {
  id: number;
  title: string;
  title_ja: string;
  category: string;
  category_ja: string;
  period: string;
  period_ja: string;
  org: string;
  tagline: string;
  tagline_ja: string;
  metrics: string[];
  metrics_ja: string[];
  skills: string[];
  current?: boolean;
  link?: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "Project Manager",
    title_ja: "プロジェクトマネージャー",
    category: "Global Data Strategy / System Integrator",
    category_ja: "グローバルデータ戦略 / 大手システムインテグレーター",
    period: "Nov 2025 – Present",
    period_ja: "2025年11月〜現在",
    org: "Major SIer (Consultant)",
    tagline: "Leading a global data modernisation program, coordinating teams across 6 European countries with ~100 members.",
    tagline_ja: "欧州6カ国・国内外約100名体制のグローバルデータ近代化プログラムをリード。データドリブンな意思決定を支援。",
    metrics: [
      "Coordinated projects across 6 European countries (Spain, Italy, Germany, UK, Luxembourg, Romania)",
      "Prepared 5 executive-level presentations for senior management",
      "Facilitated 3 global meetings with international stakeholders (JP/EN bilingual)",
    ],
    metrics_ja: [
      "欧州6カ国のプロジェクトをコーディネート（スペイン・イタリア・ドイツ・英国・ルクセンブルク・ルーマニア）",
      "経営層向け資料作成（5件）",
      "グローバルミーティングの資料作成とファシリテーション（3回、日英バイリンガル）",
    ],
    skills: ["Global PM", "Stakeholder Management", "Data Strategy", "Facilitation", "Documentation"],
    current: true,
  },
  {
    id: 2,
    title: "Curriculum Dev Manager & Data Analyst",
    title_ja: "教材開発マネージャー・データ分析",
    category: "EdTech / BI & Automation",
    category_ja: "EdTech / BI・自動化",
    period: "Jul 2025 – Present",
    period_ja: "2025年7月〜現在",
    org: "EdTech Platform",
    tagline: "Driving BI infrastructure, curriculum optimisation, and GAS automation — cutting a 4-hour task to 3 minutes.",
    tagline_ja: "BI基盤構築・カリキュラム最適化・GAS自動化を推進。作業時間4時間→3分を実現。",
    metrics: [
      "Proposed 16 UI/UX improvement plans",
      "KGI-aligned metric definitions (3 items)",
      "Curriculum optimisation (12 items)",
      "GAS automation: reduced a 4-hour task to 3 minutes (+ 12 other projects completed)",
    ],
    metrics_ja: [
      "UI/UX改善案提案（16件）",
      "KGIに沿った指標定義（3件）",
      "カリキュラムの最適化（12件）",
      "GAS業務効率化：作業時間4時間→3分に短縮（他12プロジェクト完遂）",
    ],
    skills: ["GAS", "Google Analytics 4", "BI", "Curriculum Design", "Data Analysis", "GenAI"],
    current: true,
  },
  {
    id: 3,
    title: "GenAI Engineer & Dify Mentor",
    title_ja: "生成AIエンジニア & Difyメンター",
    category: "AI Mentoring / Education",
    category_ja: "AIメンタリング / 教育",
    period: "Apr 2025 – Present",
    period_ja: "2025年4月〜現在",
    org: "GenAI Bootcamp",
    tagline: "Mentoring AI camp students in LLM, RAG, and workflow automation with Dify. 100% student completion rate.",
    tagline_ja: "生成AIキャンプのメンターとして、LLM・RAG・Difyによるワークフロー自動化を学習支援。担当生徒の完遂率100%を達成。",
    metrics: [
      "Student learning continuation & graduation rate: 100% (18 graduates)",
      "Proposed 4 improvements to curriculum & progress tracking sheets",
    ],
    metrics_ja: [
      "担当生徒の学習継続率＆完遂率 100%（卒業生18名）",
      "カリキュラム＆学習進捗管理シートの改善案提案（4件）",
    ],
    skills: ["Dify", "LLM", "RAG", "LangChain", "Mentoring", "Curriculum Design"],
    current: true,
  },
  {
    id: 4,
    title: "Tableau Data Analyst & Advisor",
    title_ja: "Tableauデータアナリスト & アドバイザー",
    category: "Data Analytics / BI",
    category_ja: "データ分析 / BI",
    period: "Mar 2025 – Jun 2025",
    period_ja: "2025年3月〜6月",
    org: "Freelance",
    tagline: "Built Tableau dashboards and provided advisory support to management for data-driven business decisions.",
    tagline_ja: "Tableauダッシュボード構築とデータ分析・報告を担当。マネージャーへのTableauアドバイザーとして配属。",
    metrics: [
      "Created 8 Tableau dashboards",
      "Defined and visualized 8 KPIs",
      "Analysed conversion rates by product/category, sales performance by store, and bestseller patterns by size/colour",
    ],
    metrics_ja: [
      "Tableauダッシュボード作成（8件）",
      "KPIの設定と可視化（8件）",
      "商品別・カテゴリー別コンバージョン率、店舗別売上、サイズ・カラー別売れ筋パターン分析",
    ],
    skills: ["Tableau", "SQL", "Data Analysis", "KPI Design", "Critical Thinking"],
  },
  {
    id: 5,
    title: "Business Process Analyst & PMO",
    title_ja: "ビジネスプロセスアナリスト & PMO",
    category: "Process Optimisation / Caterpillar Finance Ltd",
    category_ja: "プロセス最適化 / Caterpillar Finance Ltd, 横浜",
    period: "Jun 2024 – Dec 2024",
    period_ja: "2024年6月〜12月",
    org: "Caterpillar Finance Ltd, Yokohama",
    tagline: "Streamlining system requirements and automating manual workflows at Caterpillar Finance, bridging US developers and Japanese end users.",
    tagline_ja: "ORACLE EBS・Salesforce・SAPの機能改善要件策定から業務プロセス自動化まで担当。US開発チームと日本のエンドユーザーを橋渡し。",
    metrics: [
      "Received and processed 40+ system improvement requests from end users",
      "Documented 10+ system requirements and business case reports",
      "Discussed 10+ requests with US development team",
      "Won Asia Pacific Business Competition as team leader",
    ],
    metrics_ja: [
      "ユーザーからのシステム改善リクエスト受理・対応（40件以上）",
      "システム要件の把握とビジネスケースのレポーティング（10件以上）",
      "US開発チームとのリクエスト議論（10件以上）",
      "Asia Pacificビジネスコンペティション優勝、リーダーを担う",
    ],
    skills: ["Salesforce", "Oracle EBS", "Power BI", "ServiceNow", "Change Management", "QA"],
  },
  {
    id: 6,
    title: "Transaction / Credit Analyst",
    title_ja: "トランザクション / クレジットアナリスト",
    category: "Credit Risk / British Business Bank, London",
    category_ja: "クレジットリスク分析 / 英国政府系銀行, ロンドン",
    period: "Jan 2022 – Oct 2023",
    period_ja: "2022年1月〜2023年10月",
    org: "British Business Bank, London",
    tagline: "Assessing eligibility of 60+ UK lenders at British Business Bank London — from RFP review through credit certification to portfolio management.",
    tagline_ja: "英国政府系銀行にて、60社以上の貸し手の適格性審査・クレジット認証・ポートフォリオ管理を一貫担当。",
    metrics: [
      "Reviewed and discussed 60+ RFPs (Request for Proposals)",
      "Authored and presented credit certifications at MD Forum — all 12 approved",
      "Responded to 100+ lender inquiries; managed full onboarding and contract process",
    ],
    metrics_ja: [
      "RFPの審査と議論（60件以上）",
      "MDフォーラムでクレジット認定証を執筆・プレゼン、全件承認（12件）",
      "貸し手の問い合わせ対応（100件以上）、オンボーディング・契約書作成まで一貫対応",
    ],
    skills: ["Financial Analysis", "Credit Analysis", "Portfolio Management", "Due Diligence", "Excel"],
  },
  {
    id: 7,
    title: "Junior Consulting Manager",
    title_ja: "ジュニアコンサルティングマネージャー",
    category: "Urban Planning Consulting / N-Spirits",
    category_ja: "都市計画コンサルティング / N-Spirits, 宮崎",
    period: "Aug 2016 – Apr 2018",
    period_ja: "2016年8月〜2018年4月",
    org: "N-Spirits, Miyazaki",
    tagline: "Designing surveys, analyzing data, and presenting strategic plans to local government officials. Managed 2 branches and up to 8 concurrent projects.",
    tagline_ja: "市町村の政策立案に向けた調査設計・データ分析・行政プレゼン。2支部管理、最大8プロジェクト並行運営。",
    metrics: [
      "Survey design & execution: 60+ cases",
      "Strategic presentations to government officials: 20+ cases",
      "Contributed to +103% increase in tourist numbers",
      "Won 2 prefecture-level planning contracts in 2017",
      "Team leadership: 2 teams, 15 members total",
    ],
    metrics_ja: [
      "調査のデザイン設計＆実施（60件以上）",
      "行政役員への戦略提案プレゼン（20件以上）",
      "観光客数増加に貢献（+103%）",
      "2017年に県レベルの計画契約獲得（2件）",
      "チーム統率（計2チーム・15名）",
    ],
    skills: ["Data Collection & Analysis", "Survey Design", "Public Policy", "Project Management", "Leadership"],
  },
];
