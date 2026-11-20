# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/h2967963512-afk/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/h2967963512-afk/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical Short cut from Rockstar's official "Grand Theft Auto VI: An Extended Look" (26:48, captured entirely in-game on PlayStation 5): the bank-heist getaway — Lucia driving through Vice City at a six-star wanted level while Jason leans out of the back seat firing at police cars. The clip is reframed, re-graded and tightly cut for vertical, with on-screen captions, and ends on a make.fun pitch card: make clips like this with AI and earn money on make.fun.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

- **Moment**: the getaway chase after the bank heist in the Extended Look — one continuous moment, not a montage.
- **Cut**: vertical 9:16 (720x1280), under 60 seconds, rendered with ffmpeg in the session that built this repository: moving vertical crop, colour-grade shift, tight pacing cuts, on-screen captions, and a make.fun end card with the ghost mascot.
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
