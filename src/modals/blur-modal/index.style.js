"use client";

import styled from "styled-components";

export const BlurEditorStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 22;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;

  & .icon-wrapper {
    width: 12px;
    height: 12px;
  }
`;
