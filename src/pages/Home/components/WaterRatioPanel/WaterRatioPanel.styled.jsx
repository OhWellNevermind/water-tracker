import styled from "styled-components";
export const WaterPanelContainer = styled.div`
  padding-bottom: 40px;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const TitleWaterPanel = styled.div`
  width: 280px;
  height: 82px;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    width: 356px;
    height: 90px;
    margin-right: 12px;
    margin-bottom: 0;
  }
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: end;
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media only screen and (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const ContainerBar = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 4px;
  width: 256px;
  height: 14px;
  @media only screen and (min-width: 768px) {
    width: 325px;
    height: 14px;
  }
`;
export const Bar = styled.div`
  position: relative;
  width: 256px;
  height: 8px;
  background-color: #d7e3ff;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 14px;
  @media only screen and (min-width: 768px) {
    width: 325px;
    height: 8px;
  }
`;
export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 10%;
  background-color: #9ebbff;
`;
export const Dot = styled.div``;

export const WaterPanel = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 768px) {
    width: 356px;
  }
`;

export const DecorWrap = styled.div`
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  margin-left: 10px;
  margin-right: 14px;
  margin-bottom: 4px;
  @media only screen and (min-width: 768px) {
    width: 325px;
    margin-top: 4px;
  }
`;

export const DecorList = styled.p`
  display: flex;
  margin: 0;
  padding: 0;

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
  list-style-type: none;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 768px) {
    width: 356px;
  }
`;

export const Start = styled.li`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
export const Middle = styled.li`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const End = styled.li`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const AddWater = styled.span`
  width: 94px;
  height: 20px;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Button = styled.button`
  display: inline-flex;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:active {
    border-radius: 10px;
    background-color: #407bff;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    margin-top: 41px;
    padding: 10px 104px;
  }
`;

/*import styled from "styled-components";

export const TitleWaterPanel = styled.div`
  width: 280px;
  height: 82px;
  //margin-bottom: 16px;
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: end;
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ContainerBar = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 4px;
  width: 256px;
  height: 14px;
`;
export const Bar = styled.div`
  position: relative;
  width: 256px;
  height: 8px;
  background-color: #d7e3ff;
  border-radius: 10px;
`;
export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 10%;
  background-color: #9ebbff;
`;
export const Dot = styled.div``;

export const WaterPanel = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 256px;
  height: 14px;
  flex-shrink: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  //margin-bottom: 16px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    background-position: left bottom;
    top: 100%;
    left: 50%;
    height: 8px;
    width: 1px;
    background-color: #d7e3ff;
  }
`;
export const DecorList = styled.p`
  /*   ::before {
    content: "";
    width: 100%;
    height: 1px;
    display: block;
    background-color: red;
  } */
/* color: #333333;

  display: block;
  text-align: center;
  text-decoration: none;
  &:before {
    content: "";
    position: relative;
    left: 0;
    top: 0;
    display: block;
    height: 100%;
    border-left: 10px solid red;
  } */
/*   position: relative;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-left: 10px solid red;
  } `;*/

/* export const Start = styled.span`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
export const Middle = styled.span`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const End = styled.span`
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const AddWater = styled.span`
  width: 94px;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Button = styled.button`
  display: inline-flex;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:active {
    border-radius: 10px;
    background-color: #407bff;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`; */
