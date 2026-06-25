import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const MANIFEST_PATH = join(__dirname, '.optimize-manifest.json');
const QUALITY = 80;
const EXTENSIONS = ['.png', '.jpg', '.jpeg'];

const SCAN_DIRS = [
  join(ROOT, 'public/images/uploads'),
  join(ROOT, 'src/assets'),
];

function loadManifest() {
  if (existsSync(MANIFEST_PATH)) {
    return JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
  }
  return {};
}

function getFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => EXTENSIONS.includes(extname(f).toLowerCase()))
    .map((f) => join(dir, f));
}

const manifest = loadManifest();
let converted = 0;
let skipped = 0;

for (const dir of SCAN_DIRS) {
  for (const filePath of getFiles(dir)) {
    const mtime = statSync(filePath).mtimeMs;
    const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    if (manifest[filePath] === mtime && existsSync(webpPath)) {
      skipped++;
      continue;
    }

    execSync(`cwebp -q ${QUALITY} "${filePath}" -o "${webpPath}" -quiet`);
    manifest[filePath] = mtime;
    converted++;
    console.log(`✓ ${basename(filePath)} → ${basename(webpPath)}`);
  }
}

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
console.log(`\nDone: ${converted} converted, ${skipped} skipped`);
