import styled from "styled-components";
import { colors } from "../../constants";
import { Link as ReactLink } from "react-router-dom";

import BackgroundElementSignin from "/src/images/mobile/BackgroundElementSignin-min.png";
import BackgroundBubblesHomeTablet from "/src/images/tablet/BackgroundBubblesHomeTablet-min.png";
import BackgroundBubblesHomeDesktop from "/src/images/desktop/BackgroundBubblesHomeDesktop-min.png";
import BottleForSigninMobile from "/src/images/mobile/BottleForSigninMobile-min.png";
import BottleHomeTablet from "/src/images/tablet/BottleHomeTablet-min.png";
import BottleForSigninDesktop from "/src/images/desktop/BottleForSigninDesktop-min.png";

export const StyledBackground = styled.div`
  position: fixed;
  width: 100%;
  top: 108px;
  left: 0;

  height: 100vh;
  background-image: url(${BackgroundElementSignin});
  background-repeat: no-repeat;
  background-size: auto;
  z-index: -2;
  @media (min-width: 321px) {
    background-size: cover;
  }
  @media (min-width: 768px) {
    background-image: url(${BackgroundBubblesHomeTablet});
    top: 90px;
    height: 100%;
  }
  @media (min-width: 1440px) {
    background-image: url(${BackgroundBubblesHomeDesktop});
    background-size: contain;
    top: 70px;
  }
`;

export const Bottle = styled.div`
  background: url(${BottleForSigninMobile}) bottom/contain no-repeat;
  z-index: -1;
  position: fixed;
  top: calc(100% - 225px);
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  height: 210px;
  @media (min-width: 768px) {
    background: url(${BottleHomeTablet}) center/contain no-repeat;
    top: calc(100% - 564px);
    left: 112px;
    height: 548px;
    width: 736px;
    transform: translateX(0);
  }
  @media (min-width: 1440px) {
    background: url(${BottleForSigninDesktop}) center/contain no-repeat;
    left: -50px;
    top: calc(100% - 720px);
    height: 680px;
    width: 916px;
  }
`;

export const SignInForm = styled.form`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    margin-left: 0;
    width: 336px;
  }
  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: 198px;
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
  &.input-error {
    margin-bottom: 4px;
    border-color: red;
    color: red;
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

  border: none;
  border-radius: 10px;
  color: #fff;

  background-color: ${colors.BLUE};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */

  &:active {
    box-shadow: none;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
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

export const Link = styled(ReactLink)`
  /* width: 50px;
   */
  display: block;
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

export const AuthMain = styled.main`
  @media (min-width: 320px) {
    padding: 24px 20px;
  }
  @media (min-width: 768px) {
    padding: 40px 32px;
  }
  @media (min-width: 1440px) {
    padding: 160px 0 40px 0;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  line-height: 1.28;
`;
