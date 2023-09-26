import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export const MainSkelWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const SkeletonStyle = styled.div`
  border-radius: 10px;
  background-color: rgba(247, 247, 247, 1);
`;
