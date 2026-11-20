// GTA 6 6-Star Getaway — gta6-clipper-01 entry
// The clip: Rockstar's "Grand Theft Auto VI: An Extended Look" cut into a 44.5 s
// vertical (720x1280) Short — convenience-store robbery 12:02.5-12:09, then one
// continuous getaway drive 12:31-13:04 (minimap 0.74 -> 0.41 mi). Dedup transforms
// applied so it is not a plain re-upload: moving vertical crop on the robbery,
// blur-fill + slow zoom 1.00 -> 1.10x on the chase, chase sped 1.1x, colour grade
// (sat 1.18, contrast 1.06, warm tint), burned-in captions, and an 8 s custom end
// card with the make.fun ghost, the bounty pitch and play code makefun-hiker-dune-anvil.
// Published as a public Short at https://www.youtube.com/shorts/kLGqEEhdAbQ
// (title "GTA 6 6-Star Getaway: Rob the Store, Outrun Vice City #Shorts").
// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Validate the video address before copying: the house only counts a public
// YouTube Short, so refuse anything that is not a youtube.com/shorts/ URL.
const video = JSON.parse(readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8')) as { url?: unknown };
if (typeof video.url !== 'string' || !video.url.startsWith('https://www.youtube.com/shorts/')) {
  console.error(
    `VIDEO.json does not name a YouTube Shorts URL (got: ${JSON.stringify(video.url)}); refusing to copy.`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
