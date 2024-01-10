import styled from "styled-components";

export const DailyNormaContainer = styled.div`
  margin-bottom: 232px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 326px;
  }
  @media only screen and (min-width: 1440px) {
    padding-bottom: 0;
    margin-bottom: 466px;
    margin-left: -70px;
  }
`;

export const MyDailyNormaWrapper = styled.div`
  width: 164px;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid #ecf2ff;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
`;

export const Title = styled.h2`
  width: 124px;
  margin-bottom: 12px;
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;
export const MyDailyNormaAndButton = styled.div`
  display: flex;
  gap: 12px;
`;
export const MyDailyNorma = styled.div`
  color: #407bff;
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EditButton = styled.button`
  cursor: pointer;
  color: #8baeff;
  font-size: 16px;
  line-height: 20px;
  border: none;
  background: #fff;
`;
