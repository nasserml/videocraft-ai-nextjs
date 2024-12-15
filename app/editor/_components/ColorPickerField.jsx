import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ColorPicker from "react-best-gradient-color-picker";

function ColorPickerField({ defaultColor, handleInputChange }) {
  return (
    <div className="flex items-center gap-4 mt-3">
      <label>Text Color</label>
      <Popover>
        <PopoverTrigger asChild>
          <div
            className=" w-10 h-10 rounded-lg cursor-pointer"
            style={{ backgroundColor: defaultColor }}
          ></div>
        </PopoverTrigger>
        <PopoverContent>
          <ColorPicker
            value={defaultColor}
            onChange={(value) => handleInputChange(value)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ColorPickerField;
