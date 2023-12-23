import styled from "styled-components";
import BackgroundImageMobile from '../../../../src/assets/images/mobile/BackgroundMainPageMobile-min.png'
import BackgroundImageTablet from "../../../../src/assets/images/tablet/BackgroundMainPageTablet-min.png";
import BackgroundImageDesktop from "../../../../src/assets/images/desktop/BackgroundMainPageDesktop-min.png";
export const Container = styled.div`
  height: auto;
  max-width: 100%;
  width: 100vw;
  height: 100vh;


  @media (min-width: 320px) {
    background: url(${BackgroundImageMobile});
    background-size: cover;
  }
  @media (min-width: 768px) {
    background: url(${BackgroundImageTablet});
    background-size: cover;
  }
  @media (min-width: 1440px) {
    background: url(${BackgroundImageDesktop});
    width: 1404px;
    background-size: cover;
  }
`;
