import styled from "styled-components";

export const EditorStyle = styled.div`
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
