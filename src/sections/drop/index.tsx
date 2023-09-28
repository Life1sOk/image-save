"use client";

import { DragEvent, useState, useId } from "react";

import { useAppDispatch } from "@ui/app/store/hooks";
import { selectFile } from "@ui/app/store/images.slice";

import PageModal from "@ui/modals/page-modal";
import Uploading from "@ui/components/uloading";

import { DropWrapperStyle, InputStyle } from "./index.style";

const DropWrapper = () => {
  const uniqueId = useId();
  const dispatch = useAppDispatch();

  const [isShowen, setIsShowen] = useState(false);

  const onDragOver = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const onDropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.dataTransfer.files.length > 0) {
      Object.values(event.dataTransfer.files).forEach((item) => {
        const prep = {
          id: uniqueId,
          title: null,
          file: item,
          status: false,
        };

        dispatch(selectFile(prep));
      });
    }

    if (isShowen) setIsShowen(false);
  };

  const onDragEnter = () => {
    if (!isShowen) setIsShowen(true);
  };

  const onDragLeave = () => {
    if (isShowen) setIsShowen(false);
  };

  return (
    <DropWrapperStyle
      $isShowen={isShowen}
      onDragStart={() => console.log("started")}
      onDragOver={onDragOver}
      onDrop={(e) => onDropHandler(e)}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
    >
      {isShowen && <InputStyle accept="image/*" multiple />}
      <PageModal block={<Uploading />} blur={5} isOpen={isShowen} />
    </DropWrapperStyle>
  );
};

export default DropWrapper;
