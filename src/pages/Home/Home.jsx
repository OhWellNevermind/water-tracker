import { useState } from "react";
import BaseModalWrap from "../../components/modals/ModalWrap/ModalWrap";

export const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ fontWeight: 500, fontSize: 32 }}>Home</div>
      <button
        style={{ width: "50px", height: "30px" }}
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      {open && (
        <BaseModalWrap Onclose={() => setOpen(false)}>
          <div
            style={{
              width: "400px",
              height: "500px",
              backgroundColor: "white",
            }}
          >
            <h2>Some content</h2>
          </div>
        </BaseModalWrap>
      )}
    </>
  );
};
