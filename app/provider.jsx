"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserDetailContext } from "./_context/UserDetailContex";
import { VideoFrameContext } from "./_context/VideoFrameContext";

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState({});
  const [videoFrames, setVideoFrames] = useState([]);

  useEffect(() => {
    user && saveUserInformation();
  }, [user]);

  const saveUserInformation = async () => {
    const result = await axios.post("/api/user", {
      user: {
        fullName: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
      },
    });


    setUserDetail(result.data[0]);
  };
  return (
    <UserDetailContext value={{ userDetail, setUserDetail }}>
      <VideoFrameContext value={{ videoFrames, setVideoFrames }}>
        <div>{children}</div>
      </VideoFrameContext>
    </UserDetailContext>
  );
}

export default Provider;
