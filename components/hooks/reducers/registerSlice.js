import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  error: null,
};

const registerReducerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearForm: (state) => {
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
      state.error = "";

    },
  },
});

export const registerActions = registerReducerSlice.actions;
export default registerReducerSlice.reducer;
