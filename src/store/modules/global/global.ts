import { createSlice } from "@reduxjs/toolkit";
export type GlobalStateProps = {
  token: string | null;
};
const globalSlice = createSlice({
  name: "global",
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
      localStorage.setItem("token", state?.token as string);
    },
    removeToken: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, removeToken } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
