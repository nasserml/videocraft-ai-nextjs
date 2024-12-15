"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import VideoCreationOption from "./_components/VideoCreationOption";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      {videoList.length == 0 && (
        <VideoCreationOption />
      )}
    </div>
  );
}

export default Dashboard;
// 1:13
