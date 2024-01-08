import styled from "styled-components";
import { colors } from "../../../../constants";

export const StyledList = styled.ul`
  margin-top: 12px;

  @media (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
  @media (min-width: 1440px) {
    display: block;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 8px 30px;
  width: 280px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
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
    padding: 10px 30px;
  }
  @media (min-width: 1440px) {
    width: 384px;
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
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 767px) {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
  @media (max-width: 1439px) {
    width: 224px;
  }
  @media (min-width: 1440px) {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
`;

export const ContainerConsumption = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 704px;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    width: 439px;
    margin-right: 81px;
  }
`;
export const H2 = styled.h2`
  width: 246px;
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
    width: 439px;
  }
`;
export const ParagrafOne = styled.p`
  margin-top: 16px;
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  width: 197px;
  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
    width: 404px;
  }
`;
export const ParagrafTwo = styled.p`
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
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
