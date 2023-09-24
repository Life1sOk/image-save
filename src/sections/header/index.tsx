"use client";

import { useAppSelector } from "@ui/app/store/hooks";

import Logo from "@ui/components/logo";
import UploadButton from "./upload";

import { HeaderStyle, LogoWrapper, CountAllStyle } from "./index.style";

const Header = () => {
  const totalCount = useAppSelector((state) => state.images.data.totalCount);

  return (
    <HeaderStyle>
      <LogoWrapper>
        <Logo />
        <CountAllStyle>{totalCount} images stored in keeper</CountAllStyle>
      </LogoWrapper>
      <UploadButton />
    </HeaderStyle>
  );
};

export default Header;
