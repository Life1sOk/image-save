import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalStyle = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const FeatureWrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;
