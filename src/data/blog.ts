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
  appLink?: string;
  appLinkLabel?: string;
  appLinkLabel_ja?: string;
  /** Internal anchor to a related on-page service (e.g. "#services"), for topic-cluster linking. */
  relatedAnchor?: string;
  relatedLabel?: string;
  relatedLabel_ja?: string;
}

export const posts: BlogPost[] = [
  {
    id: 4,
    slug: "ai-requirements-training",
    title: "Teaching AI, Built With AI",
    title_ja: "AIを教える研修を、AIで作った",
    date: "2026-09-01",
    category: "Training Design / AI",
    category_ja: "研修設計 / AI",
    readingTime: 6,
    excerpt:
      "A 3-day generative-AI training programme for around 70 engineers — designed end to end, from a quantitative pre-survey analysis that decided the group structure, through exercises built to withhold the answer, to a PPTX-XML pipeline that produced the materials. The tool used to build it was the subject being taught.",
    excerpt_ja:
      "エンジニア約70名・3日間の生成AI研修を、設計から教材制作まで一気通貫で担当した。グループ編成を決めた事前アンケートの定量分析、答えを教えない演習設計、PPTXをXMLレベルで組み立てる制作パイプライン。作るのに使った道具が、そのまま教える対象だった。",
    body: [
      "\"Teaching AI, built with AI\" is not a slogan here — it is a literal description of the working method. I designed a 3-day, on-site generative-AI training programme for a cohort of around 70 engineers: the quantitative analysis of the pre-survey, the curriculum, and the exercise materials themselves. The toolchain was Python, python-pptx, and Claude Code. The thing being taught and the thing doing the building were the same.",
      "The design had to satisfy three constraints at once. First, assume near-zero prior experience with requirements definition, and still get people to feel what upstream thinking is like inside three days. Second, break overconfidence in AI. The failure that recurs in generative-AI training is trusting the output uncritically, and a lecture does not fix it — it has to be built into an experience. Third, leave nobody behind: across a group of ~70 with real skill spread, everyone needs to walk out with something that worked.",
      "The first pillar was the pre-survey analysis. Five indicators were inverted into ability points, combined into a weighted composite score, and cut into three tiers that drove the group structure. What mattered was not the classification but the robustness audit around it. If you hand a client a segmentation, you have to answer \"why this line?\" on the spot or it cannot be used for a decision. So: a sensitivity check showing 94% of people stayed in the same tier under even weighting; an explicit boundary band of ±0.5 points labelled as genuinely ambiguous rather than silently assigned; and response-quality flags for suspiciously fast or flat-lined submissions. The analysis shipped with a document that separated what the data supports from what it does not. Every step was scripted, so the same input always produces the same output.",
      "The second pillar was exercise design, and the principle was to withhold the answer. In the AI-output evaluation exercise, participants judge the output before being taught any evaluation framework — the reveal comes afterwards. Errors are seeded at three difficulty levels, so every participant, at whatever level, gets to find at least one and know they found it. The interview role-play runs as a card-based format: groups of four, four rounds, 75 minutes. The cards are built to return nothing useful in response to an open question. You can only make progress with closed questions driven by a hypothesis — which turns \"come in with a hypothesis\" from advice into a structural constraint.",
      "The third pillar was the materials pipeline. A lot of slides had to conform to a brand template, and rebuilding a template from scratch always drifts — a logo, a margin, a fill. So instead of recreating anything, the PPTX gets unpacked, edited as XML with lxml, and packed back up; the template's own decoration is inherited untouched. Verification runs through LibreOffice to PDF, then pdftoppm to images, and the layout breaks and overlapping text get caught by eye. The Japanese-font problem, where CJK glyphs silently fall back to Chinese forms, was pinned down at the rPr level. Fourteen exercise materials came out of this path, sized for 17–18 groups running in parallel.",
      "Three things stayed with me. One: an analysis handed to a client being correct is not enough. It becomes usable for a decision only once you can answer \"how do you know?\" without pausing. Two: using AI to design the training about using AI gives the instructor a felt sense — not a described one — of where the boundary between machine work and human work actually sits, and that showed up directly in how convincingly it could be taught. Three: do not try to reproduce a template; inherit the XML. It is faster and it is certain. Delivery is September 2026. How well the design held up gets measured by the shift between the pre- and post-survey, and that is a separate piece of writing.",
    ],
    body_ja: [
      "「AIを教える研修を、AIで作った」。これは言葉遊びではなく、実際の作業手順そのものだ。エンジニア約70名・3日間・オンサイトの生成AI研修を、事前アンケートの定量分析からカリキュラム設計、演習教材の制作まで一気通貫で担当した。使ったのはPython、python-pptx、そしてClaude Code。教える対象と、それを作る道具が同じという構図になった。",
      "設計の出発点は、同時に満たさなければならない3つの制約だった。ひとつ、要件定義の実務経験がほとんどない前提で組むこと。それでも3日間で「上流工程の思考」を体験させる必要がある。ふたつ、AIへの過信を壊すこと。生成AI研修で繰り返し起きる失敗は出力を無批判に信じてしまうことで、これは講義では直らない。体験として仕込むしかない。みっつ、できない層を置き去りにしないこと。スキル差のある約70名全員に、何かしら「できた」を残す。",
      "ひとつめの柱は、事前アンケートの定量分析だった。5指標の回答を能力点へ反転させ、重み付き合成スコアにまとめ、3つのティアに切ってグループ編成に使う。ただし効いたのは分類そのものより、その周りに置いた頑健性の監査のほうだ。クライアントに区分を出す以上、「なぜこの線引きなのか」に即答できなければ意思決定には使えない。だから、重みを均等に変えても94%が同じティアに残ることを確認し、境界±0.5点のバンドは黙って振り分けず「どちらとも言える」と明示ラベルを付け、速答や全項目同一回答といった回答品質のフラグも立てた。そのうえで「データが支持すること」と「支持しないこと」を分離した文書を添えている。全処理はスクリプト化してあり、同じ入力からは必ず同じ出力が出る。",
      "ふたつめの柱は演習設計で、方針は「答えを先に渡さない」ことだった。AI出力の評価演習では、評価の型を教える前にまず判定させる。種明かしは後だ。誤りは難易度を3段階に分けて仕込んであるので、どのレベルの受講者にも「自分は見つけられた」が最低ひとつ残る。ヒアリングのロールプレイは問題カード式にして、4人1組・75分・4ラウンドで回す。カードは、開いた質問に対しては有用な情報を返さないよう設計してある。仮説を持った閉じた質問でしか前に進めない構造にすることで、「仮説を持って聞く」を助言ではなく構造上の制約に変えた。",
      "みっつめの柱は教材制作のパイプラインだ。ブランドテンプレート準拠のスライドを大量に作る必要があったが、テンプレートをゼロから再現すると必ずどこかがズレる。ロゴ、余白、塗り。そこで再現をやめ、PPTXをunpackし、lxmlでXMLを直接編集して、またpackし直す方式にした。テンプレート自身の装飾はそのまま継承される。検証はLibreOfficeでPDFに変換し、pdftoppmで画像化して、レイアウト崩れとテキスト重複を目で見て潰す。日本語フォントが中国語グリフに静かにフォールバックする問題は、rPrレベルで明示制御して抑えた。この経路で演習教材14点、同時進行17〜18グループぶんを作っている。",
      "残った学びは3つある。ひとつ、クライアントに出す分析は「正しい」だけでは足りない。「なぜそう言えるのか」に淀みなく答えられて、はじめて意思決定に使える。ふたつ、AI活用研修の設計そのものにAIを使うと、教える側が「AIに任せてよい所」と「人がやる所」の境界を、説明としてではなく実感として持てる。これは教室での説得力に直結した。みっつ、テンプレートは再現しようとせず、XMLごと継承したほうが速くて確実だ。研修の実施は2026年9月。設計がどこまで効いたかは事前・事後アンケートの伸びで測る。それはまた別に書く。",
    ],
    tags: ["Instructional Design", "Data Analysis", "python-pptx", "Claude Code", "Corporate Training"],
    relatedAnchor: "#training",
    relatedLabel: "Related service: Corporate GenAI Training",
    relatedLabel_ja: "関連サービス：企業向け生成AI研修",
  },
  {
    id: 3,
    slug: "aporix-live-on-app-store",
    title: "Aporix Ships — A Marketplace for Ideas, Validated Before Code",
    title_ja: "Aporix、App Storeで公開 — コードを書く前にアイデアを検証するマーケットプレイス",
    date: "2026-04-21",
    category: "Product / Mobile",
    category_ja: "プロダクト / モバイル",
    readingTime: 4,
    excerpt:
      "Most ideas never get built because the people who have them and the people who can build them never meet. Aporix is an iOS app that fixes that — idea owners post, developers discover, and empathy counts turn into a public demand score. After months of building and an Apple review cycle, Aporix is now live on the App Store.",
    excerpt_ja:
      "ほとんどのアイデアが形にならないのは、アイデアを持つ人と、それを作れる人が出会わないから。Aporixはその断絶を埋めるために作ったiOSアプリ——アイデアオーナーが投稿し、開発者が発見し、共感数が公開の需要スコアに変わる。数ヶ月の開発とApple審査を経て、ついにApp Storeで公開された。",
    body: [
      "Aporix is live on the App Store. This is the short version of a longer build — a mobile-first marketplace where ideas don't die in notebooks because no one who could build them ever sees them. The premise: separate the idea from the implementation, and let the market speak first.",
      "In my freelance work I sit in both seats. Clients show up with ideas but no engineering skill; engineers I know have skill but no idea that excites them enough to build. The bridge between the two is rarely price — it's validation. No one wants to build for free, and no one wants to pay to build something that might have zero demand. Aporix makes that validation the first step, not the last.",
      "The core mechanic is the empathy count. When an idea is posted, other users can tap \"I want this\" — not a like, not a bookmark, a public signal of demand. The number is visible on every idea card, and developers browse ranked by that signal. Ideas that resonate climb; ideas that don't, stay quiet — which is also information. It turns gut feel into a tiny market.",
      "Stack: React Native (Expo) for iOS, a shared TypeScript Turborepo monorepo so the landing-page Next.js app and the mobile app reuse the same domain types, Supabase for auth / data / storage, and RevenueCat for subscription entitlements. The monorepo was the single biggest structural decision — \"add a field\" becomes one edit, not a race condition between two codebases that will have drifted by Tuesday.",
      "Shipping to the App Store required a different rigor than shipping a web app. Privacy disclosures have to match what the code actually does. In-app purchase flows must be testable by a reviewer whose sandbox does not mirror a real user. User-generated content needs a moderation path from day one, not bolted on later. None of this is surprising in retrospect — but nothing about web deploys prepares you for it. The review cycle is deliberately slow, and unforgiving about any gap between what an app claims and what it does.",
      "What I'm watching now: how early users actually post — do they describe ideas in enough detail for a developer to act, or do they drop one-liners? How empathy counts distribute — do a few ideas dominate, or is attention spread? And whether the move from \"I want this\" to an actual build happens without me stitching it manually. The app is live; the real product starts now. Download link below — feedback of any kind is genuinely welcome.",
    ],
    body_ja: [
      "AporixがApp Storeで公開された。これはここまでの開発の短いまとめ——モバイルファーストのマーケットプレイスで、ノートの中に埋もれて消えていくアイデアを、それを作れる誰かの目に届ける場所。前提は一つ：アイデアと実装を切り離し、市場の反応を先に聞く。",
      "フリーランスで仕事をしていると、両側に座る機会がある。アイデアを持ってやってくるクライアントには実装力がなく、周りのエンジニアには実装力があっても、本気で作りたいアイデアには巡り会えていない。この断絶を埋めるものは、意外にも値段ではなく「検証」だ。誰も無償で作りたくはないし、誰も需要ゼロのものに金を払いたくない。Aporixはその検証を最後ではなく最初に置いた。",
      "中核の仕組みは「共感数」。アイデアが投稿されると、他のユーザーは「これ欲しい」をタップできる——いいねやブックマークではなく、需要の公開シグナルだ。この数値は全てのアイデアカードに表示され、開発者はこのシグナル順でアイデアを閲覧する。響いたものは上がり、響かないものは静かなまま——これもまた情報だ。直感を小さな市場に変える仕組み。",
      "技術スタックはReact Native（Expo）、Next.jsのランディングとモバイルアプリがドメイン型を共有するためのTurborepoモノレポ、Supabaseで認証・データ・ストレージ、RevenueCatでサブスク管理。最も効いた構造判断はモノレポだった——「フィールドを追加する」が一つの編集で済み、二つのコードベースが火曜日にはすでにズレている、という事態を避けられる。",
      "App Storeに出荷するのは、Webアプリを出すのとは別種の厳密さを要求される。プライバシー開示はコードの挙動と一致していなければならない。アプリ内課金のフローは、実ユーザーを再現しないサンドボックスでもレビュアーが検証できるように作る必要がある。ユーザー投稿コンテンツは後付けではなく「初日」からモデレーション経路を持っていなければならない。振り返れば当然の要件だが、Webデプロイでは身につかない作法だ。審査サイクルは意図的に遅く、アプリが主張していることと実挙動のズレに対して妥協がない。",
      "これから見ていくもの：初期ユーザーが実際にどう投稿するか——開発者が動ける程度に詳細を書いてくれるのか、一行で終わるのか。共感数の分布——一部のアイデアが総取りするのか、注目は分散するのか。そして「欲しい」から「実際に作られる」への接続が、自分が手で繋がなくても起きるかどうか。アプリは公開された。本当のプロダクトはここから始まる。ダウンロードリンクは下記——フィードバックはどんな形でも歓迎。",
    ],
    tags: ["React Native", "Expo", "Supabase", "RevenueCat", "Turborepo", "iOS", "App Store"],
    appLink: "https://apps.apple.com/app/aporix/id6760210339",
    appLinkLabel: "Download on the App Store",
    appLinkLabel_ja: "App Storeでダウンロード",
    relatedAnchor: "#services",
    relatedLabel: "Related service: Project Management & App Development",
    relatedLabel_ja: "関連サービス：プロジェクトマネジメント & アプリ開発",
  },
  {
    id: 2,
    slug: "unbias-jd-hiring-language",
    title: "Surfacing Bias in Japanese Job Ads — Building Unbias JD",
    title_ja: "求人票に潜む「偏った言葉」を可視化する — Unbias JDをつくった話",
    date: "2026-04-17",
    category: "Product / AI",
    category_ja: "プロダクト / AI",
    readingTime: 5,
    excerpt:
      "English has Gender Decoder. Japanese had nothing. Unbias JD scans Japanese and English job adverts for exclusionary language, scores the bias, and suggests neutral rewrites — no account, no data stored.",
    excerpt_ja:
      "英語圏にはGender Decoderがあるが、日本語の求人票を検査できるツールはほぼ存在しなかった。Unbias JDは日英の求人票から排他的な表現を検出し、バイアススコアと中立的な言い換えを提示する。アカウント不要、データは保存しない設計。",
    body: [
      "Hiring across the UK and Japan showed me how much unconscious bias lives in the language of job ads. Phrases like 「若手の営業マン」—young, male, salesperson rolled into one—filter candidates on attributes that have nothing to do with the job. The writer rarely notices. The applicant always does.",
      "English has had research tools for this for a decade (Gaucher et al., 2011; the Gender Decoder). Japanese, which carries its own age and gender markers in common phrases, had almost nothing. That gap is what Unbias JD fills.",
      "The tool scans a pasted job advert, flags terms across six bias categories (age, gender, physical ability, education, ethnicity, and more), shows a bias score from 0 to 100, and suggests neutral rewrites. Edit the text in place, re-scan, and watch the score drop — a fast feedback loop for the writer.",
      "Three design choices mattered. No accounts — writing a job ad should not require a signup. No data retention — pasted text is analysed in memory and discarded. Two-layer detection — a curated lexicon (built on MHLW's fair-hiring guidelines for Japanese, the UK Equality Act and academic research for English) combined with a contextual LLM pass via Vercel AI Gateway, so we catch both dictionary hits and subtler phrasing.",
      "Stack: Next.js 16, React 19, TypeScript, Tailwind 4, shadcn/ui, Vercel AI Gateway, BotID, deployed on Vercel. Stateless by design — the hardest part was not the code, it was deciding what not to store.",
      "The honest limit, spelled out on the About page: a dictionary cannot read context perfectly, and a score is a prompt for reflection, not a verdict. The final judgement stays with the person writing the advert. But even making bias visible — turning an invisible default into a highlighted word — changes what writers choose next. That is the whole point.",
    ],
    body_ja: [
      "英国と日本、両方で採用に関わる中で気づいたのは、求人票の言葉にどれだけ無意識のバイアスが潜んでいるかということ。「若手の営業マン」のような表現には、年齢・性別・職種イメージが一度に埋め込まれており、職務遂行能力とは無関係な属性で応募者をふるいにかけてしまう。書き手はほぼ気づかない。応募者は必ず気づく。",
      "英語圏にはGender Decoderのような研究ベースのツールが10年前からある（Gaucher et al., 2011）。一方で日本語には、年齢・性別の含意が日常表現に埋め込まれているにもかかわらず、検査ツールはほぼ存在しなかった。Unbias JDはこのギャップを埋めるために作った。",
      "貼り付けた求人票をスキャンし、6つのバイアスカテゴリ（年齢・性別・身体能力・学歴・民族性ほか）で該当語をハイライト。0〜100のバイアススコアを算出し、中立的な言い換え候補を提示する。テキストをその場で編集して再解析すれば、スコアの変化がその場で見える——書き手にとっての高速フィードバックループを狙った。",
      "設計上の3つの判断：アカウント不要——求人票を書くのにサインアップが要るのはおかしい。データ非保存——貼り付けたテキストはメモリ上で解析し、保存しない。二層検出——辞書ベース（日本語は厚労省「公正な採用選考」指針、英語はUK Equality Actと学術研究を基盤）と、Vercel AI Gatewayを通した文脈解析LLMを組み合わせ、辞書ヒットに加えて微妙な言い回しも拾う。",
      "技術スタックはNext.js 16、React 19、TypeScript、Tailwind 4、shadcn/ui、Vercel AI Gateway、BotID、Vercelデプロイ。ステートレス設計。コードよりも「何を保存しないか」を決めることの方が難しかった。",
      "限界も正直に明記してある：辞書は文脈を完璧には読めず、スコアは判定ではなく「立ち止まるきっかけ」にすぎない。最終的な判断は常に書き手に委ねられる。それでも、不可視だった言葉をハイライトするだけで、次に選ぶ語が変わる。その一点を狙ったツール。",
    ],
    tags: ["Next.js 16", "AI SDK 6", "Vercel AI Gateway", "Fairness", "HR"],
    link: "https://note.com/brainy_phlox8948/n/n0a15d75c6eff",
    linkLabel: "Read full article on note",
    linkLabel_ja: "noteで全文を読む",
    appLink: "https://unbias-cv.vercel.app/",
    appLinkLabel: "Try Unbias JD",
    appLinkLabel_ja: "Unbias JDを試す",
    relatedAnchor: "#services",
    relatedLabel: "Related service: GenAI Engineering",
    relatedLabel_ja: "関連サービス：生成AI開発・実装",
  },
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
    relatedAnchor: "#services",
    relatedLabel: "Related service: No-Code / Low-Code Automation",
    relatedLabel_ja: "関連サービス：ノーコード/ローコード自動化",
  },
];
