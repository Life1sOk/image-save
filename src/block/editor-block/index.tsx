"use client";

import { useRef } from "react";

import { updateImageLabelApi } from "@ui/api/fetch-actions";

import { useAppSelector, useAppDispatch } from "@ui/app/store/hooks";
import { changeLabel } from "@ui/app/store/images.slice";

import acceptSVG from "../../../public/accept.svg";

import Button from "@ui/components/button";
import ImageDisplay from "@ui/components/image/image-display";
import LabelEditor from "@ui/components/label-editor";

import { EditorStyle, ImageDisplayBlock, Title } from "./index.style";

const EditorBlock = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<any>(null);

  const editImage = useAppSelector((state) => state.images.editor.current)!;

  const handleSaveChanges = async () => {
    if (ref.current) {
      dispatch(changeLabel(ref.current.value()));

      if (editImage.id)
        await updateImageLabelApi(Number(editImage.id), ref.current.value());
    }
  };

  return (
    <EditorStyle>
      <Title>Set custom label</Title>
      <ImageDisplayBlock>
        <ImageDisplay data={editImage} isLabel={false} />
        <LabelEditor ref={ref} />
      </ImageDisplayBlock>
      <Button src={acceptSVG} title="Save" action={handleSaveChanges} />
    </EditorStyle>
  );
};

export default EditorBlock;
