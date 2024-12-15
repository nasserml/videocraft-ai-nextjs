import React from "react";
import { Slider } from "@/components/ui/slider";

function SliderField({ label, defaultValue, handleInputChange }) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <label>{label}</label>
      <Slider
        defaultValue={[33]}
        max={100}
        step={1}
        value={[defaultValue]}
        onValueChange={(value) => handleInputChange(value[0])}
      />
    </div>
  );
}

export default SliderField;
