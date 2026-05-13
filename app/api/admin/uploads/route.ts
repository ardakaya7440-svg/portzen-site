import { NextResponse } from "next/server";

import { getAdminSession } from "@/lib/auth";
import { saveImageUpload } from "@/lib/uploads";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Yetkisiz erisim." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Yuklenecek bir dosya secin." }, { status: 400 });
  }

  try {
    const uploaded = await saveImageUpload(file);

    return NextResponse.json(uploaded, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Gorsel yuklenemedi."
      },
      { status: 400 }
    );
  }
}
