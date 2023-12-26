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
  /* max-width: 386px; */
  background-image: url("/src/assets/images/mobile/BackgroundElementSignin-min.png");
  background-repeat: no-repeat;
  /* background: url("/src/assets/images/mobile/BackgroundElementSignin-min.png")
    center/contain no-repeat; */
  background-size: auto;
  /* background-position: bottom; */
  z-index: -2;
  @media (min-width: 321px) {
    /* background-image: url("/src/assets/images/tablet/BackgroundBubblesSignInTabletimin.png"); */
    /* background-repeat: no-repeat; */
    /* background: url("/src/assets/images/mobile/BackgroundElementSignin-min.png")
    center/contain no-repeat; */
    background-size: cover;
    top: 52px;
    /* width: 760px; */
  }
  @media (min-width: 768px) {
    /* background: url("/src/assets/images/tablet/BackgroundBubblesSignInTabletimin.png")
      center/contain no-repeat; */
    background-image: url("/src/assets/images/tablet/BackgroundBubblesSignInTabletimin.png");
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
    /* width: 100%; */
    top: 0;
    left: 0;
    /* height: 680px; */
  }
  @media (min-width: 1440px) {
    background-image: url("/src/assets/images/desktop/BackgroundBubblesHomeDesktop-min.png");
    /* background-repeat: no-repeat; */
    background-size: contain;
    top: 70px;
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
  /* margin-right: auto;
  margin-left: auto; */
  /* width: 100%; */
  width: 320px;
  height: 100vh;
  @media (min-width: 768px) {
    background: url("/src/assets/images/tablet/BottleHomeTablet-min.png")
      center/contain no-repeat;
    top: 116px;
    left: 112px;
    height: 548px;
    width: 736px;
  }
  @media (min-width: 1440px) {
    background: url("/src/assets/images/desktop/BottleForSigninDesktop-min.png")
      center/contain no-repeat;
    /* top: calc(40px); */
    margin-bottom: 40px;
    left: -50px;
    top: 50px;
    height: 680px;
    width: 916px;
  }
`;

export const SignInForm = styled.form`
  /* width: 280px;
   */
  /* width: calc(100% - 40px); */
  /* width: 100%; */
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
    padding: 162px 0 0 0;

    /* flex-wrap: wrap;
    /* align-content: end; */
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

  color: ${colors.BLUE};
  font-size: 16px;
  line-height: 1.25; /* 125% */
  width: 280px;
  /* margin-left: auto;
  margin-right: auto; */
  /* max-width: 336px; */
  outline: none;
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
  width: 280px;
  height: 36px;
  margin-bottom: 16px;
  padding: 8px 30px;
  width: 280px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  background-color: ${colors.BLUE};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    width: 336px;
    height: 44px;
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
  }
  @media (min-width: 1440px) {
    width: 386px;
    &:active {
      box-shadow: none;
    }
  }
`;

export const Link = styled.a`
  width: 70px;
  text-decoration: none;
  color: ${colors.BLUE};
  &:hover {
    color: ${colors.ORANGE};
  }
`;

export const IconButton = styled.button`
  position: absolute;
  left: calc(280px - 26px);

  /* left: calc(336px - 30px); */
  top: 13px;
  background-color: white;
  border: none;
  width: 16px;
  height: 16px;
  padding: 0;
  @media (min-width: 768px) {
    left: 308px;
  }
  @media (min-width: 1440px) {
    left: calc(386px - 26px);
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    justify-content: start;
  }
  @media (min-width: 1440px) {
    justify-content: flex-end;
    margin-right: 166px;
  }
`;
