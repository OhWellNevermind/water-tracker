import styled from "styled-components";
import { colors } from "../../../../constants";

export const MonthList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 26px;
`;

export const MonthItem = styled.li`
  width: calc((100% - 4 * 26px) / 5);
  text-align: center;
`;

export const MonthDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1.28;
  background-color: ${colors.WHITE};
  border: 1px solid transparent;
  border-radius: 50%;
`;

export const MonthPercent = styled.span`
  display: block;
  color: ${colors.LIGHT_BLUE};
  font-size: 10px;
  line-height: 1.6;
`;
