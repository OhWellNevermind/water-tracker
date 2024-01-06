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
import { useDispatch } from "react-redux";
import { todayEditWater } from "../../../redux/waterTracker/operations";

export const TodayListModal = ({ onClose, todayPortionData }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(todayPortionData.valueWater);
  const [editingValue, setEditingValue] = useState(todayPortionData.valueWater);
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
    if (editingValue > 5000) {
      const notify = () => toast("The maximum value for water is 5000 ml");
      notify();
      return;
    }
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
      amountWater: count,
      date: 1704441797203,
    };

    dispatch(todayEditWater(data));
  };
  const handleSelectedOption = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <BaseModalWrap onClose={() => onClose()}>
      <Modal>
        <CloseButton onClick={() => onClose()}>
          <CloseIcon width={24} height={24} stroke={colors.BLUE} />
        </CloseButton>
        <Title>Edit the entered amount of water</Title>
        <BackgroundPortion>
          <Glass width={36} height={36} stroke={colors.BLUE} />
          <ValueWater>{todayPortionData.valueWater} ml</ValueWater>
          <ValueTime>{todayPortionData.valueTime}</ValueTime>
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
