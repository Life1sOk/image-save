import Image from "next/image";

import arrows from "../../../public/arrows.svg";

import { LogoStyle, IconWrapper } from "./index.style";

const Logo = () => {
  return (
    <LogoStyle>
      <span>Image</span>
      <IconWrapper>
        <Image src={arrows} alt="arrows" />
      </IconWrapper>
      <span>Keeper</span>
    </LogoStyle>
  );
};

export default Logo;
