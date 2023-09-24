"use client";

import { useState } from "react";

import { useOutsideClick } from "../../../lib/useOutsideClick";

import { ModalWrapper, ModalStyle, FeatureWrapper } from "./index.style";

interface IFeatureModal {
  features: React.ReactNode | React.ReactNode[];
  //   isOpen?: boolean;
}

const FeatureModal = ({ features }: IFeatureModal) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useOutsideClick(() => handleClose());

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <ModalWrapper ref={modalRef} onClick={handleOpen}>
      {isOpen && (
        <ModalStyle>
          <FeatureWrapper>{features}</FeatureWrapper>
        </ModalStyle>
      )}
    </ModalWrapper>
  );
};

export default FeatureModal;
