import styled from "styled-components";

export const TodayWaterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  background: #ecf2ff;
  padding: 24px 8px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  overflow-y: auto;
  @media only screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
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
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const TodayWrap = styled.div`
  width: 254px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media only screen and (min-width: 768px) {
    width: 656px;
  }
`;

export const List = styled.div`
  display: flex;
  width: 254px;
  height: 26px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #d7e3ff;
  @media only screen and (min-width: 768px) {
    width: 646px;
    height: 36px;
  }
`;
export const SublistAll = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  //margin-bottom: 12px;
  @media only screen and (min-width: 768px) {
    width: 646px;
    justify-content: start;
  }
`;
export const Sublist = styled.li`
  display: flex;
  margin-bottom: 12px;
  margin-top: 12px;
  @media only screen and (min-width: 768px) {
    //justify-content: center;
    align-items: center;
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
  //margin-right: 38px;
  @media only screen and (min-width: 768px) {
    width: 82px;
  }
`;

export const PencilAndBasket = styled.div`
  display: flex;
  margin-left: 38px;
  @media only screen and (min-width: 768px) {
    margin-left: 390px;
    //justify-content: center;
  }
`;
export const Pencil = styled.span`
  display: flex;
  //margin-left: 38px;
  align-items: center;
`;
export const Basket = styled.span`
  display: flex;
  margin-left: 18px;
  align-items: center;
  /*  @media only screen and (min-width: 768px) {
    margin-left: 390px;
  } */
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  background: #ecf2ff;
  border: none;
  margin: 0;
  padding: 0;
  margin-top: 12px;
  @media only screen and (min-width: 768px) {
    width: 346px;
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
  @media only screen and (min-width: 768px) {
    width: 82px;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
  }
`;
