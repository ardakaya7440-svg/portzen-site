import { randomUUID } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";

const uploadDirectory = path.join(process.cwd(), "storage", "uploads");
const maxUploadBytes = 4.5 * 1024 * 1024;

const mimeToExtension: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/avif": ".avif",
  "image/gif": ".gif",
  "image/svg+xml": ".svg"
};

const extensionToMime: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".svg": "image/svg+xml"
};

export function isSupportedImageType(type: string) {
  return type in mimeToExtension;
}

export function isUsingBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function sanitizeFileName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
}

function resolveExtension(file: File) {
  const fromMime = mimeToExtension[file.type];

  if (fromMime) {
    return fromMime;
  }

  const ext = path.extname(file.name).toLowerCase();
  return extensionToMime[ext] ? ext : "";
}

export async function saveImageUpload(file: File) {
  if (!isSupportedImageType(file.type)) {
    throw new Error("Desteklenmeyen dosya turu. JPG, PNG, WEBP, AVIF, GIF veya SVG yukleyin.");
  }

  if (file.size > maxUploadBytes) {
    throw new Error("Dosya boyutu cok buyuk. Lutfen 4.5 MB altinda bir gorsel yukleyin.");
  }

  const extension = resolveExtension(file);

  if (!extension) {
    throw new Error("Dosya uzantisi algilanamadi.");
  }

  await mkdir(uploadDirectory, { recursive: true });

  const safeBase = sanitizeFileName(path.basename(file.name, path.extname(file.name))) || "cover-image";
  const filename = `${Date.now()}-${safeBase}-${randomUUID().slice(0, 8)}${extension}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  if (isUsingBlobStorage()) {
    const blob = await put(`blog-covers/${filename}`, buffer, {
      access: "public",
      contentType: file.type,
      addRandomSuffix: false
    });

    return {
      filename,
      url: blob.url
    };
  }

  const filePath = path.join(uploadDirectory, filename);
  await writeFile(filePath, buffer);

  return {
    filename,
    url: `/api/uploads/${filename}`
  };
}

export async function readUploadedImage(filename: string) {
  const safeName = path.basename(filename);
  const filePath = path.join(uploadDirectory, safeName);
  const [buffer, fileStats] = await Promise.all([readFile(filePath), stat(filePath)]);
  const contentType = extensionToMime[path.extname(safeName).toLowerCase()] || "application/octet-stream";

  return {
    buffer,
    contentType,
    size: fileStats.size
  };
}
