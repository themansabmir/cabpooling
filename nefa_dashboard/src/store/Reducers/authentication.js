import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isLoggedin: false,
  isError: "",
  isLoading: "",
  error: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedin = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoggedin = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export const userStatus = (state) => state?.auth?.user;
export const logingState = (state) => state?.auth?.isLoggedin;

export default authenticationSlice.reducer;
