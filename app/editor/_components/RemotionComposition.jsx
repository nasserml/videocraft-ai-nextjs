"use client";
import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import * as Bungee from "@remotion/google-fonts/Bungee";
import * as Anton from "@remotion/google-fonts/Anton";
import * as Parisienne from "@remotion/google-fonts/Parisienne";
import * as Pacifico from "@remotion/google-fonts/Pacifico";
import { TextAnimation } from "./../../_data/Animations";

function RemotionComposition({ frameList }) {
  const { width, height, fps } = useVideoConfig();
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
          <Sequence key={index} from={fromFrame} durationInFrames={duration}>
            <AbsoluteFill
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: frame?.fontFamily ?? "Bungee",
                width: width,
                height: height,
                background: frame.bgColor ?? "#000",
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
    </AbsoluteFill>
  );
}

export default RemotionComposition;
