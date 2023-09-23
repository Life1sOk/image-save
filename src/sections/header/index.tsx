"use client";

import uploadIcon from "../../../public/upload.svg";

import Button from "@ui/components/button";
import Logo from "@ui/components/logo";

import { HeaderStyle, LogoWrapper, CountAllStyle } from "./index.style";

interface IHeader {
  totalCount: number;
}

const Header = ({ totalCount }: IHeader) => {
  // Count should take a count of all images after fetch;

  return (
    <HeaderStyle>
      <LogoWrapper>
        <Logo />
        <CountAllStyle>{totalCount} images stored in keeper</CountAllStyle>
      </LogoWrapper>
      <Button src={uploadIcon} title="Upload image" />
    </HeaderStyle>
  );
};

export default Header;
