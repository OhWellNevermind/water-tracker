import styled from "styled-components";
import { colors } from "../../../constants";

export const DayModalStats = styled.div`
  position: absolute;
  top: ${({ top }) => top - 14}px;
  left: 50%;
  z-index: 1;
  padding: 24px 13px;
  width: 280px;
  color: ${colors.GRAY};
  text-align: start;
  line-height: 1.25;
  background-color: ${colors.WHITE};
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  transform: translate(-50%, -100%);
  @media screen and (min-width: 768px) {
    width: 292px;
    top: ${({ top }) => top + 3}px;
    left: ${({ left }) => left}px;
    transform: translateY(-100%);
  }
`;
export const DayModalStatsCloseBtn = styled.button``;
export const DayModalStatsDate = styled.p`
  margin-bottom: 16px;
  color: ${colors.BLUE};
`;
export const DayModalStatsDailyNorma = styled.p`
  margin-bottom: 16px;
`;
export const DayModalStatsPercent = styled.p`
  margin-bottom: 16px;
`;
export const DayModalStatsCountWaterTrackers = styled.p``;
export const DayModalStatsAccent = styled.span`
  padding-left: 6px;
  font-size: 18px;
  font-weight: 500;
  color: ${colors.BLUE};
  line-height: 1.33;
`;
