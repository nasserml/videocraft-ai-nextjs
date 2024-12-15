import React from "react";
import { Slider } from "@/components/ui/slider";

function SliderField({ label, defaultValue, handleInputChange, max=100, step=1 }) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      <label>{label}</label>
      <Slider
        defaultValue={[33]}
        max={max}
        step={step}
        value={[defaultValue]}
        onValueChange={(value) => handleInputChange(value[0])}
      />
    </div>
  );
}

export default SliderField;
