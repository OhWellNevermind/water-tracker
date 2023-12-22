import { colors } from "../../constants";
import { CirclePlus } from "../icons";
import { Backdrop, Modal } from "./todayListModal.styled";

export const TodayListModal = () => {
  return (
    <Backdrop>
      <Modal>
        <h3>todayListModal</h3>
        <CirclePlus width={44} height={44} stroke={colors.BLUE} />
      </Modal>
    </Backdrop>
  );
};
