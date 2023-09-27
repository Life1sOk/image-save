import styled from "styled-components";

export const ImageDisplayStyle = styled.div`
  position: relative;
  pointer-events: all;
  z-index: 52;

  width: fit-content;
  height: 213px;

  display: flex;
  align-items: flex-end;
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;

  width: fit-content;
  height: 200px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 3px;
  right: 10px;
  z-index: 4;

  max-width: 70%;

  padding: 5px;
  border-radius: 5px;
  background-color: rgba(252, 246, 177, 1);

  color: rgba(57, 62, 70, 1);
  text-align: right;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.03em;
`;
