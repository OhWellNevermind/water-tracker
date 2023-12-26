import styled from "styled-components";
import { colors } from "../../../constants";
export const Content = styled.div`
  padding: 24px 16px;

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
    margin: 60px 0 0 0 ;
    padding: 32px 24px;
  }
  @media (min-width: 1440px) {
    width: 494px;
    margin-top: 34px;
  
  }
`;

export const Topic = styled.p`
  color: ${colors.GRAY};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Container = styled.div`
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 494px;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const List = styled.li`
  &:not(:first-child) {
    margin-top: 16px;
  }
  color: ${colors.GRAY};
  text-decoration: none;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 0;
  position:relative;
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
  margin-top: 12px;
  @media (max-width:767px){
    padding-left:16px;
  }
`;