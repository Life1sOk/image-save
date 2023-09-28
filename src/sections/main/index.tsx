"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@ui/app/store/hooks";
import { setImages, fetchDone, closeEditor } from "@ui/app/store/images.slice";

import xSVG from "../../../public/x.svg";

import Button from "@ui/components/button";
import PageModal from "@ui/modals/page-modal";
import EditorBlock from "@ui/block/editor-block";
import EmptyBlock from "@ui/block/empty-block";
import ImagesBlock from "@ui/block/images-block";
import SkeletBlock from "@ui/block/skeleton";

import { useFetchAction } from "@ui/api/fetch-actions";
import type { IGetData } from "@ui/app/type";

import { MainStyle } from "./index.style";

const Main = () => {
  const dispatch = useAppDispatch();

  const { getData } = useFetchAction();

  const dates = useAppSelector((state) => state.images.data.dates);
  const isFetched = useAppSelector((state) => state.images.isFetched);
  const isEditorOpen = useAppSelector((state) => state.images.editor.isOpen);
  const isUploaderOpen = useAppSelector((state) => state.images.uploader.isOpen);

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
      {!isFetched ? (
        <SkeletBlock />
      ) : (
        dates?.map((currentData) => <ImagesBlock key={currentData} date={currentData} />)
      )}
      <PageModal
        block={<EditorBlock />}
        isOpen={isEditorOpen}
        blur={5}
        closeButton={
          <Button
            title="Close editor"
            src={xSVG}
            action={() => dispatch(closeEditor())}
          />
        }
      />
      <PageModal block={<EmptyBlock />} isOpen={isUploaderOpen} />
    </MainStyle>
  );
};

export default Main;
