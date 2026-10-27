import { configureStore } from "@reduxjs/toolkit";
import numerosReducer from "../features/numerosSlice";

export const store = configureStore({
  reducer: { numeros: numerosReducer },
});

