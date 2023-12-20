import { Routes, Route } from "react-router-dom";
import { BackIcon } from "./components/icons/BackIcon";
import { colors } from "../contants";
import {
  BackButtonStyled,
  StyledDiv,
} from "./components/icons/BackIcon.styled";

export const App = () => {
  return (
    <StyledDiv>
      <BackIcon />
    </StyledDiv>
  );
};
