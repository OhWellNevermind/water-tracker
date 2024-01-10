import { useEffect, useRef, useState } from "react";
import {
  MonthDate,
  MonthItem,
  MonthList,
  MonthPercent,
} from "./MonthStatsTableList.styled";
import {
  getMonthTracker,
  updateMonthTrackerDate,
} from "../../../../redux/waterTracker/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDays,
  selectMonthTracker,
} from "../../../../redux/waterTracker/selectors";
import { DaysGeneralStats } from "../../../../components/modals/DaysGeneralStats/DaysGeneralStats";

export const MonthStatsTableList = ({
  year,
  monthNumber,
  monthName,
  monthCount,
}) => {
  const month =
    monthNumber.toString().length === 2 ? monthNumber : `0${monthNumber}`;
  const monthDays = useSelector((state) =>
    selectDays(state, monthCount, monthName, `${year}-${month}`)
  );
  const updateMonthListWithToday = useSelector(selectMonthTracker);
  const [selectedDay, setSelectedDay] = useState(null);
  const [positionModal, setPositionModal] = useState(null);

  const modalRef = useRef(null);
  const handleDayClick = (day, e) => {
    const clickedElement = e.target;

    const rect = clickedElement.getBoundingClientRect(); // Отримання розмірів та позиції елемента відносно вікна

    const position = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
    setSelectedDay(day === selectedDay ? null : day);
    const deviceWidth = window.innerWidth; // Ширина екрану користувача

    const isMobile = deviceWidth < 768;
    if (!isMobile) {
      const rectLeft = rect.left;

      if (rectLeft <= 292 && rectLeft + 292 <= deviceWidth) {
        position.left = rectLeft;
      } else {
        position.left = rectLeft - 292 + rect.width / 2;
      }
    }
    setPositionModal(position);
  };
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedDay(null);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthTracker(`${year}-${month}`));
    dispatch(updateMonthTrackerDate(`${year}-${month}`));
  }, [year, monthNumber]); // запит для отмання трекеру води

  useEffect(() => {
    dispatch(getMonthTracker(`${year}-${month}`));
  }, [updateMonthListWithToday]);
  return (
    <MonthList>
      {monthDays.map((item, idx) => {
        const [day] = item.date.split(",");
        const percentageWaterConsumed = Number(
          item.percentageWaterConsumed.split("%")[0]
        );
        const precent =
          percentageWaterConsumed > 100 ? 100 : percentageWaterConsumed;
        return (
          <MonthItem key={idx}>
            <MonthDate
              onClick={(e) => handleDayClick(day, e)}
              iscompleted={(precent < 100).toString()}
            >
              {day}
            </MonthDate>
            <MonthPercent>{`${precent}%`}</MonthPercent>
            {selectedDay === day && (
              <DaysGeneralStats
                modalRef={modalRef}
                handleOutsideClick={handleOutsideClick}
                date={item.date}
                dailyNorma={item.dailyNorma}
                precent={`${precent}%`}
                quantityWaterTrack={item.quantityWaterTrack}
                positionModal={positionModal}
              />
            )}
          </MonthItem>
        );
      })}
    </MonthList>
  );
};
