declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** GA4 カスタムイベントを送信する。gtag 未ロード時は no-op。 */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  window.gtag?.('event', name, params);
}
