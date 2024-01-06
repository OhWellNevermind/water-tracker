import { useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../constants";
import { Field, useFormikContext } from "formik";
const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 47px;
`;
const Dropdown = styled.div`
  position: absolute;
  bottom: -173px;
  left: 0;
  width: 120px;
  height: 220px;
  border-radius: 6px;
  z-index: 10000;
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.PROVINCIAL_PINK};
  overflow-y: scroll;
`;
const Options = styled.div`
  width: 100%;
  height: 20px;
  &:nth-of-type(even) {
    background-color: ${colors.LIGHT_GRAY};
  }

  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${colors.BLUE};
`;
export const InputField = styled(Field)`
  padding: 12px 10px;
  width: 120px;
  border-radius: 6px;
  border: 1px solid ${colors.PROVINCIAL_PINK};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${colors.BLUE};
  &.error {
    border: 1px solid ${colors.RED};
    color: ${colors.RED};
  }
  &.hide {
    z-index: -10;
    display: none;
  }
`;

const pickTimeFromCurrDate = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const date = new Date(year, month, day, 0, 0, 0, 0);
  return date.getTime();
};

export const selects = () => {
  let time = pickTimeFromCurrDate();
  const currTime = new Date();
  let closestOpt = null || time;

  const arr = [];
  for (let i = 0; i < 288; i++) {
    let dateOpt = new Date(time);
    const hours =
      dateOpt.getHours() < 10
        ? `0${dateOpt.getHours()}`
        : `${dateOpt.getHours()}`;
    const minutes =
      dateOpt.getMinutes() < 10
        ? `0${dateOpt.getMinutes()}`
        : `${dateOpt.getMinutes()}`;
    arr.push({ timestamp: time, time: `${hours}:${minutes}` });
    if (
      currTime.getTime() - time <= 300000 &&
      currTime.getTime() - time > 0
    ) {
      closestOpt = { timestamp: time, time: `${hours}:${minutes}` };
    }
    time += 300000;
  }
  return { arr, closestOpt };
};


const CustomSelect = ({ onChange, OnBlur, value, name }) => {
  const [open, setOpen] = useState(false);
  const { arr: selectOpts, closestOpt } = selects();
  const [selectedOpt, setSelectedOpt] = useState({
    value: closestOpt.timestamp,
    time: closestOpt.time,
  });
  const optRef = useRef(null);

  const formikProps = useFormikContext();
  const dropHandle = (e) => {
    setSelectedOpt({ value: e.target.dataset.value, time: e.target.innerText });
    setOpen(false);
    formikProps.setFieldValue(name, e.target.dataset.value);
  };
  return (
    <Wrap>
      <InputField
        className={open && "hide"}
        name={name}
        as="select"
        onChange={(e) => console.log(onChange)}
        OnBlur={OnBlur}
        value={value}
        onClick={() => setOpen(true)}
      >
        <option ref={optRef} value={selectedOpt.value}>
          {selectedOpt.time}
        </option>
      </InputField>
      {open && (
        <Dropdown
          onClick={dropHandle}
        >
          {selectOpts.map((el) => {
            return (
              <Options key={el.timestamp} data-value={el.timestamp}>
                {el.time}
              </Options>
            );
          })}
        </Dropdown>
      )}
    </Wrap>
  );
};

export default CustomSelect;
