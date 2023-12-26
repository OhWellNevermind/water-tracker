
import WhyDrinkWater from "../Home/WhyDrinkWater/WhyDrinkWater";
import WaterConsumption from "../Home/WaterСonsumptionTracker/WaterConsumption";
import { Container } from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <Container>
      <WaterConsumption />
      <WhyDrinkWater/>
    </Container>
  );
};

export default WelcomePage;
