import WhyDrinkWater from "./components/WhyDrinkWater/WhyDrinkWater";
import WaterConsumption from "./components/WaterСonsumptionTracker/WaterConsumption";
import { Background, Container } from "./WelcomePage.styled";
import { useEffect, useState } from "react";
import BaseModalWrap from "../../components/modals/ModalWrap/ModalWrap";
import AddWater from "../../components/modals/AddWater/AddWater";
const WelcomePage = () => {
  const [open, setOpen] = useState(true);

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
