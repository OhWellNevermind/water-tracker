import styled from "styled-components";
import { keyframes, css } from "styled-components";

const popUp = keyframes`
        0% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0.3;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
`;

const popOut = keyframes`
        0% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0;
    }
`;
const animModeOverlay = (p) => {
  switch (p.$closing) {
    case false:
      return css`
        animation: ${popUp} 350ms ease 1 normal forwards;
      `;
    case true:
      return css`
        animation: ${popOut} 350ms 350ms ease 1 normal forwards;
      `;
    default:
      return null;
  }
};

const popUpC = keyframes`
  0% {
      opacity: 0.3;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `;

const popOutC = keyframes`
  0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `;
const animModeContent = (p) => {
  switch (p.$closing) {
    case false:
      return css`
        animation: ${popUpC} 350ms 350ms ease 1 normal forwards;
      `;
    case true:
      return css`
        animation: ${popOutC} 350ms ease 1 normal forwards;
      `;
    default:
      return null;
  }
};

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 100;
  ${animModeOverlay}
`;

export const ContentWrap = styled.div`
  opacity: 0;
  ${animModeContent}
`;

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
