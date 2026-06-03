import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

let totalOriginal = 0;
let totalConverted = 0;
let count = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (!EXTENSIONS.has(ext)) continue;

      const webpPath = full.replace(ext, ".webp");

      const { size: origSize } = await stat(full);
      totalOriginal += origSize;

      try {
        await sharp(full)
          .webp({ quality: 85 })
          .toFile(webpPath);
      } catch {
        console.error(`  Failed: ${full}`);
        continue;
      }

      const { size: newSize } = await stat(webpPath);
      totalConverted += newSize;
      count++;

      const pct = Math.round((newSize / origSize) * 100);
      console.log(`  ${entry.name} -> ${origSize}B → ${newSize}B (${pct}%)`);
    }
  }
}

console.log("Converting images to WebP...\n");
await walk(PUBLIC);

if (count === 0) {
  console.log("No images to convert.");
} else {
  const saved = totalOriginal - totalConverted;
  const pct = Math.round((saved / totalOriginal) * 100);
  console.log(
    `\nDone. ${count} images: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB → ${(totalConverted / 1024 / 1024).toFixed(2)} MB (${pct}% smaller)`,
  );
}
