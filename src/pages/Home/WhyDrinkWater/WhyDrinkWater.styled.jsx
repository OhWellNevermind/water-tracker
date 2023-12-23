import styled from "styled-components";
import { colors } from "../../../constants";
export const Content = styled.div`
  padding: 24px 16px;
  margin-left: 0;
  margin-top: 40px;
  border-radius: 10px;
  background-color: ${colors.LIGHT_GRAY};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media (min-width: 320px) {
    background-size: cover;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    width: 494px;
    margin-top: 60px;
    margin-right: 210px;
    padding: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 1404px;
    margin-top: 34px;
  }
`;

export const Topic = styled.p`
  margin: 0 0 12px 0;
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  @media (min-width: 768px) {
    margin: 0 0 12px 0;
  }
`;
export const Container = styled.div`
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 704px;
  }
`;
export const List = styled.li`
  gap: 8px;
  &:not(:first-child) {
    margin-top: 16px;
  }
  display: inline-flex;
  align-items: center;
  color: ${colors.GRAY};
  text-decoration: none;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 0;
  position:relative;
  margin-left:16px;
  &:before {
    content: "";
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${colors.BLUE};
    @media (max-width : 767px){
      position: absolute;
      left: -16px; 
      top: 50%; 
      transform: translateY(-50%);

    }
  }
`;

export const Lists = styled.ul`
  margin: 0;
  padding: 0;

`;