"use client";

import { DragEvent, useState } from "react";

import { DropWrapperStyle, InputStyle } from "./index.style";

const DropWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isShowen, setIsShowen] = useState(false);

  const onDragOver = (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log("over");
  };

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("droped", e.dataTransfer.files);
  };

  return (
    <DropWrapperStyle onDragOver={onDragOver} onDrop={(e) => onDropHandler(e)}>
      <InputStyle accept="image/*" />
      {children}
    </DropWrapperStyle>
  );
};

export default DropWrapper;
