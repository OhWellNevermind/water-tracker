import styled from "styled-components";

export const ContainerHome = styled.div`
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 706px;
  }
  @media only screen and (min-width: 1440px) {
    width: 1216px;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DailyNormaAndWaterRatioPanel = styled.div`
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
