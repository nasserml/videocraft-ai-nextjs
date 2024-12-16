"use client";
import React, { useState } from "react";
import Header from "../dashboard/_components/Header";
import { Textarea } from "@/components/ui/textarea";
import DropDown from "../editor/_components/DropDown";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import uuid4 from "uuid4";
import { Prompt } from "./../_data/Prompt";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

function CreateAiVideo() {
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  const DurationOption = Array.from({ length: 13 }, (_, index) => index * 5);

  const OnGenerateClick = async () => {
    setLoading(true);
    // Create New record to DB
    const videoId = uuid4();

    const result = await axios.post("/api/video", {
      videoId: videoId,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });

    // Generate Content for video using AI

    const PROMPT = Prompt.replace("{userTopic}", topic).replace(
      "{userDuration}",
      duration
    );
    const aiResult = await axios.post("/api/create-ai-content", {
      prompt: PROMPT,
      videoId: videoId,
    });
    setLoading(false);

    router.replace("/dashboard")
  };
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center px-10 md:px-32 lg:px-48 mt-24">
        <h2 className="font-bold text-3xl">Generate Video Content</h2>
        <div className="w-full max-w-xl mt-7">
          <label>Topic:</label>
          <Textarea
            className="w-full"
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="w-full max-w-xl mt-7">
          <label>Select Duration of Video(In Seconds):</label>
          <DropDown
            defaultValue={0}
            handleInputChange={(value) => setDuration(value)}
            options={DurationOption}
          />
        </div>
        <Button
          className="w-full max-w-xl mt-5"
          disabled={!topic || duration == 0 || loading}
          onClick={OnGenerateClick}
        >
          {loading? <Loader2 className="animate-spin" /> : "Generate"}
        </Button>
      </div>
    </div>
  );
}

export default CreateAiVideo;
