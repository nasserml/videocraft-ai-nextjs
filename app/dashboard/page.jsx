"use client";


import React, { useEffect, useState } from "react";
import VideoCreationOption from "./_components/VideoCreationOption";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import UserVideList from "./_components/UserVideoList";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);

  const { user } = useUser();

  useEffect(() => {
    user && GetUserVideoList();
  }, [user]);

  const GetUserVideoList = async () => {
    const result = await axios.get(
      "/api/video?userEmail=" + user?.primaryEmailAddress?.emailAddress
    );

    setVideoList(result.data);
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      {videoList.length == 0 ? <VideoCreationOption /> : <UserVideList videoList={videoList} />}
    </div>
  );
}

export default Dashboard;
// 1:13
