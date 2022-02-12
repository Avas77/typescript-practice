import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";
import { useAppSelector } from "../../hooks/hooks";

export type ingredientsType = "salad" | "bacon" | "meat" | "cheese";

const Burger = () => {
  const ingredients = useAppSelector((state) => state.burger.ingredients);
  let transformedIngredients: JSX.Element[] | JSX.Element;
  transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey as ingredientsType])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding Ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
