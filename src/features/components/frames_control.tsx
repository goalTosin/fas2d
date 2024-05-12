import React from 'react'

export default function FramesControl({}) {
  return (
    
    <div id="frames-control">
          <div
            id="frameNav"
            onClick={() => {
              alert('This quick button is not fully finished.\nFor now, use the frame tab in the file bar, the mouse, or the arrow keys to switch frames.')
            }}
          >
            &lt; &gt;
          </div>
          <div
            id="delFrameNav"
            onClick={() => {alert('Frame deletion not fully implemented yet. Should be added soon!')}}
          >
            Delete
          </div>
          <div id="dupFrameNav" >Duplicate</div>
          <div id="playNav">Frame Length</div>
          <div
            id="frameTimeNav"
            onClick={() => {alert('This quick button is not finished, for now playback options can be accessed through the playback tab in the file bar!')}}
          >
            ⏵⏸🔁
          </div>
    </div>
  )
}
