"use client";

import styled from "styled-components";

export const BlurEditorStyle = styled.div<{ $blur: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  z-index: 62;

  width: 100%;
  height: 100%;

  background-color: ${({ $blur }) => ($blur > 0 ? `rgba(255, 255, 255, 0.8)` : "white")};
  backdrop-filter: ${({ $blur }) => ($blur > 0 ? `blur(${$blur}px)` : "blur(0px)")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  pointer-events: all;

  & .icon-wrapper {
    width: 12px;
    height: 12px;
  }
`;
