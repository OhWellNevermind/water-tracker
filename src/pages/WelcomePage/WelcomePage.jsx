import WhyDrinkWater from "./components/WhyDrinkWater/WhyDrinkWater";
import WaterConsumption from "./components/WaterСonsumptionTracker/WaterConsumption";
import { Container } from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <Container>
      <WaterConsumption />
      <WhyDrinkWater />
    </Container>
  );
};

export default WelcomePage;
