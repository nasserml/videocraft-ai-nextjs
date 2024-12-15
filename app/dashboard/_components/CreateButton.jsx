import React from "react";

import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import VideoCreationOption from "./VideoCreationOption";

function CreateButton() {
  return (
    <div>
      <Dialog >
        <DialogTrigger asChild >
            <Button className="w-full bg-blue-700/40 hover:bg-blue-700/70 text-lg  font-bold">+ Create New Video</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <VideoCreationOption />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;
