import styled from "styled-components";
import { colors } from "../../../constants";

export const ModalContainer = styled.div`
  max-height: 90%;
  padding: 32px 12px;
  background-color: white;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  color: ${colors.GRAY};
  margin-bottom: 24px;
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: ${colors.GRAY};
  margin-bottom: ${({ type }) => (type === "main" ? 12 : 8)}px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.label`
  color: ${colors.GRAY};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 8px;
`;

export const Image = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: black;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UploadImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;

export const GenderInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GenderText = styled.label`
  color: ${colors.GRAY};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;

export const GenderInput = styled.input`
  appearance: none;
  margin: 0;
  width: 14px;
  height: 14px;
  border: 2px solid ${colors.BLUE};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 7px;
    height: 7px;
    margin: 2px;
  }

  &:checked::after {
    background-color: ${colors.BLUE};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 8px 0;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  border-radius: 10px;
  background-color: ${colors.BLUE};
  color: ${colors.WHITE};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: 0px 0px 0px 0px rgba(64, 123, 255, 0.34);
  }
  @media (min-width: 321px) {
    width: 256px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
