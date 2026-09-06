# note-system v0.2 試運転：市場調査・記事候補レポート

作成日: 2026-09-06 ／ ステータス: **確認待ち（執筆・投稿・定期実行は未実施）**

---

## 0. 前提と制約（先に読んでください）

| 項目 | 状態 |
| --- | --- |
| `outputs/note-system/README.md` | **未読**。指定パス（`/Users/kaka/Documents/Codex/...`）はローカルMac上にあり、このリモート環境（`my-portfolio` リポジトリのみ）からは到達できない。Google Drive / Notion にも同名ファイルは見つからなかった |
| 「提供資料」 | 同上で未読。本レポートの「本人経験」はポートフォリオリポジトリ `src/data/*.ts` の公開情報のみを根拠にしている |
| note.com の実測値（スキ数・PV） | ネットワーク制限で note.com への直接アクセスが遮断されており、既存2記事の反応は**未確認** |
| 需要の根拠 | Web検索結果（検索スニペット）と、Makeコミュニティ等のフォーラム質問。個別ページの本文精読は多くがブロックされたため、根拠の粒度は「検索で確認できた範囲」 |

→ 上記3点（README・提供資料・note実測値）を受け取れば、v0.2の判定を更新できます。

---

## 1. 確認済みの本人経験・資産（リポジトリ由来）

| 資産 | 内容（確認済みの事実） | 記事化の材料としての強さ |
| --- | --- | --- |
| **Difyメンター** (2025/04〜) | ブートキャンプで LLM・RAG・Dify を指導。卒業生18名・完遂率100%。ウェビナー100名以上 | ◎ 「学習者が実際にどこで止まるか」を18人分見ている。競合（ベンダー記事）が持たない視点 |
| **Make×Notion×Claude 音声仕分け** | Soundcore Work → Make → Claude分類 → Notion。初版は重複増殖、**Processed Log DBで冪等性**を確保して再設計。月数百円運用。note記事・Makeシナリオ公開済み | ◎ 「失敗→再設計」の一次情報がある。既存note記事の続編が組める |
| **生成AI要件定義研修 設計** (2026/06〜、9月実施) | 約70名・3日間。事前アンケート5指標→重み付き合成スコア→ティア別編成。均等重みでも一致94%。演習14点。PPTX-XMLパイプライン＋LibreOffice/pdftoppm QA | ◎ 定量的なグループ編成手法は検索上ほぼ空白。ただし**受託案件のため匿名化必須** |
| **Playwright 定期自動化** | 公開APIなしのレガシーポータル。祝日対応スケジューラ、HMAC検証付きLINE Webhook、失敗時スクショ、LINE+メール二重通知。約5,700行 | ○ 「放置して安全な自動化の運用設計」として差別化可能 |
| **GAS自動化** (EdTech) | 4時間→3分。他12件 | △ 事実は強いが、詳細が公開情報にない。ジャンルはベンダー記事で飽和 |
| **Tableau小売分析／欧州6カ国PM／英国信用分析** | 実績あり | △ 守秘・匿名化のハードルが高く、noteの3ニッチと読者層が離れる |
| **既存note記事 2本** | 音声→Notion第二の脳 ／ Unbias JD | 反応は未確認（要提供） |

---

## 2. 選定した3ニッチ

| # | ニッチ | 想定読者 | 選定理由 | 主な落選ニッチ |
| --- | --- | --- | --- | --- |
| N1 | **Dify／RAG で「デモは動くが使われない」を越えられない学習者・小規模導入者** | Dify学習中の個人、社内で1人でPoCを回す担当者 | 検索需要が3ニッチ中最大。競合は多いがほぼベンダー／コンサル視点で、「学習者側が止まる順番」を語る記事が見当たらない | — |
| N2 | **個人〜小チームのノーコード自動化を「事故らせない」設計** | Make／n8n／GAS で自作自動化を回している個人 | Makeコミュニティで「Notionに重複ができる」質問が繰り返し立つ（未解決課題の直接証拠）。日本語記事は「できること紹介」に偏り、冪等性を扱うものが検索上見当たらない | GAS効率化一般（ベンダー記事で飽和） |
| N3 | **生成AI研修を「設計する側」の実務** | 社内研修担当、フリーランス講師、L&D | 「研修が定着しない理由」記事は多数あるが、**事前アンケートの定量スコアリング→編成**、**答えを教えない演習設計**を扱う記事が検索でゼロ。読者は少数だが課題が具体的で反応が濃いと予想 | Tableau・PM・信用分析（守秘＋読者層乖離） |

---

## 3. 記事候補の比較（採用／保留／見送り）

凡例: ◎採用 ○保留（第2陣） ✕見送り

| ID | 候補タイトル案 | 読者の課題 | 需要の根拠 | 競合との差 | 自分が提供できる価値 | 判定・理由 |
| --- | --- | --- | --- | --- | --- | --- |
| **A3** (N2) | Make×Notion自動化で「同じ項目が増殖する」を止める：Processed Log による冪等設計 | 再実行・二重起動でNotionに重複が作られる。フィルタで凌いでいるが根本解決していない | Makeコミュニティに同種スレッドが複数（"Avoid Notion duplicates" ×2、"stop duplicate Notion database items when referring to a Data Store"、"Scenario running twice" 等）。n8nコミュニティにも同課題。日本語検索では冪等・重複防止を扱う記事が見つからない | 日本語競合は「MakeでNotionを自動化できる？」型の入門・事例紹介。本候補は**失敗した初版→再設計の一次体験**と「確認→未処理だけ通す→分岐末尾でログ」の順序という具体設計を提示 | 実装済みシナリオ（公開中）とnote既存記事があり、続編として書ける。Data Store方式との比較も可能 | **◎ 採用・最優先**。未解決課題の証拠が最も直接的。既存記事との導線で小規模でも反応が取りやすい |
| **A5** (N3) | 70名研修のグループ分けを「勘」でやめた：事前アンケート5指標を重み付きスコアにしてティア編成した手順 | 受講者のレベル差で演習が崩れる。編成根拠を説明できない | 「研修 事前アンケート スコアリング レベル分け」で検索しても、出てくるのは**研修後アンケートのテンプレ**と一般的な班分けTipsのみ。定量編成の手順記事は確認できず | 競合実質なし。「均等重みでも94%一致」「境界バンドを明示ラベル」という頑健性チェックまで示せる記事は他にない | 実施済みの手順・数値がある。匿名化（企業名・受講者属性）を前提にすれば書ける | **◎ 採用**。読者は少数だが研修担当・講師の未解決課題に直撃。小規模で強い反応の典型。ケーススタディ（ポートフォリオ）との相互リンクも自然 |
| **A1** (N1) | 18人のDify学習を伴走して見えた「止まる順番」：デモは動くのに使われない理由 | RAGの精度が出ない、変数が空になる、型選びで作り直し…個別Tipsは読んだが「自分がどの段階で詰まっているか」が分からない | Dify RAG精度・変数・挫折ポイントの記事が検索上位に多数（市川淳「RAG精度 改善10選」、Saiteki AI「変数のハマりどころ」、programming-mondai「挫折しやすいポイント」、Takayuki Sase「型選びで作り直し」）＝需要は確立。「導入したが誰も使っていない」系の失敗記事も複数 | 競合はベンダー／コンサル／講座販促。**学習者18名を継続観察した側**からの「つまずきの順序と、抜けた人が何を変えたか」は未提供 | 一次観察に基づく順序モデル＋各段階の最小の打ち手 | **◎ 採用（3本目）**。需要は最大だが競合も最多なので、個別Tipsを書かず「順序」に絞る。受講生の特定を避ける匿名化が必須 |
| **A7** (N3) | ブランドテンプレを壊さずに演習資料14点を作る：python-pptxをやめてPPTX-XMLを直接編集した理由と視覚QA | python-pptxで生成するとテンプレのレイアウト・フォントが崩れる | Zenn「Claude Codeでパワポ100枚を30分」、Insight Edge「AIにデザインさせるのをやめた」、Aurant 等で需要は確認。「テンプレート設計が鍵」まではどの記事も言う | 競合は python-pptx＋テンプレ設計まで。**unpack→lxml→repack＋LibreOffice/pdftoppmで差分QA**という一段下のレイヤーを扱う記事は見当たらない | 実運用したパイプラインの構成と、崩れを検出するQA手順 | **○ 保留（第2陣）**。差別化は明確だが読者がエンジニア寄りでnoteよりZennが適地の可能性。A5の反応を見て判断 |
| **A4** (N2) | 放置しても安全な自動化：LINE Webhookの署名検証・祝日スキップ・失敗時スクショの運用設計 | 自作の定期自動化が黙って壊れる／Webhookが無防備 | Playwright＋LINE通知、ログインスキップの記事は複数存在（Hina Works、insyo、koふみ）。LINE公式も2026/06に署名検証Tipsを再掲＝未実装者が多い示唆 | 競合は「動かす」まで。**「黙っている自動化は壊れているのと区別がつかない」という運用側の設計**（二重通知・証跡・HMAC）が差分。LINE Notify終了後の移行需要も見込める（要確認） | 5,700行の実運用コードから設計判断を抽出できる | **○ 保留**。A3の次のN2記事として有力。LINE Notify終了時期の事実確認が先 |
| A2 (N1) | Dify入門：型選び・変数・チャンク設定の解説 | 基本操作が分からない | 検索需要は大 | **競合が既に十分**（WEEL完全ガイド、Saiteki AI図解、Dify公式Docs日本語） | 一次情報の優位性なし | **✕ 見送り**。差別化不可、本人経験の強みが出ない |
| A6 (N3) | 「答えを教えない演習」の設計法 | 演習が模範解答の写経になる | 研修定着記事は多いが演習設計論は少ない | 差別化は可能 | 14演習の設計思想 | **✕ 今回は見送り（A5に統合）**。単独では抽象化が難しく、A5の後編として扱う方が根拠を出しやすい |
| A8 | GAS自動化で4時間→3分にした話 | 手作業が減らない | 需要はあるが、HELP YOU・GXO・BOOSTX 等ベンダー記事で「事例○選」が飽和 | 数字は強いが、公開できる詳細が薄い | — | **✕ 見送り**。差別化材料が公開情報になく、ジャンルが飽和 |
| A9 | Soundcore Work 実機レビュー | 製品選び | 製品レビュー記事は多数。Notion側も音声アップロード＋AI要約を標準搭載し、状況が動いている | 一時的な製品トレンド | — | **✕ 見送り**。「一時的バズ・製品ネタを主軸にしない」方針に反する |
| A10 | Unbias JD（求人票の偏り検出）の続報 | 採用文面の偏り | HR領域で3ニッチと読者が重ならない。既にnote公開済み | — | — | **✕ 今回のニッチ外** |

---

## 4. 推奨する初回3本と順序

| 順 | 記事 | 推奨理由 | 執筆前に必要な確認 |
| --- | --- | --- | --- |
| 1 | **A3 冪等設計（Make×Notion）** | 未解決課題の直接証拠が最も強く、公開済みシナリオ・既存記事に導線がある。noteの2026年2月レコメンド刷新（記事内容ベースで配信、公式発表あり）とも相性が良い | 既存記事「音声→Notion」のスキ数・流入元 |
| 2 | **A5 事前アンケート定量編成** | 競合ゼロの空白。読者は少数でも研修担当・講師に刺さる。ケーススタディ記事（9/1公開）と相互リンク可 | 研修事業会社との守秘範囲（数値・指標名をどこまで出せるか） |
| 3 | **A1 Dify「止まる順番」** | 需要最大。ただし競合最多なので「順序モデル」に絞る | ブートキャンプ側の守秘範囲、受講生の匿名化方針 |
| 予備 | A7 → A4 | 上記3本の反応を見て第2陣 | A4はLINE Notify終了時期の事実確認 |

---

## 5. 根拠として参照した主なソース

**noteプラットフォーム動向**
- note株式会社「レコメンドエンジンの刷新で閲覧数が大幅増！『書けば、届く』を実現するnoteへ」 https://note.jp/n/nce2c203cc6fb
- note公式「記事をおすすめするしくみをリニューアルしました」 https://note.com/info/n/n42bd663f422a

**N1 Dify／RAG**
- 市川淳「Difyの“うまくいかない”を潰す：RAG精度が上がる改善ポイント10選」 https://note.com/jun_ichikawa/n/n2e7bcc50af07
- programming-mondai「Dify学習で挫折しやすいポイント」 https://programming-mondai.com/dify-zasetsu/
- Saiteki AI「Difyの変数を完全理解…ハマりどころ」 https://saiteki-ai.com/basics/ai-tool/dify/dify-variable/
- Takayuki Sase「Dify初心者の9割が失敗 型選び」 https://note.com/takayuki_sase/n/n09e180198828
- サモテク「Dify導入で失敗する人の共通点」 https://samoyed-tech.com/ai-rescue-dify-failure/
- Elcamy「Difyで失敗しないための完全ガイド」 https://www.elcamy.com/blog/Dify_failurecase

**N2 自動化の冪等性・運用**
- Make Community: Avoid Notion duplicates https://community.make.com/t/avoid-notion-duplicates/37086
- Make Community: Avoid Notion duplicates in a database https://community.make.com/t/avoid-notion-duplicates-in-a-database/59960
- Make Community: How to stop duplicate Notion database items when referring to a Data Store https://community.make.com/t/how-to-stop-duplicate-notion-database-items-when-referring-to-a-data-store/53213
- Make Community: Scenario running twice https://community.make.com/t/scenario-running-twice/1408
- n8n Community: How to Avoid Duplicate Notion https://community.n8n.io/t/how-to-avoid-duplicate-notion/77783
- 榊京介「MakeでNotionを自動化できる？できないことと実務向け事例」 https://note.com/kyosukesakaki/n/nccb87e90d3d7
- LINE Developers「Messaging APIのWebhookの署名を検証しよう」(2026/06/18) https://developers.line.biz/ja/tips/2026/06/18/verify-webhook-signature/
- Hina Works「Playwrightでスクリーンショットを自動撮影してLINE通知」 https://note.com/hinaworks/n/nd52f0e768d56

**N3 研修設計・資料生成**
- N2i「生成AI研修を実施したのに現場で使われない理由」 https://blog.n2i.jp/entry/2026/06/05/060142
- Uravation「生成AI研修が『役に立たない』本当の理由」 https://uravation.com/media/ai-training-failure-diagnosis-2026/
- ssplace「研修・ワークショップのグループ分け」 https://ssplace.com/2026/08/12/group-division-workshop-guide/
- Zenn「Claude Codeでパワポ100枚を30分で作った方法」 https://zenn.dev/michey0495/articles/claude-code-pptx-100slides
- Insight Edge「PowerPoint自動生成でAIにデザインさせるのをやめた」 https://techblog.insightedge.jp/entry/powerpoint-auto-generation

**飽和判定に使ったもの（N2落選のGAS）**
- HELP YOU「GASで業務効率化 事例8選」 https://help-you.me/blog/gas-gyoumukouritsuka-jirei/
- GXO「GASスプレッドシート自動化ガイド2026」 https://gxo.co.jp/column/gas-spreadsheet-automation-guide

---

## 6. 次のステップ（あなたの確認後）

1. README.md と提供資料の共有（リポジトリに置くか、内容を貼り付け）→ 判定を更新
2. 既存note 2記事のスキ数・ビュー・流入元 → A3の優先度の裏取り
3. 守秘範囲の確認（研修事業会社／ブートキャンプ）→ A5・A1の書ける粒度を確定
4. 上記が揃ったら A3 から執筆に着手（**この時点まで執筆・投稿・定期実行登録は行いません**）
