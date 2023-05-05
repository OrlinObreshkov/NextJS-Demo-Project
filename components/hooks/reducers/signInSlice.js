import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInEmail: "",
  signInPassword: "",
  error: null
};

const signInSlice = createSlice({
  name: "sign-in",
  initialState: initialState,
  reducers: {
    setSignInEmail(state, action) {
      state.signInEmail = action.payload;
      state.error = null
    },
    setSignInPassword(state, action) {
      state.signInPassword = action.payload;
      state.error = null
    },
    clearForm: (state) => {
      state.signInEmail = "";
      state.signInPassword = "";
    },
    setError(state, action) {
        state.error = action.payload
    }
  },
});

export const signInActions = signInSlice.actions;
export default signInSlice.reducer;
