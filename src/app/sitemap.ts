import type { MetadataRoute } from 'next';
import { posts } from '@/data/blog';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/casestudies';
import { urlFor } from '@/lib/site';

/**
 * Data-driven sitemap: adding an entry to src/data/*.ts publishes its URL automatically.
 * Japanese is canonical; each entry carries hreflang alternates for the English mirror.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, opts: Partial<MetadataRoute.Sitemap[number]> = {}) => ({
    url: urlFor('ja', path),
    alternates: {
      languages: {
        ja: urlFor('ja', path),
        en: urlFor('en', path),
        'x-default': urlFor('ja', path),
      },
    },
    ...opts,
  });

  const latestPost = posts
    .map((p) => p.date)
    .sort()
    .at(-1);

  return [
    entry('', { priority: 1, changeFrequency: 'monthly', lastModified: latestPost }),
    entry('blog', { priority: 0.9, changeFrequency: 'weekly', lastModified: latestPost }),
    ...posts.map((p) =>
      entry(`blog/${p.slug}`, { priority: 0.8, changeFrequency: 'yearly', lastModified: p.date }),
    ),
    ...caseStudies.map((s) =>
      entry(`case-studies/${s.slug}`, { priority: 0.9, changeFrequency: 'monthly' }),
    ),
    entry('projects', { priority: 0.9, changeFrequency: 'monthly' }),
    ...projects.map((p) => entry(`projects/${p.slug}`, { priority: 0.7, changeFrequency: 'yearly' })),
  ];
}
