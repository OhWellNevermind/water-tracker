import styled from "styled-components";
import BackgroundImageMobile from '../../../src/assets/images/mobile/BackgroundMainPageMobile-min.png'
import BackgroundImageTablet from "../../../src/assets/images/tablet/BackgroundMainPageTablet-min.png";
import BackgroundImageDesktop from "../../../src/assets/images/desktop/BackgroundMainPageDesktop-min.png";
import BackgroundImageMobile2x from "../../../src/assets/images/mobile/BackgroundMainPageMobile@2x-min.png";
import BackgroundImageTablet2x from "../../../src/assets/images/tablet/BackgroundMainPageTablet@2x-min.png";
import BackgroundImageDesktop2x from "../../../src/assets/images/desktop/BackgroundMainPageDesktop@2x-min.png";
export const Container = styled.div`
  height: auto;
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 320px) {
    background: url(${BackgroundImageMobile});
  
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi) {
      background: url(${BackgroundImageMobile2x});
     
    }
  }
  @media (min-width: 768px) {
    background: url(${BackgroundImageTablet});


    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 300dpi),
      (min-resolution: 2dppx) {
      background: url(${BackgroundImageTablet2x});
      
    }
  }
  @media (min-width: 1440px) {
    margin-top: 31px;
    display: flex;
    background: url(${BackgroundImageDesktop});
    justify-content: center;

    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi) {
      background: url(${BackgroundImageDesktop2x});
 
    }
  }
`;
