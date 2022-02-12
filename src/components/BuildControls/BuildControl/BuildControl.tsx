import React from "react";
import "./BuildControl.css";

interface IBuildControl {
  label: string;
  addIngredient: () => void;
  removeIngredient: () => void;
  disabled: boolean;
}

const BuildControl = ({
  label,
  addIngredient,
  removeIngredient,
  disabled,
}: IBuildControl) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button className="Less" disabled={disabled} onClick={removeIngredient}>
        Less
      </button>
      <button className="More" onClick={addIngredient}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
