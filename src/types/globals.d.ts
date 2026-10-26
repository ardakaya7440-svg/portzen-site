export {};

declare global {
  interface Window {
    /** Meta (Facebook) Pixel global fonksiyonu — MetaPixel bileşeni yükler. */
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}
