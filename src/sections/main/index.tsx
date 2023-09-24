"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@ui/app/store/hooks";
import { setImages, fetchDone, closeEditor } from "@ui/app/store/images.slice";

import xSVG from "../../../public/x.svg";

import Button from "@ui/components/button";
import ImageBlock from "@ui/block/image-block";
import BlurModal from "@ui/modals/blur-modal";
import EditorBlock from "@ui/block/editor-block";
import UploadBlock from "@ui/block/upload-block";

import { getData } from "@ui/api/fetch-actions";
import type { IGetData } from "@ui/app/type";

import { MainStyle } from "./index.style";

const Main = () => {
  const dispatch = useAppDispatch();

  const { data, dates } = useAppSelector((state) => state.images.data);
  const isFetched = useAppSelector((state) => state.images.isFetched);

  const isModalOpen = useAppSelector((state) => state.images.editor.isOpen);

  useEffect(() => {
    (async () => {
      if (!isFetched) {
        const response: IGetData = await getData();
        dispatch(setImages(response));
        dispatch(fetchDone(true));
      }
    })();
  }, []);

  return (
    <MainStyle>
      {dates?.map((currentData) => (
        <ImageBlock
          key={currentData}
          images={data[currentData]}
          date={currentData}
          uploadImages={<UploadBlock />}
        />
      ))}
      <BlurModal
        block={<EditorBlock />}
        isOpen={isModalOpen}
        closeButton={
          <Button
            title="Close editor"
            src={xSVG}
            action={() => dispatch(closeEditor())}
          />
        }
      />
    </MainStyle>
  );
};

export default Main;
