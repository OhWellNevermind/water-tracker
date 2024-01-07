import styled from "styled-components";

export const ContainerHome = styled.div`
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 706px;
  }
  @media only screen and (min-width: 1440px) {
    width: 1216px;
    /* padding-top: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DailyNormaAndWaterRatioPanel = styled.div`
  padding-top: 24px;
  width: 280px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    width: 624px;
  }
`;
export const WrapTodayAndMonth = styled.div`
  margin: 0 auto;
  width: 280px;
  padding: 24px 8px;
  background: #ecf2ff;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media only screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
    border-radius: 10px;
    background: #ecf2ff;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }
`;

export const StyledBackground = styled.div`
  position: fixed;
  top: 108px;
  left: 0;

  width: 100%;
  height: 100vh;

  background-image: url("/src/assets/images/mobile/BackgroundBubblesHomeMobile-min.png");
  background-repeat: no-repeat;
  background-size: auto;
  z-index: -2;
  @media (min-width: 321px) {
    background-size: cover;
  }
  @media (min-width: 768px) {
    background-image: url("/src/assets/images/tablet/BackgroundBubblesHomeTablet-min.png");
    top: 72px;
    height: 100%;
    /* left: -20px; */
  }
  @media (min-width: 1440px) {
    background-image: url("/src/assets/images/desktop/BackgroundBubblesHomeDesktop-min.png");
    background-size: contain;
    top: 100px;
    left: -20px;
  }
`;

export const Bottle = styled.div`
  background: url("/src/assets/images/mobile/BottleHomeMobile-min.png")
    bottom/contain no-repeat;
  z-index: -1;
  position: fixed;
  top: 162px;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  height: 208px;
  @media (min-width: 768px) {
    background: url("/src/assets/images/tablet/BottleHomeTablet-min.png") center
      no-repeat;
    top: 40px;
    /* left: 112px; */
    height: 518px;
    width: 386px;
  }
  @media (min-width: 1440px) {
    background: url("/src/assets/images/desktop/BottleHomeDesktop-min.png")
      center/contain no-repeat;
    left: 20px;
    top: 70px;
    height: 548px;
    width: 738px;
    transform: translateX(0);
  }
`;
