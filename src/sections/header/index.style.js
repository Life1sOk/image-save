import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 129px;
  pointer-events: none;

  border-bottom: 1px solid rgba(238, 238, 238, 1);
  padding: 50px 54px 25px 54px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const CountAllStyle = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.03em;
  text-align: left;

  color: rgba(146, 154, 171, 1);
`;
