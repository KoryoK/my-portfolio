/**
 * note.com articles listed on the Japanese blog index. Japanese only: the articles
 * themselves are Japanese, so the English edition links to the note profile instead.
 * Paid articles carry `price`; blog posts that already carry a `link` are not repeated here.
 */
export interface NoteEntry {
  key: string; // note.com/brainy_phlox8948/n/<key>
  title_ja: string;
  date: string; // ISO YYYY-MM-DD, publish date on note
  summary_ja: string;
  /** JPY, only for paid articles; the page labels them so readers know before clicking. */
  price?: number;
}

export const noteUrl = (key: string) => `https://note.com/brainy_phlox8948/n/${key}`;

export const notes: NoteEntry[] = [
  {
    key: 'nab5ec9e5d93e',
    title_ja: 'ChatGPT Dotsと進めた固定費の見直し。Supabase ProからFreeに切り替えた記録',
    date: '2026-10-24',
    summary_ja: '月約38ドルの請求を確認し、バックアップと復元の試験を経てFreeへ切り替えた記録。SQL全体の復元は失敗し、公開4表に絞って成功した。長期の安定性と追加費用は未確認。',
  },
  {
    key: 'n7d8443e1bebc',
    title_ja: 'メールをAIで予定に変えてみた。訂正・仮の終了時刻・締切で残った確認作業',
    date: '2026-10-21',
    summary_ja: 'メールから予定とタスクの候補を拾う確認アプリを、架空メール6通で検証した。Googleへの実登録は未検証。',
  },
  {
    key: 'nf46bea7fc21b',
    title_ja: 'AIに自動投稿させる前に、公開承認をGoogleスプレッドシートで二重ロックした理由',
    date: '2026-10-16',
    summary_ja: '記事の自動投稿の前に止める場所を決め、公開承認を二重にロックする設計を書いた。設計までで、自動投稿は未検証。',
  },
  {
    key: 'n80dab41e2a90',
    title_ja: 'Claudeのトークンが切れても、仕事は止めない――AIの引き継ぎを3つの記録ファイルで作った話',
    date: '2026-10-13',
    summary_ja: 'Obsidian、Claude Code、Codexで、AIの作業を引き継ぐための3つの記録ファイルを作った話。',
    price: 500,
  },
  {
    key: 'n460a3b89ab14',
    title_ja: '検索できたのに答えが違う――RAGの検索結果・LLMへの入力・回答を同じ実行で並べて確かめる',
    date: '2026-10-07',
    summary_ja: 'Difyで、RAGの回答がずれた原因を検索・LLMへの入力・回答の三つに切り分ける方法とチェックキット。',
  },
  {
    key: 'n30de18315ccd',
    title_ja: '答えは合っているのに根拠番号が違う――RAGを12問で試した記録とチェックキット',
    date: '2026-10-06',
    summary_ja: 'Difyで作ったRAGを12問で試し、答えと根拠番号のずれを確かめた記録とキット。',
  },
  {
    key: 'nb8b769ea88ea',
    title_ja: 'Claude for Excelに10個の転記ミスを仕込んで検証した。全件見つけても「自動修正」させなかった理由',
    date: '2026-10-02',
    summary_ja: 'Excelに仕込んだ10個の転記ミスをClaudeが見つけられるかを検証し、自動修正させなかった理由を書いた。',
  },
  {
    key: 'nb5badddf287b',
    title_ja: '【記入例＋動くツール】「このExcel作業を自動化して」を9項目の整理シートに変えて、そのとおりに集計ツールを作った',
    date: '2026-09-17',
    summary_ja: '自動化の依頼を9項目の整理シートに落とし込み、その内容どおりに集計ツールを作った。',
  },
  {
    key: 'nb3c3b08a4cc5',
    title_ja: '「AIは間違う」で終わらせない――配って使えるAI回答検証ワークと講師用解答・チェックリスト',
    date: '2026-09-12',
    summary_ja: '研修で配って使える、AI回答の検証ワークと、講師用の解答・チェックリスト。',
    price: 300,
  },
  {
    key: 'n2ad8c38c3478',
    title_ja: '生成AI研修では「正しい答えを出す練習」より「間違いを見抜く練習」を入れた方がいい',
    date: '2026-09-10',
    summary_ja: '生成AI研修の現場から、間違いを見抜く練習を入れる理由。',
  },
  {
    key: 'n27439fa0307b',
    title_ja: '一番怖いのは、AIを使えない人ではなく「信じすぎる人」だった',
    date: '2026-09-08',
    summary_ja: '生成AI研修の現場から、プロンプト研修だけでは足りない理由。',
  },
  {
    key: 'nfd823e29086a',
    title_ja: '毎月の名簿確認、変更された人だけ見たい――ブラウザで動くCSV比較ツールを作る',
    date: '2026-09-07',
    summary_ja: 'HTMLとJavaScriptで、前月との差分だけを確認できるCSV比較ツールを作った。',
  },
];
