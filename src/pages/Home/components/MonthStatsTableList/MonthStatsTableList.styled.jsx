import styled from "styled-components";
import { colors } from "../../../../constants";

export const MonthList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 26px;
  @media screen and (min-width: 768px) {
    row-gap: 20px;
    column-gap: 34px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }
`;

export const MonthItem = styled.li`
  width: calc((100% - 4 * 26px) / 5);
  text-align: center;
  @media screen and (min-width: 768px) {
    width: calc((100% - 9 * 34px) / 10);
  }
  @media screen and (min-width: 1440px) {
    width: calc((100% - 9 * 22px) / 10);
  }
`;

export const MonthDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1.28;
  background-color: ${colors.WHITE};
  border: 1px solid
    ${({ iscompleted }) =>
      iscompleted === "true" ? colors.ORANGE : "transparent"};
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const MonthPercent = styled.span`
  display: block;
  color: ${colors.LIGHT_BLUE};
  font-size: 10px;
  line-height: 1.6;
`;
