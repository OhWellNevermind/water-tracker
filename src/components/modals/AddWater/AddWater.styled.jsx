import styled from "styled-components";
import { colors } from "../../../constants";
import { ErrorMessage, Field, Form } from "formik";

export const Window = styled.div`
  width: 280px;
  border-radius: 10px;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${colors.WHITE};
  @media (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media (min-width: 1440px) {
    width: 592px;
  }
`;

export const TitleWrap = styled.div`
  width: 100%;
  position: relative;
  & button {
    padding: 0;
    height: 24px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 4px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DataWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: ${colors.GRAY};
`;

export const FormulaText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
  color: ${colors.GRAY};
  /* & + .highlight {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
    color: ${colors.BLUE};
  } */
`;

export const AddWaterWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.LIGHT_BLUE};
  background-color: ${colors.WHITE};
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  &.disabled {
    border: 1px solid ${colors.LIGHT_GRAY};
    box-shadow: none;
  }
`;

export const AmountWrap = styled.div`
  width: 92px;
  height: 36px;
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: ${colors.PROVINCIAL_PINK};
`;

export const Result = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  color: ${colors.BLUE};
`;

export const InputField = styled(Field)`
  padding: 12px 10px;
  position: relative;
  margin-top: 8px;
  border-radius: 6px;
  border: 1px solid ${colors.PROVINCIAL_PINK};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 120px;
  color: ${colors.BLUE};
  &.error {
    border: 1px solid ${colors.RED};
    color: ${colors.RED};
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${colors.RED};
  margin-top: 4px;
  display: block;
`;

export const SubmitWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const SaveBtn = styled.button`
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: ${colors.BLUE};
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
  color: ${colors.WHITE};
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  @media (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
`;
