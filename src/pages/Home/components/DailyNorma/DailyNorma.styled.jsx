import styled from "styled-components";

export const DailyNormaContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 290px;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    width: 704px;
    height: 386px;
  }
  @media only screen and (min-width: 1440px) {
    padding-bottom: 0;
    width: 624px;
    height: 548px;
    margin-bottom: 0;
  }
`;

export const MyDailyNormaWrapper = styled.div`
  display: flex;
  width: 164px;
  height: 74px;
  display: flex;
  padding: 8px 20px;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  border-radius: 10px;
  border: 1px solid #ecf2ff;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    height: 76px;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 38px;
  }
`;

export const Title = styled.h2`
  width: 124px;
  height: 24px;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const MyDailyNormaAndButton = styled.div`
  display: flex;
  gap: 12px;
`;
export const MyDailyNorma = styled.div`
  color: #407bff;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EditButton = styled.button`
  color: #8baeff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border: none;
  background: #fff;
`;
