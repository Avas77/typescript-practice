import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { ingredientsType } from "../Burger";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  closeModal,
  clicked,
}: {
  closeModal: () => void;
  clicked: () => void;
}) => {
  const { ingredients, totalPrice } = useAppSelector((state) => state.burger);
  let ingredientSummary = Object.keys(ingredients).map((igKey) => (
    <li>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
      {ingredients[igKey as ingredientsType]}
    </li>
  ));
  return (
    <div>
      <h2>Your Order</h2>
      <p>A delicious burger with all of your ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <strong>Total Price: {totalPrice.toFixed(2)}</strong>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={closeModal}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={clicked}>
        Continue
      </Button>
    </div>
  );
};

export default OrderSummary;
