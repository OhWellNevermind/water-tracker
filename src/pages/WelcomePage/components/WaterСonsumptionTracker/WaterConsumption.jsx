import {
  Button,
  BtnText,
  H2,
  BenefitList,
  ParagrafOne,
  ParagrafTwo,
  StyledList,
  ContainerConsumption,
  IconStyle,
} from "./WaterConsumption.styled";
import { CalendarIcon } from "../../../../components/icons/CalendarIcon";
import { StatisticIcon } from "../../../../components/icons/StatisticIcon";
import { PersonalSettingsIcon } from "../../../../components/icons/PersonalSettingsIcon";

const WaterConsumption = () => {
  const handleClick = () => {
    return (window.location.href = "/register");
  };

  return (
    <ContainerConsumption>
      <H2>Water consumption tracker</H2>
      <ParagrafOne>Record daily water intake and track</ParagrafOne>
      <ParagrafTwo>Tracker Benefits</ParagrafTwo>
      <StyledList>
        <BenefitList>
          <IconStyle>
            <CalendarIcon />
          </IconStyle>
          Habit drive
        </BenefitList>
        <BenefitList>
          <IconStyle>
            <StatisticIcon />
          </IconStyle>
          View statistics
        </BenefitList>
        <BenefitList>
          <IconStyle>
            <PersonalSettingsIcon />
          </IconStyle>
          Personal rate setting
        </BenefitList>
      </StyledList>
      <Button type="button">
        <BtnText onClick={handleClick}>Try tracker</BtnText>
      </Button>
    </ContainerConsumption>
  );
};

export default WaterConsumption;
