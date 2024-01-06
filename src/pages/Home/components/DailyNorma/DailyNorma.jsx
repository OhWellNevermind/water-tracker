//import { useState } from "react";
import {
  DailyNormaContainer,
  MyDailyNormaWrapper,
  Title,
  MyDailyNormaAndButton,
  MyDailyNorma,
  EditButton,
} from "./DailyNorma.styled";

//import { DailyNormaModal } from "./DailyNormaModal";

export const DailyNorma = ({ setModalName }) => {
  //const [dailyNorm, setDailyNorm] = useState(1.5);
  //const [isModalOpen, setIsModalOpen] = useState(false);

  /*   const handleEditClick = () => {
    setIsModalOpen(true);
  }; */

  return (
    <DailyNormaContainer>
      <MyDailyNormaWrapper>
        <Title>My daily norma</Title>
        <MyDailyNormaAndButton>
          <MyDailyNorma>{1.5} L</MyDailyNorma>
          <EditButton
            onClick={() => {
              setModalName("dailyNorma");
            }}
          >
            Edit
          </EditButton>
        </MyDailyNormaAndButton>
      </MyDailyNormaWrapper>
      {/*   {isModalOpen && <DailyNormaModal onClose={() => setIsModalOpen(false)} />} */}
    </DailyNormaContainer>
  );
};
