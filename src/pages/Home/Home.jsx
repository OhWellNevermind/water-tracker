import { useState } from "react";
import { colors } from "../../constants";
import { TodayListModal } from "../../components/modals/todayListModal";
import { UserModal } from "../../components/modals/UserModal/UserModal";

export const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <TodayListModal />
      <div style={{ fontWeight: 500, fontSize: 32 }}>Home</div>
      <button
        style={{ width: "50px", height: "30px", backgroundColor: colors.BLUE }}
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      {open && <UserModal setIsOpen={setOpen} />}
    </>
  );
};
