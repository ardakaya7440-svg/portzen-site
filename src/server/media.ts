import "server-only";
import { randomUUID } from "node:crypto";
import sharp from "sharp";
import { getDb } from "./db";

/**
 * Yüklenen dosyaları doğrular, görselleri optimize eder ve veritabanında (bytea) kalıcı saklar.
 * Dosya türü uzantıya/başlığa değil, içeriğin ilk baytlarına göre belirlenir.
 * Sunum: /api/media/<id> (değişmez içerik, uzun önbellek).
 */
export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024; // Vercel sunucu fonksiyonu istek sınırı ~4,5 MB

export type MediaPurpose = "logo" | "avatar" | "photo";

const BOX: Record<MediaPurpose, { w: number; h: number }> = {
  logo: { w: 800, h: 320 },
  avatar: { w: 400, h: 400 },
  photo: { w: 1800, h: 1800 }
};

type Sniffed = { kind: "image"; format: "jpeg" | "png" | "webp" | "gif" | "svg" } | { kind: "video"; mime: "video/mp4" | "video/webm" } | null;

function sniff(buf: Buffer): Sniffed {
  if (buf.length < 12) return null;
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return { kind: "image", format: "jpeg" };
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return { kind: "image", format: "png" };
  if (buf.subarray(0, 4).toString("latin1") === "RIFF" && buf.subarray(8, 12).toString("latin1") === "WEBP") return { kind: "image", format: "webp" };
  if (buf.subarray(0, 6).toString("latin1") === "GIF87a" || buf.subarray(0, 6).toString("latin1") === "GIF89a") return { kind: "image", format: "gif" };
  if (buf.subarray(4, 8).toString("latin1") === "ftyp") {
    // Yalnızca MP4 markaları (HEIC/AVIF/MOV gibi ISO-BMFF türleri reddedilir)
    const brand = buf.subarray(8, 12).toString("latin1");
    if (["isom", "iso2", "iso4", "iso5", "iso6", "mp41", "mp42", "avc1", "M4V ", "dash", "mmp4"].includes(brand)) return { kind: "video", mime: "video/mp4" };
    return null;
  }
  if (buf[0] === 0x1a && buf[1] === 0x45 && buf[2] === 0xdf && buf[3] === 0xa3) return { kind: "video", mime: "video/webm" };
  const head = buf.subarray(0, 1024).toString("utf8").trimStart().toLowerCase();
  if ((head.startsWith("<svg") || (head.startsWith("<?xml") && head.includes("<svg"))) && buf.length < 2 * 1024 * 1024) {
    return { kind: "image", format: "svg" };
  }
  return null;
}

export class UploadError extends Error {}

/** Dosyayı doğrular, işler ve kaydeder; media id döner. */
export async function storeUpload(file: File, purpose: MediaPurpose, opts: { allowVideo?: boolean } = {}): Promise<string> {
  if (!file || typeof file.arrayBuffer !== "function" || file.size === 0) throw new UploadError("Dosya seçilmedi.");
  if (file.size > MAX_UPLOAD_BYTES) throw new UploadError(`Dosya en fazla ${MAX_UPLOAD_BYTES / 1024 / 1024} MB olabilir.`);
  const input = Buffer.from(await file.arrayBuffer());
  const type = sniff(input);
  if (!type) throw new UploadError("Desteklenmeyen dosya türü. JPG, PNG, WebP, GIF, SVG veya (izin verilen alanlarda) MP4/WebM yükleyin.");

  const db = await getDb();
  const id = randomUUID();

  if (type.kind === "video") {
    if (!opts.allowVideo) throw new UploadError("Bu alana yalnızca görsel yüklenebilir.");
    await db.query(
      `insert into media (id, kind, mime, bytes, size, original_name) values ($1, 'video', $2, $3, $4, $5)`,
      [id, type.mime, input, input.length, file.name.slice(0, 200)]
    );
    return id;
  }

  // SVG: betik çalıştırma riskine karşı saklanmaz; yüksek çözünürlükte rasterleştirilir.
  const box = BOX[purpose];
  let img = sharp(input, { density: type.format === "svg" ? 300 : undefined, limitInputPixels: 50_000_000, animated: false });
  const meta = await img.metadata();
  if (!meta.width || !meta.height) throw new UploadError("Görsel okunamadı.");
  img = img.rotate().resize({ width: box.w, height: box.h, fit: "inside", withoutEnlargement: type.format !== "svg" });
  const { data, info } = await img
    .webp({ quality: purpose === "logo" ? 90 : 82, alphaQuality: 100, effort: 4 })
    .toBuffer({ resolveWithObject: true });

  await db.query(
    `insert into media (id, kind, mime, bytes, width, height, size, original_name) values ($1, 'image', 'image/webp', $2, $3, $4, $5, $6)`,
    [id, data, info.width, info.height, data.length, file.name.slice(0, 200)]
  );
  return id;
}

export async function getMedia(id: string) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const db = await getDb();
  const r = await db.query<{ mime: string; bytes: Uint8Array; size: number }>(`select mime, bytes, size from media where id = $1`, [id]);
  return r.rows[0] ?? null;
}

export const mediaUrl = (id: string | null | undefined) => (id ? `/api/media/${id}` : null);

/** Hiçbir kayıtta kullanılmayan medyayı siler (logo/görsel değiştirildiğinde veya kayıt kaldırıldığında). */
export async function deleteMediaIfOrphan(id: string | null | undefined) {
  if (!id) return;
  const db = await getDb();
  await db.query(
    `delete from media m where m.id = $1
       and not exists (select 1 from brands where logo_id = m.id)
       and not exists (select 1 from testimonials where avatar_id = m.id)
       and not exists (select 1 from works where cover_media_id = m.id)
       and not exists (select 1 from work_media where media_id = m.id)`,
    [id]
  );
}
