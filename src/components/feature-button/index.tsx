import Image from "next/image";

import { FeatureButtonStyle } from "./index.style";

interface IFB {
  icon: string;
  title: string;
  action?: () => void;
}

const FeatureButton = ({ icon, title, action }: IFB) => {
  return (
    <FeatureButtonStyle onClick={action}>
      <Image src={icon} alt={`${title} image`} />
      <span>{title}</span>
    </FeatureButtonStyle>
  );
};

export default FeatureButton;
