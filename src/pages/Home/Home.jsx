import { DailyNorma } from "./components/DailyNorma/DailyNorma";
import { MonthStatsTable } from "./components/MonthStatsTable/MonthStatsTable";
import { TodayWaterList } from "./components/TodayWaterList/TodayWaterList";
import { WaterRatioPanel } from "./components/WaterRatioPanel/WaterRatioPanel";
import {
  ContainerHome,
  WrapTodayAndMonth,
  DailyNormaAndWaterRatioPanel,
} from "./Home.styled";

export const Home = ({ setModalName, setTodayPortionData }) => {
  return (
    <>
      <ContainerHome>
        <DailyNormaAndWaterRatioPanel>
          <DailyNorma />
          <WaterRatioPanel setModalName={setModalName} />
        </DailyNormaAndWaterRatioPanel>
        <WrapTodayAndMonth>
          <TodayWaterList
            setModalName={setModalName}
            setTodayPortionData={setTodayPortionData}
          />
          <MonthStatsTable />
        </WrapTodayAndMonth>
      </ContainerHome>
    </>
  );
};
