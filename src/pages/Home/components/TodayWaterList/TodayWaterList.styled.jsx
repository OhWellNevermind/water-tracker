import styled from "styled-components";

export const TodayWaterListContainer = styled.div`
  width: 264px;
  height: 258px;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    width: 656px;
    height: 260px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`;
export const Today = styled.p`
  width: 72px;
  height: 30px;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 4px;
  @media only screen and (min-width: 768px) {
    height: 32px;
    margin-bottom: 12px;
    font-size: 26px;
    line-height: 32px;
  }
`;

export const TodayWrap = styled.div`
  width: 264px;
  height: 212px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 204px;
    background-color: #d7e3ff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 8px;
  }

  @media only screen and (min-width: 768px) {
    width: 656px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  //  width: 254px;

  @media only screen and (min-width: 768px) {
    /*  width: 646px;
    height: 188px; */
  }
  @media only screen and (min-width: 1440px) {
    /*   width: 544px; */
  }
`;
export const SublistAll = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  padding-top: 12px;
  border-bottom: 1px solid #d7e3ff;
  @media only screen and (min-width: 768px) {
    align-items: center;
  }
`;
export const Sublist = styled.div`
  display: flex;
  align-items: center;
`;
export const NumberMl = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
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
`;

export const Pencil = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const Basket = styled.button`
  display: flex;
  margin-left: 18px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Button = styled.button`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ecf2ff;
  border: none;
  margin-top: 12px;

  svg {
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 768px) {
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
