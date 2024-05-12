import React, { useEffect, useRef } from 'react'
import { Frame } from "../types";

export default function CanvasBox({frames}:{frames: Frame}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    
  })
  return (
    <div className="canvasBox">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}