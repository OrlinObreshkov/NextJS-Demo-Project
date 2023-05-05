import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionData: {
    sessionEmail: "",
    sessionPassword: "",
  },
};

const sessionStorageSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    setEmailData(state, action) {
      state.sessionData.sessionEmail = action.payload;
      sessionStorage.setItem("Email", action.payload);
    },
    setPasswordData(state, action) {
      state.sessionData.sessionPassword = action.payload;
      sessionStorage.setItem("Password", action.payload);
    },
    clearStorage(state) {
      state.sessionData.sessionEmail = '';
      state.sessionData.sessionPassword = '';
    }
  },
});

export const sessionStorageActions = sessionStorageSlice.actions;
export default sessionStorageSlice.reducer;
