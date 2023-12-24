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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: 8px;
  margin-bottom: 24px;
`;

export const UploadImageLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${colors.BLUE};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28; /* 128.571% */
`;

export const HiddentInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const CustomUploadContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;

export const GenderInputLabel = styled.label`
  color: ${colors.GRAY};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GenderInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const RadioButton = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid ${colors.BLUE};
  display: flex;
  justify-content: center;
  align-items: center;

  ${HiddentInput}:checked + &::after {
    content: "";
    /* display: block; */
    border-radius: 50%;
    width: 7px;
    height: 7px;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    background-color: ${colors.BLUE};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 12px;
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
  margin-bottom: 12px;
`;

export const TextInputContainer = styled.div`
  margin-bottom: 24px;
`;

export const TextInput = styled.input`
  width: 100%;
  border: 1px solid ${colors.PROVINCIAL_PINK};
  border-radius: 6px;
  padding: 12px 0 12px 10px;
  color: ${colors.BLUE};
  &::placeholder {
    color: ${colors.PROVINCIAL_PINK};
  }
`;

export const IconInputContainer = styled.div`
  position: relative;
`;

export const InputIcon = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 13px;
  right: 10px;
`;

export const InputWithIcon = styled.input`
  width: 100%;
  border: 1px solid ${colors.PROVINCIAL_PINK};
  border-radius: 6px;
  padding: 12px 0 12px 10px;
  color: ${colors.BLUE};
  &::placeholder {
    color: ${colors.PROVINCIAL_PINK};
  }
`;
