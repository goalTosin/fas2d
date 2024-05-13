import React, { useEffect, useState } from "react";
import LowerRow from "./features/components/lower_row";
import TopRow from "./features/components/top_row";
import "./features/styles.css";
import { AppData } from "./features/types";

export default function App() {
  const [appData, tweakAppData] = useState<AppData>({
    frames: [
      {
        background: { color: "red" },
        camera: {
          x: 0,
          y: 0,
          height: 100,
          width: 100,
        },
        scene: {},
      },
    ],
    openTabSet: [
      [
        { name: "h", icon: null },
        { name: "h3", icon: null },
      ],
      [{ name: "h12", icon: null }],
      [{ name: "h125", icon: null }],
    ],
    frameNumber: 0,
    framesOpacity: 0.8,
    projectTitle: "Untitled",
    toolData: {
      brush: {
        color: "red",
        width: 10,
      },
    },
  });
  const [appHasTrulyChanged, changeWheatherAppHasChanged] = useState(false);
  function setAppData(appData: AppData) {
    tweakAppData(appData);
    changeWheatherAppHasChanged(true);
  }
  useEffect(() => {
    let savedAppdata = localStorage.getItem("fas-2d-app");
    if (savedAppdata) {
      setAppData(JSON.parse(savedAppdata));
    } else {
      localStorage.setItem("fas-2d-app", JSON.stringify(appData));
    }
  }, []);
  useEffect(() => {
    if (appHasTrulyChanged) {
      localStorage.setItem("fas-2d-app", JSON.stringify(appData));
    }
  }, [appData]);
  return (
    <>
      <TopRow
        projectTitle={appData.projectTitle ? appData.projectTitle : "Untitled"}
        appData={appData}
      />
      <LowerRow appData={appData} />
    </>
  );
}
