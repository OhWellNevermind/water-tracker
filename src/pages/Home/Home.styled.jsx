import styled from "styled-components";
import imgBackgroundMobile from "../../assets/images/mobile/BackgroundBubblesHomeMobile-min.png";
import imgBackgroundTablet from "../../assets/images/tablet/BackgroundBubblesHomeTablet-min.png";
import imgBackgroundDesktop from "../../assets/images/desktop/BackgroundBubblesHomeDesktop-min.png";

export const Container = styled.div`
  position: relative;
  padding: 0;
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
    display: flex;
    flex-direction: row;
    padding-left: 39px;
    padding-right: 112px;
    padding-bottom: 0;
    background-image: url(${imgBackgroundDesktop});
  }
`;

export const WrapTodayAndMonth = styled.div`
  padding: 0;
  display: flex;
  width: 280px;
  height: 836px;
  display: inline-flex;
  padding: 24px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  background: #ecf2ff;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media only screen and (min-width: 768px) {
    width: 704px;
    height: 688px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
    height: 680px;
    margin-top: 22px;
    margin-bottom: 40px;
    border-radius: 10px;
    background: #ecf2ff;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
    gap: 32px;
  }
`;
