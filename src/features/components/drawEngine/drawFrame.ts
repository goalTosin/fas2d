import { Frame, Group, Shape } from "../../types";

export default function drawFrame(canvas: HTMLCanvasElement, frame: Frame) {
  if ("getContext" in canvas) {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.save();
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw the background
    if ("color" in frame.background) {
      ctx.save();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
    // move to camera view
    ctx.translate(-frame.camera.x, -frame.camera.height);
    // draw every object on the scene
    function drawObject(obj: Shape | Group) {
      ctx.save();
      ctx.translate(obj.positon ? obj.positon.x : 0, obj.positon ? obj.positon.y : 0);
      if ("path" in obj) {
        if (obj.fill && "color" in obj.fill && typeof obj.fill.color === "string") {
          ctx.fillStyle = obj.fill.color;
        } else {
          ctx.fillStyle = "green";
        }
        if (typeof obj.path == "string") {
          ctx.fill(new Path2D(obj.path));
        } else {
          ctx.beginPath();
          for (let i = 0; i < obj.path.length; i++) {
            const pathChunk = obj.path[i];
            if (pathChunk.type === "move") {
              ctx.moveTo(pathChunk.x, pathChunk.y);
            } else if (pathChunk.type === "line") {
              ctx.lineTo(pathChunk.x, pathChunk.y);
            } else if (pathChunk.type === "arc") {
              ctx.arc(
                pathChunk.x,
                pathChunk.y,
                pathChunk.r,
                pathChunk.startAngle,
                pathChunk.endAngle,
                pathChunk.counterclockwise
              );
            }
          }
          ctx.fill();
        }
      }
      if (obj.children) {
        for (let i = 0; i < obj.children.length; i++) {
          const child = obj.children[i];
          drawObject(child);
        }
      }
      ctx.restore();
    }
    ctx.restore();
  } else {
    alert(
      "Tried to draw frame on the canvas but failed. Either your browser cannot render a canvas or another error occured. "
    );
  }
}
