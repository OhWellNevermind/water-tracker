import WhyDrinkWater from "./components/WhyDrinkWater/WhyDrinkWater";
import WaterConsumption from "./components/WaterСonsumptionTracker/WaterConsumption";
import { BG, Container } from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <Container>
      <WaterConsumption />
      <WhyDrinkWater />
      <BG/>
    </Container>
  );
};

export default WelcomePage;
