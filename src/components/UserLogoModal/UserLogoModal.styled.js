import styled from "styled-components";
// import { colors } from "../../constants";
export const UserLMWrapper = styled.div`
  height: 100vh;
  width: 320px;
  position: absolute;
  left: 58%;
  bottom: -22%;

  @media (min-width: 768px) {
    width: 768px;
    left: 54%;
    bottom: -28%;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    left: 52%;
    bottom: -22%;
  }
`;
export const UserLMDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 118px;
  padding: 16px;
  gap: 16px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  position: absolute;
  top: 48px;
  right: 55%;

  @media (min-width: 768px) {
    top: 56px;
    right: 54%;
  }

  @media (min-width: 1440px) {
    right: 57.5%;
  }
`;
export const UserLMBtn = styled.button`
  display: flex;
  width: 100%;
  border: none;
  padding: 0;
  gap: 8px;
  background-color: transparent;
  cursor: pointer;
  align-items: center;

  /* &:hover > ,
  &:focus-within >  {
    color: #ff9d43;
  } */
`;
export const UserLMText = styled.p`
  color: #407bff;
`;
