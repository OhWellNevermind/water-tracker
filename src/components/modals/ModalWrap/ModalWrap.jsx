import { createPortal } from "react-dom";
import { Backdrop, ContentWrap, Wrap } from "../ModalWrap.styled";
import { useEffect, useState } from "react";

const BaseModalWrap = ({ children, close}) => {
  const [closing, setClosing] = useState(false);
  document.body.style.overflow = "hidden";
  const CloseModal = (e) => {
    if (e.code === "Escape" || e.target === e.currentTarget) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        document.body.style.overflow = "auto";
        close()
      }, 750);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", CloseModal);
    return () => {
      window.removeEventListener("keydown", CloseModal);
    };
  }, []);
  return createPortal(
    <Backdrop id="modalWrap" $closing={closing} onClick={CloseModal}>
      <Wrap>
        <ContentWrap $closing={closing}>{children}</ContentWrap>
      </Wrap>
    </Backdrop>,
    document.querySelector("#popup-root")
  );
};

export default BaseModalWrap;
