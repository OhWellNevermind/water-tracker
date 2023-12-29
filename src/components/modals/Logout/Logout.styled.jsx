import { colors } from "../../../constants";
import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 24px;
  width: 280px;
  border-radius: 10px;
  background-color: ${colors.WHITE};
  @media (min-width: 768px) {
    width: 592px;
  }
`;

export const ButtonClose = styled.button`
  margin-top: 24px;
  width: 232px;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: ${colors.PROVINCIAL_PINK};
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  margin-right: 24px;
  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
`;

export const ButtonLogout = styled.button`
  margin-top: 24px;
  width: 232px;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: ${colors.RED};
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
`;

export const H2 = styled.h2`
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const Question = styled.p`
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
`;

export const Topic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyleClosePlus = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: ${colors.BLUE};
`;

export const ButtonClosePlus = styled.button`
  border: none;
  background-color: transparent;
`;

export const WrapDelete = styled.div`
  margin-top: 24px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;
export const Wrap = styled.div`
  margin-top: 24px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
  @media (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
  }
`;
