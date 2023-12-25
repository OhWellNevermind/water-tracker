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
  /* top: 51px;
   */
  top: 70px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/images/mobile/BackgroundElementSignin-min.png");
  background-repeat: no-repeat;
  /* background-position: bottom; */
  z-index: -2;
  @media (min-width: 768px) {
    background: url("/src/assets/images/tablet/BackgroundBubblesSignInTabletimin.png")
      center/contain no-repeat;
    top: 0px;
    left: 0;
    height: 680px;
  }
`;

export const Bottle = styled.div`
  background: url("/src/assets/images/mobile/BottleForSigninMobile-min.png")
    bottom/contain no-repeat;
  z-index: -1;
  position: fixed;
  bottom: 18px;

  /* top: 51px;  */

  /* left: 50%; */
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  height: 100vh;
  @media (min-width: 768px) {
    background: url("/src/assets/images/tablet/BottleHomeTablet-min.png")
      center/contain no-repeat;
    top: 116px;
    left: 112px;
    height: 548px;
    width: 736px;
  }
`;

export const SignInForm = styled.form`
  /* width: 280px;
   */
  /* width: calc(100% - 40px); */
  width: 100%;
  max-width: 386px;
  /* padding: 24px 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  /* align-content: center; */

  /* flex-wrap: wrap; */
  /* align-content: normal; */
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    /* width: 336px; */
    /* padding: 108px 32px 16px; */
    align-content: start;
  }
  @media (min-width: 1440px) {
    /* align-content: end; */
    /* padding: 162px 198px 32px 16px; */

    /* flex-wrap: wrap;
    align-content: end; */
  }
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  color: ${colors.GRAY};
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: ${colors.GRAY};
  font-size: 18px;
  line-height: 1.33;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${colors.PROVINCIAL_PINK};
  background: var(#fff);

  color: ${colors.GRAY};
  font-size: 16px;
  line-height: 1.25; /* 125% */
  width: 280px;
  /* margin-left: auto;
  margin-right: auto; */
  /* max-width: 336px; */
  &::placeholder {
    color: ${colors.LIGHT_BLUE};
  }
  @media (min-width: 768px) {
    width: 336px;
    height: 44px;
  }
  @media (min-width: 1440px) {
    width: 386px;
  }
`;

export const SignInButton = styled.button`
  margin-bottom: 16px;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: ${colors.BLUE};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  &:active {
    box-shadow: none;
  }
  @media (min-width: 768px) {
    width: 336px;
    height: 44px;
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.BLUE};
`;

export const IconButton = styled.button`
  position: absolute;
  /* left: calc(100% - 30px);
   */
  /* left: calc(336px - 30px); */
  right: 15px;
  top: 14px;
  background-color: white;
  border: none;
  width: 16px;
  @media (min-width: 768px) {
    left: 303px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;
