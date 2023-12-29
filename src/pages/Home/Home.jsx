import { useState } from "react";
import { colors } from "../../constants";

import { Header } from "../../components/Header/Header";
import { UserModal } from "../../components/modals/UserModal/UserModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/user/operations";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const [open, setOpen] = useState(true);
  return (
    <>
      <Header />
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
