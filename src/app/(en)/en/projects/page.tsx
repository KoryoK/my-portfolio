import type { Metadata } from 'next';
import PageChrome from '@/components/PageChrome';
import ProjectsIndexView from '@/components/views/ProjectsIndexView';
import JsonLd from '@/components/JsonLd';
import { breadcrumb } from '@/lib/jsonld';
import { alternatesFor } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Showcase',
  description: 'Apps and automation pipelines built with Next.js, React Native, Python and GAS — from a multi-tenant SaaS to headless browser automation, with the design decisions included.',
  alternates: alternatesFor('projects', 'en'),
};

export default function Page() {
  return (
    <PageChrome lang="en">
      <JsonLd data={breadcrumb('en', [{ name: 'Home', path: '' }, { name: 'Showcase', path: 'projects' }])} />
      <ProjectsIndexView lang="en" />
    </PageChrome>
  );
}
