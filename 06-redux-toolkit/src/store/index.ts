import { configureStore } from "@reduxjs/toolkit";
import { numerosReducer } from "../features/numerosSlice";

export const store = configureStore({
  reducer: { numeros : numerosReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
