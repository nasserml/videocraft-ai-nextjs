"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserDetailContext } from "./_context/UserDetailContex";

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    user && saveUserInformation();
  }, [user]);

  const saveUserInformation = async () => {
    console.log(user);
    const result = await axios.post("/api/user", {
      user: {
        fullName: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
      },
    });

    console.log(result.data);

    setUserDetail(result.data[0]);
  };
  return (
    <UserDetailContext value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext>
  );
}

export default Provider;
