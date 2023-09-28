import Image from "next/image";

import { useState } from "react";
import { useAppDispatch } from "@ui/app/store/hooks";
import { editImage, deleteImage } from "@ui/app/store/images.slice";

import { useFetchAction } from "@ui/api/fetch-actions";

import downloadSVG from "../../../public/download.svg";
import editSVG from "../../../public/edit.svg";
import deleteSVG from "../../../public/delete.svg";

import FeatureModal from "@ui/modals/image-modal/feature.modal";
import FeatureButton from "../feature-button";

import type { IImage } from "@ui/app/type";
import { ImageDisplayStyle, ImageWrapper, InfoWrapper } from "./index.style";

interface IImgData {
  data: IImage;
  currentDate?: string;
  isLabel?: boolean;
}

const ImageDisplay = (props: IImgData) => {
  const { data, currentDate, isLabel = true } = props;
  const { src, title, date } = data;

  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const { deleteImageApi } = useFetchAction();

  // isTitle exist
  const wichInfo = title == null ? date : title;

  // Image url
  const imageUrl = `http://localhost:4000/${src}`;

  const handleEdit = () => {
    if (currentDate) dispatch(editImage({ data, year: currentDate, type: "display" }));
  };

  const handleDelete = async () => {
    dispatch(deleteImage({ id: Number(data.id), date: currentDate! }));

    if (data.id !== null) await deleteImageApi(Number(data.id));
  };

  return (
    <ImageDisplayStyle>
      <ImageWrapper>
        <Image
          onLoadingComplete={() => setIsLoaded(true)}
          width={0}
          height={0}
          style={{ width: "100%", height: "200px" }}
          sizes="100vw"
          alt="Some image"
          src={imageUrl}
          priority
        />
      </ImageWrapper>
      {isLoaded && isLabel && <InfoWrapper>{wichInfo}</InfoWrapper>}
      <FeatureModal
        features={[
          <FeatureButton key={"Download"} title="Download" icon={downloadSVG} />,
          <FeatureButton
            key={"Edit label"}
            title="Edit label"
            icon={editSVG}
            action={handleEdit}
          />,
          <FeatureButton
            key={"Delete"}
            title="Delete"
            icon={deleteSVG}
            action={handleDelete}
          />,
        ]}
      />
    </ImageDisplayStyle>
  );
};

export default ImageDisplay;
