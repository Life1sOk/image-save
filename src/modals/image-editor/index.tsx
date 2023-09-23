"use client";

import { useContext, useState, useEffect, ReactNode, Fragment } from "react";

import { EditorContext } from "../../../lib/editor";
import xSVG from "../../../public/x.svg";
import acceprtSVG from "../../../public/accept.svg";

import ImageDisplay from "@ui/components/image-display";
import Button from "@ui/components/button";
import LabelEditor from "@ui/components/label-editor";
import type { IImage } from "@ui/app/page";

import {
  ImageEditorStyle,
  CloseButton,
  EditorWrapper,
  ImageDisplayBlock,
  Title,
} from "./index.style";

export const OpenEditorWrapper = ({
  children,
  data,
}: {
  children: ReactNode;
  data: IImage;
}) => {
  const { action } = useContext(EditorContext);

  // Handle action
  const handleClick = () => {
    if (action) action(data);
  };

  return <div onClick={handleClick}>{children}</div>;
};

const ImageEditor = () => {
  const { current, action } = useContext(EditorContext);
  const [isActive, setIsActive] = useState(false);

  const handleClose = () => {
    if (action) action(null);
  };

  useEffect(() => {
    if (!!current) setIsActive(true);
    if (!!!current) setIsActive(false);
  }, [current]);

  return (
    <Fragment>
      {isActive && current !== null && (
        <ImageEditorStyle>
          <EditorWrapper>
            <Title>Set custom label</Title>
            <ImageDisplayBlock>
              <ImageDisplay data={current!} isLabel={false} />
              <LabelEditor />
            </ImageDisplayBlock>
            <Button src={acceprtSVG} title="Save" action={handleClose} />
          </EditorWrapper>
          <CloseButton>
            <Button src={xSVG} title="Close editor" action={handleClose} />
          </CloseButton>
        </ImageEditorStyle>
      )}
    </Fragment>
  );
};

export default ImageEditor;
