import styled from "styled-components";
import { colors } from "../../constants";

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  /* height: 100vh; */
`;

export const StyledBackground = styled.div`
  /* content: ""; */
  position: fixed;
  /* top: 154px; */
  top: 51px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url("/src/assets/images/mobile/BackgroundElementSignin-min.png")
    center/contain no-repeat;
  z-index: -1;
`;

export const SignUpForm = styled.form`
  /* width: 280px; */
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${colors.LIGHT_BLUE};
  background: var(#fff);

  color: ${colors.LIGHT_GRAY};
  font-size: 16px;
  line-height: 1.25; /* 125% */
`;

export const Button = styled.button`
  margin-bottom: 16px;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: ${colors.BLUE};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.BLUE};
`;
