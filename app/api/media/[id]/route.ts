import { getMedia } from "@/server/media";

export const runtime = "nodejs";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const m = await getMedia(params.id);
  if (!m) return new Response("Bulunamadı", { status: 404 });
  return new Response(Buffer.from(m.bytes), {
    headers: {
      "Content-Type": m.mime,
      "Content-Length": String(m.size),
      // Kimlik değişmez: dosya değiştirildiğinde yeni kimlik oluşur. CDN 1 gün tutar (silinen dosyalar en geç 1 günde düşer).
      "Cache-Control": "public, max-age=31536000, s-maxage=86400, immutable",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; sandbox"
    }
  });
}
