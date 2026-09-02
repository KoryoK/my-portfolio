import type { Metadata } from 'next';
import PageChrome from '@/components/PageChrome';
import BlogIndexView from '@/components/views/BlogIndexView';
import JsonLd from '@/components/JsonLd';
import { breadcrumb } from '@/lib/jsonld';
import { alternatesFor } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Build logs on GenAI training design, analytics, and workflow automation — the reasoning behind the decisions, not just the steps.',
  alternates: alternatesFor('blog', 'en'),
};

export default function Page() {
  return (
    <PageChrome lang="en">
      <JsonLd data={breadcrumb('en', [{ name: 'Home', path: '' }, { name: 'Journal', path: 'blog' }])} />
      <BlogIndexView lang="en" />
    </PageChrome>
  );
}
