import { ImageResponse } from 'next/og';
import { posts } from '@/data/blog';

export const alt = 'Koryo Kakinoki — Journal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/** Per-article OG card, so each post shares with its own title instead of one generic image. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0c0c0c',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 56, height: 4, background: '#2563eb' }} />
            <div style={{ color: '#2563eb', fontSize: 24, letterSpacing: 4, textTransform: 'uppercase' }}>
              {post?.category ?? 'Journal'}
            </div>
          </div>
          <div style={{ color: '#e8ecf2', fontSize: 62, fontWeight: 700, lineHeight: 1.2, letterSpacing: -1 }}>
            {post?.title_ja ?? 'Koryo Kakinoki'}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: '#8b93a3', fontSize: 26 }}>
            柿木滉亮 — Koryo Kakinoki
          </div>
          <div style={{ color: '#636a7a', fontSize: 24, letterSpacing: 2 }}>
            koryo-kakinoki.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
