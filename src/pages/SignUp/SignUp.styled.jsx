import styled from "styled-components";
import { colors } from "../../constants";

export const StyledBackground = styled.div`
  width: 100%;
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/images/mobile/BackgroundElementSignin-min.png");
  background-repeat: no-repeat;
  background-size: auto;
  z-index: -2;
  @media (min-width: 321px) {
    background-size: cover;
    /* top: 52px; */
  }
  @media (min-width: 768px) {
    background-image: url("/src/assets/images/tablet/BackgroundBubblesHomeTablet-min.png");
    top: 90px;
    height: 100%;
    /* left: -20px; */
  }
  @media (min-width: 1440px) {
    background-image: url("/src/assets/images/desktop/BackgroundBubblesHomeDesktop-min.png");
    background-size: contain;
    top: 70px;
  }
`;

export const Bottle = styled.div`
  background: url("/src/assets/images/mobile/BottleForSigninMobile-min.png")
    bottom/contain no-repeat;
  z-index: -1;
  position: fixed;
  top: calc(100% - 225px);
  /* left: auto; */
  left: 50%;
  transform: translateX(-50%);
  /* left: 50%; */
  /* left: calc(10% - 20px); */
  /* bottom: 18px; */
  width: 280px;
  /* height: 100vh; */
  height: 210px;
  @media (min-width: 768px) {
    background: url("/src/assets/images/tablet/BottleHomeTablet-min.png")
      center/contain no-repeat;
    top: calc(100% - 564px);
    left: 112px;
    height: 548px;
    width: 736px;
    transform: translateX(0);
  }
  @media (min-width: 1440px) {
    background: url("/src/assets/images/desktop/BottleForSigninDesktop-min.png")
      center/contain no-repeat;
    /* margin-bottom: 40px; */
    left: -50px;
    /* top: 50px; */
    top: calc(100% - 720px);
    height: 680px;
    width: 916px;
  }
`;

export const SignUpForm = styled.form`
  /* position: fixed; */
  width: 280px;
  /* max-width: 386px; */
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    margin-left: 0;
    /* margin-right: 0; */
    /* align-content: star/t; */
    width: 336px;
  }
  @media (min-width: 1440px) {
    /* padding: 162px 0 0 0; */
    margin-left: auto;
    margin-right: 198px;
    /* margin-top: auto;
    margin-bottom: auto; */
    /* top: 160px;
    left: calc(100%-570px); */
    width: 384px;
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
  display: block;
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
  line-height: 1.25;
  width: 280px;
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

export const SignUpButton = styled.button`
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
  @media (min-width: 1440px) {
    width: 386px;
  }
`;

export const Link = styled.a`
  width: 50px;
  text-decoration: none;
  color: ${colors.BLUE};
  &:hover {
    color: ${colors.ORANGE};
  }
`;

export const IconButton = styled.button`
  position: absolute;
  left: calc(280px - 26px);
  top: 13px;
  background-color: transparent;
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
  /* display: flex;
  justify-content: center; */
  /* margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    justify-content: start;
  }
  @media (min-width: 1440px) {
    justify-content: flex-end;
    margin-right: 166px;
  } */
  height: 100vh;
  @media (min-width: 320px) {
    padding: 24px 20px;
  }
  @media (min-width: 768px) {
    padding: 40px 32px;
  }
  @media (min-width: 1440px) {
    padding: 140px 0 40px 0;
  }
`;
