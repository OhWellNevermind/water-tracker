import styled from "styled-components";

export const DailyNormaContainer = styled.div`
  padding-bottom: 16px;
  @media only screen and (min-width: 768px) {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const DailyNormaBox = styled.div`
  @media only screen and (min-width: 768px) {
    /*  display: flex;
    justify-content: start;
    align-items: end;
    width: 164px;
    height: 74px; */
  }
`;
export const MyDailyNormaWrapper = styled.div`
  width: 164px;
  height: 74px;
  display: flex;
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid #ecf2ff;
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  @media only screen and (min-width: 768px) {
    height: 76px;
  }
`;

export const Title = styled.h2`
  margin: 0;
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
  align-items: end;
  width: 90px;
  height: 22px;
  @media only screen and (min-width: 768px) {
    width: 94px;
    height: 24px;
  }
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

export const PictureBox = styled.div`
  @media only screen and (min-width: 768px) {
    width: 518px;
    height: 386px;
    margin-left: 125px;
  }
`;
