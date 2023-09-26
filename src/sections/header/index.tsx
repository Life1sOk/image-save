"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useMemo } from "react";

import { useAppSelector } from "@ui/app/store/hooks";

import Logo from "@ui/components/logo";
import UploadButton from "./upload";

import { HeaderStyle, LogoWrapper, CountAllStyle } from "./index.style";

const Header = () => {
  const totalCount = useAppSelector((state) => state.images.data.totalCount);
  const isFetched = useAppSelector((state) => state.images.isFetched);

  return (
    <HeaderStyle>
      <LogoWrapper>
        <Logo />
        {isFetched ? (
          <CountAllStyle>{totalCount} images stored in keeper</CountAllStyle>
        ) : (
          <Skeleton />
        )}
      </LogoWrapper>
      <UploadButton />
    </HeaderStyle>
  );
};

export default Header;
