import Image from "next/image";

import uploadingSVG from "../../../public/upload2.svg";

import { UploadingStyle, Title, SubTitle } from "./index.style";

const Uploading = () => {
  return (
    <UploadingStyle>
      <Image src={uploadingSVG} alt="uploading" />
      <Title>Upload file</Title>
      <SubTitle>Drop your file here to start uploading</SubTitle>
    </UploadingStyle>
  );
};

export default Uploading;
