import { DailyNorma } from "./components/DailyNorma/DailyNorma";
import { MonthStatsTable } from "./components/MonthStatsTable/MonthStatsTable";
import { TodayWaterList } from "./components/TodayWaterList/TodayWaterList";
import { WaterRatioPanel } from "./components/WaterRatioPanel/WaterRatioPanel";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/user/operations";
import {
  ContainerHome,
  WrapTodayAndMonth,
  DailyNormaAndWaterRatioPanel,
  StyledBackground,
  Bottle,
} from "./Home.styled";

const Home = ({ setModalName }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const [open, setOpen] = useState(true);
  return (
    <>
      <ContainerHome>
        <StyledBackground />
        <Bottle />
        <DailyNormaAndWaterRatioPanel>
          <DailyNorma setModalName={setModalName} />
          <WaterRatioPanel setModalName={setModalName} />
        </DailyNormaAndWaterRatioPanel>
        <WrapTodayAndMonth>
          <TodayWaterList setModalName={setModalName} />
          <MonthStatsTable />
        </WrapTodayAndMonth>
      </ContainerHome>
    </>
  );
};

export default Home;
