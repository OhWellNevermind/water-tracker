import WhyDrinkWater from "./components/WhyDrinkWater/WhyDrinkWater";
import WaterConsumption from "./components/WaterСonsumptionTracker/WaterConsumption";
import { Background, Container } from "./WelcomePage.styled";
import { useEffect } from "react";
const WelcomePage = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <Container>
      <WaterConsumption />
      <WhyDrinkWater />
      <Background />
    </Container>
  );
};

export default WelcomePage;
