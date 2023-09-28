import styled from "styled-components";

export const StatusModalStyle = styled.div<{ $isError: boolean }>`
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 444;

  overflow: hidden;

  width: 320px;
  height: fit-content;
  padding: 20px;
  background: #f7f7f7;
  box-shadow: 0px 17px 40px rgba(57, 62, 70, 0.2);
  border-radius: 10px;
  border: 1px #eeeeee solid;

  display: ${({ $isError }) => ($isError ? "inline-flex" : "none")};
  flex-direction: column;
  gap: 5px;

  animation-name: transitionUp;
  animation-duration: 1s;

  @keyframes transitionUp {
    from {
      transform: translateY(calc(100% + 60px));
    }
    to {
      transform: translateY(0);
    }
  }
`;

const TextBase = styled.span`
  font-size: 15px;
  font-family: Inter;
  line-height: 18.75px;
  word-wrap: break-word;
`;

export const Title = styled(TextBase)`
  color: #e3170a;
  font-weight: 700;
`;

export const Text = styled(TextBase)`
  color: #393e46;
  font-weight: 400;
`;
