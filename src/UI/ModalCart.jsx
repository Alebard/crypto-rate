import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);

  & div {
    z-index: 5;
  }
`;

function ModalCart({ children }) {
  return <Modal>{children}</Modal>;
}

export default ModalCart;
