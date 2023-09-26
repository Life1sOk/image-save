import { RefObject, ChangeEvent, useRef, useId, HTMLAttributes } from "react";

import { useAppDispatch, useAppSelector } from "@ui/app/store/hooks";
import { selectFile } from "@ui/app/store/images.slice";

import { UploadStyle } from "./index.style";

import uploadSVG from "../../../../public/upload.svg";

import Button from "@ui/components/button";

const UploadButton = () => {
  const uniqueId = useId();

  const dispatch = useAppDispatch();
  const fileRef: RefObject<HTMLInputElement> = useRef(null);

  const isFetched = useAppSelector((state) => state.images.isFetched);

  const handleOpenFile = () => fileRef.current?.click();

  const handleCurrentFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const prep = {
        id: uniqueId,
        title: null,
        file: event.target.files[0],
        status: false,
      };

      dispatch(selectFile(prep));
    }
  };

  return (
    <UploadStyle>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileRef}
        onChange={(e) => handleCurrentFile(e)}
      />
      <Button
        src={uploadSVG}
        title="Upload image"
        action={handleOpenFile}
        disabled={!isFetched}
      />
    </UploadStyle>
  );
};

export default UploadButton;
