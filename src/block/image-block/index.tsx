"use client";

import { useAppDispatch } from "@ui/app/store/hooks";
import { editImage, deleteImage } from "@ui/app/store/images.slice";

import downloadSVG from "../../../public/download.svg";
import editSVG from "../../../public/edit.svg";
import deleteSVG from "../../../public/delete.svg";

import FeatureButton from "@ui/components/feature-button";
import ImageDisplay from "@ui/components/image-display/image-display";
import FeatureModal from "@ui/modals/feature-modal";

import type { IImage } from "@ui/app/type";

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
  actionEditor?: () => {};
  uploadImages?: React.ReactNode | React.ReactNode[];
}

const ImageBlock = ({ date, images, uploadImages }: IImgBlock) => {
  const dispatch = useAppDispatch();

  return (
    <ImageBlockStyle>
      <ImageBlockHeader>
        <DateStyle>{date}</DateStyle>
        <CountBallStyle>{images.length}</CountBallStyle>
      </ImageBlockHeader>
      <ImageBlockMain>
        {uploadImages}
        {images.map((data) => (
          <ImageDisplay
            key={data.id}
            data={data}
            modal={
              <FeatureModal
                features={[
                  <FeatureButton key={"Download"} title="Download" icon={downloadSVG} />,
                  <FeatureButton
                    key={"Edit label"}
                    title="Edit label"
                    icon={editSVG}
                    action={() => dispatch(editImage({ data, date }))}
                  />,
                  <FeatureButton
                    key={"Delete"}
                    title="Delete"
                    icon={deleteSVG}
                    action={() => dispatch(deleteImage({ id: data.id, date }))}
                  />,
                ]}
              />
            }
          />
        ))}
      </ImageBlockMain>
    </ImageBlockStyle>
  );
};

export default ImageBlock;
