"use client";

import styled from "styled-components";

export const ImageEditorStyle = styled.div`
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

export const EditorWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  & .icon-wrapper {
    width: 15px;
    height: 10px;
  }
`;

export const ImageDisplayBlock = styled.div`
  width: 100%;
  height: 282px;

  padding-top: 13px;
  margin-bottom: 43px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h4`
  margin: 0;
  margin-bottom: 37px;

  color: rgba(57, 62, 70, 1);
  font-size: 26px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: -0.03em;
  text-align: center;
`;
