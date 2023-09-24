"use client";

import { useRef } from "react";

import { useAppSelector, useAppDispatch } from "@ui/app/store/hooks";
import { changeLabel } from "@ui/app/store/images.slice";

import acceptSVG from "../../../public/accept.svg";

import Button from "@ui/components/button";
import ImageDisplay from "@ui/components/image-display/image-display";
import LabelEditor from "@ui/components/label-editor";

import { EditorStyle, ImageDisplayBlock, Title } from "./index.style";

const EditorBlock = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<any>(null);

  const editImage = useAppSelector((state) => state.images.editor.current)!;

  const handleSaveChanges = () => {
    if (ref.current) dispatch(changeLabel(ref.current.value()));
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
