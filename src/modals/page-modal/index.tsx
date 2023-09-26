"use client";

import { BlurEditorStyle, CloseButton } from "./index.style";

interface IPageModal {
  block: React.ReactNode | React.ReactNode[];
  isOpen?: boolean;
  closeButton?: React.ReactNode;
  blur?: number;
}

const PageModal = (props: IPageModal) => {
  const { block, isOpen = false, closeButton, blur = 0 } = props;

  return (
    <>
      {isOpen && (
        <BlurEditorStyle $blur={blur}>
          {block}
          <CloseButton>{closeButton}</CloseButton>
        </BlurEditorStyle>
      )}
    </>
  );
};

export default PageModal;
