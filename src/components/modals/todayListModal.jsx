import { colors } from "../../constants";
import BaseModalWrap from "./ModalWrap/ModalWrap";
import {
  AcounterWater,
  AmountWater,
  BackgroundPortion,
  BackgroundValueWater,
  Button,
  CloseButton,
  EnterValueWater,
  Input,
  MinusCount,
  Modal,
  PlusCount,
  ScoreBoard,
  Title,
  TitleCorrectEnteredData,
  TitleRecordingTime,
  ValueTime,
  ValueWater,
  ValueWaterCounter,
} from "./todayListModal.styled";
import { Container } from "../Container/Container";
import { Glass } from "../icons/Glass";
import { MinusIcon } from "../icons/MinusIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { TimeSelector } from "../TimeSelect/TimeSelect";
import { CloseIcon } from "../icons/CloseIcon";

export const TodayListModal = ({
  setOpen,
  valueWater = 250,
  valueTime = "7:00",
}) => {
  return (
    <BaseModalWrap onClose={() => setOpen(false)}>
      <Container>
        <Modal>
          <CloseButton>
            <CloseIcon width={24} height={24} stroke={colors.BLUE} />
          </CloseButton>
          <Title>Edit the entered amount of water</Title>
          <BackgroundPortion>
            <Glass width={36} height={36} stroke={colors.BLUE} />
            <ValueWater>{valueWater} ml</ValueWater>
            <ValueTime>{valueTime}</ValueTime>
          </BackgroundPortion>
          <TitleCorrectEnteredData>
            Correct entered data:
          </TitleCorrectEnteredData>
          <AmountWater>Amount of water:</AmountWater>
          <AcounterWater>
            <MinusCount>
              <MinusIcon width={24} height={24} fill={colors.BLUE} />
            </MinusCount>
            <BackgroundValueWater>
              <ValueWaterCounter>{valueWater} ml</ValueWaterCounter>
            </BackgroundValueWater>
            <PlusCount>
              <PlusIcon width={24} height={24} stroke={colors.BLUE} />
            </PlusCount>
          </AcounterWater>
          <TitleRecordingTime>Recording time:</TitleRecordingTime>
          <TimeSelector />
          <EnterValueWater>Enter the value of the water used:</EnterValueWater>
          <Input name="value"></Input>
          <ScoreBoard>{valueWater}ml</ScoreBoard>
          <Button type="submit">Save</Button>
        </Modal>
      </Container>
    </BaseModalWrap>
  );
};
