import Image from "next/image";
import { useAppDispatch } from "@ui/app/store/hooks";
import { editImage, deleteImage } from "@ui/app/store/images.slice";

import downloadSVG from "../../../public/download.svg";
import editSVG from "../../../public/edit.svg";
import deleteSVG from "../../../public/delete.svg";

import FeatureModal from "@ui/modals/image-modal/feature.modal";
import FeatureButton from "../feature-button";

import type { IImage } from "@ui/app/type";
import { ImageDisplayStyle, ImageWrapper, InfoWrapper } from "./index.style";

interface IImgData {
  data: IImage;
  isLabel?: boolean;
  currentData: string;
}

const ImageDisplay = (props: IImgData) => {
  const { data, isLabel = true, currentData } = props;
  const { src, title, date } = data;

  const dispatch = useAppDispatch();

  // isTitle exist
  const wichInfo = title == null ? date : title;

  // Image url
  const imageUrl = `http://localhost:4000/${src}`;

  return (
    <ImageDisplayStyle>
      <ImageWrapper>
        <Image
          width={0}
          height={0}
          style={{ width: "100%", height: "200px" }}
          sizes="100vw"
          alt="Some image"
          src={imageUrl}
          priority
        />
      </ImageWrapper>
      {isLabel && <InfoWrapper>{wichInfo}</InfoWrapper>}
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
            action={() => dispatch(deleteImage({ id: data.id, date: currentData }))}
          />,
        ]}
      />
    </ImageDisplayStyle>
  );
};

export default ImageDisplay;
