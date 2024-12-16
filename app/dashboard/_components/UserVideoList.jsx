import { DownloadIcon, Edit, Loader, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

function UserVideoList({ videoList }) {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {videoList?.map((video, index) => (
          <div key={index}>
            <Link href={"/editor/" + video?.videoId}>
              <div
                className="w-full h-[250px] flex justify-center items-center rounded-2xl group relative"
                style={{
                  background: video?.videoData?.frameList[0].bgColor ?? "#c01",
                }}
              >
               { video.status == 'active' ? <h2
                  style={{
                    color: video?.videoData?.frameList[0].textColor ?? "#fff",
                    fontSize: video?.videoData?.frameList[0].fontSize ?? 20,
                  }}
                >
                  {video?.videoData?.frameList[0].text ?? "Hello World"}
                </h2> : <h2 className="flex gap-3 items-center">
                  <Loader className="h-6 w-6 animate-spin"/>
                  Generating... 
                </h2>
              }
                <div className="absolute top-0 w-full h-full opacity-0 group-hover:opacity-45 flex items-center justify-center bg-black rounded-2xl cursor-pointer">
                  <Edit className="z-20" />
                </div>
              </div>
            </Link>
            {video.status == "active" && <div className="flex gap-2 items-center justify-end mt-2">
              <Link href={"/editor/" + video?.videoId}>
                <Edit className="h-4 w-4 cursor-pointer" />
              </Link>
              <DownloadIcon className="h-4 w-4 cursor-pointer" />
              <Trash className="h-4 w-4 cursor-pointer" />
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserVideoList;
