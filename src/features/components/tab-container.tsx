import React, { useRef, useState } from "react";
import { OpenTab, OpenTabSet } from "../types";
import Tab from "./tabs";

export default function TabContainer({ id, tabs }: { id?: string, tabs: OpenTabSet }) {
  const [currActiveTab, setActiveTab] = useState(0);

  return (
    <div id={id} className="tab-container">
      <TabLine tabs={tabs} activeTab={currActiveTab} onSetActiveTab={setActiveTab} />
      <TabValue tabName={tabs[currActiveTab].name} />
    </div>
  );
}

function TabLine({
  activeTab,
  tabs,
  onSetActiveTab,
}: {
  activeTab: number;
  tabs: OpenTabSet,
  onSetActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef<HTMLUListElement>(null);
  return (
    <ul
      ref={ref}
      onWheel={(e) => {
        ref.current?.scrollBy(e.deltaY, 0);
      }}
      className="tab-line">
      <li className="tab-line-options options">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </li>
      {tabs.map((tt, i) => (
        <li
          key={i}
          onMouseDown={() => {
            onSetActiveTab(i);
          }}
          className={`tab${activeTab === i ? " active" : ""}`}>
          <span>
            <span>{tt.name}</span>
          </span>
        </li>
      ))}
      <li className="i-tab min-w-3">
        <span></span>
      </li>
    </ul>
  );
}
function TabValue({ tabName }: { tabName: string }) {
  return (
    <div className="tab-value">
      <Tab text={tabName} />
    </div>
  );
}
