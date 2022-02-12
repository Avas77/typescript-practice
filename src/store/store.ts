import { configureStore } from "@reduxjs/toolkit";
import ContactDataReducer from "../slices/contactSlice";
import BurgerIngredientReducer from "../slices/burgerIngredientSlice";

export const store = configureStore({
  reducer: {
    burger: BurgerIngredientReducer,
    contact: ContactDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
