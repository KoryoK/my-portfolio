import type { Metadata } from 'next';
import PageChrome from '@/components/PageChrome';
import TrainingView from '@/components/views/TrainingView';
import JsonLd from '@/components/JsonLd';
import { trainingGraph, breadcrumb } from '@/lib/jsonld';
import { trainingMetadata } from '@/lib/metadata';

export const metadata: Metadata = trainingMetadata('en');

export default function Page() {
  return (
    <PageChrome lang="en">
      <JsonLd data={trainingGraph('en')} />
      <JsonLd
        data={breadcrumb('en', [
          { name: 'Home', path: '' },
          { name: 'Corporate GenAI training', path: 'training' },
        ])}
      />
      <TrainingView lang="en" />
    </PageChrome>
  );
}
