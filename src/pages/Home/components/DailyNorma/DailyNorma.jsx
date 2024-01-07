//import { useState } from "react";
import { useSelector } from "react-redux";
import {
  DailyNormaContainer,
  MyDailyNormaWrapper,
  Title,
  MyDailyNormaAndButton,
  MyDailyNorma,
  EditButton,
} from "./DailyNorma.styled";
import { selectDailyNorma } from "../../../../redux/user/selectors";

export const DailyNorma = ({ setModalName }) => {
  const dailyNorma = useSelector(selectDailyNorma);

  return (
    <DailyNormaContainer>
      <MyDailyNormaWrapper>
        <Title>My daily norma</Title>
        <MyDailyNormaAndButton>
          <MyDailyNorma>{dailyNorma} L</MyDailyNorma>
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
