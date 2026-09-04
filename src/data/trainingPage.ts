/**
 * Copy for the dedicated corporate GenAI training page (/training, /en/training).
 * Every number here must already exist in works.ts, training.ts or casestudies.ts —
 * the page is the answer-engine landing page for "企業向け 生成AI研修" queries, so it
 * states facts, not aspirations.
 */

export interface FaqItem {
  q: string;
  q_ja: string;
  a: string;
  a_ja: string;
}

export interface Step {
  title: string;
  title_ja: string;
  body: string;
  body_ja: string;
}

export const trainingPage = {
  eyebrow: 'Corporate Generative AI Training',
  eyebrow_ja: '企業向け生成AI研修',

  title: 'Corporate Generative AI Training in Japan — Bilingual (JA/EN)',
  title_ja: '企業向け生成AI研修・ウェビナー・メンタリング（日本語・英語対応）',

  /** Entity-first lead: who, where, what, in which languages. Written to be quotable on its own. */
  lead:
    'Koryo Kakinoki is a freelance generative-AI engineer and trainer based in Kanagawa, Japan, who designs and delivers corporate generative-AI training in Japanese and English. Formats range from 60–90 minute webinars for audiences of 100+ to multi-day on-site programmes built on your own use cases; the most recent engagement was a three-day "Requirements Definition with GenAI" programme for about 70 engineers.',
  lead_ja:
    '柿木滉亮（Koryo Kakinoki）は、神奈川県を拠点に、企業向けの生成AI研修を日本語と英語で設計・実施するフリーランスの生成AIエンジニア・研修講師です。受講者100名以上のウェビナーから、自社ユースケースを題材にした複数日のオンサイト研修まで対応し、直近ではエンジニア約70名・3日間の「生成AIによる要件定義研修」を設計から教材制作まで一貫して担当しました。',

  facts: [
    { label: 'Track record', label_ja: '実績', value: 'Webinars for 100+ · 3-day programme for ~70 engineers · 18 mentees at 100% completion', value_ja: 'ウェビナー受講者100名以上・約70名/3日間の企業研修設計・メンタリング18名完遂率100%' },
    { label: 'Formats', label_ja: '形式', value: 'On-site · online · hybrid · single session or series', value_ja: '対面・オンライン・ハイブリッド、単発〜シリーズ' },
    { label: 'Languages', label_ja: '言語', value: 'Japanese or English (same curriculum, same quality)', value_ja: '日本語・英語（同一カリキュラムで提供）' },
    { label: 'Base', label_ja: '拠点', value: 'Kanagawa, Japan · on-site nationwide · remote worldwide', value_ja: '神奈川県。国内オンサイト可、オンラインは国内外' },
  ],

  problemsHeading: 'Built for these situations',
  problemsHeading_ja: 'こんな課題に',
  problems: [
    'Your team has "tried ChatGPT" but nothing changed in how the work gets done the next day.',
    'A generic vendor course taught the tools, not what to ask them — and left people trusting the output blindly.',
    'You need one programme that works for both the Japanese office and an English-speaking global team.',
    'Skill levels vary widely across 50–100 people and you cannot leave the less confident half behind.',
  ],
  problems_ja: [
    '「ChatGPTを触ってみた」で止まっていて、翌日の仕事の仕方が変わっていない。',
    '汎用の研修でツールの操作は覚えたが、「AIに何を聞くか」が身につかず、出力を無批判に信じてしまう。',
    '日本のオフィスと英語圏のグローバルチームに、同じ内容の研修を届けたい。',
    '50〜100名規模でスキル差が大きく、できない層を置き去りにしたくない。',
  ],

  programsHeading: 'Four formats',
  programsHeading_ja: '4つのプログラム',

  processHeading: 'How an engagement runs',
  processHeading_ja: '進め方',
  steps: [
    {
      title: 'Discovery and goal design',
      title_ja: 'ヒアリングと到達目標の設計',
      body: 'We agree on what participants should be able to do after the programme — not "AI literacy", but concrete tasks in their own work.',
      body_ja: '「AIリテラシー向上」ではなく、研修後に受講者が自分の業務で何をできるようになるかを、到達目標として合意します。',
    },
    {
      title: 'Pre-survey and quantitative analysis',
      title_ja: '事前アンケートと定量分析',
      body: 'A short pre-survey is scored into a composite index that drives group composition and exercise difficulty. In the latest programme the response rate was 100% and the tiering held at 94% agreement under even weighting.',
      body_ja: '事前アンケートを合成スコア化し、グループ編成と演習の難易度に反映します。直近の研修では回答率100%、均等重みでもティア一致94%の頑健な分類を設計しました。',
    },
    {
      title: 'Curriculum and materials on your use cases',
      title_ja: '自社ユースケースでのカリキュラム・教材制作',
      body: 'Exercises are written on your tasks, tools and policies. Materials are produced in your brand template; for the latest programme that meant 14 exercise sets designed for 17–18 groups running in parallel.',
      body_ja: '演習は御社の業務・ツール・規程を題材に作ります。教材は御社のテンプレートで制作し、直近では同時進行17〜18グループを前提に演習教材14点を用意しました。',
    },
    {
      title: 'Delivery',
      title_ja: '実施',
      body: 'On-site, online or hybrid, in Japanese or English. Live demos on real cases instead of slideware; exercises are designed so participants experience where AI is wrong before they are told.',
      body_ja: '対面・オンライン・ハイブリッドのいずれでも、日本語・英語で実施します。座学ではなく実務デモと演習が中心で、AIの間違いを講義で聞く前に自分で体験する設計にします。',
    },
    {
      title: 'Follow-up and adoption',
      title_ja: 'フォローアップと定着',
      body: 'Slides, a prompt and template kit, and a question window after the sessions, so the programme changes Monday morning rather than ending on Friday.',
      body_ja: 'スライド、プロンプト・テンプレ集、研修後の質問窓口を用意し、研修翌週の仕事が実際に変わるところまで伴走します。',
    },
  ] satisfies Step[],

  evidenceHeading: 'Evidence',
  evidenceHeading_ja: '実績と事例',
  evidence: [
    { label: 'Webinar audiences', label_ja: 'ウェビナー受講者', value: '100+', value_ja: '100名以上' },
    { label: 'Corporate programme designed', label_ja: '企業研修の設計', value: '~70 engineers · 3 days · on-site', value_ja: 'エンジニア約70名・3日間・オンサイト' },
    { label: 'Exercise materials authored', label_ja: '制作した演習教材', value: '14', value_ja: '14点' },
    { label: 'Bootcamp mentees', label_ja: 'ブートキャンプ伴走', value: '18 graduates · 100% completion', value_ja: '卒業生18名・完遂率100%' },
    { label: 'Global delivery background', label_ja: 'グローバル経験', value: 'PM across 6 European countries · ex-credit analyst in London', value_ja: '欧州6カ国のPM・ロンドンでのクレジットアナリスト' },
  ],
  caseStudyCta: 'Read the case study: Requirements Definition with Generative AI',
  caseStudyCta_ja: 'ケーススタディを読む：生成AIによる要件定義研修',
  articleCta: 'Field notes: how the programme was designed',
  articleCta_ja: '設計の裏側を読む：AIを教える研修を、AIで作った話',

  faqHeading: 'Frequently asked questions',
  faqHeading_ja: 'よくある質問',
  faq: [
    {
      q: 'How many participants can you handle?',
      q_ja: '何名まで対応できますか？',
      a: 'Webinars have been delivered to audiences of 100+. Hands-on workshops work best with small to mid-sized groups. The most recent custom corporate programme was designed for about 70 engineers over three days, split into 17–18 groups running in parallel.',
      a_ja: 'ウェビナーは受講者100名以上の登壇実績があります。ハンズオン研修は少〜中人数が適しています。直近の企業向けカスタム研修は、エンジニア約70名・3日間を17〜18グループの同時進行で設計しました。',
    },
    {
      q: 'Can the training be delivered in English?',
      q_ja: '英語で実施できますか？',
      a: 'Yes. Every format is available in Japanese or English with the same curriculum. I worked as a credit analyst in London and led a data modernisation programme across six European countries, so mixed Japanese and international teams are the normal case, not an exception.',
      a_ja: 'できます。すべての形式を日本語・英語のどちらでも、同一のカリキュラムで提供します。ロンドンでのクレジットアナリスト経験と、欧州6カ国のデータ近代化プログラムをリードした経験があり、日本人と海外メンバーの混成チームは通常のケースです。',
    },
    {
      q: 'On-site, online or hybrid?',
      q_ja: '対面・オンライン・ハイブリッドのどれに対応していますか？',
      a: 'All three. I am based in Kanagawa, Japan and deliver on-site programmes nationwide; online sessions are held for teams in Japan and overseas. Webinar recordings can be provided on request.',
      a_ja: 'すべて対応しています。神奈川県を拠点に国内のオンサイト研修に対応し、オンラインは国内外のチーム向けに実施します。ウェビナーは録画提供も可能です。',
    },
    {
      q: 'How long is a programme?',
      q_ja: '研修の期間はどのくらいですか？',
      a: 'Webinars run 60–90 minutes. The foundations workshop is a half day (about three hours). Custom corporate programmes are scoped per engagement, from a single session to a multi-day series; the latest was three days on-site. One-on-one mentoring is available as a single session or a series.',
      a_ja: 'ウェビナーは60〜90分、基礎研修は半日（約3時間）です。企業向けカスタム研修は単発から複数日のシリーズまで案件ごとに設計し、直近は3日間のオンサイトでした。個人メンタリングは単発〜複数回で組みます。',
    },
    {
      q: 'Is it suitable for non-engineers?',
      q_ja: '非エンジニアでも受講できますか？',
      a: 'Yes. The webinar and foundations workshop are built for business teams, and a custom programme is tuned to the participants: a pre-survey measures the starting level and drives group composition and exercise difficulty so that nobody is left behind.',
      a_ja: 'できます。ウェビナーと基礎研修は業務チーム向けに設計しています。カスタム研修では事前アンケートで受講者の現在地を測り、グループ編成と演習の難易度に反映するので、できない層を置き去りにしません。',
    },
    {
      q: 'Do you cover safe use and data handling?',
      q_ja: '安全な使い方や情報の取り扱いも扱いますか？',
      a: 'Yes. Safe-use and data-handling essentials are part of the foundations workshop, and a custom programme is designed around your own policies. Exercises are also built so participants experience AI being confidently wrong, because a warning in a lecture does not change behaviour.',
      a_ja: '扱います。基礎研修に安全な使い方・情報の取り扱いの勘所を含め、カスタム研修は御社の規程に合わせて設計します。AIの過信は講義で注意しても直らないため、AIが自信をもって間違える場面を演習で体験する構成にしています。',
    },
    {
      q: 'What do participants take away?',
      q_ja: '受講後に持ち帰れるものはありますか？',
      a: 'The slides, a curated link pack for webinars, and a prompt and template kit for workshops. For custom programmes the exercise materials are produced in your own template so they can be reused internally.',
      a_ja: 'ウェビナーは当日スライドと参考リンク集、研修はプロンプト・テンプレ集を共有します。カスタム研修の演習教材は御社のテンプレートで制作するので、社内でそのまま再利用できます。',
    },
    {
      q: 'Can you work through a training company?',
      q_ja: '研修会社経由での依頼は可能ですか？',
      a: 'Yes. The latest corporate programme was contracted through a training provider, with me responsible for the survey analysis, curriculum design and materials build.',
      a_ja: '可能です。直近の企業研修は研修事業会社を通じた受託で、事前アンケートの分析、カリキュラム設計、教材制作を担当しました。',
    },
    {
      q: 'How is pricing decided?',
      q_ja: '費用はどのように決まりますか？',
      a: 'By scale, number of days and how much of the material is custom-built on your use cases. Send the format, headcount and target dates through the contact form and I will reply within 24 hours with a proposal.',
      a_ja: '規模・日数・教材のカスタマイズ度で見積もります。形式・人数・希望時期をお問い合わせフォームからお送りいただければ、24時間以内に提案をご返信します。',
    },
  ] satisfies FaqItem[],

  contactHeading: 'Discuss a programme',
  contactHeading_ja: '研修を相談する',
  contactBody:
    'Tell me the format, headcount, language and target dates. I reply within 24 hours.',
  contactBody_ja:
    '形式・人数・言語・希望時期をお知らせください。24時間以内にご返信します。',
};
