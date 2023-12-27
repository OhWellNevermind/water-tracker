import { useEffect, useState } from "react";
import {
  AcounterWater,
  BackgroundValueWater,
  MinusCount,
  PlusCount,
  ValueWaterCounter,
} from "../TodayListModal/TodayListModal.styled";
import { MinusIcon } from "../../icons/MinusIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { colors } from "../../../constants";

export const CounterEditWater = ({ newCount, onCountChange }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(newCount);
  }, [newCount]);
  const increment = () => {
    setCount((prevCount) => prevCount + 50);
    onCountChange(count + 50);
  };

  const decrement = () => {
    if (!count) {
      return;
    }
    setCount((prevCount) => prevCount - 50);
    onCountChange(count - 50);
  };

  return (
    <AcounterWater>
      <MinusCount onClick={decrement}>
        <MinusIcon width={24} height={24} fill={colors.BLUE} />
      </MinusCount>
      <BackgroundValueWater>
        <ValueWaterCounter>{count} ml</ValueWaterCounter>
      </BackgroundValueWater>
      <PlusCount onClick={increment}>
        <PlusIcon width={24} height={24} stroke={colors.BLUE} />
      </PlusCount>
    </AcounterWater>
  );
};
