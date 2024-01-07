import styled from "styled-components";
export const WaterPanelContainer = styled.div`
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  @media only screen and (min-width: 1440px) {
    width: 592px;
    gap: 23px;
    margin: 0;
  }
`;
export const TitleWaterPanel = styled.div`
  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 768px) {
    width: 356px;
    height: 90px;
  }
  @media only screen and (min-width: 1440px) {
    width: 391px;
  }
`;

export const Title = styled.p`
  width: 52px;
  margin-bottom: 8px;
  display: flex;
  color: #407bff;
  font-size: 18px;
  line-height: 24px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const ContainerBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    width: 325px;
    height: 14px;
  }
  @media only screen and (min-width: 768px) {
    width: 360px;
  }
`;
export const Bar = styled.div`
  position: relative;
  width: 256px;
  height: 8px;
  background-color: #d7e3ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 325px;
  }
  @media only screen and (min-width: 1440px) {
    width: 360px;
  }
`;
export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: #9ebbff;
  border-radius: 10px;
`;
export const Dot = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ percentage }) => `${percentage - 3}%`};
  width: 14px;
  height: 14px;
  border: solid 1px;
  border-radius: 50%;
  color: #407bff;
  background-color: #fff;
`;

export const WaterPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DecorWrap = styled.div`
  @media only screen and (max-width: 1440px) {
    margin: 0 auto;
  }
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;

  @media only screen and (min-width: 768px) {
    width: 325px;
  }
  @media only screen and (min-width: 1440px) {
    width: 360px;
  }
`;

export const DecorList = styled.p`
  display: flex;

  &::before {
    content: "";
    height: 8px;
    width: 1px;
    top: 100%;
    left: 0;
    background-color: #d7e3ff;
    display: inline-block;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 767px) {
    padding-left: 6px;
  }
  @media only screen and (min-width: 768px) {
    width: 356px;
    justify-content: center;
    gap: 123px;
  }
  @media only screen and (min-width: 1440px) {
    width: 360px;
    gap: 140px;
  }
`;

export const Start = styled.li`
  color: #407bff;
  font-size: 12px;
  line-height: 16px;
`;
export const Middle = styled.li`
  padding-left: 20px;
  color: #407bff;
  font-weight: 500;
  line-height: 20px;
`;
export const End = styled.li`
  color: #407bff;
  font-size: 12px;
  line-height: 16px;
`;

export const Button = styled.button`
  width: 280px;
  display: flex;
  padding: 6px 76px;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover,
  &:active {
    border-radius: 10px;
    background-color: #407bff;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 10px 104px;
  }
  @media only screen and (min-width: 1440px) {
    width: 178px;
    padding: 10px 30px;
  }
`;
export const AddWater = styled.span`
  width: 94px;
  height: 20px;
  color: #fff;
  font-weight: 500;
  line-height: 20px;
  @media only screen and (min-width: 1440px) {
    width: 84px;
    height: 24px;
    font-size: 18px;
    line-height: 24px;
  }
`;
