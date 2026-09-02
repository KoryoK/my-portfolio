import { posts } from '@/data/blog';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { trainingPrograms } from '@/data/training';
import { works } from '@/data/works';
import { SITE_URL, AUTHOR, urlFor } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * llms.txt — a plain-text map of the site for AI crawlers and answer engines.
 * Generated from the same data as the pages, so it never drifts.
 */
export function GET() {
  const lines = [
    `# ${AUTHOR.name} (${AUTHOR.nameJa})`,
    '',
    '> フリーランスの生成AIエンジニア・データアナリスト・研修講師。LLM/RAG/Difyの開発実装、データ分析、業務自動化、PM・アプリ開発、企業向け生成AI研修と個人メンタリング。日英バイリンガル（ロンドンの外資系金融出身、欧州6カ国のデータ近代化プログラムPM）。神奈川県拠点、リモート対応可。',
    '',
    '> Freelance generative-AI engineer, data analyst and trainer. Builds LLM/RAG/Dify systems, analytics and workflow automation; designs and delivers corporate GenAI training. Bilingual JA/EN, based in Kanagawa, Japan and available for remote work.',
    '',
    `Site: ${SITE_URL}`,
    `English: ${urlFor('en')}`,
    '',
    '## Services',
    ...services.map((s) => `- ${s.title} / ${s.title_ja}: ${s.tagline}`),
    '',
    '## Training programmes',
    ...trainingPrograms.map((p) => `- ${p.title} / ${p.title_ja}: ${p.tagline} (${p.audience}, ${p.duration})`),
    '',
    '## Experience',
    ...works.map((w) => `- ${w.period} — ${w.title} (${w.category}): ${w.tagline}`),
    '',
    '## Articles',
    ...posts.map((p) => `- [${p.title}](${urlFor('ja', `blog/${p.slug}`)}) — ${p.date}, ${p.category}. ${p.excerpt}`),
    '',
    '## Projects',
    ...projects.map((p) => `- [${p.title}](${urlFor('ja', `projects/${p.slug}`)}) — ${p.tags.join(', ')}. ${p.description}`),
    '',
    '## Contact',
    `- ${AUTHOR.links.x}`,
    `- ${AUTHOR.links.linkedin}`,
    `- ${AUTHOR.links.github}`,
    `- ${AUTHOR.links.note}`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
