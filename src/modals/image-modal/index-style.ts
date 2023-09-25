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

const ModalBasic = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const ModalFeatureStyle = styled(ModalBasic)`
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

export const ModalUploadStyle = styled(ModalBasic)<{ procent: number }>`
  background-color: rgba(238, 238, 238, 0.6);

  width: ${({ procent }) => (procent ? `${procent}%` : "100%")};
`;

export const UploadWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 5px;

  & h4 {
    margin: 0;

    font-size: 22px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.03em;
    text-align: center;
    color: rgba(57, 62, 70, 1);
  }

  & span {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.03em;
    text-align: center;
    color: rgba(146, 154, 171, 1);
  }
`;
