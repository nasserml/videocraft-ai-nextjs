"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layers, LetterText, SwatchBook } from "lucide-react";
import TextArea from "./TextArea";
import SliderField from "./SliderField";
import DropDown from "./DropDown";
import ColorPickerField from "./ColorPickerField";
import BackgroundField from "./BackgroundField";
import { VideoFrameContext } from "@/app/_context/VideoFrameContext";

import { AnimationList, FontList } from "./../../_data/List";

function FrameConfig() {
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);
  const [frame, setFrame] = useState([]);

  useEffect(() => {
    if (videoFrames?.frameList) {
      setFrame(videoFrames.frameList[videoFrames?.selectedFrame]);
    }
  }, [videoFrames]);

  const handleInputChange = (field, value) => {
    setFrame((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  useEffect(() => {
    if (videoFrames?.frameList?.length > 0 && frame) {
      const frameList = videoFrames?.frameList;
      frameList[videoFrames?.selectedFrame] = frame;

      setVideoFrames((prev) => ({ ...prev, frameList: frameList }));
    }
  }, [frame]);

  return (
    <div className="rounded-lg p-3 bg-slate-800 border-b ">
      <Accordion type="single" collapsible>
        <AccordionItem value="text">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <LetterText />
              Text
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <TextArea
              frame={frame}
              handleInputChange={(value) => handleInputChange("text", value)}
            />
            {/* Duration drop down */}
            <DropDown
              defaultValue={+frame.duration}
              label={"Duration (in sec)"}
              handleInputChange={(value) =>
                handleInputChange("duration", value)
              }
              options={[1, 2, 3, 4, 5, 6, 7, 8, 10]}
            />

            {/* Font size select */}
            <SliderField
              label={"Font Size"}
              defaultValue={frame.fontSize}
              handleInputChange={(value) =>
                handleInputChange("fontSize", value)
              }
            />

            {/*Font Family */}
            <DropDown
              defaultValue={frame?.fontFamily}
              label={"fontFamily"}
              handleInputChange={(value) =>
                handleInputChange("fontFamily", value)
              }
              options={FontList}
            />

            {/* Text Color */}
            <ColorPickerField
              defaultColor={frame.textColor}
              handleInputChange={(value) =>
                handleInputChange("textColor", value)
              }
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="background">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <SwatchBook />
              Background
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <BackgroundField
              defaultValue={frame?.bgColor ?? "#000"}
              handleInputChange={(value) => handleInputChange("bgColor", value)}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="animation">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <Layers />
              Animation
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <DropDown
            defaultValue={frame?.animation}
              label={"Text Animation"}
              options={AnimationList}
              handleInputChange={(value) => handleInputChange("animation", value)}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FrameConfig;
