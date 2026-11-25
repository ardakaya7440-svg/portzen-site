/**
 * next/cache taklidi (yalnızca test): unstable_cache + etiketli geçersiz kılma davranışını bellekte uygular.
 * Gerçek Next'te aynı sözleşme geçerlidir: etiketli girdi updateTag/revalidateTag ile silinir, revalidate süresi dolunca yenilenir.
 */
import { vi } from "vitest";

interface Entry {
  value: unknown;
  tags: string[];
  expires: number;
}
const store = new Map<string, Entry>();

export const cacheCalls: { keys: string[]; tags: string[]; revalidate: number | false | undefined; hit: boolean }[] = [];

export function unstable_cache<A extends unknown[], R>(
  fn: (...a: A) => Promise<R>,
  keyParts: string[] = [],
  opts: { tags?: string[]; revalidate?: number | false } = {}
) {
  return async (...args: A): Promise<R> => {
    const key = `${keyParts.join("/")}|${JSON.stringify(args)}`;
    const e = store.get(key);
    if (e && e.expires > Date.now()) {
      cacheCalls.push({ keys: keyParts, tags: opts.tags ?? [], revalidate: opts.revalidate, hit: true });
      return e.value as R;
    }
    cacheCalls.push({ keys: keyParts, tags: opts.tags ?? [], revalidate: opts.revalidate, hit: false });
    const value = await fn(...args); // hata fırlatırsa girdi YAZILMAZ (Next ile aynı)
    store.set(key, {
      value,
      tags: opts.tags ?? [],
      expires: Date.now() + (typeof opts.revalidate === "number" ? opts.revalidate * 1000 : 365 * 86400_000)
    });
    return value;
  };
}

function expireTag(tag: string) {
  for (const [k, e] of store) if (e.tags.includes(tag)) store.delete(k);
}

export const updateTag = vi.fn((tag: string) => expireTag(tag));
export const revalidateTag = vi.fn((tag: string, _profile?: unknown) => expireTag(tag));
export const revalidatePath = vi.fn();

export function resetNextCache() {
  store.clear();
  cacheCalls.length = 0;
  updateTag.mockClear();
  revalidateTag.mockClear();
  revalidatePath.mockClear();
}
