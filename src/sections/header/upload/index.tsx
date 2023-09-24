import { RefObject, ChangeEvent, useRef } from "react";

import { useAppDispatch } from "@ui/app/store/hooks";
import { selectFile } from "@ui/app/store/images.slice";

import { UploadStyle } from "./index.style";

import uploadSVG from "../../../../public/upload.svg";

import Button from "@ui/components/button";

const UploadButton = () => {
  const dispatch = useAppDispatch();
  const fileRef: RefObject<HTMLInputElement> = useRef(null);

  const handleOpenFile = () => fileRef.current?.click();

  const handleCurrentFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) dispatch(selectFile({ file: event.target.files[0] }));
  };

  return (
    <UploadStyle>
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileRef}
        onChange={(e) => handleCurrentFile(e)}
      />
      <Button src={uploadSVG} title="Upload image" action={handleOpenFile} />
    </UploadStyle>
  );
};

export default UploadButton;