import axios from "axios";

import Image from "next/image";

import { useEffect, useState } from "react";

import { ImageDisplayStyle, ImageWrapper, InfoWrapper } from "./index.style";

const ImageUpload = ({ blob }: { blob: Blob }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const sendImage = async () => {
    if (blob) {
      const fd = new FormData();
      fd.append("img", blob, "img");

      const response = await axios.post("http://localhost:4000/api/images/add", fd, {
        onUploadProgress(progressEvent) {
          console.log(Math.floor(progressEvent.loaded / 1000), "pogresss");
        },
      });

      console.log(response.data);
    }
  };

  useEffect(() => {
    if (!blob) {
      return setPreview(null);
    }

    sendImage();

    const objectUrl = URL.createObjectURL(blob);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [blob]);

  return (
    <ImageDisplayStyle>
      <ImageWrapper>
        {preview && (
          <Image
            width={0}
            height={0}
            style={{ width: "100%", height: "200px" }}
            sizes="100vw"
            alt="Some image"
            src={preview}
          />
        )}
      </ImageWrapper>
    </ImageDisplayStyle>
  );
};

export default ImageUpload;
