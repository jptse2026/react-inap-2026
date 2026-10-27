import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// A partir de React-Redux 9.1+ / Redux Toolkit 2.0+ se usa .withTypes()
export const useNumDispatch = useDispatch.withTypes<AppDispatch>();
export const useNumSelector = useSelector.withTypes<RootState>();