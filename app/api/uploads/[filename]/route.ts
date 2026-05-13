import { NextResponse } from "next/server";

import { readUploadedImage } from "@/lib/uploads";

export const runtime = "nodejs";

type Props = {
  params: Promise<{ filename: string }>;
};

export async function GET(_: Request, { params }: Props) {
  const { filename } = await params;

  try {
    const file = await readUploadedImage(filename);

    return new NextResponse(file.buffer, {
      headers: {
        "Content-Type": file.contentType,
        "Content-Length": String(file.size),
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch {
    return NextResponse.json({ error: "Gorsel bulunamadi." }, { status: 404 });
  }
}
