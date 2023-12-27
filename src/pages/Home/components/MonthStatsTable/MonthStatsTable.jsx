import { ChevronDownIcon } from "../../../../components/icons/ChevronDownIcon";
import { colors } from "../../../../constants";
import { MonthStatsTableList } from "../MonthStatsTableList/MonthStatsTableList";
import {
  MonthDate,
  MonthDateBtn,
  MonthDateText,
  MonthTitle,
  MonthTopLine,
} from "./MonthStatsTable.styled";

export const MonthStatsTable = () => {
  return (
    <>
      <MonthTopLine>
        <MonthTitle>Month</MonthTitle>
        <MonthDate>
          <MonthDateBtn rotate={"90"}>
            <ChevronDownIcon width={14} height={14} stroke={colors.BLUE} />
          </MonthDateBtn>
          <MonthDateText>{"April"}</MonthDateText>
          <MonthDateBtn rotate={"270"}>
            <ChevronDownIcon width={14} height={14} stroke={colors.BLUE} />
          </MonthDateBtn>
        </MonthDate>
      </MonthTopLine>
      <MonthStatsTableList />
    </>
  );
};
