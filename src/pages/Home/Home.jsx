import { useState } from "react";
import { colors } from "../../constants";
import { UserModal } from "../../components/modals/UserModal/UserModal";
import { TodayListModal } from "../../components/modals/TodayListModal/todayListModal";

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
