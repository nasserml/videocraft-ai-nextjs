"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import uuid4 from "uuid4";

function VideoCreationOption() {

    const {user} = useUser();
    const router = useRouter();

    const CreateNewScratchVideo= async () =>{

        const videoId=  uuid4();

        const result = await axios.post("/api/video", {
            videoId: videoId,
            userEmail: user?.primaryEmailAddress?.emailAddress
        })


        console.log(result);

        router.push("/editor/" + videoId)
    }
  return (
    <div className="p-6 rounded-lg mt-10 border">
      <h2 className="text-2xl font-bold text-center">
        Create Your first Video
      </h2>
      <div className="flex gap-1 justify-center items-center mt-10">
        <Link href={"/create-ai-video"} className="w-full h-full">
          <div className="border rounded-lg p-4 w-full flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-slate-700/40">
            <Image src={"/magic.png"} width={40} height={40} alt={"magic-ai"} />
            <h2 className="text-sm text-center">Generate with AI</h2>
          </div>
        </Link>
        <div onClick={()=> CreateNewScratchVideo()} className="w-full h-full cursor-pointer">
          <div className="border rounded-lg p-4 w-full flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-slate-700/40">
            <Image src={"/play.png"} width={40} height={40} alt={"play-ai"} />
            <h2 className="text-sm text-center">Create from Scratch</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCreationOption;
