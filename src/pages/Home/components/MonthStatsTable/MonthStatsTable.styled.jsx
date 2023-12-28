import styled from "styled-components";
import { colors } from "../../../../constants";

export const MonthContainer = styled.div`
  width: 264px;
  height: 506px;
  @media only screen and (min-width: 768px) {
    width: 656px;
    height: 340px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
    height: 332px;
  }
`;

export const MonthTopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

export const MonthTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`;

export const MonthDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: ${colors.BLUE};
  text-align: center;
  line-height: 1.25;
`;

export const MonthDateBtn = styled.button`
  width: 16px;
  height: 16px;
  padding: 0;
  background-color: transparent;
  border: 1px solid transparent;
  transform: rotate(${({ rotate }) => rotate}deg);
`;

export const MonthDateText = styled.span``;
