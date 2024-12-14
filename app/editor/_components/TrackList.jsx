"use client";
import { VideoFrameContext } from "@/app/_context/VideoFrameContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const defaultFrame = {
  image: "/footage.png",
  text: "Hello World",
  textColor: "black",
  fontSize: 20,
  duration: 2,
};
function TrackList() {
  const [frameList, setFrameList] = useState([defaultFrame]);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);
  const addNewFrame = () => {
    setFrameList((prev) => [...prev, defaultFrame]);
  };

  const removeFrame = (indexToRemove) => {
    setFrameList((prev) =>
      prev.filter((item, index) => index !== indexToRemove)
    );
  };

  useEffect(() => {
    let totalDuration = 0;
    frameList.forEach((frame) => {
      totalDuration = totalDuration + frame.duration;
    });

    setVideoFrames({
      totalDuration: totalDuration,
      frameList: frameList,
      selectedFrame:selectedFrame
    });
  }, [frameList, selectedFrame]);
  return (
    <div className="p-5 bg-slate-900/60 rounded-xl">
      <div className="max-h-[60vh] overflow-y-scroll scrollbar-hide">
        {frameList.map((item, index) => (
          <div
            className={`relative flex flex-col items-center border-b p-2 rounded-lg gap-2 mt-3  cursor-pointer ${
              selectedFrame === index && "bg-blue-800/40 "
            }`}
            key={index}
            onClick={() => setSelectedFrame(index)}
          >
            <Image
              src={item.image}
              width={40}
              height={40}
              alt={item.text}
              className="w-full h-[40px] object-contain rounded-lg"
            />
            <h2 className="line-clamp-2 text-xs">{item.text}</h2>
            {selectedFrame == index && (
              <Trash2
                className="absolute top-2 right-2 text-red-500"
                onClick={() => removeFrame(index)}
              />
            )}
          </div>
        ))}
        <Button size={"sm"} className="mt-5 w-full" onClick={addNewFrame}>
          Add New Frame
        </Button>
      </div>
    </div>
  );
}

export default TrackList;
