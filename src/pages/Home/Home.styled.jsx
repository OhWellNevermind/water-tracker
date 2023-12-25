import styled from "styled-components";
import imgBackgroundMobile from "../../assets/images/mobile/BackgroundBubblesHomeMobile-min.png";
import imgBackgroundTablet from "../../assets/images/tablet/BackgroundBubblesHomeTablet-min.png";
import imgBackgroundDesktop from "../../assets/images/desktop/BackgroundBubblesHomeDesktop-min.png";

export const Container = styled.div`
  position: relative;
`;

export const WrapperHome = styled.div`
  background-image: url(${imgBackgroundMobile});
  background-size: cover;
  z-index: 1;

  @media only screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 24px;
    padding-bottom: 40px;
    background-color: #fff;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 44px;
    padding-left: 32px;
    padding-right: 32px;
    background-image: url(${imgBackgroundTablet});
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-right: 112px;
    background-image: url(${imgBackgroundDesktop});
  }
`;
