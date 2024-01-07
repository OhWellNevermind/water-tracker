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
import { useDispatch, useSelector } from "react-redux";
import { todayEditWater } from "../../../redux/waterTracker/operations";
import { selectTodayWaterData } from "../../../redux/waterTracker/selectors";
import { setTodayWaterData } from "../../../redux/waterTracker/slice";

export const TodayListModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const waterSessionData = useSelector(selectTodayWaterData);
  const [count, setCount] = useState(waterSessionData.amountWater);
  const [editingValue, setEditingValue] = useState(
    waterSessionData.amountWater
  );
  const [selectedOption, setSelectedOption] = useState("");
  const [defaultOption, setDefaultOption] = useState("");
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
    if (!selectedOption && count === waterSessionData.amountWater) {
      const notify = () =>
        toast(
          "Select the recording time or change the value of the amount of water "
        );
      notify();
      return;
    }

    if (editingValue > 5000) {
      const notify = () => toast("The maximum value for water is 5000 ml");
      notify();
      return;
    }

    const currentDate = new Date(waterSessionData.date);
    const selectedTime = selectedOption ? selectedOption.value : defaultOption;

    const [hours, minutes] = selectedTime.split(":").map(Number);

    const timeMiliseconds = currentDate.setHours(hours, minutes, 0, 0);
    currentDate.setHours(currentDate.getHours() + 2);
    //const time = currentDate.toISOString().slice(0, 19);

    const data = {
      _id: waterSessionData.id,
      amountWater: count,
      date: timeMiliseconds,
    };

    dispatch(todayEditWater(data));
  };
  const handleSelectedOption = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleDefaultValue = (data) => {
    setDefaultOption(data);
  };
  return (
    <BaseModalWrap onClose={() => onClose()}>
      <Modal>
        <CloseButton
          onClick={() => {
            onClose();
            dispatch(
              setTodayWaterData({
                _id: "",
                amountWater: 0,
                date: "",
                owner: "",
              })
            );
          }}
        >
          <CloseIcon width={24} height={24} stroke={colors.BLUE} />
        </CloseButton>
        <Title>Edit the entered amount of water</Title>
        <BackgroundPortion>
          <Glass width={36} height={36} stroke={colors.BLUE} />
          <ValueWater>{waterSessionData.amountWater} ml</ValueWater>
          <ValueTime>
            {waterSessionData.date
              .split("T")[1]
              .split(":")
              .slice(0, 2)
              .join(":")}
          </ValueTime>
        </BackgroundPortion>
        <TitleCorrectEnteredData>Correct entered data:</TitleCorrectEnteredData>
        <AmountWater>Amount of water:</AmountWater>
        <CounterEditWater newCount={count} onCountChange={handleCountChange} />
        <TitleRecordingTime>Recording time:</TitleRecordingTime>
        <TimeSelector
          onSelectedOption={handleSelectedOption}
          onDefaultValue={handleDefaultValue}
          onSessionTime={waterSessionData.date}
        />
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
