"use client";
import React, { useContext } from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import * as Bungee from "@remotion/google-fonts/Bungee";
import * as Anton from "@remotion/google-fonts/Anton";
import * as Parisienne from "@remotion/google-fonts/Parisienne";
import * as Pacifico from "@remotion/google-fonts/Pacifico";
import { TextAnimation } from "./../../_data/Animations";
import { VideoFrameContext } from "@/app/_context/VideoFrameContext";

function RemotionComposition({ frameList }) {
  const { width, height, fps } = useVideoConfig();
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);

  const currentFrame = useCurrentFrame();
  let trackFrame = 0;

  Bungee.loadFont();
  Anton.loadFont();
  Parisienne.loadFont();
  Pacifico.loadFont();

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {frameList.map((frame, index) => {
        const fromFrame = index == 0 ? 0 : trackFrame;
        // const fromFrame = index == 0 ? 0 : trackFrame;
        trackFrame = trackFrame + frame.duration * 30;
        const duration = frame.duration * 30;

        return (
          <Sequence
            key={index}
            from={fromFrame}
            durationInFrames={duration}
            style={{ background: frame.bgColor ?? "#000" }}
          >
            <AbsoluteFill>
              {frame?.sticker && (
                <img
                  src={frame?.sticker}
                  alt="emoji"
                  width={50}
                  height={50}
                  style={{
                    transform: `scale(${frame?.stickerSize}) translateX(${frame?.stickerPositionX}px) translateY(${frame?.stickerPositionY}px)`,
                  }}
                />
              )}
            </AbsoluteFill>
            <AbsoluteFill
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: frame?.fontFamily ?? "Bungee",
                width: width,
                height: height,
              }}
            >
              <h2
                style={{
                  transform: `${TextAnimation(
                    frame?.animation,
                    currentFrame,
                    fps,
                    fromFrame,
                    width,
                    height
                  )}`,
                  color: frame.textColor,
                  fontSize: frame.fontSize,
                }}
              >
                {frame.text}
              </h2>
            </AbsoluteFill>
          </Sequence>
        );
      })}

      {videoFrames?.music && (
        <Audio volume={0.5} src={staticFile(videoFrames?.music)} />
      )}
    </AbsoluteFill>
  );
}

export default RemotionComposition;
