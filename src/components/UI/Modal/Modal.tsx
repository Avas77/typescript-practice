import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = ({
  children,
  show,
  closeModal,
}: {
  children: React.ReactNode;
  show: boolean;
  closeModal: () => void;
}) => (
  <>
    <Backdrop show={show} clicked={closeModal} />
    <div
      className="Modal"
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      {children}
    </div>
  </>
);

export default Modal;
