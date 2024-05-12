import React, { useEffect, useState } from "react";
import { DDMOption, DDMProps } from "../types";

export default function DropDownMenu({
  name,
  options,
  onFocusedCallback,
  onBlurCallback,
  focused,
  globalFocus,
}: DDMProps) {

  return (
    <div
      onMouseEnter={() => {
        globalFocus && onFocusedCallback();
      }}
      onClick={onFocusedCallback}
      // why i set tabindex to -1 https://stackoverflow.com/questions/18504139/div-onblur-function
      tabIndex={-1}
      onBlur={onBlurCallback}
      className={`menu${focused ? " show-options" : ""}`}>
      <DropDownMenuContent name={name} options={options} />
    </div>
  );
}

function DropDownMenuContent({ name, options }: { name: string; options: DDMOption[] }) {
  return (
    <>
      <div className="command">{name}</div>
      <div className="options">
        {options.map((option, i) => (
          <DropDownMenuItem key={i} option={option} />
        ))}
      </div>
    </>
  );
}

function DropDownMenuItem({ option }: { option: DDMOption }) {
  return typeof option === "string" ? (
    <hr className="HorizontalRule" />
  ) : (
    <div
      className={`option${option.options?.length ? " option-group" : ""}`}
      {...(!option.options && option.function && { onClick: option.function })}>
      {option.options?.length ? (
        <DropDownMenuContent name={option.name} options={option.options} />
      ) : (
        option.name
      )}
    </div>
  );
}
