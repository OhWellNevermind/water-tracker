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
import { Glass } from "../../icons/Glass";
import { TimeSelector } from "../../TimeSelect/TimeSelect";
import { CloseIcon } from "../../icons/CloseIcon";
import { CounterEditWater } from "../CounterEditWater/CounterEditModal";
import { useState } from "react";
import toast from "react-hot-toast";

export const TodayListModal = ({
  setOpen,
  valueWater = 250,
  valueTime = "7:00",
}) => {
  const [count, setCount] = useState(0);
  const [editingValue, setEditingValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleCountChange = (newCount) => {
    setEditingValue(newCount);
    setCount(newCount);
  };
  const handleInputChange = (e) => {
    if (/^\d+$/.test(e.target.value) || e.target.value === "") {
      setEditingValue(e.target.value);
    }
  };

  const handleInputBlur = () => {
    const newValue = parseInt(editingValue, 10) || 0;
    setCount(newValue);
  };

  const handlerSave = () => {
    if (!selectedOption) {
      const notify = () => toast("Select the recording time");
      notify();
      return;
    }
    if (editingValue > 5000) {
      const notify = () => toast("The maximum value for water is 5000 ml");
      notify();
      return;
    }

    const data = {
      time: selectedOption.label,
      portion: count,
    };
    console.log(data);
    return data;
  };
  const handleSelectedOption = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <BaseModalWrap onClose={() => setOpen(false)}>
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
        <TitleCorrectEnteredData>Correct entered data:</TitleCorrectEnteredData>
        <AmountWater>Amount of water:</AmountWater>
        <CounterEditWater newCount={count} onCountChange={handleCountChange} />
        <TitleRecordingTime>Recording time:</TitleRecordingTime>
        <TimeSelector onSelectedOption={handleSelectedOption} />
        <EnterValueWater>Enter the value of the water used:</EnterValueWater>
        <Input
          name="value"
          value={editingValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <WrapButtonSave>
          <ScoreBoard>{count}ml</ScoreBoard>
          <Button type="submit" onClick={handlerSave}>
            Save
          </Button>
        </WrapButtonSave>
      </Modal>
    </BaseModalWrap>
  );
};
