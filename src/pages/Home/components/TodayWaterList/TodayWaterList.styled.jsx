import styled from "styled-components";

export const TodayWaterListContainer = styled.div`
  margin-bottom: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 264px;

  @media only screen and (min-width: 768px) {
    width: 656px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 0;
    width: 544px;
    margin-bottom: 24px;
    border-radius: initial;
    box-shadow: initial;
    overflow-y: initial;
  }
`;
export const Today = styled.p`
  width: 72px;
  margin: 0;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 8px;
  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
    margin-top: 8px;
  }
`;

export const TodayWrap = styled.div`
  width: 254px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media only screen and (min-width: 768px) {
    width: 654px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 254px;
  height: 200px;
  padding: 0;
  margin: 0;

  @media only screen and (min-width: 768px) {
    width: 646px;
    height: 188px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
`;
export const SublistAll = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  margin-top: 12px;
  border-bottom: 1px solid #d7e3ff;
  @media only screen and (min-width: 768px) {
    width: 646px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
`;
export const Sublist = styled.div`
  display: flex;
  @media only screen and (min-width: 768px) {
    align-items: center;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
`;
export const NumberMl = styled.span`
  width: 60px;
  color: #407bff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const GlassSpan = styled.span`
  display: flex;
  margin-right: 12px;
  @media only screen and (min-width: 768px) {
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;
export const MLSpan = styled.span`
  display: flex;
  margin-right: 12px;
  @media only screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;
export const Time = styled.span`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 56px;
  @media only screen and (min-width: 768px) {
    width: 82px;
  }
`;

export const PencilAndBasket = styled.div`
  display: flex;
  @media only screen and (min-width: 768px) {
  }
`;
export const Pencil = styled.span`
  display: flex;
  align-items: center;
`;
export const Basket = styled.span`
  display: flex;
  margin-left: 18px;
  align-items: center;
`;

export const Button = styled.button`
  width: 90px;
  height: 20px;
  display: flex;
  gap: 8px;
  background: #ecf2ff;
  border: none;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 768px) {
    width: 106px;
    height: 24px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
export const AddWaterButton = styled.span`
  color: #407bff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border: none;
  width: 73px;
  height: 20px;
  white-space: nowrap;
  @media only screen and (min-width: 768px) {
    width: 82px;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
  }
`;
