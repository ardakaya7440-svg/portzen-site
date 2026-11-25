import path from "node:path";
import { defineConfig } from "vitest/config";

/**
 * Hafif birim/entegrasyon testleri (Mac'te çalışır; Docker veya `next build` gerektirmez).
 * Veritabanı: bellekte PGlite (gerçek Neon'a ASLA bağlanılmaz). Next önbelleği tests/mocks/next-cache.ts ile taklit edilir.
 */
export default defineConfig({
  resolve: {
    alias: [
      { find: /^@\/(.*)$/, replacement: path.resolve(import.meta.dirname, "src/$1") },
      { find: "server-only", replacement: path.resolve(import.meta.dirname, "tests/mocks/server-only.ts") },
      { find: "next/cache", replacement: path.resolve(import.meta.dirname, "tests/mocks/next-cache.ts") }
    ]
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.{ts,tsx}"],
    testTimeout: 120_000,
    hookTimeout: 120_000,
    env: {
      PORTZEN_ALLOW_LOCAL_DB: "1",
      PGLITE_DIR: "memory://fiyat-testi",
      PORTZEN_DATABASE_URL: "",
      NEXT_PUBLIC_SITE_ENV: "production"
    },
    // PGlite tek süreçli: dosyalar sırayla, aynı iş parçacığında çalışsın
    fileParallelism: false
  }
});
