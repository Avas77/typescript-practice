import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ingredientsType } from "../components/Burger/Burger";
import { INGREDIENT_PRICES } from "../enums/IngredientPrices";

interface IIngredientState {
  ingredients: {
    salad: number;
    bacon: number;
    meat: number;
    cheese: number;
  };
  totalPrice: number;
  purchasable: boolean;
  loading: boolean;
}

const initialState: IIngredientState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },
  totalPrice: 4,
  purchasable: false,
  loading: false,
};

const burgerIngredientSlice = createSlice({
  name: "BurgerIngredient",
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<ingredientsType>) {
      state.ingredients[action.payload] = state.ingredients[action.payload] + 1;
      state.totalPrice = state.totalPrice + INGREDIENT_PRICES[action.payload];
    },
    removeIngredient(state, action: PayloadAction<ingredientsType>) {
      if (state.ingredients[action.payload] <= 0) {
        return;
      }
      state.ingredients[action.payload] -= 1;
      state.totalPrice -= INGREDIENT_PRICES[action.payload];
    },
    updatePurchasable(state) {
      const sum = Object.keys(state.ingredients)
        .map((ingredient) => state.ingredients[ingredient as ingredientsType])
        .reduce((sum, el) => sum + el, 0);
      state.purchasable = sum > 0;
    },
    loadingStart(state) {
      state.loading = true;
    },
    loadingStop(state) {
      state.loading = false;
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
  updatePurchasable,
  loadingStart,
  loadingStop,
} = burgerIngredientSlice.actions;

export default burgerIngredientSlice.reducer;
