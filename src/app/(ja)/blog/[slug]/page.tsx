import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageChrome from '@/components/PageChrome';
import ArticleView from '@/components/views/ArticleView';
import JsonLd from '@/components/JsonLd';
import { articleGraph, breadcrumb } from '@/lib/jsonld';
import { articleMetadata } from '@/lib/metadata';
import { posts } from '@/data/blog';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return articleMetadata(slug, 'ja');
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageChrome lang="ja">
      <JsonLd data={articleGraph(post, 'ja')} />
      <JsonLd
        data={breadcrumb('ja', [
          { name: 'ホーム', path: '' },
          { name: 'ブログ', path: 'blog' },
          { name: post.title_ja, path: `blog/${post.slug}` },
        ])}
      />
      <ArticleView post={post} lang="ja" />
    </PageChrome>
  );
}
