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
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "data-lights-the-way",
    title: "Data Lights the Way — But People Decide",
    title_ja: "データは道を照らす。決めるのは、人間の情理。",
    date: "2026-04-10",
    category: "Leadership",
    category_ja: "リーダーシップ",
    readingTime: 5,
    excerpt:
      "Dashboards do not make decisions. They reduce ambiguity so leaders can make better ones. A note on where data ends and judgement begins.",
    excerpt_ja:
      "ダッシュボードは意思決定をしない。曖昧さを減らし、リーダーがより良い判断を下すための土台となる。データが終わり、人間の判断が始まる境界について。",
    body: [
      "In ten years of bridging finance, system integration, and AI engineering, I have watched the same pattern repeat: teams collect more data, build more dashboards, and still hesitate at the moment of decision.",
      "The issue is rarely the data. It is the framing. A well-built metric narrows the space of reasonable actions — it does not pick one. The leader still has to read the room, weigh the people, and commit.",
      "My working rule: let data set the boundary conditions. Let judgement choose inside them. When those two are confused, projects stall — either paralysed by numbers or blind to them.",
      "The best leaders I have worked with treat dashboards as lanterns, not oracles. They light the path. They do not walk it for you.",
    ],
    body_ja: [
      "金融、システムインテグレーション、AIエンジニアリングの現場を10年以上渡り歩く中で、同じパターンを繰り返し目撃してきた。チームはデータを集め、ダッシュボードを増やし、それでも最後の意思決定の瞬間に立ち止まる。",
      "問題はデータそのものではなく、フレーミングにある。良く設計された指標は、妥当な選択肢の範囲を絞るが、答えそのものは示さない。最後に場の空気を読み、人を量り、覚悟を決めるのはリーダーの役割。",
      "私の原則はシンプル。データは境界条件を定め、判断はその内側で行う。この二つが混同されると、プロジェクトは数字に麻痺するか、数字を無視するかのどちらかで止まる。",
      "これまで共に仕事をした優れたリーダーたちは、ダッシュボードを神託ではなくランタンとして扱っていた。道を照らすが、代わりに歩いてはくれない。",
    ],
    tags: ["Leadership", "Data Strategy", "Decision Making"],
  },
  {
    id: 2,
    slug: "ai-that-ships",
    title: "Generative AI That Actually Ships",
    title_ja: "実際に本番で動く、生成AIの作り方",
    date: "2026-03-18",
    category: "GenAI",
    category_ja: "生成AI",
    readingTime: 6,
    excerpt:
      "Most GenAI prototypes die between demo and deploy. Three habits — thin wedges, eval from day one, and owning the unhappy path — change that.",
    excerpt_ja:
      "生成AIのプロトタイプの多くは、デモと本番リリースの間で息絶える。薄いウェッジ、初日からの評価、失敗パスのオーナーシップ——この3つの習慣が分岐点となる。",
    body: [
      "I have mentored over 18 students through generative AI bootcamps with a 100% completion rate. The students who shipped shared one habit: they refused to build the whole product first.",
      "Habit 1 — thin wedges. Pick the narrowest workflow where an LLM provably beats the status quo. Ship that. Earn the right to expand.",
      "Habit 2 — evaluation from day one. Before the first prompt, define the ten inputs you must not fail on. Regressions become visible; bragging becomes grounded.",
      "Habit 3 — own the unhappy path. The demo shows the model at its best; production is the model on its worst day. Design for hallucinations, timeouts, and refusals before you design the happy flow.",
      "These are not new ideas. They are the same engineering discipline that shipped databases and payments systems. GenAI does not excuse us from them — it rewards us for keeping them.",
    ],
    body_ja: [
      "生成AIブートキャンプで18名以上の生徒を完遂率100%でメンタリングしてきた。実際に本番までたどり着いた生徒には、共通する習慣が一つあった。それは「最初から全部作ろうとしない」という姿勢。",
      "習慣1：薄いウェッジ。LLMが既存手段を明確に上回る、最も狭いワークフローを選ぶ。そこを出荷する。拡張する権利は、そこから得る。",
      "習慣2：初日からの評価基準。最初のプロンプトを書く前に、絶対に外してはならない10個の入力を定義する。これで退行が可視化され、成果の主張に根拠が生まれる。",
      "習慣3：失敗パスのオーナーシップ。デモはモデルのベストを映すが、本番は最悪の日のモデルが動く。ハッピーパスより先に、ハルシネーション・タイムアウト・拒否応答を設計する。",
      "これらは新しい考え方ではない。データベースや決済システムを本番稼働させてきた、エンジニアリングの基本規律そのもの。生成AIはこの規律を免除してくれない——むしろ守る者に報いる。",
    ],
    tags: ["GenAI", "LLM", "Production", "Mentoring"],
  },
  {
    id: 3,
    slug: "global-pm-five-countries",
    title: "Running a Program Across Five Time Zones",
    title_ja: "5つのタイムゾーンを跨ぐプログラム運営",
    date: "2026-02-05",
    category: "Project Management",
    category_ja: "プロジェクトマネジメント",
    readingTime: 4,
    excerpt:
      "Notes from coordinating a 100-person data modernisation program across Spain, Italy, Germany, UK, Luxembourg, and Romania.",
    excerpt_ja:
      "スペイン・イタリア・ドイツ・英国・ルクセンブルク・ルーマニアの6カ国、約100名体制のデータ近代化プログラムをコーディネートした記録。",
    body: [
      "Distance amplifies everything — good process compounds, bad process rots. When your team is spread across six countries, the meeting cadence is the product.",
      "Written decisions beat live ones. Every meeting closes with three lines: what was decided, who owns it, and when it is reviewed. Nothing else survives the time-zone handoff.",
      "Default to asynchronous. Reserve synchronous time for disagreement, not status. If a recurring meeting has no disagreement, kill it.",
      "Respect the human layer. Bilingual facilitation (JP/EN) is not a translation problem; it is a trust problem. People commit when they have spoken and been heard in their own language.",
    ],
    body_ja: [
      "距離はあらゆるものを増幅する。良いプロセスは複利で効き、悪いプロセスは腐敗する。6カ国に散ったチームでは、ミーティングの運用そのものが「プロダクト」になる。",
      "書かれた合意は、口頭の合意に勝る。全てのミーティングは3行で締める——「何を決めたか」「誰が担うか」「いつ見直すか」。これ以外はタイムゾーンの引き継ぎを生き残れない。",
      "原則は非同期。同期の時間は、ステータス確認ではなく「意見の相違」のために確保する。意見の相違がない定例ミーティングは、止める。",
      "人間のレイヤーを尊重する。日英バイリンガルのファシリテーションは翻訳の問題ではなく、信頼の問題。人は自分の言語で話し、聞かれたと感じたときに本気で動く。",
    ],
    tags: ["Project Management", "Global", "Leadership", "Facilitation"],
  },
];
