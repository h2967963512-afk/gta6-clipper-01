# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/h2967963512-afk/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/h2967963512-afk/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical Short cut from Rockstar's official "Grand Theft Auto VI: An Extended Look" (26:48, captured entirely in-game on PlayStation 5): the convenience-store robbery and getaway — masked Lucia and Jason hit a store (Jason vaults the counter, Lucia covers the door with her pistol, wanted stars on the HUD), then the high-speed getaway drive through Vice City with the GPS minimap counting down. The clip is reframed, re-graded and tightly cut for vertical, with on-screen captions, and ends on a make.fun pitch card: make clips like this with AI and earn money on make.fun.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

- **Moment**: the store robbery and getaway in the Extended Look — one continuous story beat, not a montage. Robbery 12:02.5–12:09 (Jason vaults the counter, Lucia aims at the door, gameplay HUD visible), getaway drive 12:31–13:04 (continuous gameplay shot, minimap counting down 0.74 → 0.41 mi), then an 8-second make.fun end card. Total 44.5 seconds.
- **Cut**: vertical 9:16 (720x1280), under 60 seconds, rendered with ffmpeg in the session that built this repository. Robbery: moving vertical crop panning across the action. Getaway: blur-fill full frame (so the minimap and HUD stay visible) with a slow zoom-punch 1.00→1.10x and the whole drive sped up 1.1x. Both: colour-grade shift (saturation 1.18, contrast 1.06, warm tint), on-screen captions ("6 STARS. ONE GETAWAY DRIVER." / "THEY TOOK THE MONEY." / "NOW OUTRUN VICE CITY."), original game audio fading out into the end card, and a make.fun end card with the ghost mascot, the bounty page and the play code. The rooftop dialogue interlude (12:15–12:31) was cut entirely.
- **Pitch**: the last seconds of the clip tell the viewer they can make money on make.fun by making cool clips with AI, and show make.fun/bounty/gta6-clipper-01.
- **Source**: Rockstar Games' official footage only — the Extended Look as Rockstar publishes it for download on rockstargames.com/VI/media/videos. No third-party clip, no finished edit reused.

## The video

The Short is published public on YouTube (Mr. Orange) with this line in its description, word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the entry's play code. `VIDEO.json` names the video's address; places go by the video's views at the deadline, most first.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do.
