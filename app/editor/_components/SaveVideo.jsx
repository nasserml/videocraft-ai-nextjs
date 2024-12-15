"use client";
import { VideoFrameContext } from "@/app/_context/VideoFrameContext";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { toast } from "sonner";

function SaveVideo() {
  const { videoid } = useParams();
  const { videoFrames, setVideoFrames } = useContext(VideoFrameContext);

  useEffect(() => {
    videoid && GetVideoData();
  }, [videoid]);

  const saveVideo = async () => {
    const result = await axios.put("/api/video", {
      videoId: videoid,
      videoData: videoFrames,
    });
    console.log(result.data);
    toast("Video saved successfully");
  };

  const GetVideoData = async () => {
    const result = await axios.get("/api/video?videoId=" + videoid);
    setVideoFrames(result.data.videoData);
  };

  return (
    <div>
      <Button variant={"outline"} onClick={() => saveVideo()}>
        Save
      </Button>
    </div>
  );
}

export default SaveVideo;
