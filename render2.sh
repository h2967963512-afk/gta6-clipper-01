#!/bin/bash
# Round-2 render, run in this session. Gameplay already cut in pass 1
# (gameplay_720.mp4: 14:03-14:51 of the source, 1.1x, graded, 1280x720).
set -e
cd ~/workspace/makefun/entries/gta6-clipper-01
FONT=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf

# --- vertical gameplay: blur-fill background, slow zoom-punch foreground, captions ---
ffmpeg -v error -y -i gameplay_720.mp4 -filter_complex \
"[0:v]split[bg][fg]; \
[bg]scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,gblur=sigma=25,eq=brightness=-0.06[bg2]; \
[fg]zoompan=z='1+0.09*on/1310':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=720x405:fps=30[fg2]; \
[bg2][fg2]overlay=(W-w)/2:(H-h)/2[base]; \
[base]drawtext=fontfile=$FONT:text='4 STARS. NO WAY OUT.':fontsize=54:fontcolor=white:box=1:boxcolor=black@0.65:boxborderw=18:x=(w-text_w)/2:y=120:enable='between(t,0,4.5)',drawtext=fontfile=$FONT:text='LUCIA TAKES THE WHEEL':fontsize=44:fontcolor=white:box=1:boxcolor=black@0.65:boxborderw=16:x=(w-text_w)/2:y=1060:enable='between(t,31,35)'[v]" \
-map "[v]" -map 0:a -af "afade=t=out:st=42.1:d=1.5" \
-c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -r 30 -c:a aac -b:a 128k -ar 48000 v_game.mp4

# --- end card: 7s, ghost mascot + make.fun pitch ---
ffmpeg -v error -y -i makefun-ghost.png -f lavfi -i anullsrc=r=48000:cl=stereo -filter_complex \
"color=c=0x111122:s=720x1280:d=7[bg]; \
[0:v]scale=280:280[gh]; \
[bg][gh]overlay=(W-w)/2:110[bg2]; \
[bg2]drawtext=fontfile=$FONT:text='Make clips like this':fontsize=46:fontcolor=white:x=(w-text_w)/2:y=440,drawtext=fontfile=$FONT:text='with AI and earn money':fontsize=46:fontcolor=white:x=(w-text_w)/2:y=505,drawtext=fontfile=$FONT:text='on make.fun':fontsize=46:fontcolor=white:x=(w-text_w)/2:y=570,drawtext=fontfile=$FONT:text='make.fun/bounty/gta6-clipper-01':fontsize=32:fontcolor=#FFD23F:x=(w-text_w)/2:y=690,drawtext=fontfile=$FONT:text='Play code\:':fontsize=34:fontcolor=white:x=(w-text_w)/2:y=770,drawtext=fontfile=$FONT:text='makefun-hiker-dune-anvil':fontsize=40:fontcolor=#FFD23F:x=(w-text_w)/2:y=815,drawtext=fontfile=$FONT:text='\$500 bounty - top 20 share it':fontsize=28:fontcolor=#AAAAAA:x=(w-text_w)/2:y=930,fade=t=in:st=0:d=0.5[v]" \
-map "[v]" -map 1:a -t 7 -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -r 30 -c:a aac -b:a 128k -ar 48000 -shortest v_end.mp4

# --- concat ---
printf "file 'v_game.mp4'\nfile 'v_end.mp4'\n" > concat2.txt
ffmpeg -v error -y -f concat -safe 0 -i concat2.txt -c copy gta6-4star-shootout-short.mp4

ffprobe -v error -show_entries format=duration,size -show_entries stream=width,height,codec_name -of default=noprint_wrappers=1 gta6-4star-shootout-short.mp4
ls -lh gta6-4star-shootout-short.mp4 v_game.mp4 v_end.mp4
