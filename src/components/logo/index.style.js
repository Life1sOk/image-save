import styled from "styled-components";

export const LogoStyle = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  color: rgba(45, 30, 47, 1);
  font-size: 24px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1px;
  left: 69.6px;

  & img {
    width: 25.1px;
    height: 14.73px;
  }
`;
