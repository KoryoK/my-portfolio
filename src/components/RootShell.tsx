import Script from 'next/script';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import type { Lang } from '@/lib/i18n';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const GA_ID = 'G-DQCBQ179F3';

/**
 * Shared <html>/<body> for both language roots. Each root layout supplies its own
 * `lang` so the document language matches the content.
 */
export default function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${inter.variable} ${notoSansJp.variable}`}>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
