import React from "react";
import "./Backdrop.css";

const backdrop = (props: { show: boolean; clicked: () => void }) =>
  props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null;

export default backdrop;
