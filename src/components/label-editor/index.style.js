import styled from "styled-components";

export const LabelEditorStyle = styled.div`
  width: 100%;

  font-weight: 400;
  letter-spacing: -0.03em;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelStyle = styled.input`
  width: 100%;
  text-align: center;

  border: none;
  outline: none;
  background-color: transparent;

  color: rgba(61, 41, 63, 1);
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  caret-color: rgba(45, 30, 47, 1);

  &::placeholder {
    font-family: Inter;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.03em;
    font-weight: 400;
    color: rgba(146, 154, 171, 1);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const Note = styled.span`
  color: rgba(146, 154, 171, 1);
  font-size: 13px;
  line-height: 16px;
`;
