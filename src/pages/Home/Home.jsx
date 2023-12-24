import { useState } from "react";
import BaseModalWrap from "../../components/modals/ModalWrap/ModalWrap";
import { colors } from "../../constants";
import DailyNorma from "../../components/modals/DailyNorma/DailyNorma";

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
      {open && (
        <BaseModalWrap onClose={() => setOpen(false)}>
          <DailyNorma onClose={() => setOpen(false)}/>
        </BaseModalWrap>
      )}
    </>
  );
};
