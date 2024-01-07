import styled from "styled-components";
// import { colors } from "../../constants";
export const UserLMWrapper = styled.div`
  height: fit-content;
  position: absolute;
  top: 30px;
  right: 5px;
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
`;
export const UserLMText = styled.p`
  color: #407bff;
`;
