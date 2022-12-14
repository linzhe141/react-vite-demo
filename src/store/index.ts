import { configureStore } from "@reduxjs/toolkit";
import { globalReducer, GlobalStateProps } from "./modules/global/global";
export type StoreProps = {
  global: GlobalStateProps;
};
export const store = configureStore({ reducer: { global: globalReducer } });
