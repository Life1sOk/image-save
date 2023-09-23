import Image from "next/image";

import { ButtonStyle, IconWrapper, TitleWrapper } from "./index.style";

interface IButton {
  title: string;
  src: string;
  action?: () => void;
}

const Button = ({ title, src, action }: IButton) => {
  return (
    <ButtonStyle onClick={action}>
      <IconWrapper className="icon-wrapper">
        <Image src={src} alt="upload" />
      </IconWrapper>
      <TitleWrapper>{title}</TitleWrapper>
    </ButtonStyle>
  );
};

export default Button;
