"use client";

import ImageDisplay from "@ui/components/image-display";
import { OpenEditorWrapper } from "@ui/modals/image-editor";

import type { IImage } from "@ui/app/page";

import {
  ImageBlockStyle,
  ImageBlockHeader,
  ImageBlockMain,
  DateStyle,
  CountBallStyle,
} from "./index.style";

interface IImgBlock {
  date: string;
  images: IImage[];
}

const ImageBlock = ({ date, images }: IImgBlock) => {
  return (
    <ImageBlockStyle>
      <ImageBlockHeader>
        <DateStyle>{date}</DateStyle>
        <CountBallStyle>{images.length}</CountBallStyle>
      </ImageBlockHeader>
      <ImageBlockMain>
        {images.map((data) => (
          <OpenEditorWrapper key={data.id} data={data}>
            <ImageDisplay data={data} />
          </OpenEditorWrapper>
        ))}
      </ImageBlockMain>
    </ImageBlockStyle>
  );
};

export default ImageBlock;
