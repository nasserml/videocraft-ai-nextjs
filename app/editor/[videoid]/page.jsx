"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/app/dashboard/_components/Header";
import TrackList from "../_components/TrackList";
import RemotionPlayer from "../_components/RemotionPlayer";
import SaveVideo from "../_components/SaveVideo";
import FrameConfig from "../_components/FrameConfig";
import axios from "axios";
import { useParams } from "next/navigation";
function Editor() {
  const downloadInProgress = useRef(false);

  const { videoid } = useParams();
  const onDownloadClick = async () => {
    if (downloadInProgress.current) {
      console.log("Download already in progress");
      return;
    }
    downloadInProgress.current = true;

    try {
      const response = await axios.post("/api/render", {
        videoId: videoid,
      });

      const { output } = response.data;

      const link = document.createElement("a");
      link.href = output;
      link.download = `video-${videoid}.mp4`;
      link.click();
    } catch (error) {
      console.error("Error rendering video:", error);
    } finally {
      downloadInProgress.current = false;
    }
  };
  return (
    <div>
      <Header />

      <div className="p-10 md:px-24 lg:px-32">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Edit Video</h2>
          <div className="flex gap-5">
            <SaveVideo />

            <Button onClick={onDownloadClick}>Export</Button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-7 mt-7">
          <div>
            <TrackList />
          </div>

          <div className="col-span-3">
            <RemotionPlayer />
          </div>

          <div className="col-span-2">
            <FrameConfig />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
