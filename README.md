# gta6-clipper-01 — round 2: GTA 6 4-star shootout getaway

A fresh clip made from scratch in this session for make.fun bounty
`gta6-clipper-01` ($500, top 20 places share it, ranked by the YouTube
video's views at the deadline, 2026-11-23 09:00 CST). Round 1 was submitted
and rejected on a transcript pricing issue, so this is a new video of a
different moment, cut and rendered again from the source in this session.

## The clip

**Moment:** a 4-star police shootout and getaway drive, **14:03–14:51** in
Rockstar's official "Grand Theft Auto VI: An Extended Look" (26:48, in-game
PS5 footage). A masked crew member trades fire with police on a Vice City
street while a helicopter circles overhead and a police SUV flips; the crew
then escapes in a black sedan, Lucia driving with a red bandana mask and
Jason riding shotgun, into a parking garage.

**Why this moment:** it opens on the most spectacular two seconds — the
police SUV mid-flip under the helicopter — then never lets up: sustained
street gunfire, then a tense in-car escape. The wanted stars and Lucia's
masked drive read instantly as "GTA 6 wanted level", even with the sound
off. It is a different moment from round 1 (the convenience-store robbery
12:02–13:04): no store, no robbery — an open-street gunfight and escape.

**Hook and text:** the clip opens on the flipping SUV with the caption
"4 STARS. NO WAY OUT."; as the getaway begins the caption
"LUCIA TAKES THE WHEEL" appears. The last 7 seconds are a custom end card
with the make.fun ghost mascot and the pitch: "Make clips like this with AI
and earn money on make.fun", `make.fun/bounty/gta6-clipper-01`, and the play
code `makefun-hiker-dune-anvil`.

**Title:** GTA 6 4-Star Shootout Ends in the Wildest Getaway #Shorts

## Cut and dedup transforms

Source used: only `source/GTAVI_An_Extended_Look.mp4` (Rockstar official).
No other footage.

- Trimmed 14:03–14:51 (48 s) and sped the action up 1.1x (video `setpts`,
  audio `atempo`), giving 43.7 s of gameplay.
- Colour-grade shift: saturation 1.15, contrast 1.08.
- Vertical 9:16 (720x1280): the 16:9 frame is shown sharp over a blurred,
  darkened full-frame fill of itself, so the HUD (wanted stars, minimap)
  stays visible instead of being cropped away.
- Slow zoom-punch on the gameplay (zoompan, 1.00x to 1.09x across the clip).
- Burned-in captions ("4 STARS. NO WAY OUT.", "LUCIA TAKES THE WHEEL").
- Original game audio kept, fading out over the last 1.5 s into the end card.
- End card (7 s): dark background, make.fun ghost mascot, pitch text,
  bounty page and play code, silent audio.
- Rendered file: `gta6-4star-shootout-short.mp4` — 720x1280, 30 fps,
  50.7 s total, ~18 MB. Verified by length/size and by viewing extracted
  frames (hook, getaway, end card).

Render commands are in `render2.sh` (pass 1 cut the 720p gameplay segment
`gameplay_720.mp4`; pass 2 built the vertical clip `v_game.mp4`, the end
card `v_end.mp4`, and concatenated them).

## The video (YouTube)

The Short will be published **public** on the Mr. Orange channel
(`https://www.youtube.com/@MrOrange520`) with the title above and this
description, word for word on the first line, plus the play code on its own
line:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
    makefun-hiker-dune-anvil

`VIDEO.json` still holds the placeholder
`{"url": "https://www.youtube.com/shorts/<id>"}` — it will be replaced with
the real Short's address once the video is uploaded, then `main.ts` will be
re-tested and the repo committed and pushed. The video stays public until
the results are out.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
Node 22, standard library only.
