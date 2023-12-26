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

export const FormulaWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }


`;

export const FormulaText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${colors.GRAY};
  & + .highlight {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
    color: ${colors.BLUE};
  }
`;

export const HelperWrap = styled.div`
  display: flex;
  gap: 4px;
`;

export const Info = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${colors.PROVINCIAL_PINK};
`;

export const InfoText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: #8f8f8f;
  & span {
    color: ${colors.BLUE};
  }
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

export const InputField = styled(Field)`
  padding: 12px 10px;
  margin-top: 8px;
  width: 100%;
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
`;

export const ErrMessage = styled(ErrorMessage)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  color: ${colors.RED};
  margin-top: 4px;
  display: block;
`;

export const ResultWrap = styled.div`
  display: flex;
  align-items: center;
  ${FormulaText} {
    width: 190px;
  }
`;

export const Result = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  margin-left: 6px;
  color: ${colors.BLUE};
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
    margin-left: auto;
  }

`;

export const OptWrap = styled.div`
  display: flex;
  gap: 24px;
`;

export const CheckBox = styled(Field)`
  appearance: none;
  &:checked + div > .dot {
    opacity: 1;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const CustomCheck = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.BLUE};
  border-radius: 100%;
  margin-right: 8px;
`;

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  display: block;
  background-color: ${colors.BLUE};
  border-radius: 100%;
  opacity: 0;
`;
