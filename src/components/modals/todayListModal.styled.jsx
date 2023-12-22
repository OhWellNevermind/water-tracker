import styled from "styled-components";
import { CirclePlus } from "../icons";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(17, 17, 17, 0.4);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 100vh;
  border-radius: 10px;
  background: #fff;
`;

export const ShadowCirclePlus = styled(CirclePlus)`
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
`;
