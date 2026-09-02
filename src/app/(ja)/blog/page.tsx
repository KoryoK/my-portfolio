import type { Metadata } from 'next';
import PageChrome from '@/components/PageChrome';
import BlogIndexView from '@/components/views/BlogIndexView';
import JsonLd from '@/components/JsonLd';
import { breadcrumb } from '@/lib/jsonld';
import { alternatesFor } from '@/lib/site';

export const metadata: Metadata = {
  title: 'ブログ',
  description: '生成AI研修の設計、データ分析、業務自動化の実践記録。手順よりも「なぜそう設計したか」を書いています。',
  alternates: alternatesFor('blog', 'ja'),
};

export default function Page() {
  return (
    <PageChrome lang="ja">
      <JsonLd data={breadcrumb('ja', [{ name: 'ホーム', path: '' }, { name: 'ブログ', path: 'blog' }])} />
      <BlogIndexView lang="ja" />
    </PageChrome>
  );
}
