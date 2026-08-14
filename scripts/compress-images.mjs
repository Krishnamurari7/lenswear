import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_EXT = /\.(jpe?g|png)$/i;
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 82;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (IMAGE_EXT.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function compressFile(filePath) {
  const outPath = filePath.replace(IMAGE_EXT, ".webp");
  const before = (await fs.stat(filePath)).size;

  const image = sharp(filePath);
  const meta = await image.metadata();

  let pipeline = image.rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(outPath);

  const after = (await fs.stat(outPath)).size;
  await fs.unlink(filePath);

  return { before, after, outPath };
}

async function main() {
  const files = await walk(PUBLIC_DIR);
  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;

  console.log(`Found ${files.length} images to compress...\n`);

  for (const file of files) {
    try {
      const { before, after, outPath } = await compressFile(file);
      totalBefore += before;
      totalAfter += after;
      converted += 1;
      const rel = path.relative(PUBLIC_DIR, outPath);
      const saved = ((1 - after / before) * 100).toFixed(1);
      console.log(
        `${rel}: ${formatBytes(before)} → ${formatBytes(after)} (${saved}% smaller)`
      );
    } catch (err) {
      console.error(`Failed: ${file}`, err.message);
    }
  }

  console.log("\n---");
  console.log(`Converted: ${converted}/${files.length}`);
  console.log(
    `Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}% saved)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
