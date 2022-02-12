import React from "react";
import "./BurgerIngredient.css";

const BurgerIngredient = ({ type }: { type: string }) => {
  switch (type) {
    case "bread-bottom":
      return <div className="BreadBottom"></div>;
    case "bread-top":
      return (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seed2"></div>
        </div>
      );
    case "meat":
      return <div className="Meat"></div>;
    case "cheese":
      return <div className="Cheese"></div>;
    case "salad":
      return <div className="Salad"></div>;
    case "bacon":
      return <div className="Bacon"></div>;
    default:
      return null;
  }
};

export default BurgerIngredient;
