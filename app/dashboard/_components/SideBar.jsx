"use client";
import { CoinsIcon, Grid2X2, UserCircle } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";
import { Progress } from "@/components/ui/progress";
import { UserDetailContext } from "@/app/_context/UserDetailContex";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CreateButton from "./CreateButton";

const menuOption = [
  {
    name: "Dashboard",
    icon: Grid2X2,
    path: "/dashboard",
  },
  {
    name: "Buy Credits",
    icon: CoinsIcon,
    path: "/buy-credits",
  },
  {
    name: "Profile",
    icon: UserCircle,
    path: "/profile",
  },
];
function SideBar() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  const path = usePathname();
  return (
    <div className="fixed w-64 h-screen shadow-md shadow-primary ">
      <div className="flex gap-2 items-center mt-5">
        <Link href={"/"} className="flex  items-center">
          <Image src={"/logo.png"} width={70} height={70} alt={"logo"} />
          <h2 className="font-medium text-lg">VideoCraft AI</h2>
        </Link>
      </div>

      <ul className="mt-7 px-2">
        <CreateButton />
        {menuOption.map((item, index) => (
          <Link key={index} href={item.path}>
            <li
              className={`flex gap-2 items-center p-3 mt-3 hover:bg-primary rounded-lg hover:text-white cursor-pointer duration-300 ease-in-out transition-colors ${
                path === item.path && "bg-primary text-white"
              }`}
            >
              <item.icon />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className="p-3 border rounded-lg text-sm absolute bottom-10 w-[90%] left-2 flex flex-col gap-2">
        <h2 className="font-bold ">Total Usage</h2>
        <Progress value={(10 - userDetail?.credits) * 10} />
        <h2 className="text-xs text-slate-400">
          {10 - userDetail?.credits} Min is used out of 10 Min
        </h2>
      </div>
    </div>
  );
}

export default SideBar;
