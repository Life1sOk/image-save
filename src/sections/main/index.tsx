"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@ui/app/store/hooks";
import { setImages, fetchDone, closeEditor } from "@ui/app/store/images.slice";

import xSVG from "../../../public/x.svg";

import Button from "@ui/components/button";
import BlurModal from "@ui/modals/blur-modal";
import EditorBlock from "@ui/block/editor-block";
import ImageUpload from "@ui/components/image/image-upload";
import ImageDisplay from "@ui/components/image/image-display";

import { getData } from "@ui/api/fetch-actions";
import type { IGetData } from "@ui/app/type";

import {
  MainStyle,
  ImagesStyle,
  ImagesHeader,
  ImagesMain,
  DateStyle,
  CountBallStyle,
} from "./index.style";

const Main = () => {
  const dispatch = useAppDispatch();

  const { data, dates } = useAppSelector((state) => state.images.data);
  const selected = useAppSelector((state) => state.images.uploader.selectedFiles);
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
        <ImagesStyle key={currentData}>
          <ImagesHeader>
            <DateStyle>{currentData}</DateStyle>
            <CountBallStyle>
              {data[currentData]?.length + selected[currentData]?.length}
            </CountBallStyle>
          </ImagesHeader>
          <ImagesMain>
            {selected[currentData]?.map((data, index) => (
              <ImageUpload key={index} data={data} />
            ))}
            {data[currentData]?.map((data) => (
              <ImageDisplay key={data.id} data={data} currentData={currentData} />
            ))}
          </ImagesMain>
        </ImagesStyle>
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
