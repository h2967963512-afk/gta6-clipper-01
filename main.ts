// gta6-clipper-01, round 2: this program hands the house the video's address.
// It reads VIDEO.json from the repository root, checks it names a
// youtube.com/shorts/ address, and copies it to /output/VIDEO.json, where the
// gate reads it. The clip itself is the entry; nothing here describes it.
//
// Local test (from this directory):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'VIDEO.json');

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(src, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const url = (parsed as { url?: unknown })?.url;
if (typeof url !== 'string' || !/^https:\/\/(www\.)?youtube\.com\/shorts\/[^/]+$/.test(url)) {
  console.error('VIDEO.json must name a youtube.com/shorts/ URL.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(src, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
