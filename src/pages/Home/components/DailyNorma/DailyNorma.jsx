import {
  DailyNormaContainer,
  DailyNormaBox,
  MyDailyNormaWrapper,
  Title,
  MyDailyNormaAndButton,
  MyDailyNorma,
  EditButton,
  PictureBox,
} from "./DailyNorma.styled";
//import DailyNormaModal from "./DailyNormaModal";

import bottleMob from "../../../../assets/images/mobile/BottleHomeMobile-min.png";
import bottleMob2x from "../../../../assets/images/mobile/BottleHomeMobile@2x-min.png";
import bottleTablet from "../../../../assets/images/tablet/BottleHomeTablet-min.png";
import bottleTablet2x from "../../../../assets/images/tablet/BottleHomeTablet@2x-min.png";
import bottleDesktop from "../../../../assets/images/desktop/BottleHomeDesktop-min.png";
import bottleDesktop2x from "../../../../assets/images/desktop/BottleHomeDesktop@2x-min.png";

export const DailyNorma = () => {
  return (
    <DailyNormaContainer>
      <DailyNormaBox>
        <MyDailyNormaWrapper>
          <Title>My daily norma</Title>
          <MyDailyNormaAndButton>
            <MyDailyNorma>{1.5} L</MyDailyNorma>
            <EditButton>Edit</EditButton>
          </MyDailyNormaAndButton>
        </MyDailyNormaWrapper>
      </DailyNormaBox>
      <PictureBox>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${bottleDesktop} 1x, ${bottleDesktop2x} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${bottleTablet} 1x, ${bottleTablet2x} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 320px)"
            srcSet={`${bottleMob} 1x, ${bottleMob2x} 2x`}
            type="image/png"
          />

          <img src={bottleDesktop} alt="Bottle" />
        </picture>
      </PictureBox>
    </DailyNormaContainer>
  );
};
