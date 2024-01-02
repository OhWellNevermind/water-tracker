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

    default:
      return <></>;
  }
};
