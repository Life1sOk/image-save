import styled from "styled-components";

export const EmptyBlockStyle = styled.div`
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  & h4 {
    margin: 0;
    font-size: 31px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.03em;
    text-align: center;
    color: rgba(57, 62, 70, 1);
  }

  & p {
    margin: 0;
    margin-bottom: 15px;
    color: rgba(146, 154, 171, 1);
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.03em;
    text-align: center;
  }
`;
