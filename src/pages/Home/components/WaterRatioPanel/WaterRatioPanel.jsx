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
//import { ProgressBar } from "react-loader-spinner";

export const WaterRatioPanel = () => {
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
      <div>
        <Button>
          <CirclePlus width={24} height={24} stroke={"#fff"} />
          <AddWater>Add water</AddWater>
        </Button>
      </div>
    </WaterPanelContainer>
  );
};

/*import {
  AddWater,
  Bar,
  Button,
  ContainerBar,
  DecorList,
  Dot,
  End,
  List,
  Middle,
  ProgressBar,
  Start,
  Title,
  TitleWaterPanel,
  WaterPanel,
} from "./WaterRatioPanel.styled";
import { CirclePlus } from "../../../../components/icons/CirclePlus";
//import { ProgressBar } from "react-loader-spinner";

export const WaterRatioPanel = () => {
  return (
    <div>
      <TitleWaterPanel>
        <Title>Today</Title>
        <ContainerBar>
          <Bar>
            <ProgressBar></ProgressBar>
          </Bar>
          <Dot></Dot>
        </ContainerBar>
        <WaterPanel>
          <List>
            <DecorList></DecorList>
            <Start>0%</Start>
          </List>
          <List>
            <DecorList></DecorList>
            <Middle>50%</Middle>
          </List>
          <List>
            <DecorList></DecorList>
            <End>100%</End>
          </List>
        </WaterPanel>
      </TitleWaterPanel>
      <div>
        <Button>
          <CirclePlus width={24} height={24} stroke={"#fff"} />
          <AddWater>Add water</AddWater>
        </Button>
      </div>
    </div>
  );
}; */
