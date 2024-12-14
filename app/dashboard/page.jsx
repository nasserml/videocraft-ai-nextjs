"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      {videoList.length == 0 && (
        <div className="p-6 rounded-lg mt-10 border">
          <h2 className="text-2xl font-bold text-center">
            Create Your first Video
          </h2>
          <div className="flex gap-4 justify-center items-center mt-10">
            <Link href={"/create-ai-video"} className="w-full">
              <div className="border rounded-lg p-4 w-full flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-slate-700/40">
                <Image
                  src={"/magic.png"}
                  width={40}
                  height={40}
                  alt={"magic-ai"}
                />
                <h2 className="text-lg text-center">Generate with AI</h2>
              </div>
            </Link>
            <Link href={"/editor"} className="w-full">
              <div className="border rounded-lg p-4 w-full flex flex-col gap-4 items-center justify-center cursor-pointer hover:bg-slate-700/40">
                <Image
                  src={"/play.png"}
                  width={40}
                  height={40}
                  alt={"play-ai"}
                />
                <h2 className="text-lg text-center">Create from Scratch</h2>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
// 1:13
