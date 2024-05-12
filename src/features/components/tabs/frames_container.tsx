import React from "react";

export default function FramesContainer({}) {
  return (
    <div id="framesContainer" className="w-full h-full flex gap-4 p-1 items-center text-xs">
      <div className="frame frameActive" id="frame1">
        1
      </div>
      <div id="addFrame" className="h-full aspect-square">+</div>
    </div>
  );  
}
