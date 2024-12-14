import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function CreateButton() {
  return (
    <div>
      <Dialog >
        <DialogTrigger asChild >
            <Button className="w-full bg-blue-700/40 hover:bg-blue-700/70 text-lg  font-bold">+ Create New Video</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Create a new video</DialogTitle>
            <DialogDescription>
              <div className="flex gap-4 justify-center items-center mt-5">
                <Link href={"/create-ai-video"} className="w-full">
                <div className="border rounded-lg p-4 w-full flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-slate-700/40" > 
                    <Image src={"/magic.png"} width={40} height={40} alt={"magic-ai"} />
                    <h2 className="text-lg text-center">Generate with AI</h2>
                </div>
                </Link>
                <Link href={"/editor"} className="w-full">
                <div className="border rounded-lg p-4 w-full flex flex-col gap-4 items-center justify-center cursor-pointer hover:bg-slate-700/40"> 
                    <Image src={"/play.png"} width={40} height={40} alt={"play-ai"} />
                    <h2 className="text-lg text-center">Create from Scratch</h2>
                </div>
                </Link>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;
