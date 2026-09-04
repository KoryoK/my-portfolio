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
    id: 8,
    title: "GenAI Training Designer & Mentor",
    title_ja: "生成AI研修 設計・メンタリング",
    category: "Corporate GenAI Training / Instructional Design",
    category_ja: "企業向け生成AI研修 / インストラクショナルデザイン",
    period: "Jun 2026 – Present",
    period_ja: "2026年6月〜現在",
    org: "Corporate Training Provider",
    tagline: "Designed a 3-day on-site generative-AI training programme for ~70 engineers (delivered Sep 2026) — from quantitative pre-survey analysis through curriculum design to the pipeline that produced 14 exercise materials.",
    tagline_ja: "エンジニア約70名・3日間のオンサイト生成AI研修（2026年9月実施）を設計。事前アンケートの定量分析からカリキュラム設計、演習教材14点の制作パイプラインまで一貫して担当。",
    metrics: [
      "Designed a 3-day on-site \"Requirements Definition with GenAI\" programme for ~70 engineers (delivery: Sep 2026)",
      "Turned a 5-indicator pre-survey (100% response rate) into a weighted composite score driving tier-based group design",
      "Audited the segmentation for robustness — 94% tier agreement under even weighting, with boundary bands labelled explicitly",
      "Authored 14 exercise materials, designed for 17–18 groups running in parallel",
      "Built a PPTX-XML editing pipeline (unpack → lxml → repack) with LibreOffice / pdftoppm visual QA to preserve the brand template",
    ],
    metrics_ja: [
      "エンジニア約70名向け「生成AIによる要件定義研修」（3日間・オンサイト）を設計（2026年9月実施）",
      "事前アンケート5指標（回答率100%）を重み付き合成スコア化し、ティア別のグループ編成を設計",
      "分類の頑健性を監査：均等重みでもティア一致94%、境界バンドを明示ラベル化",
      "演習教材14点を制作、同時進行17〜18グループを前提に設計",
      "ブランドテンプレートを保持するPPTX-XML編集パイプライン（unpack→lxml→repack）を構築、LibreOffice／pdftoppmで視覚QA",
    ],
    skills: ["Corporate Training", "Instructional Design", "Data Analysis", "python-pptx", "Claude Code", "GitHub Copilot"],
    current: true,
    link: "/case-studies/ai-requirements-training",
  },
  {
    id: 1,
    title: "Project Manager",
    title_ja: "プロジェクトマネージャー",
    category: "Global Data Strategy / System Integrator",
    category_ja: "グローバルデータ戦略 / 大手システムインテグレーター",
    period: "Nov 2025 – Apr 2026",
    period_ja: "2025年11月〜2026年4月",
    org: "Major SIer (Consultant)",
    tagline: "Led a data modernisation programme across six European countries (Spain, Italy, Germany, UK, Luxembourg, Romania) with ~100 members at a major Japanese system integrator — 5 executive presentations and 3 bilingual global meetings facilitated.",
    tagline_ja: "大手SIerで、欧州6カ国（スペイン・イタリア・ドイツ・英国・ルクセンブルク・ルーマニア）・約100名体制のデータ近代化プログラムをPMとしてリード。経営層向け資料5件を作成し、日英のグローバル会議3回をファシリテーション。",
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
  },
  {
    id: 2,
    title: "Curriculum Dev Manager & Data Analyst",
    title_ja: "教材開発マネージャー・データ分析",
    category: "EdTech / BI & Automation",
    category_ja: "EdTech / BI・自動化",
    period: "Jul 2025 – Apr 2026",
    period_ja: "2025年7月〜2026年4月",
    org: "EdTech Platform",
    tagline: "At an EdTech company, built BI infrastructure, optimised the curriculum (12 items) and automated workflows with Google Apps Script — cutting a 4-hour task to 3 minutes and completing 12 further efficiency projects.",
    tagline_ja: "EdTech企業で、BI基盤構築・カリキュラム最適化（12件）・GAS自動化を担当。4時間かかっていた作業を3分に短縮し、他12件の効率化プロジェクトを完遂。",
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
    tagline: "Mentor at a generative-AI bootcamp, teaching LLM, RAG and Dify workflow automation — 18 graduates at a 100% completion rate, plus generative-AI webinars for audiences of 100+.",
    tagline_ja: "生成AIブートキャンプのメンターとして、LLM・RAG・Difyによるワークフロー自動化を指導。担当生徒18名の学習継続率・完遂率100%、受講者100名以上の生成AIウェビナーにも登壇。",
    metrics: [
      "Student learning continuation & graduation rate: 100% (18 graduates)",
      "Generative-AI webinar instructor for an audience of 100+",
      "Proposed 4 improvements to curriculum & progress tracking sheets",
    ],
    metrics_ja: [
      "担当生徒の学習継続率＆完遂率 100%（卒業生18名）",
      "生成AIウェビナー講師（受講者100名以上）",
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
    tagline: "Freelance retail analytics engagement: designed and built 8 Tableau dashboards and 8 KPIs — conversion by product and category, sales by store, bestsellers by size and colour — and served as Tableau advisor to managers.",
    tagline_ja: "小売データ分析のフリーランス案件で、Tableauダッシュボード8件とKPI8件を設計・構築。商品別コンバージョン率、店舗別売上、サイズ・カラー別の売れ筋を分析し、マネージャー層のTableauアドバイザーを担当。",
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
    tagline: "At Caterpillar Finance (Yokohama), defined improvement requirements for Oracle EBS, Salesforce and SAP and automated manual workflows — handling 40+ end-user requests and bridging the US development team and Japanese users.",
    tagline_ja: "Caterpillar Finance（横浜）で、ORACLE EBS・Salesforce・SAPの機能改善要件を策定し、業務プロセスを自動化。エンドユーザーからの改善要望40件以上を処理し、US開発チームと日本のユーザーを橋渡し。",
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
    tagline: "Credit analyst at British Business Bank, London: assessed 60+ UK lenders from RFP review through credit certification to portfolio management — all 12 credit certifications presented at MD Forum approved, 100+ lender enquiries handled.",
    tagline_ja: "ロンドンの英国政府系銀行で、60社以上の貸し手のRFP審査・クレジット認証・ポートフォリオ管理を担当。MDフォーラムでのクレジット認定12件は全件承認、貸し手からの問い合わせ100件以上に対応。",
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
    tagline: "Urban-planning consultancy in Miyazaki: designed 60+ surveys and delivered 20+ strategy presentations to local government officials, led 2 branches (15 people) and up to 8 concurrent projects, contributing to a 103% increase in tourist numbers.",
    tagline_ja: "宮崎の都市計画コンサルティング会社で、市町村の政策立案に向けた調査設計60件以上・行政向け戦略プレゼン20件以上を担当。2支部・15名のチームを統率し、最大8プロジェクトを並行運営。観光客数+103%に貢献。",
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
