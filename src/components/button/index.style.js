import styled from "styled-components";

export const ButtonStyle = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 15px 20px 15px 15px;
  border-radius: 10px;

  background-color: rgba(238, 238, 238, 1);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transition: all 0.1s;
    background-color: rgba(218, 218, 218, 1);
  }
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const TitleWrapper = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.03em;
  text-align: left;
`;
