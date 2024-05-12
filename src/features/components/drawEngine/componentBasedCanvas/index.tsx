import React, { useEffect, useRef } from "react";
import { FasCanvasComponent, Path } from "../../../types";

export default function FasCanvasEngine({ children }: { children: JSX.Element | JSX.Element[] }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    // console.log(children);

    let childs = [];
    if (Array.isArray(children)) {
      childs = children;
    } else {
      childs = [children];
    }
    const ctx = canvas.current!.getContext("2d");
    // function drawPath(ctx: CanvasRenderingContext2D, points: { x: number; y: number,  }[]) {
    //   ctx.beginPath();
    //   for (let i = 0; i < points.length; i++) {
    //     const p = points[i];
    //   }
    // }
    function getFuncName(func: string) {
      let f = func.match(/\bfunction\b \b.+\b/);
      return f ? f[0].substring(9) : f;
    }
    for (let i = 0; i < childs.length; i++) {
      const child = childs[i];
      // let f
      // console.log(child.type.arguments.callee.name);

      // console.log(child.type.toString());
      let funcName = getFuncName(child.type.toString());
      if (funcName == null) {
        funcName = child.type;
      }

      switch (funcName) {
        case "Obj2d":
          console.log("Obj2d");
          // let w = child.props.w
          // let h = child.props.h
          // console.log(child.props);

          break;

        default:
          console.warn(`The component ${funcName} is not an actual component`)
          break;
      }
      // console.log(child.type);

      // if (child.type) {

      // }
    }
  });
  return <canvas ref={canvas}></canvas>;
}

{
  /* <FasCanvas>
  <div></div>
  <div></div>
</FasCanvas>; */
}

function Box({ path }: { path: Path }):FasCanvasComponent {
  return null;
}

export { Box };
