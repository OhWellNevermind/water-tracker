import { useEffect, useState } from "react";
import {
  MonthDate,
  MonthItem,
  MonthList,
  MonthPercent,
} from "./MonthStatsTableList.styled";
import { getMonthTracker } from "../../../../redux/waterTracker/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectWaterMonthTracker } from "../../../../redux/waterTracker/selectors";

export const MonthStatsTableList = ({
  year,
  monthNumber,
  monthName,
  monthCount,
}) => {
  const monthTracker = useSelector(selectWaterMonthTracker);
  const [monthDays, setMonthDays] = useState(
    getDays(monthCount, monthTracker, monthName)
  );

  function getDays(days, trackers, month) {
    const monthDays = [];
    for (let i = 1; i <= days; i += 1) {
      const daySchema = {
        quantityWaterTrack: 0,
        dailyNorma: "1.22L",
        percentageWaterConsumed: "0%",
        date: `${i}, ${month}`,
      };
      const tracker = trackers.find((day) => {
        const [date] = day.date.split(",");
        return Number(date) === i;
      });
      if (tracker) {
        monthDays.push(tracker);
        continue;
      }
      monthDays.push(daySchema);
    }
    return monthDays;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const month =
      monthNumber.toString().length === 2 ? monthNumber : `0${monthNumber}`;
    dispatch(getMonthTracker(`${year}-${month}`));
  }, [year, monthNumber]); // запит для отмання трекеру води

  useEffect(() => {
    setMonthDays(getDays(monthCount, monthTracker, monthName));
  }, [monthTracker, monthCount, monthName]); // зміни днів у календарі

  return (
    <MonthList>
      {monthDays.map((item) => {
        const [day] = item.date.split(",");
        const percentageWaterConsumed = Number(
          item.percentageWaterConsumed.split("%")[0]
        );
        const precent =
          percentageWaterConsumed > 100 ? 100 : percentageWaterConsumed;
        return (
          <MonthItem key={item.date}>
            <MonthDate iscompleted={precent < 100}>{day}</MonthDate>
            <MonthPercent>{`${precent}%`}</MonthPercent>
          </MonthItem>
        );
      })}
    </MonthList>
  );
};
