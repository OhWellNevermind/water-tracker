import {
  CheckBox,
  CustomCheck,
  DataWrap,
  Dot,
  ErrMessage,
  FormulaText,
  FormulaWrap,
  HelperWrap,
  Info,
  InfoText,
  InputField,
  Label,
  OptWrap,
  Result,
  ResultWrap,
  SaveBtn,
  StyledForm,
  Subtitle,
  Title,
  TitleWrap,
  Window,
} from "./DailyNorma.styled";
import { CloseIcon } from "../../icons/CloseIcon";
import { colors } from "../../../constants";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/user/selectors";
import toast from "react-hot-toast";
import { updateDailyNorma } from "../../../redux/user/operations";

const schema = Yup.object().shape({
  weight: Yup.string()
    .min(1, "Please enter valid value")
    .max(10, "Too big value")
    .required("This field is required"),
  time: Yup.string()
    .min(1, "Please enter valid value")
    .max(10, "Too big value")
    .required("This field is required"),
  volume: Yup.number()
    .min(0, "Please enter valid value")
    .max(5000, "The maximum value for water is 5000 ml")
    .required("This field is required"),
});

const FormContext = ({ updateResult }) => {
  const { values } = useFormikContext();
  useEffect(() => {
    switch (values.gender) {
      case "girl": {
        const normaG = (
          Number(values.weight) * 0.03 +
          Number(values.time) * 0.4
        ).toFixed(1);
        updateResult(normaG);
        break;
      }
      case "man": {
        const normaM = (
          Number(values.weight) * 0.04 +
          Number(values.time) * 0.6
        ).toFixed(1);
        updateResult(normaM);
        break;
      }
      default:
        break;
    }
  }, [values]);
  return null;
};
const DailyNorma = ({ onClose }) => {
  const [result, setResult] = useState(0);
  const gender = useSelector(selectUser).gender;
  const dispatch = useDispatch();

  const updateResult = (res) => {
    setResult(Number(res));
  };
  return (
    <BaseModalWrap onClose={onClose}>
      <Window>
        <TitleWrap>
          <Title>My daily norma</Title>
          <button onClick={onClose}>
            <CloseIcon stroke={colors.BLUE} width={24} height={24} />
          </button>
        </TitleWrap>
        <div>
          <FormulaWrap>
            <HelperWrap>
              <FormulaText>For girl: </FormulaText>
              <p className="highlight"> V=(M*0,03) + (T*0,4)</p>
            </HelperWrap>
            <HelperWrap>
              <FormulaText>For man: </FormulaText>
              <p className="highlight"> V=(M*0,04) + (T*0,6)</p>
            </HelperWrap>
          </FormulaWrap>
          <Info>
            <InfoText>
              <span>*</span> V is the volume of the water norm in liters per
              day, M is your body weight, T is the time of active sports, or
              another type of activity commensurate in terms of loads (in the
              absence of these, you must set 0)
            </InfoText>
          </Info>
        </div>
        <Formik
          initialValues={{
            gender: gender === "female" ? "girl" : "man",
            weight: "0",
            time: "0",
            volume: 0,
          }}
          onSubmit={(values) => {
            if (values.volume === 0 && result === 0) {
              const notify = () =>
                toast(
                  "Please calculate your daily norma or type in desired amount of water in the last field"
                );
              notify();
              return;
            }
            values.volume === 0
              ? dispatch(updateDailyNorma(result))
              : dispatch(updateDailyNorma(values.volume));
            const notify = () => toast("Successfully updated!");
            notify();
            onClose();
          }}
          validationSchema={schema}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <DataWrap>
                <Subtitle>Calculate your rate:</Subtitle>
                <OptWrap>
                  <Label>
                    <CheckBox
                      type="radio"
                      name="gender"
                      id="gender"
                      value="girl"
                    />
                    <CustomCheck>
                      <Dot className="dot"></Dot>
                    </CustomCheck>
                    <FormulaText>For girl</FormulaText>
                  </Label>
                  <Label>
                    <CheckBox
                      type="radio"
                      name="gender"
                      id="gender"
                      value="man"
                    />
                    <CustomCheck>
                      <Dot className="dot"></Dot>
                    </CustomCheck>
                    <FormulaText>For man</FormulaText>
                  </Label>
                </OptWrap>
                <div>
                  <FormulaText>Your weight in kilograms:</FormulaText>
                  <InputField
                    className={errors.weight && touched.weight && "error"}
                    type="number"
                    min="0"
                    name="weight"
                    id="weight"
                  />
                  <ErrMessage component="span" name="weight" />
                </div>
                <div>
                  <FormulaText>
                    The time of active participation in sports or other
                    activities with a high physical. load:
                  </FormulaText>
                  <InputField
                    className={errors.time && touched.time && "error"}
                    type="number"
                    name="time"
                    min="0"
                    id="time"
                  />
                  <ErrMessage component="span" name="time" />
                </div>
                <ResultWrap>
                  <FormulaText>
                    The required amount of water in liters per day:
                  </FormulaText>
                  <Result>{result} L</Result>
                </ResultWrap>
              </DataWrap>
              <DataWrap>
                <Subtitle>Write down how much water you will drink:</Subtitle>
                <div>
                  <InputField
                    className={errors.volume && touched.volume && "error"}
                    type="number"
                    name="volume"
                    min="0"
                    step="0.01"
                  />
                  <ErrMessage component="span" name="volume" />
                </div>
              </DataWrap>
              <SaveBtn type="submit">Save</SaveBtn>
              <FormContext updateResult={updateResult} />
            </StyledForm>
          )}
        </Formik>
      </Window>
    </BaseModalWrap>
  );
};

export default DailyNorma;
