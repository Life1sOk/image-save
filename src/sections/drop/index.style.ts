import styled from "styled-components";

export const DropWrapperStyle = styled.div<{ $isShowen: boolean }>`
  position: fixed;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  z-index: ${({ $isShowen }) => ($isShowen ? "333" : "1")};
`;

export const InputStyle = styled.input`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 113;

  border: none;
  outline: none;
  background-color: transparent;
  pointer-events: none;

  width: 100%;
  height: 100%;
`;
