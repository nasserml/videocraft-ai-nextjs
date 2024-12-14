"use client";
import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";

function RemotionComposition({ frameList }) {
  const {width, height} = useVideoConfig();
  let trackFrame = 0;
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {frameList.map((frame, index) => {
        const fromFrame = index == 0 ? 0 : trackFrame;
        trackFrame = trackFrame + frame.duration * 30;
        const duration = frame.duration * 30;

        return (
          <Sequence key={index} from={fromFrame} durationInFrames={duration} >
            <h2 style={{ color: "white" }}>
              <AbsoluteFill style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: width,
                height: height
                
              }}  >
                <h2>{frame.text}</h2>

              </AbsoluteFill>
            </h2>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}

export default RemotionComposition;
