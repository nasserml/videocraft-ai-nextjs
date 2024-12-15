import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GradientColors, SolidColors } from "./../../_data/Colors";

function BackgroundField({ defaultValue, handleInputChange }) {
  return (
    <div>
      <Tabs defaultValue="solid" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="solid">Solid</TabsTrigger>
          <TabsTrigger value="gradient">Gradient</TabsTrigger>
        </TabsList>
        <TabsContent value="solid">
          <ScrollArea className="h-[200px] w-[350px] mx-auto rounded-md border p-4 bg-black/45">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full">
              {SolidColors.map((color, index) => (
                <div
                  key={index}
                  className="w-full h-10 rounded-xl cursor-pointer "
                  onClick={() => handleInputChange(color.value)}
                  style={{
                    backgroundColor: color.value,
                  }}
                ></div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="gradient">
        <ScrollArea className="h-[200px] w-[350px] mx-auto rounded-md border p-4 bg-black/40">

          <div className="grid grid-cols-3 md:grid-cols-4  gap-3 w-full">
            {GradientColors.map((color, index) => (
              <div
                key={index}
                className="w-full h-12 rounded-xl cursor-pointer "
                onClick={() => handleInputChange(color.gradient)}
                style={{
                  background: color.gradient,
                }}
              ></div>
            ))}
          </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default BackgroundField;
