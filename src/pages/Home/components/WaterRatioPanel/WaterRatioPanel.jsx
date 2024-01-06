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
//import { useState } from "react";
//import TodayListModal from "./TodayListModal";

export const WaterRatioPanel = ({ setModalName }) => {
  //const [isModalOpen, setModalOpen] = useState(false);

  /*   const handleAddWater = () => {
    setModalOpen(true);
  }; */

  /*   const handleModalClose = () => {
    setModalOpen(false);
  }; */

  return (
    <WaterPanelContainer>
      <TitleWaterPanel>
        <Title>Today</Title>
        <ContainerBar>
          <Bar>
            <ProgressBar></ProgressBar>
          </Bar>
          <Dot></Dot>
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
      <Button /* onClick={handleAddWater} */>
        <CirclePlus width={24} height={24} stroke={"#fff"} />
        <AddWater onClick={() => setModalName("addWater")}>Add water</AddWater>
      </Button>
      {/*  {isModalOpen && (
        <TodayListModal onClose={handleModalClose} onSave={handleWaterInput} />
      )} */}
    </WaterPanelContainer>
  );
};
