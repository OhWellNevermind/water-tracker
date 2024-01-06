import AddWater from "./AddWater/AddWater";
import DailyNorma from "./DailyNorma/DailyNorma";
import Logout from "./Logout/Logout";
import { TodayListModal } from "./TodayListModal/TodayListModal";
import { UserModal } from "./UserModal/UserModal";

export const ModalSelector = ({ modalName, closeModal }) => {
  switch (modalName) {
    case "settings":
      return (
        <UserModal
          onClose={() => {
            closeModal();
          }}
        />
      );
    case "logout":
      return (
        <Logout
          isLogout={true}
          onClose={() => {
            closeModal();
          }}
        />
      );
    case "addWater":
      return (
        <AddWater
          onClose={() => {
            closeModal();
          }}
        />
      );
    case "todayList":
      return (
        <TodayListModal
          onClose={() => {
            closeModal();
          }}
        />
      );
    case "delete":
      return (
        <Logout
          isDelete={true}
          onClose={() => {
            closeModal();
          }}
        />
      );
    case "dailyNorma":
      return (
        <DailyNorma
          onClose={() => {
            closeModal();
          }}
        />
      );

    default:
      return <></>;
  }
};
