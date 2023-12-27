import styled from "styled-components";
import BackgroundImageMobile from "../../../src/assets/images/mobile/BackgroundMainPageMobile-min.png";
import BackgroundImageTablet from "../../../src/assets/images/tablet/BackgroundMainPageTablet-min.png";
import BackgroundImageDesktop from "../../../src/assets/images/desktop/BackgroundMainPageDesktop-min.png";
import BackgroundImageMobile2x from "../../../src/assets/images/mobile/BackgroundMainPageMobile@2x-min.png";
import BackgroundImageTablet2x from "../../../src/assets/images/tablet/BackgroundMainPageTablet@2x-min.png";
import BackgroundImageDesktop2x from "../../../src/assets/images/desktop/BackgroundMainPageDesktop@2x-min.png";

export const BG = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImageMobile});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi) {
    background-image: url(${BackgroundImageMobile2x});
  }

  @media (min-width: 768px) {
    background-image: url(${BackgroundImageTablet});
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 300dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BackgroundImageTablet2x});
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

  @media (min-width: 1440px) {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
`;
