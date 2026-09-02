import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageChrome from '@/components/PageChrome';
import CaseStudyView from '@/components/views/CaseStudyView';
import JsonLd from '@/components/JsonLd';
import { caseStudyGraph, breadcrumb } from '@/lib/jsonld';
import { caseStudyMetadata } from '@/lib/metadata';
import { caseStudies } from '@/data/casestudies';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return caseStudyMetadata(slug, 'en');
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <PageChrome lang="en">
      <JsonLd data={caseStudyGraph(study, 'en')} />
      <JsonLd
        data={breadcrumb('en', [
          { name: 'Home', path: '' },
          { name: 'Case study', path: `case-studies/${study.slug}` },
        ])}
      />
      <CaseStudyView study={study} lang="en" />
    </PageChrome>
  );
}
