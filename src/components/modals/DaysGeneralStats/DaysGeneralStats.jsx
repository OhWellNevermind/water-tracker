import { useEffect } from "react";
import {
  DayModalStats,
  DayModalStatsCountWaterTrackers,
  DayModalStatsDailyNorma,
  DayModalStatsDate,
  DayModalStatsPercent,
  DayModalStatsAccent,
} from "./DaysGeneralStats.styled";

import { forwardRef } from "react";

export const DaysGeneralStats = ({
  handleOutsideClick,
  modalRef,
  date,
  dailyNorma,
  precent,
  quantityWaterTrack,
  positionModal
}) => {
  const WrapDayModalStats = forwardRef((props, ref) => (
    <DayModalStats ref={ref} top={positionModal.top} left={positionModal.left}>
      <DayModalStatsDate>{date}</DayModalStatsDate>
      <DayModalStatsDailyNorma>
        Daily norma:<DayModalStatsAccent>{dailyNorma}</DayModalStatsAccent>
      </DayModalStatsDailyNorma>
      <DayModalStatsPercent>
        Fulfillment of the daily norm:
        <DayModalStatsAccent>{precent}</DayModalStatsAccent>
      </DayModalStatsPercent>
      <DayModalStatsCountWaterTrackers>
        How many servings of water:
        <DayModalStatsAccent>{quantityWaterTrack}</DayModalStatsAccent>
      </DayModalStatsCountWaterTrackers>
    </DayModalStats>
  ));
  WrapDayModalStats.displayName = "WrapDayModalStats";
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return <WrapDayModalStats ref={modalRef} />;
};
