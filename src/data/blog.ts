export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  title_ja: string;
  date: string; // ISO YYYY-MM-DD
  category: string;
  category_ja: string;
  readingTime: number; // minutes
  excerpt: string;
  excerpt_ja: string;
  body: string[];
  body_ja: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
  linkLabel_ja?: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "voice-notion-ai-second-brain",
    title: "Building a Second Brain — Voice → Notion → AI Workflow",
    title_ja: "音声からNotionへ、AIで自動仕分けする「第二の脳」ワークフロー",
    date: "2026-04-17",
    category: "Automation / AI",
    category_ja: "自動化 / AI",
    readingTime: 5,
    excerpt:
      "How I turned Soundcore Work recordings into a self-organising Notion system — diary, ideas, and to-dos auto-sorted by Claude, summarised monthly. A no-code pattern that removes the friction of thinking out loud.",
    excerpt_ja:
      "Soundcore Workで録音した音声を、Notion上で「日記」「アイデア」「To-do」に自動仕分けし、月次サマリーまで生成するワークフロー。ノーコード × AIで「話すだけで思考が整理される第二の脳」を構築した記録。",
    body: [
      "The Soundcore Work voice recorder sends transcripts straight into Notion — powerful on paper, messy in practice. After two weeks of use, my workspace was littered with hundreds of raw recording pages. Diary entries, product ideas, and to-dos all tangled together, none of them searchable, none of them reviewed.",
      "The fix: treat the recorder as an input stream, not a destination. I wired Soundcore → Make.com → Claude → Notion so every new recording is classified, routed to the right database (Diary / Ideas / To-dos), and cleaned from the raw inbox — with a monthly summary generated automatically on top.",
      "The critical design decision was idempotency. Version one had no dedup layer, so every time the scenario ran it re-processed the same pages, duplicating entries. The rewrite introduced a Processed Log database: before handling any record, the workflow checks it, filters out anything already seen, and logs new items at the tail of every branch. Without that, automation becomes a hazard.",
      "Stack: Soundcore Work (¥24,990), Notion (free tier), Make.com (free tier), Claude API (a few hundred yen per month at my volume). No servers, no scheduler of my own — the whole thing runs on free infrastructure and one AI call per recording.",
      "The unlock was not the tech; it was removing the friction of thinking out loud. I now talk to the recorder whenever something crosses my mind, knowing Notion will sort it. The monthly summary has quietly become the most valuable artefact — a mirror of what I actually cared about that month, not what I thought I did.",
      "Full step-by-step implementation (Notion DB schema, Make.com scenario, Claude prompt, and the seven things that tripped me up) is on note.com — link below.",
    ],
    body_ja: [
      "Soundcore Workはボイスレコーダーの音声を直接Notionへ送る。一見強力だが、2週間使うとワークスペースは未整理の録音ページで溢れかえる。日記、アイデア、To-doが混在し、検索もできず、見返されることもない。",
      "解決策は、レコーダーを「保存先」ではなく「入力ストリーム」として扱うこと。Soundcore → Make.com → Claude → Notionの経路を組み、録音が入るたびにClaudeが分類し、「日記／アイデア／To-do」それぞれのDBへ自動で振り分ける。月次サマリーまで自動生成する構成。",
      "設計上の最重要ポイントは冪等性。初版は重複排除の仕組みがなく、シナリオ実行のたびに同じページを再処理してしまい、エントリが増殖した。改訂版では「Processed Log DB」を導入し、処理前にチェック → 未処理のみ通過 → 各分岐の末尾でログ記録、という流れに再構成。これがないと自動化はむしろ事故要因になる。",
      "スタックはSoundcore Work（¥24,990）、Notion（無料プラン）、Make.com（無料プラン）、Claude API（自分の利用量で月数百円）。自前のサーバーもスケジューラも不要で、無料インフラとAI呼び出し1回/録音だけで回る。",
      "本質はテクノロジーではなく「思考を外に出すハードルを下げる」こと。何か思いつくたびに、整理はNotion側が担う前提で、気軽にレコーダーに話せるようになった。月次サマリーは最も価値ある副産物になった——「今月自分が本当に何を気にしていたか」が、都合の良い記憶ではなく実データで見える。",
      "Notion DBスキーマ、Make.comシナリオ、Claudeプロンプト、実装で詰まった7つのポイントなど、実装ステップの全詳細はnote.comの記事に掲載している。下のリンクから参照を。",
    ],
    tags: ["Notion", "Make.com", "Claude API", "Automation", "No-code"],
    link: "https://note.com/brainy_phlox8948/n/ne29425e9b50f",
    linkLabel: "Read full article on note",
    linkLabel_ja: "noteで全文を読む",
  },
];
