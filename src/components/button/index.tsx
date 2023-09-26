import Image from "next/image";

import { ButtonStyle, IconWrapper, TitleWrapper } from "./index.style";

interface IButton {
  title: string;
  src: string;
  action?: () => void;
  disabled?: boolean;
}

const Button = ({ title, src, action, disabled = false }: IButton) => {
  return (
    <ButtonStyle onClick={action} disabled={disabled}>
      <IconWrapper className="icon-wrapper">
        <Image src={src} alt="upload" />
      </IconWrapper>
      <TitleWrapper>{title}</TitleWrapper>
    </ButtonStyle>
  );
};

export default Button;
