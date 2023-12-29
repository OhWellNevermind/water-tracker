import { useState } from "react";
import { colors } from "../../constants";
import { UserModal } from "../../components/modals/UserModal/UserModal";
import Logout from "../Logout/Logout";
export const Home = () => {
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const openUserModal = () => {
    setUserModalOpen(true);
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const closeModals = () => {
    setUserModalOpen(false);
    setLogoutModalOpen(false);
  };

  return (
    <>
      <div style={{ fontWeight: 500, fontSize: 32 }}>Home</div>
      <button
        style={{ width: "50px", height: "30px", backgroundColor: colors.BLUE }}
        onClick={openUserModal}
      >
     User Modal
      </button>

      <button
        style={{ width: "50px", height: "30px", backgroundColor: colors.GREEN }}
        onClick={openLogoutModal}
      >
       Logout Modal
      </button>

      {isUserModalOpen && <UserModal onClose={closeModals} />}

      {isLogoutModalOpen && <Logout isLogout onClose={closeModals} />}
    </>
  );
};
