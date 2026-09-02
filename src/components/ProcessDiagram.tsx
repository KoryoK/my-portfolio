import type { Lang } from '@/lib/i18n';

const DAYS = {
  ja: [
    { day: 'DAY 1', phase: '現状把握', items: ['場面の書き出し', '問いリスト', 'AI調査メモ'], out: '確かめたい仮説 3つ' },
    { day: 'DAY 2', phase: '課題発見', items: ['課題仮説', '質問リスト', 'ヒアリングRP'], out: '検証済みの課題' },
    { day: 'DAY 3', phase: '要件化', items: ['要件定義書', '試作で検証', 'Copilot 実践'], out: '上流工程を通しで体験' },
  ],
  en: [
    { day: 'DAY 1', phase: 'Understand', items: ['Map the situation', 'List the questions', 'AI research notes'], out: '3 hypotheses to test' },
    { day: 'DAY 2', phase: 'Find the problem', items: ['Problem hypothesis', 'Question list', 'Interview role-play'], out: 'A validated problem' },
    { day: 'DAY 3', phase: 'Specify', items: ['Requirements document', 'Validate with a prototype', 'Copilot in practice'], out: 'Upstream, end to end' },
  ],
} as const;

const LABEL = {
  ja: { output: '成果物', caption: '前日の成果物が翌日の入力になる、一本のライン' },
  en: { output: 'Output', caption: 'One line: each day’s output is the next day’s input' },
} as const;

const BOX_W = 260;
const GAP = 55;
const X = [20, 20 + BOX_W + GAP, 20 + (BOX_W + GAP) * 2];

/** The three-day flow. Inline SVG with real text nodes — searchable, themeable, no baked-in bitmap text. */
export default function ProcessDiagram({ lang }: { lang: Lang }) {
  const days = DAYS[lang];
  const l = LABEL[lang];

  // Breaks out past the article column on large screens so the diagram fits; scrolls below that.
  return (
    <figure className="mt-8 -mx-6 md:-mx-12 lg:-mx-24 overflow-x-auto">
      <div className="min-w-[820px] lg:min-w-0 px-6 md:px-12 lg:px-0">
        <svg
          viewBox="0 0 955 300"
          className="w-full h-auto"
          role="img"
          aria-label={l.caption}
          fontFamily="var(--font-sans, sans-serif)"
        >
          {days.map((d, i) => (
            <g key={d.day}>
              <rect x={X[i]} y={20} width={BOX_W} height={230} rx="4" fill="#141414" stroke={i === 2 ? '#2563eb' : '#2e3340'} strokeWidth={i === 2 ? 2 : 1.5} />
              <text x={X[i] + 22} y={54} fill="#2563eb" fontSize="13" letterSpacing="3" fontWeight="600">{d.day}</text>
              <text x={X[i] + 22} y={86} fill="#e8ecf2" fontSize="21" fontWeight="700">{d.phase}</text>
              <line x1={X[i] + 22} y1={104} x2={X[i] + BOX_W - 22} y2={104} stroke="#2e3340" strokeWidth="1.5" />
              {d.items.map((it, j) => (
                <text key={it} x={X[i] + 22} y={136 + j * 28} fill="#c8cfda" fontSize="14">▸  {it}</text>
              ))}
              <line x1={X[i] + 22} y1={210} x2={X[i] + BOX_W - 22} y2={210} stroke="#2e3340" strokeWidth="1.5" />
              <text x={X[i] + 22} y={230} fill="#8b93a3" fontSize="11" letterSpacing="2">{l.output.toUpperCase()}</text>
              <text x={X[i] + 22} y={247} fill="#e8ecf2" fontSize="14" fontWeight="600">{d.out}</text>
            </g>
          ))}

          {[0, 1].map((i) => {
            const x = X[i] + BOX_W;
            return (
              <g key={i}>
                <path d={`M${x + 8} 135 L${x + GAP - 14} 135`} stroke="#2563eb" strokeWidth="2" fill="none" />
                <path d={`M${x + GAP - 6} 135 l-9 -5 v10 z`} fill="#2563eb" />
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-3 px-6 md:px-12 lg:px-0 text-xs text-text-muted">{l.caption}</figcaption>
    </figure>
  );
}
