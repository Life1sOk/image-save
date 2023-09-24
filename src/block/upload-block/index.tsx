"use client";

import { useAppSelector } from "@ui/app/store/hooks";

import ImageUpload from "@ui/components/image-display/image-upload";

import { UploadBlockStyle } from "./index.style";

const UploadBlock = () => {
  const selectedFiles = useAppSelector((state) => state.images.uploader.selectedFiles);

  return (
    <>
      {selectedFiles?.map((file, index) => (
        <ImageUpload key={index} blob={file} />
      ))}
    </>
  );
};

export default UploadBlock;
