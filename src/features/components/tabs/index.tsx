import React from "react";
import ColorTab from "./color";
import FramesContainer from "./frames_container";

export default function Tab({ text }: { text?: string }) {

  switch (text) {
    case "color":
      return <ColorTab />;
      break;

    case "frames":
      return <FramesContainer />;
      break;


    default:
      return (
        <div className="w-full h full text-center text-xl">
          Sorry, the tab "{text}" is not yet developed.{" "}
          <a target={"_blank"} href="https://github.com/goalTosin">
            Join our team
          </a>
        </div>
      );
      break;
  }
}
