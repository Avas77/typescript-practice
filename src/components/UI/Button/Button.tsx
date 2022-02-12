import React from "react";
import "./Button.css";

type ButtonType = "Success" | "Danger";

const button = (props: {
  btnType: ButtonType;
  clicked: () => void;
  children: React.ReactNode;
}) => (
  <button className={`Button ${props.btnType}`} onClick={props.clicked}>
    {props.children}
  </button>
);

export default button;
