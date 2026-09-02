export interface CaseStudyMetric {
  label: string;
  label_ja: string;
  value: string;
  value_ja: string;
}

export interface CaseStudySection {
  heading: string;
  heading_ja: string;
  body: string[];
  body_ja: string[];
}

/** Populated once delivery is complete; until then `results` stays null and the section is not rendered. */
export interface CaseStudyResults {
  summary: string;
  summary_ja: string;
  metrics: CaseStudyMetric[];
}

export interface CaseStudy {
  /** URL segment for /case-studies/<slug>. Never change once published. */
  slug: string;
  title: string;
  title_ja: string;
  /** The hook line under the title. */
  subtitle: string;
  subtitle_ja: string;
  /** Anonymised client description. Never a real company name. */
  client: string;
  client_ja: string;
  role: string[];
  role_ja: string[];
  period: { start: string; end: string };
  periodLabel: string;
  periodLabel_ja: string;
  scale: string;
  scale_ja: string;
  stack: string[];
  status: 'in_progress' | 'completed';
  statusLabel: string;
  statusLabel_ja: string;
  tags: string[];
  tags_ja: string[];
  challenge: CaseStudySection;
  approach: CaseStudySection[];
  learnings: CaseStudySection;
  metrics: CaseStudyMetric[];
  /** null until the engagement completes. Drives whether the Results section renders. */
  results: CaseStudyResults | null;
  /** When true, the confidentiality disclaimer renders automatically. */
  confidential: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-requirements-training',
    title: 'Requirements Definition with Generative AI',
    title_ja: '生成AIによる要件定義研修',
    subtitle: 'Teaching AI, built with AI.',
    subtitle_ja: 'AIを教える研修を、AIで作った。',
    client: 'Corporate generative-AI training, contracted through a training provider',
    client_ja: '企業向け生成AI研修（研修事業会社を通じた受託）',
    role: ['Technical PM', 'Instructional design', 'Data analysis'],
    role_ja: ['テクニカルPM', '教材設計', 'データ分析'],
    period: { start: '2026-06', end: '2026-09' },
    periodLabel: 'Jun – Sep 2026 (design, build, delivery)',
    periodLabel_ja: '2026年6月〜9月（設計・制作・実施）',
    scale: '~70 participants · 3 days · on-site',
    scale_ja: '受講者 約70名／3日間・オンサイト',
    stack: ['Python (pandas)', 'python-pptx / lxml', 'LibreOffice CLI', 'Claude Code', 'GitHub Copilot / Codespaces'],
    status: 'in_progress',
    statusLabel: 'In progress — delivery phase (Sep 2026)',
    statusLabel_ja: '進行中 — 実施フェーズ（2026年9月）',
    tags: ['GenAI Training', 'Instructional Design', 'Data Analysis', 'Project Management'],
    tags_ja: ['生成AI研修', 'インストラクショナルデザイン', 'データ分析', 'PM'],

    challenge: {
      heading: 'The challenge',
      heading_ja: '課題',
      body: [
        'Three constraints had to hold at the same time.',
        'Assume near-zero prior experience. The programme had to give people the feel of upstream thinking inside three days, in a domain where lectures do not transfer — it has to be run as exercise.',
        'Break overconfidence in AI. The failure that recurs in generative-AI training is trusting the output uncritically, and telling people to be careful does not fix it. It has to be built into an experience where they get caught.',
        'Leave nobody behind. Across a cohort of around 70 there is real skill spread. A programme where the strongest enjoy themselves while the rest sit quietly is a failed programme; everyone needed to walk out with something that worked.',
      ],
      body_ja: [
        '同時に満たさなければならない制約が3つあった。',
        '実務経験ゼロを前提に組むこと。それでも3日間で「上流工程の思考」を体験させる必要がある。座学では身につかない領域なので、演習として回すしかない。',
        'AIへの過信を壊すこと。生成AI研修で繰り返し起きる失敗は、出力を無批判に信じてしまうことだ。「気をつけましょう」と言っても直らない。自分が引っかかる体験として仕込むしかない。',
        'できない層を置き去りにしないこと。約70名もいればスキル差は必ずある。上位層だけが楽しんで、他が黙って座っている研修は失敗だ。全員に何かしら「できた」を残す必要があった。',
      ],
    },

    approach: [
      {
        heading: '① Pre-survey analysis → group design',
        heading_ja: '① 事前アンケートの定量分析 → グループ編成設計',
        body: [
          'Five indicators were inverted into ability points, combined into a weighted composite score, and cut into three tiers that drove the group structure.',
          'What mattered was not the classification but the robustness audit around it. Handing a client a segmentation means being able to answer "why this line?" on the spot, or it cannot be used for a decision. So: a weighting sensitivity check (94% of participants held the same tier under even weighting), an explicit ±0.5 point boundary band labelled as genuinely ambiguous rather than silently assigned, and response-quality flags for suspiciously fast or flat-lined submissions.',
          'The analysis shipped with a document that separated what the data supports from what it does not. Every step was scripted, so the same input always produces the same output — an analysis you cannot reproduce is one you cannot verify.',
        ],
        body_ja: [
          '5指標の回答を能力点へ反転させ、重み付き合成スコアにまとめ、3つのティアに切ってグループ編成に使った。',
          'ただし効いたのは分類そのものより、その周りに置いた頑健性の監査のほうだ。クライアントに区分を出す以上、「なぜこの線引きなのか」に即答できなければ意思決定には使えない。だから、重み感度分析（重みを均等に変えても94%が同じティアに残ることを確認）、境界±0.5点のバンドを黙って振り分けず「どちらとも言える」と明示ラベル化、速答や全項目同一回答といった回答品質フラグの検出、の3つを揃えた。',
          '分析には「データが支持すること」と「支持しないこと」を分離した文書を添えている。全処理はスクリプト化してあり、同じ入力からは必ず同じ出力が出る。再現できない分析は、検証もできない。',
        ],
      },
      {
        heading: '② Curriculum — exercises that withhold the answer',
        heading_ja: '② カリキュラム設計 —「教えない」演習設計',
        body: [
          'The three days map to understand → find the problem → specify it, designed as one line where each day\'s output becomes the next day\'s input rather than three self-contained workshops.',
          'In the AI-output evaluation exercise, participants judge the output before being taught any evaluation framework; the reveal comes afterwards. Errors are seeded at three difficulty levels, so every participant at whatever level finds at least one and knows they found it.',
          'The interview role-play runs as a card-based format: groups of four, four rounds, 75 minutes. The cards are built to return nothing useful in response to an open question. You can only make progress with closed questions driven by a hypothesis — which turns "come in with a hypothesis" from advice into a structural constraint.',
          'The instructor\'s worked examples use generic material while participants work on their own themes, so nobody can copy the demonstration into their answer.',
        ],
        body_ja: [
          '3日間を「現状把握 → 課題発見 → 要件化」に対応させ、前日の成果物が翌日の入力になる一本のラインとして設計した。独立した3つのワークショップを並べたのではない。',
          'AI出力の評価演習では、評価の型を教える前にまず判定させる。種明かしは後だ。誤りは難易度を3段階に分けて仕込んであるので、どのレベルの受講者にも「自分は見つけられた」が最低ひとつ残る。',
          'ヒアリングのロールプレイは問題カード式で、4人1組・75分・4ラウンド。カードは、開いた質問に対しては有用な情報を返さないよう設計してある。仮説を持った閉じた質問でしか前に進めない構造にすることで、「仮説を持って聞く」を助言ではなく構造上の制約に変えた。',
          '講師の例示は汎用題材、受講者の演習は自テーマ、と題材を分離している。デモをそのまま答案に写せないようにするためだ。',
        ],
      },
      {
        heading: '③ Materials build pipeline',
        heading_ja: '③ 教材制作パイプライン',
        body: [
          'A brand-compliant deck cannot be rebuilt from scratch without drift — a logo, a margin, a fill. So the template is not recreated: the PPTX is unpacked, edited as XML with lxml, and packed back up, inheriting its own decoration untouched.',
          'Output is verified by converting to PDF through the LibreOffice CLI and rasterising with pdftoppm, so overflowing text and broken layout are caught by eye before anyone sees a slide.',
          'The Japanese-font problem — CJK glyphs silently falling back to Chinese forms — was pinned down at the rPr level rather than worked around.',
        ],
        body_ja: [
          'ブランドテンプレート準拠のスライドをゼロから再現すると、必ずどこかがズレる。ロゴ、余白、塗り。だからテンプレートは再現しない。PPTXをunpackし、lxmlでXMLを直接編集して、またpackし直す。テンプレート自身の装飾はそのまま継承される。',
          '出力の検証は、LibreOffice CLI でPDFに変換し pdftoppm で画像化して行う。文字あふれやレイアウト崩れを、誰かの目に触れる前に潰せる。',
          '日本語フォントが中国語グリフに静かにフォールバックする問題は、回避策でごまかさず rPr レベルで明示制御して抑えた。',
        ],
      },
    ],

    learnings: {
      heading: 'What I took away',
      heading_ja: '学び',
      body: [
        'An analysis handed to a client being correct is not enough. It becomes usable for a decision only once you can answer "how do you know?" without pausing. The sensitivity check and the boundary band were not accuracy work — they were accountability work.',
        'Using AI to design the training about using AI gives the instructor a felt sense, not a described one, of where the boundary between machine work and human work actually sits. That showed up directly in how convincingly it could be taught.',
        'Do not try to reproduce a template; inherit the XML. It is faster and it is certain — and the same instinct generalises well beyond slides.',
      ],
      body_ja: [
        'クライアントに出す分析は「正しい」だけでは足りない。「なぜそう言えるのか」に淀みなく答えられて、はじめて意思決定に使える。感度分析も境界バンドも、精度を上げる作業ではなく説明責任を果たす作業だった。',
        'AI活用研修の設計そのものにAIを使うと、「AIに任せてよい所」と「人がやる所」の境界を、説明としてではなく実感として持てる。これは教室での説得力に直結した。',
        'テンプレートは再現しようとせず、XMLごと継承する。速くて確実で、この発想はスライドに限らず応用が効く。',
      ],
    },

    metrics: [
      { label: 'Participants', label_ja: '受講者', value: '~70', value_ja: '約70名' },
      { label: 'Programme length', label_ja: '研修日数', value: '3 days, on-site', value_ja: '3日間・オンサイト' },
      { label: 'Pre-survey response rate', label_ja: '事前アンケート回答率', value: '100%', value_ja: '100%' },
      { label: 'Tier agreement under even weighting', label_ja: 'ティア分類の重み感度一致率', value: '94%', value_ja: '94%' },
      { label: 'Exercise materials authored', label_ja: '演習教材', value: '14', value_ja: '14点' },
      { label: 'Groups running in parallel', label_ja: '同時進行グループ数', value: '17–18', value_ja: '17〜18' },
    ],

    results: null,
    confidential: true,
  },
];
