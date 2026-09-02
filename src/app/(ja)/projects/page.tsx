import type { Metadata } from 'next';
import PageChrome from '@/components/PageChrome';
import ProjectsIndexView from '@/components/views/ProjectsIndexView';
import JsonLd from '@/components/JsonLd';
import { breadcrumb } from '@/lib/jsonld';
import { alternatesFor } from '@/lib/site';

export const metadata: Metadata = {
  title: '開発実績',
  description: 'Next.js・React Native・Python・GASで作ったアプリと自動化パイプライン。マルチテナントSaaSからブラウザ自動化まで、設計判断とスタックを公開しています。',
  alternates: alternatesFor('projects', 'ja'),
};

export default function Page() {
  return (
    <PageChrome lang="ja">
      <JsonLd data={breadcrumb('ja', [{ name: 'ホーム', path: '' }, { name: '開発実績', path: 'projects' }])} />
      <ProjectsIndexView lang="ja" />
    </PageChrome>
  );
}
