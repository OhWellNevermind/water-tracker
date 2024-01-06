import { MonthDate, MonthItem, MonthList, MonthPercent } from "./MonthStatsTableList.styled";
const counts = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
export const MonthStatsTableList = () => {
  return (
    <MonthList>
      {counts.map((item) => {
        return (
          <MonthItem key={item + "id"}>
            <MonthDate>{item}</MonthDate>
            <MonthPercent>{"100%"}</MonthPercent>
          </MonthItem>
        );
      })}
    </MonthList>
  );
};
