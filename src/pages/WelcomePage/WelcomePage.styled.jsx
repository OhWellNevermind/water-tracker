import styled from "styled-components";
import BackgroundImageTablet from "../../../src/assets/images/tablet/BackgroundMainPageTablet-min.png";
import BackgroundImageDesktop from "../../../src/assets/images/desktop/BackgroundMainPageDesktop-min.png";
import BackgroundImageTablet2x from "../../../src/assets/images/tablet/BackgroundMainPageTablet@2x-min.png";
import BackgroundImageDesktop2x from "../../../src/assets/images/desktop/BackgroundMainPageDesktop@2x-min.png";

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100vw;
  height: 100%;
  background-image: url(${BackgroundImageTablet});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi) {
    background-image: url(${BackgroundImageTablet2x});
  }

  @media (min-width: 600px) {
    background-size: cover;
  }

  @media (min-width: 768px) {
    background-image: url(${BackgroundImageDesktop});
    background-size: contain;
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 300dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BackgroundImageDesktop2x});
    }
  }
  @media (min-width: 1440px) {
    background-image: url(${BackgroundImageDesktop});
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi) {
      background-image: url(${BackgroundImageDesktop2x});
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  padding-bottom: 100px;
  overflow: auto;

  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-top: 80px;
    display: flex;
    justify-content: center;
  }
`;
