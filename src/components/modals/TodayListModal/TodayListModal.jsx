import { colors } from "../../../constants";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import {
  AmountWater,
  BackgroundPortion,
  Button,
  CloseButton,
  EnterValueWater,
  Input,
  Modal,
  ScoreBoard,
  Title,
  TitleCorrectEnteredData,
  TitleRecordingTime,
  ValueTime,
  ValueWater,
  WrapButtonSave,
} from "./TodayListModal.styled";
import { Container } from "../../Container/Container";
import { Glass } from "../../icons/Glass";
import { TimeSelector } from "../../TimeSelect/TimeSelect";
import { CloseIcon } from "../../icons/CloseIcon";
import { CounterEditWater } from "../CounterEditWater/CounterEditModal";
import { useState } from "react";

export const TodayListModal = ({
  setOpen,
  valueWater = 250,
  valueTime = "7:00",
}) => {
  const [count, setCount] = useState(0);
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setCount(newValue);
  };
  return (
    <BaseModalWrap onClose={() => setOpen(false)}>
      <Container>
        <Modal>
          <CloseButton onClick={() => setOpen(false)}>
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
          <CounterEditWater
            newCount={count}
            onCountChange={handleCountChange}
          />
          <TitleRecordingTime>Recording time:</TitleRecordingTime>
          <TimeSelector />
          <EnterValueWater>Enter the value of the water used:</EnterValueWater>
          <Input
            name="value"
            value={count}
            onChange={handleInputChange}
          ></Input>
          <WrapButtonSave>
            <ScoreBoard>{count}ml</ScoreBoard>
            <Button type="submit">Save</Button>
          </WrapButtonSave>
        </Modal>
      </Container>
    </BaseModalWrap>
  );
};
