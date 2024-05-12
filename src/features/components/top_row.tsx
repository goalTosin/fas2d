import React, { useEffect, useRef, useState } from "react";
import { AppData, DDMProps, DDMPropsWithoutFocusData } from "../types";
import DropDownMenu from "./dropDownMenu";

export default function TopRow({
  projectTitle,
  appData,
}: {
  projectTitle: string;
  appData: AppData;
}) {
  const [globalFocus, setGlobalFocus] = useState(false);
  const [lastFocusId, setLastFocusId] = useState(-1);
  const [fileHandle, setFileHandle] = useState<FileSystemFileHandle | null>(null);
  const appDataRef = useRef(appData)
  function newFile() {
    document.location.reload();
  }
  function openFile() {
    let input = document.createElement("input");
    input.type = "file";
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.click();
    input.addEventListener("change", async (e) => {
      // e.target ? e.target.files:''
      // const file = new FileReader();
      // file.onload = (e) => {
      // console.log(e.target!.result);
      // };
      console.log(input.files![0]);
      console.log(await input.files![0].text());

      // input.files && file.readAsText(input.files[0]);
    });
    document.body.removeChild(input);
    // input.multiple
  }
  function saveFile() {}
  function encodeAsGif() {}
  const menuData: DDMPropsWithoutFocusData[] = [
    {
      name: "File",
      options: [
        {
          name: "New",
          function: newFile,
        },
        "hr",
        {
          name: "Open",
          function: openFile,
        },
        "hr",
        {
          name: "Save",
          async function() {

            if (fileHandle) {
              if ("createWritable" in fileHandle) {
                let writable = await (fileHandle.createWritable as () => Promise<WritableStream>)();
                if ('write' in writable) {
                  (writable.write as (data: string) => void)(JSON.stringify(appDataRef.current.frames))
                }
              }
            } else if ("showSaveFilePicker" in window) {
              let fh = await (window.showSaveFilePicker as () => Promise<FileSystemFileHandle>)();
              let fhf = await fh.getFile();
            }
          },
        },
        {
          name: "Export",
          function: openFile,
        },
      ],
    },
    {
      name: "Edit",
      options: [
        {
          name: "Undo (Ctrl+Z)",
        },
        {
          name: "Redo (Ctrl+Shift+Z Ctrl+Y)",
        },
      ],
    },
    {
      name: "Examples",
      options: [
        {
          name: "Jumping Man",
        },
        {
          name: "Spinning Around",
        },
      ],
    },
    {
      name: "Help",
      options: [
        {
          name: "Documentation",
        },
      ],
    },
  ];
  return (
    <>
      <div className="top row">
        <div id="app-icon">
          <img src="/fas2d-icon.png" />
        </div>
        <div className="commands-bar">
          {menuData.map((menuItem, i) => (
            <DropDownMenu
              focused={lastFocusId === i}
              globalFocus={globalFocus}
              onBlurCallback={() => {
                setGlobalFocus(false);
                setLastFocusId(-1);
              }}
              onFocusedCallback={() => {
                setGlobalFocus(true);
                setLastFocusId(i);
              }}
              name={menuItem.name}
              options={menuItem.options}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
