import styled from "styled-components";
import { colors } from "../../../constants";

export const StyledList = styled.ul`
  margin-top: 12px;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
    gap: 16px;
    
  }
`;
export const Button = styled.button`
  display: flex;
  padding: 8px 30px;
  width: 280px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: ${colors.BLUE};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: 0px 0px 0px 0px rgba(64, 123, 255, 0.54);
  }
  @media (min-width: 768px) {
    width: 336px;
    margin-top:24px;
    margin-right:368px;
  }
`;
export const BtnText = styled.span`
  color: ${colors.WHITE};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
 

export const BenefitList = styled.li`
  width: 216px;
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    &:not(:first-child) {
      margin-top: 16px;
      margin-right:64px;
    }
  }
  @media (min-width: 768px) {
    width: 224px;
  }
  gap: 8px;
  `;

export const ContainerConsumption = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 1404px;
  }
  `;
export const H2 = styled.h2`
  width:246px;
  margin:0 34px 0 0 ;
   
    color: ${colors.GRAY};
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 42px;
      margin-right: 265px;
      width:439px;
    }
  `;
export const ParagrafOne = styled.p`
margin:16px 83px 24px 0;
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  width: 197px;
  @media (min-width: 768px) {
    margin-right: 300px;
    font-size: 26px;
    line-height: 32px;
    width: 404px;
    margin-right: 300px;
  }
`;
export const ParagrafTwo = styled.p`
  margin: 0;
  margin-right: 148px;
  @media (min-width: 768px) {
    margin-right: 572px;
  }
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const IconStyle = styled.div`
  width: 32px;
  height: 32px;
  stroke: ${colors.BLUE};
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;