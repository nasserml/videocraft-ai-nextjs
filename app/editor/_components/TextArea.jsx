import React from "react";
import { Textarea } from "@/components/ui/textarea";

function TextArea({ frame, handleInputChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label>Content</label>
      <Textarea
        className="bg-black"
        value={frame.text}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}

export default TextArea;
