import { useState } from "react";
import { colors } from "../../constants";
import { UserModal } from "../../components/modals/UserModal/UserModal";
import AddWater from "../../components/modals/AddWater/AddWater";
import BaseModalWrap from "../../components/modals/ModalWrap/ModalWrap";

export const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div style={{ fontWeight: 500, fontSize: 32 }}>Home</div>
      <button
        style={{ width: "50px", height: "30px", backgroundColor: colors.BLUE }}
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      {/* {open && <UserModal setIsOpen={setOpen} />} */}
      {open && (
        <BaseModalWrap onClose={() => setOpen(false)}>
          <AddWater onClose={() => setOpen(false)} />
        </BaseModalWrap>
      )}
    </>
  );
};
