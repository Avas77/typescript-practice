import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addIngredient,
  removeIngredient,
  updatePurchasable,
} from "../../slices/burgerIngredientSlice";
import { ingredientsType } from "../Burger/Burger";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

interface IControl {
  label: string;
  value: ingredientsType;
}

const controls: IControl[] = [
  { label: "Salad", value: "salad" },
  { label: "Bacon", value: "bacon" },
  { label: "Meat", value: "meat" },
  { label: "Cheese", value: "cheese" },
];

const BuildControls = ({ openModal }: { openModal: () => void }) => {
  const { ingredients, totalPrice, purchasable } = useAppSelector(
    (state) => state.burger
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(updatePurchasable());
  }, [dispatch, ingredients]);

  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addIngredient={() => dispatch(addIngredient(ctrl.value))}
          removeIngredient={() => dispatch(removeIngredient(ctrl.value))}
          disabled={ingredients[ctrl.value] <= 0}
        />
      ))}
      <button
        className="OrderButton"
        disabled={!purchasable}
        onClick={openModal}
      >
        Order
      </button>
    </div>
  );
};

export default BuildControls;
