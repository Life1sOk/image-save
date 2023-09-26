"use client";

import Logo from "@ui/components/logo";
import UploadButton from "@ui/sections/header/upload";

import { EmptyBlockStyle, Description } from "./index.style";

const EmptyBlock = () => {
  return (
    <EmptyBlockStyle>
      <Logo />
      <Description>
        <h4>No images uploaded yet</h4>
        <p>
          Upload your first image by drag and dropping the file on the screen or click the
          button below
        </p>
        <UploadButton />
      </Description>
    </EmptyBlockStyle>
  );
};

export default EmptyBlock;
