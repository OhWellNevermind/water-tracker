import { DailyNorma } from "./components/DailyNorma/DailyNorma";
import { MonthStatsTable } from "./components/MonthStatsTable/MonthStatsTable";
import { TodayWaterList } from "./components/TodayWaterList/TodayWaterList";
import { WaterRatioPanel } from "./components/WaterRatioPanel/WaterRatioPanel";
import {
  ContainerHome,
  WrapTodayAndMonth,
  DailyNormaAndWaterRatioPanel,
} from "./Home.styled";

export const Home = () => {
  return (
    <>
      <ContainerHome>
        <DailyNormaAndWaterRatioPanel>
          <DailyNorma />
          <WaterRatioPanel />
        </DailyNormaAndWaterRatioPanel>
        <WrapTodayAndMonth>
          <TodayWaterList />
          <MonthStatsTable />
        </WrapTodayAndMonth>
      </ContainerHome>
    </>
  );
};
