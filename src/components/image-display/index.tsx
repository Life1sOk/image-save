import Image from "next/image";
import type { IImage } from "@ui/app/page";

import { ImageDisplayStyle, ImageWrapper, InfoWrapper } from "./index.style";

interface IImgData {
  data: IImage;
  isLabel?: boolean;
}

const ImageDisplay = ({ data, isLabel = true }: IImgData) => {
  const { src, title, date } = data;

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
        />
      </ImageWrapper>
      {isLabel && <InfoWrapper>{wichInfo}</InfoWrapper>}
    </ImageDisplayStyle>
  );
};

export default ImageDisplay;
