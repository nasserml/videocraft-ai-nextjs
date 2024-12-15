"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Player } from "@remotion/player";
import RemotionComposition from "./RemotionComposition";
import { Fullscreen, Music } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VideoFrameContext } from "@/app/_context/VideoFrameContext";
import DropDown from "./DropDown";
import { MusicList } from "@/app/_data/List";

function RemotionPlayer() {
  const [screenSize, setScreenSize] = useState({
    width: 500,
    height: 300,
  });

  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoFrames?.selectedFrame) {
      let skipDuration = 0;
      for (let i = 0; i < videoFrames?.selectedFrame; i++) {
        skipDuration = skipDuration + videoFrames?.frameList[i].duration;
      }
      playerRef?.current?.seekTo(skipDuration * 30);
    }
  }, [videoFrames?.selectedFrame]);

  const handleInputChange = (field, value) => {
    setVideoFrames((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-center items-center w-full">
        {videoFrames?.totalDuration && (
          <Player
            ref={playerRef}
            component={RemotionComposition}
            durationInFrames={Number(videoFrames?.totalDuration * 30) || 120}
            compositionWidth={screenSize.width}
            compositionHeight={screenSize.height}
            fps={30}
            controls
            style={{
              borderRadius: "10px",
              width: "100%",
              height: "500px",
            }}
            inputProps={{
              frameList: videoFrames?.frameList,
            }}
          />
        )}
      </div>

      <div className="mt-5 flex gap-2 items-center w-full ">
        <div className="flex items-center gap-2 w-full ">
          <Fullscreen />
          <Select onValueChange={(value) => setScreenSize(JSON.parse(value))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="16:9" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={JSON.stringify({ width: 400, height: 400 })}>
                1:1
              </SelectItem>
              <SelectItem value={JSON.stringify({ width: 500, height: 300 })}>
                16:9
              </SelectItem>
              <SelectItem value={JSON.stringify({ width: 300, height: 500 })}>
                9:16
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 w-full">
          <Music />

          <div className="-mt-3">
            <DropDown
              defaultValue={videoFrames?.music}
              options={MusicList}
              handleInputChange={(value) => handleInputChange("music", value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemotionPlayer;
