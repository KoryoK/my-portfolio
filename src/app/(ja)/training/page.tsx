import type { Metadata } from 'next';
import PageChrome from '@/components/PageChrome';
import TrainingView from '@/components/views/TrainingView';
import JsonLd from '@/components/JsonLd';
import { trainingGraph, breadcrumb } from '@/lib/jsonld';
import { trainingMetadata } from '@/lib/metadata';

export const metadata: Metadata = trainingMetadata('ja');

export default function Page() {
  return (
    <PageChrome lang="ja">
      <JsonLd data={trainingGraph('ja')} />
      <JsonLd
        data={breadcrumb('ja', [
          { name: 'ホーム', path: '' },
          { name: '企業向け生成AI研修', path: 'training' },
        ])}
      />
      <TrainingView lang="ja" />
    </PageChrome>
  );
}
