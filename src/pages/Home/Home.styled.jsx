import styled from "styled-components";

export const ContainerHome = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    width: 706px;
  }
  @media only screen and (min-width: 1440px) {
    width: 1216px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const DailyNormaAndWaterRatioPanel = styled.div`
  @media only screen and (min-width: 1440px) {
    width: 624px;
    height: 680px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 56px;
    margin-top: 22px;
  }
`;
export const WrapTodayAndMonth = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 836px;
  padding: 24px 8px;
  margin-bottom: 40px;
  background: #ecf2ff;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media only screen and (min-width: 768px) {
    width: 704px;
    height: 688px;
    padding: 32px 24px;
    margin-bottom: 44px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
    height: 680px;
    margin-top: 20px;
    border-radius: 10px;
    background: #ecf2ff;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }
`;
