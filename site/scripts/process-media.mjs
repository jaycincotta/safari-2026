import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'src', 'media', 'source');
const outputRoot = path.join(rootDir, 'public', 'media', 'optimized');
const cacheDir = path.join(rootDir, '.media-cache');
const manifestPath = path.join(cacheDir, 'manifest.json');

const optimizationProfile = {
  jpegQuality: 78,
  webpQuality: 72,
  webpEffort: 4,
};

async function readLibrary() {
  const raw = await readFile(path.join(rootDir, 'src', 'data', 'media-library.json'), 'utf8');
  return JSON.parse(raw);
}

async function readManifest() {
  try {
    const raw = await readFile(manifestPath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeManifest(manifest) {
  await mkdir(cacheDir, { recursive: true });
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
}

async function fileIsCurrent(filePath, sourceMtimeMs) {
  try {
    const fileStats = await stat(filePath);
    return fileStats.mtimeMs >= sourceMtimeMs;
  } catch {
    return false;
  }
}

function buildFingerprint(item, sourceStats) {
  return JSON.stringify({
    sourceMtimeMs: sourceStats.mtimeMs,
    widths: item.widths,
    defaultWidth: item.defaultWidth,
    crop: item.crop ?? null,
    optimizationProfile,
  });
}

async function createBasePipeline(item, sourcePath) {
  if (!item.crop) {
    return sharp(sourcePath);
  }

  const sourceImage = sharp(sourcePath);
  const metadata = await sourceImage.metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error(`Unable to read dimensions for ${item.source}`);
  }

  const left = Math.max(0, Math.min(metadata.width - 1, Math.floor(metadata.width * item.crop.left)));
  const top = Math.max(0, Math.min(metadata.height - 1, Math.floor(metadata.height * item.crop.top)));
  const width = Math.max(1, Math.min(metadata.width - left, Math.floor(metadata.width * item.crop.width)));
  const height = Math.max(1, Math.min(metadata.height - top, Math.floor(metadata.height * item.crop.height)));

  return sharp(sourcePath).extract({ left, top, width, height });
}

async function optimizeItem(item, manifest) {
  const sourcePath = path.join(sourceDir, item.source);
  const sourceStats = await stat(sourcePath);
  const outputDir = path.join(outputRoot, item.slug);
  const widths = item.widths;
  const baseName = path.parse(item.source).name;
  const fingerprint = buildFingerprint(item, sourceStats);
  const previousFingerprint = manifest[item.slug]?.fingerprint;
  let didOptimize = false;
  const basePipeline = await createBasePipeline(item, sourcePath);

  await mkdir(outputDir, { recursive: true });

  for (const width of widths) {
    const jpgTarget = path.join(outputDir, `${baseName}-${width}.jpg`);
    const webpTarget = path.join(outputDir, `${baseName}-${width}.webp`);
    const outputsCurrent =
      previousFingerprint === fingerprint &&
      (await fileIsCurrent(jpgTarget, sourceStats.mtimeMs)) &&
      (await fileIsCurrent(webpTarget, sourceStats.mtimeMs));

    if (outputsCurrent) {
      continue;
    }

    didOptimize = true;

    const resized = basePipeline.clone().resize({
      width,
      withoutEnlargement: true,
      fit: 'inside',
    });

    await resized
      .clone()
      .jpeg({ quality: optimizationProfile.jpegQuality, mozjpeg: true })
      .toFile(jpgTarget);

    await resized
      .clone()
      .webp({ quality: optimizationProfile.webpQuality, effort: optimizationProfile.webpEffort })
      .toFile(webpTarget);
  }

  manifest[item.slug] = {
    fingerprint,
    updatedAt: new Date().toISOString(),
  };

  return didOptimize;
}

async function main() {
  const library = await readLibrary();
  const manifest = await readManifest();
  let optimizedCount = 0;
  let skippedCount = 0;
  await mkdir(outputRoot, { recursive: true });

  for (const item of library) {
    const didOptimize = await optimizeItem(item, manifest);
    if (didOptimize) {
      optimizedCount += 1;
    } else {
      skippedCount += 1;
    }
  }

  await writeManifest(manifest);
  console.log(`Media optimize: ${optimizedCount} updated, ${skippedCount} skipped.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
