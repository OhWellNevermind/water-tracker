import { DailyNorma } from "./components/DailyNorma/DailyNorma";
import { MonthStatsTable } from "./components/MonthStatsTable/MonthStatsTable";
import { TodayWaterList } from "./components/TodayWaterList/TodayWaterList";
import { WaterRatioPanel } from "./components/WaterRatioPanel/WaterRatioPanel";
import { Container, WrapperHome } from "./Home.styled";

export const Home = () => {
  return (
    <Container>
      <WrapperHome>
        <DailyNorma />
        <WaterRatioPanel />
        <TodayWaterList />
        <MonthStatsTable />
      </WrapperHome>
    </Container>
  );
};
