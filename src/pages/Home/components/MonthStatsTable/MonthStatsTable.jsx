import { useEffect, useState } from "react";
import { ChevronDownIcon } from "../../../../components/icons/ChevronDownIcon";
import { colors } from "../../../../constants";
import { MonthStatsTableList } from "../MonthStatsTableList/MonthStatsTableList";
import {
  MonthContainer,
  MonthDate,
  MonthDateBtn,
  MonthDateText,
  MonthTitle,
  MonthTopLine,
} from "./MonthStatsTable.styled";

export const MonthStatsTable = () => {
  const date = new Date();
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [nextDisable, setNextDisable] = useState(true);
  const [monthCount, setMonthCount] = useState(
    new Date(year, month + 1, 0).getDate()
  );

  useEffect(() => {
    setMonthCount(new Date(year, month + 1, 0).getDate());
    if (year === currentYear && month === currentMonth) {
      setNextDisable(true);
      return;
    }
    setNextDisable(false);

  }, [month, year]);

  const changeMonth = (val) => {
    if (val > 11) {
      setMonth(0);
      setYear(year + 1);
    } else if (val < 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(val);
    }
  };
  return (
    <MonthContainer>
      <MonthTopLine>
        <MonthTitle>Month</MonthTitle>
        <MonthDate>
          <MonthDateBtn onClick={() => changeMonth(month - 1)} rotate={"90"}>
            <ChevronDownIcon width={14} height={14} stroke={colors.BLUE} />
          </MonthDateBtn>
          <MonthDateText>{`${monthList[month]}, ${year}`}</MonthDateText>
          <MonthDateBtn
            onClick={() => changeMonth(month + 1)}
            rotate={"270"}
            disabled={nextDisable}
          >
            <ChevronDownIcon width={14} height={14} stroke={colors.BLUE} />
          </MonthDateBtn>
        </MonthDate>
      </MonthTopLine>
      <MonthStatsTableList
        year={year}
        monthNumber={month + 1}
        monthName={monthList[month]}
        monthCount={monthCount}
      />
    </MonthContainer>
  );
};
