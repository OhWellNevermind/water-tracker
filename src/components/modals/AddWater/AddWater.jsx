import { Field, Formik } from "formik";
import { colors } from "../../../constants";
import { CloseIcon } from "../../icons/CloseIcon";
import {
  AddWaterWrap,
  AmountWrap,
  DataWrap,
  ErrMessage,
  FormulaText,
  IconWrap,
  InputField,
  Result,
  SaveBtn,
  StyledForm,
  SubmitWrap,
  Subtitle,
  Title,
  TitleWrap,
  Window,
} from "./AddWater.styled";
import { MinusIcon } from "../../icons/MinusIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { useState } from "react";
import CustomSelect from "./CustomSelect";
import * as Yup from "yup";
import BaseModalWrap from "../ModalWrap/ModalWrap";

const pickTimeFromCurrDate = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const date = new Date(year, month, day, 0, 0, 0, 0);
  return date.getTime();
};

const schema = Yup.object().shape({
  time: Yup.string().required("This field is required"),
  volume: Yup.number()
    .min(1, "Volume can't be 0")
    .required("This field is required"),
});
const AddWater = ({ onClose }) => {
  const [btnAmount, setBtnAmount] = useState(0);
  const selects = () => {
    let time = pickTimeFromCurrDate();
    const currTime = new Date();
    let closestOpt = null || time;

    const arr = [];
    for (let i = 0; i < 288; i++) {
      if (
        currTime.getTime() - time <= 300000 &&
        currTime.getTime() - time > 0
      ) {
        closestOpt = time;
      }
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
      time += 300000;
    }
    return { arr, closestOpt };
  };
  const { closestOpt } = selects();
  const changeAmount = (e, props) => {
    const operation = e.currentTarget.id;
    const isFloat = btnAmount % 50 !== 0;
    switch (operation) {
      case "minus": {
        if (btnAmount === 0) return;
        if (isFloat) {
          const floored = Math.floor(btnAmount / 50) * 50;
          setBtnAmount(floored);
          props.setFieldValue("volume", floored);
        } else {
          const cur = btnAmount - 50;
          setBtnAmount(cur);
          props.setFieldValue("volume", cur);
        }
        break;
      }
      case "plus": {
        if (isFloat) {
          const ceiled = Math.ceil(btnAmount / 50) * 50;
          setBtnAmount(ceiled);
          props.setFieldValue("volume", ceiled);
        } else {
          const cur = btnAmount + 50;
          setBtnAmount(cur);
          props.setFieldValue("volume", cur);
        }
        break;
      }
      default:
        break;
    }
  };
  const onChange = (e, props) => {
    setBtnAmount(Number(e.target.value));
    return props.handleChange(e);
  };
  return (
    <BaseModalWrap onClose={onClose}>
      <Window>
        <TitleWrap>
          <Title>Add water</Title>
          <button onClick={onClose}>
            <CloseIcon stroke={colors.BLUE} width={24} height={24} />
          </button>
        </TitleWrap>
        <Formik
          initialValues={{ time: closestOpt, volume: btnAmount }}
          onSubmit={(v) => {
            console.log(v);
          }}
          validationSchema={schema}
        >
          {(props) => (
            <StyledForm onSubmit={props.handleSubmit}>
              <DataWrap>
                <Subtitle>Choose a value:</Subtitle>
                <div>
                  <FormulaText>Amount of water:</FormulaText>
                  <AddWaterWrap>
                    <IconWrap
                      onClick={(e) => {
                        changeAmount(e, props);
                      }}
                      className={btnAmount === 0 && "disabled"}
                      id="minus"
                    >
                      <MinusIcon
                        fill={btnAmount === 0 ? colors.LIGHT_GRAY : colors.BLUE}
                        width={24}
                        height={24}
                      />
                    </IconWrap>
                    <AmountWrap>
                      <Result>{btnAmount} ml</Result>
                    </AmountWrap>
                    <IconWrap
                      onClick={(e) => {
                        changeAmount(e, props);
                      }}
                      id="plus"
                    >
                      <PlusIcon stroke={colors.BLUE} width={24} height={24} />
                    </IconWrap>
                  </AddWaterWrap>
                </div>
              </DataWrap>
              <div>
                <FormulaText>Recording time:</FormulaText>
                <Field
                  name="time"
                  as={CustomSelect}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.time}
                />
              </div>
              <div>
                <Subtitle>Enter the value of the water used:</Subtitle>
                <InputField
                  className={props.errors.volume && "error"}
                  name="volume"
                  type="number"
                  min="0"
                  value={btnAmount === 0 && props.touched ? "" : btnAmount}
                  onChange={(e) => {
                    onChange(e, props);
                  }}
                />
                <ErrMessage component="span" name="volume" />
              </div>
              <SubmitWrap>
                <Result>{btnAmount} ml</Result>
                <SaveBtn type="submit">Save</SaveBtn>
              </SubmitWrap>
            </StyledForm>
          )}
        </Formik>
      </Window>
    </BaseModalWrap>
  );
};

export default AddWater;
