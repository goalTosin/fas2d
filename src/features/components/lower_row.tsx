import React from "react";
import { AppData } from "../types";
// import { cn } from "../../classy";
import CanvasBox from "./canvas_box";
// import FramesContainer from './tabs/frames_container'
import FramesControl from "./frames_control";
import TabContainer from "./tab-container";
// cn

export default function LowerRow({ appData }: { appData: AppData }) {
  return (
    <div className="lower row">
      <TabContainer tabs={appData.openTabSet[0]} id="left-tab-container" />
      <CanvasBox
        frames={
          appData.frames[appData.frameNumber ? appData.frameNumber : appData.frames.length - 1]
        }
      />
      <TabContainer tabs={appData.openTabSet[1]} id="right-tab-container" />
      <FramesControl />
      <TabContainer tabs={appData.openTabSet[2]} id="lower-tab-container" />

      {/* <FramesContainer/> */}
    </div>
  );
}
