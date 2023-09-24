import styled from "styled-components";

export const ImageBlockStyle = styled.section`
  width: 100%;
  padding: 49px 54px 0 54px;

  display: flex;
  flex-direction: column;
`;

export const ImageBlockHeader = styled.header`
  margin-bottom: 20px;

  display: flex;
  gap: 15px;
`;

export const ImageBlockMain = styled.main`
  width: 100%;
  height: auto;

  background-color: aliceblue;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
`;

export const DateStyle = styled.div`
  font-size: 31px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -0.03em;

  color: rgba(238, 238, 238, 1);
`;

export const CountBallStyle = styled.div`
  width: fit-content;

  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  background: rgba(169, 229, 187, 1);

  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 1);
`;
