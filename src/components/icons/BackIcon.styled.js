import styled from "@emotion/styled";
import { BackIcon } from "./BackIcon";

export const BackButtonStyled = styled(BackIcon)`
  width: 24px;
  height: 24px;
  fill: red;
  color: red;

  &:hover {
    fill: blue;
    color: blue;
  }
`;

export const StyledDiv = styled.div`
  width: 24px;
  height: 24px;
  fill: red;
  color: red;

  &:hover {
    fill: blue;
    color: blue;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  &::after {
    content: "";
    display: flex;
    width: 10px;
    height: 2px;
    color: red;
    background-color: red;
  }
`;
