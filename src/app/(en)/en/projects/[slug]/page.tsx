import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageChrome from '@/components/PageChrome';
import ProjectView from '@/components/views/ProjectView';
import JsonLd from '@/components/JsonLd';
import { projectGraph, breadcrumb } from '@/lib/jsonld';
import { projectMetadata } from '@/lib/metadata';
import { projects } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return projectMetadata(slug, 'en');
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <PageChrome lang="en">
      <JsonLd data={projectGraph(project, 'en')} />
      <JsonLd
        data={breadcrumb('en', [
          { name: 'Home', path: '' },
          { name: 'Showcase', path: 'projects' },
          { name: project.title, path: `projects/${project.slug}` },
        ])}
      />
      <ProjectView project={project} lang="en" />
    </PageChrome>
  );
}
