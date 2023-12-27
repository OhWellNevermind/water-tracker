import { DailyNorma } from "./components/DailyNorma/DailyNorma";
import { MonthStatsTable } from "./components/MonthStatsTable/MonthStatsTable";
import { TodayWaterList } from "./components/TodayWaterList/TodayWaterList";
import { WaterRatioPanel } from "./components/WaterRatioPanel/WaterRatioPanel";
import { Container, WrapperHome, WrapTodayAndMonth } from "./Home.styled";

export const Home = () => {
  return (
    <Container>
      <WrapperHome>
        <div>
          <DailyNorma />
          <WaterRatioPanel />
        </div>
        <WrapTodayAndMonth>
          <TodayWaterList />
          <MonthStatsTable />
        </WrapTodayAndMonth>
      </WrapperHome>
    </Container>
  );
};
