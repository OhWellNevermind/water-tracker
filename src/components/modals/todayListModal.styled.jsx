import styled from "styled-components";
import { colors } from "../../constants";

export const Modal = styled.div`
  position: relative;
  padding: 24px 12px;
  width: 280px;
  border-radius: 10px;
  background: ${colors.WHITE};
`;

export const Title = styled.h3`
  width: 200px;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 24px;
`;
export const BackgroundPortion = styled.div`
  width: 256px;
  height: 52px;
  padding: 8px 24px;
  border-radius: 10px;
  background-color: ${colors.LIGHT_GRAY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const BackgroundValue = styled.div`
  width: 92px;
  height: 36px;
  background-color: ${colors.PROVINCIAL_PINK};
  border-radius: 40px;
`;

export const ValueWater = styled.p`
  width: 60px;
  height: 24px;
  color: ${colors.BLUE};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
`;

export const ValueTime = styled.p`
  width: 84px;
  height: 24px;
  display: flex;
  align-items: center;
`;

export const TitleCorrectEnteredData = styled.h3`
  color: ${colors.GRAY};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11;
  width: 172px;
  height: 20px;
  margin-bottom: 16px;
`;

export const AmountWater = styled.p`
  color: ${colors.GRAY};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  width: 182px;
  height: 20px;
  margin-bottom: 12px;
`;

export const AcounterWater = styled.div`
  width: 194px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const MinusCount = styled.div`
  border-radius: 30px;
  border: 1px solid ${colors.LIGHT_BLUE};
  width: 44px;
  height: 44px;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundValueWater = styled.div`
  border-radius: 40px;
  background-color: ${colors.PROVINCIAL_PINK};
  width: 92px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ValueWaterCounter = styled.p`
  color: #407bff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
`;
export const PlusCount = styled.div`
  border-radius: 30px;
  border: 1px solid ${colors.LIGHT_BLUE};
  width: 44px;
  height: 44px;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleRecordingTime = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
`;

export const EnterValueWater = styled.h3`
  width: 256px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 256px;
  height: 44px;
  color: ${colors.BLUE};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 6px;
  border: 1px solid ${colors.PROVINCIAL_PINK};
  margin-bottom: 24px;
`;

export const ScoreBoard = styled.p`
  color: ${colors.BLUE};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${colors.BLUE};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  width: 256px;
  height: 36px;
  color: ${colors.WHITE};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  padding: 8px 30px;
`;
export const CloseButton = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 12px;
  top: 24px;
`;
