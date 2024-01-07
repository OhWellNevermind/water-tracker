import {
  WaterPanelContainer,
  TitleWaterPanel,
  Title,
  ContainerBar,
  Bar,
  ProgressBar,
  Dot,
  WaterPanel,
  DecorWrap,
  DecorList,
  List,
  Start,
  Middle,
  End,
  Button,
  AddWater,
} from "./WaterRatioPanel.styled";
import { CirclePlus } from "../../../../components/icons/CirclePlus";
import { useSelector } from "react-redux";
import { selectWaterPercentage } from "../../../../redux/waterTracker/selectors";

export const WaterRatioPanel = ({ setModalName }) => {
  const percentage = parseInt(useSelector(selectWaterPercentage));

  return (
    <WaterPanelContainer>
      <TitleWaterPanel>
        <Title>Today</Title>
        <ContainerBar>
          <Bar>
            <ProgressBar percentage={percentage > 100 ? 100 : percentage} />
            <Dot percentage={percentage > 100 ? 100 : percentage} />
          </Bar>
        </ContainerBar>
        <WaterPanel>
          <DecorWrap>
            <DecorList></DecorList>
            <DecorList></DecorList>
            <DecorList></DecorList>
          </DecorWrap>
          <List>
            <Start>0%</Start>
            <Middle>50%</Middle>
            <End>100%</End>
          </List>
        </WaterPanel>
      </TitleWaterPanel>
      <Button onClick={() => setModalName("addWater")}>
        <CirclePlus width={24} height={24} stroke={"#fff"} />
        <AddWater>Add water</AddWater>
      </Button>
      {/*  {isModalOpen && (
        <TodayListModal onClose={handleModalClose} onSave={handleWaterInput} />
      )} */}
    </WaterPanelContainer>
  );
};
